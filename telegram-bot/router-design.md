# Router / Dispatcher — Design

Il dispatcher è il **workflow chiave** dell'intero Command Center. Riceve TUTTI gli update Telegram, autorizza, instrada e risponde.

## Diagramma del flusso

```
┌───────────────────────────────┐
│  Telegram Trigger             │
│  (riceve update da BotAPI)    │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│  Extract & normalize          │
│  - chat_id, user, text        │
│  - command, args              │
│  - callback_data (se inline)  │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│  AUTHORIZE                    │
│  chat_id ∈ TELEGRAM_ADMIN_     │
│  CHAT_IDS o whitelist client? │
└──┬─────────────────────────┬──┘
   │ NO                      │ YES
   ▼                         ▼
┌──────────────┐    ┌─────────────────────────┐
│ Reply:       │    │  ROUTE                   │
│ "non auth"   │    │  switch (command):       │
│ + log        │    │   /ping       → ping     │
└──────────────┘    │   /leads      → leads    │
                    │   /report     → report   │
                    │   ...                    │
                    │  switch (callback):      │
                    │   cb:approve  → approve  │
                    │   cb:menu:*   → menus    │
                    │   ...                    │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Execute Workflow node   │
                    │ (sub-workflow target)   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Send Telegram response  │
                    │ (testo / keyboard /     │
                    │  documento)             │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Log run in Airtable     │
                    └─────────────────────────┘
```

## Step 1 — Extract & normalize

Il Telegram Trigger restituisce un payload che varia per messaggio normale vs callback. Normalizziamo a una struttura unica:

```javascript
// Function node "Normalize"
const u = $json;
const msg = u.message || u.edited_message;
const cb = u.callback_query;

let chat_id, user, text, type, command, args = [], callback_data = null;

if (cb) {
  type = "callback";
  chat_id = cb.message.chat.id;
  user = cb.from.username || cb.from.first_name;
  callback_data = cb.data;
  text = cb.data;
  // cb:approve:abc123 → command="cb:approve", args=["abc123"]
  const parts = cb.data.split(":");
  command = parts.slice(0, 2).join(":");
  args = parts.slice(2);
} else if (msg) {
  type = "message";
  chat_id = msg.chat.id;
  user = msg.from.username || msg.from.first_name;
  text = msg.text || "";
  // /leads 20 → command="/leads", args=["20"]
  const parts = text.trim().split(/\s+/);
  command = parts[0].toLowerCase();
  args = parts.slice(1);
}

return [{ json: { type, chat_id, user, text, command, args, callback_data, raw: u } }];
```

## Step 2 — Authorize

```javascript
// Function node "Authorize"
const adminIds = ($env.TELEGRAM_ADMIN_CHAT_IDS || "").split(",").map(s => s.trim()).filter(Boolean);
const clientWhitelist = $('Get Client Whitelist').first().json.client_chat_ids || [];

const chatId = String($json.chat_id);
const role = adminIds.includes(chatId) ? "admin"
           : clientWhitelist.includes(chatId) ? "client"
           : null;

if (!role) {
  return [{ json: { ...$json, authorized: false, role: null } }];
}
return [{ json: { ...$json, authorized: true, role } }];
```

`Get Client Whitelist` è un nodo Airtable che pull la tabella `clients` filtrando `telegram_chat_id` non vuoto.

## Step 3 — Route

Switch node con regole su `$json.command`:

| Match | Output → workflow |
|---|---|
| `=/ping` | `_diagnostics/ping__v1` |
| `=/leads` | `lead-gen/leads-list__v1` |
| `=/report` | `reporting/on-demand__v1` |
| `=/clienti` | `reporting/clients-list__v1` |
| `=/scadenze` | `reminder/scadenze__v1` |
| `=/approva` | `_router/approvals-pending__v1` |
| `=/outreach` | `outreach/cold-email-trigger__v1` |
| `=/start` o `=/help` | output direct (no sub-workflow) |
| `=/menu` | output direct con menu inline |
| `=cb:approve` o `=cb:reject` | `_router/approval-resume__v1` |
| `=cb:menu:*` | output direct (rebuild menu) |
| _default_ | output "comando non riconosciuto" |

## Step 4 — Execute sub-workflow

Per i casi che invocano un sub-workflow: nodo "Execute Workflow" (sync) passando come input:
```json
{
  "chat_id": 123,
  "user": "...",
  "role": "admin",
  "args": ["..."]
}
```

Il sub-workflow restituisce:
```json
{
  "reply_text": "...",
  "reply_markup": { ... },     // opzionale, inline keyboard
  "reply_document": "..."      // opzionale, URL/path
}
```

## Step 5 — Reply

Telegram node "Send Message" con:
- `chat_id`: `{{$json.chat_id}}`
- `text`: `{{$json.reply_text}}`
- `parse_mode`: `Markdown` (default)
- `reply_markup`: `{{$json.reply_markup}}` se presente

Se `reply_document` presente → "Send Document" node invece.

## Step 6 — Log

Airtable node insert in `bot_command_log` con:
- timestamp
- chat_id, user, role
- command, args (joined)
- workflow target
- success/failure
- duration_ms

## Inline menu principale (esempio)

```json
{
  "inline_keyboard": [
    [
      {"text": "📊 Lead", "callback_data": "cb:menu:leads"},
      {"text": "📈 Report", "callback_data": "cb:menu:report"}
    ],
    [
      {"text": "👥 Clienti", "callback_data": "cb:menu:clienti"},
      {"text": "📅 Scadenze", "callback_data": "cb:menu:scadenze"}
    ],
    [
      {"text": "✉️ Outreach", "callback_data": "cb:menu:outreach"},
      {"text": "✅ Approva", "callback_data": "cb:menu:approve"}
    ]
  ]
}
```

Salvato in `menus/main.json`. Sotto-menu in `menus/sub-<topic>.json`.

## Approvazioni human-in-the-loop

Pattern per workflow che richiedono conferma:

1. Workflow X prepara la draft
2. Workflow X chiama "Telegram Send" con messaggio di anteprima + bottoni:
   ```
   ✉️ Sto per inviare 50 cold email a "SaaS founder Italia". Procedo?
   [✅ Approva] [❌ Annulla]
   ```
   con `callback_data` = `cb:approve:run_<uuid>` / `cb:reject:run_<uuid>`
3. Workflow X salva lo stato (Airtable `pending_approvals` con run_id, payload, scade_a)
4. Workflow X **termina** (no Wait node — perché può essere lungo)
5. Quando arriva callback `cb:approve:run_<uuid>` al dispatcher → invoca `_router/approval-resume__v1`
6. `approval-resume` carica lo stato dal DB, valida che il run_id esista e non sia scaduto, esegue l'azione finale, aggiorna il record

Questo pattern è meglio del Wait node perché:
- Resiste a restart di n8n
- Permette TTL dell'approvazione (24h default)
- Audit log persistente

## Sicurezza

- Rate limit: max 30 comandi / minuto / chat_id (Function node con stato in Redis o Airtable counter)
- Blacklist: tabella `bot_blacklist` per chat_id da bloccare
- Audit: ogni run loggato; allarme Telegram a admin se >10 fail consecutivi da stesso chat_id

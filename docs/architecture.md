# Architettura

## Vista d'insieme

```
┌─────────────────────┐
│   Telegram Bot      │  ← Command Center (UI per te + clienti autorizzati)
│  (Bot già attivo)   │
└──────────┬──────────┘
           │ webhook update
           ▼
┌─────────────────────────────────────────────────────────┐
│               n8n self-hosted (orchestratore)           │
│                                                         │
│   ┌─────────────────┐    ┌──────────────────────────┐   │
│   │  Telegram       │ →  │  Router / Dispatcher     │   │
│   │  Trigger node   │    │  (switch su comando)     │   │
│   └─────────────────┘    └────────────┬─────────────┘   │
│                                       │                 │
│      ┌────────────────────────────────┼──────────────┐  │
│      ▼                                ▼              ▼  │
│   agency-internal              clients/<nicchia>  shared│
│   (lead-gen,                   (workflow per      (sub) │
│    outreach,                    cliente)                │
│    onboarding,                                          │
│    reporting)                                           │
└────────┬───────────────────┬───────────────┬────────────┘
         │                   │               │
         ▼                   ▼               ▼
   Lead source         CRM / DB         AI providers
   (Apollo,            (Airtable,       (Anthropic,
    LinkedIn,           HubSpot,         OpenAI)
    web scraping)       Baserow)
         │                   │               │
         └───────────────────┼───────────────┘
                             ▼
                     Email / Calendar
                     (Brevo, Resend,
                      Google Cal, PEC)
```

## Principi architetturali

### 1. Telegram = UI, n8n = Logica
Il bot non contiene logica di business: è solo "telecomando". Riceve comandi dell'utente o callback inline → inoltra a n8n via webhook → n8n esegue → n8n risponde via Telegram API. Questo permette di iterare la logica senza toccare la configurazione del bot.

### 2. Un dispatcher centrale
Tutti gli update Telegram arrivano a un unico workflow `_router/telegram-dispatcher`. Questo workflow:
- Verifica autorizzazione (chat ID nella whitelist?)
- Esegue routing su `text` / `callback_data`
- Invoca il sub-workflow corretto via "Execute Workflow" node
- Restituisce la risposta all'utente

### 3. Separazione agency vs client
- `agency-internal/` = workflow che girano per l'agenzia (acquisire e servire clienti)
- `clients/<nicchia>/<cliente>/` = workflow venduti/consegnati a un cliente specifico
- `shared/` = funzioni riusabili (es. AI scoring, normalizzazione dati, GDPR consent check)

### 4. Idempotenza e retry
Ogni workflow esterno (API call) deve:
- Avere `Continue On Fail` sui nodi a rischio
- Logging strutturato (success / failure / payload) → tabella `n8n_run_log` su Airtable o sheet
- Retry policy esplicita (3 tentativi, backoff esponenziale)

### 5. Approvazioni human-in-the-loop
Per azioni costose o irreversibili (invio email cold a 100 contatti, post social, fatturazione):
1. Workflow prepara la draft → notifica Telegram con pulsanti `✅ Approva` / `❌ Annulla`
2. Workflow attende il callback (Wait node)
3. Su approvazione, esegue; su annullo, chiude run.

## Flussi principali

### Flusso A — Lead-gen interna

```
Schedule (lun 9:00) → Apollo search → Filter (B2B IT, dimensione)
   → AI scoring (Claude) → Upsert CRM
   → Telegram notify "[N] nuovi lead, top score: X" con bottone /leads
```

### Flusso B — Cold outreach con approvazione

```
Trigger manuale via /outreach → Pull lead da CRM (status="new")
   → Generazione email AI personalizzata per nicchia
   → Telegram preview + Approva/Annulla
   → Send via Brevo → Update CRM (status="contacted")
```

### Flusso C — Comando /report cliente

```
/report → Dispatcher → Workflow report_<cliente>
   → Pull KPI da CRM/Analytics → Render HTML (template in /templates/reports)
   → PDF → Send via Telegram document
```

### Flusso D — Reminder scadenze (commercialisti/avvocati)

```
Schedule (giornaliero 8:00) → Pull scadenze < 7gg da Airtable
   → Filtra per cliente → Notify Telegram (al cliente o a te)
   → Log invio
```

## Sicurezza & accessi

- **Credenziali** sempre in n8n Credentials, mai in JSON
- **Webhook secret**: ogni webhook esposto deve verificare un header `X-Auth-Token` confrontato con env var
- **Telegram chat ID whitelist**: prima cosa che fa il dispatcher
- **Rate limit** sul dispatcher: max N comandi/min per chat ID
- **Audit log**: ogni run tracciato (chi, cosa, quando, esito)

## Roadmap evolutiva

| Fase | Cosa |
|---|---|
| **Now** | File-based + curl/import manuale + bot router base |
| **+30gg** | MCP server n8n + Telegram in `.mcp.json` per pilotare da Claude direttamente |
| **+60gg** | Dashboard interna (n8n + Grafana o Metabase) per metriche |
| **+90gg** | White-label: template multi-tenant per replicare setup su nuovi clienti |

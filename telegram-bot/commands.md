# Telegram Bot — Command Registry

Registry di tutti i comandi disponibili. Ogni nuovo comando va registrato qui, poi mappato nel dispatcher e implementato in un workflow.

## Convenzioni

- **Auth levels**: `admin` (tu) | `client` (chat ID di un cliente specifico) | `public` (chiunque)
- Comandi con argomenti: `/comando <arg>` — argomenti separati da spazio
- Callback inline (bottoni): `cb:<azione>:<param1>:<param2>`

## Comandi attivi

| Comando | Descrizione | Workflow target | Auth | Args | Note |
|---|---|---|---|---|---|
| `/start` | Welcome + menu principale | `_router/telegram-dispatcher` (built-in) | public | — | Reply automatica |
| `/help` | Lista comandi disponibili | `_router/telegram-dispatcher` (built-in) | public | — | Reply automatica |
| `/menu` | Menu inline navigazione | `_router/telegram-dispatcher` (built-in) | admin | — | |
| `/ping` | Test connettività | `_diagnostics/ping__v1` | admin | — | |
| `/leads` | Ultimi N lead | `lead-gen/leads-list__v1` | admin | `[N]` default 10 | TBD |
| `/lead <id>` | Dettaglio lead | `lead-gen/lead-detail__v1` | admin | id richiesto | TBD |
| `/report <cliente>` | Genera report al volo | `reporting/on-demand__v1` | admin | cliente | TBD |
| `/clienti` | Lista clienti | `reporting/clients-list__v1` | admin | — | TBD |
| `/scadenze` | Scadenze prossime | `reminder/scadenze__v1` | admin/client | `[gg]` default 7 | TBD |
| `/approva` | Pending approvals | `_router/approvals-pending__v1` | admin | — | TBD |
| `/outreach <campagna>` | Triggera campagna cold | `outreach/cold-email-trigger__v1` | admin | campagna | TBD |
| `/onboard <email>` | Avvia onboarding cliente | `onboarding/start__v1` | admin | email | TBD |

## Callback inline standard

| Callback data | Azione | Workflow |
|---|---|---|
| `cb:approve:<run_id>` | Approva esecuzione in attesa | `_router/approval-resume` |
| `cb:reject:<run_id>` | Rifiuta esecuzione in attesa | `_router/approval-resume` |
| `cb:menu:home` | Torna al menu principale | dispatcher |
| `cb:menu:leads` | Sotto-menu lead | dispatcher |
| `cb:menu:report` | Sotto-menu report | dispatcher |
| `cb:menu:clienti` | Sotto-menu clienti | dispatcher |

## Comandi pianificati (backlog)

- `/social <piattaforma> <testo>` — pubblica su social del cliente
- `/fattura <cliente> <importo>` — emetti fattura SDI
- `/pec` — riassunto PEC ricevute oggi (per commercialisti)
- `/calendar` — appuntamenti di oggi
- `/note <testo>` — quick note in Airtable
- `/mood` — survey settimanale ai clienti

## Risposta non riconosciuta

Se il dispatcher riceve un comando non in lista:
> 🤔 Comando non riconosciuto. Usa `/help` per vedere quelli disponibili.

## Logging comandi

Ogni invocazione viene loggata in tabella Airtable `bot_command_log` con:
- timestamp
- chat_id, username
- command, args
- workflow target
- exit status
- duration ms

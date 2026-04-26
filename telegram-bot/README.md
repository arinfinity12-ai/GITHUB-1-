# Telegram Bot — Command Center

Il bot Telegram è la **UI principale** dell'agenzia: pilota workflow, riceve notifiche, dà approvazioni human-in-the-loop.

## Architettura

```
Utente → /comando → Bot Telegram → webhook → n8n dispatcher → workflow target → risposta
```

Tutta la logica vive in n8n. Il bot non gira codice: è solo telecomando.

## File in questa cartella

- [`commands.md`](commands.md) — registry di tutti i comandi `/xxx` disponibili, ownership, autorizzazione
- [`router-design.md`](router-design.md) — design del dispatcher e flusso di routing
- `menus/` — JSON delle inline keyboard (menu principale, sotto-menu)
- `webhooks/` — documentazione di ogni endpoint webhook esposto su n8n e cosa fa

## Setup operativo

1. Bot già creato via BotFather, token in `.env` come `TELEGRAM_BOT_TOKEN`
2. Importare workflow `n8n-workflows/agency-internal/_router/telegram-dispatcher__v1.json` in n8n
3. Attivarlo, copiare il webhook URL del Trigger Telegram
4. Registrare quel URL come webhook del bot:
   ```bash
   curl "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=<URL_DISPATCHER>"
   ```
5. Verificare con `/ping` da Telegram

## Comandi base disponibili (MVP)

| Comando | Descrizione | Auth |
|---|---|---|
| `/start` | Welcome + menu principale | tutti |
| `/menu` | Mostra menu inline | admin |
| `/ping` | Test connettività | admin |
| `/leads` | Mostra ultimi lead nel CRM | admin |
| `/report` | Genera report cliente al volo | admin |
| `/clienti` | Lista clienti attivi | admin |
| `/scadenze` | Scadenze fiscali/cause prossime | admin + cliente |
| `/approva` | Lista azioni in attesa di approvazione | admin |

Dettaglio in [`commands.md`](commands.md).

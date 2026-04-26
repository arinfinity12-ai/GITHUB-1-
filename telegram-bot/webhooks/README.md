# Webhook endpoints

Lista dei webhook esposti su n8n per il Command Center. Ogni endpoint ha un suo workflow associato.

## Endpoint principale

| Path n8n | Workflow | Scopo |
|---|---|---|
| `/webhook/telegram-dispatcher` | `_router/telegram-dispatcher__v1` | Riceve TUTTI gli update Telegram |

URL completo: `${N8N_WEBHOOK_BASE}/telegram-dispatcher`

Configurazione webhook bot:
```bash
curl "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" \
  -d "url=${N8N_WEBHOOK_BASE}/telegram-dispatcher" \
  -d "secret_token=${TELEGRAM_WEBHOOK_SECRET}"
```

Verifica:
```bash
curl "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo"
```

## Endpoint diagnostici

| Path n8n | Workflow | Scopo |
|---|---|---|
| `/webhook/ping` | `_diagnostics/ping__v1` | Health check |

Test:
```bash
curl "${N8N_WEBHOOK_BASE}/ping"
# Atteso: {"ok":true,"ts":"2026-04-26T..."}
```

## Endpoint di approvazione esterna (futuri)

| Path n8n | Workflow | Scopo |
|---|---|---|
| `/webhook/approve/:run_id` | `_router/approval-resume__v1` | Resume di run in attesa (anche da link email, non solo Telegram) |
| `/webhook/lead-form` | `lead-gen/inbound-form__v1` | Form di sito → CRM |
| `/webhook/stripe` | `billing/stripe-events__v1` | Eventi Stripe (subscription, payment) |

## Sicurezza

Tutti i webhook devono:
1. Validare un secret header `X-Auth-Token` (eccetto Telegram che usa il proprio `X-Telegram-Bot-Api-Secret-Token`)
2. Loggare ogni invocazione (anche fallite) in `webhook_log`
3. Rate limit a livello Caddy/nginx davanti a n8n (max 100 req/min per IP)

Variabile env: `WEBHOOK_AUTH_TOKEN` da impostare in `.env` e nei nodi n8n IF di validazione.

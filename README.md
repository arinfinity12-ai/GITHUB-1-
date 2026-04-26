# n8n B2B Automation Workspace

Workspace versionato di un'**agenzia di marketing/automation B2B in Italia** che opera su 5 nicchie verticali (software/SaaS, agenzie marketing, consulenti/liberi professionisti, avvocati, commercialisti).

Tutta l'orchestrazione viene gestita su **n8n self-hosted**, con un **bot Telegram** come Command Center per pilotare workflow, ricevere notifiche e dare approvazioni.

## Struttura

```
n8n-workflows/
  agency-internal/    # workflow per l'agenzia (lead-gen, outreach, onboarding, reporting)
  clients/            # workflow consegnati ai clienti, raggruppati per nicchia
  shared/             # sub-workflow riusabili (AI scoring, GDPR check, ecc.)
telegram-bot/         # design del bot: comandi, menu, mappatura webhook
docs/                 # architettura, strategia, naming, GDPR, stack Italia
templates/            # email cold outreach, report, prompt AI in italiano
_archive/             # contenuti precedenti del repo (video editor)
```

## Modello di lavoro "Git as source of truth"

1. Sviluppi workflow in n8n UI (più veloce per il visual)
2. Esporti il JSON e lo committi nella cartella corretta
3. Naming convention: `[scope]__[categoria]__[azione]__v[N].json`
   Es: `agency__leadgen__apollo-scrape__v1.json`
4. Le modifiche/refactor vengono fatte sul JSON nel repo e reimportate su n8n
5. Secrets MAI in JSON: usare credenziali n8n + variabili `.env`

## Setup iniziale

```bash
cp .env.example .env
# Editare .env con i propri valori (n8n URL, API key, Telegram token, ecc.)
```

Documenti chiave da leggere nell'ordine:

1. [`docs/architecture.md`](docs/architecture.md) — flusso Telegram → n8n → tools
2. [`docs/strategy.md`](docs/strategy.md) — roadmap 30/60/90 + offerta per nicchia
3. [`docs/naming-convention.md`](docs/naming-convention.md) — convention workflow + tag n8n
4. [`docs/gdpr-italia.md`](docs/gdpr-italia.md) — checklist compliance
5. [`telegram-bot/router-design.md`](telegram-bot/router-design.md) — design del Command Center

## Test end-to-end del Command Center

Dopo aver popolato `.env`:

1. Importare `n8n-workflows/agency-internal/_diagnostics/ping__v1.json` su n8n
2. Attivare il webhook, copiare URL
3. Da terminale: `curl <webhook-url>` → deve rispondere `{ok:true, ts:...}`
4. Importare `n8n-workflows/agency-internal/_router/telegram-dispatcher__v1.json`
5. Configurare il webhook Telegram verso quel workflow
6. Mandare `/ping` al bot → deve rispondere con timestamp

Se entrambi i passi funzionano, l'infrastruttura Command Center è OK.

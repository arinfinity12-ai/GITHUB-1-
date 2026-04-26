# Naming Convention

## File JSON workflow

Pattern: `[scope]__[categoria]__[azione]__v[N].json`

- **scope**: `agency` | `client-<nicchia>` | `client-<nomecliente>` | `shared`
- **categoria**: kebab-case, max 20 char (es. `leadgen`, `outreach`, `reporting`, `onboarding`, `nurture`, `intake`, `scadenze`)
- **azione**: kebab-case che descrive cosa fa (es. `apollo-scrape`, `cold-email-send`, `monthly-report`)
- **vN**: versione semantica corta (incrementare quando cambia struttura, non per fix minori)

Esempi:

```
agency__leadgen__apollo-scrape__v1.json
agency__outreach__cold-email-send__v2.json
agency__reporting__monthly-recap__v1.json
client-saas__nurture__post-trial__v1.json
client-avvocati__intake__nuovo-cliente__v1.json
client-acme__reporting__weekly-kpi__v3.json   # cliente specifico
shared__ai-scoring__b2b-italia__v1.json
shared__gdpr-consent-check__v1.json
```

## Tag dentro n8n

Usa i tag n8n per filtrare velocemente nella UI:

| Tag | Quando |
|---|---|
| `agency` | Workflow dell'agenzia |
| `client:<nome>` | Workflow specifico di un cliente |
| `niche:<nicchia>` | software-saas / agenzie / freelance / avvocati / commercialisti |
| `prod` | In produzione attivo |
| `staging` | In test |
| `draft` | In sviluppo |
| `cron` | Triggerato da schedule |
| `webhook` | Esposto via webhook |
| `telegram` | Invocato da bot Telegram |
| `human-approval` | Richiede approvazione human-in-the-loop |
| `gdpr-sensitive` | Tratta dati personali |

## Naming nodi dentro workflow

- Verbo all'imperativo: `Fetch lead from Apollo`, `Score with Claude`, `Upsert into CRM`
- Inglese (l'ecosistema n8n è inglese; codice italiano per i prompt e contenuti utente)
- Evitare nomi default tipo "HTTP Request1", "Set", "IF" — sempre rinominare
- Step di fallback/error: prefisso `[error] ...`
- Wait / approval: prefisso `[wait] ...`

## Naming credenziali n8n

Pattern: `<provider>__<scope>` (lowercase)

```
apollo__agency
brevo__agency
openai__agency
airtable__agency
airtable__client-acme
google-cal__client-rossi-avvocato
telegram__bot-agency
```

Mai una credenziale "generica" — sempre legare allo scope per audit e revoche.

## Naming workflow dentro n8n (display name)

Pattern UI: `[ICONA] [SCOPE] · [Categoria] · [Azione] (vN)`

Icone consigliate:
- 🤖 router/dispatcher
- 🎯 lead-gen
- ✉️ outreach
- 📊 reporting
- 🚀 onboarding
- 🔔 reminder/scadenze
- 🧪 diagnostics/test
- 🔧 shared/utility

Esempi UI:

```
🤖 AGENCY · Router · Telegram Dispatcher (v1)
🎯 AGENCY · Leadgen · Apollo Scrape (v1)
✉️ AGENCY · Outreach · Cold Email Send (v2)
📊 CLIENT-ACME · Reporting · Weekly KPI (v3)
🔧 SHARED · AI Scoring · B2B Italia (v1)
```

## Branch git

- `main` — solo workflow stabili, taggati come `prod` su n8n
- `claude/<feature>` — sviluppo feature (questo branch: `claude/n8n-b2b-automation-FmdMk`)
- `client/<nome>` — branch per onboarding cliente in corso
- `experiment/<nome>` — proof of concept

## Commit message

Convenzione concisa:

```
<tipo>(<scope>): <descrizione breve>

tipi: feat | fix | refactor | docs | chore | wip
scope: agency | client-<x> | shared | docs | bot | infra
```

Esempi:
- `feat(agency): add Apollo lead-gen workflow v1`
- `refactor(shared): extract AI scoring into sub-workflow`
- `docs(strategy): update Q2 pricing matrix`
- `fix(bot): correct chat ID whitelist parsing`

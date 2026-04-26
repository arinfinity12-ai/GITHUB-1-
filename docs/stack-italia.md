# Stack Italia — integrazioni specifiche

Considerazioni sullo stack tecnico per chi opera in Italia, in particolare per nicchie regolamentate (avvocati, commercialisti).

## Email transazionale & marketing

| Provider | Pro | Contro | Quando |
|---|---|---|---|
| **Brevo** (ex Sendinblue) | UE, GDPR-friendly, Italian support, free tier 300 email/giorno | Rate limit gratuito basso | Default per agenzia + clienti piccoli |
| **Resend** | API moderna, ottima developer experience | US-based (DPA OK ma extra-UE) | Per sviluppatori, transactional |
| **Mailgun EU** | EU region disponibile | Più caro | Volume alto |
| **SMTP custom** (Aruba, Register) | Italiano | Deliverability scarsa | Sconsigliato per cold |

## CRM / Database

| Provider | Pro | Contro | Quando |
|---|---|---|---|
| **Airtable** | Veloce, UI ottima, n8n integration nativa | US-based, prezzi crescenti | Default per agenzia |
| **Baserow** | Open source, self-hostable, EU | Meno feature | Quando il cliente vuole on-premise |
| **NocoDB** | Open source, self-hostable | UI meno polished | Self-host avanzato |
| **HubSpot** | Free tier potente | Lock-in alto | Clienti che vogliono CRM "vero" |
| **Pipedrive** | Sales-focused, EU available | Costoso | Clienti sales-driven |

## Calendar & booking

- **Cal.com** (open source, self-hostable) → ottimo per controllo + GDPR
- **Calendly** → comodo ma US
- **Google Calendar** API → indispensabile per chi usa Workspace

## Document generation

- **DocxTemplater** (n8n community node) per Word/PDF da template
- **Carbone.io** (UE, hostabile) per documenti complessi
- **Google Docs API** se cliente già su Workspace

## Pagamenti & fatturazione

| Provider | Note |
|---|---|
| **Stripe** | Gold standard, supporta SDD per Italia (RID) |
| **GoCardless** | Solo SDD, ottimo per ricorrenti B2B |
| **Fatture in Cloud** | Italiano, fa anche SDI, API solida |
| **Aruba Fattura Elettronica** | Standard italiano, API ostiche |
| **Acube** | Provider SDI moderno con API REST decenti |

### Fatturazione elettronica SDI

Workflow tipo per emissione fattura:

```
Trigger (cliente firma contratto) → Genera dati fattura
   → Crea XML FatturaPA → Invia ad Acube/FattureInCloud
   → Salva su Drive cliente → Notifica Telegram
```

Codice destinatario / PEC vanno raccolti in onboarding.

### PEC

- **Aruba PEC** (più diffusa)
- **Register.it PEC**
- **InfoCert PEC**

Per leggere PEC programmaticamente: IMAP standard verso il server PEC del provider. Username = indirizzo PEC, password = password account.

Per inviare: SMTP del provider PEC (porta 465 SSL).

Use case classico per commercialisti: monitorare PEC inbox → estrarre fatture/comunicazioni → archiviare e notificare cliente via Telegram.

## AI providers

| Provider | Per cosa | Note |
|---|---|---|
| **Anthropic Claude** | Reasoning, scrittura italiana di qualità, scoring | Default per content e analisi |
| **OpenAI** | Embeddings, transcription (Whisper), DALL-E | Per task non-conversazionali |
| **Mistral** | EU-based, italiano OK | Quando GDPR è blocker |
| **Local (Ollama)** | Self-hosted, privacy massima | Avvocati che non vogliono cloud |

## Dati B2B Italia

| Source | Pro | Contro |
|---|---|---|
| **Apollo.io** | Database mondiale, filtri ottimi | US, dati IT non sempre aggiornati |
| **LinkedIn Sales Navigator** | Dati più freschi su persone IT | Costoso, scraping rischioso |
| **Cribis / Cerved** | Italiani, completi su aziende | API enterprise, costosi |
| **Atoka** (Cerved) | Self-service, filtri B2B IT | Pricing tier-based |
| **Telemaketing.it / dati pubblici** | A volte gratuiti | Qualità variabile |
| **Registro Imprese** (api visure) | Ufficiale | Per anagrafica/visure, non lead-gen |

## Altri

- **Google Workspace**: ovunque, indispensabile per Drive/Calendar/Docs
- **Telegram Bot API**: gratuita, ottima per Command Center
- **Loom**: demo video personalizzate
- **Tally / Typeform**: form raccolta lead
- **Hetzner / OVH (FR/DE)**: hosting EU per n8n e Baserow self-hosted

## Considerazioni pratiche per nicchia

### Avvocati
- Spesso non vogliono cloud US per dati clienti → preferire stack EU/self-hosted
- Pec + firma digitale spesso integrate in gestionali (Cliens, Fattura Avvocato) → API limitate
- Workflow tipici: intake nuovo cliente, calendario udienze, reminder scadenze, generazione bozze

### Commercialisti
- Stack legato a software gestionali (TeamSystem, Zucchetti, Wolters Kluwer) → API a volte assenti
- PEC e SDI centrali nella vita quotidiana
- Workflow tipici: scadenze fiscali, raccolta documenti dai clienti, comunicazioni F24, reminder pagamenti

### Software/SaaS
- Stack moderno, API ovunque
- Pain: lead scoring, demo booking, churn early-warning, content syndication

### Agenzie marketing
- Già usano molti tool (Notion, Slack, Asana) → integrazioni multiple
- Pain: reporting clienti, social scheduling, white-label dashboard

### Consulenti / freelance
- Tech savviness variabile
- Pain: pipeline costante, follow-up, fatturazione, raccolta testimonianze

# Strategia — Roadmap 30/60/90 + Offerta per nicchia

## Posizionamento

**"Automation agency for Italian B2B"** — non vendiamo "siti" o "ads": vendiamo **sistemi automatizzati** che fanno girare lead-gen, nurturing, delivery e reporting senza intervento umano costante. Il vantaggio competitivo è la combinazione **n8n + AI italiana + verticali specifici**.

Cliente ideale (ICP):
- B2B italiano, 5–50 dipendenti
- Vende servizi a ticket medio-alto (>5k€)
- Ha già un CRM o è disposto ad adottarne uno
- Soffre di operazioni manuali ripetitive

## Roadmap operativa

### Fase 1 — Day 0–30: Fondamenta + acquisizione

**Obiettivo**: avere il sistema interno funzionante e i primi 2–3 clienti pilota.

- [ ] Workspace n8n stabile + bot Telegram Command Center attivo
- [ ] Workflow interni: lead-gen Apollo + cold email + reporting
- [ ] Sito/landing minimale con case studies "fittizie" (demo personali) o portfolio
- [ ] Outreach personale a 100 prospect (LinkedIn + email) nelle 5 nicchie
- [ ] **Offerta pilot**: 990€ setup + 290€/mese per 3 mesi (sconto 50% per i primi 3 clienti in cambio di case study)
- [ ] Demo standardizzata (15 min Loom) di ogni pacchetto verticale

**KPI**: 3 clienti firmati entro day 30, MRR ≥ 870€

### Fase 2 — Day 30–60: Delivery + ottimizzazione

**Obiettivo**: consegnare bene ai pilot, formalizzare i 5 pacchetti.

- [ ] Onboarding standard documentato (`docs/onboarding-cliente.md`)
- [ ] Template workflow per ognuna delle 5 nicchie pronto in `n8n-workflows/clients/<nicchia>/_template/`
- [ ] Pricing page pubblica con i 5 pacchetti
- [ ] 2 contenuti / settimana su LinkedIn (case study, demo, tip n8n)
- [ ] Sistema di referral (un cliente porta cliente = 1 mese gratis)

**KPI**: 7 clienti totali, MRR ≥ 2.000€, NPS pilot ≥ 8

### Fase 3 — Day 60–90: Scale + automatizzazione vendita

**Obiettivo**: rendere replicabile e iniziare a delegare.

- [ ] Sales funnel automatizzato (lead magnet → email sequence → demo booking)
- [ ] White-label: setup di un template "agenzia in scatola" replicabile in 1 giorno
- [ ] Primo contractor / freelance a supporto delivery
- [ ] Community / newsletter "Automation Italia B2B" per nurturing organico

**KPI**: 12+ clienti, MRR ≥ 4.000€, 1 caso studio pubblico per nicchia

## Offerta per nicchia (matrice)

| Nicchia | Pain dominante | Workflow killer | Setup | Mensile |
|---|---|---|---|---|
| **Software / SaaS** | Lead-gen e nurturing post-trial | Apollo→AI scoring→CRM + sequenza email post-signup | 1.500€ | 390€ |
| **Agenzie marketing** | Reporting clienti manuale | Dashboard automatizzato + social scheduler white-label | 1.200€ | 290€ |
| **Consulenti / freelance** | Mancanza pipeline costante | Lead magnet → CRM → nurture → calendario booking | 990€ | 190€ |
| **Avvocati** | Gestione appuntamenti + documenti | Intake clienti + reminder cause + generazione bozze | 1.800€ | 390€ |
| **Commercialisti** | Scadenze + raccolta documenti | Calendario fiscale automatico + reminder + raccolta SDI/PEC | 1.500€ | 390€ |

## Bundle e add-on

- **Multi-canale outreach** (email + LinkedIn): +100€/mese
- **AI personalization avanzata** (prompt Italian-tuned per settore): +50€/mese
- **Reporting white-label custom**: +200€ setup
- **Integrazione PEC/SDI**: +500€ setup (solo avvocati/commercialisti)

## Canali di acquisizione

1. **Outbound personale** (mese 1): LinkedIn + email cold a ICP, manuale poi automatizzato
2. **Content** (mese 2+): post LinkedIn + thread X + YouTube short con demo concreti
3. **Community** (mese 3+): newsletter + podcast + meetup locali
4. **Partnership** (mese 3+): software house e consulenti complementari (es. fiscalisti che vendono il pacchetto a colleghi)

## Stack di vendita

- **CRM agency**: Airtable o Baserow (lo stesso che vendi ai clienti = dogfooding)
- **Calendar**: Cal.com (open source) o Calendly
- **Demo**: Loom (registrate) + Google Meet (live)
- **Proposta**: PDF generato da n8n con template DocxTemplater
- **Firma**: Signaturit / Yousign / Dropbox Sign (compliance UE)
- **Pagamento**: Stripe (con SDD per Italia)

## KPI dashboard (da implementare entro fase 2)

- MRR
- Numero clienti attivi per nicchia
- Conversion rate demo → cliente
- LTV / CAC
- Run n8n / mese (volume)
- NPS clienti

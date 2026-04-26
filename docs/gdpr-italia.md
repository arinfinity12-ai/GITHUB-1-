# GDPR & Compliance Italia

> Questo documento NON è consulenza legale. È una checklist operativa basata su prassi diffuse. Per l'attivazione reale consigliato consulto con DPO o avvocato specializzato.

## Principi di base che ci toccano

1. **Base giuridica** (art. 6 GDPR): per ogni trattamento devo poter dichiarare quale base mi autorizza (consenso, contratto, legittimo interesse, ecc.)
2. **Trasparenza** (art. 13): informativa accessibile a chi è oggetto del trattamento
3. **Minimizzazione**: raccolgo solo dati necessari
4. **Retention**: cancello quando non servono più
5. **Diritti dell'interessato** (artt. 15–22): accesso, rettifica, cancellazione, portabilità, opposizione
6. **Sicurezza** (art. 32): misure tecniche/organizzative adeguate
7. **DPA con sub-fornitori** (art. 28): contratto con OpenAI/Anthropic/Brevo/etc.

## Checklist per ogni workflow

Prima di mettere un workflow in produzione, verifica:

- [ ] Quale **categoria di dato personale** tratta? (anagrafica, contatto, comportamentale, sensibile?)
- [ ] **Base giuridica** dichiarata?
- [ ] Se cold outreach B2B → legittimo interesse documentato + opt-out facile in ogni email
- [ ] Se nurture su utenti che hanno fornito email → consenso registrato con data e source
- [ ] **Retention policy** definita? (es. lead non convertiti dopo 12 mesi → cancella)
- [ ] **DPA firmato** con tutti i sub-fornitori usati nel workflow?
- [ ] Dati transitano fuori UE? Se sì → verifica adeguatezza (Standard Contractual Clauses)
- [ ] **Logging**: cosa viene loggato? Per quanto?
- [ ] **Diritto all'oblio**: c'è un modo per cancellare velocemente i dati di un soggetto?

## Cold outreach B2B in Italia

Stato dell'arte 2025:
- **Email B2B** a indirizzi aziendali generici (info@, contatti@): legittimo interesse OK con opt-out
- **Email B2B** a persona fisica nominale (mario.rossi@azienda.it): zona grigia → meglio avere base "legittimo interesse" + sempre opt-out + frequenza moderata + valore percepito alto
- **LinkedIn DM**: consentito se segue policy LinkedIn, no spam, pertinente
- **Cold call** a numeri pubblici (PEC, sito): consentito ma RPO (Registro Pubblico Opposizioni) per consumatori; B2B più libero
- **WhatsApp** cold: NO senza consenso esplicito
- **PEC** outbound: consentito a indirizzi pubblicati ma extreme caution

Regole pratiche per le email cold:
1. Footer con identità mittente completa (ragione sociale, P.IVA, sede)
2. Link unsubscribe **funzionante** in ogni email
3. Honor unsubscribe entro 24h
4. Frequenza: max 3 follow-up se nessuna risposta, poi stop
5. Lista soppressioni globale + per cliente

## DPA da firmare

Per ogni provider che tratta dati personali per nostro conto:

| Provider | DPA | Fonte |
|---|---|---|
| Anthropic | [anthropic.com/legal/dpa](https://www.anthropic.com/legal) | Standard online |
| OpenAI | [openai.com/policies/dpa](https://openai.com/policies) | Standard online |
| Brevo | [brevo.com/legal](https://www.brevo.com/legal/) | Aderiamo via account settings |
| Resend | nel TOS | Standard online |
| Airtable | enterprise plan | Da firmare |
| Google Workspace | Workspace agreement | Standard |
| Apollo | Enterprise terms | Da firmare |
| Telegram | NA per bot self-hosted | NA |
| n8n self-hosted | NA (siamo noi il responsabile) | NA |

## Informativa privacy minima per i clienti

Quando un cliente ci affida i suoi dati (es. il commercialista ci dà la lista dei suoi assistiti), serve:

1. **Contratto di nomina a Responsabile del trattamento** (art. 28 GDPR) firmato bilateralmente
2. Specificare: finalità, durata, tipi di dati, categorie di interessati, obblighi
3. Lista dei sub-responsabili (Anthropic, Brevo, ecc.) con preavviso 30gg per modifiche

Template da preparare in `templates/legal/dpa-cliente.md`.

## Retention default

| Dato | Retention |
|---|---|
| Lead non contattato | 12 mesi → cancella |
| Lead contattato senza risposta | 24 mesi → cancella |
| Cliente attivo | Per durata contratto + 10 anni (obblighi fiscali) |
| Cliente cessato | 10 anni → cancella |
| Log esecuzione workflow | 90 giorni |
| Log approvazioni umane | 24 mesi |
| Bounce / opt-out | Permanente (lista soppressioni) |

## Sicurezza minima n8n

- HTTPS only (Caddy / nginx + Let's Encrypt)
- Autenticazione di base + MFA su account admin
- Backup giornalieri DB n8n cifrati e off-site
- Aggiornamenti n8n almeno mensili
- Network isolation: n8n NON accessibile dal pubblico se non per webhook specifici
- Rate limiting sui webhook
- Mai loggare interi payload con dati personali in chiaro (mask email/telefono in log)

## Adempimenti formali

- **Registro dei trattamenti** (art. 30): obbligatorio se ≥250 dipendenti o trattamento abituale di dati. Per agenzie B2B piccole + dati B2B → in pratica meglio averlo comunque.
- **DPO**: non obbligatorio per realtà piccole, ma utile averne uno frazionato di consulenza
- **DPIA**: se trattamenti ad alto rischio (profilazione automatica, dati sensibili) → da fare
- **Notifica data breach**: entro 72h al Garante se rischio per gli interessati

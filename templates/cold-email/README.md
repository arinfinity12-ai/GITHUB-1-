# Cold Email Templates — Italia B2B

Template di cold email **in italiano**, per nicchia. Da personalizzare con AI partendo dal `talking_point` generato dallo scoring.

## Struttura standard

Ogni template segue questa struttura:

1. **Subject**: max 50 caratteri, no clickbait, sembra una mail "normale"
2. **Hook**: 1 frase che dimostra contesto specifico (no "Ciao a tutti")
3. **Pain**: 1–2 frasi che riconoscono il problema della loro nicchia
4. **Bridge**: 1 frase che collega al nostro valore
5. **CTA leggera**: domanda aperta o proposta soft (no "prenota una call subito")
6. **Footer**: identità completa + link unsubscribe

## Regole

- Tono: collega che ti scrive, non venditore
- Lunghezza: max 120 parole nel corpo
- No bold, no emoji nel body (solo eventualmente in subject)
- Link tracciato per click measurement (UTM `source=cold-email`)
- Follow-up max 3, intervalli 4gg / 7gg / 12gg

## Tracker per nicchia

| Nicchia | Subject lines top | Pain | CTA |
|---|---|---|---|
| **Software/SaaS** | "Una domanda sul vostro funnel post-trial" | Conversione trial→paid sotto target | "Hai 10 min per parlarne?" |
| **Agenzie** | "Reportistica clienti — quanto tempo ti porta via?" | Reporting manuale, ore perse | "Ti mando un esempio?" |
| **Freelance** | "Pipeline costante anche nei mesi morti" | Stagionalità acquisizione | "Posso mostrartelo?" |
| **Avvocati** | "Gestione scadenze e clienti dello studio" | Caos su agenda + documenti | "Una breve demo?" |
| **Commercialisti** | "Inseguire i clienti per i documenti" | Tempo bruciato a sollecitare | "Vuoi vedere come?" |

## File template

Da popolare nei prossimi giri:

- `software-saas-v1.md`
- `agenzie-v1.md`
- `freelance-v1.md`
- `avvocati-v1.md`
- `commercialisti-v1.md`
- `followup-1.md`
- `followup-2.md`
- `followup-3-breakup.md`

Ogni file include 2–3 varianti per A/B test.

## Footer obbligatorio (GDPR + brand)

```
---
[Nome] · [Ruolo] · [Ragione Sociale]
[Sede] · P.IVA [numero]
[website] · [linkedin]

Hai ricevuto questa email perché [base giuridica: legittimo interesse B2B / reperito su [fonte]].
Se non vuoi ricevere altre comunicazioni: {{unsubscribe_link}}
```

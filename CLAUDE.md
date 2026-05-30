# CLAUDE.md — Starseed International LLC / Aquila Consulting LLC

## Identità del progetto

**Entità legale:** Starseed International LLC — società americana registrata in New Mexico (USA).
Viene utilizzata per incassare pagamenti internazionali tramite:
- **Stripe** (carta di credito, SCA/3DS)
- **Wise Business** (bonifici SEPA/SWIFT)
- **Revolut Business** (multi-currency)

**Fondatore / CEO:** Riccardo Piombino, Padova, Italia — 28 anni.
Il suo fisico atletico ("lean athletic / surfer aesthetics") è il principale asset competitivo visuale.

---

## Business Model — Info Business B2C

### Core Product: Online Fitness Coaching

| Prodotto | Prezzo | Note |
|---|---|---|
| Front-end "Aesthetics Sprint 8 settimane" | €697 | Sweet spot psicologico IT. Programma + 2 call check-in + community Telegram/Skool + correzione video |
| Back-end "Aesthetics Coaching 4 mesi" — Early Bird | €1.997 | DWY (Done With You) |
| Back-end "Aesthetics Coaching 4 mesi" — Standard | €2.497 | |
| Back-end "Aesthetics Coaching 4 mesi" — Premium | €3.197 | Call 1:1 settimanali |
| Beta Program (primi 10 clienti) | €497 (-50%) | In cambio di video-testimonial |

### Secondary Product: Integratori White-Label (Fase 2, mese 4-9)

**SKU iniziali (4-6 prodotti):** Whey Isolate, Creatina monoidrato, Multi-Vitaminico, Omega-3, Ashwagandha+ZMA, Aesthetics Stack (pre-workout + L-citrullina).

**Bundle "Aesthetics Stack Premium":** €120-180/mese DTC, margini lordi 55-65%.

**IMPORTANTE — NO PEPTIDI:** BPC-157, TB-500, Ipamorelin, CJC-1295, MK-677, GHK-Cu iniettabile e analoghi sono farmaci NON autorizzati in Italia. Vendita = rischio penale (reclusione fino a 3 anni, D.Lgs. 219/2006 art.147 + L.376/2000). Zero tolleranza su questo punto.

**Sì a:** glutatione orale (integratore notificato Min. Salute), collagene, GHK-Cu topico/cosmetico.

---

## Target di Mercato

### ICP (Ideal Customer Profile) — Italia Fase 1
- Uomini 25-45 anni
- Professionisti urbani: Milano, Roma, Bologna, Torino, Padova, Verona
- Reddito €40-80K/anno
- Frustrati dal "non vedere risultati" in palestra autonoma
- Sub-niche: "lean athletic / surfer aesthetics" — NON gareggianti

### Mercati per fase
| Fase | Mercato | Priorità | Note |
|---|---|---|---|
| Settimane 1-4 | Italia + Messico | 50/50 | IT valida ticket alto, MX valida volume |
| Settimane 5-8 | Aggiungi Spagna | Se MX o IT ROAS ≥1.5x | Stesso funnel MX in spagnolo |
| Settimane 9-12 | Test Colombia | $20/giorno max | Solo se MX >2x ROAS e setter spagnolo disponibile |

### Benchmark CPM per mercato (Meta Ads 2025-2026)
| Mercato | CPM | CPL atteso | Ticket coaching | Punteggio |
|---|---|---|---|---|
| Italia | $10-15 | €18-30 | €600-800 FE | ★★★★ |
| Spagna | $6-10 | €12-22 | €500-700 FE | ★★★★ |
| Messico | $3-6 | $4-10 | $90-180/mese | ★★★★★ |
| Colombia | $2-4 | $3-8 | $75-150/mese | ★★★ |

---

## Struttura Tecnologica (Tech Stack)

### Core Platform
- **GoHighLevel (GHL)** — $97/mese Agency Starter: CRM, pipeline, landing pages, funnel, automazioni email/SMS, Calendly integration
- **ManyChat Pro** — $29/mese: Comment-to-DM automation, qualification bot, webhook a GHL
- **Stripe** — 2.9% fees: pagamenti internazionali, Stripe Radar, 3DS forzato

### Content & AI
- **HeyGen Pro** — $99/mese: Digital twin avatar di Riccardo (Avatar V, 15 sec di registrazione), 2.000 credits/mese (~100 min Avatar IV)
- **ElevenLabs Creator** — $22/mese: Voice clone per audio DM personalizzati (hot leads pre-call)
- **BooSend** — $29/mese (opzionale): Integra ElevenLabs per audio DM via Instagram

### Dashboard & Analytics
- Dashboard operativa CEO (da costruire): monitoraggio KPI, bilancio, attività business
- Sito web aziendale istituzionale (da costruire)
- Integrazione iOS per accesso mobile al CEO

### Tools Stack Mensile Totale: ~$280/mese
```
HeyGen Pro:        $99
ManyChat Pro:      $29
GoHighLevel:       $97
ElevenLabs:        $22
BooSend (opz.):    $29
Stripe fees:       variabile
```

---

## Funnel Operativo ManyChat → GHL

```
Reel/Post con CTA → Comment keyword "FORMA"
  → ManyChat Comment-to-DM trigger
  → Public reply: "Inviato in DM 🚀"
  → DM #1: 1 msg breve + routing question
  → Qualifica 3 step (età / obiettivo / budget) via quick replies
  → IF qualificato → Calendly inline + tag GHL "Hot Lead"
  → Webhook GHL: crea contact + opportunity + SMS reminder
  → IF non qualificato → nurture sequence
```

**Script DM Italiano:**
- DM #1: età (25-35 / 36-45 / 46+)
- DM #2: obiettivo (Definirmi/dimagrire / Massa / Tornare in forma)
- DM #3: "Stai cercando una soluzione in cui investire seriamente nei prossimi 30 giorni?" → [Sì, sono pronto] → Calendly + Hot Lead tag

**GHL Pipeline:** Lead → Booked → Show → Sold → Onboarded

---

## Strategia Advertising Meta ($170/giorno)

### Architettura Campagne
```
Account
├── [TEST] Creative Testing — ABO, $50/day
│   └── 5 ad set × $10/day (1 hook variant per ad set)
│   └── 4-6 creative per ad set
│
├── [SCALE-PROVEN] CBO Advantage+ — $80/day
│   └── 6-10 winning creative, country-specific (IT/MX separati)
│
├── [SCALE-NEW] CBO Broad — $30/day
│   └── Lookalike 1-3% sui purchaser
│
└── [RETARGETING] — $10/day
    └── 7-day site visitors + DM engagers
```

### Hook Framework (testa una variabile alla volta)
1. **Pain hook:** "Hai 35+, lavori 9 ore al PC e la pancia non scende più?"
2. **Curiosity hook:** "Il metodo che uso per body composition in 90 giorni senza palestra"
3. **Social proof hook:** "57 uomini italiani in 6 mesi hanno [risultato specifico]"
4. **Contrarian hook:** "Smettila di fare cardio se vuoi definirti — fai questo"
5. **Identity hook:** "Per imprenditori 30-45 che vogliono il fisico, non solo i numeri"

### Regole Kill/Scale
- **Kill:** dopo $30-50 spesi, CPL > 2× target
- **Scale:** CPL ≤ 70% target per 5 giorni + CTR ≥ 1.5% + ROAS 14gg ≥ 2.0 → +20-30% budget ogni 3-5 giorni
- **Kill paese:** ROAS 14gg < 0.8 dopo $1.500 spend

---

## Budget Allocazione $25.000

| Voce | Importo |
|---|---|
| Ads Meta + TikTok (90 giorni, $170/giorno) | $15.300 |
| Integratori private label (MOQ 500-1.000 unità, 2 SKU) | $5.000 |
| Tools stack × 3 mesi | $830 |
| Avatar HeyGen + voice clone (setup one-time) | $200 |
| Video production b-roll reale (2 shooting session) | $400 |
| Buffer chargebacks/refunds/fees (4%) | $1.000 |
| Commissioni venditore (10-15% sul chiuso) | $1.500 |
| Riserva emergenza / scaling test | $770 |
| **Totale** | **$25.000** |

---

## Break-Even Analysis

**Scenario base** (ticket FE €700 medio blended IT/MX, take-home €560):
- $170/giorno × 30gg = ~€4.700/mese ads
- Break-even: **9 vendite FE/mese**
- Lead needed: 120/mese (a CPL €30 medio = €3.600 budget)
- Call needed: 36/mese (30% lead→call rate)
- Close rate target: 25% (Riccardo) / 18% (venditore)

**Scenario ottimistico** (con back-end €2.000, attach 40%):
- Revenue per cliente blended = €560 + (€2.000 × 0.40) = €1.360
- 9 vendite × €1.360 = **€12.240/mese → ROAS 2.6x**

**Scenario conservativo** (solo FE, no back-end):
- 9 vendite × €560 = €5.040 → break-even ads only, non copre il team
- **Il back-end è obbligatorio per la sopravvivenza del business**

---

## Timeline 12 Settimane

| Settimana | Focus | KPI |
|---|---|---|
| 1 | Setup completo: HeyGen twin, GHL pipelines, ManyChat, landing pages IT+MX, 20 hooks | Setup completo, primo test launch |
| 2-3 | Test launch IT + MX ($85/giorno ciascuno), ABO testing puro | CPL per paese, CTR, hook rate (3s views) |
| 4 | Prima kill/scale decision. Hot creative → CBO Advantage+ | ROAS preliminare, cost per booked call |
| 5-6 | Aggiungi Spagna (replica funnel MX), +20 nuove creative | CR%, close rate front-end |
| 7-8 | Scale aggressivo nel paese top performer, intro back-end €1.700-€2.600 | Front-end ROAS, back-end conversion |
| 9 | Lancio Starter Stack integratori (solo IT/ES) | AOV uplift, attach rate |
| 10 | Test Colombia $20/giorno + audio AI per hot leads | Lead quality CO, reply rate audio vs text |
| 11 | Ottimizzazione setter, training venditore su back-end | Close rate venditore vs Riccardo |
| 12 | Review trimestrale, decisione scaling Q2 | LTV/CAC 90 giorni, payback period |

---

## Rischi Principali e Mitigazioni

| Rischio | Livello | Mitigazione |
|---|---|---|
| Ban Meta su Health & Wellness | ALTO | 2 BM + 2 ad account + 2 domini + 2 Pixel. Posizionare come "performance coaching" non "weight loss coach" |
| Disabilitazione ottimizzazione bottom-funnel | ALTO | Ottimizzare su "Lead" (schedulazione call), non su "Purchase". Conversions API con eventi custom |
| Bandwidth setter Riccardo | ALTO | Venditore formato CRITICO entro settimana 6 (max 80+ call/mese da solo) |
| TikTok ban AI | MEDIO | Label sempre, solo Riccardo + ElevenLabs library con licenza commerciale |
| Chargeback LATAM | MEDIO | Stripe Radar + 3DS forzato, hold 7 giorni accesso, contratto digitale no-refund post-call #2 |

---

## Regole Creative per Meta (Policy Compliance)

1. **Etichetta sempre** il contenuto AI con il toggle "AI Info"
2. **Mai claim medici diretti:** no "perderai 10kg", usa "supporta", "aiuta a", "il mio approccio"
3. **Mai close-up su parti del corpo** (pinching fat, ecc.)
4. **Niente seconda persona accusatoria:** non "Hai la pancia?" → "Tanti uomini sopra i 35 lottano con la pancia"
5. **Ibridazione obbligatoria:** almeno 40% delle creative scalanti = UGC reali o ibrido (avatar + b-roll vero)
6. **NON usare avatar stock** per un brand di coaching personale

---

## Regolamentazione Italiana (Note Legali)

- **D.Lgs. 36/2021 art.42:** coaching puramente online = zona grigia (norma parla di strutture fisiche). Praticabile con disclaimer "consulenza tecnico-motoria"
- **Raccomandato:** certificazione EPS riconosciuta CONI (ASI, CSEN, inVictus Trainer ~€700-1.500, 3-6 mesi)
- **Mai prescrivere diete:** riservato a biologi nutrizionisti/dietisti/medici. Possibile partnership biologo nutrizionista (split 70/30)
- **RC professionale:** obbligatoria €200-500/anno
- **Integratori LATAM:** NON spedire da IT in Fase 1 (COFEPRIS Messico 30gg, INVIMA Colombia 3-6 mesi). Solo coaching in LATAM, integratori solo IT/ES

---

## Competitor Italia

| Player | Modello | Pricing |
|---|---|---|
| Project inVictus | B2B (forma trainer) + libri | €749-€1.497 corsi |
| Andrea Larosa | DM-based, prezzo non pubblico | 482K follower IG |
| Domenico Aversano | Programmi 8-12 sett + community Skool | Non pubblico |
| Massimo Spattini | Libro → seminari → consulenze cliniche | €59 libro |

**Gap di mercato identificato:** nicchia "surfer aesthetics / lean athletic" uomini 25-45 NON gareggianti non è presidiata in modo strutturato. Nessun dominatore nel bundle "Coaching + Integratori brandizzati + lifestyle content" nel segmento mass-premium italiano.

---

## Architettura da Costruire (Deliverables Tecnici)

1. **Landing pages + funnel** (via GHL template) — mercati IT, ES, MX
2. **Sito web aziendale istituzionale** Starseed International LLC
3. **Integrazione GoHighLevel** — pipeline, automazioni, Calendly
4. **Dashboard operativa CEO** — KPI business, bilancio, attività
5. **App iOS / mobile** — accesso CEO a dashboard
6. **ManyChat flows** — Comment-to-DM qualifica 3 step
7. **Sistema tracking** — Meta Pixel, Conversions API, eventi custom

---

## Metriche KPI da Monitorare

| KPI | Target |
|---|---|
| CPL Italia | €40-60 |
| CPL Messico | $8-15 |
| CTR ads | ≥1.5% |
| Show rate call | 55%+ |
| Close rate (Riccardo) | 25%+ |
| Close rate (venditore) | 18%+ |
| ROAS blended 4 settimane | ≥2x per scalare |
| Refund rate | <4% (warning), <15% (ok) |
| Cross-sell coaching → integratori | 25-30% |
| Frequency ads | <2 (altrimenti ruota creative) |

---

## Note Operative Pagamenti

- **Stripe:** 2.9% fees, Stripe Radar attivo, 3DS forzato per LATAM
- **Wise Business:** bonifici SEPA/SWIFT internazionali
- **Revolut Business:** multi-currency, backup
- **Chargeback target:** <3.5% (benchmark fitness coaching 1.5-3.5%)
- **Hold accesso materiali:** 7 giorni post-pagamento per protezione chargeback
- **Contratto digitale obbligatorio** con clausola no-refund post-call #2

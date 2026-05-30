import { useState, useRef, useEffect } from 'react'

// ─── Knowledge Base (Meta Agent OS v2) ──────────────────────────────────────

const TOOLS_5_CAT = [
  {
    id: 'F1', label: 'Brand Discovery', color: '#3b82f6', count: 4,
    tools: [
      { name: 'search_brands', desc: 'Cerca brand per keyword e settore' },
      { name: 'brand_analytics', desc: 'Analisi brand: ricchie di mercato, mappa team settori' },
      { name: 'brand_discovery', desc: 'Analizza brand con nicchie di mercato' },
      { name: 'get_brand_analytics', desc: 'Analisi 90gg: ads attive/inattive, format mix, velocità produzione' },
    ],
  },
  {
    id: 'F2', label: 'Ad Intelligence', color: '#f59e0b', count: 5,
    tools: [
      { name: 'get_ads_by_brand_id', desc: 'Tutte le ads di una pagina (17 filtri, max 250 ads per query)' },
      { name: 'get_ad_by_id', desc: 'Dettaglio completo singolo ad: creative, copy, placement, dynamics' },
      { name: 'get_ads_from_library', desc: 'Accesso diretto Meta Ads Library con filtri avanzati' },
      { name: 'search_ads', desc: 'Ricerca ads per keyword, settore, formato, geo' },
      { name: 'get_ad_details', desc: 'Deep dive su singola ad: trascrizione, hook, CTA, durata' },
    ],
  },
  {
    id: 'F3', label: 'Creative Intelligence', color: '#8b5cf6', count: 4,
    tools: [
      { name: 'brand_pattern', desc: 'Pattern creativi dominanti: driver, emotion, CTA performance, angle' },
      { name: 'scene_adherence', desc: 'Analisi aderenza prodotti dei competitor' },
      { name: 'brand_pixel_analysis', desc: 'Analisi multichannel video: hook, cut, abrupt, CTR stimato' },
      { name: 'creative_analysis', desc: 'Trascrizione e analisi struttura video: hook 0-3s, abrupt, CTA' },
    ],
  },
  {
    id: 'F4', label: 'Strategy & Research', color: '#10b981', count: 3,
    tools: [
      { name: 'competitive_analysis', desc: 'Posizionamento, budget stimato, format mix, geo, angle creativo' },
      { name: 'trend_discovery', desc: 'Ricerca di mercato: trend attivi, player, lacune di posizionamento' },
      { name: 'trend_analyzer', desc: 'Trend emergenti da 100K ads reali, format in rotazione, lacune' },
    ],
  },
  {
    id: 'F5', label: 'Action & Output', color: '#ef4444', count: 3,
    tools: [
      { name: 'brief_generator', desc: 'Input: budget + obiettivo + settore → Output: angolo + copy + format' },
      { name: 'copy_multiplier', desc: 'Struttura il 1° copy del creative: F3 → F4 → F5 → AI' },
      { name: 'video_transcription', desc: 'Trascrizione e analisi struttura video: hook 0-3s, abrupt, CTR' },
    ],
  },
]

const FILTERS_F2 = [
  { cat: 'Tempo & Status', items: ['date_preset: P1D · P7D · P14D · P30D · P90D · P180D · P360D · P540D', 'ad_active_status: active / inactive / all'] },
  { cat: 'Formato', items: ['ad_type: video / image / carousel', 'media_type: video / image / meme / slideshow'] },
  { cat: 'Geo & Mercati', items: ['search_countries: codici ISO (IT, US, UK, DE, FR…)'] },
  { cat: 'Piattaforma', items: ['publisher_platform: facebook / instagram / audience_network / messenger'] },
]

const ESEMPI = [
  {
    n: 1, title: 'Driver creative – Skincare Italia',
    prompt: 'search_brands keyword="skincare" country="IT" → get_ads_by_brand_id date_preset=P30D ad_type=video → creative_analysis → brand_pattern',
    note: 'Trova i pattern emotivi dominanti nelle top creative italiane del settore',
  },
  {
    n: 2, title: 'Concept più usati – Fitness Supplement Europa',
    prompt: 'search_brands keyword="fitness supplement" → get_ads_by_brand_id date_preset=P90D → trend_analyzer → brief_generator',
    note: 'Identifica i concept in rotazione e le lacune da sfruttare',
  },
  {
    n: 3, title: 'Analisi di stile – Collagen Beauty Italia',
    prompt: 'brand_discovery keyword="collagen" country="IT" → brand_pixel_analysis → creative_analysis hook=true → copy_multiplier',
    note: 'Estraei hook 0-3s e stile visivo dei top performer',
  },
  {
    n: 4, title: 'Live competitor – Top 5 campioni attivi',
    prompt: 'search_brands keyword="[settore]" → get_brand_analytics × 5 brand → competitive_analysis → brief_generator',
    note: 'Mappa posizionamento, budget stimato e format mix dei 5 competitor principali',
  },
  {
    n: 5, title: 'Evergreen 30+ giorni – Beauty Finance',
    prompt: 'get_ads_by_brand_id date_preset=P30D ad_active_status=active → filtra durata ≥30gg → creative_analysis → brand_pattern',
    note: 'Ads attive da 30+ giorni = provate dal mercato. Analizza perché scalano',
  },
  {
    n: 6, title: 'Full Ad Intelligence – Skincare UK',
    prompt: 'F1 → F2 (search_ads country="GB") → F3 (brand_pixel_analysis) → F4 (competitive_analysis) → F5 (brief_generator)',
    note: 'Funnel completo F1→F5: da discovery a brief pronto per produzione',
  },
  {
    n: 7, title: 'Onboarding client – Integratori Milano',
    prompt: 'search_brands keyword="integratori alimentari" country="IT" → get_ads_by_brand_id × 3 competitor → competitive_analysis → brief_generator',
    note: 'Analisi di mercato completa per nuovo cliente in 40 min invece di 4h',
  },
  {
    n: 8, title: 'Black Friday – Abbigliamento Sportivo IT',
    prompt: 'search_brands keyword="abbigliamento sportivo" → get_ads_by_brand_id date_preset=P30D → trend_discovery → copy_multiplier tema="Black Friday"',
    note: 'Intercetta angle e copy stagionali prima della concorrenza',
  },
]

const WORKFLOW = [
  {
    day: 'LUNEDÌ', label: 'Setup Settimana', time: '30 min', color: '#3b82f6',
    steps: [
      { tool: 'trend_analysis', action: 'Trend emergenti nel settore aggiornati' },
      { tool: 'get_ads_by_brand_id', action: 'Ads dei competitor negli ultimi 7 giorni' },
      { tool: 'get_brand_analytics', action: 'Nuovi format testati dalla concorrenza nel weekend' },
      { tool: 'quick_angle', action: 'Lista priorità: best creative, scale, nuovi angle' },
    ],
  },
  {
    day: 'MERCOLEDÌ', label: 'Creative Review', time: '45 min', color: '#8b5cf6',
    steps: [
      { tool: 'creative_intelligence', action: 'Analisi delle ads competitor più longeve (running >37gg)' },
      { tool: 'video_transcription', action: 'Trascrivi top 2 video competitor della settimana' },
      { tool: 'get_fetcher_copy', action: 'Aggiorna libreria hook e CTA con nuovi dati' },
      { tool: 'brief_generator', action: 'Brief per nuovi test creative settimana prossima' },
    ],
  },
  {
    day: 'VENERDÌ', label: 'Report Cliente', time: '30 min', color: '#10b981',
    steps: [
      { tool: 'competitor_analysis', action: 'Aggiornamento posizionamento vs concorrenza' },
      { tool: 'creative_velocity', action: 'Velocità produzione competitor (aumenta o diminuisce?)' },
      { tool: 'get_brand_analytics', action: 'Format shift competitor negli ultimi 7 giorni' },
      { tool: '—', action: 'Paragrafo "competitive intelligence" per report cliente' },
    ],
  },
]

const REGOLE = [
  {
    n: 1, title: 'Non usare P1D su search_brands / search_ads',
    body: 'Per trovare il brand usa search_brands o search_ads senza time filter. P1D restituisce dati incompleti. Parti sempre da P7D o P30D come baseline.',
  },
  {
    n: 2, title: 'Evergreen è quello che scala davvero',
    body: "Un'ad attiva da 30+ giorni run senza errori. Usa get_ads_by_brand_id con date_preset=P30D e filtra ad_active_status=active. Un'ad lunga = profittevole. Max 250 per query.",
  },
  {
    n: 3, title: 'Collega sempre ads a landing page',
    body: "Usa get_ad_by_id per recuperare la URL della landing page, poi analizza la coerenza tra ad e delivery. Il gioco è trovare l'allineamento tra promessa (ad) e delivery (landing).",
  },
  {
    n: 4, title: 'Il brief è l\'output finale, non il punto di partenza',
    body: 'Flusso corretto: F1 → F2 (ricerca) → F3 (analisi) → F4 (strategia) → F5 (brief_generator). Un brief senza dati è opinione, non strategia.',
  },
  {
    n: 5, title: 'Piattaforme diverse = angoli creativi diversi',
    body: 'Non fare un brief che ignori le differenze tra platform. Usa publisher_platform filter per capire cosa funziona su TikTok vs Facebook. Non comparare senza isolare la variabile piattaforma.',
  },
  {
    n: 6, title: "L'AI moltiplica ciò che SAI fare",
    body: "Meta Agent OS accelera il tuo processo, non lo sostituisce. Non costituisce il giudizio creativo. Se non sai leggere un'ad, l'AI non lo farà per te.",
  },
]

const NUMERI = [
  { label: 'Tool MCP totali', val: '19' },
  { label: 'Categorie tool', val: '8' },
  { label: 'Ads nel database', val: '100M+' },
  { label: 'Brand eCommerce / UGC', val: '300.000' },
  { label: 'Piattaforme coperte', val: 'FB · IG · TikTok · YT · LI · Threads · Messenger · ANS' },
  { label: 'Filtri avanzati F2', val: '17 per query' },
  { label: 'Max ads per query', val: '250' },
  { label: 'Analytics window', val: '30 giorni (get_brand_analytics)' },
  { label: 'Analisi 8 clienti (before)', val: '4h 20 min' },
  { label: 'Analisi 8 clienti (dopo)', val: '~40 min (−85%)' },
  { label: 'Setup iniziale', val: '30 secondi' },
]

const PROFILI = [
  { profilo: 'Media Buyer Solo', usecase: 'Analisi competitor + brief', tool: 'F1 + F5', tempo: '6h → 40 min' },
  { profilo: 'Agency Founder', usecase: 'Onboarding cliente: mappa mercato + competitive brief', tool: 'F1 + F2 + F5', tempo: '8h → 45 min' },
  { profilo: 'eCommerce Scale Q4', usecase: 'BF: evergreen + sweet spot video + hook stagionale', tool: 'F2 + F3', tempo: 'Real-time, dati live' },
  { profilo: 'Head of Performance', usecase: 'Standardizza template: prompt → F3 → F4 → F5', tool: 'F3 + F4 + F5', tempo: 'Team allineato su dati reali' },
  { profilo: 'UGC Creator', usecase: 'Research format: top video trascritti + trend bionaturali', tool: 'F4 + F4 + F5', tempo: 'Research pre-produzione' },
  { profilo: 'In-house Marketer', usecase: 'Lancio nuove geo: market_research + brief stagionali', tool: 'F1 + F4 + F5', tempo: 'Expansion playbook pronto' },
]

// ─── Knowledge Base risposte chat ──────────────────────────────────────────

const KB: Record<string, string> = {
  intro: `**Meta Agent OS v2** — 19 tool MCP per Meta Ads intelligence.

**5 Categorie di tool:**
• **F1 Brand Discovery** (4 tool) — trova brand per settore e keyword
• **F2 Ad Intelligence** (5 tool) — analizza ads con 17 filtri avanzati ⭐
• **F3 Creative Intelligence** (4 tool) — pattern, hook, CTA, pixel analysis
• **F4 Strategy & Research** (3 tool) — competitive, trend, positioning
• **F5 Action & Output** (3 tool) — brief, copy, video transcription

Usa i tab qui sotto per esplorare tool, workflow, esempi pratici e regole d'oro.`,

  f1: `**F1 — Brand Discovery (4 tool)**

**search_brands** → Cerca brand per keyword e settore. Usa senza date filter.
**brand_analytics** → Mappa di mercato: nicchie, player, quote stimate.
**brand_discovery** → Analisi brand con nicchie di mercato e overlap competitor.
**get_brand_analytics** → Analisi 90gg: ads attive/inattive, format mix, velocità produzione.

> Regola: non aggiungere date_preset a search_brands. Restituisce dati vuoti con P1D.`,

  f2: `**F2 — Ad Intelligence (5 tool)** ⭐ Core del sistema

**get_ads_by_brand_id** → Tutte le ads di un brand. 17 filtri. Max 250 ads per query.
**get_ad_by_id** → Dettaglio singola ad: creative, copy, placement, URL landing page.
**get_ads_from_library** → Accesso diretto Meta Ads Library con filtri avanzati.
**search_ads** → Ricerca cross-brand per keyword, settore, formato, geo.
**get_ad_details** → Deep dive: trascrizione hook, durata, CTA, data attivazione.

**17 Filtri disponibili:**
• date_preset: P7D · P14D · P30D · P90D · P180D · P360D · P540D
• ad_active_status: active / inactive / all
• ad_type: video / image / carousel
• search_countries: codici ISO (IT, US, UK, DE, FR…)
• publisher_platform: facebook / instagram / audience_network / messenger`,

  f3: `**F3 — Creative Intelligence (4 tool)**

**brand_pattern** → Pattern creativi dominanti: emotion driver, CTA performance, angle dominante, frequenza visiva.
**scene_adherence** → Analisi aderenza prodotto nei creative dei competitor.
**brand_pixel_analysis** → Analisi multichannel video: hook 0-3s, cut rate, abrupt, CTR stimato.
**creative_analysis** → Trascrizione strutturata: hook / sviluppo / CTA / tempo. Ottimale per UGC e video ads.

> Usa F3 dopo F2: prima recupera le ads, poi analizza le creative.`,

  f4: `**F4 — Strategy & Research (3 tool)**

**competitive_analysis** → Posizionamento vs competitor: budget stimato, format mix, geo coverage, angle creativo.
**trend_discovery** → Ricerca di mercato: trend attivi, player emergenti, lacune di posizionamento da sfruttare.
**trend_analyzer** → Trend emergenti analizzati su 100K+ ads reali, format in rotazione, opportunità da approfondire.

> F4 è il layer strategico. Usa dopo F1+F2 per avere i dati grezzi prima dell'interpretazione.`,

  f5: `**F5 — Action & Output (3 tool)**

**brief_generator** → Input: budget + obiettivo + settore → Output: angolo creativo + copy + format consigliato. Il brief finale, non il punto di partenza.
**copy_multiplier** → Genera varianti copy dal 1° draft: F3 → F4 → F5 → AI. Massimizza output dallo stesso concept.
**video_transcription** → Trascrizione strutturata video: hook 0-3s / sviluppo / abrupt / CTA. Base per analisi e replicazione.

> Flusso corretto: F1 → F2 → F3 → F4 → F5. Un brief senza dati è opinione.`,

  workflow: `**Workflow Settimanale — Routine Operativa**

**LUNEDÌ — Setup Settimana (30 min)**
1. trend_analysis → Trend emergenti nel settore
2. get_ads_by_brand_id (P7D) → Ads competitor ultima settimana
3. get_brand_analytics → Nuovi format testati nel weekend
4. quick_angle → Lista priorità: best creative, scale, nuovi angle

**MERCOLEDÌ — Creative Review (45 min)**
1. creative_intelligence → Ads competitor più longeve (>37gg running)
2. video_transcription → Top 2 video competitor della settimana
3. get_fetcher_copy → Aggiorna libreria hook e CTA
4. brief_generator → Brief per nuovi test creative settimana prossima

**VENERDÌ — Report Cliente (30 min)**
1. competitor_analysis → Posizionamento aggiornato vs concorrenza
2. creative_velocity → Velocità produzione competitor (trend?)
3. get_brand_analytics → Format shift competitor ultimi 7gg
4. Paragrafo "competitive intelligence" per report cliente`,

  regole: `**6 Regole d'Oro — Meta Agent OS v2**

**1. Non usare P1D su search_brands / search_ads**
P1D restituisce dati incompleti. Usa sempre P7D come minimo.

**2. Evergreen è quello che scala davvero**
Un'ad attiva 30+ giorni è profittevole. Filtra con date_preset=P30D + ad_active_status=active.

**3. Collega sempre ads a landing page**
get_ad_by_id → recupera URL landing → analizza coerenza promessa/delivery.

**4. Il brief è l'output finale, non il punto di partenza**
F1 → F2 → F3 → F4 → F5 (brief_generator). Senza dati è solo opinione.

**5. Piattaforme diverse = angoli creativi diversi**
Usa publisher_platform filter. Non comparare Facebook e TikTok senza isolare la variabile.

**6. L'AI moltiplica ciò che SAI fare**
Meta Agent OS accelera il tuo processo. Non sostituisce il giudizio creativo.`,

  numeri: `**Numeri di Riferimento — Meta Agent OS v2**

| Cosa | Valore |
|------|--------|
| Tool MCP totali | 19 |
| Categorie | 8 |
| Ads nel database | 100M+ |
| Brand eCommerce/UGC | 300.000 |
| Piattaforme | FB · IG · TikTok · YT · LI · Threads · Messenger · ANS |
| Filtri avanzati F2 | 17 per query |
| Max ads per query | 250 |
| Analytics window | 30 giorni |
| Analisi 8 clienti (prima) | 4h 20 min |
| Analisi 8 clienti (dopo) | ~40 min (−85%) |
| Setup iniziale | 30 secondi |

**Tool sostituiti:** AdThematic, SBA, PowerBI, Spreadsheet, SEMrush, Airtable, Ads Manager, A/B test manuale, Excel, Google Sheets, Meta Business Suite`,

  setup: `**Quick Start: 30 Secondi**

**Step 1 — Aggiungi il server remoto in Claude Desktop**
Apri Claude Desktop → Settings → Developer → Edit Config.
Aggiungi il server MCP con l'endpoint fornito. Riavvia Claude Desktop.

**Step 2 — Prima analisi**
Chiedi a Claude: *"Cerca brand nel settore skincare in Italia"*
Claude chiama automaticamente search_brands, restituisce i brand trovati con ID.

**Step 3 — Approfondisci**
Usa l'ID brand per richiamare get_ads_by_brand_id con i filtri che ti servono.
In 30 secondi hai 250 ads del competitor con tutti i metadati.

> Setup richiede: Claude Desktop (non la web app). Zero sostituzioni necessarie — ogni agente si aggancia all'account reale.`,
}

function getResponse(input: string): string {
  const q = input.toLowerCase()
  if (!q.trim()) return KB.intro

  if (q.includes('setup') || q.includes('inizia') || q.includes('configurare') || q.includes('installare') || q.includes('quick start') || q.includes('30 secondi')) return KB.setup
  if (q.includes('f1') || q.includes('brand discovery') || q.includes('search_brands')) return KB.f1
  if (q.includes('f2') || q.includes('ad intelligence') || q.includes('get_ads') || q.includes('filtri')) return KB.f2
  if (q.includes('f3') || q.includes('creative intel') || q.includes('brand_pattern') || q.includes('hook') || q.includes('creative')) return KB.f3
  if (q.includes('f4') || q.includes('strategy') || q.includes('competitive') || q.includes('trend')) return KB.f4
  if (q.includes('f5') || q.includes('action') || q.includes('brief') || q.includes('copy') || q.includes('output')) return KB.f5
  if (q.includes('workflow') || q.includes('settimana') || q.includes('routine') || q.includes('lunedì') || q.includes('mercoledì') || q.includes('venerdì')) return KB.workflow
  if (q.includes('regol') || q.includes('p1d') || q.includes('evergreen') || q.includes('landing') || q.includes('oro')) return KB.regole
  if (q.includes('numer') || q.includes('statistic') || q.includes('database') || q.includes('100m') || q.includes('300k') || q.includes('quant')) return KB.numeri
  if (q.includes('tool') || q.includes('categoria') || q.includes('categorie') || q.includes('quanti')) return KB.intro

  return `Non ho trovato una risposta specifica per questa domanda nel database Meta Agent OS v2.

Prova a chiedermi su:
• **F1–F5**: tool per categoria (es. "cosa fa F2?")
• **Workflow**: routine settimanale Lunedì/Mercoledì/Venerdì
• **Filtri**: i 17 filtri avanzati di F2
• **Regole d'oro**: le 6 regole operative fondamentali
• **Setup**: come configurare Meta Agent OS in 30 secondi
• **Numeri**: metriche e benchmark del sistema`
}

function renderMd(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^>\s(.+)$/gm, '<div class="mc-blockquote">$1</div>')
    .replace(/^\| (.+) \|$/gm, (_, row) =>
      `<div class="mc-table-row">${row.split(' | ').map((c: string) => `<span>${c.trim()}</span>`).join('')}</div>`
    )
    .replace(/^•\s(.+)$/gm, '<div class="mc-bullet">• $1</div>')
    .replace(/\n{2,}/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
}

type Tab = 'chat' | 'tools' | 'esempi' | 'workflow' | 'regole'

let _id = 0
const uid = () => ++_id

const QUICK = [
  'Come faccio il setup in 30 secondi?',
  'Cosa fa F2 Ad Intelligence?',
  'Come trovare ads evergreen dei competitor?',
  'Spiegami il workflow settimanale',
  'Quali sono le 6 regole d\'oro?',
  'Quanti tool ha Meta Agent OS?',
]

export function MarketingChat() {
  const [tab, setTab] = useState<Tab>('chat')
  type Msg = { id: number; role: 'user' | 'assistant'; text: string }
  const [msgs, setMsgs] = useState<Msg[]>([{ id: uid(), role: 'assistant', text: KB.intro }])
  const [input, setInput] = useState('')
  const [expandedTool, setExpandedTool] = useState<string | null>('F2')
  const [expandedEsempio, setExpandedEsempio] = useState<number | null>(null)
  const [expandedRegola, setExpandedRegola] = useState<number | null>(null)
  const [workflowDay, setWorkflowDay] = useState<string>('LUNEDÌ')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  const send = (text: string) => {
    if (!text.trim()) return
    const reply = getResponse(text)
    setMsgs(prev => [
      ...prev,
      { id: uid(), role: 'user' as const, text: text.trim() } as const,
      { id: uid(), role: 'assistant' as const, text: reply } as const,
    ])
    setInput('')
    setTab('chat')
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: 'chat', label: 'Chat' },
    { id: 'tools', label: '19 Tool' },
    { id: 'esempi', label: '8 Esempi' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'regole', label: 'Regole & Numeri' },
  ]

  return (
    <div className="mc-root">
      {/* Header */}
      <div className="mc-header">
        <div className="mc-header-brand">
          <span className="mc-header-icon">📣</span>
          <div>
            <h2 className="mc-title">Meta Agent OS v2</h2>
            <p className="mc-subtitle">19 tool MCP · 100M+ ads · Marketing & Advertising Intelligence</p>
          </div>
        </div>
        <div className="mc-badges">
          <span className="mc-badge-stat">100M+ ads</span>
          <span className="mc-badge-stat">300K brand</span>
          <span className="mc-badge-stat">19 tool</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mc-tabs-bar">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`mc-tab ${tab === t.id ? 'mc-tab-active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── CHAT ── */}
      {tab === 'chat' && (
        <div className="mc-chat-layout">
          <div className="mc-messages">
            {msgs.map(m => (
              <div key={m.id} className={`mc-msg mc-msg-${m.role}`}>
                <div className="mc-msg-avatar">{m.role === 'assistant' ? '📣' : '👤'}</div>
                <div className="mc-msg-body">
                  <div className="mc-msg-text" dangerouslySetInnerHTML={{ __html: renderMd(m.text) }} />
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="mc-quick-wrap">
            <p className="mc-quick-label">Domande rapide</p>
            <div className="mc-quick-list">
              {QUICK.map(q => (
                <button key={q} className="mc-quick-btn" onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          </div>
          <div className="mc-input-row">
            <textarea
              className="mc-input"
              placeholder="Chiedi su tool, filtri, workflow, regole d'oro…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) } }}
              rows={2}
            />
            <button className="mc-send-btn" onClick={() => send(input)} disabled={!input.trim()}>&#9654;</button>
          </div>
        </div>
      )}

      {/* ── 19 TOOL ── */}
      {tab === 'tools' && (
        <div className="mc-panel">
          <p className="mc-panel-intro">5 categorie · 19 tool MCP · 17 filtri avanzati su F2</p>
          {TOOLS_5_CAT.map(cat => (
            <div key={cat.id} className="mc-cat-card">
              <button
                className="mc-cat-header"
                style={{ borderLeftColor: cat.color }}
                onClick={() => setExpandedTool(expandedTool === cat.id ? null : cat.id)}
              >
                <span className="mc-cat-id" style={{ color: cat.color }}>{cat.id}</span>
                <span className="mc-cat-label">{cat.label}</span>
                <span className="mc-cat-count">{cat.count} tool</span>
                <span className="mc-cat-chevron">{expandedTool === cat.id ? '▲' : '▼'}</span>
              </button>
              {expandedTool === cat.id && (
                <div className="mc-tool-list">
                  {cat.tools.map(t => (
                    <div key={t.name} className="mc-tool-item">
                      <code className="mc-tool-name">{t.name}</code>
                      <span className="mc-tool-desc">{t.desc}</span>
                    </div>
                  ))}
                  {cat.id === 'F2' && (
                    <div className="mc-filters-box">
                      <p className="mc-filters-title">17 Filtri Avanzati</p>
                      {FILTERS_F2.map(f => (
                        <div key={f.cat} className="mc-filter-row">
                          <span className="mc-filter-cat">{f.cat}</span>
                          <div className="mc-filter-items">
                            {f.items.map(i => <span key={i} className="mc-filter-item">{i}</span>)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Profili utente */}
          <p className="mc-panel-section-title">Chi Lo Usa e Come</p>
          <div className="mc-profili-table">
            <div className="mc-profili-head">
              <span>Profilo</span><span>Tool usati</span><span>Risparmio</span>
            </div>
            {PROFILI.map(p => (
              <div key={p.profilo} className="mc-profili-row">
                <span className="mc-profili-name">{p.profilo}</span>
                <span className="mc-profili-tool">{p.tool}</span>
                <span className="mc-profili-time">{p.tempo}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── 8 ESEMPI ── */}
      {tab === 'esempi' && (
        <div className="mc-panel">
          <p className="mc-panel-intro">8 prompt pronti da usare subito con Meta Agent OS v2</p>
          {ESEMPI.map(e => (
            <div key={e.n} className="mc-esempio-card">
              <button
                className="mc-esempio-header"
                onClick={() => setExpandedEsempio(expandedEsempio === e.n ? null : e.n)}
              >
                <span className="mc-esempio-n">#{e.n}</span>
                <span className="mc-esempio-title">{e.title}</span>
                <span className="mc-cat-chevron">{expandedEsempio === e.n ? '▲' : '▼'}</span>
              </button>
              {expandedEsempio === e.n && (
                <div className="mc-esempio-body">
                  <p className="mc-esempio-note">{e.note}</p>
                  <pre className="mc-esempio-prompt">{e.prompt}</pre>
                  <button className="mc-use-btn" onClick={() => send(e.title)}>
                    Chiedi alla chat →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── WORKFLOW ── */}
      {tab === 'workflow' && (
        <div className="mc-panel">
          <p className="mc-panel-intro">Routine settimanale ottimizzata per Meta Ads intelligence</p>
          <div className="mc-workflow-tabs">
            {WORKFLOW.map(w => (
              <button
                key={w.day}
                className={`mc-wf-tab ${workflowDay === w.day ? 'mc-wf-tab-active' : ''}`}
                style={workflowDay === w.day ? { borderColor: w.color, color: w.color } : {}}
                onClick={() => setWorkflowDay(w.day)}
              >
                {w.day}
                <span className="mc-wf-time">{w.time}</span>
              </button>
            ))}
          </div>
          {WORKFLOW.filter(w => w.day === workflowDay).map(w => (
            <div key={w.day} className="mc-wf-steps">
              <p className="mc-wf-label" style={{ color: w.color }}>{w.label} — {w.time}</p>
              {w.steps.map((s, i) => (
                <div key={i} className="mc-wf-step">
                  <span className="mc-wf-num" style={{ background: w.color }}>{i + 1}</span>
                  <div className="mc-wf-step-body">
                    <code className="mc-wf-tool">{s.tool}</code>
                    <span className="mc-wf-action">{s.action}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ── REGOLE & NUMERI ── */}
      {tab === 'regole' && (
        <div className="mc-panel">
          <p className="mc-panel-section-title">6 Regole d'Oro</p>
          {REGOLE.map(r => (
            <div key={r.n} className="mc-regola-card">
              <button
                className="mc-regola-header"
                onClick={() => setExpandedRegola(expandedRegola === r.n ? null : r.n)}
              >
                <span className="mc-regola-n">{r.n}</span>
                <span className="mc-regola-title">{r.title}</span>
                <span className="mc-cat-chevron">{expandedRegola === r.n ? '▲' : '▼'}</span>
              </button>
              {expandedRegola === r.n && (
                <div className="mc-regola-body">{r.body}</div>
              )}
            </div>
          ))}

          <p className="mc-panel-section-title" style={{ marginTop: 24 }}>Numeri di Riferimento</p>
          <div className="mc-numeri-grid">
            {NUMERI.map(n => (
              <div key={n.label} className="mc-numero-card">
                <span className="mc-numero-val">{n.val}</span>
                <span className="mc-numero-label">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

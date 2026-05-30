import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  role: 'user' | 'assistant'
  text: string
  timestamp: Date
}

interface AdFormat {
  platform: string
  icon: string
  formats: { name: string; ratio: string; duration: string; tip: string }[]
}

const AD_FORMATS: AdFormat[] = [
  {
    platform: 'Instagram',
    icon: '📸',
    formats: [
      { name: 'Reels / Story', ratio: '9:16 (1080×1920)', duration: '15–60s', tip: 'Hook nei primi 3 secondi, audio ottimizzato' },
      { name: 'Feed Post', ratio: '1:1 (1080×1080)', duration: '3–60s', tip: 'Caption forte, CTA visibile senza audio' },
      { name: 'Carousel Ad', ratio: '1:1 o 4:5', duration: 'fino a 60s/card', tip: 'Story progressiva tra le card' },
    ],
  },
  {
    platform: 'TikTok',
    icon: '🎵',
    formats: [
      { name: 'In-Feed Ad', ratio: '9:16 (1080×1920)', duration: '5–60s', tip: 'Inizia con azione, usa trend audio' },
      { name: 'TopView', ratio: '9:16', duration: '5–60s', tip: 'Brand awareness massima, prime 3s cruciali' },
      { name: 'Branded Hashtag', ratio: '9:16', duration: '15–60s', tip: 'Coinvolgi UGC, challenge mechanics' },
    ],
  },
  {
    platform: 'YouTube',
    icon: '▶️',
    formats: [
      { name: 'Skippable In-Stream', ratio: '16:9 (1920×1080)', duration: '12s+ (skip dopo 5s)', tip: 'KV nei primi 5s, brand visibile subito' },
      { name: 'Non-Skippable', ratio: '16:9', duration: '15–20s', tip: 'Messaggio diretto, CTA chiara' },
      { name: 'Bumper Ad', ratio: '16:9', duration: '6s esatti', tip: 'Un solo messaggio forte, no narrazione lunga' },
    ],
  },
  {
    platform: 'Facebook',
    icon: '👥',
    formats: [
      { name: 'Feed Video', ratio: '4:5 (1080×1350)', duration: '15s–240min', tip: 'Sottotitoli obbligatori, 85% view senza audio' },
      { name: 'Stories Ad', ratio: '9:16', duration: '1–15s', tip: 'Full screen, link swipe-up, sticker interattivi' },
      { name: 'In-Stream', ratio: '16:9', duration: '5–15s', tip: 'Breve e memorabile, brand nei primi 2s' },
    ],
  },
]

const QUICK_QUESTIONS = [
  'Qual è la formula AIDA per video ads?',
  'Come ottimizzare un video per mobile?',
  'Quali KPI monitorare per una campagna video?',
  'Come fare A/B testing su video ads?',
  'Strategie per aumentare il CTR dei video?',
  'Differenza tra awareness e conversion ads?',
]

const KB: Record<string, string> = {
  aida: `**Formula AIDA per Video Ads**

**A — Attenzione** (0–3s)
Hook visivo immediato: movimento, colore, volto o testo grande. Il 65% delle decisioni di skip avviene nei primi 3 secondi.

**I — Interesse** (3–8s)
Presenta il problema del tuo target. Usa storytelling breve: "Sei stanco di...?" oppure mostra un prima/dopo.

**D — Desiderio** (8–20s)
Mostra la soluzione + benefici concreti. Usa proof sociale (numeri, recensioni, volti reali). Evita jargon tecnico.

**A — Azione** (ultimi 3–5s)
CTA chiara e unica: "Scopri ora", "Prova gratis", "Acquista oggi". Abbina CTA visiva + voiceover.

> Tip pro: per YouTube bumper (6s) comprimi AIDA in A-D-A, saltando la fase Interesse.`,

  mobile: `**Ottimizzazione Video per Mobile**

**Formato**
• Usa verticale 9:16 su Instagram/TikTok, 1:1 su Facebook Feed
• Risoluzione minima: 1080×1920px per Stories/Reels

**Audio**
• Progetta sempre per visione *senza audio* (85% degli utenti su Facebook)
• Aggiungi sottotitoli burn-in o SRT embedded
• Usa musica/SFX come layer aggiuntivo, non come portatore del messaggio

**Testo e CTA**
• Font minimo 24px, leggibile su schermo da 5"
• Zona sicura: mantieni contenuti nei 90% centrali (evita notch/bordi)
• CTA visibile entro i primi 8s, non solo alla fine

**Tecnico**
• Codec H.264, bitrate ≥8Mbps per 1080p
• File max 4GB (Meta), 2GB (TikTok)
• Trim il silenzio iniziale: carica entro il primo frame`,

  kpi: `**KPI per Campagne Video Advertising**

**Awareness**
| KPI | Benchmark settore |
|-----|------------------|
| Video Views | — |
| View Rate (%) | YouTube: >30% buono |
| Reach / Frequency | Freq. ideale: 3–5x |
| Brand Lift | +5% awareness = ottimo |

**Engagement**
| KPI | Benchmark |
|-----|-----------|
| VTR (View-Through Rate) | Facebook: >25% |
| 25/50/75/100% Watch | Analizza drop-off |
| CTR | 0.5–1% = buono, >2% = ottimo |
| Social Engagement | Like, Share, Comment |

**Conversion**
| KPI | Note |
|-----|------|
| CPA (Cost per Action) | Dipende da verticale |
| ROAS | Target ≥ 3x |
| Conversion Rate | Post-click vs post-view |

> Prioritizza il **VTR** e il **25% watch rate** come proxy di rilevanza. Se il 75% abbandona entro i primi 5s, problema di hook.`,

  ab: `**A/B Testing su Video Ads**

**Cosa testare (un elemento alla volta)**
1. **Hook** — Prime 3s diverse (domanda vs affermazione vs sorpresa)
2. **CTA** — Testo, colore, posizione e timing
3. **Durata** — 15s vs 30s sullo stesso concept
4. **Formato** — 9:16 vs 1:1 vs 16:9
5. **Audio** — Con voiceover vs solo musica vs silenzio + testo
6. **Thumbnail** — Per YouTube (impatta il 30% del CTR)

**Setup corretto**
• Budget minimo per variante: ≥€30/giorno su Meta
• Durata test: 7–14 giorni, non interrompere prima
• Audience identica per le due varianti
• Una sola variabile cambiata per test

**Leggere i risultati**
• Usa intervallo di confidenza ≥95% prima di dichiarare un vincitore
• Non ottimizzare solo su CTR: analizza CPA e ROAS
• Conserva i "perdenti" come reference per iterazioni future`,

  ctr: `**Strategie per Aumentare il CTR dei Video**

**Hook visivo**
• Primi 3s: usa movimento rapido, zoom in, testo grande animato
• Volti umani aumentano il CTR del 20–35% in media
• Colori ad alto contrasto rispetto al feed (evita blu su Facebook)

**Testo sovrapposto**
• Aggiungi headline testuale entro 2s anche se c'è voiceover
• Usa urgency words: "Solo oggi", "Limitato", "Gratis"
• CTA testuale visibile per tutta la durata del video

**Thumbnail ottimizzata (YouTube)**
• Volto espressivo + testo ≤6 parole + colori vivaci
• Evita click-bait: alta CTR + bassa retention = penalità algoritmo

**Targeting affinato**
• Retargeting su chi ha visto ≥50% del video precedente
• Lookalike audience da converter, non da viewer
• Escludi chi ha già convertito per non bruciare budget

**Ottimizzazione algoritmica**
• Pubblica nei giorni/orari ad alta attività del tuo target (Mer–Ven, 18–21)
• Varia copy ogni 7–10 giorni per combattere l'ad fatigue`,

  awareness: `**Awareness vs Conversion Ads: Differenze Chiave**

**Awareness Ads**
*Obiettivo:* Raggiungere più persone possibili e farsi ricordare
- Ottimizzazione: Reach, Impression, View Rate
- Durata video ideale: 6–15s (bumper, short-form)
- Targeting: broad, interesse, lookalike top-of-funnel
- KPI: CPM basso, frequenza 3–5x, brand recall lift
- Budget: 60–70% del totale in fase early-funnel

**Conversion Ads**
*Obiettivo:* Generare azioni misurabili (acquisto, lead, iscrizione)
- Ottimizzazione: CPA, ROAS, conversion event
- Durata video ideale: 30–90s (spiega, convince, converte)
- Targeting: retargeting, custom audience, lookalike converter
- KPI: CTR, CR, CPA, ROAS ≥ 3x
- Budget: 30–40% in bottom-of-funnel

**Funnel completo (raccomandato)**
\`\`\`
TOFU → Awareness (reach max)
MOFU → Consideration (engagement, view)
BOFU → Conversion (retargeting, CTA forte)
\`\`\`

> Errore comune: usare video di conversion come prima impressione. Un utente freddo non è pronto ad acquistare.`,
}

function getResponse(input: string): string {
  const q = input.toLowerCase()
  if (q.includes('aida') || q.includes('formula') || q.includes('struttura')) return KB.aida
  if (q.includes('mobile') || q.includes('smartphone') || q.includes('verticale')) return KB.mobile
  if (q.includes('kpi') || q.includes('metriche') || q.includes('monitorare') || q.includes('misurare')) return KB.kpi
  if (q.includes('a/b') || q.includes('ab test') || q.includes('testing') || q.includes('test')) return KB.ab
  if (q.includes('ctr') || q.includes('click') || q.includes('aumentare')) return KB.ctr
  if (q.includes('awareness') || q.includes('conversion') || q.includes('differenza') || q.includes('funnel')) return KB.awareness

  if (q.includes('instagram') || q.includes('reels') || q.includes('story')) {
    const ig = AD_FORMATS.find(f => f.platform === 'Instagram')!
    return `**Formati Instagram Ads**\n\n${ig.formats.map(f =>
      `**${f.name}** — ${f.ratio}\nDurata: ${f.duration}\nTip: ${f.tip}`
    ).join('\n\n')}`
  }
  if (q.includes('tiktok')) {
    const tt = AD_FORMATS.find(f => f.platform === 'TikTok')!
    return `**Formati TikTok Ads**\n\n${tt.formats.map(f =>
      `**${f.name}** — ${f.ratio}\nDurata: ${f.duration}\nTip: ${f.tip}`
    ).join('\n\n')}`
  }
  if (q.includes('youtube') || q.includes('bumper') || q.includes('skippable')) {
    const yt = AD_FORMATS.find(f => f.platform === 'YouTube')!
    return `**Formati YouTube Ads**\n\n${yt.formats.map(f =>
      `**${f.name}** — ${f.ratio}\nDurata: ${f.duration}\nTip: ${f.tip}`
    ).join('\n\n')}`
  }
  if (q.includes('facebook') || q.includes('meta') || q.includes('fb')) {
    const fb = AD_FORMATS.find(f => f.platform === 'Facebook')!
    return `**Formati Facebook Ads**\n\n${fb.formats.map(f =>
      `**${f.name}** — ${f.ratio}\nDurata: ${f.duration}\nTip: ${f.tip}`
    ).join('\n\n')}`
  }

  return `Sono il tuo assistente per **Marketing & Advertising video**. Posso aiutarti con:

• **Formati pubblicitari** — specifiche per Instagram, TikTok, YouTube, Facebook
• **Strategie creative** — formula AIDA, hook, storytelling
• **Ottimizzazione mobile** — codec, sottotitoli, zone sicure
• **KPI e metriche** — cosa monitorare e come interpretare i dati
• **A/B Testing** — come strutturare test efficaci
• **Funnel advertising** — Awareness vs Conversion

Prova una delle domande rapide qui sotto, o chiedimi direttamente cosa ti serve.`
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/^#{1,3} (.+)$/gm, '<strong>$1</strong>')
    .replace(/^\| (.+) \|$/gm, (_, row) =>
      `<div class="mc-table-row">${row.split(' | ').map((c: string) => `<span>${c}</span>`).join('')}</div>`
    )
    .replace(/^•\s(.+)$/gm, '<div class="mc-bullet">• $1</div>')
    .replace(/^>\s(.+)$/gm, '<div class="mc-blockquote">$1</div>')
    .replace(/\n{2,}/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
}

let _id = 0
const uid = () => ++_id

export function MarketingChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      role: 'assistant',
      text: getResponse(''),
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [activeTab, setActiveTab] = useState<'chat' | 'formats'>('chat')
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { id: uid(), role: 'user', text: text.trim(), timestamp: new Date() }
    const reply: Message = { id: uid(), role: 'assistant', text: getResponse(text), timestamp: new Date() }
    setMessages(prev => [...prev, userMsg, reply])
    setInput('')
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="mc-root">
      <div className="mc-header">
        <div className="mc-header-brand">
          <span className="mc-header-icon">📣</span>
          <div>
            <h2 className="mc-title">Marketing & Advertising</h2>
            <p className="mc-subtitle">Strategia video, formati ads e best practice</p>
          </div>
        </div>
        <div className="mc-tabs">
          <button
            className={`mc-tab ${activeTab === 'chat' ? 'mc-tab-active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            Chat
          </button>
          <button
            className={`mc-tab ${activeTab === 'formats' ? 'mc-tab-active' : ''}`}
            onClick={() => setActiveTab('formats')}
          >
            Formati Ads
          </button>
        </div>
      </div>

      {activeTab === 'chat' ? (
        <div className="mc-chat-layout">
          <div className="mc-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`mc-msg mc-msg-${msg.role}`}>
                <div className="mc-msg-avatar">
                  {msg.role === 'assistant' ? '📣' : '👤'}
                </div>
                <div className="mc-msg-body">
                  <div
                    className="mc-msg-text"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                  />
                  <span className="mc-msg-time">
                    {msg.timestamp.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="mc-quick-wrap">
            <p className="mc-quick-label">Domande rapide</p>
            <div className="mc-quick-list">
              {QUICK_QUESTIONS.map(q => (
                <button key={q} className="mc-quick-btn" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="mc-input-row">
            <textarea
              className="mc-input"
              placeholder="Chiedi strategie, formati, KPI, best practice..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={2}
            />
            <button
              className="mc-send-btn"
              onClick={() => send(input)}
              disabled={!input.trim()}
            >
              &#9654;
            </button>
          </div>
        </div>
      ) : (
        <div className="mc-formats-layout">
          <p className="mc-formats-intro">
            Specifiche tecniche aggiornate per i principali formati pubblicitari video.
            Clicca su una piattaforma per espandere i dettagli.
          </p>
          {AD_FORMATS.map(pf => (
            <div key={pf.platform} className="mc-platform-card">
              <button
                className="mc-platform-header"
                onClick={() => setExpandedPlatform(expandedPlatform === pf.platform ? null : pf.platform)}
              >
                <span className="mc-platform-icon">{pf.icon}</span>
                <span className="mc-platform-name">{pf.platform}</span>
                <span className="mc-platform-count">{pf.formats.length} formati</span>
                <span className="mc-platform-chevron">
                  {expandedPlatform === pf.platform ? '▲' : '▼'}
                </span>
              </button>
              {expandedPlatform === pf.platform && (
                <div className="mc-format-list">
                  {pf.formats.map(fmt => (
                    <div key={fmt.name} className="mc-format-item">
                      <div className="mc-format-name">{fmt.name}</div>
                      <div className="mc-format-meta">
                        <span className="mc-format-badge mc-badge-ratio">{fmt.ratio}</span>
                        <span className="mc-format-badge mc-badge-duration">{fmt.duration}</span>
                      </div>
                      <div className="mc-format-tip">💡 {fmt.tip}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

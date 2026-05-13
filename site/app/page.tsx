'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PublicNav } from '@/components/landing/PublicNav'

const icps = [
  {
    tag: 'Cliniche dentali',
    href: '/per-cliniche',
    headline: 'Riempi la tua agenda senza alzare il telefono',
    body: 'Un sistema automatizzato di acquisizione pazienti che risponde su WhatsApp, qualifica, prenota e manda i reminder — tutto senza toccare nulla.',
    metric: '+47% pazienti in 90 giorni',
    icon: '🦷',
  },
  {
    tag: 'Agenzie marketing',
    href: '/per-agenzie',
    headline: 'Smetti di fare ore schiave. Inizia a vendere sistemi.',
    body: 'Costruisci servizi ad alto margine vendendo pipeline AI ai tuoi clienti. Noi creiamo il sistema, tu metti il tuo brand e incassi la differenza.',
    metric: '3× valore per cliente medio',
    icon: '📈',
  },
  {
    tag: 'PMI italiane',
    href: '/#servizi',
    headline: 'La tua concorrenza ha già iniziato. Tu no.',
    body: 'Automazione commerciale, nurturing clienti e reportistica intelligente. Le PMI che adottano AI ora costruiscono vantaggi impossibili da colmare dopo.',
    metric: '140 ore/mese automatizzate',
    icon: '🏭',
  },
]

const steps = [
  {
    n: '01',
    title: 'Audit gratuito',
    body: 'Analizziamo i tuoi processi commerciali e identifichiamo i 3 punti dove l\'AI genera più impatto nel minor tempo.',
  },
  {
    n: '02',
    title: 'Setup in 30 giorni',
    body: 'Costruiamo e attiviamo il sistema. Niente formazione infinita, niente consulenze teoriche — livelihood operativo in 4 settimane.',
  },
  {
    n: '03',
    title: 'ROI misurabile',
    body: 'Dashboard in tempo reale su ogni metrica che conta. Se non vedi risultati entro 90 giorni, rimborsiamo l\'intero investimento.',
  },
]

const proof = [
  { n: '+47%', label: 'Pazienti acquisiti in media' },
  { n: '30gg', label: 'Tempo medio al primo ROI' },
  { n: '140h', label: 'Ore/mese risparmiate per cliente' },
  { n: '€0', label: 'Costo se non funziona' },
]

const cases = [
  {
    sector: 'Clinica Dentale — Milano',
    headline: 'Da 12 a 28 nuovi pazienti al mese in 90 giorni',
    body: 'La clinica perdeva il 65% dei lead che arrivavano dai social perché nessuno rispondeva in tempo. Abbiamo automatizzato la qualifica e la prenotazione su WhatsApp.',
    metrics: [
      { v: '+133%', l: 'Nuovi pazienti/mese' },
      { v: '-65%', l: 'No-show appuntamenti' },
      { v: '€2.800', l: 'Investimento mensile' },
    ],
    href: '/casi-studio',
  },
  {
    sector: 'Agenzia Marketing — Torino',
    headline: '+€12.000 MRR aggiungendo un servizio AI in white-label',
    body: 'Un\'agenzia da 8 persone ha triplicato il valore per cliente senza assumere nessuno, rivendendo la nostra pipeline AI con il proprio brand.',
    metrics: [
      { v: '+€12k', l: 'MRR aggiunto in 60gg' },
      { v: '3×', l: 'LTV medio per cliente' },
      { v: '-80%', l: 'Tempo operativo su delivery' },
    ],
    href: '/casi-studio',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <PublicNav />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center b2b-grid noise overflow-hidden pt-16">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs text-[#C9A84C] tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-body)' }}>
              Sistemi AI per imprenditori italiani
            </span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Il tuo business lavora
            <br />
            <span className="text-gold-b2b">anche quando tu non puoi.</span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Costruiamo sistemi AI su misura che acquisiscono clienti, automatizzano
            processi commerciali e consegnano ROI misurabile. Non consulenza. Non teoria.
            Sistemi che girano 24/7.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/prenota" className="btn-gold-b2b"
              style={{ fontFamily: 'var(--font-body)' }}>
              Prenota un audit gratuito →
            </Link>
            <Link href="/casi-studio"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-[10px] border border-[#222] text-white/50 hover:text-white hover:border-[#333] transition-colors text-sm font-medium"
              style={{ fontFamily: 'var(--font-body)' }}>
              Guarda i risultati
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROOF NUMBERS ──────────────────────────────────── */}
      <section className="border-y border-[#161616] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {proof.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#C9A84C] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}>{p.n}</div>
              <div className="text-sm text-white/35"
                style={{ fontFamily: 'var(--font-body)' }}>{p.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ICP CARDS ──────────────────────────────────────── */}
      <section id="servizi" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}>Per chi è Atlas</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-xl"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Costruiamo sistemi per chi vuole crescere, non per chi vuole sperimentare.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {icps.map((icp, i) => (
            <motion.div key={icp.tag}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <Link href={icp.href} className="card-b2b p-7 h-full flex flex-col group block">
                <div className="text-3xl mb-5">{icp.icon}</div>
                <span className="text-xs text-[#C9A84C] tracking-widest uppercase mb-3 block"
                  style={{ fontFamily: 'var(--font-body)' }}>{icp.tag}</span>
                <h3 className="text-xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}>{icp.headline}</h3>
                <p className="text-sm text-white/40 leading-relaxed flex-1"
                  style={{ fontFamily: 'var(--font-body)' }}>{icp.body}</p>
                <div className="mt-6 pt-5 border-t border-[#222]">
                  <span className="text-sm font-semibold text-[#C9A84C]"
                    style={{ fontFamily: 'var(--font-body)' }}>{icp.metric}</span>
                  <span className="ml-3 text-xs text-white/30 group-hover:text-white/50 transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}>Scopri →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="bg-[#0d0d0d] border-y border-[#161616]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-14"
          >
            <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-4"
              style={{ fontFamily: 'var(--font-body)' }}>Come funziona</p>
            <h2 className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Operativi in 30 giorni, risultati in 90.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-[#C9A84C]/20 to-transparent -translate-x-8 z-0" />
                )}
                <div className="text-5xl font-bold text-[#C9A84C]/10 mb-4 leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}>{s.n}</div>
                <h3 className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES TEASER ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-14"
        >
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}>Risultati reali</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-xl"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Non promettiamo. Misuriamo.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cases.map((c, i) => (
            <motion.div key={c.sector}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card-b2b p-8"
            >
              <p className="text-xs text-white/30 tracking-wide uppercase mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>{c.sector}</p>
              <h3 className="text-xl font-bold mb-4 leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}>{c.headline}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}>{c.body}</p>
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#222]">
                {c.metrics.map(m => (
                  <div key={m.l}>
                    <div className="text-xl font-bold text-[#C9A84C]"
                      style={{ fontFamily: 'var(--font-heading)' }}>{m.v}</div>
                    <div className="text-xs text-white/30 mt-0.5"
                      style={{ fontFamily: 'var(--font-body)' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/casi-studio"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}>
            Leggi tutti i casi studio →
          </Link>
        </div>
      </section>

      {/* ── CTA FINALE ─────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] border-t border-[#161616]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Ogni settimana che aspetti è una settimana che la concorrenza non aspetta.
            </h2>
            <p className="text-white/40 mb-10 max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}>
              Audit gratuito di 45 minuti. Nessun impegno. Ricevi un piano concreto
              per il tuo business.
            </p>
            <Link href="/prenota" className="btn-gold-b2b text-base px-8 py-4"
              style={{ fontFamily: 'var(--font-body)' }}>
              Prenota ora — è gratuito →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-[#111] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#C9A84C] flex items-center justify-center text-black font-bold text-xs"
              style={{ fontFamily: 'var(--font-heading)' }}>A</div>
            <span className="text-white font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}>Atlas AI OS</span>
          </div>
          <nav className="flex items-center gap-6">
            {[
              { href: '/#servizi', label: 'Servizi' },
              { href: '/casi-studio', label: 'Casi Studio' },
              { href: '/chi-siamo', label: 'Chi siamo' },
              { href: '/prenota', label: 'Contatti' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="text-sm text-white/30 hover:text-white/60 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/20" style={{ fontFamily: 'var(--font-body)' }}>
            © 2025 Atlas AI OS
          </p>
        </div>
      </footer>
    </div>
  )
}

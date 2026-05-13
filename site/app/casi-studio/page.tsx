'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PublicNav } from '@/components/landing/PublicNav'

const cases = [
  {
    id: 'dental-milano',
    sector: 'Clinica Dentale',
    location: 'Milano, Lombardia',
    headline: 'Da 12 a 28 nuovi pazienti al mese in 90 giorni',
    challenge: 'La clinica investiva €3.000/mese in campagne Meta e Google, ottenendo buona visibilità ma un tasso di conversione del 28%. Il problema era il tempo di risposta: i lead arrivavano alle 21:00 e trovavano risposta il giorno dopo alle 9. Nel frattempo, il potenziale paziente aveva già prenotato altrove.',
    solution: 'Abbiamo implementato un sistema di risposta automatica su WhatsApp attivo 24/7, con qualifica intelligente (prima visita, urgenza, tipo di trattamento) e prenotazione diretta in agenda. Aggiunti reminder automatici 48h e 2h prima degli appuntamenti, con conferma richiesta. Chi non conferma riceve un follow-up automatico.',
    results: [
      { v: '+133%', l: 'Nuovi pazienti/mese', sub: 'Da 12 a 28 in 90 giorni' },
      { v: '-65%', l: 'Tasso no-show', sub: 'Da 22% a 8% appuntamenti mancati' },
      { v: '+39pp', l: 'Conversion rate lead', sub: 'Da 28% a 67%' },
      { v: '< 60s', l: 'Tempo di risposta medio', sub: 'Contro le 11h precedenti' },
    ],
    quote: 'Non pensavo che il problema fosse la velocità di risposta. Pensavo dovessimo fare campagne migliori. Invece stavamo semplicemente perdendo il 70% dei lead per lentezza.',
    author: 'Titolare, Clinica Dentale Milano',
    investment: '€2.800/mese',
    timeToROI: '34 giorni',
  },
  {
    id: 'agenzia-torino',
    sector: 'Agenzia Marketing',
    location: 'Torino, Piemonte',
    headline: '+€12.000 MRR aggiungendo un servizio AI in white-label',
    challenge: "L'agenzia fatturava €18.000/mese con 12 clienti a €800-1.500/mese ciascuno. I margini si erano compressi al 22% per via dei costi operativi crescenti. Il team non riusciva a scalare senza assumere, e assumere avrebbe mangiato ulteriori margini. Necessitavano di un servizio scalabile ad alto valore.",
    solution: "Abbiamo integrato la nostra piattaforma in white-label nel catalogo dell'agenzia. In 2 settimane hanno avuto accesso a 4 prodotti rivendibili (pipeline di acquisizione, automazione nurturing, reportistica intelligente, chatbot qualifica) con materiali di vendita brandizzati e un playbook per il pitch ai clienti.",
    results: [
      { v: '+€12k', l: 'MRR aggiunto', sub: 'In 60 giorni dal lancio' },
      { v: '3×', l: 'LTV per cliente', sub: 'Da €9.600 a €32.400 annui' },
      { v: '70%', l: 'Upsell clienti esistenti', sub: '8 su 12 clienti hanno accettato' },
      { v: '-80%', l: 'Tempo delivery', sub: 'Sistema autonomo, niente ore operative' },
    ],
    quote: "In 2 settimane avevo un nuovo servizio da €2.800/mese pronto da vendere. Il primo cliente l'ho chiuso al secondo tentativo. Non avrei mai pensato fosse così veloce.",
    author: 'CEO, Agenzia Marketing Torino',
    investment: 'Accordo wholesale + revenue share',
    timeToROI: '28 giorni',
  },
  {
    id: 'pmi-bologna',
    sector: 'PMI Manifatturiera',
    location: 'Bologna, Emilia-Romagna',
    headline: '140 ore/mese recuperate con automazione commerciale end-to-end',
    challenge: 'Un\'azienda con 24 dipendenti e 3 commerciali interni. I commerciali passavano il 60% del tempo a fare attività ripetitive: aggiornare il CRM, inviare follow-up, preparare preventivi standard, inseguire clienti per pagamenti. Nessun sistema di nurturing per i lead freddi.',
    solution: 'Pipeline commerciale automatizzata: dal primo contatto al follow-up post-preventivo. CRM aggiornato automaticamente dopo ogni interazione. Sequenze di nurturing personalizzate per lead freddi. Alerting intelligente per il commerciale solo quando il lead è qualificato e pronto a comprare.',
    results: [
      { v: '140h', l: 'Ore/mese recuperate', sub: 'Stimate dai 3 commerciali' },
      { v: '+28%', l: 'Tasso di chiusura', sub: 'Più follow-up, più conversioni' },
      { v: '-70%', l: 'Tempo su attività admin', sub: 'I commerciali vendono, non scrivono email' },
      { v: '+€340k', l: 'Pipeline generata', sub: 'In 6 mesi dalla partenza' },
    ],
    quote: 'I miei commerciali ora fanno i commerciali. Prima passavano metà giornata su Excel e CRM. Ora quella roba si aggiorna da sola.',
    author: 'CEO, PMI Manifatturiera Bologna',
    investment: '€3.400/mese',
    timeToROI: '41 giorni',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function CasiStudioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <PublicNav />

      {/* HEADER */}
      <section className="relative pt-16 b2b-grid noise overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/4 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.span
            initial="hidden" animate="visible" variants={fadeUp}
            className="inline-block text-xs text-[#C9A84C] tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Risultati reali
          </motion.span>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Non promettiamo.<br />
            <span className="text-gold-b2b">Misuriamo.</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Risultati documentati di imprenditori italiani che hanno implementato
            sistemi Atlas. Numeri reali, business reali.
          </motion.p>
        </div>
      </section>

      {/* CASES */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {cases.map((c, idx) => (
          <motion.article key={c.id}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card-b2b overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 md:p-10 border-b border-[#1a1a1a]">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs px-3 py-1 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20"
                  style={{ fontFamily: 'var(--font-body)' }}>{c.sector}</span>
                <span className="text-xs text-white/30"
                  style={{ fontFamily: 'var(--font-body)' }}>{c.location}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-0"
                style={{ fontFamily: 'var(--font-heading)' }}>{c.headline}</h2>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a]">
              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}>Il problema</p>
                  <p className="text-sm text-white/50 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}>{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}>La soluzione</p>
                  <p className="text-sm text-white/50 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}>{c.solution}</p>
                </div>
                {/* Quote */}
                <blockquote className="border-l-2 border-[#C9A84C]/40 pl-4">
                  <p className="text-sm text-white/60 italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}>"{c.quote}"</p>
                  <p className="text-xs text-white/30 mt-2"
                    style={{ fontFamily: 'var(--font-body)' }}>— {c.author}</p>
                </blockquote>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}>Risultati</p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {c.results.map(r => (
                    <div key={r.l}>
                      <div className="text-3xl font-bold text-[#C9A84C] mb-0.5"
                        style={{ fontFamily: 'var(--font-heading)' }}>{r.v}</div>
                      <div className="text-sm text-white/60 mb-0.5"
                        style={{ fontFamily: 'var(--font-body)' }}>{r.l}</div>
                      <div className="text-xs text-white/25"
                        style={{ fontFamily: 'var(--font-body)' }}>{r.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-[#1a1a1a] grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-white/25 mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}>Investimento</p>
                    <p className="text-sm font-semibold text-white/70"
                      style={{ fontFamily: 'var(--font-body)' }}>{c.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/25 mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}>Tempo al ROI</p>
                    <p className="text-sm font-semibold text-[#C9A84C]"
                      style={{ fontFamily: 'var(--font-body)' }}>{c.timeToROI}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] border-t border-[#161616]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Il prossimo caso studio potrebbe essere il tuo.
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}>
              Audit gratuito di 45 minuti. Analizziamo il tuo business e capiamo
              dove l'automazione genera più impatto.
            </p>
            <Link href="/prenota" className="btn-gold-b2b"
              style={{ fontFamily: 'var(--font-body)' }}>
              Prenota l'audit gratuito →
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#111] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#C9A84C] flex items-center justify-center text-black font-bold text-xs"
              style={{ fontFamily: 'var(--font-heading)' }}>A</div>
            <span className="text-sm text-white/50" style={{ fontFamily: 'var(--font-body)' }}>Atlas AI OS</span>
          </Link>
          <p className="text-xs text-white/20" style={{ fontFamily: 'var(--font-body)' }}>© 2025 Atlas AI OS</p>
        </div>
      </footer>
    </div>
  )
}

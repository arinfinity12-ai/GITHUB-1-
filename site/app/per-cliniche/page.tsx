'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PublicNav } from '@/components/landing/PublicNav'

const problems = [
  { icon: '📱', text: 'Pazienti che scrivono su WhatsApp alle 22 e non ricevono risposta fino al giorno dopo — e nel frattempo prenotano altrove.' },
  { icon: '📅', text: 'Agenda piena di no-show: pazienti che non si presentano e non avvisano, lasciando buchi impossibili da riempire.' },
  { icon: '📢', text: 'Investite in pubblicità su Meta e Google, i lead arrivano, ma il tasso di conversione è sotto il 30%.' },
  { icon: '⏰', text: 'La segreteria passa ore al telefono per confermare appuntamenti invece di gestire l\'accoglienza in clinica.' },
]

const solution = [
  { n: '01', title: 'Risposta immediata 24/7', body: 'Il sistema risponde su WhatsApp in meno di 60 secondi, qualifica il paziente (prima visita? urgenza? assicurazione?) e offre gli slot disponibili in tempo reale.' },
  { n: '02', title: 'Prenotazione automatica', body: 'Il paziente sceglie il dentista, la data e l\'orario direttamente in chat. Nessuna telefonata. Nessun passaggio manuale.' },
  { n: '03', title: 'Reminder e follow-up', body: 'Reminder automatici 48h e 2h prima dell\'appuntamento. Chi non conferma riceve una chiamata automatica. Il no-show scende sotto il 10%.' },
  { n: '04', title: 'Riattivazione pazienti dormienti', body: 'Il sistema identifica pazienti che non tornano da 6+ mesi e invia campagne personalizzate di riattivazione. Media: +18 appuntamenti/mese aggiuntivi.' },
]

const metrics = [
  { v: '+47%', l: 'Nuovi pazienti/mese' },
  { v: '-65%', l: 'No-show' },
  { v: '< 60s', l: 'Tempo di risposta medio' },
  { v: '30gg', l: 'Al primo ROI visibile' },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function PerClinicheePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <PublicNav />

      {/* HERO */}
      <section className="relative pt-16 b2b-grid noise overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.span
            initial="hidden" animate="visible" variants={fadeUp}
            className="inline-block text-xs text-[#C9A84C] tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Per cliniche dentali
          </motion.span>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Riempi la tua agenda.<br />
            <span className="text-gold-b2b">Senza alzare il telefono.</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Un sistema di conversione pazienti che risponde su WhatsApp, prenota in autonomia
            e riduce i no-show del 65%. Operativo in 30 giorni.
          </motion.p>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/prenota" className="btn-gold-b2b" style={{ fontFamily: 'var(--font-body)' }}>
              Prenota un audit gratuito →
            </Link>
            <Link href="/casi-studio"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-[10px] border border-[#222] text-white/50 hover:text-white hover:border-[#333] transition-colors text-sm"
              style={{ fontFamily: 'var(--font-body)' }}>
              Guarda i risultati
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border-y border-[#161616] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div key={m.l}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#C9A84C] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}>{m.v}</div>
              <div className="text-sm text-white/35" style={{ fontFamily: 'var(--font-body)' }}>{m.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-14"
        >
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}>Il problema</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-xl"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Stai perdendo pazienti ogni giorno senza saperlo.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card-b2b p-6 flex gap-4"
            >
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <p className="text-sm text-white/50 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
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
              Il sistema di conversione pazienti Atlas.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {solution.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-b2b p-7"
              >
                <div className="text-4xl font-bold text-[#C9A84C]/10 mb-3 leading-none"
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

      {/* CASE STUDY */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-b2b p-8 md:p-12"
        >
          <p className="text-xs text-white/30 tracking-widest uppercase mb-5"
            style={{ fontFamily: 'var(--font-body)' }}>Caso studio — Clinica Dentale, Milano</p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-5 max-w-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}>
            "Da 12 a 28 nuovi pazienti al mese. In 90 giorni."
          </h3>
          <p className="text-white/40 leading-relaxed max-w-2xl mb-8"
            style={{ fontFamily: 'var(--font-body)' }}>
            La clinica aveva investito €3.000/mese in campagne Meta ma il tasso di conversione
            era al 28%. I lead arrivavano ma nessuno rispondeva abbastanza velocemente.
            Dopo 90 giorni con il sistema Atlas, il tasso di conversione è al 67% e
            la segreteria non gestisce più nessuna prenotazione manuale.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#222]">
            {[
              { v: '+133%', l: 'Nuovi pazienti/mese' },
              { v: '-65%', l: 'No-show appuntamenti' },
              { v: '+39pp', l: 'Tasso di conversione lead' },
            ].map(m => (
              <div key={m.l}>
                <div className="text-2xl sm:text-3xl font-bold text-[#C9A84C]"
                  style={{ fontFamily: 'var(--font-heading)' }}>{m.v}</div>
                <div className="text-xs text-white/30 mt-1"
                  style={{ fontFamily: 'var(--font-body)' }}>{m.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
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
              Scopri quanti pazienti stai perdendo ogni mese.
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}>
              45 minuti di audit gratuito. Analizziamo i tuoi numeri attuali e calcoliamo
              il potenziale di crescita reale.
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

'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PublicNav } from '@/components/landing/PublicNav'

const pains = [
  { icon: '🔄', text: 'Fai le stesse cose ogni mese per ogni cliente — senza mai costruire qualcosa di scalabile. Tempo × euro, per sempre.' },
  { icon: '📉', text: 'I clienti chiedono sempre di più, pagano uguale. Il margine si assottiglia mentre i costi interni crescono.' },
  { icon: '🏃', text: 'Non riesci a vendere servizi da €3.000+/mese perché non sai cosa offrire oltre i classici ads e social.' },
  { icon: '🤖', text: 'Sai che l\'AI cambierà tutto ma non hai il tempo (né le competenze) per costruire qualcosa di concreto da vendere.' },
]

const offer = [
  { n: '01', title: 'White-label completo', body: 'Costruiamo il sistema, tu lo vendi con il tuo brand. I tuoi clienti non sanno che esiste Atlas — vedono solo i tuoi risultati.' },
  { n: '02', title: 'Margine 3× sul costo', body: 'Accedi ai nostri sistemi a costo wholesale. La maggior parte delle agenzie rivende a 3-5× il costo base, creando margini che non aveva prima.' },
  { n: '03', title: 'Onboarding clienti in 2 settimane', body: 'Ricevi materiali di vendita, case study brandizzati e un playbook operativo. Chiudi il cliente, noi costruiamo. Tu incassi.' },
  { n: '04', title: 'Revenue share opzionale', body: 'Se preferisci, strutturiamo un accordo su performance: niente costi fissi, quota su ogni cliente che generiamo insieme.' },
]

const metrics = [
  { v: '3×', l: 'Valore medio per cliente' },
  { v: '+€12k', l: 'MRR aggiunto in 60gg' },
  { v: '-80%', l: 'Tempo operativo delivery' },
  { v: '2 sett.', l: 'Onboarding primo cliente' },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function PerAgenziePage() {
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
            Per agenzie marketing
          </motion.span>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Smetti di fare ore schiave.<br />
            <span className="text-gold-b2b">Inizia a vendere sistemi.</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Aggiungi un servizio AI ad alto margine al tuo catalogo in 2 settimane.
            White-label completo, zero investimento tecnico, 3× sul costo.
          </motion.p>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/prenota" className="btn-gold-b2b" style={{ fontFamily: 'var(--font-body)' }}>
              Parla con noi →
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

      {/* PAINS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-14"
        >
          <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)' }}>Il problema</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-xl"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Le agenzie tradizionali sono intrappolate in un modello rotto.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {pains.map((p, i) => (
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

      {/* OFFER */}
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
              Il programma partner Atlas.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {offer.map((o, i) => (
              <motion.div key={o.n}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-b2b p-7"
              >
                <div className="text-4xl font-bold text-[#C9A84C]/10 mb-3 leading-none"
                  style={{ fontFamily: 'var(--font-heading)' }}>{o.n}</div>
                <h3 className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}>{o.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}>{o.body}</p>
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
            style={{ fontFamily: 'var(--font-body)' }}>Caso studio — Agenzia Marketing, Torino</p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-5 max-w-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}>
            "+€12.000 MRR in 60 giorni senza assumere nessuno."
          </h3>
          <p className="text-white/40 leading-relaxed max-w-2xl mb-8"
            style={{ fontFamily: 'var(--font-body)' }}>
            Un'agenzia da 8 persone con clienti da €800-1.200/mese è passata a pacchetti
            da €2.800-4.500/mese integrando i sistemi Atlas in white-label. Il 70% dei
            clienti esistenti ha accettato l'upgrade al primo pitch. Nessun nuovo assunto,
            nessun overhead tecnico.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#222]">
            {[
              { v: '+€12k', l: 'MRR aggiunto in 60gg' },
              { v: '3×', l: 'LTV per cliente medio' },
              { v: '70%', l: 'Upsell clienti esistenti' },
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
              Quante agenzie nel tuo settore lo stanno già facendo?
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}>
              Chiamata di 30 minuti per capire se il programma partner è adatto alla tua agenzia.
              Zero pressione, tutto concreto.
            </p>
            <Link href="/prenota" className="btn-gold-b2b"
              style={{ fontFamily: 'var(--font-body)' }}>
              Parla con noi →
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

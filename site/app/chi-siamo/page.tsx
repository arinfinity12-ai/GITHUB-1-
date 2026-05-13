'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PublicNav } from '@/components/landing/PublicNav'

const values = [
  {
    title: 'Sistemi, non consulenza',
    body: 'Non vendiamo slide con raccomandazioni. Costruiamo sistemi che girano da soli e consegnano risultati misurabili. Se non funziona, restituiamo l\'investimento.',
  },
  {
    title: 'ROI prima di tutto',
    body: 'Ogni decisione progettuale parte da una domanda: questo genera valore misurabile per il cliente? Se la risposta non è un "sì" chiaro, non si fa.',
  },
  {
    title: 'Velocità con qualità',
    body: 'Operativi in 30 giorni. Non perché facciamo le cose di fretta, ma perché abbiamo costruito un processo di delivery testato su decine di clienti.',
  },
  {
    title: 'Trasparenza totale',
    body: 'Dashboard in tempo reale. Sai sempre cosa sta succedendo, quanto costa, cosa genera. Nessuna scatola nera, nessun report mensile da interpretare.',
  },
]

const stack = ['Next.js', 'n8n', 'Make (Integromat)', 'OpenAI API', 'Supabase', 'Vercel', 'WhatsApp Business API', 'Stripe']

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function ChiSiamoPage() {
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
            Chi siamo
          </motion.span>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Costruiamo sistemi AI<br />
            <span className="text-gold-b2b">per chi vuole crescere.</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Atlas nasce dall'osservazione diretta di un gap enorme: le PMI italiane
            hanno accesso agli stessi tool delle big tech, ma non alle competenze per
            implementarli. Siamo qui per colmare quel gap.
          </motion.p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            {/* Avatar */}
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#a88530] flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-[#0a0a0a]"
                style={{ fontFamily: 'var(--font-heading)' }}>RP</span>
            </div>
            <h2 className="text-3xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}>Riccardo Piombino</h2>
            <p className="text-[#C9A84C] text-sm mb-6"
              style={{ fontFamily: 'var(--font-body)' }}>Founder, Atlas AI OS — Milano</p>
            <div className="space-y-4 text-white/50 leading-relaxed text-sm"
              style={{ fontFamily: 'var(--font-body)' }}>
              <p>
                Ho iniziato a costruire sistemi AI nel 2022, inizialmente per automatizzare
                i processi del mio business. Ho capito subito che il valore non era nel
                singolo tool, ma nell'architettura: come i pezzi si connettono tra loro
                per generare risultati senza intervento umano costante.
              </p>
              <p>
                Dopo aver implementato sistemi in oltre 20 business italiani — cliniche,
                agenzie, PMI — ho fondato Atlas per portare questa metodologia a scala.
                Non vendiamo abbonamenti SaaS. Costruiamo infrastrutture AI su misura
                che diventano un vantaggio competitivo reale.
              </p>
              <p>
                La mia obsession: ogni ora che un imprenditore passa su attività automatizzabili
                è un'ora rubata alla strategia. Sono qui per restituirgliela.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="card-b2b p-6">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>Numeri ad oggi</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { v: '20+', l: 'Business implementati' },
                  { v: '3', l: 'Verticali specializzati' },
                  { v: '€0', l: 'VC funding — bootstrap' },
                  { v: '100%', l: 'Garanzia soddisfazione' },
                ].map(s => (
                  <div key={s.l}>
                    <div className="text-3xl font-bold text-[#C9A84C]"
                      style={{ fontFamily: 'var(--font-heading)' }}>{s.v}</div>
                    <div className="text-xs text-white/35 mt-0.5"
                      style={{ fontFamily: 'var(--font-body)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-b2b p-6">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>Stack tecnico</p>
              <div className="flex flex-wrap gap-2">
                {stack.map(s => (
                  <span key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#161616] border border-[#222] text-white/50"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#0d0d0d] border-y border-[#161616]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-14"
          >
            <p className="text-xs text-[#C9A84C] tracking-widest uppercase mb-4"
              style={{ fontFamily: 'var(--font-body)' }}>Come lavoriamo</p>
            <h2 className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Principi non negoziabili.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="card-b2b p-7"
              >
                <h3 className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}>{v.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Pronto a costruire qualcosa che funziona da solo?
          </h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}>
            Audit gratuito di 45 minuti. Capiamo insieme dove l'automazione
            genera più impatto nel tuo business specifico.
          </p>
          <Link href="/prenota" className="btn-gold-b2b"
            style={{ fontFamily: 'var(--font-body)' }}>
            Prenota una call →
          </Link>
        </motion.div>
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

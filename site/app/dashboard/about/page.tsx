'use client'

import { motion } from 'motion/react'
import { GlowOrb } from '@/components/ui/GlowOrb'

const stackGroups = [
  { title: 'Frontend',    items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Motion'] },
  { title: 'Backend',     items: ['Supabase', 'Railway', 'Node.js', 'REST API'] },
  { title: 'Automazione', items: ['n8n', 'Apollo.io', 'Meta Ads API', 'GoHighLevel', 'MCP'] },
  { title: 'AI / LLM',    items: ['Claude 4', 'GPT-4o', 'Gemini', 'Anthropic SDK'] },
  { title: 'Deploy',      items: ['Vercel', 'Railway', 'GitHub Actions'] },
]

const timeline = [
  { year: '2024', event: 'Primi workflow n8n e automazioni LinkedIn' },
  { year: '2025', event: 'Primi prodotti AI venduti a clienti PMI' },
  { year: '2026', event: 'Lancio Atlas AI OS — sistema operativo completo' },
]

export default function AboutDashboardPage() {
  return (
    <div className="relative min-h-full p-6 md:p-8">
      <GlowOrb size={500} x="80%" y="30%" opacity={0.04} blur={100} />

      <div className="max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            Chi sono
          </h1>
          <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Builder di sistemi AI · Milano · 28 anni
          </p>
        </motion.div>

        {/* Profilo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-5 flex items-center gap-5"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A8843A] to-[#5a4018] flex items-center justify-center text-[#1a1a2e] text-2xl font-black shrink-0"
            style={{ fontFamily: 'var(--font-display)' }}>
            RP
          </div>
          <div>
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Riccardo Piombino
            </h2>
            <p className="text-white/50 text-sm mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
              Imprenditore · Builder AI · Creator di Atlas AI OS
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400/80" style={{ fontFamily: 'var(--font-body)' }}>Disponibile per nuovi progetti</span>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-6 mb-5"
        >
          <h3 className="text-sm font-semibold text-white/70 mb-3" style={{ fontFamily: 'var(--font-body)' }}>Bio</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Ho iniziato a costruire sistemi AI per risolvere problemi reali: trovare clienti,
            automatizzare la gestione, produrre contenuti. Senza un team grande. Senza sprechi.
          </p>
          <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Atlas AI OS è il risultato: un ecosistema di tool e automazioni che uso ogni giorno
            per il mio business e vendo ad altri imprenditori che vogliono scalare in modo intelligente.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 mb-5"
        >
          <h3 className="text-sm font-semibold text-white/70 mb-4" style={{ fontFamily: 'var(--font-body)' }}>Timeline</h3>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#A8843A] text-xs font-mono shrink-0 w-10" style={{ fontFamily: 'var(--font-body)' }}>{t.year}</span>
                <div className="w-px bg-[#2e2e50] self-stretch mx-1 shrink-0" />
                <p className="text-white/55 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{t.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold text-white/70 mb-4" style={{ fontFamily: 'var(--font-body)' }}>Stack completo</h3>
          <div className="space-y-4">
            {stackGroups.map((g) => (
              <div key={g.title}>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-body)' }}>{g.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-lg text-xs border border-[#2e2e50] text-white/50 hover:border-[#A8843A]/30 hover:text-white/70 transition-all duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

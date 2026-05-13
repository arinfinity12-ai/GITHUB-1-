'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { Badge } from '@/components/ui/Badge'

const features = [
  {
    icon: '⚡',
    title: 'Automazione n8n',
    desc: 'Workflow AI pronti in ore, non settimane. Integra qualsiasi tool con API in pochi click.',
  },
  {
    icon: '◈',
    title: 'Database Supabase',
    desc: 'Dati strutturati, auth utenti e storage in un unico backend scalabile e sicuro.',
  },
  {
    icon: '◎',
    title: 'Frontend Next.js',
    desc: 'Interfacce veloci, SEO-friendly e deploy istantaneo su Vercel con ogni push.',
  },
  {
    icon: '⬡',
    title: 'AI / LLM Integration',
    desc: 'Claude, GPT-4, Gemini integrati nei flussi di lavoro per automazioni intelligenti.',
  },
  {
    icon: '◆',
    title: 'Deploy Railway',
    desc: 'Backend, cron job e microservizi in produzione con zero configurazione DevOps.',
  },
  {
    icon: '◉',
    title: 'Design System',
    desc: 'Ogni prodotto costruito con il design system Atlas: coerente, premium, scalabile.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <Badge>Stack Tecnico</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tutto ciò che serve,<br />niente di superfluo.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Ogni componente del sistema è scelto per massimizzare velocità, qualità e ROI.
          </motion.p>
        </div>

        {/* Grid features */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="glass rounded-2xl p-6 group hover:border-[#A8843A]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#A8843A]/05"
            >
              <div className="w-10 h-10 rounded-xl bg-[#A8843A]/10 border border-[#A8843A]/20 flex items-center justify-center text-[#A8843A] text-lg mb-4 group-hover:bg-[#A8843A]/20 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                {f.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

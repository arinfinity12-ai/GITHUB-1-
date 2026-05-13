'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { GlowOrb } from '@/components/ui/GlowOrb'

const stats = [
  { value: 12, suffix: '+', label: 'Prodotti AI costruiti', desc: 'Dal 2024 ad oggi' },
  { value: 50, suffix: 'k+', label: 'Ore automatizzate', desc: 'Per clienti e team' },
  { value: 4, suffix: 'x', label: 'ROI medio', desc: 'Sui progetti consegnati' },
  { value: 100, suffix: '%', label: 'Client-side', desc: 'Nessun dato caricato su server' },
]

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <GlowOrb size={700} x="50%" y="50%" opacity={0.05} blur={120} />

      {/* Linee decorative */}
      <div aria-hidden className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A8843A]/15 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2e2e50]/40 rounded-2xl overflow-hidden border border-[#2e2e50]/40">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a2e] px-8 py-10 text-center group hover:bg-[#252545] transition-colors duration-300"
            >
              <div
                className="text-4xl md:text-5xl font-black text-gradient mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {inView ? (
                  <AnimatedCounter end={s.value} suffix={s.suffix} duration={1.5} />
                ) : (
                  `0${s.suffix}`
                )}
              </div>
              <p className="text-white/80 text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                {s.label}
              </p>
              <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

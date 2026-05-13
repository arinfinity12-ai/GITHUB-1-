'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { GlowOrb } from '@/components/ui/GlowOrb'

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <GlowOrb size={800} x="50%" y="50%" opacity={0.1} blur={100} />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass rounded-3xl px-8 py-16 border border-[#A8843A]/20"
          style={{ boxShadow: '0 0 80px rgba(168,132,58,0.08)' }}
        >
          <p className="text-[#A8843A] text-sm tracking-widest uppercase mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            Inizia ora
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 text-gradient"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pronto ad attivare<br />il tuo Atlas OS?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Esplora la dashboard, testa i tool e scopri come automatizzare il tuo business.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
            style={{
              background: '#A8843A', color: '#1a1a2e',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 0 50px rgba(168,132,58,0.35)',
            }}
          >
            Apri Dashboard
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

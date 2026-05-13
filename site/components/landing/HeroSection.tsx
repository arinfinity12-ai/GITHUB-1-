'use client'

import { motion, type Variants } from 'motion/react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { GlowOrb } from '@/components/ui/GlowOrb'

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden grid-bg">
      {/* Orbi ambientali */}
      <GlowOrb size={800} x="20%"  y="30%" opacity={0.07} />
      <GlowOrb size={600} x="80%"  y="70%" opacity={0.06} blur={100} />
      <GlowOrb size={400} x="50%"  y="50%" opacity={0.04} blur={80} color="#6060c0" />

      {/* Cerchio decorativo dietro il titolo */}
      <div
        aria-hidden
        className="absolute w-[600px] h-[600px] rounded-full border border-[#A8843A]/08 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        aria-hidden
        className="absolute w-[900px] h-[900px] rounded-full border border-[#A8843A]/04 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <Badge dot>Sistema Operativo AI · Milano 2026</Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="text-gradient">Atlas</span>
          <br />
          <span className="text-white/90">AI OS</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-white/60 mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Automazione, AI e prodotti digitali integrati in un unico sistema operativo.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base text-white/35 mb-12 max-w-xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Dal prototipo alla produzione — senza team enormi, senza sprechi.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: '#A8843A', color: '#1a1a2e', fontFamily: 'var(--font-body)',
              boxShadow: '0 0 40px rgba(168,132,58,0.3)' }}
          >
            Apri Dashboard
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-[#2e2e50] text-white/60 hover:text-white hover:border-[#A8843A]/40 transition-all duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Scopri di più
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20" style={{ fontFamily: 'var(--font-body)' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#A8843A]/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}

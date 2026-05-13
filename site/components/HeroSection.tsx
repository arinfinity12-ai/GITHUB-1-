'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

/* Varianti animazione per entrata sequenziale */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* Sfondo: bagliore oro sfumato */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #A8843A 0%, transparent 70%)' }}
      />

      {/* Griglia decorativa sottile */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#A8843A 1px, transparent 1px), linear-gradient(90deg, #A8843A 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A8843A]/30 bg-[#A8843A]/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8843A] animate-pulse" />
          <span
            className="text-xs text-[#A8843A] tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Sistema operativo AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          style={{ fontFamily: 'var(--font-display)', color: '#A8843A' }}
        >
          Atlas AI OS
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl text-white/70 mb-4 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Sistemi AI costruiti per imprenditori.
        </motion.p>

        {/* Sottotesto */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-base text-white/40 mb-12 max-w-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Automazione, AI e prodotti digitali integrati in un unico sistema operativo personale.
          Dal prototipo alla produzione, senza sprechi.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: '#A8843A',
              color: '#1a1a2e',
              fontFamily: 'var(--font-body)',
            }}
          >
            Chi sono →
          </Link>
          <a
            href="https://github.com/arinfinity12-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-[#2e2e50] text-white/60 hover:text-white hover:border-[#A8843A]/40 transition-all duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

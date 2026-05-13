'use client'

import { motion } from 'motion/react'

/* Stack personale */
const stackTags = ['Next.js', 'Supabase', 'n8n', 'Vercel', 'Railway', 'TypeScript', 'AI / LLM']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

export function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-24 overflow-hidden">

      {/* Bagliore sfondo */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #A8843A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl w-full">

        {/* Avatar */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-5 mb-10"
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl text-[#1a1a2e] text-xl font-bold shrink-0"
            style={{ background: '#A8843A', fontFamily: 'var(--font-display)' }}
          >
            RP
          </div>
          <div>
            <h1
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: '#A8843A' }}
            >
              Riccardo Piombino
            </h1>
            <p className="text-white/50 text-sm mt-1" style={{ fontFamily: 'var(--font-body)' }}>
              Milano, Italia · Imprenditore · Builder AI
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-white/70 text-lg leading-relaxed mb-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          28 anni. Costruisco sistemi AI per imprenditori e aziende che vogliono
          automatizzare processi, generare lead e scalare senza assumere team enormi.
        </motion.p>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-white/50 text-base leading-relaxed mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Non ho un background tecnico classico — ho imparato costruendo.
          Atlas AI OS è il mio sistema operativo personale: un insieme di tool,
          automazioni e prodotti che ho sviluppato lavorando su problemi reali.
        </motion.p>

        {/* Divisore */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="h-px bg-[#2e2e50] mb-10"
        />

        {/* Stack */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <p
            className="text-xs text-white/30 uppercase tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {stackTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm border border-[#2e2e50] text-white/60 bg-[#252545]/50 hover:border-[#A8843A]/40 hover:text-white/80 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

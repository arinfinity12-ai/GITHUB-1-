'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { Badge } from '@/components/ui/Badge'

const stack = ['Next.js', 'Supabase', 'n8n', 'Vercel', 'Railway', 'TypeScript', 'Claude AI', 'GPT-4']

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Sinistra: avatar + decorazioni */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center md:items-start"
        >
          {/* Card avatar */}
          <div className="relative">
            <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-[#A8843A] via-[#8a6a28] to-[#5a4018] flex items-center justify-center text-[#1a1a2e] text-6xl font-black shadow-2xl shadow-[#A8843A]/20"
              style={{ fontFamily: 'var(--font-display)' }}>
              RP
            </div>
            {/* Badge sovrapposto */}
            <div className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                  Disponibile per progetti
                </span>
              </div>
            </div>
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mt-10 max-w-xs">
            {stack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs border border-[#2e2e50] text-white/50 hover:text-white/80 hover:border-[#A8843A]/30 transition-all duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Destra: bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mb-5">
            <Badge>Chi sono</Badge>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Riccardo<br />Piombino
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            28 anni, Milano. Costruisco sistemi AI per imprenditori che vogliono
            automatizzare processi, generare lead e scalare senza team enormi.
          </p>
          <p className="text-white/45 text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Non ho un background tecnico classico — ho imparato costruendo su problemi reali.
            Atlas AI OS è il mio sistema operativo personale: automazioni, tool e prodotti
            che uso ogni giorno e vendo ai miei clienti.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/arinfinity12-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm text-white/60 hover:text-white transition-all duration-200 hover:border-[#A8843A]/30"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

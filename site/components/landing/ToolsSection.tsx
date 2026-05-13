'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'

const tools = [
  {
    id: 'videoedit',
    icon: '🎬',
    label: 'VideoEdit',
    desc: 'Editor video in-browser. Taglia, unisci, converti, estrai audio. Nessun upload su server.',
    tag: 'Live',
    href: '/dashboard/tools',
    color: '#A8843A',
  },
  {
    id: 'lead-gen',
    icon: '◎',
    label: 'Lead Generator',
    desc: 'Scraping, arricchimento e sequenze email automatiche con Apollo + n8n.',
    tag: 'In sviluppo',
    href: '/dashboard',
    color: '#6060c0',
  },
  {
    id: 'ads-autopilot',
    icon: '⬡',
    label: 'Ads Autopilot',
    desc: 'Generazione automatica di copy e creative per Meta Ads con AI.',
    tag: 'In sviluppo',
    href: '/dashboard',
    color: '#3a7a8a',
  },
  {
    id: 'dashboard-builder',
    icon: '◆',
    label: 'Dashboard Builder',
    desc: 'Crea dashboard business personalizzate per clienti in pochi minuti.',
    tag: 'Presto',
    href: '/dashboard',
    color: '#7a3a8a',
  },
]

export function ToolsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tools" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Bagliore centrale */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #A8843A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex justify-center mb-5"
          >
            <Badge>Ecosystem</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            I tool di <span className="text-gradient">Atlas OS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Un ecosistema di prodotti AI che si integrano e si potenziano a vicenda.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Link
                href={tool.href}
                className="group flex flex-col h-full glass rounded-2xl p-7 hover:border-[#A8843A]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${tool.color}18`, border: `1px solid ${tool.color}30` }}>
                    {tool.icon}
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full border"
                    style={{
                      color: tool.tag === 'Live' ? '#A8843A' : '#ffffff60',
                      borderColor: tool.tag === 'Live' ? '#A8843A50' : '#2e2e50',
                      background: tool.tag === 'Live' ? '#A8843A15' : 'transparent',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {tool.tag}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  {tool.label}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                  {tool.desc}
                </p>
                <div className="flex items-center gap-1 mt-5 text-[#A8843A]/60 text-xs group-hover:text-[#A8843A] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Apri tool
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

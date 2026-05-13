'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { GlowOrb } from '@/components/ui/GlowOrb'

const tools = [
  {
    id: 'videoedit',
    icon: '🎬',
    label: 'VideoEdit',
    desc: 'Editor video in-browser. Taglia, unisci, converti e estrai audio senza nessun server.',
    status: 'live',
    href: '/',
    color: '#A8843A',
    stats: 'FFmpeg.wasm · 100% client-side',
  },
  {
    id: 'lead-gen',
    icon: '◎',
    label: 'Lead Generator',
    desc: 'Scraping e sequenze email automatiche con Apollo + n8n. Pipeline completa.',
    status: 'dev',
    href: '#',
    color: '#6060c0',
    stats: 'Apollo API · n8n workflow',
  },
  {
    id: 'ads-autopilot',
    icon: '⬡',
    label: 'Ads Autopilot',
    desc: 'Generazione automatica di copy e creative per Meta Ads con AI.',
    status: 'dev',
    href: '#',
    color: '#3a7a8a',
    stats: 'Meta API · Claude AI',
  },
  {
    id: 'dashboard-builder',
    icon: '◆',
    label: 'Dashboard Builder',
    desc: 'Crea dashboard business personalizzate per i tuoi clienti in pochi minuti.',
    status: 'soon',
    href: '#',
    color: '#7a3a8a',
    stats: 'Next.js · Supabase',
  },
  {
    id: 'ghl-mcp',
    icon: '◉',
    label: 'GHL MCP',
    desc: 'Integrazione GoHighLevel con MCP per automazioni CRM avanzate.',
    status: 'dev',
    href: '#',
    color: '#3a8a5a',
    stats: 'GHL API · MCP server',
  },
  {
    id: 'n8n-mcp',
    icon: '⬢',
    label: 'n8n MCP',
    desc: 'Server MCP per controllare n8n tramite Claude AI in conversazione naturale.',
    status: 'dev',
    href: '#',
    color: '#8a5a3a',
    stats: 'n8n API · MCP protocol',
  },
]

const statusConfig = {
  live:  { label: 'Live',          color: '#A8843A',  bg: '#A8843A15' },
  dev:   { label: 'In sviluppo',   color: '#ffffff60', bg: 'transparent' },
  soon:  { label: 'Presto',        color: '#ffffff40', bg: 'transparent' },
}

export default function ToolsPage() {
  return (
    <div className="relative min-h-full p-6 md:p-8">
      <GlowOrb size={500} x="70%" y="20%" opacity={0.04} blur={100} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
          Tool <span className="text-gradient">Atlas OS</span>
        </h1>
        <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          {tools.filter(t => t.status === 'live').length} attivi · {tools.filter(t => t.status === 'dev').length} in sviluppo · {tools.filter(t => t.status === 'soon').length} in arrivo
        </p>
      </motion.div>

      {/* Grid tools */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {tools.map((tool, i) => {
          const s = statusConfig[tool.status as keyof typeof statusConfig]
          const isLive = tool.status === 'live'
          const card = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={[
                'glass rounded-2xl p-6 flex flex-col transition-all duration-300',
                isLive ? 'hover:border-[#A8843A]/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 cursor-pointer' : 'opacity-70',
              ].join(' ')}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${tool.color}18`, border: `1px solid ${tool.color}30` }}
                >
                  {tool.icon}
                </div>
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full border"
                  style={{ color: s.color, borderColor: `${s.color}50`, background: s.bg, fontFamily: 'var(--font-body)' }}
                >
                  {s.label}
                </span>
              </div>

              <h3 className="text-white font-semibold text-base mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                {tool.label}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                {tool.desc}
              </p>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#2e2e50]">
                <span className="text-[10px] text-white/25" style={{ fontFamily: 'var(--font-body)' }}>
                  {tool.stats}
                </span>
                {isLive && (
                  <span className="text-[#A8843A] text-xs flex items-center gap-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Apri
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </div>
            </motion.div>
          )

          return isLive ? (
            <Link key={tool.id} href={tool.href}>{card}</Link>
          ) : (
            <div key={tool.id}>{card}</div>
          )
        })}
      </div>
    </div>
  )
}

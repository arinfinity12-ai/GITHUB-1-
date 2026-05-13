'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { MetricCard }   from '@/components/dashboard/MetricCard'
import { ActivityFeed } from '@/components/dashboard/ActivityFeed'
import { GlowOrb }      from '@/components/ui/GlowOrb'

const metrics = [
  { icon: '⚡', label: 'Workflow attivi',       value: '7',    change: '2 questa settimana', positive: true,  delay: 0 },
  { icon: '◎', label: 'Lead generati (mese)',   value: '284',  change: '14%',                positive: true,  delay: 0.05 },
  { icon: '◈', label: 'Ore automatizzate',      value: '143h', change: '8h ieri',            positive: true,  delay: 0.1 },
  { icon: '◆', label: 'Progetti in produzione', value: '4',    change: undefined,            positive: true,  delay: 0.15 },
]

const quickActions = [
  { href: '/dashboard/tools', label: 'Apri VideoEdit', icon: '🎬' },
  { href: '/dashboard/tools', label: 'Nuovo workflow',  icon: '⚡' },
  { href: '/dashboard/tools', label: 'Vedi tutti i tool', icon: '◈' },
]

export default function DashboardPage() {
  return (
    <div className="relative min-h-full p-6 md:p-8">
      <GlowOrb size={500} x="80%" y="10%" opacity={0.04} blur={100} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <p className="text-xs text-white/30 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
          Martedì, 13 Maggio 2026
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
          Buongiorno, <span className="text-gradient">Riccardo</span> 👋
        </h1>
        <p className="text-white/40 text-sm mt-1" style={{ fontFamily: 'var(--font-body)' }}>
          Atlas AI OS è operativo. Tutti i sistemi funzionano.
        </p>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      {/* Quick actions + Activity */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Quick actions */}
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-white/80 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Azioni rapide
          </h3>
          <div className="space-y-2">
            {quickActions.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#252545] transition-colors duration-200 group"
              >
                <span className="text-base">{a.icon}</span>
                <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {a.label}
                </span>
                <svg className="ml-auto text-white/20 group-hover:text-[#A8843A] transition-colors duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity feed (2 colonne) */}
        <div className="md:col-span-2">
          <ActivityFeed />
        </div>
      </div>

      {/* Status sistema */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-white/80 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          Stato sistema
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'Vercel', status: 'Operativo' },
            { name: 'Supabase', status: 'Operativo' },
            { name: 'n8n', status: 'Operativo' },
            { name: 'Railway', status: 'Standby' },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full shrink-0 ${s.status === 'Operativo' ? 'bg-green-400' : 'bg-yellow-400'}`} />
              <span className="text-xs text-white/50" style={{ fontFamily: 'var(--font-body)' }}>{s.name}</span>
              <span className="text-xs text-white/25 ml-auto" style={{ fontFamily: 'var(--font-body)' }}>{s.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

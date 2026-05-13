'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ActivityFeed } from '@/components/dashboard/ActivityFeed'
import { SparkLine }    from '@/components/dashboard/SparkLine'
import { GoalTracker }  from '@/components/dashboard/GoalTracker'
import { GlowOrb }      from '@/components/ui/GlowOrb'

/* KPI hero cards con sparkline — ispirate al business-dashboard */
const heroKpis = [
  {
    label: 'MRR Attuale',
    value: '€8.400',
    delta: '+16.7%',
    positive: true,
    spark: [4200, 5100, 5800, 6400, 6900, 7200, 7900, 8400],
    href: '/dashboard/revenue',
  },
  {
    label: 'Lead (30gg)',
    value: '284',
    delta: '+14%',
    positive: true,
    spark: [180, 200, 210, 225, 240, 258, 270, 284],
    href: '/dashboard/pipeline',
  },
  {
    label: 'Clienti attivi',
    value: '6',
    delta: '+1 mese',
    positive: true,
    spark: [3, 3, 4, 4, 5, 5, 5, 6],
    href: '/dashboard/clients',
  },
  {
    label: 'Ore auto. (mese)',
    value: '143h',
    delta: '↑ 8h ieri',
    positive: true,
    spark: [80, 95, 105, 112, 118, 128, 135, 143],
    href: '/dashboard/tools',
  },
]

const quickLinks = [
  { href: '/dashboard/revenue',  label: 'Revenue',  icon: '$', desc: 'MRR, waterfall' },
  { href: '/dashboard/pipeline', label: 'Pipeline', icon: '◎', desc: 'Funnel vendite' },
  { href: '/dashboard/clients',  label: 'Clienti',  icon: '⬡', desc: '6 attivi · 1 a rischio' },
  { href: '/dashboard/tools',    label: 'Tools',    icon: '⚡', desc: '1 live · 5 in dev' },
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
        <p className="text-xs text-white/25 mb-1 font-mono" style={{ fontFamily: 'var(--font-body)' }}>
          Martedì, 13 Maggio 2026
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
          Buongiorno, <span className="text-gradient">Riccardo</span>
        </h1>
        <p className="text-white/40 text-sm mt-1 flex items-center gap-2" style={{ fontFamily: 'var(--font-body)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Tutti i sistemi operativi
        </p>
      </motion.div>

      {/* Hero KPI grid — stile business-dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {heroKpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <Link
              href={kpi.href}
              className="glass rounded-2xl p-5 relative overflow-hidden group hover:border-[#A8843A]/25 hover:-translate-y-0.5 transition-all duration-300 block"
            >
              {/* Label */}
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-3"
                style={{ fontFamily: 'var(--font-body)' }}>
                {kpi.label}
              </p>

              {/* Valore grande */}
              <p className="text-3xl font-black text-white leading-none mb-2"
                style={{ fontFamily: 'var(--font-display)' }}>
                {kpi.value}
              </p>

              {/* Delta + sparkline */}
              <div className="flex items-end justify-between mt-3">
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-bold font-mono px-2 py-0.5 rounded-md ${
                    kpi.positive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {kpi.delta}
                </span>
                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <SparkLine values={kpi.spark} color="#A8843A" width={70} height={22} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick nav + Activity */}
      <div className="grid md:grid-cols-3 gap-4 mb-5">
        {/* Quick links */}
        <div className="glass rounded-2xl p-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Navigazione rapida
          </h3>
          <div className="space-y-1">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#252545] transition-all duration-200 group"
              >
                <span className="text-sm text-[#A8843A]/60 group-hover:text-[#A8843A] w-5 text-center font-mono shrink-0 transition-colors duration-200">
                  {l.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-200 block"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {l.label}
                  </span>
                  <span className="text-[10px] text-white/25" style={{ fontFamily: 'var(--font-body)' }}>
                    {l.desc}
                  </span>
                </div>
                <svg className="text-white/15 group-hover:text-[#A8843A]/60 transition-colors shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="md:col-span-2">
          <ActivityFeed />
        </div>
      </div>

      {/* Goal tracker MRR */}
      <div className="mb-5">
        <GoalTracker
          title="Obiettivo MRR 2026"
          current={8_400}
          target={15_000}
          forecast={11_200}
          unit="€"
          onTrack
        />
      </div>

      {/* Stato sistema */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-2xl p-5"
      >
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          Stato infrastruttura
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'Vercel',    status: 'Operativo', up: true },
            { name: 'Supabase',  status: 'Operativo', up: true },
            { name: 'n8n',       status: 'Operativo', up: true },
            { name: 'Railway',   status: 'Standby',   up: false },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-2.5 bg-[#252545]/40 rounded-xl px-3 py-2.5">
              <span className={`w-2 h-2 rounded-full shrink-0 ${s.up ? 'bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]' : 'bg-yellow-400'}`} />
              <div>
                <p className="text-xs text-white/70 font-medium" style={{ fontFamily: 'var(--font-body)' }}>{s.name}</p>
                <p className="text-[10px] text-white/30" style={{ fontFamily: 'var(--font-body)' }}>{s.status}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

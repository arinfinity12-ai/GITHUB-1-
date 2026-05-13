'use client'

import { motion } from 'motion/react'
import { GlowOrb }        from '@/components/ui/GlowOrb'
import { SparkLine }      from '@/components/dashboard/SparkLine'
import { WaterfallChart } from '@/components/dashboard/WaterfallChart'
import { GoalTracker }    from '@/components/dashboard/GoalTracker'

/* Dati mock — sostituire con API Stripe in produzione */
const mrr = 8_400
const mrrLastMonth = 7_200
const mrrChange = Math.round(((mrr - mrrLastMonth) / mrrLastMonth) * 100)
const mrrSpark = [4200, 5100, 5800, 6400, 6900, 7200, 7900, 8400]

const waterfallRows = [
  { label: 'MRR Precedente', value: 7_200, type: 'base'     as const },
  { label: 'Nuovi clienti',   value: +1_800, type: 'positive' as const },
  { label: 'Espansione',      value: +600,  type: 'positive' as const },
  { label: 'Churn',           value: -800,  type: 'negative' as const },
  { label: 'Contrazione',     value: -400,  type: 'negative' as const },
  { label: 'MRR Attuale',     value: 8_400, type: 'total'    as const },
]

const monthlyRevenue = [
  { month: 'Gen', value: 4_200 },
  { month: 'Feb', value: 5_100 },
  { month: 'Mar', value: 5_800 },
  { month: 'Apr', value: 6_400 },
  { month: 'Mag', value: 6_900 },
  { month: 'Giu', value: 7_200 },
  { month: 'Lug', value: 7_900 },
  { month: 'Ago', value: 8_400 },
]

const maxMonthly = Math.max(...monthlyRevenue.map(m => m.value))

export default function RevenuePage() {
  return (
    <div className="relative min-h-full p-6 md:p-8">
      <GlowOrb size={500} x="80%" y="10%" opacity={0.04} blur={100} />

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Revenue
          </h1>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 font-bold border border-green-400/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Manual data
          </span>
        </div>
        <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          MRR, waterfall e confronto mensile
        </p>
      </motion.div>

      {/* Hero KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'MRR Attuale',    value: `€${mrr.toLocaleString('it-IT')}`,  change: `+${mrrChange}%`, positive: true,  spark: mrrSpark },
          { label: 'ARR',            value: `€${(mrr * 12).toLocaleString('it-IT')}`, change: undefined, positive: true, spark: null },
          { label: 'MRR Mese Scorso', value: `€${mrrLastMonth.toLocaleString('it-IT')}`, change: undefined, positive: true, spark: null },
          { label: 'Crescita Netta',  value: `+€${(mrr - mrrLastMonth).toLocaleString('it-IT')}`, change: `${mrrChange}%`, positive: true, spark: null },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                {kpi.label}
              </span>
              {kpi.change && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold font-mono ${kpi.positive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {kpi.positive ? '↑' : '↓'} {kpi.change}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {kpi.value}
            </p>
            {kpi.spark && (
              <div className="opacity-70">
                <SparkLine values={kpi.spark} color="#A8843A" width={80} height={24} />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Waterfall + Monthly bar */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Waterfall MRR */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            Variazione MRR — Agosto 2026
          </h3>
          <WaterfallChart rows={waterfallRows} maxValue={8_400} />
        </motion.div>

        {/* Confronto mensile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            Revenue mensile 2026
          </h3>
          <div className="space-y-3">
            {monthlyRevenue.map((m, i) => (
              <div key={m.month} className="flex items-center gap-3">
                <span className="text-xs text-white/40 w-8 shrink-0 font-mono" style={{ fontFamily: 'var(--font-body)' }}>{m.month}</span>
                <div className="flex-1 h-2 bg-[#252545] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[#A8843A]"
                    initial={{ width: 0 }}
                    animate={{ width: `${(m.value / maxMonthly) * 100}%` }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  />
                </div>
                <span className="text-xs font-mono text-white/60 w-16 text-right" style={{ fontFamily: 'var(--font-body)' }}>
                  €{(m.value / 1000).toFixed(1)}K
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Goal tracker */}
      <GoalTracker
        title="Obiettivo MRR 2026"
        current={8_400}
        target={15_000}
        forecast={11_200}
        unit="€"
        onTrack
      />
    </div>
  )
}

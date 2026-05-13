'use client'

import { motion } from 'motion/react'
import { GlowOrb }      from '@/components/ui/GlowOrb'
import { FunnelChart }  from '@/components/dashboard/FunnelChart'

/* Dati mock — sostituire con API GHL in produzione */
const stages = [
  { name: 'Lead',          count: 84, value: 252_000, isWon: false },
  { name: 'Qualificato',   count: 31, value: 93_000,  isWon: false },
  { name: 'Proposta',      count: 12, value: 48_000,  isWon: false },
  { name: 'Negoziazione',  count: 7,  value: 28_000,  isWon: false },
  { name: 'Chiuso Vinto',  count: 4,  value: 16_000,  isWon: true  },
]

const pipelineStats = [
  { label: 'Vinti (mese)',   value: '4',     color: 'text-green-400' },
  { label: 'Persi (mese)',   value: '2',     color: 'text-red-400' },
  { label: 'Tasso chiusura', value: '66%',   color: 'text-[#A8843A]' },
  { label: 'Giorni medi',    value: '18gg',  color: 'text-white' },
  { label: 'Valore pipeline',value: '€437K', color: 'text-white' },
  { label: 'Valore medio',   value: '€4K',   color: 'text-white' },
]

/* Forecast chiusure */
const forecastRows = [
  { stage: 'Negoziazione (7)', rate: '57%', mrr: '€4.0K', result: '€3.990K' },
  { stage: 'Proposta (12)',    rate: '25%', mrr: '€3.5K', result: '€10.500K' },
  { stage: 'Qualificato (31)', rate: '10%', mrr: '€3.0K', result: '€9.300K' },
]

export default function PipelinePage() {
  return (
    <div className="relative min-h-full p-6 md:p-8">
      <GlowOrb size={500} x="80%" y="20%" opacity={0.04} blur={100} />

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
          Pipeline
        </h1>
        <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          Funnel vendite, statistiche e forecast
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {pipelineStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-4"
          >
            <p className="text-[10px] text-white/35 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              {s.label}
            </p>
            <p className={`text-xl font-bold ${s.color}`} style={{ fontFamily: 'var(--font-display)' }}>
              {s.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Funnel + Forecast */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            Funnel per stage
          </h3>
          <FunnelChart stages={stages} />
        </motion.div>

        {/* Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            Forecast chiusure
          </h3>
          <div className="space-y-0">
            {forecastRows.map((row, i) => (
              <div
                key={row.stage}
                className={`flex items-center justify-between py-4 ${i < forecastRows.length - 1 ? 'border-b border-[#2e2e50]' : ''}`}
              >
                <div>
                  <p className="text-sm text-white/70 font-medium" style={{ fontFamily: 'var(--font-body)' }}>{row.stage}</p>
                  <p className="text-[10px] text-white/30 font-mono mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>Tasso: {row.rate} · MRR medio: {row.mrr}</p>
                </div>
                <p className="text-sm font-bold font-mono text-[#A8843A]" style={{ fontFamily: 'var(--font-body)' }}>
                  {row.result}
                </p>
              </div>
            ))}
            <div className="pt-4 flex justify-between">
              <span className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>Forecast totale</span>
              <span className="text-sm font-bold text-[#A8843A] font-mono" style={{ fontFamily: 'var(--font-body)' }}>€23.790K</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Conversion rate bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          Conversion rate per stage
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { from: 'Lead → Qual.',    rate: 36.9 },
            { from: 'Qual. → Prop.',   rate: 38.7 },
            { from: 'Prop. → Neg.',    rate: 58.3 },
            { from: 'Neg. → Vinto',   rate: 57.1 },
          ].map((c, i) => (
            <div key={c.from} className="text-center">
              <p className="text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-body)' }}>{c.from}</p>
              <div className="relative h-1.5 bg-[#252545] rounded-full overflow-hidden mb-2">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#A8843A]"
                  initial={{ width: 0 }}
                  animate={{ width: `${c.rate}%` }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.08 }}
                />
              </div>
              <p className="text-sm font-bold text-white font-mono" style={{ fontFamily: 'var(--font-body)' }}>{c.rate}%</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

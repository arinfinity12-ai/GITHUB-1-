'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'

interface GoalTrackerProps {
  title: string
  current: number
  target: number
  forecast?: number
  unit?: string
  onTrack?: boolean
}

/* Barra obiettivo con indicatore forecast — ispirata al goal-tracker del business-dashboard */
export function GoalTracker({ title, current, target, forecast, unit = '', onTrack = true }: GoalTrackerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const fillPct = Math.min(100, (current / target) * 100)
  const forecastPct = forecast ? Math.min(100, (forecast / target) * 100) : null

  return (
    <div ref={ref} className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'var(--font-body)' }}>
          {title}
        </h3>
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
            onTrack ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {onTrack ? 'On Track' : 'At Risk'}
        </span>
      </div>
      <p className="text-white/40 text-xs mb-5" style={{ fontFamily: 'var(--font-body)' }}>
        Obiettivo: {unit}{target.toLocaleString('it-IT')}
      </p>

      {/* Barra progresso */}
      <div className="relative h-3.5 bg-[#252545] rounded-full mb-3">
        {/* Fill attuale */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #A8843A, rgba(168,132,58,0.6))' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${fillPct}%` } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        {/* Fill forecast */}
        {forecastPct && forecastPct > fillPct && (
          <motion.div
            className="absolute top-0 h-full rounded-r-full bg-green-400/30"
            initial={{ width: 0, left: `${fillPct}%` }}
            animate={inView ? { width: `${forecastPct - fillPct}%`, left: `${fillPct}%` } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          />
        )}
        {/* Marker target */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-0.5 h-5 bg-white/20 rounded-full" />
      </div>

      {/* Numeri */}
      <div className="flex justify-between text-xs font-mono" style={{ fontFamily: 'var(--font-body)' }}>
        <span className="text-white/50">
          Attuale: <strong className="text-white">{unit}{current.toLocaleString('it-IT')}</strong>
        </span>
        <span className="text-white/30">{fillPct.toFixed(0)}%</span>
      </div>
    </div>
  )
}

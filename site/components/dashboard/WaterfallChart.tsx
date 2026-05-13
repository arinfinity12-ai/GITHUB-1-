'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'

interface WaterfallRow {
  label: string
  value: number
  type: 'base' | 'positive' | 'negative' | 'total'
}

interface WaterfallChartProps {
  rows: WaterfallRow[]
  maxValue: number
}

const typeStyles = {
  base:     { bar: 'bg-gradient-to-r from-[#A8843A] to-[#A8843A]/50', text: 'text-[#A8843A]' },
  positive: { bar: 'bg-gradient-to-r from-green-500 to-green-400/50',  text: 'text-green-400' },
  negative: { bar: 'bg-gradient-to-r from-red-500 to-red-400/50',      text: 'text-red-400' },
  total:    { bar: 'bg-gradient-to-r from-[#A8843A] to-[#A8843A]/60', text: 'text-[#A8843A]' },
}

/* Waterfall chart per la visualizzazione MRR — ispirato al business-dashboard */
export function WaterfallChart({ rows, maxValue }: WaterfallChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-3">
      {rows.map((row, i) => {
        const pct = Math.max(4, (Math.abs(row.value) / maxValue) * 100)
        const s = typeStyles[row.type]
        const isTotal = row.type === 'total'
        return (
          <div
            key={row.label}
            className={`grid gap-3 items-center ${isTotal ? 'pt-3 border-t border-[#2e2e50]' : ''}`}
            style={{ gridTemplateColumns: '110px 1fr 88px' }}
          >
            <span className="text-xs text-white/50 truncate" style={{ fontFamily: 'var(--font-body)' }}>
              {row.label}
            </span>
            <div className="h-2.5 bg-[#252545] rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${s.bar}`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${pct}%` } : {}}
                transition={{ duration: 0.7, delay: i * 0.07, ease: 'easeOut' }}
              />
            </div>
            <span className={`text-xs font-bold font-mono text-right ${s.text}`}
              style={{ fontFamily: 'var(--font-body)' }}>
              {row.value >= 0 ? '+' : ''}€{Math.abs(row.value).toLocaleString('it-IT')}
            </span>
          </div>
        )
      })}
    </div>
  )
}

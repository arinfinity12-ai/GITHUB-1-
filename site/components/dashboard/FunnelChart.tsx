'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'

interface FunnelStage {
  name: string
  count: number
  value: number
  isWon?: boolean
}

interface FunnelChartProps {
  stages: FunnelStage[]
}

/* Funnel di pipeline — porta del CSS funnel del business-dashboard */
export function FunnelChart({ stages }: FunnelChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const maxCount = Math.max(...stages.map(s => s.count), 1)

  return (
    <div ref={ref} className="space-y-3">
      {stages.map((stage, i) => {
        const pct = Math.max(8, (stage.count / maxCount) * 100)
        return (
          <div key={stage.name} className="flex items-center gap-4">
            <span className="text-xs text-white/50 w-28 shrink-0 truncate" style={{ fontFamily: 'var(--font-body)' }}>
              {stage.name}
            </span>
            <div className="flex-1 relative h-9">
              <div className="h-full bg-[#252545] rounded-xl overflow-hidden">
                <motion.div
                  className={`h-full rounded-xl ${stage.isWon
                    ? 'bg-gradient-to-r from-green-600 to-green-400/40'
                    : 'bg-gradient-to-r from-[#A8843A] to-[#A8843A]/35'
                  }`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : {}}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
              {/* Count + value overlay */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-xs font-bold text-white font-mono">{stage.count}</span>
                <span className="text-xs text-white/30 font-mono">
                  €{(stage.value / 1000).toFixed(0)}K
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

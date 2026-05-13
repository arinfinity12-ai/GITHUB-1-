'use client'

import { motion } from 'motion/react'

interface MetricCardProps {
  label: string
  value: string
  change?: string
  positive?: boolean
  icon: string
  delay?: number
}

/* Card KPI con animazione entrata e indicatore trend */
export function MetricCard({ label, value, change, positive = true, icon, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className="glass rounded-2xl p-5 group hover:border-[#A8843A]/25 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-9 h-9 rounded-xl bg-[#A8843A]/10 border border-[#A8843A]/20 flex items-center justify-center text-[#A8843A] text-base">
          {icon}
        </div>
        {change && (
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              color: positive ? '#4ade80' : '#f87171',
              background: positive ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
              fontFamily: 'var(--font-body)',
            }}
          >
            {positive ? '↑' : '↓'} {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
        {value}
      </p>
      <p className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
        {label}
      </p>
    </motion.div>
  )
}

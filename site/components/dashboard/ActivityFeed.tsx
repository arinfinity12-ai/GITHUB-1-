'use client'

import { motion } from 'motion/react'

const activities = [
  { time: 'Oggi 14:32', label: 'VideoEdit', action: 'Video tagliato (2:34 → 0:45)', icon: '🎬', color: '#A8843A' },
  { time: 'Oggi 11:15', label: 'n8n',       action: 'Workflow lead gen eseguito — 23 contatti',  icon: '⚡', color: '#6060c0' },
  { time: 'Ieri 18:40', label: 'Supabase',  action: 'Tabella "leads" aggiornata (+12 record)',  icon: '◈', color: '#3a7a8a' },
  { time: 'Ieri 10:05', label: 'Vercel',    action: 'Deploy atlas-site completato ✓',            icon: '◆', color: '#A8843A' },
  { time: '11/05',      label: 'Apollo',    action: 'Sequenza email avviata — 40 prospect',      icon: '◎', color: '#7a3a8a' },
]

/* Feed attività recenti del sistema */
export function ActivityFeed() {
  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-white/80 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
        Attività recente
      </h3>
      <div className="relative">
        {/* Linea verticale */}
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-[#2e2e50]" />
        <div className="space-y-4">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 pl-8 relative"
            >
              {/* Dot */}
              <div
                className="absolute left-1.5 top-1 w-4 h-4 rounded-full border-2 border-[#1a1a2e] flex items-center justify-center text-[8px] shrink-0"
                style={{ background: a.color }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium text-white/70" style={{ fontFamily: 'var(--font-body)' }}>{a.label}</span>
                  <span className="text-[10px] text-white/25" style={{ fontFamily: 'var(--font-body)' }}>{a.time}</span>
                </div>
                <p className="text-xs text-white/45 mt-0.5 truncate" style={{ fontFamily: 'var(--font-body)' }}>{a.action}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

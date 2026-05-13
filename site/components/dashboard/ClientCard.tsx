'use client'

import { motion } from 'motion/react'

export type HealthStatus = 'green' | 'amber' | 'red'

export interface Client {
  name: string
  mrr: number
  health: HealthStatus
  lastContact: string
  deliverables: string
  tag?: string
}

const healthDot = {
  green: 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]',
  amber: 'bg-yellow-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]',
  red:   'bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.5)]',
}

const cardRisk = {
  green: '',
  amber: 'border-yellow-400/20',
  red:   'border-red-400/25 bg-red-400/[0.03]',
}

/* Card stato cliente — ispirata al client health del business-dashboard */
export function ClientCard({ client, delay = 0 }: { client: Client; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`glass rounded-2xl p-5 relative ${cardRisk[client.health]}`}
    >
      {/* MRR badge */}
      <span className="absolute top-4 right-4 text-[10px] font-mono text-white/30"
        style={{ fontFamily: 'var(--font-body)' }}>
        €{client.mrr.toLocaleString('it-IT')}/mo
      </span>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white pr-16" style={{ fontFamily: 'var(--font-body)' }}>
          {client.name}
          {client.tag && (
            <span className="ml-2 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-green-400/10 text-green-400 align-middle">
              {client.tag}
            </span>
          )}
        </h3>
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${healthDot[client.health]}`} />
      </div>

      {/* Rows */}
      {[
        { label: 'Ultimo contatto', value: client.lastContact, style: client.lastContact.includes('oggi') ? 'ok' : client.lastContact.includes('gg') && parseInt(client.lastContact) > 14 ? 'warn' : 'dim' },
        { label: 'Deliverable', value: client.deliverables, style: 'dim' },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between mb-2 last:mb-0">
          <span className="text-[10px] text-white/30 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
            {row.label}
          </span>
          <span className={`text-xs font-mono font-semibold ${
            row.style === 'ok' ? 'text-green-400' :
            row.style === 'warn' ? 'text-yellow-400' : 'text-white/50'
          }`} style={{ fontFamily: 'var(--font-body)' }}>
            {row.value}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

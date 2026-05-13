'use client'

import { motion } from 'motion/react'
import { GlowOrb }    from '@/components/ui/GlowOrb'
import { ClientCard } from '@/components/dashboard/ClientCard'
import type { Client } from '@/components/dashboard/ClientCard'

/* Dati mock clienti — sostituire con API GHL in produzione */
const clients: Client[] = [
  { name: 'Agenzia Volta',    mrr: 2_400, health: 'green', lastContact: 'oggi',    deliverables: 'Campagna ads ✓',    tag: 'New' },
  { name: 'Studio Ferro',     mrr: 1_800, health: 'green', lastContact: '2gg fa',  deliverables: 'Dashboard live ✓' },
  { name: 'RetailPro SRL',    mrr: 1_200, health: 'amber', lastContact: '12gg fa', deliverables: 'Automazione n8n' },
  { name: 'Consulta Bianchi', mrr: 900,   health: 'green', lastContact: '5gg fa',  deliverables: 'Lead gen attivo ✓' },
  { name: 'Immobiliare MG',   mrr: 600,   health: 'red',   lastContact: '21gg fa', deliverables: 'Onboarding fermo' },
  { name: 'FitLife Academy',  mrr: 1_500, health: 'amber', lastContact: '9gg fa',  deliverables: 'Funnel in revisione' },
]

const totalMrr   = clients.reduce((s, c) => s + c.mrr, 0)
const healthCount = {
  green: clients.filter(c => c.health === 'green').length,
  amber: clients.filter(c => c.health === 'amber').length,
  red:   clients.filter(c => c.health === 'red').length,
}

export default function ClientsPage() {
  return (
    <div className="relative min-h-full p-6 md:p-8">
      <GlowOrb size={500} x="80%" y="15%" opacity={0.04} blur={100} />

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
          Client Health
        </h1>
        <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          {clients.length} clienti attivi · €{totalMrr.toLocaleString('it-IT')}/mo MRR totale
        </p>
      </motion.div>

      {/* Summary strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-5 mb-6 flex flex-wrap gap-6 items-center"
      >
        {[
          { label: 'Sani',      count: healthCount.green, dot: 'bg-green-400', glow: 'shadow-[0_0_6px_rgba(74,222,128,0.4)]' },
          { label: 'Attenzione',count: healthCount.amber, dot: 'bg-yellow-400', glow: 'shadow-[0_0_6px_rgba(251,191,36,0.4)]' },
          { label: 'A rischio', count: healthCount.red,   dot: 'bg-red-400',   glow: 'shadow-[0_0_6px_rgba(248,113,113,0.5)]' },
        ].map(h => (
          <div key={h.label} className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${h.dot} ${h.glow}`} />
            <span className="text-sm text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
              <strong className="text-white">{h.count}</strong> {h.label}
            </span>
          </div>
        ))}
        <div className="ml-auto text-right">
          <p className="text-[10px] text-white/30 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>MRR totale</p>
          <p className="text-xl font-bold text-[#A8843A]" style={{ fontFamily: 'var(--font-display)' }}>
            €{totalMrr.toLocaleString('it-IT')}
          </p>
        </div>
      </motion.div>

      {/* Clienti a rischio — priority alert */}
      {healthCount.red > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-4 mb-6 border border-red-400/20 bg-red-400/[0.04] flex items-center gap-3"
        >
          <span className="text-red-400 text-base shrink-0">⚠</span>
          <p className="text-sm text-red-300/80" style={{ fontFamily: 'var(--font-body)' }}>
            <strong>{healthCount.red} cliente{healthCount.red > 1 ? 'i' : ''} a rischio churn</strong> — contattare entro oggi.
          </p>
        </motion.div>
      )}

      {/* Grid clienti */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Prima i rossi, poi gli amber, poi i verdi */}
        {[...clients].sort((a, b) => {
          const order = { red: 0, amber: 1, green: 2 }
          return order[a.health] - order[b.health]
        }).map((client, i) => (
          <ClientCard key={client.name} client={client} delay={i * 0.06} />
        ))}
      </div>

      {/* Economics recap */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-2xl p-6 mt-5"
      >
        <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
          Unit Economics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'LTV medio',  value: '€28.800', sub: '24 mesi × MRR medio €1.200' },
            { label: 'CAC medio',  value: '€1.400',  sub: 'Costo acquisizione stimato' },
            { label: 'LTV:CAC',    value: '20.6×',   sub: 'Target: >3×  ✓  Eccellente' },
            { label: 'Payback',    value: '1.2 mesi', sub: 'Mesi per recuperare CAC' },
          ].map((e) => (
            <div key={e.label} className="bg-[#252545]/50 rounded-xl p-4 border border-[#2e2e50]">
              <p className="text-[10px] text-white/35 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-body)' }}>{e.label}</p>
              <p className="text-2xl font-bold text-[#A8843A]" style={{ fontFamily: 'var(--font-display)' }}>{e.value}</p>
              <p className="text-[10px] text-white/30 mt-1" style={{ fontFamily: 'var(--font-body)' }}>{e.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

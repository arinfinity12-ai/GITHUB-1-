'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useState } from 'react'
import { PublicNav } from '@/components/landing/PublicNav'

const reasons = [
  { icon: '🎯', label: '45 minuti', sub: 'Audit strutturato' },
  { icon: '💡', label: 'Piano concreto', sub: 'Non slide generiche' },
  { icon: '€0', label: 'Completamente gratuito', sub: 'Nessun impegno' },
  { icon: '📊', label: 'ROI stimato', sub: 'Specifico per te' },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function PrenotaPage() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefono: '',
    business: '',
    verticale: '',
    messaggio: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <PublicNav />

      <section className="relative pt-16 b2b-grid noise overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/4 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs text-[#C9A84C] tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5"
                style={{ fontFamily: 'var(--font-body)' }}>
                Audit gratuito
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}>
                Prenota una call.<br />
                <span className="text-gold-b2b">È completamente gratuita.</span>
              </h1>
              <p className="text-white/50 leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-body)' }}>
                In 45 minuti analizziamo il tuo business, identifichiamo i 3 processi
                dove l'automazione genera più impatto e ti consegniamo un piano concreto —
                con ROI stimato. Nessun pitch, nessun upsell.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {reasons.map(r => (
                  <div key={r.label} className="card-b2b p-5">
                    <div className="text-2xl mb-3">{r.icon}</div>
                    <div className="text-sm font-semibold mb-0.5"
                      style={{ fontFamily: 'var(--font-heading)' }}>{r.label}</div>
                    <div className="text-xs text-white/35"
                      style={{ fontFamily: 'var(--font-body)' }}>{r.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="card-b2b p-8"
            >
              {state === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-6">✅</div>
                  <h2 className="text-2xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}>Richiesta ricevuta!</h2>
                  <p className="text-white/50 text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Ti contatteremo entro 24 ore per confermare data e ora della call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}>Raccontaci di te</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-body)' }}>Nome *</label>
                      <input
                        type="text" name="nome" required value={form.nome}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-body)' }}>Email *</label>
                      <input
                        type="email" name="email" required value={form.email}
                        onChange={handleChange}
                        placeholder="mario@business.it"
                        className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}>Telefono</label>
                    <input
                      type="tel" name="telefono" value={form.telefono}
                      onChange={handleChange}
                      placeholder="+39 333 123 4567"
                      className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}>Tipo di business *</label>
                    <select
                      name="verticale" required value={form.verticale}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A84C]/40 transition-colors appearance-none"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <option value="" disabled>Seleziona...</option>
                      <option value="clinica">Clinica / Studio medico</option>
                      <option value="agenzia">Agenzia marketing</option>
                      <option value="pmi">PMI / Azienda</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}>Nome del business</label>
                    <input
                      type="text" name="business" value={form.business}
                      onChange={handleChange}
                      placeholder="Nome azienda / studio"
                      className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}>Qual è la tua sfida principale?</label>
                    <textarea
                      name="messaggio" value={form.messaggio}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Esempio: non riusciamo a convertire abbastanza lead, perdiamo tempo su attività manuali..."
                      className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors resize-none"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  {state === 'error' && (
                    <p className="text-red-400 text-xs"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      Errore nell'invio. Scrivi direttamente a{' '}
                      <a href="mailto:hello@atlasaios.com" className="underline">hello@atlasaios.com</a>
                    </p>
                  )}

                  <button
                    type="submit" disabled={state === 'loading'}
                    className="w-full btn-gold-b2b justify-center disabled:opacity-60"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {state === 'loading' ? 'Invio in corso...' : 'Prenota l\'audit gratuito →'}
                  </button>

                  <p className="text-xs text-white/20 text-center"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Nessun spam. Ti contatteremo entro 24 ore.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#111] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#C9A84C] flex items-center justify-center text-black font-bold text-xs"
              style={{ fontFamily: 'var(--font-heading)' }}>A</div>
            <span className="text-sm text-white/50" style={{ fontFamily: 'var(--font-body)' }}>Atlas AI OS</span>
          </Link>
          <p className="text-xs text-white/20" style={{ fontFamily: 'var(--font-body)' }}>© 2025 Atlas AI OS</p>
        </div>
      </footer>
    </div>
  )
}

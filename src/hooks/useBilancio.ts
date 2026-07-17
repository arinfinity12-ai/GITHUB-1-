import { useState, useEffect, useCallback } from 'react'
import type { Transazione } from '../types/bilancio'

const KEY = 'atlas-bilancio-v1'

function load(): Transazione[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Transazione[]) : []
  } catch {
    return []
  }
}

export function useBilancio() {
  const [transazioni, setTransazioni] = useState<Transazione[]>(load)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(transazioni))
  }, [transazioni])

  const aggiungi = useCallback((t: Omit<Transazione, 'id'>) => {
    setTransazioni(prev => [{ ...t, id: crypto.randomUUID() }, ...prev])
  }, [])

  const modifica = useCallback((id: string, updates: Partial<Omit<Transazione, 'id'>>) => {
    setTransazioni(prev => prev.map(t => (t.id === id ? { ...t, ...updates } : t)))
  }, [])

  const elimina = useCallback((id: string) => {
    setTransazioni(prev => prev.filter(t => t.id !== id))
  }, [])

  const totaleEntrate = transazioni
    .filter(t => t.tipo === 'entrata')
    .reduce((s, t) => s + t.importo, 0)

  const totaleUscite = transazioni
    .filter(t => t.tipo === 'uscita')
    .reduce((s, t) => s + t.importo, 0)

  const saldo = totaleEntrate - totaleUscite

  return { transazioni, aggiungi, modifica, elimina, totaleEntrate, totaleUscite, saldo }
}

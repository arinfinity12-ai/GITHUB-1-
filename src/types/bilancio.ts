export type TipoTransazione = 'entrata' | 'uscita'

export interface Transazione {
  id: string
  tipo: TipoTransazione
  importo: number
  descrizione: string
  categoria: string
  data: string
  note?: string
}

export const CATEGORIE_ENTRATA = [
  'Vendite', 'Servizi', 'Consulenze', 'Investimenti', 'Affitti', 'Rimborsi', 'Altro',
] as const

export const CATEGORIE_USCITA = [
  'Marketing', 'Stipendi', 'Software & Tool', 'Ufficio', 'Fornitori', 'Tasse', 'Viaggi', 'Formazione', 'Banca', 'Altro',
] as const

export const COLORI: Record<string, string> = {
  'Vendite': '#10b981',
  'Servizi': '#34d399',
  'Consulenze': '#059669',
  'Investimenti': '#0d9488',
  'Affitti': '#0891b2',
  'Rimborsi': '#6ee7b7',
  'Marketing': '#f59e0b',
  'Stipendi': '#ef4444',
  'Software & Tool': '#8b5cf6',
  'Ufficio': '#06b6d4',
  'Fornitori': '#f97316',
  'Tasse': '#dc2626',
  'Viaggi': '#3b82f6',
  'Formazione': '#a78bfa',
  'Banca': '#78716c',
  'Altro': '#64748b',
}

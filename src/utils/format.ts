export function formatEuro(n: number): string {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(n)
}

export function formatData(dateStr: string): string {
  try {
    const d = new Date(dateStr.includes('T') ? dateStr : `${dateStr}T12:00:00`)
    return new Intl.DateTimeFormat('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }).format(d)
  } catch {
    return dateStr
  }
}

export function getMeseAnno(dateStr: string): { year: number; month: number } {
  const d = new Date(dateStr.includes('T') ? dateStr : `${dateStr}T12:00:00`)
  return { year: d.getFullYear(), month: d.getMonth() }
}

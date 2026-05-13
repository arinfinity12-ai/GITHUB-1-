import type { Metadata } from 'next'
import { Playfair_Display, Inter, Syne } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atlas AI OS — Sistemi AI per imprenditori italiani',
  description: 'Automazioni, pipeline commerciali e sistemi AI costruiti su misura. ROI misurabile dal primo mese.',
  openGraph: {
    title: 'Atlas AI OS',
    description: 'Sistemi AI costruiti per imprenditori ambiziosi.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

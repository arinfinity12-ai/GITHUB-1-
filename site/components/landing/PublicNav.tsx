'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { href: '/#servizi', label: 'Servizi' },
  { href: '/casi-studio', label: 'Casi Studio' },
  { href: '/chi-siamo', label: 'Chi siamo' },
]

export function PublicNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#C9A84C] flex items-center justify-center text-black font-bold text-xs"
            style={{ fontFamily: 'var(--font-heading)' }}>A</div>
          <span className="text-white font-bold text-base tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}>Atlas</span>
          <span className="text-white/30 text-xs hidden sm:block"
            style={{ fontFamily: 'var(--font-body)' }}>AI OS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard/" className="text-sm text-white/40 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}>
            Dashboard →
          </Link>
          <Link href="/prenota"
            className="btn-gold-b2b text-sm"
            style={{ fontFamily: 'var(--font-body)' }}>
            Prenota una call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a] px-6 py-4 space-y-3">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/60 hover:text-white py-2"
              style={{ fontFamily: 'var(--font-body)' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/prenota" onClick={() => setOpen(false)}
            className="block btn-gold-b2b text-sm text-center mt-3 w-full justify-center"
            style={{ fontFamily: 'var(--font-body)' }}>
            Prenota una call
          </Link>
        </div>
      )}
    </header>
  )
}

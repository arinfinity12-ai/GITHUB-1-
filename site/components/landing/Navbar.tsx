'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const navLinks = [
  { href: '#features', label: 'Funzionalità' },
  { href: '#tools', label: 'Tools' },
  { href: '#about', label: 'Chi sono' },
]

/* Navbar floating con blur che aumenta allo scroll */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-[#1a1a2e]/80 backdrop-blur-xl border-b border-[#2e2e50]/60 shadow-lg shadow-black/20'
          : 'py-5',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#A8843A] flex items-center justify-center text-[#1a1a2e] font-bold text-sm"
            style={{ fontFamily: 'var(--font-display)' }}>
            A
          </div>
          <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Atlas
          </span>
          <span className="text-xs text-white/30 font-normal hidden sm:block" style={{ fontFamily: 'var(--font-body)' }}>
            AI OS
          </span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{ background: '#A8843A', color: '#1a1a2e', fontFamily: 'var(--font-body)' }}
        >
          Apri Dashboard →
        </Link>
      </div>
    </motion.header>
  )
}

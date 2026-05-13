'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/* Voci di navigazione */
const navItems = [
  { href: '/', label: 'Home', icon: '⬡' },
  { href: '/about', label: 'Chi sono', icon: '◎' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Hamburger mobile */}
      <button
        className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-lg bg-[#252545] border border-[#2e2e50] md:hidden"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Menu"
      >
        <span className="text-[#A8843A] text-lg">{mobileOpen ? '✕' : '☰'}</span>
      </button>

      {/* Overlay mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar desktop (sempre visibile) + mobile (drawer) */}
      <AnimatePresence>
        <motion.aside
          initial={false}
          animate={
            typeof window !== 'undefined' && window.innerWidth < 768
              ? { x: mobileOpen ? 0 : -260 }
              : { x: 0 }
          }
          className={[
            'fixed md:relative z-50 flex flex-col h-full w-[240px]',
            'bg-[#1a1a2e] border-r border-[#2e2e50]',
            'transition-transform md:translate-x-0',
            mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          ].join(' ')}
        >
          {/* Logo */}
          <div className="px-6 pt-8 pb-6 border-b border-[#2e2e50]">
            <span
              className="text-2xl font-display font-bold tracking-wide"
              style={{ color: '#A8843A', fontFamily: 'var(--font-display)' }}
            >
              Atlas
            </span>
            <p className="text-xs text-white/40 mt-1 font-body" style={{ fontFamily: 'var(--font-body)' }}>
              AI OS
            </p>
          </div>

          {/* Navigazione */}
          <nav className="flex-1 px-3 py-6 space-y-1">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200',
                    active
                      ? 'text-white bg-[#252545]'
                      : 'text-white/50 hover:text-white/80 hover:bg-[#252545]/50',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {/* Indicatore pagina attiva */}
                  {active && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-[#A8843A]"
                    />
                  )}
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-5 border-t border-[#2e2e50]">
            <p className="text-xs text-white/25" style={{ fontFamily: 'var(--font-body)' }}>
              v0.1 · Atlas AI OS
            </p>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  )
}

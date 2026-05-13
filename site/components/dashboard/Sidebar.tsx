'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navSections = [
  {
    label: 'Overview',
    items: [
      { href: '/dashboard',             label: 'Dashboard',  icon: '◈' },
      { href: '/dashboard/tools',       label: 'Tools',      icon: '⚡' },
    ],
  },
  {
    label: 'Business',
    items: [
      { href: '/dashboard/revenue',     label: 'Revenue',    icon: '$' },
      { href: '/dashboard/pipeline',    label: 'Pipeline',   icon: '◎' },
      { href: '/dashboard/clients',     label: 'Clienti',    icon: '⬡' },
    ],
  },
  {
    label: 'Profilo',
    items: [
      { href: '/dashboard/about',       label: 'Chi sono',   icon: '◉' },
    ],
  },
]

/* Sidebar dashboard con drawer mobile */
export function DashboardSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5 border-b border-[#2e2e50]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#A8843A] flex items-center justify-center text-[#1a1a2e] font-bold text-sm shrink-0"
            style={{ fontFamily: 'var(--font-display)' }}>
            A
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-none" style={{ fontFamily: 'var(--font-display)' }}>Atlas</p>
            <p className="text-[10px] text-white/30" style={{ fontFamily: 'var(--font-body)' }}>AI OS Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Nav con sezioni */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-4">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="text-[9px] font-bold tracking-widest uppercase text-white/20 px-3 mb-1"
              style={{ fontFamily: 'var(--font-body)' }}>
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200',
                      active
                        ? 'text-white bg-[#252545]'
                        : 'text-white/45 hover:text-white/80 hover:bg-[#252545]/50',
                    ].join(' ')}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {active && (
                      <motion.span
                        layoutId="dash-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-[#A8843A]"
                      />
                    )}
                    <span className="text-sm w-5 text-center shrink-0 font-mono">{item.icon}</span>
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User info footer */}
      <div className="px-4 py-5 border-t border-[#2e2e50]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#A8843A] flex items-center justify-center text-[#1a1a2e] text-xs font-bold shrink-0"
            style={{ fontFamily: 'var(--font-display)' }}>
            RP
          </div>
          <div className="min-w-0">
            <p className="text-xs text-white/70 font-medium truncate" style={{ fontFamily: 'var(--font-body)' }}>Riccardo Piombino</p>
            <p className="text-[10px] text-white/30 truncate" style={{ fontFamily: 'var(--font-body)' }}>Atlas AI OS · Admin</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Hamburger mobile */}
      <button
        className="fixed top-4 left-4 z-50 flex items-center justify-center w-9 h-9 rounded-lg glass md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <span className="text-[#A8843A] text-base">{open ? '✕' : '☰'}</span>
      </button>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar desktop */}
      <aside className="hidden md:flex flex-col w-[220px] shrink-0 bg-[#1a1a2e] border-r border-[#2e2e50] h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Sidebar mobile drawer */}
      <motion.aside
        initial={false}
        animate={{ x: open ? 0 : -240 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 z-50 flex flex-col w-[220px] h-full bg-[#1a1a2e] border-r border-[#2e2e50] md:hidden"
      >
        {sidebarContent}
      </motion.aside>
    </>
  )
}

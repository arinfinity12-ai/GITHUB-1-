'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

/* Contatore numerico animato che parte quando entra nel viewport */
export function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = 0
    const step = end / (duration * 60)
    let current = start
    const timer = setInterval(() => {
      current = Math.min(current + step, end)
      setCount(Math.floor(current))
      if (current >= end) clearInterval(timer)
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('it-IT')}{suffix}
    </span>
  )
}

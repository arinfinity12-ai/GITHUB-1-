'use client'

interface GlowOrbProps {
  size?: number
  x?: string
  y?: string
  color?: string
  opacity?: number
  blur?: number
}

/* Sfera di luce sfumata per effetti ambientali di sfondo */
export function GlowOrb({
  size = 600,
  x = '50%',
  y = '50%',
  color = '#A8843A',
  opacity = 0.08,
  blur = 120,
}: GlowOrbProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}

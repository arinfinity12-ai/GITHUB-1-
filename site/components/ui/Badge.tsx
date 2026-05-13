interface BadgeProps {
  children: React.ReactNode
  dot?: boolean
}

/* Badge pill con punto pulsante opzionale */
export function Badge({ children, dot }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A8843A]/30 bg-[#A8843A]/10 text-[#A8843A] text-xs tracking-widest uppercase"
      style={{ fontFamily: 'var(--font-body)' }}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-[#A8843A] animate-pulse shrink-0" />}
      {children}
    </span>
  )
}

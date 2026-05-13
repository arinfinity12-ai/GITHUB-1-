/* Footer minimalista */
export function Footer() {
  return (
    <footer className="border-t border-[#2e2e50] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
          <div className="w-6 h-6 rounded-md bg-[#A8843A] flex items-center justify-center text-[#1a1a2e] font-bold text-xs">A</div>
          <span className="text-white/60 text-sm">Atlas AI OS</span>
        </div>
        <p className="text-white/25 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
          © 2026 Riccardo Piombino · Milano
        </p>
      </div>
    </footer>
  )
}

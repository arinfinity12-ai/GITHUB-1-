import { DashboardSidebar } from '@/components/dashboard/Sidebar'

/* Layout condiviso per tutte le pagine /dashboard/* */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#1a1a2e] overflow-hidden">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

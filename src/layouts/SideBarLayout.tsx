import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider dir="rtl">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex items-center p-4">
          <SidebarTrigger className="text-primary/50 hover:text-primary"/>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
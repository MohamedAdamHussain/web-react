import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
      <SidebarProvider dir="rtl">
        <AppSidebar />
        <main className="w-full">
          <div className="flex items-center p-4">
            <SidebarTrigger className="text-primary/50 hover:text-primary" />
          </div>
          <div className="p-2">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default MainLayout

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './sidebar'
import { Outlet } from 'react-router'
import { DashboardHeader } from './header'
import type { CSSProperties } from 'react'

export const Dashboard = () => {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '19rem',
        } as CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

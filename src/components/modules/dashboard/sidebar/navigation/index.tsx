import { SidebarContent, SidebarFooter } from '@/components/ui/sidebar'
import { NavUser } from './user'
import { data } from './data'
import { NavSecondary } from './secondary'
import { NavDocuments } from './documents'
import { NavMain } from './main'

export const SidebarNavigation = () => {
  return (
    <>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </>
  )
}

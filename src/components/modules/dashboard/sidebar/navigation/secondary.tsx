import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import type { Icon } from '@tabler/icons-react'
import type { ComponentPropsWithoutRef } from 'react'

export type NavSecondaryItem = {
  title: string
  url: string
  icon: Icon
}

interface NavSecondaryProps {
  items: NavSecondaryItem[]
}

export const NavSecondary = ({
  items,
  ...props
}: NavSecondaryProps & ComponentPropsWithoutRef<typeof SidebarGroup>) => {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

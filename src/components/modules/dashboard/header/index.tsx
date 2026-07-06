import { ModeToggle } from '@/components/mode-toggle'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export const DashboardHeader = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4 justify-between">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
      />
      <Breadcrumb className="flex-1">
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-2">
        <ButtonGroup>
          <Button variant="ghost" size="icon-sm">
            <IconChevronLeft />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <IconChevronRight />
          </Button>
        </ButtonGroup>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
        />
        <ModeToggle variant="ghost" size="icon-sm" />
      </div>
    </header>
  )
}

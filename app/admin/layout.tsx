import { AppSidebar } from "@/components/app-sidebar"


import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

interface Props {
    children: React.ReactNode;
}
export default function Page(props: Props) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset >      
       {props.children}
      </SidebarInset>
    </SidebarProvider>
  )
}

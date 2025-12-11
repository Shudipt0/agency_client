'use client'
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Start",
      url: "#",
      items: [
        {
          title: "About Company",
          url: "/admin",
        },
        {
          title: "Users",
          url: "/admin/users",
        },
      ],
    },
    {
      title: "Service",
      url: "#",
      items: [
         {
          title: "View Services " ,
          url: "/admin/services",
        },
        {
          title: "Add Service",
          url: "/admin/services/addService",
        },      
     ],
    },

        {
      title: "Our Team",
      url: "#",
      items: [
        {
          title: "View Team " ,
          url: "/admin/team",
         
        },
        {
          title: "Add Team Member",
          url: "/admin/team/addTeamMember",
        },      
     ],
    },

    {
      title: "All Projects",
      url: "#",
      items: [
        {
          title: "View Projects " ,
          url: "/admin/projects",
         
        },
        {
          title: "Add Projects",
          url: "/admin/projects/addProject",
        },      
     ],
    },
    
    {
      title: "Experts Thought",
      url: "#",
      items: [
        {
          title: "View All Thought " ,
          url: "/admin/thought",
         
        },
        {
          title: "Add Thoughts",
          url: "/admin/thought/addThought",
        },      
     ],
    },

    {
      title: "Users Contact Info.",
      url: "#",
      items: [
        {
           title: "View Users Contact",
           url: "/admin/userContact",
        }
      ],
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathName = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
      <div className="flex items-end gap-4">
        <h1 className="text-[22px] text-black dark:text-white font-bold " >Dashboard</h1>
        <h3 className="text-[16px] font-serif text-blue-600 dark:text-white ">GreenDev.</h3>
      </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className={`${pathName === item.url? 'bg-blue-200 hover:bg-blue-200 dark:bg-gray-500 ': ''}`} >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

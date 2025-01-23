"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, Calendar, BarChart2, Wind } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Chat", href: "/chat", icon: MessageCircle },
  { name: "Daily Log", href: "/daily-log", icon: Calendar },
  { name: "Reports", href: "/reports", icon: BarChart2 },
  { name: "Breather", href: "/breather", icon: Wind },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r bg-zinc-950 text-zinc-50">
      <SidebarHeader className="h-16 border-b border-zinc-800 px-4">
        <div className="flex items-center gap-2 font-semibold">
          <div className="size-2 rounded-full bg-white/90" />
          Mentation
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href} className="gap-2">
                  <item.icon className="size-4" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


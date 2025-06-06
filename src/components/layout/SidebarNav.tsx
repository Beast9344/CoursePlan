
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Network,
  BookText,
  Library,
  Settings,
  LifeBuoy,
  BotMessageSquare,
  UserCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard, tooltip: 'Progress Dashboard' },
  { href: '/course-map', label: 'Course Map', icon: Network, tooltip: 'Interactive Course Map' },
  { href: '/module-summarizer', label: 'Summarizer', icon: BookText, tooltip: 'AI Module Summarizer' },
  { href: '/resource-library', label: 'Resources', icon: Library, tooltip: 'Resource Library' },
  { href: '/profile', label: 'Profile', icon: UserCircle, tooltip: 'User Profile' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <BotMessageSquare className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold font-headline group-data-[collapsible=icon]:hidden">Moodle Mentor</span>
        </Link>
      </SidebarHeader>

      <SidebarMenu className="flex-1 p-2">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                tooltip={{ children: item.tooltip, className: "capitalize" }}
                className={cn(
                  "justify-start",
                  (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                )}
              >
                <a>
                  <item.icon className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarFooter className="p-2 border-t">
        <SidebarMenu>
           <SidebarMenuItem>
            <Link href="#" legacyBehavior passHref>
              <SidebarMenuButton asChild className="justify-start" tooltip={{ children: "Help", className: "capitalize" }}>
                <a>
                  <LifeBuoy className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">Help</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="#" legacyBehavior passHref>
              <SidebarMenuButton asChild className="justify-start" tooltip={{ children: "Settings", className: "capitalize" }}>
                <a>
                  <Settings className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}

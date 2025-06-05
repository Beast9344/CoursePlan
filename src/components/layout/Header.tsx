"use client";

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/':
      return 'Progress Dashboard';
    case '/course-map':
      return 'Course Map';
    case '/module-summarizer':
      return 'Module Summarizer';
    case '/resource-library':
      return 'Resource Library';
    case '/profile': // Added case for profile page
      return 'User Profile';
    default:
      if (pathname.startsWith('/module/')) {
        const moduleId = pathname.split('/').pop();
        return `Module ${moduleId}`;
      }
      return 'Moodle Mentor';
  }
}

export function Header() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-4 md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold font-headline">{pageTitle}</h1>
      </div>
      <Button variant="ghost" size="icon" aria-label="Log out">
        <LogOut className="h-5 w-5" />
      </Button>
    </header>
  );
}

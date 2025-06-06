
import type { CourseModule } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, CircleSlash } from 'lucide-react';
import Link from 'next/link';

interface ModuleProgressCardProps {
  module: CourseModule;
}

const statusStyles = {
  completed: {
    Icon: CheckCircle,
    badgeVariant: 'default',
    badgeText: 'Completed',
    iconColor: 'text-green-500',
    textColor: 'text-green-700 dark:text-green-400',
    progressColor: 'bg-green-500', // Track color, indicator is theme primary
  },
  'in-progress': {
    Icon: Zap,
    badgeVariant: 'secondary',
    badgeText: 'In Progress',
    iconColor: 'text-blue-500',
    textColor: 'text-blue-700 dark:text-blue-400',
    progressColor: 'bg-blue-500', // Track color, indicator is theme primary
  },
  'not-started': {
    Icon: CircleSlash,
    badgeVariant: 'outline',
    badgeText: 'Not Started',
    iconColor: 'text-gray-500',
    textColor: 'text-gray-700 dark:text-gray-400',
    progressColor: 'bg-gray-300', // Track color, indicator is theme primary (will be 0% filled)
  },
} as const;


export function ModuleProgressCard({ module }: ModuleProgressCardProps) {
  const { Icon, badgeVariant, badgeText, iconColor } = statusStyles[module.status];

  return (
    <Card className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-lg">{module.title}</CardTitle>
          <Badge variant={badgeVariant} className="ml-2 whitespace-nowrap">
             <Icon className={`mr-1 h-3 w-3 ${iconColor}`} />
            {badgeText}
          </Badge>
        </div>
        {module.description && <CardDescription className="text-sm">{module.description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow p-4 space-y-3">
        <div> {/* Wrapper for progress bar and text */}
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs font-medium text-muted-foreground">Progress</p>
            <p className={`text-xs font-semibold ${statusStyles[module.status].textColor}`}>{module.progress}%</p>
          </div>
          {/* The Progress component's root will have its background set by progressColor, indicator is always theme primary */}
          <Progress value={module.progress} aria-label={`${module.title} progress: ${module.progress}%`} className={`h-2 rounded-full ${statusStyles[module.status].progressColor}`} />
        </div>
        {module.status === 'not-started' && (
          <p className="text-sm text-muted-foreground italic text-center">Get started with this module!</p>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/module/${module.id}`} legacyBehavior passHref className="w-full">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a>
              {module.status === 'completed' ? 'Review Module' : module.status === 'in-progress' ? 'Continue Module' : 'Start Module'}
            </a>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

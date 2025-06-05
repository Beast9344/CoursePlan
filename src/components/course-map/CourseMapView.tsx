import type { CourseModule } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, CircleSlash, Network } from 'lucide-react';

interface CourseMapViewProps {
  modules: CourseModule[];
}

const statusIcons = {
  completed: <CheckCircle className="h-4 w-4 text-green-500" />,
  'in-progress': <Zap className="h-4 w-4 text-blue-500" />,
  'not-started': <CircleSlash className="h-4 w-4 text-gray-500" />,
};

export function CourseMapView({ modules }: CourseMapViewProps) {
  if (!modules || modules.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center text-muted-foreground">
          No course map data available.
        </CardContent>
      </Card>
    );
  }

  // Create a map for quick lookup
  const moduleMap = new Map(modules.map(m => [m.id, m]));

  return (
    <div className="space-y-8">
      <div className="flex items-center text-2xl font-bold text-primary mb-6 font-headline">
        <Network className="w-8 h-8 mr-3" />
        Course Learning Path
      </div>
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border z-0"></div>

        {modules.map((module, index) => (
          <div key={module.id} className="relative mb-8">
            {/* Dot on the timeline */}
            <div className={`absolute left-[-0.8rem] top-1.5 w-4 h-4 rounded-full border-2 border-background z-10 ${
              module.status === 'completed' ? 'bg-green-500' : module.status === 'in-progress' ? 'bg-blue-500' : 'bg-muted'
            }`}></div>
            
            <Card className="ml-8 shadow-lg hover:shadow-xl transition-shadow duration-200 bg-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="font-headline text-xl">{module.title}</CardTitle>
                  <Badge variant={module.status === 'completed' ? 'default' : module.status === 'in-progress' ? 'secondary' : 'outline'} className="flex items-center gap-1">
                    {statusIcons[module.status]}
                    {module.status.replace('-', ' ')}
                  </Badge>
                </div>
                {module.description && <CardDescription>{module.description}</CardDescription>}
              </CardHeader>
              <CardContent>
                {module.objectives && module.objectives.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold mb-1">Learning Objectives:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                      {module.objectives.slice(0,2).map((obj, i) => <li key={i}>{obj}</li>)}
                      {module.objectives.length > 2 && <li>...and more</li>}
                    </ul>
                  </div>
                )}
                {module.dependencies && module.dependencies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Depends on:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.dependencies.map(depId => {
                        const depModule = moduleMap.get(depId);
                        return depModule ? (
                          <Badge key={depId} variant="outline">{depModule.title}</Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
              {index < modules.length - 1 && (
                <div className="absolute left-[-0.5rem] top-full mt-1 h-8 w-px bg-border z-0">
                   {/* This empty div is part of the connector, main line handled by the parent vertical line */}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}


// src/app/module/[moduleId]/page.tsx

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { placeholderModules } from "@/lib/placeholder-data"; // Assuming you have this
import { BookOpen } from "lucide-react";

interface ModulePageProps {
  params: {
    moduleId: string;
  };
}

export default function ModulePage({ params }: ModulePageProps) {
  const { moduleId } = params;
  const module = placeholderModules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Module Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The module with ID "{moduleId}" could not be found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center mb-2">
            <BookOpen className="h-7 w-7 mr-3 text-primary" />
            <CardTitle className="font-headline text-2xl">{module.title}</CardTitle>
          </div>
          {module.description && <CardDescription>{module.description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">Module ID: {moduleId}</p>
          <p>Status: {module.status}</p>
          <p>Progress: {module.progress}%</p>
          
          {module.objectives && module.objectives.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Learning Objectives:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {module.objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>
          )}
          
          <p className="mt-6 text-center text-gray-500 italic">
            Further module content (videos, interactive elements, resources specific to this module) would be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

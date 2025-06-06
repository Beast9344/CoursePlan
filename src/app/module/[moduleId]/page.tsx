
// src/app/module/[moduleId]/page.tsx
import Image from 'next/image';
import NextLink from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { placeholderModules, placeholderResources, resourceTypeDisplayNames, iconMap } from "@/lib/placeholder-data";
import type { Resource } from '@/types';
import { BookOpen, ExternalLink, Download, ArrowRight, PlayCircle, FileQuestion } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

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
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Module Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The module with ID "{moduleId}" could not be found.</p>
        </CardContent>
      </Card>
    );
  }

  const moduleSpecificResources = placeholderResources.filter(
    resource => resource.moduleAffiliation === moduleId
  );

  const moduleKnowledgeCheck = moduleSpecificResources.find(r => r.type === 'knowledge-check');
  const quizUrl = moduleKnowledgeCheck ? moduleKnowledgeCheck.url : `#moodle-quiz-generic-${moduleId}`;


  return (
    <div className="space-y-8">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-card p-6 border-b">
          <div className="flex items-center mb-3">
            <BookOpen className="h-8 w-8 mr-3 text-primary" />
            <CardTitle className="font-headline text-3xl text-foreground">{module.title}</CardTitle>
          </div>
          {module.description && <CardDescription className="text-base text-muted-foreground">{module.description}</CardDescription>}
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-xl mb-3 text-primary font-headline">Learning Objectives</h3>
            {module.objectives && module.objectives.length > 0 ? (
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                {module.objectives.map((obj, index) => (
                  <li key={index} className="text-sm">{obj}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No specific learning objectives listed for this module.</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Status</p>
              <p className="text-sm font-medium text-foreground">{module.status.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Progress</p>
              <p className="text-sm font-medium text-foreground">{module.progress}%</p>
            </div>
          </div>
          
          {module.videoUrl && (
            <div className="pt-6 border-t">
              <h3 className="font-semibold text-xl mb-4 text-primary font-headline flex items-center">
                <PlayCircle className="h-6 w-6 mr-2" />
                Video Lecture
              </h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4 relative shadow-md">
                <NextLink href={module.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="https://placehold.co/600x338.png" 
                    alt={`${module.title} Video Lecture Thumbnail`} 
                    layout="fill"
                    objectFit="cover"
                    className="hover:opacity-90 transition-opacity"
                    data-ai-hint="video lesson" 
                  />
                </NextLink>
              </div>
              <Button asChild variant="default" className="w-full sm:w-auto">
                <NextLink href={module.videoUrl} target="_blank" rel="noopener noreferrer">
                  Watch Video Lecture <ExternalLink className="ml-2 h-4 w-4" />
                </NextLink>
              </Button>
            </div>
          )}

          <div className="pt-6 border-t">
            <h3 className="font-semibold text-xl mb-4 text-primary font-headline">Supporting Resources & Activities</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Explore these materials to deepen your understanding and practice key skills for this module.
            </p>
            {moduleSpecificResources.length > 0 ? (
              <div className="space-y-4">
                {moduleSpecificResources.map((resource) => {
                  const IconComponent = resource.iconName && iconMap[resource.iconName] ? iconMap[resource.iconName] : ExternalLink;
                  const isExternal = resource.type === 'link' || resource.type === 'video' || resource.type === 'calculator' || resource.url.startsWith('http') || resource.url.startsWith('#moodle');
                  const ActionIcon = isExternal ? ExternalLink : Download;
                  
                  let actionText = 'View Resource';
                  if (isExternal) {
                       if ((resource.type === 'link' || resource.type === 'interactive-scenario' || resource.type === 'knowledge-check') && (resource.title.toLowerCase().includes('quiz') || resource.title.toLowerCase().includes('check'))) actionText = 'Take Quiz / Check';
                       else if (resource.type === 'video') actionText = 'Watch Video';
                       else if (resource.type === 'interactive-scenario') actionText = 'Start Scenario';
                       else if (resource.type === 'simulation') actionText = 'Run Simulation';
                       else if (resource.type === 'calculator') actionText = 'Open Tool';
                       else actionText = 'Open Link';
                  } else {
                       actionText = 'Download Resource';
                  }

                  return (
                    <Card key={resource.id} className="bg-secondary/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="h-6 w-6 mr-3 text-accent flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">{resource.title}</p>
                            <p className="text-xs text-muted-foreground">{resourceTypeDisplayNames[resource.type as Resource['type']] || resource.type}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <NextLink href={resource.url} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} download={!isExternal ? resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() : undefined}>
                            {actionText}
                            <ActionIcon className="ml-2 h-4 w-4" />
                          </NextLink>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">No specific resources or activities listed for this module yet.</p>
            )}
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold text-xl mb-4 text-primary font-headline flex items-center">
                <FileQuestion className="h-6 w-6 mr-2" />
                Module Quiz
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Test your understanding of this module's concepts. An 80% pass mark is typically required for course progression and to earn achievements.
            </p>
            <Button asChild variant="default" className="w-full sm:w-auto">
              <NextLink href={quizUrl} target="_blank" rel="noopener noreferrer">
                Take Module Quiz on Moodle <ExternalLink className="ml-2 h-4 w-4" />
              </NextLink>
            </Button>
          </div>

        </CardContent>
        <CardFooter className="bg-card p-6 border-t">
            <p className="text-xs text-muted-foreground text-center w-full">
                Module assessment (quizzes, practical exercises), final exams, and the issuance of digital badges or certificates are managed within the Moodle LMS. Moodle Mentor helps you track progress and access learning materials.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}


// src/app/module/[moduleId]/page.tsx
import Image from 'next/image';
import NextLink from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { placeholderModules, placeholderResources, resourceTypeDisplayNames, iconMap } from "@/lib/placeholder-data";
import type { Resource } from '@/types';
import { 
  BookOpen, ExternalLink, Download, PlayCircle, FileQuestion, 
  ListChecks, BarChartBig, FileText, Puzzle, Lightbulb, Info
} from "lucide-react"; // Added more icons
import type { LucideIcon } from 'lucide-react';

interface ModulePageProps {
  params: {
    moduleId: string;
  };
}

const coreDownloadableResourceTypes: Resource['type'][] = ['checklist', 'worksheet', 'template', 'matrix'];
const interactiveLearningTypes: Resource['type'][] = ['interactive-scenario', 'simulation'];

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

  const interactiveLearningResources = moduleSpecificResources.filter(r => interactiveLearningTypes.includes(r.type));
  const downloadableCoreResources = moduleSpecificResources.filter(r => coreDownloadableResourceTypes.includes(r.type));
  const additionalResources = moduleSpecificResources.filter(
    r => !interactiveLearningTypes.includes(r.type) && !coreDownloadableResourceTypes.includes(r.type) && r.type !== 'knowledge-check' && r.type !== 'video'
  );


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
            <h3 className="font-semibold text-xl mb-3 text-primary font-headline flex items-center">
                <Lightbulb className="h-6 w-6 mr-2"/>
                Learning Objectives
            </h3>
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
            <h3 className="font-semibold text-xl mb-4 text-primary font-headline flex items-center">
                <FileQuestion className="h-6 w-6 mr-2" />
                Module Quiz (Sample)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Test your understanding with this sample quiz. Official, graded quizzes (80% pass mark typically required) are completed on Moodle.
            </p>
            <Button asChild variant="default" className="w-full sm:w-auto">
              <NextLink href="/quiz/sample">
                Try Sample Quiz <ExternalLink className="ml-2 h-4 w-4" />
              </NextLink>
            </Button>
          </div>

          {interactiveLearningResources.length > 0 && (
            <div className="pt-6 border-t">
              <h3 className="font-semibold text-xl mb-4 text-primary font-headline flex items-center">
                <Puzzle className="h-6 w-6 mr-2" />
                Interactive Learning & Simulations
              </h3>
              <div className="space-y-4">
                {interactiveLearningResources.map((resource) => {
                  const IconComponent = resource.iconName && iconMap[resource.iconName] ? iconMap[resource.iconName] : ExternalLink;
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
                          <NextLink href={resource.url} target="_blank" rel="noopener noreferrer">
                            Start Activity <ExternalLink className="ml-2 h-4 w-4" />
                          </NextLink>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {downloadableCoreResources.length > 0 && (
            <div className="pt-6 border-t">
              <h3 className="font-semibold text-xl mb-4 text-primary font-headline flex items-center">
                <ListChecks className="h-6 w-6 mr-2" />
                Downloadable Core Templates & Checklists
              </h3>
              <div className="space-y-4">
                {downloadableCoreResources.map((resource) => {
                  const IconComponent = resource.iconName && iconMap[resource.iconName] ? iconMap[resource.iconName] : Download;
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
                          <NextLink href={resource.url} download={resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}>
                            Download <Download className="ml-2 h-4 w-4" />
                          </NextLink>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
          
          {additionalResources.length > 0 && (
            <div className="pt-6 border-t">
              <h3 className="font-semibold text-xl mb-4 text-primary font-headline flex items-center">
                <Info className="h-6 w-6 mr-2" />
                Additional Supporting Materials
              </h3>
              <div className="space-y-4">
                {additionalResources.map((resource) => {
                  const IconComponent = resource.iconName && iconMap[resource.iconName] ? iconMap[resource.iconName] : ExternalLink;
                  const isExternal = resource.type === 'link' || resource.url.startsWith('http') || resource.url.startsWith('#moodle');
                  const ActionIcon = isExternal ? ExternalLink : Download;
                  let actionText = isExternal ? 'Open Link' : 'Download';
                  if(resource.type === 'case-study' && isExternal) actionText = 'Read Case Study';
                  else if(resource.type === 'case-study' && !isExternal) actionText = 'Download Case Study';
                  
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
            </div>
          )}


        </CardContent>
        <CardFooter className="bg-card p-6 border-t">
            <p className="text-xs text-muted-foreground text-center w-full">
                Module assessment (graded quizzes, practical exercises), final exams, and the issuance of digital badges or certificates (requiring an 80% pass mark) are managed within the Moodle LMS. Moodle Mentor helps you track progress and access learning materials.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}

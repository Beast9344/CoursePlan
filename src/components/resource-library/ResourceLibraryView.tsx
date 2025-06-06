
'use client';

import type { Resource } from '@/types';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  ExternalLink, 
  Filter, 
  Search, 
  Library, 
  ListCollapse,
  FileText,
  Link as LinkIcon, 
  Video,
  CheckSquare,
  Calculator,
  GanttChartSquare,
  Rows3,
  ClipboardCheck,
  Table2,
  FileSpreadsheet,
  MousePointerClick, // Added for interactive-scenario
  PlaySquare,       // Added for simulation
  HelpCircle,       // For quizzes/knowledge checks (link type)
  Map,              // For state resources
  ShieldCheck       // For ethics
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import NextLink from 'next/link'; 

interface ResourceLibraryViewProps {
  resources: Resource[];
}

const iconMap: { [key: string]: LucideIcon } = {
  FileText,
  Link: LinkIcon,
  Video,
  CheckSquare,
  Calculator,
  GanttChartSquare,
  Rows3,
  ClipboardCheck,
  Table2,
  FileSpreadsheet,
  MousePointerClick,
  PlaySquare,
  HelpCircle,
  Map,
  ShieldCheck,
  Download, 
  ExternalLink, 
};

const resourceTypeDisplayNames: Record<Resource['type'], string> = {
  pdf: 'PDF Document',
  link: 'External Link / Quiz',
  video: 'Video Content',
  document: 'Document / Guide',
  template: 'Template',
  checklist: 'Checklist',
  diagram: 'Diagram',
  calculator: 'Calculator / Tool',
  timeline: 'Timeline',
  matrix: 'Comparison Matrix',
  worksheet: 'Worksheet',
  'interactive-scenario': 'Interactive Scenario',
  simulation: 'Process Simulation',
};

export function ResourceLibraryView({ resources: initialResources }: ResourceLibraryViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  
  const uniqueTypes = ['all', ...Array.from(new Set(initialResources.map(r => r.type)))];

  const filteredResources = initialResources.filter(resource => {
    const matchesSearchTerm = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearchTerm && matchesType;
  });

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center">
            <Library className="mr-3 h-7 w-7 text-primary" />
            Resource Library
          </CardTitle>
          <CardDescription>
            Find compliance information, templates, links, interactive content, and other helpful materials.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search resources..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full sm:w-[220px]"> {/* Increased width for longer names */}
                <ListCollapse className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {uniqueTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Types' : resourceTypeDisplayNames[type as Resource['type']] || type.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const IconComponent = resource.iconName ? iconMap[resource.iconName] : LinkIcon; // Default to LinkIcon
            const isExternal = resource.type === 'link' || resource.type === 'video' || resource.type === 'calculator' || resource.url.startsWith('http') || resource.url.startsWith('#moodle');
            const ActionIcon = isExternal ? iconMap['ExternalLink'] : iconMap['Download'];
            
            let actionText = 'View Resource';
            if (isExternal) {
                 if (resource.type === 'link' && (resource.title.toLowerCase().includes('quiz') || resource.title.toLowerCase().includes('check'))) actionText = 'Take Quiz';
                 else if (resource.type === 'video') actionText = 'Watch Video';
                 else if (resource.type === 'interactive-scenario') actionText = 'Start Scenario';
                 else if (resource.type === 'simulation') actionText = 'Run Simulation';
                 else actionText = 'Open Link';
            } else {
                 actionText = 'Download';
            }


            return (
              <Card key={resource.id} className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-200 bg-card">
                <CardHeader>
                  <div className="flex items-start mb-2">
                    <IconComponent className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
                    <CardTitle className="font-headline text-lg">{resource.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">{resourceTypeDisplayNames[resource.type] || resource.type}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  {resource.description && <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>}
                  {resource.moduleAffiliation && (
                    <div className="text-xs text-muted-foreground mb-3">
                      <span>Related to: </span>
                      <Badge variant="secondary">{placeholderModules.find(m => m.id === resource.moduleAffiliation)?.title || resource.moduleAffiliation}</Badge>
                    </div>
                  )}
                  {resource.tags && resource.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs px-1.5 py-0.5 font-normal">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" size="sm" className="w-full">
                    <NextLink href={resource.url} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} download={!isExternal ? resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() : undefined}>
                      <ActionIcon className="mr-2 h-4 w-4" />
                      {actionText}
                    </NextLink>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            No resources found matching your criteria.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Minimal placeholderModules to resolve circular dependency for CardContent badge
const placeholderModules: {id: string, title: string}[] = [
  {id: "module1", title: "Module 1: Payroll Fundamentals & Setup"},
  {id: "module2", title: "Module 2: Wage & Hour Compliance"},
  {id: "module3", title: "Module 3: Payroll Software & Systems"},
  {id: "module4", title: "Module 4: Taxation & Compliance I (Federal)"},
  {id: "module5", title: "Module 5: Taxation & Compliance II (State & Local)"},
  {id: "module6", title: "Module 6: Benefits & Deductions Administration"},
  {id: "module7", title: "Module 7: Payroll Reporting, Reconciliation & Auditing"},
  {id: "module8", title: "Module 8: Advanced Topics & Real-World Scenarios"},
];

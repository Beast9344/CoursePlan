
'use client';

import type { Resource } from '@/types';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Download, 
  ExternalLink, 
  Filter, 
  Search, 
  Library, 
  ListCollapse,
  FileText,
  Link as LinkIcon, // Renamed to avoid conflict with NextLink
  Video,
  CheckSquare,
  Calculator,
  GanttChartSquare,
  Rows3,
  ClipboardCheck,
  Table2,
  FileSpreadsheet
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import NextLink from 'next/link'; // Using NextLink for clarity

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
  Download, // Default download icon if specific not found
  ExternalLink, // Default external link icon
};

const resourceTypeDisplayNames: Record<Resource['type'], string> = {
  pdf: 'PDF Document',
  link: 'External Link',
  video: 'Video Content',
  document: 'Document',
  template: 'Template',
  checklist: 'Checklist',
  diagram: 'Diagram',
  calculator: 'Calculator',
  timeline: 'Timeline',
  matrix: 'Comparison Matrix',
  worksheet: 'Worksheet', // Added worksheet
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
            Find compliance information, templates, links, and other helpful materials.
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
              <SelectTrigger className="w-full sm:w-[200px]">
                <ListCollapse className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {uniqueTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === 'all' ? 'All Types' : resourceTypeDisplayNames[type as Resource['type']] || type}
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
            const IconComponent = resource.iconName ? iconMap[resource.iconName] : null;
            const ActionIcon = resource.type === 'link' || resource.type === 'video' ? iconMap['ExternalLink'] : iconMap['Download'];
            const actionText = resource.type === 'link' ? 'Open Link' : resource.type === 'video' ? 'Watch Video' : 'Download';

            return (
              <Card key={resource.id} className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {IconComponent && <IconComponent className="h-6 w-6 mr-3 text-primary" />}
                    <CardTitle className="font-headline text-lg">{resource.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">{resourceTypeDisplayNames[resource.type] || resource.type}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  {resource.description && <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>}
                  {resource.moduleAffiliation && <p className="text-xs text-muted-foreground">Related to: <Badge variant="secondary">{resource.moduleAffiliation}</Badge></p>}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" size="sm" className="w-full">
                    <NextLink href={resource.url} target={resource.type === 'link' ? '_blank' : '_self'} rel={resource.type === 'link' ? 'noopener noreferrer' : undefined}>
                      {ActionIcon && <ActionIcon className="mr-2 h-4 w-4" />}
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


import type { LucideIcon } from 'lucide-react';

export type ModuleStatus = 'completed' | 'in-progress' | 'not-started';

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  dependencies?: string[];
  status: ModuleStatus;
  progress: number; // 0-100
  objectives?: string[];
  videoUrl?: string;
  scormUrl?: string;
}

// Added 'worksheet' to ResourceType, though many can be 'template'
export type ResourceType = 'pdf' | 'link' | 'video' | 'document' | 'template' | 'checklist' | 'diagram' | 'calculator' | 'timeline' | 'matrix' | 'worksheet';

export interface Resource {
  id: string;
  title: string;
  description?: string;
  type: ResourceType;
  url: string;
  icon?: LucideIcon; // Lucide icon component
  tags?: string[]; // For filtering
  moduleAffiliation?: string; // Which module this resource belongs to
}

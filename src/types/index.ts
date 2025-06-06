
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

// Added 'interactive-scenario' and 'simulation' to ResourceType
export type ResourceType = 
  | 'pdf' 
  | 'link' 
  | 'video' 
  | 'document' 
  | 'template' 
  | 'checklist' 
  | 'diagram' 
  | 'calculator' 
  | 'timeline' 
  | 'matrix' 
  | 'worksheet'
  | 'interactive-scenario'
  | 'simulation';

export interface Resource {
  id: string;
  title: string;
  description?: string;
  type: ResourceType;
  url: string;
  iconName?: string; 
  tags?: string[]; 
  moduleAffiliation?: string; 
}


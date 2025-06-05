
import type { CourseModule, Resource } from '@/types';
import { FileText, Link as LinkIcon, Video, CheckSquare, BarChart2, CalendarDays, GanttChartSquare, Rows3, Calculator, ClipboardCheck, Table2, FileSpreadsheet } from 'lucide-react'; // Added Calculator, ClipboardCheck, Table2, FileSpreadsheet, LinkIcon

export const placeholderModules: CourseModule[] = [
  {
    id: 'module1',
    title: 'Module 1: Payroll Fundamentals',
    description: 'Understanding the basics of payroll processing.',
    status: 'completed',
    progress: 100,
    dependencies: [],
    objectives: ['Define key payroll terms', 'Understand payroll cycles'],
    videoUrl: 'https://example.com/video1',
  },
  {
    id: 'module2',
    title: 'Module 2: Payroll Software & Systems',
    description: 'Exploring different payroll software and systems.',
    status: 'in-progress',
    progress: 60,
    dependencies: ['module1'],
    objectives: ['Compare payroll software', 'Select appropriate system'],
  },
  {
    id: 'module3',
    title: 'Module 3: Taxation & Compliance',
    description: 'Deep dive into payroll taxes and compliance requirements.',
    status: 'not-started',
    progress: 0,
    dependencies: ['module1'],
    objectives: ['Calculate federal and state taxes', 'Understand FICA, FUTA, SUTA'],
  },
  {
    id: 'module4',
    title: 'Module 4: Benefits & Deductions',
    description: 'Managing employee benefits and various deductions.',
    status: 'not-started',
    progress: 0,
    dependencies: ['module1', 'module3'],
    objectives: ['Administer pre-tax vs post-tax benefits', 'Process garnishments'],
  },
  {
    id: 'module5',
    title: 'Module 5: Payroll Reporting & Auditing',
    description: 'Covering year-end reporting and audit procedures.',
    status: 'not-started',
    progress: 0,
    dependencies: ['module1', 'module2', 'module3', 'module4'],
    objectives: ['Generate audit checklists', 'Perform reconciliations'],
  },
];

export const placeholderResources: Resource[] = [
  {
    id: 'res1',
    title: 'Payroll Compliance Checklist',
    type: 'checklist',
    url: '#',
    icon: CheckSquare,
    description: 'A comprehensive checklist for ensuring payroll compliance.',
    moduleAffiliation: 'module3',
    tags: ['compliance', 'checklist'],
  },
  {
    id: 'res2',
    title: 'Federal Tax Calculator Guide',
    type: 'calculator', // Changed from 'link' to 'calculator' for consistency
    url: '#',
    icon: Calculator, // Changed to Calculator icon
    description: 'Guide to using federal tax calculators effectively.',
    moduleAffiliation: 'module3',
    tags: ['taxation', 'calculator'],
  },
  {
    id: 'res3',
    title: 'Benefits Enrollment Process Video',
    type: 'video',
    url: '#',
    icon: Video,
    description: 'A video walkthrough of the benefits enrollment process.',
    moduleAffiliation: 'module4',
    tags: ['benefits', 'video'],
  },
  {
    id: 'res4',
    title: 'Year-End Reporting Timeline Template',
    type: 'timeline', // This type was fine
    url: '#',
    icon: GanttChartSquare, // This icon was fine
    description: 'A template for planning year-end reporting activities.',
    moduleAffiliation: 'module5',
    tags: ['reporting', 'template', 'timeline'],
  },
  {
    id: 'res5',
    title: 'External Payroll Resources (IRS)',
    type: 'link',
    url: 'https://www.irs.gov',
    icon: LinkIcon, // Use imported LinkIcon
    description: 'Link to official IRS website for payroll professionals.',
    tags: ['external', 'irs', 'link'],
  },
   {
    id: 'res6',
    title: 'Employee Information Management PDF',
    type: 'pdf',
    url: '#',
    icon: FileText,
    description: 'Detailed PDF on managing employee information securely.',
    moduleAffiliation: 'module1',
    tags: ['employee data', 'pdf'],
  },
  {
    id: 'res7',
    title: 'Vendor Comparison Matrix (Old)',
    type: 'matrix',
    url: '#',
    icon: Rows3, // Existing icon for matrix
    description: 'Interactive matrix to compare payroll software vendors.',
    moduleAffiliation: 'module2',
    tags: ['software', 'vendor', 'matrix'],
  },
  // New resources based on user request
  {
    id: 'res8',
    title: 'Tax Calculation Worksheets',
    type: 'template', // Categorizing as a template
    url: '#download-tax-worksheets', // Placeholder URL
    icon: FileSpreadsheet, // Icon for spreadsheets/worksheets
    description: 'Downloadable worksheets for various tax calculations.',
    moduleAffiliation: 'module3',
    tags: ['taxation', 'worksheet', 'template'],
  },
  {
    id: 'res9',
    title: 'Audit Templates Pack',
    type: 'template',
    url: '#download-audit-templates', // Placeholder URL
    icon: ClipboardCheck, // Icon for checklists/audit related
    description: 'A collection of templates for payroll audits.',
    moduleAffiliation: 'module5',
    tags: ['audit', 'template', 'reporting'],
  },
  {
    id: 'res10',
    title: 'Software Evaluation Matrix',
    type: 'matrix',
    url: '#view-software-matrix', // Placeholder URL
    icon: Table2, // Icon suitable for matrices or tables
    description: 'A structured matrix for evaluating payroll software features.',
    moduleAffiliation: 'module2',
    tags: ['software', 'evaluation', 'matrix'],
  },
];

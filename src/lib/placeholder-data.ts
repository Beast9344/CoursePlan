
import type { CourseModule, Resource } from '@/types';
import type { LucideIcon } from 'lucide-react';
import { 
  Download, 
  ExternalLink, 
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
  MousePointerClick,
  PlaySquare,
  HelpCircle,
  Map,
  ShieldCheck,
  GitFork, 
  Workflow, 
  CalendarDays, 
  Network, 
} from 'lucide-react';

export const iconMap: { [key: string]: LucideIcon } = {
  FileText,
  Link: LinkIcon,
  Video,
  CheckSquare, // For checklists
  Calculator,
  GanttChartSquare, // For timelines
  Rows3, // Document or list-like templates
  ClipboardCheck, // For audit templates
  Table2, // For matrices
  FileSpreadsheet, // For worksheets
  MousePointerClick, // For interactive scenarios
  PlaySquare, // For simulations
  HelpCircle, // For quizzes/knowledge checks (link type)
  Map, // For state resources
  ShieldCheck, // For ethics documents
  GitFork, // For decision trees / branching scenarios
  Workflow, // For workflow diagrams
  CalendarDays, // For calendar templates
  Network, // For general diagrams or concept maps
  Download, 
  ExternalLink, 
};

export const resourceTypeDisplayNames: Record<Resource['type'], string> = {
  pdf: 'PDF Document',
  link: 'External Link / Web Resource',
  video: 'Video Content',
  document: 'Document / Guide',
  template: 'Template / Tool',
  checklist: 'Checklist',
  diagram: 'Diagram / Visual Aid',
  calculator: 'Calculation Tool',
  timeline: 'Timeline / Plan',
  matrix: 'Comparison Matrix / Grid',
  worksheet: 'Worksheet / Exercise',
  'interactive-scenario': 'Interactive Scenario',
  simulation: 'Process Simulation',
  workflow: 'Workflow / Process Map',
  'case-study': 'Case Study',
  'knowledge-check': 'Knowledge Check / Quiz',
};


export const placeholderModules: CourseModule[] = [
  {
    id: 'mppf', // Module 1: Payroll Processing Fundamentals
    title: 'Module 1: Payroll Processing Fundamentals',
    description: 'Master the essential steps of payroll, from employee setup to timekeeping and understanding the basic workflow.',
    status: 'not-started',
    progress: 0,
    dependencies: [],
    objectives: [
      'Understand the complete payroll processing cycle.',
      'Implement effective employee information management.',
      'Evaluate and compare timekeeping systems.',
      'Identify key stages in the payroll workflow.',
    ],
  },
  {
    id: 'mps', // Module 2: Payroll Software & Systems
    title: 'Module 2: Payroll Software & Systems',
    description: 'Learn to select, implement, and utilize payroll software effectively, including decision-making and vendor comparison.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mppf'],
    objectives: [
      'Categorize different types of payroll software.',
      'Develop a decision tree for selecting appropriate software.',
      'Compare payroll software vendors using a structured matrix.',
      'Simulate a software implementation timeline.',
      'Analyze case studies of system selection processes.',
    ],
  },
  {
    id: 'mtc', // Module 3: Taxation & Compliance
    title: 'Module 3: Taxation & Compliance',
    description: 'Navigate the complexities of federal and state payroll taxes, understand compliance requirements, and apply calculations.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mppf'],
    objectives: [
      'Differentiate between federal and state tax obligations.',
      'Utilize a compliance calendar for timely tax activities.',
      'Understand FICA, FUTA, and SUTA through interactive diagrams.',
      'Perform scenario-based tax calculations.',
    ],
  },
  {
    id: 'mbd', // Module 4: Benefits & Deductions
    title: 'Module 4: Benefits & Deductions',
    description: 'Manage employee benefits, various deductions (pre-tax, post-tax), garnishments, and PTO accruals accurately.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mppf', 'mtc'],
    objectives: [
      'Compare pre-tax and post-tax deductions and their impact.',
      'Simulate the benefits enrollment process.',
      'Understand and process wage garnishments according to legal requirements.',
      'Calculate Paid Time Off (PTO) accruals.',
    ],
  },
  {
    id: 'maem', // Module 5: Auditing & Error Management
    title: 'Module 5: Auditing & Error Management',
    description: 'Prepare for payroll audits, identify and correct errors, manage year-end reporting, and use reconciliation templates.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mps', 'mtc', 'mbd'],
    objectives: [
      'Generate comprehensive audit checklists.',
      'Identify common payroll errors through scenarios.',
      'Manage the year-end payroll reporting timeline effectively.',
      'Utilize templates for payroll reconciliation.',
    ],
  },
];

export const placeholderResources: Resource[] = [
  // --- Module 1: Payroll Processing Fundamentals (mppf) ---
  {
    id: 'res_mppf_timeline', title: 'Interactive Timeline: Payroll Steps', type: 'timeline',
    url: '#moodle-interactive-timeline-mppf', iconName: 'GanttChartSquare',
    description: 'Visualize the sequential steps in a typical payroll processing cycle.',
    moduleAffiliation: 'mppf', tags: ['payroll process', 'timeline', 'interactive'],
  },
  {
    id: 'res_mppf_checklist_empinfo', title: 'Employee Information Management Checklist', type: 'checklist',
    url: '/resources/mppf_empinfo_checklist.pdf', iconName: 'CheckSquare',
    description: 'A checklist to ensure all necessary employee data is collected and managed correctly.',
    moduleAffiliation: 'mppf', tags: ['employee data', 'checklist', 'management'],
  },
  {
    id: 'res_mppf_tool_timekeeping', title: 'Timekeeping System Comparison Tool', type: 'matrix',
    url: '/resources/mppf_timekeeping_matrix.xlsx', iconName: 'Table2',
    description: 'A template to compare features of different timekeeping systems.',
    moduleAffiliation: 'mppf', tags: ['timekeeping', 'comparison', 'tool', 'matrix'],
  },
  // Mandatory additions for Module 1
  {
    id: 'res_mppf_scenario_fraudcase', title: 'Interactive Scenario: Payroll Fraud Case Study', type: 'interactive-scenario',
    url: '#moodle-scenario-mppf-fraud', iconName: 'MousePointerClick',
    description: 'Explore a real-world example related to payroll fundamentals in an interactive scenario (e.g., Philly cheesesteak fraud case).',
    moduleAffiliation: 'mppf', tags: ['interactive scenario', 'case study', 'fraud', 'fundamentals'],
  },
  {
    id: 'res_mppf_knowledge_check_workflow', title: 'Knowledge Check: Payroll Process Workflow', type: 'knowledge-check',
    url: '#moodle-quiz-mppf-workflow', iconName: 'HelpCircle',
    description: 'Test your understanding of the payroll process workflow with immediate feedback. (Moodle Quiz/H5P)',
    moduleAffiliation: 'mppf', tags: ['quiz', 'knowledge check', 'workflow', 'assessment'],
  },
  {
    id: 'res_mppf_simulation_basicsteps', title: 'Process Simulation: Basic Payroll Steps', type: 'simulation',
    url: '#moodle-simulation-mppf-basicsteps', iconName: 'PlaySquare',
    description: 'Step-by-step walkthrough of fundamental payroll processing actions using Articulate simulation features.',
    moduleAffiliation: 'mppf', tags: ['simulation', 'payroll steps', 'articulate'],
  },
  {
    id: 'res_mppf_dl_compliance_checklist', title: 'Downloadable: Fundamentals Compliance Checklist', type: 'checklist',
    url: '/resources/mppf_compliance_checklist_generic.pdf', iconName: 'CheckSquare',
    description: 'A general compliance checklist for payroll fundamentals.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'compliance', 'checklist', 'fundamentals'],
  },
  {
    id: 'res_mppf_dl_tax_worksheet', title: 'Downloadable: Basic Tax Calculation Worksheet', type: 'worksheet',
    url: '/resources/mppf_tax_worksheet_basic.xlsx', iconName: 'FileSpreadsheet',
    description: 'A worksheet for practicing basic tax calculations relevant to fundamentals.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'tax calculation', 'worksheet', 'fundamentals'],
  },
  {
    id: 'res_mppf_dl_audit_template', title: 'Downloadable: Basic Audit Template', type: 'template',
    url: '/resources/mppf_audit_template_basic.docx', iconName: 'ClipboardCheck',
    description: 'A basic audit template for fundamental payroll processes.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'audit', 'template', 'fundamentals'],
  },
  { 
    id: 'res_mppf_dl_software_eval_matrix', title: 'Downloadable: Basic Software Feature Matrix', type: 'matrix',
    url: '/resources/mppf_software_eval_matrix_basic.xlsx', iconName: 'Table2',
    description: 'A basic matrix for evaluating essential software features, relevant even at a fundamental level.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'software evaluation', 'matrix', 'fundamentals'],
  },

  // --- Module 2: Payroll Software & Systems (mps) ---
  {
    id: 'res_mps_tree_softwarecat', title: 'Software Category Decision Tree', type: 'interactive-scenario', // Changed from diagram to interactive-scenario
    url: '#moodle-decisiontree-mps-softwarecat', iconName: 'GitFork', // GitFork is good for decision trees
    description: 'An interactive decision tree to help select the right category of payroll software (Articulate Scenario).',
    moduleAffiliation: 'mps', tags: ['software selection', 'decision tree', 'interactive', 'articulate'],
  },
  {
    id: 'res_mps_matrix_vendor', title: 'Vendor Comparison Matrix (Interactive)', type: 'matrix', // Kept as matrix, implies interactive tool
    url: '#moodle-interactivematrix-mps-vendor', iconName: 'Table2',
    description: 'Interactively compare different payroll software vendors based on various criteria. (Moodle H5P or embedded tool)',
    moduleAffiliation: 'mps', tags: ['vendor comparison', 'matrix', 'interactive', 'tool'],
  },
  {
    id: 'res_mps_sim_implementation', title: 'Implementation Timeline Simulator', type: 'simulation',
    url: '#moodle-simulation-mps-implementation', iconName: 'PlaySquare',
    description: 'Simulate the stages and timeline for implementing a new payroll system (Articulate Simulation).',
    moduleAffiliation: 'mps', tags: ['software implementation', 'timeline', 'simulation', 'articulate'],
  },
  {
    id: 'res_mps_casestudy_selection', title: 'Case Study: System Selection Process', type: 'case-study',
    url: '/resources/mps_casestudy_selection.pdf', iconName: 'FileText',
    description: 'A detailed case study analyzing a company\'s payroll system selection process.',
    moduleAffiliation: 'mps', tags: ['case study', 'system selection', 'software'],
  },
  // Mandatory additions for Module 2
   {
    id: 'res_mps_scenario_vendor_negotiation', title: 'Interactive Scenario: Vendor Negotiation Tactics', type: 'interactive-scenario',
    url: '#moodle-scenario-mps-negotiation', iconName: 'MousePointerClick',
    description: 'Branching scenario on negotiating with payroll software vendors (Articulate).',
    moduleAffiliation: 'mps', tags: ['interactive scenario', 'vendor management', 'negotiation', 'articulate'],
  },
  {
    id: 'res_mps_knowledge_check_eval_criteria', title: 'Knowledge Check: Software Evaluation Criteria', type: 'knowledge-check',
    url: '#moodle-quiz-mps-evaluation', iconName: 'HelpCircle',
    description: 'Test your knowledge on key criteria for evaluating payroll software with immediate feedback. (Moodle Quiz/H5P)',
    moduleAffiliation: 'mps', tags: ['quiz', 'software evaluation', 'assessment'],
  },
  {
    id: 'res_mps_dl_compliance_checklist', title: 'Downloadable: Software Implementation Compliance Checklist', type: 'checklist',
    url: '/resources/mps_compliance_checklist_software.pdf', iconName: 'CheckSquare',
    description: 'A compliance checklist specifically for software selection and implementation phases.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'compliance', 'checklist', 'software implementation'],
  },
  {
    id: 'res_mps_dl_tax_worksheet', title: 'Downloadable: Tax Configuration Worksheet for Software', type: 'worksheet',
    url: '/resources/mps_tax_worksheet_software_config.xlsx', iconName: 'FileSpreadsheet',
    description: 'Worksheet to plan tax setup and configuration requirements during software evaluation.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'tax configuration', 'worksheet', 'software'],
  },
  {
    id: 'res_mps_dl_audit_template_software', title: 'Downloadable: Software Setup & Configuration Audit Template', type: 'template',
    url: '/resources/mps_audit_template_software_setup.docx', iconName: 'ClipboardCheck',
    description: 'Template for auditing the setup and configuration of new payroll software.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'audit', 'template', 'software setup'],
  },
  {
    id: 'res_mps_dl_software_eval_matrix', title: 'Downloadable: Comprehensive Software Evaluation Matrix Template', type: 'matrix',
    url: '/resources/mps_software_eval_matrix_template_comprehensive.xlsx', iconName: 'Table2',
    description: 'A comprehensive template for evaluating and comparing payroll software vendors.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'software evaluation', 'matrix', 'template'],
  },

  // --- Module 3: Taxation & Compliance (mtc) ---
  {
    id: 'res_mtc_calc_fedstate', title: 'Federal vs State Tax Calculator (Tool)', type: 'calculator', // Clarified as a tool
    url: '#moodle-tool-mtc-taxcalculator', iconName: 'Calculator',
    description: 'A tool to help understand differences in federal and state tax calculations. (External or Moodle Tool)',
    moduleAffiliation: 'mtc', tags: ['tax calculator', 'federal tax', 'state tax', 'tool'],
  },
  {
    id: 'res_mtc_template_calendar', title: 'Compliance Calendar Template', type: 'template',
    url: '/resources/mtc_compliance_calendar.ics', iconName: 'CalendarDays', // .ics for calendar import
    description: 'A downloadable template for tracking key payroll compliance deadlines (.ics format).',
    moduleAffiliation: 'mtc', tags: ['compliance calendar', 'template', 'deadlines', 'ics'],
  },
  {
    id: 'res_mtc_diagram_tax', title: 'FICA/FUTA/SUTA Interactive Diagrams', type: 'diagram',
    url: '#moodle-interactivediagram-mtc-tax', iconName: 'Network', // Network for diagrams
    description: 'Interactive diagrams explaining FICA, FUTA, and SUTA contributions. (Moodle H5P or Articulate)',
    moduleAffiliation: 'mtc', tags: ['tax diagrams', 'fica', 'futa', 'suta', 'interactive'],
  },
  {
    id: 'res_mtc_scenario_taxcalc', title: 'Scenario-Based Tax Calculations (Interactive)', type: 'interactive-scenario', // Already interactive scenario
    url: '#moodle-scenario-mtc-taxcalc', iconName: 'MousePointerClick',
    description: 'Work through real-world scenarios requiring various payroll tax calculations (Articulate Scenario).',
    moduleAffiliation: 'mtc', tags: ['tax calculation', 'interactive scenario', 'compliance', 'articulate'],
  },
  // Mandatory additions for Module 3
  {
    id: 'res_mtc_knowledge_check_taxforms', title: 'Knowledge Check: Federal & State Tax Forms', type: 'knowledge-check',
    url: '#moodle-quiz-mtc-taxforms', iconName: 'HelpCircle',
    description: 'Quiz on common federal and state payroll tax forms with immediate feedback. (Moodle Quiz/H5P)',
    moduleAffiliation: 'mtc', tags: ['quiz', 'tax forms', 'federal', 'state', 'assessment'],
  },
  {
    id: 'res_mtc_simulation_taxfiling', title: 'Process Simulation: Quarterly Tax Filing', type: 'simulation',
    url: '#moodle-simulation-mtc-taxfiling', iconName: 'PlaySquare',
    description: 'Simulate the steps involved in a quarterly payroll tax filing (Articulate Simulation).',
    moduleAffiliation: 'mtc', tags: ['simulation', 'tax filing', 'compliance', 'articulate'],
  },
  {
    id: 'res_mtc_dl_compliance_checklist_tax', title: 'Downloadable: Payroll Tax Compliance Checklist', type: 'checklist',
    url: '/resources/mtc_tax_compliance_checklist_detailed.pdf', iconName: 'CheckSquare',
    description: 'A detailed checklist for ensuring payroll tax compliance.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'compliance', 'checklist', 'taxation'],
  },
  {
    id: 'res_mtc_dl_tax_worksheet_advanced', title: 'Downloadable: Advanced Tax Calculation Worksheet', type: 'worksheet',
    url: '/resources/mtc_tax_worksheet_advanced_scenarios.xlsx', iconName: 'FileSpreadsheet',
    description: 'A worksheet for practicing complex payroll tax calculations with various scenarios.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'tax calculation', 'worksheet', 'advanced', 'scenarios'],
  },
  {
    id: 'res_mtc_dl_audit_template_tax', title: 'Downloadable: Tax Audit Preparation Template', type: 'template',
    url: '/resources/mtc_audit_template_tax_prep.docx', iconName: 'ClipboardCheck',
    description: 'Template for preparing documentation and responses for a payroll tax audit.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'audit', 'template', 'taxation', 'preparation'],
  },
  {
    id: 'res_mtc_dl_software_eval_matrix_tax', title: 'Downloadable: Software Tax Compliance Feature Matrix', type: 'matrix',
    url: '/resources/mtc_software_eval_matrix_tax_compliance.xlsx', iconName: 'Table2',
    description: 'Matrix for evaluating tax calculation and reporting compliance features in payroll software.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'software evaluation', 'matrix', 'tax compliance'],
  },

  // --- Module 4: Benefits & Deductions (mbd) ---
  {
    id: 'res_mbd_tool_preposttax', title: 'Pre-tax vs Post-tax Deduction Comparison Tool', type: 'matrix', // Matrix is suitable for comparison
    url: '#moodle-tool-mbd-preposttax', iconName: 'Table2',
    description: 'A tool/matrix to compare the impact of pre-tax and post-tax deductions. (Moodle Tool or Spreadsheet)',
    moduleAffiliation: 'mbd', tags: ['benefits', 'deductions', 'comparison tool', 'matrix'],
  },
  {
    id: 'res_mbd_sim_enrollment', title: 'Benefits Enrollment Simulator', type: 'simulation',
    url: '#moodle-simulation-mbd-enrollment', iconName: 'PlaySquare',
    description: 'Simulate the process of enrolling an employee in various benefit plans (Articulate Simulation).',
    moduleAffiliation: 'mbd', tags: ['benefits enrollment', 'simulation', 'hr', 'articulate'],
  },
  {
    id: 'res_mbd_workflow_garnishment', title: 'Garnishment Processing Workflow Diagram', type: 'workflow',
    url: '/resources/mbd_garnishment_workflow_diagram.pdf', iconName: 'Workflow',
    description: 'A visual workflow detailing the steps for processing wage garnishments.',
    moduleAffiliation: 'mbd', tags: ['garnishments', 'workflow', 'legal', 'diagram'],
  },
  {
    id: 'res_mbd_calc_pto', title: 'PTO Accrual Calculator (Tool)', type: 'calculator',
    url: '#moodle-tool-mbd-ptocalculator', iconName: 'Calculator',
    description: 'A tool for calculating employee Paid Time Off accruals based on different policies. (Moodle Tool or Spreadsheet)',
    moduleAffiliation: 'mbd', tags: ['pto', 'calculator', 'accruals', 'tool'],
  },
  // Mandatory additions for Module 4
   {
    id: 'res_mbd_scenario_complex_deductions', title: 'Interactive Scenario: Handling Complex Deductions', type: 'interactive-scenario',
    url: '#moodle-scenario-mbd-deductions', iconName: 'MousePointerClick',
    description: 'Scenario focusing on calculating and processing complex employee deductions like multiple garnishments or benefit changes (Articulate).',
    moduleAffiliation: 'mbd', tags: ['interactive scenario', 'deductions', 'complex cases', 'articulate'],
  },
  {
    id: 'res_mbd_knowledge_check_benefittypes', title: 'Knowledge Check: Benefit Types & Regulations', type: 'knowledge-check',
    url: '#moodle-quiz-mbd-benefittypes', iconName: 'HelpCircle',
    description: 'Quiz on different types of employee benefits and associated regulations with immediate feedback. (Moodle Quiz/H5P)',
    moduleAffiliation: 'mbd', tags: ['quiz', 'benefits', 'regulations', 'assessment'],
  },
  {
    id: 'res_mbd_dl_compliance_checklist_benefits', title: 'Downloadable: Benefits Administration Compliance Checklist', type: 'checklist',
    url: '/resources/mbd_benefits_compliance_checklist_admin.pdf', iconName: 'CheckSquare',
    description: 'Checklist for ensuring compliance in benefits administration and record-keeping.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'compliance', 'benefits administration', 'checklist'],
  },
  {
    id: 'res_mbd_dl_tax_worksheet_benefits', title: 'Downloadable: Tax Implication Worksheet for Benefits', type: 'worksheet',
    url: '/resources/mbd_tax_worksheet_benefits_impact.xlsx', iconName: 'FileSpreadsheet',
    description: 'Worksheet to understand and calculate tax implications of various employee benefits.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'tax calculation', 'worksheet', 'benefits impact'],
  },
  {
    id: 'res_mbd_dl_audit_template_benefits', title: 'Downloadable: Benefits Audit Template', type: 'template',
    url: '/resources/mbd_audit_template_benefits_admin.docx', iconName: 'ClipboardCheck',
    description: 'Template for auditing benefits administration processes and accuracy.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'audit', 'template', 'benefits administration'],
  },
  {
    id: 'res_mbd_dl_software_eval_matrix_benefits', title: 'Downloadable: Benefits Admin Software Feature Matrix', type: 'matrix',
    url: '/resources/mbd_software_eval_matrix_benefits_features.xlsx', iconName: 'Table2',
    description: 'Matrix for evaluating benefits administration and tracking features in payroll/HR software.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'software evaluation', 'matrix', 'benefits admin'],
  },

  // --- Module 5: Auditing & Error Management (maem) ---
  {
    id: 'res_maem_template_auditchecklist_generator', title: 'Audit Checklist Generator (Template)', type: 'template', // Kept as template
    url: '/resources/maem_audit_checklist_template_generator.docx', iconName: 'ClipboardCheck',
    description: 'A dynamic template to help generate a customized payroll audit checklist based on specific needs.',
    moduleAffiliation: 'maem', tags: ['audit checklist', 'template', 'generator', 'customizable'],
  },
  {
    id: 'res_maem_scenario_errorid', title: 'Error Identification & Correction Scenarios (Interactive)', type: 'interactive-scenario', // Already interactive
    url: '#moodle-scenario-maem-errorid', iconName: 'MousePointerClick',
    description: 'Interactive scenarios to practice identifying common payroll errors and determining correction steps (Articulate Scenario).',
    moduleAffiliation: 'maem', tags: ['error identification', 'error correction', 'interactive scenario', 'auditing', 'articulate'],
  },
  {
    id: 'res_maem_timeline_yearend', title: 'Year-End Reporting Timeline & Checklist', type: 'timeline', // Combined timeline and checklist aspect
    url: '/resources/maem_yearend_timeline_checklist.pdf', iconName: 'GanttChartSquare',
    description: 'A visual timeline and checklist for managing year-end payroll reporting tasks.',
    moduleAffiliation: 'maem', tags: ['year-end reporting', 'timeline', 'checklist', 'compliance'],
  },
  {
    id: 'res_maem_template_reconciliation', title: 'Payroll Reconciliation Templates (Excel)', type: 'template',
    url: '/resources/maem_reconciliation_templates_pack.xlsx', iconName: 'FileSpreadsheet',
    description: 'Downloadable Excel templates for various payroll reconciliation processes (e.g., bank, GL).',
    moduleAffiliation: 'maem', tags: ['reconciliation', 'template', 'auditing', 'excel'],
  },
  // Mandatory additions for Module 5
  {
    id: 'res_maem_knowledge_check_audit_procedures', title: 'Knowledge Check: Payroll Audit Procedures', type: 'knowledge-check',
    url: '#moodle-quiz-maem-auditprocedures', iconName: 'HelpCircle',
    description: 'Quiz covering internal and external payroll audit procedures with immediate feedback. (Moodle Quiz/H5P)',
    moduleAffiliation: 'maem', tags: ['quiz', 'auditing', 'procedures', 'assessment'],
  },
  {
    id: 'res_maem_simulation_error_correction_process', title: 'Process Simulation: Correcting a Complex Payroll Error', type: 'simulation',
    url: '#moodle-simulation-maem-errorcorrection', iconName: 'PlaySquare',
    description: 'Simulate the multi-step process involved in correcting a significant payroll error and reissuing payments/adjusting filings (Articulate Simulation).',
    moduleAffiliation: 'maem', tags: ['simulation', 'error correction', 'process', 'articulate'],
  },
  {
    id: 'res_maem_dl_compliance_checklist_audit', title: 'Downloadable: Audit & Error Management Compliance Checklist', type: 'checklist',
    url: '/resources/maem_compliance_checklist_audit_mgmt.pdf', iconName: 'CheckSquare',
    description: 'A compliance checklist focused on robust auditing practices and error management protocols.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'compliance', 'checklist', 'auditing', 'error management'],
  },
  {
    id: 'res_maem_dl_tax_worksheet_yearend', title: 'Downloadable: Year-End Tax Reconciliation Worksheet', type: 'worksheet',
    url: '/resources/maem_tax_worksheet_yearend_recon.xlsx', iconName: 'FileSpreadsheet',
    description: 'Comprehensive worksheet for performing year-end tax reconciliation tasks and W-2 validation.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'tax reconciliation', 'worksheet', 'year-end', 'w2'],
  },
  {
    id: 'res_maem_dl_audit_template_full', title: 'Downloadable: Comprehensive Internal Audit Program Template', type: 'template',
    url: '/resources/maem_audit_template_internal_program.docx', iconName: 'ClipboardCheck',
    description: 'A comprehensive template for establishing an internal payroll audit program.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'audit program', 'template', 'internal audit', 'comprehensive'],
  },
  {
    id: 'res_maem_dl_software_eval_matrix_reporting', title: 'Downloadable: Reporting & Auditing Software Feature Matrix', type: 'matrix',
    url: '/resources/maem_software_eval_matrix_reporting_audit.xlsx', iconName: 'Table2',
    description: 'Matrix for evaluating reporting, analytics, and auditing features in payroll software.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'software evaluation', 'matrix', 'reporting', 'auditing'],
  },
  
  // --- General Resources (Can be affiliated or kept general if preferred) ---
  {
    id: 'res_gen_ethics', title: 'Ethics in Payroll Management Guide', type: 'document',
    url: '/resources/ethics-in-payroll-guide.pdf', iconName: 'ShieldCheck',
    description: 'A comprehensive document outlining ethical guidelines, dilemmas, and best practices for payroll professionals.',
    moduleAffiliation: 'mppf', 
    tags: ['ethics', 'professionalism', 'compliance', 'guidelines'],
  },
  {
    id: 'res_gen_statelaws', title: 'State Payroll Law Resource Hub (DOL Links)', type: 'link',
    url: 'https://www.dol.gov/agencies/whd/state-data', iconName: 'Map',
    description: 'Direct links to Department of Labor resources for state-specific payroll laws and regulations.',
    moduleAffiliation: 'mtc',
    tags: ['state laws', 'compliance', 'dol', 'official resource'],
  },
  {
    id: 'res_gen_irspub15', title: 'IRS Publication 15 (Circular E), Employer\'s Tax Guide', type: 'pdf',
    url: 'https://www.irs.gov/pub/irs-pdf/p15.pdf', iconName: 'FileText',
    description: 'The official IRS guide for employers on federal tax responsibilities, including withholding and reporting.',
    moduleAffiliation: 'mtc', tags: ['external', 'irs', 'tax guide', 'federal tax', 'official document'],
  },
];

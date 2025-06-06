
import type { CourseModule, Resource } from '@/types';
import type { LucideIcon } from 'lucide-react';
import {
  Download, ExternalLink, FileText, Link as LinkIcon, Video, CheckSquare,
  Calculator, GanttChartSquare, Rows3, ClipboardCheck, Table2, FileSpreadsheet,
  MousePointerClick, PlaySquare, HelpCircle, Map, ShieldCheck, GitFork, Workflow,
  CalendarDays, Network, Puzzle, ListChecks, Info, Lightbulb, BookOpen
} from 'lucide-react';

export const iconMap: { [key: string]: LucideIcon } = {
  FileText, // pdf, document, case-study
  Link: LinkIcon, // link
  Video, // video
  CheckSquare, // checklist
  Calculator, // calculator
  GanttChartSquare, // timeline
  Rows3, // template (general)
  ClipboardCheck, // template (audit)
  Table2, // matrix
  FileSpreadsheet, // worksheet
  MousePointerClick, // interactive-scenario
  PlaySquare, // simulation
  HelpCircle, // knowledge-check
  Map, // state resources
  ShieldCheck, // ethics
  GitFork, // decision trees
  Workflow, // workflow
  CalendarDays, // calendar templates
  Network, // diagram
  Download, 
  ExternalLink,
  Puzzle, // Interactive Learning section icon
  ListChecks, // Downloadable Core Templates section icon
  Info, // Additional Supporting Materials section icon
  Lightbulb, // Learning Objectives section icon
  BookOpen, // Module main icon
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
  timeline: 'Interactive Timeline / Plan',
  matrix: 'Comparison Matrix / Grid',
  worksheet: 'Worksheet / Exercise',
  'interactive-scenario': 'Interactive Scenario',
  simulation: 'Process Simulation',
  workflow: 'Workflow / Process Map',
  'case-study': 'Case Study Document',
  'knowledge-check': 'Knowledge Check / Quiz (Moodle)',
};


export const placeholderModules: CourseModule[] = [
  {
    id: 'mppf',
    title: 'Module 1: Payroll Processing Fundamentals',
    description: 'Master the essential steps of payroll, from employee setup to timekeeping and understanding the basic workflow.',
    status: 'in-progress',
    progress: 25,
    score: 85, // Example score for a completed quiz
    dependencies: [],
    videoUrl: '#moodle-video-lecture-mppf',
    objectives: [
      'Understand the complete payroll processing cycle.',
      'Implement effective employee information management.',
      'Evaluate and compare timekeeping systems.',
      'Identify key stages in the payroll workflow.',
    ],
  },
  {
    id: 'mps',
    title: 'Module 2: Payroll Software & Systems',
    description: 'Learn to select, implement, and utilize payroll software effectively, including decision-making and vendor comparison.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mppf'],
    videoUrl: '#moodle-video-lecture-mps',
    objectives: [
      'Categorize different types of payroll software.',
      'Develop a decision tree for selecting appropriate software.',
      'Compare payroll software vendors using a structured matrix.',
      'Simulate a software implementation timeline.',
      'Analyze case studies of system selection processes.',
    ],
  },
  {
    id: 'mtc',
    title: 'Module 3: Taxation & Compliance',
    description: 'Navigate the complexities of federal and state payroll taxes, understand compliance requirements, and apply calculations.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mppf'],
    videoUrl: '#moodle-video-lecture-mtc',
    objectives: [
      'Differentiate between federal and state tax obligations.',
      'Utilize a compliance calendar for timely tax activities.',
      'Understand FICA, FUTA, and SUTA through interactive diagrams.',
      'Perform scenario-based tax calculations.',
    ],
  },
  {
    id: 'mbd',
    title: 'Module 4: Benefits & Deductions',
    description: 'Manage employee benefits, various deductions (pre-tax, post-tax), garnishments, and PTO accruals accurately.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mppf', 'mtc'],
    videoUrl: '#moodle-video-lecture-mbd',
    objectives: [
      'Compare pre-tax and post-tax deductions and their impact.',
      'Simulate the benefits enrollment process.',
      'Understand and process wage garnishments according to legal requirements.',
      'Calculate Paid Time Off (PTO) accruals.',
    ],
  },
  {
    id: 'maem',
    title: 'Module 5: Auditing & Error Management',
    description: 'Prepare for payroll audits, identify and correct errors, manage year-end reporting, and use reconciliation templates.',
    status: 'not-started',
    progress: 0,
    dependencies: ['mps', 'mtc', 'mbd'],
    videoUrl: '#moodle-video-lecture-maem',
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
    id: 'res_mppf_checklist_empinfo', title: 'Employee Information Management Checklist', type: 'checklist', // Core Downloadable
    url: '/resources/mppf_empinfo_checklist.pdf', iconName: 'CheckSquare',
    description: 'A checklist to ensure all necessary employee data is collected and managed correctly.',
    moduleAffiliation: 'mppf', tags: ['employee data', 'checklist', 'management'],
  },
  {
    id: 'res_mppf_tool_timekeeping', title: 'Timekeeping System Comparison Tool', type: 'matrix', // Core Downloadable (as software eval matrix example)
    url: '/resources/mppf_timekeeping_matrix.xlsx', iconName: 'Table2',
    description: 'A template to compare features of different timekeeping systems.',
    moduleAffiliation: 'mppf', tags: ['timekeeping', 'comparison', 'tool', 'matrix'],
  },
  // Required common resources for Module 1
  {
    id: 'res_mppf_scenario_fraud', title: 'Interactive Scenario: Employee Setup Error', type: 'interactive-scenario',
    url: '#moodle-scenario-mppf-emp-setup', iconName: 'MousePointerClick',
    description: 'Branching scenario covering potential errors during new employee setup (Articulate).',
    moduleAffiliation: 'mppf', tags: ['interactive', 'scenario', 'employee setup'],
  },
  {
    id: 'res_mppf_knowledge_check_workflow', title: 'Moodle Quiz: Payroll Workflow', type: 'knowledge-check',
    url: '#moodle-quiz-mppf-workflow', iconName: 'HelpCircle',
    description: 'Graded quiz on Moodle to test understanding of the payroll process workflow.',
    moduleAffiliation: 'mppf', tags: ['quiz', 'workflow', 'moodle'],
  },
  {
    id: 'res_mppf_simulation_basicsteps', title: 'Process Simulation: Basic Payroll Steps', type: 'simulation',
    url: '#moodle-simulation-mppf-basicsteps', iconName: 'PlaySquare',
    description: 'Step-by-step walkthrough of fundamental payroll processing actions (Articulate).',
    moduleAffiliation: 'mppf', tags: ['simulation', 'payroll steps', 'articulate'],
  },
  {
    id: 'res_mppf_dl_compliance_checklist', title: 'Compliance Checklist: Fundamentals', type: 'checklist', // Core Downloadable
    url: '/resources/mppf_compliance_checklist_generic.pdf', iconName: 'CheckSquare',
    description: 'A general compliance checklist for payroll fundamentals.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'compliance', 'checklist', 'fundamentals'],
  },
  {
    id: 'res_mppf_dl_tax_worksheet', title: 'Tax Calculation Worksheet: Basic Withholding', type: 'worksheet', // Core Downloadable
    url: '/resources/mppf_tax_worksheet_basic.xlsx', iconName: 'FileSpreadsheet',
    description: 'A worksheet for practicing basic income tax withholding calculations.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'tax calculation', 'worksheet', 'fundamentals'],
  },
  {
    id: 'res_mppf_dl_audit_template', title: 'Audit Template: New Hire Data Verification', type: 'template', // Core Downloadable
    url: '/resources/mppf_audit_template_newhire.docx', iconName: 'ClipboardCheck',
    description: 'A basic audit template for verifying new hire data accuracy.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'audit', 'template', 'fundamentals'],
  },
  // Software evaluation matrix is less relevant for fundamentals, but included as per requirement structure.
  {
    id: 'res_mppf_dl_software_eval_matrix', title: 'Software Evaluation Matrix: Basic Features', type: 'matrix', // Core Downloadable
    url: '/resources/mppf_software_eval_matrix_basic.xlsx', iconName: 'Table2',
    description: 'A basic matrix for evaluating essential payroll software features.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'software evaluation', 'matrix', 'fundamentals'],
  },
  {
    id: 'res_mppf_doc_workflow_overview', title: 'Payroll Workflow Overview Document', type: 'document',
    url: '/resources/mppf_workflow_overview.pdf', iconName: 'FileText',
    description: 'A detailed document explaining the payroll workflow.',
    moduleAffiliation: 'mppf', tags: ['document', 'workflow', 'overview'],
  },


  // --- Module 2: Payroll Software & Systems (mps) ---
  {
    id: 'res_mps_tree_softwarecat', title: 'Software Category Decision Tree', type: 'interactive-scenario', // Already interactive
    url: '#moodle-decisiontree-mps-softwarecat', iconName: 'GitFork',
    description: 'An interactive decision tree to help select the right category of payroll software (Articulate).',
    moduleAffiliation: 'mps', tags: ['software selection', 'decision tree', 'interactive', 'articulate'],
  },
  {
    id: 'res_mps_matrix_vendor', title: 'Vendor Comparison Matrix (Interactive)', type: 'matrix', // Already interactive, but also a core downloadable type
    url: '#moodle-interactivematrix-mps-vendor', iconName: 'Table2',
    description: 'Interactively compare different payroll software vendors. Downloadable version available.',
    moduleAffiliation: 'mps', tags: ['vendor comparison', 'matrix', 'interactive', 'tool'],
  },
  {
    id: 'res_mps_sim_implementation', title: 'Implementation Timeline Simulator', type: 'simulation', // Already simulation
    url: '#moodle-simulation-mps-implementation', iconName: 'PlaySquare',
    description: 'Simulate the stages and timeline for implementing a new payroll system (Articulate).',
    moduleAffiliation: 'mps', tags: ['software implementation', 'timeline', 'simulation', 'articulate'],
  },
  {
    id: 'res_mps_casestudy_selection', title: 'Case Study: System Selection Process', type: 'case-study',
    url: '/resources/mps_casestudy_selection.pdf', iconName: 'FileText',
    description: 'A detailed case study analyzing a company\'s payroll system selection process.',
    moduleAffiliation: 'mps', tags: ['case study', 'system selection', 'software'],
  },
  // Required common resources for Module 2
   {
    id: 'res_mps_knowledge_check_eval_criteria', title: 'Moodle Quiz: Software Evaluation', type: 'knowledge-check',
    url: '#moodle-quiz-mps-evaluation', iconName: 'HelpCircle',
    description: 'Graded quiz on Moodle testing key criteria for evaluating payroll software.',
    moduleAffiliation: 'mps', tags: ['quiz', 'software evaluation', 'assessment', 'moodle'],
  },
  {
    id: 'res_mps_dl_compliance_checklist', title: 'Compliance Checklist: Software Implementation', type: 'checklist', // Core
    url: '/resources/mps_compliance_checklist_software.pdf', iconName: 'CheckSquare',
    description: 'A compliance checklist specifically for software selection and implementation phases.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'compliance', 'software implementation'],
  },
  {
    id: 'res_mps_dl_tax_worksheet', title: 'Tax Setup Worksheet for Software', type: 'worksheet', // Core
    url: '/resources/mps_tax_worksheet_software_config.xlsx', iconName: 'FileSpreadsheet',
    description: 'Worksheet to plan tax setup requirements during software evaluation.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'tax setup', 'worksheet', 'software'],
  },
  {
    id: 'res_mps_dl_audit_template_software', title: 'Audit Template: Software Configuration', type: 'template', // Core
    url: '/resources/mps_audit_template_software_setup.docx', iconName: 'ClipboardCheck',
    description: 'Template for auditing the setup and configuration of new payroll software.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'audit', 'template', 'software setup'],
  },
  {
    id: 'res_mps_dl_software_eval_matrix', title: 'Software Evaluation Matrix Template', type: 'matrix', // Core (this one is the main one for this module)
    url: '/resources/mps_software_eval_matrix_template_comprehensive.xlsx', iconName: 'Table2',
    description: 'A comprehensive template for evaluating and comparing payroll software vendors.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'software evaluation', 'matrix', 'template'],
  },

  // --- Module 3: Taxation & Compliance (mtc) ---
  {
    id: 'res_mtc_calc_fedstate', title: 'Federal vs State Tax Calculator (Tool)', type: 'calculator',
    url: '#moodle-tool-mtc-taxcalculator', iconName: 'Calculator',
    description: 'A tool to help understand differences in federal and state tax calculations.',
    moduleAffiliation: 'mtc', tags: ['tax calculator', 'federal tax', 'state tax', 'tool'],
  },
  {
    id: 'res_mtc_template_calendar', title: 'Compliance Calendar Template (ICS)', type: 'template', // Core Downloadable
    url: '/resources/mtc_compliance_calendar.ics', iconName: 'CalendarDays',
    description: 'A downloadable template for tracking key payroll compliance deadlines.',
    moduleAffiliation: 'mtc', tags: ['compliance calendar', 'template', 'deadlines', 'ics'],
  },
  {
    id: 'res_mtc_diagram_tax', title: 'FICA/FUTA/SUTA Interactive Diagrams', type: 'diagram',
    url: '#moodle-interactivediagram-mtc-tax', iconName: 'Network',
    description: 'Interactive diagrams explaining FICA, FUTA, and SUTA contributions (Articulate/H5P).',
    moduleAffiliation: 'mtc', tags: ['tax diagrams', 'fica', 'futa', 'suta', 'interactive'],
  },
  {
    id: 'res_mtc_scenario_taxcalc', title: 'Scenario-Based Tax Calculations', type: 'interactive-scenario', // Already interactive
    url: '#moodle-scenario-mtc-taxcalc', iconName: 'MousePointerClick',
    description: 'Work through real-world scenarios requiring various payroll tax calculations (Articulate).',
    moduleAffiliation: 'mtc', tags: ['tax calculation', 'interactive scenario', 'compliance', 'articulate'],
  },
  // Required common resources for Module 3
  {
    id: 'res_mtc_knowledge_check_taxforms', title: 'Moodle Quiz: Tax Forms & Regs', type: 'knowledge-check',
    url: '#moodle-quiz-mtc-taxforms', iconName: 'HelpCircle',
    description: 'Graded quiz on Moodle covering common federal and state payroll tax forms and regulations.',
    moduleAffiliation: 'mtc', tags: ['quiz', 'tax forms', 'regulations', 'moodle'],
  },
  {
    id: 'res_mtc_simulation_taxfiling', title: 'Process Simulation: Quarterly Tax Filing', type: 'simulation',
    url: '#moodle-simulation-mtc-taxfiling', iconName: 'PlaySquare',
    description: 'Simulate the steps involved in a quarterly payroll tax filing (Articulate).',
    moduleAffiliation: 'mtc', tags: ['simulation', 'tax filing', 'compliance', 'articulate'],
  },
  {
    id: 'res_mtc_dl_compliance_checklist_tax', title: 'Compliance Checklist: Payroll Tax', type: 'checklist', // Core
    url: '/resources/mtc_tax_compliance_checklist_detailed.pdf', iconName: 'CheckSquare',
    description: 'A detailed checklist for ensuring payroll tax compliance.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'compliance', 'checklist', 'taxation'],
  },
  {
    id: 'res_mtc_dl_tax_worksheet_advanced', title: 'Tax Calculation Worksheet: Advanced', type: 'worksheet', // Core
    url: '/resources/mtc_tax_worksheet_advanced_scenarios.xlsx', iconName: 'FileSpreadsheet',
    description: 'A worksheet for practicing complex payroll tax calculations with various scenarios.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'tax calculation', 'worksheet', 'advanced'],
  },
  {
    id: 'res_mtc_dl_audit_template_tax', title: 'Audit Template: Tax Preparation', type: 'template', // Core
    url: '/resources/mtc_audit_template_tax_prep.docx', iconName: 'ClipboardCheck',
    description: 'Template for preparing documentation for a payroll tax audit.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'audit', 'template', 'taxation'],
  },
  {
    id: 'res_mtc_dl_software_eval_matrix_tax', title: 'Software Eval: Tax Compliance Features', type: 'matrix', // Core
    url: '/resources/mtc_software_eval_matrix_tax_compliance.xlsx', iconName: 'Table2',
    description: 'Matrix for evaluating tax compliance features in payroll software.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'software evaluation', 'matrix', 'tax compliance'],
  },

  // --- Module 4: Benefits & Deductions (mbd) ---
  {
    id: 'res_mbd_tool_preposttax', title: 'Pre-tax vs Post-tax Deduction Comparison Tool', type: 'matrix', // Core downloadable (as matrix)
    url: '#moodle-tool-mbd-preposttax', iconName: 'Table2',
    description: 'A tool/matrix to compare the impact of pre-tax and post-tax deductions.',
    moduleAffiliation: 'mbd', tags: ['benefits', 'deductions', 'comparison tool', 'matrix'],
  },
  {
    id: 'res_mbd_sim_enrollment', title: 'Benefits Enrollment Simulator', type: 'simulation', // Already simulation
    url: '#moodle-simulation-mbd-enrollment', iconName: 'PlaySquare',
    description: 'Simulate the process of enrolling an employee in various benefit plans (Articulate).',
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
    description: 'A tool for calculating employee Paid Time Off accruals based on different policies.',
    moduleAffiliation: 'mbd', tags: ['pto', 'calculator', 'accruals', 'tool'],
  },
  // Required common resources for Module 4
  {
    id: 'res_mbd_scenario_complex_deductions', title: 'Interactive Scenario: Complex Deductions', type: 'interactive-scenario',
    url: '#moodle-scenario-mbd-deductions', iconName: 'MousePointerClick',
    description: 'Scenario focusing on handling complex employee deductions (Articulate).',
    moduleAffiliation: 'mbd', tags: ['interactive', 'scenario', 'deductions', 'articulate'],
  },
  {
    id: 'res_mbd_knowledge_check_benefittypes', title: 'Moodle Quiz: Benefit Types', type: 'knowledge-check',
    url: '#moodle-quiz-mbd-benefittypes', iconName: 'HelpCircle',
    description: 'Graded quiz on Moodle about different types of employee benefits and regulations.',
    moduleAffiliation: 'mbd', tags: ['quiz', 'benefits', 'regulations', 'moodle'],
  },
  {
    id: 'res_mbd_dl_compliance_checklist_benefits', title: 'Compliance Checklist: Benefits Admin', type: 'checklist', // Core
    url: '/resources/mbd_benefits_compliance_checklist_admin.pdf', iconName: 'CheckSquare',
    description: 'Checklist for ensuring compliance in benefits administration.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'compliance', 'benefits', 'checklist'],
  },
  {
    id: 'res_mbd_dl_tax_worksheet_benefits', title: 'Tax Worksheet: Benefits Impact', type: 'worksheet', // Core
    url: '/resources/mbd_tax_worksheet_benefits_impact.xlsx', iconName: 'FileSpreadsheet',
    description: 'Worksheet to calculate tax implications of various employee benefits.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'tax calculation', 'worksheet', 'benefits'],
  },
  {
    id: 'res_mbd_dl_audit_template_benefits', title: 'Audit Template: Benefits Admin', type: 'template', // Core
    url: '/resources/mbd_audit_template_benefits_admin.docx', iconName: 'ClipboardCheck',
    description: 'Template for auditing benefits administration processes.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'audit', 'template', 'benefits'],
  },
  {
    id: 'res_mbd_dl_software_eval_matrix_benefits', title: 'Software Eval: Benefits Features', type: 'matrix', // Core
    url: '/resources/mbd_software_eval_matrix_benefits_features.xlsx', iconName: 'Table2',
    description: 'Matrix for evaluating benefits administration features in HR/payroll software.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'software evaluation', 'matrix', 'benefits'],
  },

  // --- Module 5: Auditing & Error Management (maem) ---
  {
    id: 'res_maem_template_auditchecklist_generator', title: 'Audit Checklist Generator', type: 'template', // Core (as audit template)
    url: '/resources/maem_audit_checklist_template_generator.docx', iconName: 'ClipboardCheck',
    description: 'A dynamic template to help generate a customized payroll audit checklist.',
    moduleAffiliation: 'maem', tags: ['audit checklist', 'template', 'generator', 'customizable'],
  },
  {
    id: 'res_maem_scenario_errorid', title: 'Error Identification & Correction Scenarios', type: 'interactive-scenario', // Already interactive
    url: '#moodle-scenario-maem-errorid', iconName: 'MousePointerClick',
    description: 'Interactive scenarios to practice identifying and correcting common payroll errors (Articulate).',
    moduleAffiliation: 'maem', tags: ['error identification', 'error correction', 'interactive scenario', 'auditing', 'articulate'],
  },
  {
    id: 'res_maem_timeline_yearend', title: 'Year-End Reporting Timeline & Checklist', type: 'timeline',
    url: '/resources/maem_yearend_timeline_checklist.pdf', iconName: 'GanttChartSquare',
    description: 'A visual timeline and checklist for managing year-end payroll reporting tasks.',
    moduleAffiliation: 'maem', tags: ['year-end reporting', 'timeline', 'checklist', 'compliance'],
  },
  {
    id: 'res_maem_template_reconciliation', title: 'Payroll Reconciliation Templates (Excel)', type: 'template', // Core (as audit template)
    url: '/resources/maem_reconciliation_templates_pack.xlsx', iconName: 'FileSpreadsheet', // Could also be ClipboardCheck if viewed as an audit tool
    description: 'Downloadable Excel templates for various payroll reconciliation processes.',
    moduleAffiliation: 'maem', tags: ['reconciliation', 'template', 'auditing', 'excel'],
  },
  // Required common resources for Module 5
  {
    id: 'res_maem_knowledge_check_audit_procedures', title: 'Moodle Quiz: Audit Procedures', type: 'knowledge-check',
    url: '#moodle-quiz-maem-auditprocedures', iconName: 'HelpCircle',
    description: 'Graded quiz on Moodle covering internal and external payroll audit procedures.',
    moduleAffiliation: 'maem', tags: ['quiz', 'auditing', 'procedures', 'moodle'],
  },
  {
    id: 'res_maem_simulation_error_correction_process', title: 'Process Simulation: Complex Error Correction', type: 'simulation',
    url: '#moodle-simulation-maem-errorcorrection', iconName: 'PlaySquare',
    description: 'Simulate correcting a significant payroll error and reissuing payments (Articulate).',
    moduleAffiliation: 'maem', tags: ['simulation', 'error correction', 'articulate'],
  },
  {
    id: 'res_maem_dl_compliance_checklist_audit', title: 'Compliance Checklist: Audit & Error Mgmt', type: 'checklist', // Core
    url: '/resources/maem_compliance_checklist_audit_mgmt.pdf', iconName: 'CheckSquare',
    description: 'A compliance checklist for robust auditing and error management protocols.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'compliance', 'auditing', 'error management'],
  },
  {
    id: 'res_maem_dl_tax_worksheet_yearend', title: 'Tax Worksheet: Year-End Reconciliation', type: 'worksheet', // Core
    url: '/resources/maem_tax_worksheet_yearend_recon.xlsx', iconName: 'FileSpreadsheet',
    description: 'Comprehensive worksheet for year-end tax reconciliation and W-2 validation.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'tax reconciliation', 'worksheet', 'year-end'],
  },
  {
    id: 'res_maem_dl_audit_template_full', title: 'Audit Template: Internal Audit Program', type: 'template', // Core
    url: '/resources/maem_audit_template_internal_program.docx', iconName: 'ClipboardCheck',
    description: 'A comprehensive template for establishing an internal payroll audit program.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'audit program', 'template', 'internal audit'],
  },
  {
    id: 'res_maem_dl_software_eval_matrix_reporting', title: 'Software Eval: Reporting/Auditing Features', type: 'matrix', // Core
    url: '/resources/maem_software_eval_matrix_reporting_audit.xlsx', iconName: 'Table2',
    description: 'Matrix for evaluating reporting, analytics, and auditing features in payroll software.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'software evaluation', 'matrix', 'reporting'],
  },

  // --- General Resources (Unaffiliated with a specific module) ---
  {
    id: 'res_gen_ethics', title: 'Ethics in Payroll Management Guide', type: 'document',
    url: '/resources/ethics-in-payroll-guide.pdf', iconName: 'ShieldCheck',
    description: 'Comprehensive guide on ethical guidelines for payroll professionals.',
    tags: ['ethics', 'professionalism', 'compliance'],
  },
  {
    id: 'res_gen_statelaws', title: 'State Payroll Law Resource Hub (DOL)', type: 'link',
    url: 'https://www.dol.gov/agencies/whd/state-data', iconName: 'Map',
    description: 'Direct links to Department of Labor for state-specific payroll laws.',
    tags: ['state laws', 'compliance', 'dol', 'official resource'],
  },
  {
    id: 'res_gen_irspub15', title: 'IRS Publication 15 (Circular E)', type: 'pdf',
    url: 'https://www.irs.gov/pub/irs-pdf/p15.pdf', iconName: 'FileText',
    description: 'Official IRS Employer\'s Tax Guide for federal tax responsibilities.',
    tags: ['irs', 'tax guide', 'federal tax', 'official document'],
  },
];

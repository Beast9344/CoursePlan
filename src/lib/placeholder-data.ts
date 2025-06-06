
import type { CourseModule, Resource } from '@/types';

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
  {
    id: 'res_mppf_quiz_workflow', title: 'Knowledge Check: Payroll Process Workflow', type: 'link',
    url: '#moodle-quiz-mppf-workflow', iconName: 'HelpCircle',
    description: 'Test your understanding of the payroll process workflow. (Moodle Quiz)',
    moduleAffiliation: 'mppf', tags: ['quiz', 'knowledge check', 'workflow'],
  },
  {
    id: 'res_mppf_scenario_generic', title: 'Interactive Scenario: Initial Employee Setup', type: 'interactive-scenario',
    url: '#moodle-scenario-mppf-setup', iconName: 'MousePointerClick',
    description: 'Navigate common challenges in setting up a new employee in the payroll system.',
    moduleAffiliation: 'mppf', tags: ['interactive scenario', 'employee setup'],
  },
  {
    id: 'res_mppf_simulation_generic', title: 'Process Simulation: Basic Data Entry', type: 'simulation',
    url: '#moodle-simulation-mppf-dataentry', iconName: 'PlaySquare',
    description: 'Step-by-step walkthrough of entering basic employee data into a mock payroll system.',
    moduleAffiliation: 'mppf', tags: ['simulation', 'data entry'],
  },
  {
    id: 'res_mppf_dl_compliance', title: 'Downloadable: General Payroll Compliance Checklist', type: 'checklist',
    url: '/resources/mppf_compliance_checklist.pdf', iconName: 'CheckSquare',
    description: 'A general checklist for ensuring payroll compliance.',
    moduleAffiliation: 'mppf', tags: ['downloadable', 'compliance', 'checklist'],
  },
  // --- Module 2: Payroll Software & Systems (mps) ---
  {
    id: 'res_mps_tree_softwarecat', title: 'Software Category Decision Tree', type: 'interactive-scenario', // Using interactive-scenario for decision tree
    url: '#moodle-decisiontree-mps-softwarecat', iconName: 'GitFork', // Specific icon for decision tree
    description: 'An interactive decision tree to help select the right category of payroll software.',
    moduleAffiliation: 'mps', tags: ['software selection', 'decision tree', 'interactive'],
  },
  {
    id: 'res_mps_matrix_vendor', title: 'Vendor Comparison Matrix (Interactive)', type: 'matrix',
    url: '#moodle-interactivematrix-mps-vendor', iconName: 'Table2',
    description: 'Interactively compare different payroll software vendors based on various criteria. (Moodle H5P)',
    moduleAffiliation: 'mps', tags: ['vendor comparison', 'matrix', 'interactive'],
  },
  {
    id: 'res_mps_sim_implementation', title: 'Implementation Timeline Simulator', type: 'simulation',
    url: '#moodle-simulation-mps-implementation', iconName: 'PlaySquare',
    description: 'Simulate the stages and timeline for implementing a new payroll system.',
    moduleAffiliation: 'mps', tags: ['software implementation', 'timeline', 'simulation'],
  },
  {
    id: 'res_mps_casestudy_selection', title: 'Case Study: System Selection Process', type: 'case-study', // Maps to document icon
    url: '/resources/mps_casestudy_selection.pdf', iconName: 'FileText',
    description: 'A detailed case study analyzing a company\'s payroll system selection process.',
    moduleAffiliation: 'mps', tags: ['case study', 'system selection', 'software'],
  },
  {
    id: 'res_mps_quiz_generic', title: 'Knowledge Check: Software Evaluation Criteria', type: 'link',
    url: '#moodle-quiz-mps-evaluation', iconName: 'HelpCircle',
    description: 'Test your knowledge on key criteria for evaluating payroll software. (Moodle Quiz)',
    moduleAffiliation: 'mps', tags: ['quiz', 'software evaluation'],
  },
  {
    id: 'res_mps_dl_matrix_eval', title: 'Downloadable: Software Evaluation Matrix Template', type: 'matrix',
    url: '/resources/mps_software_eval_matrix.xlsx', iconName: 'Table2',
    description: 'A template for evaluating and comparing payroll software vendors.',
    moduleAffiliation: 'mps', tags: ['downloadable', 'software evaluation', 'matrix'],
  },
  // --- Module 3: Taxation & Compliance (mtc) ---
  {
    id: 'res_mtc_calc_fedstate', title: 'Federal vs State Tax Calculator', type: 'calculator',
    url: '#moodle-tool-mtc-taxcalculator', iconName: 'Calculator',
    description: 'A tool to help understand differences in federal and state tax calculations. (External or Moodle Tool)',
    moduleAffiliation: 'mtc', tags: ['tax calculator', 'federal tax', 'state tax'],
  },
  {
    id: 'res_mtc_template_calendar', title: 'Compliance Calendar Template', type: 'template',
    url: '/resources/mtc_compliance_calendar.ics', iconName: 'CalendarDays',
    description: 'A downloadable template for tracking key payroll compliance deadlines.',
    moduleAffiliation: 'mtc', tags: ['compliance calendar', 'template', 'deadlines'],
  },
  {
    id: 'res_mtc_diagram_tax', title: 'FICA/FUTA/SUTA Interactive Diagrams', type: 'diagram',
    url: '#moodle-interactivediagram-mtc-tax', iconName: 'Network',
    description: 'Interactive diagrams explaining FICA, FUTA, and SUTA contributions. (Moodle H5P)',
    moduleAffiliation: 'mtc', tags: ['tax diagrams', 'fica', 'futa', 'suta', 'interactive'],
  },
  {
    id: 'res_mtc_scenario_taxcalc', title: 'Scenario-Based Tax Calculations', type: 'interactive-scenario',
    url: '#moodle-scenario-mtc-taxcalc', iconName: 'MousePointerClick',
    description: 'Work through scenarios requiring various payroll tax calculations.',
    moduleAffiliation: 'mtc', tags: ['tax calculation', 'interactive scenario', 'compliance'],
  },
  {
    id: 'res_mtc_quiz_generic', title: 'Knowledge Check: Federal Tax Forms', type: 'link',
    url: '#moodle-quiz-mtc-taxforms', iconName: 'HelpCircle',
    description: 'Quiz on common federal payroll tax forms. (Moodle Quiz)',
    moduleAffiliation: 'mtc', tags: ['quiz', 'tax forms', 'federal'],
  },
  {
    id: 'res_mtc_dl_taxworksheet', title: 'Downloadable: Tax Calculation Worksheet', type: 'worksheet',
    url: '/resources/mtc_tax_worksheet.xlsx', iconName: 'FileSpreadsheet',
    description: 'A worksheet to practice payroll tax calculations.',
    moduleAffiliation: 'mtc', tags: ['downloadable', 'tax calculation', 'worksheet'],
  },
  // --- Module 4: Benefits & Deductions (mbd) ---
  {
    id: 'res_mbd_tool_preposttax', title: 'Pre-tax vs Post-tax Comparison Tool', type: 'matrix',
    url: '#moodle-tool-mbd-preposttax', iconName: 'Table2',
    description: 'A tool to compare the impact of pre-tax and post-tax deductions. (Moodle Tool or Spreadsheet)',
    moduleAffiliation: 'mbd', tags: ['benefits', 'deductions', 'comparison tool', 'matrix'],
  },
  {
    id: 'res_mbd_sim_enrollment', title: 'Benefits Enrollment Simulator', type: 'simulation',
    url: '#moodle-simulation-mbd-enrollment', iconName: 'PlaySquare',
    description: 'Simulate the process of enrolling an employee in various benefit plans.',
    moduleAffiliation: 'mbd', tags: ['benefits enrollment', 'simulation', 'hr'],
  },
  {
    id: 'res_mbd_workflow_garnishment', title: 'Garnishment Processing Workflow', type: 'workflow',
    url: '/resources/mbd_garnishment_workflow.pdf', iconName: 'Workflow',
    description: 'A visual workflow detailing the steps for processing wage garnishments.',
    moduleAffiliation: 'mbd', tags: ['garnishments', 'workflow', 'legal'],
  },
  {
    id: 'res_mbd_calc_pto', title: 'PTO Accrual Calculator', type: 'calculator',
    url: '#moodle-tool-mbd-ptocalculator', iconName: 'Calculator',
    description: 'A tool for calculating employee Paid Time Off accruals based on different policies.',
    moduleAffiliation: 'mbd', tags: ['pto', 'calculator', 'accruals'],
  },
  {
    id: 'res_mbd_scenario_generic', title: 'Interactive Scenario: Handling Complex Deductions', type: 'interactive-scenario',
    url: '#moodle-scenario-mbd-deductions', iconName: 'MousePointerClick',
    description: 'Scenario focusing on calculating and processing complex employee deductions.',
    moduleAffiliation: 'mbd', tags: ['interactive scenario', 'deductions'],
  },
  {
    id: 'res_mbd_quiz_generic', title: 'Knowledge Check: Benefit Types', type: 'link',
    url: '#moodle-quiz-mbd-benefittypes', iconName: 'HelpCircle',
    description: 'Quiz on different types of employee benefits. (Moodle Quiz)',
    moduleAffiliation: 'mbd', tags: ['quiz', 'benefits'],
  },
   {
    id: 'res_mbd_dl_compliance', title: 'Downloadable: Benefits Compliance Checklist', type: 'checklist',
    url: '/resources/mbd_benefits_compliance_checklist.pdf', iconName: 'CheckSquare',
    description: 'Checklist for ensuring compliance in benefits administration.',
    moduleAffiliation: 'mbd', tags: ['downloadable', 'compliance', 'benefits', 'checklist'],
  },
  // --- Module 5: Auditing & Error Management (maem) ---
  {
    id: 'res_maem_template_auditchecklist', title: 'Audit Checklist Generator (Template)', type: 'template',
    url: '/resources/maem_audit_checklist_template.docx', iconName: 'ClipboardCheck',
    description: 'A template to help generate a customized payroll audit checklist.',
    moduleAffiliation: 'maem', tags: ['audit checklist', 'template', 'generator'],
  },
  {
    id: 'res_maem_scenario_errorid', title: 'Error Identification Scenarios', type: 'interactive-scenario',
    url: '#moodle-scenario-maem-errorid', iconName: 'MousePointerClick',
    description: 'Interactive scenarios to practice identifying common payroll errors.',
    moduleAffiliation: 'maem', tags: ['error identification', 'interactive scenario', 'auditing'],
  },
  {
    id: 'res_maem_timeline_yearend', title: 'Year-End Reporting Timeline', type: 'timeline',
    url: '/resources/maem_yearend_timeline.pdf', iconName: 'GanttChartSquare',
    description: 'A visual timeline for managing year-end payroll reporting tasks.',
    moduleAffiliation: 'maem', tags: ['year-end reporting', 'timeline', 'compliance'],
  },
  {
    id: 'res_maem_template_reconciliation', title: 'Reconciliation Templates', type: 'template',
    url: '/resources/maem_reconciliation_templates.xlsx', iconName: 'FileSpreadsheet',
    description: 'Downloadable templates for payroll reconciliation processes.',
    moduleAffiliation: 'maem', tags: ['reconciliation', 'template', 'auditing'],
  },
  {
    id: 'res_maem_quiz_generic', title: 'Knowledge Check: Audit Procedures', type: 'link',
    url: '#moodle-quiz-maem-auditprocedures', iconName: 'HelpCircle',
    description: 'Quiz covering payroll audit procedures. (Moodle Quiz)',
    moduleAffiliation: 'maem', tags: ['quiz', 'auditing'],
  },
  {
    id: 'res_maem_sim_generic', title: 'Process Simulation: Correcting a Payroll Error', type: 'simulation',
    url: '#moodle-simulation-maem-errorcorrection', iconName: 'PlaySquare',
    description: 'Simulate the steps involved in correcting a payroll error and reissuing payment.',
    moduleAffiliation: 'maem', tags: ['simulation', 'error correction'],
  },
  {
    id: 'res_maem_dl_audit_prep_template', title: 'Downloadable: Audit Preparation Template', type: 'template',
    url: '/resources/maem_audit_prep_template.docx', iconName: 'ClipboardCheck',
    description: 'A comprehensive template for preparing for a payroll audit.',
    moduleAffiliation: 'maem', tags: ['downloadable', 'audit', 'template'],
  },
  
  // Adding some of the original general resources not tied to specific new modules, if they still make sense
  // or re-purpose them for the new structure.
  // Many original resources are now covered by module-specific ones.
  // Let's ensure at least one of each general type is present overall if not per module.

  {
    id: 'res_gen_ethics', title: 'Ethics in Payroll Management', type: 'document',
    url: '/resources/ethics-in-payroll.pdf', iconName: 'ShieldCheck',
    description: 'A document outlining ethical guidelines and best practices for payroll professionals.',
    moduleAffiliation: 'mppf', // Good fit for fundamentals
    tags: ['ethics', 'professionalism', 'compliance'],
  },
  {
    id: 'res_gen_statelaws', title: 'State Payroll Resources (DOL)', type: 'link',
    url: 'https://www.dol.gov/agencies/whd/state-data', iconName: 'Map',
    description: 'Links to Department of Labor resources for state-specific payroll laws.',
    moduleAffiliation: 'mtc', // Good fit for tax & compliance
    tags: ['state laws', 'compliance', 'dol'],
  },
  {
    id: 'res_gen_irspub15', title: 'IRS Publication 15 (Circular E), Employer\'s Tax Guide', type: 'pdf',
    url: 'https://www.irs.gov/pub/irs-pdf/p15.pdf', iconName: 'FileText',
    description: 'Official IRS guide for employers on federal tax responsibilities.',
    moduleAffiliation: 'mtc', tags: ['external', 'irs', 'link', 'federal tax'],
  },
];

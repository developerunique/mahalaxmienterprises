import { ServiceItem, IndustryItem, TestimonialItem, WhyUsPoint } from '../types';

export const COMPANY_INFO = {
  name: 'Mahalaxmi Enterprises',
  tagline: 'Precision Operational Support & Enterprise Solutions',
  subheading: 'Driving peak operational efficiency with structured management, end-to-end industrial support, and uncompromising regulatory compliance.',
  email: 'hr@mahalaxmienterprises.online',
  phone: '+91 98810 54321',
  address: 'H No 576, Dehugaon, Dehu, Pune, Maharashtra 412109',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: '412109',
  workingHours: 'Monday – Saturday: 08:30 AM – 07:30 PM (IST)',
  establishedYear: '2016',
};

export const STATS = [
  { value: '100%', label: 'Statutory Compliance' },
  { value: '45+', label: 'Enterprise Clients' },
  { value: '99.4%', label: 'On-Time SLA Delivery' },
  { value: '24/7', label: 'Dedicated Support' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'industrial-operations',
    title: 'Industrial & Plant Operations Support',
    tag: 'Manufacturing & Plants',
    iconName: 'Factory',
    shortDesc: 'Comprehensive operational coordination and plant floor workflow management designed for maximum equipment uptime and output consistency.',
    fullDesc: 'We deliver structured operations support for modern industrial units, heavy fabrication setups, and automated manufacturing plants. Our systems ensure seamless shift handovers, line synchronization, and optimized turnaround cycles.',
    highlights: [
      'Production line operational coordination',
      'Preventive maintenance support cycles',
      'Shift-based workflow optimization',
      'Strict shop-floor safety protocol adherence',
    ],
    keyBenefits: [
      'Up to 30% improvement in shift transition speeds',
      'Zero-downtime line support management',
      'Strict adherence to OSHA and ISO 9001 standards',
    ],
    deliverables: [
      'Operational Daily Logs & KPI Dashboards',
      'Safety Compliance Audit Records',
      'Resource Utilization Reports',
    ],
  },
  {
    id: 'warehouse-logistics',
    title: 'Warehouse & Supply Chain Logistics',
    tag: 'Supply Chain Hubs',
    iconName: 'Boxes',
    shortDesc: 'End-to-end material handling, inventory sorting, dock management, and fulfillment operations for high-velocity distribution centers.',
    fullDesc: 'From inbound container offloading and barcode-guided sorting to automated pick-and-pack workflows, our operational logistics solutions keep warehouse channels running at peak accuracy and velocity.',
    highlights: [
      'Dock scheduling and cargo unloading management',
      'WMS-integrated pick, pack, and label operations',
      'Inventory cycle count and dispatch auditing',
      'Damage-free cross-docking operations',
    ],
    keyBenefits: [
      '99.8% dispatch accuracy rate',
      'Rapid turnaround during peak demand surges',
      'Integrated material traceability at every stage',
    ],
    deliverables: [
      'Daily Inbound/Outbound Manifest Trackers',
      'Dispatch Accuracy Scorecards',
      'Inventory Discrepancy Audits',
    ],
  },
  {
    id: 'quality-assurance',
    title: 'Quality Control & Inspection Services',
    tag: 'Precision Standards',
    iconName: 'CheckCircle2',
    shortDesc: 'Meticulous in-process visual inspections, dimension checks, batch validation, and defect tracking across manufacturing pipelines.',
    fullDesc: 'Protect your brand reputation with rigorous quality assurance support. We implement precise testing frameworks, pre-dispatch inspections, and compliance tracking that align with stringent global customer specifications.',
    highlights: [
      'Incoming raw material dimensional verification',
      'In-line production stage quality audits',
      'Pre-dispatch batch sampling & packaging check',
      'Root cause analysis (RCA) reporting',
    ],
    keyBenefits: [
      'Drastic reduction in customer rejection rates',
      'Comprehensive audit trails for customer certifications',
      'Rapid defect containment workflows',
    ],
    deliverables: [
      'Batch Inspection Certificates',
      'Defect Analysis and Corrective Action Reports',
      'Quality Compliance Certifications',
    ],
  },
  {
    id: 'facility-management',
    title: 'Facility & Infrastructure Support',
    tag: 'Corporate & Industrial Parks',
    iconName: 'Building2',
    shortDesc: 'Integrated facility operations, technical utilities upkeep, environmental sanitation, and corporate workspace management.',
    fullDesc: 'Maintain world-class premises with tailored facility support solutions. We take care of technical utility maintenance, access protocol monitoring, environmental standards, and smooth commercial workspace functioning.',
    highlights: [
      'HVAC, electrical, and generator utility monitoring',
      'Industrial hygiene and facility sanitization protocols',
      'Access control and front-desk visitor operations',
      'Waste management and environmental stewardship',
    ],
    keyBenefits: [
      'Pristine corporate work environments',
      'Extended machinery and asset lifespans',
      'Comprehensive adherence to municipal regulations',
    ],
    deliverables: [
      'Facility Uptime & Incident Reports',
      'Preventive Utility Service Logs',
      'Sanitation and Hygiene Certification',
    ],
  },
  {
    id: 'business-process',
    title: 'Business Process & Workflow Execution',
    tag: 'Enterprise Administration',
    iconName: 'Briefcase',
    shortDesc: 'Streamlined administrative support, document processing, data digitization, and operational back-office workflow execution.',
    fullDesc: 'Empower your core leadership to focus on strategic growth while we handle repetitive operational workflows, vendor documentation, compliance filings, and digitized record-keeping with absolute accuracy.',
    highlights: [
      'Enterprise vendor documentation & invoice processing',
      'Regulatory filing and register maintenance',
      'Data digitization and CRM/ERP update pipelines',
      'Operational asset tracking and reconciliation',
    ],
    keyBenefits: [
      'Zero backlog in administrative pipelines',
      '100% data confidentiality and SLA guarantee',
      'Auditable digital records available on-demand',
    ],
    deliverables: [
      'Monthly Process SLA Performance Summaries',
      'Digitized Archive Verification Logs',
      'Vendor Billing & Reconciliation Files',
    ],
  },
  {
    id: 'specialized-technical',
    title: 'Specialized Technical Support Operations',
    tag: 'Custom Operations',
    iconName: 'Cpu',
    shortDesc: 'Targeted technical workflow support, assembly line calibration, tool room assistance, and project-based industrial deployment.',
    fullDesc: 'Tailored technical execution for specialized industrial needs. Whether commissioning a new production line, retooling an existing cell, or executing a time-sensitive plant expansion, we provide the structured capability.',
    highlights: [
      'Assembly tool calibration and readiness checks',
      'Equipment changeover and setup assistance',
      'Project commissioning operational support',
      'Customized SOP development and on-site rollout',
    ],
    keyBenefits: [
      'Faster project rollout schedules',
      'High adaptability to customized plant blueprints',
      'Immediate technical responsiveness for critical tasks',
    ],
    deliverables: [
      'Commissioning Milestone Sign-off Sheets',
      'Standard Operating Procedure (SOP) Handbooks',
      'Tool Room Asset Logs',
    ],
  },
];

export const WHY_CHOOSE_US: WhyUsPoint[] = [
  {
    id: 'statutory-compliance',
    title: '100% Statutory & Regulatory Compliance',
    description: 'We adhere strictly to all labor laws, ESIC, PF, GST, Factory Act guidelines, and state regulations, ensuring zero legal liability for your enterprise.',
    stat: '100%',
    statLabel: 'Compliant Audits',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pune-industrial-hub',
    title: 'Strategic Pune Hub Advantage',
    description: 'Located in Dehu / Pune industrial belt (Chakan, Talegaon, Bhosari, PCMC proximity), offering rapid mobilization and localized response.',
    stat: '< 2 hrs',
    statLabel: 'Response SLA',
    iconName: 'MapPin',
  },
  {
    id: 'quality-discipline',
    title: 'Rigorous Quality Assurance',
    description: 'Standardized operational procedures (SOPs), regular internal audits, and real-time performance tracking maintain uncompromised standards.',
    stat: '99.4%',
    statLabel: 'Service Precision',
    iconName: 'Award',
  },
  {
    id: 'scalable-solutions',
    title: 'Agile & Scalable Solutions',
    description: 'Flexible operational frameworks that dynamically scale up or down based on your seasonal production spikes or business expansion needs.',
    stat: '100%',
    statLabel: 'Agile Capacity',
    iconName: 'TrendingUp',
  },
  {
    id: 'dedicated-management',
    title: 'Single-Point Dedicated Account Leadership',
    description: 'Every client partner is assigned a dedicated Operations Manager for real-time reporting, issue resolution, and proactive communication.',
    stat: '24/7',
    statLabel: 'Direct Access',
    iconName: 'Users2',
  },
  {
    id: 'transparent-commercials',
    title: 'Transparent & Value-Driven Commercials',
    description: 'Zero hidden overheads, itemized monthly billing, clear deliverables, and predictable cost structures tailored to your operational budget.',
    stat: '0',
    statLabel: 'Hidden Charges',
    iconName: 'FileSpreadsheet',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'automotive',
    name: 'Automotive & Heavy Engineering',
    description: 'Supporting high-precision component manufacturing, chassis assembly lines, and Tier-1 automotive vendor ecosystems across Pune & Maharashtra.',
    iconName: 'Car',
    focusAreas: ['Chassis & Body Shop Support', 'Sub-assembly Operations', 'Pre-Delivery Quality Checks', 'Paint Shop Facility Protocols'],
    caseStudyHighlight: 'Delivered continuous 3-shift operational support for a Tier-1 automotive component manufacturer with 0 line stoppage.',
  },
  {
    id: 'logistics',
    name: 'Logistics, Warehousing & 3PL',
    description: 'High-speed fulfillment centers, cross-dock transit points, cold-chain hubs, and e-commerce distribution facilities.',
    iconName: 'Truck',
    focusAreas: ['High-Velocity Sorting', 'Palletizing & Staging', 'Dock Dispatch Scheduling', 'Damage-Control Protocols'],
    caseStudyHighlight: 'Scaled warehouse fulfillment operations by 200% during festive peak quarter without dispatch delay.',
  },
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Healthcare Operations',
    description: 'Cleanroom facility maintenance, secondary packaging verification, temperature-controlled transit logging, and GMP compliance.',
    iconName: 'Stethoscope',
    focusAreas: ['GMP Cleanroom Maintenance', 'Batch Record Verification', 'Secondary Label & Packaging', 'Sterile Area Protocols'],
    caseStudyHighlight: 'Passed 14 consecutive cleanroom and statutory audit rounds with pristine compliance scoring.',
  },
  {
    id: 'fmcg-retail',
    name: 'FMCG & Consumer Goods',
    description: 'High-volume production packaging, batch bundling, seasonal promotion assembly, and regional distribution hub management.',
    iconName: 'ShoppingBag',
    focusAreas: ['High-Speed Bundling', 'Carton Packaging Lines', 'Batch Expiry Auditing', 'Retail Display Staging'],
    caseStudyHighlight: 'Streamlined secondary packaging operations resulting in 18% reduction in handling turnaround times.',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Construction Support',
    description: 'On-site logistical coordination, material yard management, heavy equipment staging, and safety protocol enforcement.',
    iconName: 'HardHat',
    focusAreas: ['Site Material Staging', 'Safety Gear Protocol Audits', 'Utility Coordination', 'Asset Security Support'],
    caseStudyHighlight: 'Supported 3 major industrial park development projects in PCMC belt on schedule.',
  },
  {
    id: 'technology-corporate',
    name: 'Corporate Offices & IT Parks',
    description: 'Premier facility operations, administrative desk support, digital document digitization, and workplace infrastructure solutions.',
    iconName: 'Laptop',
    focusAreas: ['Workplace Facility Support', 'Front-Desk Operations', 'Record Digitization', 'Access & Vendor Coordination'],
    caseStudyHighlight: 'Managing 85,000+ sq.ft corporate commercial park operations with consistent 98%+ user satisfaction ratings.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Sanjay Deshmukh',
    designation: 'Vice President - Plant Operations',
    companyCategory: 'Automotive Components Manufacturer (Chakan)',
    quote: 'Mahalaxmi Enterprises has been instrumental in stabilizing our shop-floor operations. Their commitment to strict SOPs and seamless shift execution has kept our production running flawlessly.',
    rating: 5,
    location: 'Chakan Industrial Zone, Pune',
  },
  {
    id: 'test-2',
    clientName: 'Rajesh Kulkarni',
    designation: 'Head of Supply Chain & Logistics',
    companyCategory: 'Leading FMCG Distribution Network',
    quote: 'During our recent warehouse expansion in Talegaon, Mahalaxmi Enterprises delivered outstanding operational coordination. Their zero-delay commitment and 100% compliance make them our most reliable operational partner.',
    rating: 5,
    location: 'Talegaon Logistics Park, Pune',
  },
  {
    id: 'test-3',
    clientName: 'Pooja Nair',
    designation: 'General Manager - Quality & Compliance',
    companyCategory: 'Precision Engineering & Export Unit',
    quote: 'Their attention to detail regarding statutory documentation and quality control is exemplary. We have had zero compliance audit issues since partnering with Mahalaxmi Enterprises.',
    rating: 5,
    location: 'Bhosari MIDC, Pune',
  },
];

export const FAQS = [
  {
    question: 'Where is Mahalaxmi Enterprises located?',
    answer: 'We are headquartered at H No 576, Dehugaon, Dehu, Pune, Maharashtra 412109, strategically positioned to support industrial corridors across Pune, PCMC, Chakan, Talegaon, and surrounding regions.',
  },
  {
    question: 'How do you ensure statutory compliance for our operations?',
    answer: 'We maintain 100% adherence to all statutory frameworks including ESIC, Provident Fund (PF), Professional Tax, GST, and Factory Regulations. Full monthly audit certificates and challans are provided to client partners.',
  },
  {
    question: 'Can you customize operational support solutions for our specific facility?',
    answer: 'Yes. We conduct a preliminary operational assessment of your plant or facility to design custom workflow protocols, shift schedules, and SLA deliverables tailored to your exact industry requirements.',
  },
  {
    question: 'How quickly can we initiate an operational engagement with Mahalaxmi Enterprises?',
    answer: 'Following our initial consultation and site audit, we can deploy structured operational workflows and resource frameworks within 48 to 72 hours for urgent industrial requirements.',
  },
];

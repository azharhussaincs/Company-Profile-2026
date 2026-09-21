export interface TeamMember {
  role: string;
  name: string;
  department?: string;
  hasTeam?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  location?: string;
  description: string;
  tags?: string[];
}

export interface CompetencyItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  services: string[];
  note?: string;
  category?: 'core' | 'specialised';
}

export interface OfficeLocation {
  id: string;
  country: string;
  city: string;
  title: string;
  address: string;
  floorSuite: string;
  extraInfo?: string;
  image: string;
}

export const COMPANY_DETAILS = {
  name: "Bright Integrated Support Services Company (BIC)",
  shortName: "BIC",
  tagline: "Your Integrated Support Services Partner in KSA",
  initiatedYear: "2006",
  establishedYear: "2009",
  activeClients: "70",
  upcomingClients: "60",
  headquarters: {
    city: "Riyadh",
    country: "Kingdom of Saudi Arabia",
    building: "Al Anoud Tower 2",
    floor: "12th Floor",
    suite: "Suite No. 1"
  },
  targetClients: [
    "Multinational companies",
    "Potential foreign companies",
    "Local companies"
  ],
  summary: "Complete integrated business support services for our valued international clients.",
  experienceText: "A team of dedicated professionals with intensive experience in the business support services industry.",
  email: "info@bic.net.sa",
  telephone: "+966 11 464 6006",
  closingStatement: "At BIC, we manage all of your non-core functions, allowing your business to concentrate on growth and renewing its position in the industry."
};

export const VISION_MISSION = {
  vision: {
    title: "Our Vision",
    statement: "To be the go-to, self-sufficient Integrated Support Services provider in the Kingdom of Saudi Arabia, providing our valued clients with consultancy operational and administrative support from scratch to creation."
  },
  mission: {
    title: "Our Mission",
    statement: "Complying with the local regulatory frameworks and handling operations with effective management accuracy and professionalism, so that our clients take on their journey to a prosperous business."
  }
};

export const MANAGEMENT_TEAM: TeamMember[] = [
  {
    role: "PRESIDENT",
    name: "Saud Alshaibani"
  },
  {
    role: "DIRECTOR OF BUSINESS DEVELOPMENT",
    name: "Abdur Rahman"
  },
  {
    role: "FINANCE MANAGER",
    name: "Gemary Larosa",
    hasTeam: true
  },
  {
    role: "HR MANAGER",
    name: "Sara Almashari",
    hasTeam: true
  },
  {
    role: "GOVERNMENT RELATIONS MANAGER",
    name: "Yazeed Alotaibi",
    hasTeam: true
  }
];

export const ORGANIZATIONAL_UNITS = [
  {
    title: "Project Management",
    lead: "Abdur Rahman Team",
    description: "End-to-end strategic planning, onboarding, and execution of client projects across all domains."
  },
  {
    title: "Client Account Management",
    lead: "Dedicated Account Team",
    description: "Single point of contact ensuring consistent communication, satisfaction, and proactive service delivery."
  },
  {
    title: "Operational Services",
    lead: "Operations Support Team",
    description: "Daily frontline execution covering logistics, administrative support, licensing, and facility coordination."
  }
];

export const COMPANY_TIMELINE: TimelineItem[] = [
  {
    year: "2009",
    title: "Bright Integrated Support Services Company (BIC)",
    location: "Riyadh, KSA",
    description: "The parent company of Bright Integrated Human Resources Consultancies, was established in Riyadh, Saudi Arabia, serving as the main office."
  },
  {
    year: "2010–2018",
    title: "International Clients",
    location: "Global Expansion",
    description: "Expanded its reach, acquiring clients from across the globe and strengthening its international presence."
  },
  {
    year: "2019",
    title: "Bright Integrated Human Resources Consultancies",
    location: "Dubai, UAE",
    description: "BIC expanded its operations by opening a new office in Dubai, marking a significant step in the company’s growth and regional presence."
  },
  {
    year: "2022–2023",
    title: "BIC Business Center Launch and Supporting 70+ International Clients",
    location: "Riyadh, KSA",
    description: "Successfully onboarded over 70 international clients, and BIC initiated the establishment of its Business Center to cater to international clients in need of office space."
  },
  {
    year: "2024–2026",
    title: "Expansion of Local and Global Offices",
    location: "KAFD · Thailand · Kyrgyzstan",
    description: "Continued strategic expansion into prime local commercial hubs and key international gateway offices.",
    tags: ["KAFD", "Thailand", "Kyrgyzstan"]
  }
];

export const CORE_COMPETENCIES: CompetencyItem[] = [
  {
    id: "01",
    number: "01",
    title: "Accounting, Bookkeeping & Payroll",
    category: "core",
    services: [
      "AEOI Registration",
      "Bank Opening & Account Management",
      "Bookkeeping Support Services",
      "IFRS Compliance & Implementation",
      "Payroll Management | MUDAD Compliance",
      "VAT Filing & Compliance",
      "Zakat & VAT Registration"
    ]
  },
  {
    id: "02",
    number: "02",
    title: "Business / Serviced Office Outsourcing",
    category: "core",
    description: "While you deal with customers and clients, we support you from vacant land to a fully furnished office space with all supporting facilities.",
    services: [
      "Business Furniture Solutions",
      "Conference Room Rentals",
      "Design Services (Office Fit-Out & Interior)",
      "High-Speed Internet Connectivity",
      "Hot Desking & Co-Working Spaces",
      "Land & Building Leasing",
      "Office Leasing (Short-Term & Long-Term, Furnished & Unfurnished)",
      "Office Fit-Out & Interior Design Services"
    ],
    note: "Featuring the premier BIC Business Center at Al Anoud Tower 2, 15th Floor (Suite No. 1-4)."
  },
  {
    id: "03",
    number: "03",
    title: "Chauffeur Services",
    category: "core",
    description: "Curtail your business expenses by leasing vehicles as per your need. Exclusive corporate services for airport transfer and chauffeur services.",
    services: [
      "Airport Pickup & Drop (Daily, Weekly, Monthly or Yearly)",
      "Employee Transportation",
      "Travel Tour Assistance",
      "Vehicle Leasing Services – With or Without Driver (Short-Term or Long-Term)",
      "VIP Meet & Assist Services (Althanfeethi)"
    ]
  },
  {
    id: "04",
    number: "04",
    title: "Employee Management Services",
    category: "core",
    description: "Catering to both local and international talent, we help you sustain a healthy work environment in compliance with Saudi legalities.",
    services: [
      "Accommodation Maintenance & Housekeeping",
      "Company Mobile Plans – Management of both prepaid and postpaid corporate mobile services",
      "Employee Accommodation (Short-Term & Long-Term) – Sourcing and provisioning of both furnished and unfurnished housing based on employee needs and preferences",
      "HR Document Management – Organized handling of both hardcopy and digital employee’s records",
      "Hotel Booking and Payment Services",
      "Saudization Process Implementation",
      "Travel & Ticketing Services – Comprehensive booking services including air travel, hotel reservations, and cruise ship arrangements"
    ]
  },
  {
    id: "05",
    number: "05",
    title: "General Manager (GM) Services",
    category: "core",
    description: "Any other concern Saudi Ministries as per Power of Attorney (POA) which has been issued by the Client’s RHQ and attached by Concern Saudi Consulate, Saudi Ministry of Foreign Affairs (MOFA) and Saudi Ministry of Justice (MOJ)",
    services: [
      "Acting or outsourced General Manager support",
      "Ministry of Investment for Saudi Arabia (MISA)",
      "Ministry of Human Resources and Social Development (HRSD)",
      "Ministry of Immigration (MOI)",
      "Ministry of Commerce (MOC) / Saudi Business Center (SBC)",
      "Ministry of Communications and Information Technology (MCIT)",
      "Ministry of Municipal and Rural Affairs (MoMRA)",
      "Commercial Registration (CR)",
      "Wassel (National Address)",
      "PO Box and MA’ADEN",
      "General Organization for Social Insurance (GOSI)",
      "Muqeem",
      "Chamber of Commerce (CoC)",
      "Zakat, Tax and Customs Authority (ZATCA)"
    ]
  },
  {
    id: "06",
    number: "06",
    title: "Government-Related Services",
    category: "core",
    description: "With significant government bodies including various municipalities and ministries, every business needs support in coordination and assistance in all matters related to government.",
    services: [
      "Business Licensing Services",
      "General Organization for Social Insurance (GOSI)",
      "Ministry of Interior (MOI) Services",
      "Ministry of Investment (MISA) and Commercial Registration (CR) Services",
      "Ministry of Labor (MOL)",
      "Muqeem Management",
      "Municipality (Baladiya) License Services",
      "Post Incorporation Support",
      "Traffic Department Services",
      "Waseel Services"
    ]
  },
  {
    id: "07",
    number: "07",
    title: "Human Resources and Recruitment Services",
    category: "core",
    description: "Creating optimization for your business through increased productivity and better service delivery at the center of your business.",
    services: [
      "Employee Orientation & Onboarding Programs",
      "Employment Contract Preparation in Bilingual Format",
      "Government Relations Officer (GRO) Support",
      "HR Policy & Handbook Development",
      "Job Descriptions & Employment Contract Advisory",
      "Saudi Labor Law Compliance",
      "Staffing & Placement Services",
      "Talent Acquisition & Recruitment Support"
    ]
  },
  {
    id: "08",
    number: "08",
    title: "Immigration Services",
    category: "core",
    description: "Immigration processes can be complex; at BIC we make their navigation simpler by providing comprehensive consultation and support.",
    services: [
      "Chamber of Commerce (COC) & Ministry of Foreign Affairs (MOFA) Attestations",
      "Dependents Visa Issuance & Renewal",
      "Exit Re-Entry Visa (Single / Multiple)",
      "Final Exit Processing",
      "Letter of Invitations",
      "Passport Support Service",
      "Residence Visa (Iqama) Issuance & Renewal",
      "Work Permit Issuance & Renewal",
      "Work Visa (Long-Term Employment)",
      "Work Visit & Business Visas (Short-Term)"
    ]
  },
  {
    id: "09",
    number: "09",
    title: "Insurance Assistance",
    category: "core",
    description: "Helping you protect your people and assets with coverage managed end-to-end under Saudi regulations.",
    services: [
      "Health Insurance Management for Employees and Dependents",
      "Comprehensive Vehicle Insurance",
      "Property Insurance",
      "Fidelity Guarantee Insurance",
      "Money Insurance"
    ]
  },
  {
    id: "10",
    number: "10",
    title: "Administrative Support Services",
    category: "specialised",
    description: "Document handling, scheduling, office correspondence, data entry, and clerical support.",
    services: [
      "Document handling",
      "Scheduling & Calendar Management",
      "Office correspondence",
      "Data entry & Record keeping",
      "Clerical support"
    ]
  },
  {
    id: "11",
    number: "11",
    title: "Facility Operations and Maintenance",
    category: "specialised",
    description: "Comprehensive facility management ensuring smooth workplace operations and reliable infrastructure.",
    services: [
      "Equipment & Supplies Provisioning",
      "Facility Maintenance",
      "Manpower Support Services"
    ]
  },
  {
    id: "12",
    number: "12",
    title: "IT Network Support",
    category: "specialised",
    description: "Workstation setup, corporate phone number management, network installation, CCTV, printer and hardware support, maintenance and troubleshooting — with seamless integration and minimal downtime.",
    services: [
      "Workstation setup",
      "Corporate phone number management",
      "Network installation",
      "CCTV setup & management",
      "Printer and hardware support",
      "Maintenance and troubleshooting",
      "Seamless integration and minimal downtime"
    ]
  },
  {
    id: "13",
    number: "13",
    title: "Management Consulting Services",
    category: "specialised",
    description: "Strategic guidance to navigate organizational growth and risk mitigation.",
    services: [
      "Business Process Optimization",
      "Change Management & Restructuring",
      "Risk assessment for high-stakes decisions"
    ]
  },
  {
    id: "14",
    number: "14",
    title: "Own or leased property (residential)",
    category: "specialised",
    description: "Expert property management and leasing solutions across residential and commercial sectors.",
    services: [
      "Management and leasing of non-residential real estate",
      "Management and leasing of self-storage units"
    ]
  },
  {
    id: "15",
    number: "15",
    title: "Relocation Services",
    category: "specialised",
    description: "Comprehensive, professional support to employees and their families moving across borders or within regions.",
    services: [
      "Cross-border employee relocation support",
      "Inter-regional relocation assistance",
      "Family relocation guidance & settling-in services",
      "Housing and logistics coordination"
    ]
  },
  {
    id: "16",
    number: "16",
    title: "Translation Support Services",
    category: "specialised",
    description: "Accurate professional translation ensuring clear communication, specialising in legal translation for contracts, policies, and official documents.",
    services: [
      "Accurate professional translation",
      "Specialised legal translation for contracts",
      "Corporate policy translation",
      "Official document & government filing translation"
    ]
  },
  {
    id: "17",
    number: "17",
    title: "Management & Operation of Furnished Flats",
    category: "specialised",
    description: "Turnkey management of furnished residential units, ensuring high occupancy, tenant satisfaction, and top-quality maintenance.",
    services: [
      "Turnkey management of furnished residential units",
      "High occupancy management",
      "Tenant satisfaction programs",
      "Top-quality ongoing maintenance"
    ]
  }
];

export const GOVERNMENT_RELATIONS_DETAILED_SERVICES: string[] = [
  "GM visa issuance",
  "Employees’ work permits - Keep the Validity",
  "Employees’ Iqama - Keep the Validity",
  "Transfer of Dependents to Employee manually",
  "Secondary user in MOL",
  "Secondary user in Qiwa",
  "Secondary user in COC",
  "E-Wakala issuance/cancellations of Visa for all clients",
  "Delegation in MOL",
  "Location assignment",
  "QIWA Subscription/Renewal",
  "PO BOX registration/renewal",
  "MISA renewal",
  "Creating MOL Account for GM",
  "COC issuance for GM",
  "Delegation in SBC",
  "Ministry of Justice Attestation",
  "Muqeem print-out",
  "MOFA Attestations",
  "Letter of Invitation",
  "Istiqdam Form for Permanent Family Visa",
  "TAMM Vehicle authorization only",
  "CR & COC renewal from Saudi Business Center",
  "CR & COC renewal from Ministry of Commerce",
  "COC records",
  "COC attestations",
  "Muqeem Records",
  "Exit Re-Entry visa single entry",
  "Exit Re-Entry visa multiple entries",
  "Extension of Exit Re-Entry Visa",
  "Work Permit - Renewal",
  "Saudi Residence Permit (Iqama) Renewal",
  "Change occupation",
  "Work Visit Visa",
  "Work Visa",
  "Work Permit - Issuance",
  "Saudi Residence Permit (Iqama) – issuance",
  "Issuance of employees dependent Iqama",
  "Final exit",
  "Employees’ dependents Iqama",
  "Transfer of Employee",
  "Tawasul from Absher to issue iqama for dependents",
  "Mudad WPS file upload for all clients",
  "GACA Access issuance/renewal",
  "SPL National address registration/renewal"
];

export const CLIENT_ADVANTAGES = [
  {
    number: "01",
    title: "Accelerate speed to market",
    description: "Establish your corporate footprint rapidly in Saudi Arabia with turnkey corporate setup, licensing, and operational infrastructure."
  },
  {
    number: "02",
    title: "Ensure compliance with local regulations",
    description: "Stay fully aligned with Saudi Vision 2030, Saudi Labor Law, MISA, GOSI, ZATCA, and MUDAD regulations with expert advisory."
  },
  {
    number: "03",
    title: "Focus on growing your core business",
    description: "Delegate non-core administrative, governmental, and facility burdens to BIC so your leadership can focus on market expansion."
  },
  {
    number: "04",
    title: "Get faster access to skilled resources",
    description: "Leverage BIC’s extensive professional network, bilingual recruitment channels, and dedicated on-ground operational teams."
  }
];

export const OPERATING_OFFICES: OfficeLocation[] = [
  {
    id: "riyadh-1",
    country: "Saudi Arabia",
    city: "Riyadh",
    title: "Riyadh, Office",
    address: "King Fahad Road - Al Anoud Tower 2",
    floorSuite: "12th Floor, Suite No. 1",
    image: "/assets/office-riyadh1.png"
  },
  {
    id: "riyadh-2",
    country: "Saudi Arabia",
    city: "Riyadh",
    title: "Riyadh, Office",
    address: "King Fahad Road - Tadawul Tower",
    floorSuite: "9th Floor, E 2",
    image: "/assets/office-riyadh2.png"
  },
  {
    id: "bic-bc",
    country: "Saudi Arabia",
    city: "Riyadh, KSA",
    title: "BIC Business Center, Riyadh, KSA",
    address: "North Tower, Alra’idah Building",
    floorSuite: "15th Floor, Suite No. 1-4",
    extraInfo: "22nd Floor under construction",
    image: "/assets/office-business-center.png"
  },
  {
    id: "dubai",
    country: "UAE",
    city: "Dubai",
    title: "Dubai, UAE",
    address: "Conrad Hotel - Business Tower Sheikh Zayed Road",
    floorSuite: "21st Floor, Office No. 05-A",
    image: "/assets/office-dubai.png"
  },
  {
    id: "bangkok",
    country: "Thailand",
    city: "Bangkok",
    title: "Bangkok, Thailand",
    address: "Regus Sathorn Square, 98 North Sathorn Road, Silom, Bang Rak, Bangkok 10500",
    floorSuite: "Room 3736, 37th Floor",
    image: "/assets/office-bangkok.png"
  },
  {
    id: "bishkek",
    country: "Kyrgyzstan",
    city: "Bishkek",
    title: "Bishkek, Kyrgyzstan",
    address: "Victory+ Business Center, 103/1 Ibraimova Street",
    floorSuite: "9th Floor of Block A",
    image: "/assets/office-bishkek.png"
  }
];

export const INTERNATIONAL_REGIONS = [
  { name: "North & South America", coords: { x: "24%", y: "48%" } },
  { name: "Europe", coords: { x: "51%", y: "37%" } },
  { name: "Middle East", coords: { x: "59%", y: "55%" } },
  { name: "Asia", coords: { x: "70%", y: "45%" } },
  { name: "Africa", coords: { x: "49%", y: "63%" } },
  { name: "Australia", coords: { x: "80%", y: "75%" } }
];

export const BIC_BUSINESS_CENTER = {
  title: "BIC Business Center",
  tower: "Al Anoud Tower 2",
  floor: "15th Floor (Suite No. 1-4)",
  city: "Riyadh, Saudi Arabia",
  renderImage: "/assets/business-center-3d.png",
  planImage: "/assets/business-center-plan.png",
  photos: [
    { src: "/assets/business-center-photo1.png", caption: "Premium Co-working & Dedicated Workstations" },
    { src: "/assets/business-center-photo2.png", caption: "Executive Office Suite with Panoramic Riyadh Skyline Views" },
    { src: "/assets/business-center-photo3.png", caption: "Private Meeting & Management Consultation Office" }
  ],
  features: [
    "Fully Furnished Executive Suites",
    "Hot Desking & Dedicated Workspaces",
    "High-Speed Enterprise Internet Connectivity",
    "Modern Conference & Meeting Room Rentals",
    "Reception & Welcoming Lounge for Guests",
    "Comprehensive Office Fit-Out & Support Facilities"
  ]
};

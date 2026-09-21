export interface TeamMember {
  role: string;
  name: string;
  hasTeam?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  location?: string;
  description: string;
  subLocations?: string[];
}

export interface CompetencyItem {
  id: string;
  number: string;
  title: string;
  description?: string;
  services: string[];
}

export interface OfficeLocation {
  id: string;
  title: string;
  address: string;
  floorSuite: string;
  underConstruction?: string;
  image: string;
}

export const COMPANY_DETAILS = {
  name: "BRIGHT INTEGRATED SUPPORT SERVICES COMPANY (BIC)",
  shortName: "BIC",
  tagline: "“Your Integrated Support Services Partner in KSA”",
  profileYear: "2026",
  aboutLead: "Complete integrated business support services for our valued international clients.",
  stats: [
    { number: "2006", label: "Initiated", isNavy: true },
    { number: "2009", label: "Established as a company", isNavy: true },
    { number: "70", label: "Current active clients", isNavy: false },
    { number: "60", label: "Upcoming clients", isNavy: false },
  ],
  aboutBullets: [
    "Headquartered in Riyadh, Kingdom of Saudi Arabia, Al Anoud Tower 2, 12th Floor.",
    "Designed for multinational companies, potential foreign companies and local companies.",
    "A team of dedicated professionals with intensive experience in the business support services industry."
  ],
  email: "info@bic.net.sa",
  telephone: "+966 11 464 6006",
  getInTouchText: "At BIC, we manage all of your non-core functions, allowing your business to concentrate on growth and renewing its position in the industry."
};

export const VISION_MISSION = {
  vision: {
    eyebrow: "OUR VISION",
    title: "Our Vision",
    text: "To be the go-to, self-sufficient Integrated Support Services provider in the Kingdom of Saudi Arabia, providing our valued clients with consultancy operational and administrative support from scratch to creation."
  },
  mission: {
    eyebrow: "OUR MISSION",
    title: "Our Mission",
    text: "Complying with the local regulatory frameworks and handling operations with effective management accuracy and professionalism, so that our clients take on their journey to a prosperous business."
  }
};

export const MANAGEMENT_TEAM = {
  president: {
    role: "PRESIDENT",
    name: "Saud Alshaibani"
  },
  directorBD: {
    role: "DIRECTOR OF BUSINESS DEVELOPMENT",
    name: "Abdur Rahman"
  },
  managers: [
    {
      role: "FINANCE MANAGER",
      name: "Gemary Larosa",
      teamLabel: "Team"
    },
    {
      role: "HR MANAGER",
      name: "Sara Almashari",
      teamLabel: "Team"
    },
    {
      role: "GOVERNMENT RELATIONS MANAGER",
      name: "Yazeed Alotaibi",
      teamLabel: "Team"
    }
  ],
  projectManagement: {
    title: "Project Management",
    teamLabel: "Abdur Rahman Team"
  },
  clientAccountManagement: {
    title: "Client Account Management",
    teamLabel: "Team"
  },
  operationalServices: {
    title: "Operational Services",
    teamLabel: "Team"
  }
};

export const COMPANY_TIMELINE: TimelineItem[] = [
  {
    year: "2009",
    title: "Bright Integrated Support Services Company (BIC)",
    location: "Riyadh, KSA",
    description: "the parent company of Bright Integrated Human Resources Consultancies, was established in Riyadh, Saudi Arabia, serving as the main office"
  },
  {
    year: "2010-2018",
    title: "International Clients",
    description: "expanded its reach, acquiring clients from across the globe and strengthening its international presence"
  },
  {
    year: "2019",
    title: "Bright Integrated Human Resources Consultancies",
    location: "Dubai, UAE",
    description: "BIC expanded its operations by opening a new office in Dubai, marking a significant step in the company’s growth and regional presence"
  },
  {
    year: "2022-2023",
    title: "BIC Business Center Launch and Supporting 70+ International Clients",
    description: "Successfully onboarded over 70 international clients, and BIC initiated the establishment of its Business Center to cater to international clients in need of office space"
  },
  {
    year: "2024-2026",
    title: "Expansion of Local and Global Offices",
    description: "",
    subLocations: ["KAFD", "Thailand", "Kyrgyzstan"]
  }
];

export const CORE_COMPETENCIES_LIST = [
  { number: "01", title: "Accounting, Bookkeeping & Payroll" },
  { number: "02", title: "Business / Serviced Office Outsourcing" },
  { number: "03", title: "Chauffeur Services" },
  { number: "04", title: "Employee Management Services" },
  { number: "05", title: "General Manager (GM) Services" },
  { number: "06", title: "Government-Related Services" },
  { number: "07", title: "Human Resources and Recruitment Services" },
  { number: "08", title: "Immigration Services" },
  { number: "09", title: "Insurance Assistance" },
  { number: "10", title: "Administrative Support Services" },
  { number: "11", title: "Facility Operations and Maintenance" },
  { number: "12", title: "IT Network Support" },
  { number: "13", title: "Management Consulting Services" },
  { number: "14", title: "Own or leased property (residential)" },
  { number: "15", title: "Relocation Services" },
  { number: "16", title: "Translation Support Services" },
  { number: "17", title: "Management & Operation of Furnished Flats" }
];

export const COMPETENCY_01 = {
  number: "01",
  title: "Accounting, Bookkeeping & Payroll",
  services: [
    "AEOI Registration",
    "Bank Opening & Account Management",
    "Bookkeeping Support Services",
    "IFRS Compliance & Implementation",
    "Payroll Management | MUDAD Compliance",
    "VAT Filing & Compliance",
    "Zakat & VAT Registration"
  ]
};

export const COMPETENCY_02 = {
  number: "02",
  title: "Business / Serviced Office Outsourcing",
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
  ]
};

export const BIC_BUSINESS_CENTER = {
  title: "BIC Business Center",
  tower: "Al Anoud Tower 2",
  floor: "15th Floor (Suite No. 1-4)",
  renderImage: "/assets/business-center-3d.png",
  planImage: "/assets/business-center-plan.png",
  photos: [
    { src: "/assets/business-center-photo1.png" },
    { src: "/assets/business-center-photo2.png" },
    { src: "/assets/business-center-photo3.png" }
  ]
};

export const COMPETENCY_03 = {
  number: "03",
  title: "Chauffeur Services",
  description: "Curtail your business expenses by leasing vehicles as per your need. Exclusive corporate services for airport transfer and chauffeur services.",
  services: [
    "Airport Pickup & Drop (Daily, Weekly, Monthly or Yearly)",
    "Employee Transportation",
    "Travel Tour Assistance",
    "Vehicle Leasing Services – With or Without Driver (Short-Term or Long-Term)",
    "VIP Meet & Assist Services (Althanfeethi)"
  ]
};

export const COMPETENCY_04 = {
  number: "04",
  title: "Employee Management Services",
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
};

export const COMPETENCY_05 = {
  number: "05",
  title: "General Manager (GM) Services",
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
};

export const COMPETENCY_06 = {
  number: "06",
  title: "Government-Related Services",
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
};

export const GOVERNMENT_RELATIONS_GRID: string[][] = [
  // Column 1
  [
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
    "PO BOX registration/renewal"
  ],
  // Column 2
  [
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
    "CR & COC renewal from Ministry of Commerce"
  ],
  // Column 3
  [
    "COC records",
    "COC attestations",
    "Muqeem Records",
    "Exit Re-Entry visa single entry",
    "Exit Re-Entry visa multiple entries",
    "Extension of Exit Re-Entry Visa",
    "Work Permit - Renewal",
    "Saudi Residence Permit (Iqama) - Renewal",
    "Change occupation",
    "Work Visit Visa",
    "Work Visa",
    "Work Permit - Issuance"
  ],
  // Column 4
  [
    "Saudi Residence Permit (Iqama) – issuance",
    "Issuance of employees dependent Iqama",
    "Final exit",
    "Employees’ dependents Iqama",
    "Transfer of Employee",
    "Tawasul from Absher to issue iqama for dependents",
    "Mudad WPS file upload for all clients",
    "GACA Access issuance/renewal",
    "SPL National address registration/renewal"
  ]
];

export const COMPETENCY_07 = {
  number: "07",
  title: "Human Resources and Recruitment Services",
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
};

export const COMPETENCY_08 = {
  number: "08",
  title: "Immigration Services",
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
};

export const COMPETENCY_09 = {
  number: "09",
  title: "Insurance Assistance",
  description: "Helping you protect your people and assets with coverage managed end-to-end under Saudi regulations.",
  services: [
    "Health Insurance Management for Employees and Dependents",
    "Comprehensive Vehicle Insurance",
    "Property Insurance",
    "Fidelity Guarantee Insurance",
    "Money Insurance"
  ]
};

export const SPECIALISED_SERVICES = [
  {
    number: "10",
    title: "Administrative Support Services",
    type: "paragraph",
    content: "Document handling, scheduling, office correspondence, data entry, and clerical support."
  },
  {
    number: "11",
    title: "Facility Operations and Maintenance",
    type: "list",
    items: [
      "Equipment & Supplies Provisioning",
      "Facility Maintenance",
      "Manpower Support Services"
    ]
  },
  {
    number: "12",
    title: "IT Network Support",
    type: "paragraph",
    content: "Workstation setup, corporate phone number management, network installation, CCTV, printer and hardware support, maintenance and troubleshooting — with seamless integration and minimal downtime."
  },
  {
    number: "13",
    title: "Management Consulting Services",
    type: "list",
    items: [
      "Business Process Optimization",
      "Change Management & Restructuring",
      "Risk assessment for high-stakes decisions"
    ]
  },
  {
    number: "14",
    title: "Own or leased property (residential)",
    type: "list",
    items: [
      "Management and leasing of non-residential real estate",
      "Management and leasing of self-storage units"
    ]
  },
  {
    number: "15",
    title: "Relocation Services",
    type: "paragraph",
    content: "Comprehensive, professional support to employees and their families moving across borders or within regions."
  },
  {
    number: "16",
    title: "Translation Support Services",
    type: "paragraph",
    content: "Accurate professional translation ensuring clear communication, specialising in legal translation for contracts, policies, and official documents."
  },
  {
    number: "17",
    title: "Management & Operation of Furnished Flats",
    type: "paragraph",
    content: "Turnkey management of furnished residential units, ensuring high occupancy, tenant satisfaction, and top-quality maintenance."
  }
];

export const CLIENT_ADVANTAGES = [
  { number: "01", title: "Accelerate speed to market" },
  { number: "02", title: "Ensure compliance with local regulations" },
  { number: "03", title: "Focus on growing your core business" },
  { number: "04", title: "Get faster access to skilled resources" }
];

export const OPERATING_OFFICES: OfficeLocation[] = [
  {
    id: "riyadh-1",
    title: "Riyadh, Office",
    address: "King Fahad Road - Al Anoud Tower 2, 12th Floor,",
    floorSuite: "Suite No. 1",
    image: "/assets/office-riyadh1.png"
  },
  {
    id: "riyadh-2",
    title: "Riyadh, Office",
    address: "King Fahad Road - Tadawul Tower 9th Floor, E 2",
    floorSuite: "",
    image: "/assets/office-riyadh2.png"
  },
  {
    id: "bic-bc",
    title: "BIC Business Center, Riyadh, KSA",
    address: "North Tower, Alra’idah Building · 15th Floor, Suite",
    floorSuite: "No. 1-4 · 22nd Floor under construction",
    image: "/assets/office-business-center.png"
  },
  {
    id: "dubai",
    title: "Dubai, UAE",
    address: "Conrad Hotel - Business Tower Sheikh Zayed",
    floorSuite: "Road, 21st Floor, Office No. 05-A",
    image: "/assets/office-dubai.png"
  },
  {
    id: "bangkok",
    title: "Bangkok, Thailand",
    address: "Room 3736, 37th Floor, Regus Sathorn Square, 98",
    floorSuite: "North Sathorn Road, Silom, Bang Rak, Bangkok 10500",
    image: "/assets/office-bangkok.png"
  },
  {
    id: "bishkek",
    title: "Bishkek, Kyrgyzstan",
    address: "Victory+ Business Center, 9th Floor of Block A,",
    floorSuite: "103/1 Ibraimova Street",
    image: "/assets/office-bishkek.png"
  }
];

export const INTERNATIONAL_CLIENTS = {
  title: "OUR CLIENTS FROM ALL OVER THE WORLD",
  mapImage: "/assets/world-map.png",
  regions: [
    "North & South America",
    "Europe",
    "Middle East",
    "Asia",
    "Africa",
    "Australia"
  ]
};

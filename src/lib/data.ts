export const personal = {
  name: "Ernest Yoyowah",
  role: "Lead Frontend Engineer",
  tagline: "Building Secure Payment & Transaction Systems",
  description:
    "Software Engineer with experience building secure, high-availability payment and transaction systems in telecom and digital commerce environments.",
  location: "Accra, Ghana",
  email: "ernestniiyoyowah@gmail.com",
  phone: "+233506923484",
  github: "https://github.com/Ernest-Yoyowah",
  linkedin: "https://linkedin.com/in/ernestyoyowah",
};

export const experiences = [
  {
    id: "mtn",
    company: "MTN Ghana",
    role: "Lead Frontend Engineer",
    period: "Jul 2023 — Present",
    location: "Accra, Ghana",
    type: "Full-time",
    isCurrent: true,
    description:
      "Software engineer at MTN Ghana since July 2023 — contributing to payment systems, the MTN Pulse youth app, and internal platforms serving millions of subscribers.",
    highlights: [],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Golang"],
    systems: ["MTN Pay", "MTN SSP", "MTN Pulse", "Mobile Money", "Mastercard"],
    roles: [
      {
        id: "mtn-pay-ssp",
        role: "Lead Frontend Engineer",
        team: "MTN Pay & Self Service Portal",
        period: "Mar 2025 — Present",
        isCurrent: true,
        description:
          "Leading frontend on MTN Pay and the Self Service Portal — MTN's payment gateway and self-service platform for broadband, bundles, SIM, and eSIM management.",
        highlights: [
          "Built secure payment flows for Mobile Money, PCI DSS-compliant Mastercard checkout, and airtime across broadband and digital services",
          "Engineered end-to-end transaction flows — MSISDN input, OTP verification, async status handling — with resilient retry and duplicate-submission logic",
          "Implemented SIM swap validation and Ghana Card (NIA) identity verification for high-risk operations",
          "Enforced OWASP-aligned security across all flows: input sanitisation, secure token handling, no hardcoded secrets, safe redirects",
          "Collaborated with DevSecOps on Fortify scans; trusted as go-to engineer for critical production escalations",
        ],
        stack: ["React", "TypeScript", "Node.js", "Golang"],
        systems: [
          "MTN Pay",
          "MTN SSP",
          "Airtime & Bundle Payments",
          "Mastercard",
          "PCI DSS",
        ],
      },
      {
        id: "mtn-pulse-eng",
        role: "Software Engineer",
        team: "MTN Pulse Team",
        period: "Jul 2023 — Feb 2025",
        isCurrent: false,
        description:
          "Software engineer on the MTN Pulse team — MTN's youth platform within the MyMTN app, serving 100,000+ active users.",
        highlights: [
          "Identified 15+ codebase inefficiencies and executed a migration plan that reduced technical debt by 40%",
          "Built a Golang API proxy serving realtime streaming analytics across multiple MTN apps",
          "Built backend services in Node.js and MongoDB; contributed payment integration flows (Mobile Money, airtime) to the Pulse app",
          "Contributed to Agile delivery — sprint planning, feature demos, and iterative feedback loops",
        ],
        stack: ["React", "TypeScript", "Node.js", "MongoDB", "Golang"],
        systems: ["MTN Pulse", "MyMTN App"],
      },
    ],
  },
  {
    id: "jadaad",
    company: "Jadaad Technologies",
    role: "Software Engineer",
    period: "Jun 2024 — Nov 2024",
    location: "Kumasi, Ghana",
    type: "Full-time",
    isCurrent: false,
    description:
      "Contributed to the development of Hygeieiora and Jadaad web applications, improving performance, responsiveness, and cross-device usability.",
    highlights: [
      "Built and maintained reusable frontend components using React, TypeScript, Material-UI, and Tailwind",
      "Implemented user-facing features including blog functionality and real-time call alerts",
      "Integrated backend APIs using Node.js and MongoDB",
      "Collaborated closely with designers to deliver user-centric interfaces aligned with product requirements",
      "Managed tasks and delivery using ClickUp, ensuring timely execution of features and updates",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material-UI",
      "Node.js",
      "MongoDB",
    ],
    systems: ["Healthcare", "Web Applications"],
  },
  {
    id: "xcelsz",
    company: "Xcelsz",
    role: "Agile Developer",
    period: "Jun 2023 — Aug 2023",
    location: "Ghana",
    type: "Full-time",
    isCurrent: false,
    description:
      "Collaborated with a cross-functional team to improve mobile responsiveness across web products, delivering a seamless user experience across devices.",
    highlights: [
      "Collaborated with cross-functional team to achieve project objectives and meet sprint goals",
      "Implemented solutions for enhancing mobile responsiveness — responsive navigation, adaptive header and hero section, optimised content layout, and responsive media",
      "Analysed the current home page for mobile responsiveness and identified areas for improvement",
      "Utilised CSS media queries and responsive design techniques to create a seamless experience across mobile devices",
      "Tested and refined mobile responsiveness, incorporating user feedback and ensuring alignment with brand guidelines",
    ],
    stack: ["React", "CSS", "Git"],
    systems: ["Web", "Mobile Responsiveness"],
  },
  {
    id: "dmi",
    company: "DMI",
    role: "Software Developer",
    period: "Sep 2020 — Nov 2021",
    location: "Ghana",
    type: "Full-time",
    isCurrent: false,
    description:
      "Led the development of Dkeys Music Institute's official website, focusing on modern UI/UX, responsive design, and SEO optimisation.",
    highlights: [
      "Led the development and design of the official website, focusing on modern UI/UX principles",
      "Implemented responsive design for optimal performance across various devices",
      "Enhanced website visibility and search engine rankings through effective SEO optimisation strategies",
      "Collaborated with stakeholders to align project solutions with business goals",
      "Leveraged ReactJS, HTML5, and CSS3, integrating third-party libraries for advanced functionality",
      "Integrated social media and Open Graph Meta Tags to strengthen online brand presence",
    ],
    stack: ["React", "HTML5", "CSS3"],
    systems: ["Web", "SEO"],
  },
];

export const certifications = [
  {
    id: "meta-frontend-spec",
    title: "Meta Front-End Developer Specialization",
    issuer: "Meta",
    date: "Sep 2023",
  },
  {
    id: "frontend-capstone",
    title: "Front-End Developer Capstone",
    issuer: "Meta",
    date: "Aug 2023",
  },
  {
    id: "advanced-react",
    title: "Advanced React",
    issuer: "Coursera",
    date: "Apr 2023",
  },
  {
    id: "uxui",
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    date: "Aug 2023",
  },
  {
    id: "react-basics",
    title: "React Basics",
    issuer: "Meta",
    date: "Mar 2023",
  },
  {
    id: "intro-mobile",
    title: "Introduction to Mobile Development",
    issuer: "Meta",
    date: "Dec 2023",
  },
  {
    id: "mobile-js",
    title: "Mobile Development and JavaScript",
    issuer: "Meta",
    date: "Nov 2023",
  },
  {
    id: "backend-web",
    title: "Back-End Web Development",
    issuer: "Microsoft Imagine Cup",
    date: "Jun 2023",
  },
  {
    id: "coding-interview",
    title: "Coding Interview Preparation",
    issuer: "Meta",
    date: "Sep 2022",
  },
  {
    id: "programming-js",
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "Nov 2022",
  },
  {
    id: "version-control",
    title: "Version Control",
    issuer: "Coursera",
    date: "Nov 2022",
  },
  {
    id: "computational-thinking",
    title: "Problem Solving Using Computational Thinking",
    issuer: "University of Michigan",
    date: "Nov 2022",
  },
  {
    id: "cloud-basics",
    title: "Cloud Computing Basics (Cloud 101)",
    issuer: "Coursera",
    date: "Oct 2022",
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  stack: string[];
  category: string;
  status: string;
  highlights: string[];
  gradient: string;
  accentColor: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "mtn-pay",
    title: "MTN Pay",
    subtitle: "Central Payment Gateway",
    description:
      "MTN's central payment gateway used across multiple MTN services and apps — Mobile Money, Mastercard hosted checkout, and airtime.",
    longDescription:
      "MTN Pay is the central payment gateway for MTN, integrated by multiple services including the Self Service Portal. It handles Mobile Money transactions, PCI DSS–compliant Mastercard hosted checkout, and airtime top-up.",
    stack: ["React", "TypeScript", "Node.js", "Golang"],
    category: "Fintech",
    status: "Production",
    highlights: [
      "PCI DSS–compliant Mastercard hosted checkout",
      "Mobile Money disbursements and collections",
      "Airtime top-up integration",
      "OTP verification and fraud prevention",
      "Resilient flows with retry logic and status polling",
    ],
    gradient: "from-cyan-500/10 to-blue-600/10",
    accentColor: "#22d3ee",
  },
  {
    id: "mtn-ssp",
    title: "MTN Self Service Portal",
    subtitle: "Customer Self-Service Platform",
    description:
      "Customer portal enabling MTN subscribers to manage products and services — broadband, bundles, SIM, eSIM — without visiting a retail shop.",
    longDescription:
      "The MTN Self Service Portal (SSP) allows customers to manage and service their MTN accounts independently. It supports broadband, data bundles, SIM management, eSIM provisioning, and more, integrated with MTN Pay for in-portal payments.",
    stack: ["React", "TypeScript", "Node.js"],
    category: "Telecom",
    status: "Production",
    highlights: [
      "Broadband and data bundle management",
      "SIM and eSIM provisioning",
      "Self-service account management",
      "Integrated with MTN Pay for payments",
    ],
    gradient: "from-yellow-500/10 to-amber-600/10",
    accentColor: "#f59e0b",
  },
  {
    id: "mtn-pulse",
    title: "MTN Pulse",
    subtitle: "Youth Platform · MyMTN App",
    description:
      "Contributed to the MTN Pulse experience within the MyMTN app — MTN's youth-focused platform for offers and data bundles.",
    longDescription:
      "MTN Pulse is MTN's youth platform, delivered within the MyMTN app. The platform provides targeted offers, data bundles, and digital experiences for MTN's young subscriber base.",
    stack: ["React", "TypeScript", "Node.js"],
    category: "Telecom",
    status: "Production",
    highlights: [
      "Youth-focused features within the MyMTN app",
      "Targeted offers and data bundle flows",
      "Frontend contribution 2023–2025",
    ],
    gradient: "from-orange-500/10 to-red-600/10",
    accentColor: "#f97316",
  },
  {
    id: "mtn-auth",
    title: "MTN Auth Services",
    subtitle: "Centralized Identity & Access",
    description:
      "Auth0-based centralized authentication service consumed by multiple MTN applications in Ghana and South Africa.",
    longDescription:
      "MTN Auth Services provides centralized identity and access control using Auth0, consumed by multiple MTN applications across Ghana and South Africa MTN Group, supporting secure and consistent authentication at scale.",
    stack: ["Auth0", "Node.js", "TypeScript"],
    category: "Identity & Security",
    status: "Production",
    highlights: [
      "Auth0-based centralized authentication",
      "Consumed by multiple MTN services in Ghana and South Africa",
      "Biometric verification integration with Metrics Africa",
      "Supports centralized access control at scale",
    ],
    gradient: "from-indigo-500/10 to-violet-600/10",
    accentColor: "#818cf8",
  },
  {
    id: "autosurveil",
    title: "Autosurveil GPS",
    subtitle: "Fleet Intelligence Platform",
    description:
      "Full-stack GPS fleet tracking platform with real-time vehicle monitoring, route analytics, and authentication flows.",
    longDescription:
      "A full-stack fleet intelligence platform providing live GPS tracking, route analytics, and vehicle management. Led the full redevelopment of the platform across frontend and backend.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    category: "Systems",
    status: "Production",
    highlights: [
      "Led full-stack redevelopment of the platform",
      "OTP-based authentication and onboarding flows",
      "Route history and analytics dashboard",
      "Multi-fleet management interface",
    ],
    gradient: "from-emerald-500/10 to-teal-600/10",
    accentColor: "#10b981",
  },
];

export const fintechCapabilities = [
  {
    title: "Mobile Money Infrastructure",
    description:
      "End-to-end Mobile Money transaction flows including disbursements, collections, and wallet reconciliation.",
    icon: "Smartphone",
    tags: ["MoMo API", "USSD", "Disbursements"],
  },
  {
    title: "Card Payment Systems",
    description:
      "PCI DSS–compliant Mastercard hosted checkout integrations with tokenization and secure data handling.",
    icon: "CreditCard",
    tags: ["PCI DSS", "Mastercard", "Tokenization"],
  },
  {
    title: "Airtime & Digital Goods",
    description:
      "Airtime recharge pipelines with retry logic, idempotency keys, and carrier gateway integrations.",
    icon: "Zap",
    tags: ["Airtime API", "Idempotency", "Retry Logic"],
  },
  {
    title: "OTP & Fraud Prevention",
    description:
      "Multi-channel OTP verification and fraud prevention — SIM swap validation and Ghana Card (NIA) integration.",
    icon: "Shield",
    tags: ["OTP", "SIM Swap", "NIA Integration"],
  },
  {
    title: "Transaction Observability",
    description:
      "Real-time monitoring and alerting for payment infrastructure health using OpenTelemetry and Panorama.",
    icon: "Activity",
    tags: ["OpenTelemetry", "Panorama", "Monitoring"],
  },
  {
    title: "Resilient Architecture",
    description:
      "Transaction flows built for graceful degradation — retries, duplicate submission handling, and async status updates.",
    icon: "GitBranch",
    tags: ["Retry Logic", "Idempotency", "Async Polling"],
  },
];

export const articles = [
  {
    id: "how-money-moves",
    title: "How Money Actually Moves: Why Every Software Engineer Should Understand This",
    excerpt:
      "A successful API response doesn't mean money has moved. Behind every payment tap lies authentication, authorization, ledger commits, settlement, and reconciliation — a distributed system where every step must be correct and recoverable.",
    category: "Fintech Engineering",
    readTime: "12 min read",
    date: "Jul 2026",
    tags: ["Payments", "Architecture", "Fintech"],
  },
  {
    id: "pci-dss-frontend",
    title: "PCI DSS Compliance for Frontend Engineers",
    excerpt:
      "What frontend engineers building card payment flows actually need to know about PCI DSS, tokenization, and hosted checkout.",
    category: "Security",
    readTime: "10 min read",
    date: "Jul 2026",
    tags: ["PCI DSS", "Security", "React"],
  },
  {
    id: "transaction-orchestration",
    title: "Transaction Orchestration in High-Volume Payment Systems",
    excerpt:
      "How to design resilient transaction pipelines that handle failure gracefully — from idempotency keys to dead letter queues.",
    category: "Fintech Engineering",
    readTime: "8 min read",
    date: "Coming Soon",
    tags: ["Payments", "Architecture", "Reliability"],
  },
  {
    id: "observability-payments",
    title: "Observability for Payment Systems",
    excerpt:
      "Building dashboards, alerts, and distributed tracing for payment infrastructure — what to measure and why it matters.",
    category: "Reliability Engineering",
    readTime: "7 min read",
    date: "Coming Soon",
    tags: ["Observability", "Payments", "SRE"],
  },
];

export const techStack = {
  languages: ["JavaScript", "TypeScript", "Golang"],
  frontend: ["React", "React Native", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "MongoDB", "MySQL"],
  stateManagement: ["Redux", "Zustand"],
  security: ["Auth0", "PCI DSS", "OWASP"],
  observability: [
    "OpenTelemetry",
    "Production Monitoring",
    "Transaction State Management",
  ],
};

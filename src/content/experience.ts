export type Position = {
  title: string;
  team?: string;
  /** `YYYY-MM` */
  start: string;
  /** `YYYY-MM`; omitted for the current position. */
  end?: string;
  summary: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  location: string;
  /** Most recent position first. */
  positions: Position[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "MTN Ghana",
    location: "Accra, Ghana",
    positions: [
      {
        title: "Lead Frontend Engineer",
        team: "SSP Platform & MTN Pay",
        start: "2025-03",
        summary:
          "I lead frontend architecture for the SSP platform, which brings MTN Ghana’s self-service products together as independently deployed micro-frontends, and for MTN Pay, the payment gateway used across MTN services.",
        highlights: [
          "Lead the initiative to replace separate service portals with one platform: the Shell, SSP Portal, eCommerce, SIM Swap, Business Hub and other React applications, composed with Webpack Module Federation.",
          "Designed and introduced the company’s central design system, covering tokens, theming, components, hooks, a typed icon library and global styles, published as a versioned package on GitHub Packages.",
          "Defined the platform’s engineering standards, architecture guidelines and release workflow (GitHub Actions, Changesets, Vitest, tsup), and wrote its documentation, contribution guide and migration strategy.",
          "Built payment flows for Mobile Money, PCI DSS-compliant Mastercard hosted checkout, and airtime across broadband and digital services.",
          "Designed end-to-end transaction handling: MSISDN input, OTP verification, asynchronous status polling, and protection against retries and duplicate submissions.",
          "Implemented SIM swap validation and Ghana Card (NIA) identity checks for high-risk operations.",
          "Applied OWASP guidance across every flow, including input sanitisation, secure token handling, safe redirects and keeping secrets out of client code.",
          "Work with DevSecOps on Fortify scans and handle critical production escalations.",
        ],
      },
      {
        title: "Software Engineer",
        team: "MTN Pulse",
        start: "2023-07",
        end: "2025-02",
        summary:
          "Worked on MTN Pulse, the youth platform inside the MyMTN app, with more than 100,000 active users.",
        highlights: [
          "Audited the codebase, identified more than 15 structural problems, and led a migration that reduced technical debt by 40%.",
          "Built a Go API proxy that serves real-time streaming analytics to several MTN apps.",
          "Built backend services in Node.js and MongoDB and integrated Mobile Money and airtime payments into the app.",
          "Took part in sprint planning, demos and feedback cycles as part of an Agile team.",
        ],
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Module Federation",
      "Tailwind CSS",
      "Node.js",
      "Go",
      "MongoDB",
    ],
  },
  {
    company: "Jadaad Technologies",
    location: "Kumasi, Ghana",
    positions: [
      {
        title: "Software Engineer",
        start: "2024-06",
        end: "2024-11",
        summary:
          "Frontend work on the Hygeieiora and Jadaad web applications, mostly around performance, responsiveness and cross-device usability.",
        highlights: [
          "Built and maintained a shared component library with React, TypeScript, Material UI and Tailwind CSS.",
          "Shipped blog functionality and real-time call alerts.",
          "Integrated Node.js and MongoDB APIs and worked closely with designers on new features.",
        ],
      },
    ],
    stack: ["React", "TypeScript", "Material UI", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    company: "Xcelsz",
    location: "Ghana",
    positions: [
      {
        title: "Agile Developer",
        start: "2023-06",
        end: "2023-08",
        summary: "A short contract improving mobile responsiveness across Xcelsz’s web products.",
        highlights: [
          "Audited the home page on mobile and documented the problem areas.",
          "Rebuilt the navigation, header, hero and content layout to adapt across screen sizes.",
          "Tested the changes with users and refined them against the brand guidelines.",
        ],
      },
    ],
    stack: ["React", "CSS"],
  },
  {
    company: "Dkeys Music Institute",
    location: "Ghana",
    positions: [
      {
        title: "Software Developer",
        start: "2020-09",
        end: "2021-11",
        summary: "Led the design and development of the institute’s first official website.",
        highlights: [
          "Built a responsive site with React, HTML and CSS.",
          "Improved search visibility through SEO work, Open Graph metadata and social integrations.",
          "Worked directly with stakeholders to align the site with the institute’s goals.",
        ],
      },
    ],
    stack: ["React", "HTML", "CSS"],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "Rust"] },
  { label: "Frontend", items: ["React", "React Native", "Next.js", "Tailwind CSS"] },
  {
    label: "Architecture",
    items: ["Micro-frontends", "Webpack Module Federation", "Design systems", "Design tokens"],
  },
  { label: "Tooling", items: ["GitHub Actions", "Changesets", "Vitest", "tsup"] },
  { label: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL"] },
  { label: "State", items: ["Redux", "Zustand"] },
  { label: "Security", items: ["Auth0", "PCI DSS", "OWASP"] },
  { label: "Operations", items: ["OpenTelemetry", "Production monitoring"] },
];

export type Certification = {
  title: string;
  issuer: string;
  /** `YYYY-MM` */
  date: string;
};

export const certifications: Certification[] = [
  { title: "Mobile Development and JavaScript", issuer: "Meta", date: "2023-11" },
  { title: "Introduction to Mobile Development", issuer: "Meta", date: "2023-12" },
  { title: "Meta Front-End Developer Specialization", issuer: "Meta", date: "2023-09" },
  { title: "Front-End Developer Capstone", issuer: "Meta", date: "2023-08" },
  { title: "Principles of UX/UI Design", issuer: "Meta", date: "2023-08" },
  { title: "Back-End Web Development", issuer: "Microsoft Imagine Cup", date: "2023-06" },
  { title: "Advanced React", issuer: "Coursera", date: "2023-04" },
  { title: "React Basics", issuer: "Meta", date: "2023-03" },
  { title: "Programming with JavaScript", issuer: "Meta", date: "2022-11" },
  { title: "Version Control", issuer: "Coursera", date: "2022-11" },
  {
    title: "Problem Solving Using Computational Thinking",
    issuer: "University of Michigan",
    date: "2022-11",
  },
  { title: "Cloud Computing Basics (Cloud 101)", issuer: "Coursera", date: "2022-10" },
  { title: "Coding Interview Preparation", issuer: "Meta", date: "2022-09" },
].sort((a, b) => b.date.localeCompare(a.date));

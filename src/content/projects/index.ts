export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  highlights: string[];
  stack: string[];
  category: string;
  role?: string;
  status: "Production" | "In development";
};

export const projects: Project[] = [
  {
    slug: "ssp-platform",
    name: "SSP Micro-Frontend Platform",
    summary:
      "One platform for MTN Ghana’s self-service products, built from independently deployed micro-frontends.",
    description: [
      "MTN Ghana’s digital services grew up as separate portals. Managing an account, buying a device, swapping a SIM and running a business account each lived on a different site, with its own codebase, its own interface and its own way of doing things.",
      "In an architecture review the question was put plainly: why do customers need a different portal for every service? The answer we settled on was a single platform, composed of independently deployed micro-frontends, with a shared design system underneath. I lead the frontend engineering for the platform, and designed and introduced the design system that every application on it uses.",
    ],
    highlights: [
      "Replaced a portal-per-service model with one platform for MTN’s self-service products",
      "Independently deployed React applications composed with Webpack Module Federation",
      "A central design system, published as a versioned package, used by every application",
      "Layered design tokens and CSS custom properties for branding and light and dark themes",
      "Shared engineering standards, documentation and release workflow across teams",
    ],
    stack: [
      "React",
      "TypeScript",
      "Webpack Module Federation",
      "Tailwind CSS v4",
      "GitHub Actions",
      "GitHub Packages",
      "Changesets",
      "tsup",
      "Vitest",
    ],
    category: "Platform",
    role: "Lead Frontend Engineer",
    status: "Production",
  },
  {
    slug: "mtn-pay",
    name: "MTN Pay",
    summary: "The payment gateway behind MTN Ghana’s digital services.",
    description: [
      "MTN Pay is the central payment gateway for MTN Ghana. Other products, including the Self Service Portal, hand off to it whenever a customer needs to pay.",
      "It handles Mobile Money collections and disbursements, Mastercard payments through a PCI DSS-compliant hosted checkout, and airtime top-ups.",
    ],
    highlights: [
      "Hosted Mastercard checkout, so card data never touches MTN’s frontend",
      "Mobile Money collections and disbursements",
      "Airtime top-up",
      "OTP verification and fraud checks",
      "Retry handling and status polling for asynchronous payments",
    ],
    stack: ["React", "TypeScript", "Node.js", "Go"],
    category: "Payments",
    status: "Production",
  },
  {
    slug: "mtn-ssp",
    name: "MTN Self Service Portal",
    summary:
      "Lets MTN customers manage their accounts without visiting a shop.",
    description: [
      "The Self Service Portal lets MTN customers manage broadband, data bundles, SIM cards and eSIM provisioning on their own, without visiting a shop.",
      "It is one of the applications on the SSP micro-frontend platform, alongside eCommerce, SIM Swap and Business Hub. Payments inside the portal go through MTN Pay.",
    ],
    highlights: [
      "Broadband and data bundle management",
      "SIM management and eSIM provisioning",
      "Account self-service",
      "In-portal payments through MTN Pay",
    ],
    stack: ["React", "TypeScript", "Node.js"],
    category: "Telecom",
    status: "Production",
  },
  {
    slug: "mtn-pulse",
    name: "MTN Pulse",
    summary: "MTN’s youth platform inside the MyMTN app.",
    description: [
      "MTN Pulse is MTN’s platform for younger subscribers, delivered inside the MyMTN app. It offers targeted bundles, offers and digital experiences.",
      "I worked on it from 2023 to 2025, including a large migration of the codebase and a Go proxy for real-time analytics.",
    ],
    highlights: [
      "Youth offers and data bundle flows",
      "Codebase migration that reduced technical debt by 40%",
      "Mobile Money and airtime payment integration",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Go"],
    category: "Telecom",
    status: "Production",
  },
  {
    slug: "mtn-auth",
    name: "MTN Auth Services",
    summary:
      "Shared Auth0-based sign-in for MTN apps in Ghana and South Africa.",
    description: [
      "A centralised identity service built on Auth0. Several MTN applications in Ghana and South Africa use it for sign-in and access control instead of running their own.",
    ],
    highlights: [
      "Auth0-based authentication shared across applications",
      "Used by MTN services in Ghana and South Africa",
      "Biometric verification through Metrics Africa",
      "Central access control",
    ],
    stack: ["Auth0", "Node.js", "TypeScript"],
    category: "Identity",
    status: "Production",
  },
  {
    slug: "autosurveil",
    name: "Autosurveil GPS",
    summary: "A fleet tracking platform I rebuilt end to end.",
    description: [
      "Autosurveil is a GPS fleet tracking platform with live vehicle locations, route history and fleet management.",
      "I led the full redevelopment of the platform, owning the Next.js frontend and the Node.js and MongoDB backend.",
    ],
    highlights: [
      "Real-time vehicle tracking",
      "Route history and analytics",
      "OTP-based sign-up and authentication",
      "Multi-fleet management",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    category: "Fleet tracking",
    status: "Production",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

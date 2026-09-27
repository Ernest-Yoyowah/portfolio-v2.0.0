export type UsesGroup = {
  label: string;
  items: { name: string; note: string }[];
};

export const uses: UsesGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", note: "The default for frontend and backend work." },
      { name: "Go", note: "Payment service backends and high-throughput APIs." },
      { name: "Rust", note: "Native desktop tools." },
      { name: "JavaScript", note: "Scripts and older codebases." },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", note: "Component architecture for every web interface I build." },
      { name: "Next.js", note: "App Router, server components, static and server rendering." },
      { name: "React Native", note: "Cross-platform mobile apps." },
      { name: "Tailwind CSS", note: "Styling, including this site." },
      { name: "Tauri", note: "Cross-platform desktop apps." },
    ],
  },
  {
    label: "Platform",
    items: [
      {
        name: "Module Federation",
        note: "Composing independently deployed micro-frontends into one product.",
      },
      { name: "Changesets", note: "Versioning and changelogs for shared packages." },
      { name: "tsup", note: "Building tree-shakeable libraries." },
      { name: "Vitest", note: "Unit tests for components and hooks." },
      { name: "GitHub Actions", note: "CI and package publishing." },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", note: "API servers, scripts and tooling." },
      { name: "Express", note: "REST APIs." },
      { name: "MongoDB", note: "Document storage for application data." },
      { name: "MySQL", note: "Relational data." },
    ],
  },
  {
    label: "State",
    items: [
      { name: "Redux", note: "Large apps with complex, shared state." },
      { name: "Zustand", note: "Everything smaller." },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "Auth0", note: "Identity and access management." },
      { name: "OWASP", note: "The baseline for every payment flow." },
      { name: "PCI DSS", note: "Card payment compliance." },
    ],
  },
  {
    label: "Music",
    items: [
      { name: "Ableton Live", note: "Production and arrangement." },
      { name: "MainStage", note: "Live keyboard rigs." },
      { name: "Studio One", note: "Recording." },
      { name: "Omnisphere", note: "Synths and pads." },
      { name: "Kontakt", note: "Sampled instruments." },
      { name: "Korg Triton", note: "Hardware workstation." },
    ],
  },
];

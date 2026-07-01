"use client";

import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface UseItem {
  name: string;
  description: string;
  link?: string;
}

interface UseCategory {
  label: string;
  items: UseItem[];
}

const useCategories: UseCategory[] = [
  {
    label: "Languages",
    items: [
      {
        name: "TypeScript",
        description: "Default for all frontend and backend projects.",
      },
      { name: "JavaScript", description: "Core web and Node.js scripting." },
      {
        name: "Golang",
        description: "Payment service backends, high-throughput APIs.",
      },
      {
        name: "Rust",
        description: "Native macOS music tools — CoreMIDI, AudioUnit v3.",
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        description: "Component architecture for all web interfaces.",
      },
      {
        name: "React Native",
        description: "Cross-platform mobile applications.",
      },
      {
        name: "Next.js",
        description: "App Router, RSC, static + server rendering.",
      },
      { name: "Tailwind CSS", description: "Utility-first CSS." },
      { name: "Tauri", description: "Cross-platform desktop applications." },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", description: "API servers, scripting, tooling." },
      { name: "Express", description: "REST API framework." },
      { name: "MongoDB", description: "Document store for application data." },
      {
        name: "MySQL",
        description: "Relational database for structured data.",
      },
    ],
  },
  {
    label: "State Management",
    items: [
      {
        name: "Redux",
        description: "Predictable state container for complex apps.",
      },
      { name: "Zustand", description: "Lightweight state management." },
    ],
  },
  {
    label: "Security & Compliance",
    items: [
      { name: "Auth0", description: "Identity and access management." },
      {
        name: "OWASP",
        description: "Security standards and vulnerability prevention.",
      },
      {
        name: "PCI DSS",
        description: "Payment card industry compliance standards.",
      },
    ],
  },
  {
    label: "Music Production",
    items: [
      {
        name: "Ableton Live",
        description: "Production, arrangement, and live performance.",
      },
      { name: "MainStage", description: "Live keyboard rigs. Zero-latency." },
      { name: "Studio One", description: "Mixing and mastering sessions." },
      { name: "Omnisphere", description: "Synthesis and sound design." },
      { name: "Kontakt", description: "Sample-based instruments." },
      { name: "Korg Triton", description: "Hardware synth. Iconic sounds." },
    ],
  },
];

export function UsesPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-10">
        <SectionHeader
          eyebrow="Uses"
          title="My Setup & Stack"
          description="The tools, software, and hardware I use day-to-day for payment systems engineering, building music technology, and everything in between."
        />

        <div className="space-y-10">
          {useCategories.map((cat) => (
            <section key={cat.label}>
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 pb-3 border-b border-border">
                {cat.label}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors h-full"
                      >
                        <p className="text-sm font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </a>
                    ) : (
                      <div className="flex flex-col border border-border rounded-lg p-4 h-full">
                        <p className="text-sm font-semibold text-foreground mb-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-14 text-xs font-mono text-muted-foreground">
          Last updated May 2026
        </p>
      </div>
    </PageShell>
  );
}

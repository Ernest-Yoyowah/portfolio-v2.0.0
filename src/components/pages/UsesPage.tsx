"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

interface UseItem {
  name: string;
  description: string;
  link?: string;
}

interface UseCategory {
  label: string;
  color: string;
  items: UseItem[];
}

const useCategories: UseCategory[] = [
  {
    label: "Languages",
    color: "#22d3ee",
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
        description: "System-level tools — CoreMIDI, CoreAudio, native apps.",
      },
    ],
  },
  {
    label: "Frontend",
    color: "#818cf8",
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
    ],
  },
  {
    label: "Backend",
    color: "#34d399",
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
    color: "#a855f7",
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
    color: "#fb923c",
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
    color: "#f472b6",
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
      <div className="container-max section-padding pb-32 pt-12">
        <SectionHeader
          eyebrow="Uses"
          title="My Setup & Stack"
          description="The tools, software, and hardware I use day-to-day for payment systems engineering, building music technology, and everything in between."
        />

        <div className="space-y-12">
          {useCategories.map((cat, catIdx) => (
            <motion.section
              key={cat.label}
              custom={catIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h2
                  className="text-xs font-mono uppercase tracking-[0.2em]"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col glass rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all h-full"
                        style={{ borderTopColor: cat.color + "20" }}
                      >
                        <p
                          className="text-sm font-semibold mb-1 group-hover:text-foreground transition-colors"
                          style={{ color: cat.color }}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </a>
                    ) : (
                      <div
                        className="flex flex-col glass rounded-xl p-4 border border-white/[0.06] h-full"
                        style={{ borderTopColor: cat.color + "15" }}
                      >
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{ color: cat.color }}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center text-xs font-mono text-muted-foreground/40"
        >
          Last updated May 2026
        </motion.p>
      </div>
    </PageShell>
  );
}

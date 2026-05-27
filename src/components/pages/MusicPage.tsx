"use client";

import { motion } from "framer-motion";
import { musicTechCapabilities, musicStack } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function Waveform() {
  const bars = [
    4, 7, 5, 9, 6, 8, 4, 7, 5, 10, 6, 8, 5, 7, 4, 9, 6, 5, 8, 7, 4, 6, 9, 5, 7,
  ];
  return (
    <div className="flex items-end gap-[3px] h-12 my-4" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-violet-400/50"
          style={{ height: `${(h / 10) * 100}%` }}
          animate={{
            height: [
              `${(h / 10) * 100}%`,
              `${(((h % 6) + 2) / 10) * 100}%`,
              `${(h / 10) * 100}%`,
            ],
          }}
          transition={{
            duration: 1.5 + i * 0.05,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}

const stackCategories = [
  "DAW",
  "Synthesis",
  "Sampling",
  "Hardware",
  "System",
  "Language",
  "Framework",
  "Standard",
];

export function MusicPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-12">
        <div
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-violet-600/[0.04] blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <SectionHeader
          eyebrow="Music Systems Engineering"
          title="Native Tools for Professional Musician Workflows"
          description="Building desktop music software, realtime MIDI infrastructure, and live performance systems engineered for the realities of professional performance and production."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative glass rounded-2xl p-8 md:p-10 border border-violet-400/10 overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-purple-600/[0.04] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400/80 mb-3">
                PulseMIDI
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-5">
                Native MIDI Diagnostics &amp;{" "}
                <span className="gradient-text-subtle">
                  Monitoring for macOS
                </span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                PulseMIDI is a native macOS application for MIDI signal
                monitoring, device enumeration, and virtual port routing. Built
                with Swift and SwiftUI for a native macOS experience, using
                CoreMIDI for direct MIDI framework access. Targets Apple Silicon
                and Intel Macs on macOS 12+. Distributed as a standalone
                application with AudioUnit v3 and CLAP plugin support.
              </p>
            </div>
            <div className="glass rounded-xl p-6 border border-violet-400/10">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                PulseMIDI — Live Signal
              </p>
              <Waveform />
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground/60 mt-2">
                <span>Swift + CoreMIDI</span>
                <span>Apple Silicon · Intel</span>
                <span>AudioUnit v3 · CLAP</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 border border-white/[0.06] mb-12"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Tools & Ecosystem
          </p>
          <div className="flex flex-col gap-3">
            {stackCategories.map((cat) => {
              const tools = musicStack.filter((t) => t.category === cat);
              if (tools.length === 0) return null;
              return (
                <div key={cat} className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-muted-foreground/50 w-20 flex-shrink-0 uppercase tracking-wider">
                    {cat}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map((t) => (
                      <span
                        key={t.name}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-500/[0.07] border border-violet-400/15 text-violet-300/80"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {musicTechCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-violet-400/15 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {cap.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/[0.07] border border-violet-400/15 text-violet-300/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl p-8 border border-violet-400/10 text-center overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400/60 mb-4">
            Engineering Philosophy
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Music systems operate under the same reliability requirements as
            production infrastructure — except the user is on stage.
            Low-latency, crash-resistant, and deterministic under live
            conditions.
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}

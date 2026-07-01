"use client";

import { musicTechCapabilities, musicStack } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
      <div className="container-max section-padding pb-32 pt-10">
        <SectionHeader
          eyebrow="Music Systems Engineering"
          title="Native Tools for Professional Musician Workflows"
          description="Building desktop music software, realtime MIDI infrastructure, and live performance systems engineered for the realities of professional performance and production."
        />

        <div className="border border-border rounded-lg p-7 md:p-9 mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            PulseMIDI
          </p>
          <h2 className="text-2xl font-semibold text-foreground leading-tight mb-4">
            Native MIDI Diagnostics & Monitoring for macOS
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            PulseMIDI is a native macOS application for MIDI signal monitoring,
            device enumeration, and virtual port routing. Built with Tauri and
            Rust for a native macOS experience, using CoreMIDI for direct MIDI
            framework access. Targets Apple Silicon and Intel Macs on macOS 12+.
            Distributed as a standalone application with AudioUnit v3 and CLAP
            plugin support.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "React Native",
              "Tauri",
              "CoreMIDI",
              "AudioUnit v3",
              "CLAP SDK",
              "Apple Silicon",
              "Intel",
              "macOS 12+",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded text-xs font-mono border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-border rounded-lg p-6 mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Tools & Ecosystem
          </p>
          <div className="space-y-3">
            {stackCategories.map((cat) => {
              const tools = musicStack.filter((t) => t.category === cat);
              if (tools.length === 0) return null;
              return (
                <div key={cat} className="flex items-start gap-4">
                  <span className="text-xs font-mono text-muted-foreground w-20 flex-shrink-0 uppercase tracking-wider pt-0.5">
                    {cat}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map((t) => (
                      <span
                        key={t.name}
                        className="px-2.5 py-1 rounded text-xs font-mono border border-border text-muted-foreground"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {musicTechCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors duration-200"
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
                    className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-border rounded-lg p-7 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Engineering Philosophy
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Music systems operate under the same reliability requirements as
            production infrastructure — except the user is on stage.
            Low-latency, crash-resistant, and deterministic under live
            conditions.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

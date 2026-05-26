"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { musicTechCapabilities, musicStack } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function Waveform() {
  const bars = [4, 7, 5, 9, 6, 8, 4, 7, 5, 10, 6, 8, 5, 7, 4, 9, 6, 5, 8, 7, 4, 6, 9, 5, 7];
  return (
    <div className="flex items-end gap-[3px] h-10 my-4" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-violet-400/50"
          style={{ height: `${(h / 10) * 100}%` }}
          animate={{
            height: [
              `${(h / 10) * 100}%`,
              `${((h % 6 + 2) / 10) * 100}%`,
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

function CreativeIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative glass rounded-2xl p-7 md:p-9 border border-white/[0.06] overflow-hidden mb-12"
    >
      
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-purple-600/[0.04] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400/80 mb-3">
            Creative Engineering
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-4">
            I Engineer Tools for{" "}
            <span className="gradient-text-subtle">Musicians & Creators</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Music technology isn&apos;t a hobby — it&apos;s a discipline. I build systems that
            give musicians real-time control, reliable performance, and
            expressive freedom. From CoreMIDI routing in Rust to MainStage rigs
            for live worship, I approach music with the same engineering rigor
            as payment systems.
          </p>
        </div>
        <div>
          <div className="glass rounded-xl p-5 border border-violet-400/10">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
              PulseMIDI — Live Signal
            </p>
            <Waveform />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground/60 mt-1">
              <span>CoreMIDI</span>
              <span>127 devices</span>
              <span>0.3ms latency</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ToolStack() {
  const categories = ["DAW", "Synthesis", "Sampling", "Hardware", "System", "Language", "Framework", "Standard"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="glass rounded-2xl p-6 border border-white/[0.06] mb-12"
    >
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
        Tools & Ecosystem
      </p>
      <div className="flex flex-col gap-3">
        {categories.map((cat) => {
          const tools = musicStack.filter((t) => t.category === cat);
          if (tools.length === 0) return null;
          return (
            <div key={cat} className="flex items-center gap-3">
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
  );
}

export function MusicTech() {
  return (
    <section id="music" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />
      
      <div
        className="absolute -top-48 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/[0.03] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <SectionHeader
          eyebrow="Music & Creative Technology"
          title="Engineering Creative Systems"
          description="Where software engineering meets musical craft. Building the tools, workflows, and systems that power expressive performance and creative production."
        />

        <CreativeIntro />

        <ToolStack />

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {musicTechCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group glass rounded-2xl p-5 border border-white/[0.06] hover:border-violet-400/15 transition-all duration-300"
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

        
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-12 glass rounded-2xl p-7 border border-violet-400/10 text-center"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light italic max-w-2xl mx-auto">
            &ldquo;The best music technology disappears. The musician stops
            thinking about the tool and starts thinking about the music.&rdquo;
          </p>
          <p className="mt-3 text-xs font-mono text-violet-400/60 uppercase tracking-wider">
            Creative Philosophy
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

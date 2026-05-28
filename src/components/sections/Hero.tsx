"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

const techPills = ["React", "TypeScript", "Node.js", "Golang", "Swift"];

function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute -top-64 -left-32 w-[700px] h-[700px] rounded-full bg-[#22d3ee]/[0.045] blur-[120px]" />

      <div className="absolute -bottom-48 -right-32 w-[600px] h-[600px] rounded-full bg-violet-600/[0.04] blur-[100px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#22d3ee]/[0.02] blur-[80px]" />

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}

function CurrentRoleCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{
        duration: 0.8,
        delay: 1.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="glass rounded-2xl p-4 min-w-[200px] shadow-2xl"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground font-mono">
            Currently at
          </p>
          <p className="text-xs font-semibold text-foreground">MTN Ghana</p>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-muted-foreground font-mono">
            Role
          </span>
          <span className="text-[11px] font-mono text-foreground">
            Lead Frontend Eng.
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-muted-foreground font-mono">
            Team
          </span>
          <span className="text-[11px] font-mono text-[#22d3ee]">
            MTN Pay · SSP
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-muted-foreground font-mono">
            Stack
          </span>
          <span className="text-[11px] font-mono text-muted-foreground">
            React · Node.js · Go
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function StudiosCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="glass rounded-2xl p-4 min-w-[190px] shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          Ernest Keyz Studios
        </span>
      </div>
      <div className="space-y-1.5">
        {[
          { name: "PulseMIDI", status: "Available" },
          { name: "PulseControl Bridge", status: "Available" },
          { name: "PulseControl Mobile", status: "Android Live" },
        ].map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <span className="text-[10px] text-muted-foreground font-mono">
              {item.name}
            </span>
            <span
              className={`flex items-center gap-1 text-[10px] font-mono ${
                item.status !== "In Dev" ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full inline-block ${
                  item.status !== "In Dev" ? "bg-emerald-400" : "bg-amber-400"
                }`}
              />
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <HeroBackground />

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-[#22d3ee]/20 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-muted-foreground font-mono">
                  Lead Frontend Engineer · MTN Ghana
                </span>
              </div>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                {...fadeUp(0.2)}
                className="text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-tight leading-[1.06]"
              >
                <span className="text-foreground">Software Engineer</span>
                <br />
                <span className="gradient-text">Full-Stack · Payments</span>
                <br />
                <span className="text-foreground/70 text-4xl md:text-5xl lg:text-[3.5rem]">
                  & Native macOS Tools
                </span>
              </motion.h1>
            </div>

            <motion.p
              {...fadeUp(0.35)}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Working at <span className="text-foreground/80">MTN Ghana</span>{" "}
              on payment flows, mobile platforms, and backend services. Also
              building native macOS and cross-platform mobile tools under{" "}
              <span className="text-foreground/80">Ernest Keyz Studios</span>.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22d3ee]/10 border border-[#22d3ee]/25 text-[#22d3ee] text-sm font-medium hover:bg-[#22d3ee]/15 hover:border-[#22d3ee]/40 transition-all"
              >
                View projects
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-medium text-foreground/80 hover:text-foreground transition-all"
              >
                Engineering experience
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.6)}
              className="flex items-center gap-4 pt-1"
            >
              <a
                href="https://github.com/ernestyoyowah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon width={17} height={17} />
              </a>
              <a
                href="https://linkedin.com/in/ernestyoyowah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinIcon width={17} height={17} />
              </a>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-muted-foreground font-mono">
                Based in Accra, Ghana
              </span>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative h-[420px]">
            <div className="absolute top-8 left-0">
              <CurrentRoleCard />
            </div>

            <div className="absolute top-4 right-4">
              <StudiosCard />
            </div>

            <div className="w-56 h-56 rounded-full bg-[#22d3ee]/[0.04] border border-[#22d3ee]/10 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-[#22d3ee]/[0.06] border border-[#22d3ee]/15 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center">
                  <span className="text-[#22d3ee] font-mono font-bold text-xl">
                    EY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.2em]">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

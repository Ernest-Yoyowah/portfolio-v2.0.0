"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

type Project = (typeof projects)[0];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function ProjectCaseStudy({ project }: { project: Project }) {
  const isComingSoon = project.status === "Coming Soon";
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container-max section-padding pt-30 pb-32">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            All Projects
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border"
                style={{
                  color: project.accentColor,
                  borderColor: project.accentColor + "30",
                  backgroundColor: project.accentColor + "10",
                }}
              >
                {project.category}
              </span>
              {isComingSoon ? (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Clock size={9} />
                  Coming Soon
                </span>
              ) : (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-2">
              {project.title}
            </h1>
            <p
              className="text-xl font-mono mb-6"
              style={{ color: project.accentColor + "cc" }}
            >
              {project.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-px w-full mb-8"
            style={{
              background: `linear-gradient(90deg, ${project.accentColor}40 0%, transparent 100%)`,
            }}
          />

          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed mb-12"
          >
            {project.longDescription}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-2 glass rounded-2xl p-6 border border-white/[0.06]"
          >
            <p
              className="text-[10px] font-mono uppercase tracking-[0.2em] mb-4"
              style={{ color: project.accentColor }}
            >
              Key Highlights
            </p>
            <div className="space-y-3">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass rounded-2xl p-6 border border-white/[0.06]"
          >
            <p
              className="text-[10px] font-mono uppercase tracking-[0.2em] mb-4"
              style={{ color: project.accentColor }}
            >
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono border text-muted-foreground"
                  style={{
                    backgroundColor: project.accentColor + "08",
                    borderColor: project.accentColor + "20",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {project.link && !isComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all"
              style={{
                backgroundColor: project.accentColor + "10",
                borderColor: project.accentColor + "30",
                color: project.accentColor,
              }}
            >
              <ExternalLink size={14} />
              View project
            </a>
          </motion.div>
        )}

        {otherProjects.length > 0 && (
          <div className="border-t border-white/[0.06] pt-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Other Projects
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherProjects.map((p, i) => (
                <motion.div
                  key={p.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/projects/${p.id}`}
                    className="group flex items-center justify-between glass rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                        {p.title}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">
                        {p.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

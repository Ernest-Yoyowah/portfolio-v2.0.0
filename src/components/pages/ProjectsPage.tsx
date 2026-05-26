"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function ProjectsPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-12">
        <SectionHeader
          eyebrow="Projects & Systems"
          title="What I've Built"
          description="Production systems, active development, and next-generation tools — across fintech infrastructure and music technology."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const isComingSoon = project.status === "Coming Soon";
            return (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="group relative glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col"
              >
                <div
                  className={`h-px w-full bg-gradient-to-r ${project.gradient.replace("/10", "/40")}`}
                />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
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
                      <h2 className="text-2xl font-semibold text-foreground">
                        {project.title}
                      </h2>
                      <p
                        className="text-sm font-mono mt-1"
                        style={{ color: project.accentColor + "cc" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.longDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/[0.08] text-sm text-muted-foreground hover:text-foreground hover:border-white/[0.14] transition-all"
                    >
                      View case study
                      <ArrowUpRight size={13} />
                    </Link>
                    {project.link && !isComingSoon && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl glass border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-white/[0.14] transition-all"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

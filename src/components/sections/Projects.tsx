"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";
import { ArrowUpRight, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const isComingSoon = project.status === "Coming Soon";

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="group relative glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
    >
      
      <div
        className={`h-px w-full bg-gradient-to-r ${project.gradient.replace("/10", "/40")}`}
      />

      <div className="p-6 md:p-7">
        
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm font-mono mt-0.5" style={{ color: project.accentColor + "cc" }}>
              {project.subtitle}
            </p>
          </div>

          {project.link && !isComingSoon && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 group-hover:opacity-100"
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.longDescription}
        </p>

        
        <div className="space-y-2 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2">
              <div
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="text-xs text-muted-foreground leading-relaxed">{h}</span>
            </div>
          ))}
        </div>

        
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Systems I've Engineered"
          description="Production systems, active development, and next-generation tools — across fintech infrastructure and music technology."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

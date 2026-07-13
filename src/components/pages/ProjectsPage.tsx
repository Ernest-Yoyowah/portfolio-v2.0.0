"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

function statusLabel(status: string) {
  if (status === "Coming Soon") {
    return (
      <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
        Coming Soon
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      {status}
    </span>
  );
}

export function ProjectsPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-10">
        <SectionHeader
          eyebrow="Projects & Systems"
          title="What I've Built"
          description="Production systems and active development — payment infrastructure, telecom platforms, and fleet intelligence."
        />

        <div className="grid lg:grid-cols-2 gap-4">
          {projects.map((project) => {
            const isComingSoon = project.status === "Coming Soon";
            return (
              <div
                key={project.id}
                className="border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="w-px h-3 bg-border" />
                      {statusLabel(project.status)}
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.link && !isComingSoon && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.longDescription}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-border">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View case study
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

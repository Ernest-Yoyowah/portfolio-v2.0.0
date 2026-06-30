"use client";

import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

type Project = (typeof projects)[0];

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

export function ProjectCaseStudy({ project }: { project: Project }) {
  const isComingSoon = project.status === "Coming Soon";
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="container-max section-padding pt-8 pb-32">
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            All Projects
          </Link>
        </div>

        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>
            <span className="w-px h-3 bg-border" />
            {statusLabel(project.status)}
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-1.5">
            {project.title}
          </h1>
          <p className="text-base font-mono text-muted-foreground mb-6">
            {project.subtitle}
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2 border border-border rounded-lg p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Key Highlights
            </p>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.link && !isComingSoon && (
          <div className="mb-14">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            >
              <ExternalLink size={14} />
              View project
            </a>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="pt-10 border-t border-border">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Other Projects
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group flex items-center justify-between border border-border rounded-lg p-4 hover:border-foreground/20 hover:bg-muted/30 transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {p.title}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {p.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

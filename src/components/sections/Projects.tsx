import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

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

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Systems I've Engineered"
          description="Production systems and active tools — across fintech infrastructure and music technology."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article
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
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                {project.link && project.status !== "Coming Soon" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

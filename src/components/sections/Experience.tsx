import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

type SubRole = {
  id: string;
  role: string;
  team: string;
  period: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  stack: string[];
  systems: string[];
};

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Engineering Experience"
          title="Systems Built, Infrastructure Owned"
          description="A record of systems engineered, infrastructure scaled, and financial flows secured."
        />

        <div className="space-y-4">
          {experiences.map((exp) => {
            const roles = (exp as typeof exp & { roles?: SubRole[] }).roles;
            const isGrouped = Array.isArray(roles) && roles.length > 0;

            return (
              <article
                key={exp.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono border border-border rounded px-2 py-0.5 text-muted-foreground uppercase tracking-wider">
                          {exp.type}
                        </span>
                        {exp.isCurrent && !isGrouped && (
                          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Current
                          </span>
                        )}
                        {isGrouped && exp.isCurrent && (
                          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Current
                          </span>
                        )}
                      </div>
                      {isGrouped ? (
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </h3>
                      ) : (
                        <>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {exp.company}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground font-mono flex-shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {isGrouped ? (
                    <div className="space-y-6">
                      {roles!.map((role, rIdx) => (
                        <div
                          key={role.id}
                          className={rIdx > 0 ? "pt-6 border-t border-border" : ""}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {role.isCurrent && (
                                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Current
                                  </span>
                                )}
                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                  {role.team}
                                </span>
                              </div>
                              <h4 className="text-base font-semibold text-foreground">
                                {role.role}
                              </h4>
                            </div>
                            <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground flex-shrink-0">
                              <Calendar size={11} />
                              {role.period}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {role.description}
                          </p>

                          <ul className="space-y-2 mb-5">
                            {role.highlights.map((point, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                            {role.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                            {role.systems.map((sys) => (
                              <span
                                key={sys}
                                className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground bg-muted"
                              >
                                {sys}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {exp.highlights.length > 0 && (
                        <ul className="space-y-2 mb-5">
                          {exp.highlights.map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.systems.map((sys) => (
                          <span
                            key={sys}
                            className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground bg-muted"
                          >
                            {sys}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

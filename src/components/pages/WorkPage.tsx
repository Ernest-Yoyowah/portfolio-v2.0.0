"use client";

import { MapPin, Calendar, Award } from "lucide-react";
import { experiences, techStack, certifications } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

const stackCategories: { label: string; key: keyof typeof techStack }[] = [
  { label: "Languages", key: "languages" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "State Management", key: "stateManagement" },
  { label: "Security", key: "security" },
  { label: "Observability", key: "observability" },
];

export function WorkPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-10">
        <SectionHeader
          eyebrow="Engineering Experience"
          title="Systems Built, Infrastructure Owned"
          description="A detailed record of systems engineered, infrastructure scaled, and financial flows secured."
        />

        <div className="space-y-4 mb-20">
          {experiences.map((exp) => {
            const roles = (exp as typeof exp & { roles?: SubRole[] }).roles;
            const isGrouped = Array.isArray(roles) && roles.length > 0;

            return (
              <article
                key={exp.id}
                className="border border-border rounded-lg p-7 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono border border-border rounded px-2 py-0.5 text-muted-foreground uppercase tracking-wider">
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Current
                        </span>
                      )}
                    </div>
                    {isGrouped ? (
                      <h2 className="text-xl font-semibold text-foreground">
                        {exp.company}
                      </h2>
                    ) : (
                      <>
                        <h2 className="text-xl font-semibold text-foreground">
                          {exp.role}
                        </h2>
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

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

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
                            <h3 className="text-base font-semibold text-foreground">
                              {role.role}
                            </h3>
                          </div>
                          <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground flex-shrink-0">
                            <Calendar size={11} />
                            {role.period}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {role.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-2 mb-5">
                          {role.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2.5">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>

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
                              className="px-2 py-0.5 rounded text-xs font-mono border border-border bg-muted text-muted-foreground"
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
                    {exp.highlights.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {exp.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2.5">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
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
                          className="px-2 py-0.5 rounded text-xs font-mono border border-border bg-muted text-muted-foreground"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>

        <div className="mb-20">
          <SectionHeader
            eyebrow="Certifications"
            title="Courses & Credentials"
            description="Verified certifications from recognized institutions."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="border border-border rounded-lg p-4 flex items-start gap-3"
              >
                <Award size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeader
            eyebrow="Technical Stack"
            title="Tools & Technologies"
            description="The technologies I work with across payment systems and software engineering."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackCategories.map((cat) => (
              <div
                key={cat.key}
                className="border border-border rounded-lg p-5"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {techStack[cat.key].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border rounded-lg p-7 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Interested in working together or want to talk systems engineering?
          </p>
          <a
            href="mailto:ernestniiyoyowah@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </div>
    </PageShell>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
    <section id="experience" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#22d3ee]/[0.025] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <SectionHeader
          eyebrow="Engineering Experience"
          title="Systems Built, Infrastructure Owned"
          description="Not just a job history — a record of systems engineered, infrastructure scaled, and financial flows secured."
        />

        {experiences.map((exp, idx) => {
          const roles = (exp as typeof exp & { roles?: SubRole[] }).roles;
          const isGrouped = Array.isArray(roles) && roles.length > 0;

          return (
            <motion.article
              key={exp.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group relative mb-4"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#22d3ee]/30 via-[#22d3ee]/10 to-transparent ml-[19px] hidden md:block"
                aria-hidden="true"
              />

              <div className="grid md:grid-cols-[48px_1fr] gap-6 md:gap-8">
                <div className="hidden md:flex pt-1.5">
                  <div className="w-10 h-10 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/25 flex items-center justify-center flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22d3ee]" />
                  </div>
                </div>

                <div className="glass rounded-2xl border border-white/[0.06] group-hover:border-[#22d3ee]/15 transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-6 md:p-8 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20 uppercase tracking-wider">
                          {exp.type}
                        </span>
                        {exp.isCurrent && !isGrouped && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      {isGrouped ? (
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                      ) : (
                        <>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-[#22d3ee] font-medium mt-0.5">
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
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      {roles!.map((role, rIdx) => (
                        <div
                          key={role.id}
                          className={
                            rIdx > 0
                              ? "pt-6 mt-6 border-t border-white/[0.05]"
                              : ""
                          }
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {role.isCurrent && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                                    Current
                                  </span>
                                )}
                                <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider">
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

                          <div className="space-y-2 mb-4">
                            {role.highlights.map((point, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle2
                                  size={13}
                                  className="text-[#22d3ee] mt-0.5 flex-shrink-0"
                                />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-white/[0.04]">
                            <div className="flex flex-wrap gap-1.5">
                              {role.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {role.systems.map((sys) => (
                                <span
                                  key={sys}
                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#22d3ee]/[0.06] border border-[#22d3ee]/15 text-[#22d3ee]/80"
                                >
                                  {sys}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-2.5 mb-6">
                        {exp.highlights.map((point, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-[#22d3ee] mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {point}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.06]">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.systems.map((sys) => (
                            <span
                              key={sys}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#22d3ee]/[0.06] border border-[#22d3ee]/15 text-[#22d3ee]/80"
                            >
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

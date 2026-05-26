"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  Award,
} from "lucide-react";
import { experiences, techStack, certifications } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

const stackCategories: {
  label: string;
  key: keyof typeof techStack;
  color: string;
}[] = [
  { label: "Languages", key: "languages", color: "#22d3ee" },
  { label: "Frontend", key: "frontend", color: "#818cf8" },
  { label: "Backend", key: "backend", color: "#34d399" },
  { label: "State Management", key: "stateManagement", color: "#a855f7" },
  { label: "Security", key: "security", color: "#fb923c" },
  { label: "Observability", key: "observability", color: "#f472b6" },
];

export function WorkPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-12">
        <SectionHeader
          eyebrow="Engineering Experience"
          title="Systems Built, Infrastructure Owned"
          description="A detailed record of systems engineered, infrastructure scaled, and financial flows secured."
        />

        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.id}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <div className="glass rounded-2xl p-7 md:p-10 border border-white/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {exp.role}
                  </h2>
                  <p className="text-[#22d3ee] font-medium mt-1 text-lg">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-muted-foreground font-mono flex-shrink-0">
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

              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {exp.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {exp.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      size={14}
                      className="text-[#22d3ee] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {exp.systems.map((sys) => (
                  <span
                    key={sys}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#22d3ee]/[0.06] border border-[#22d3ee]/15 text-[#22d3ee]/80"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

        <div className="mt-20">
          <SectionHeader
            eyebrow="Certifications"
            title="Courses & Credentials"
            description="Verified certifications from recognized institutions."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-5 border border-white/[0.06] flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <Award size={16} className="text-[#22d3ee] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="Technical Stack"
            title="Tools & Technologies"
            description="The technologies I work with across payment systems and software engineering."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackCategories.map((cat, i) => (
              <motion.div
                key={cat.key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass rounded-2xl p-5 border border-white/[0.06]"
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-[0.2em] mb-3"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {techStack[cat.key].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border text-muted-foreground"
                      style={{
                        backgroundColor: cat.color + "08",
                        borderColor: cat.color + "20",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass rounded-2xl p-8 border border-white/[0.06] text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Interested in working together or want to talk systems engineering?
          </p>
          <a
            href="mailto:ernestniiyoyowah@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22d3ee]/10 border border-[#22d3ee]/25 text-[#22d3ee] text-sm font-medium hover:bg-[#22d3ee]/15 transition-all"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </PageShell>
  );
}

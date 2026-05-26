"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const categoryColors: Record<
  string,
  { text: string; bg: string; border: string }
> = {
  "Fintech Engineering": {
    text: "text-[#22d3ee]",
    bg: "bg-[#22d3ee]/10",
    border: "border-[#22d3ee]/20",
  },
  Security: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  "Music Technology": {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-400/20",
  },
  "Reliability Engineering": {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
};

export function WritingPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-12">
        <SectionHeader
          eyebrow="Writing & Insights"
          title="Engineering Notebook"
          description="Thinking in public about payment systems, reliability engineering, music technology, and the craft of building software."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {articles.map((article, i) => {
            const colors =
              categoryColors[article.category] ??
              categoryColors["Fintech Engineering"];
            return (
              <motion.div
                key={article.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
              >
                <Link
                  href={`/writing/${article.id}`}
                  className="group flex flex-col glass rounded-2xl p-7 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${colors.text} ${colors.bg} ${colors.border}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-foreground/90 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <div className="flex gap-1.5 flex-wrap">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors ml-3 flex-shrink-0">
                      <span className="text-[10px] font-mono">
                        {article.date}
                      </span>
                      <ArrowRight
                        size={11}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-8 border border-white/[0.06] text-center"
        >
          <p className="text-sm text-muted-foreground/60 font-mono mb-2">
            Building in public — articles coming soon
          </p>
          <p className="text-sm text-muted-foreground">
            Subscribe via{" "}
            <a
              href="mailto:ernestniiyoyowah@gmail.com"
              className="text-[#22d3ee] hover:underline"
            >
              email
            </a>{" "}
            to get notified when new articles drop.
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}

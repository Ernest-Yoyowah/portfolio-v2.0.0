"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
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

export function Writing() {
  return (
    <section id="writing" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <SectionHeader
          eyebrow="Writing & Insights"
          title="Engineering Notebook"
          description="Thinking in public about payment systems, reliability engineering, music technology, and the craft of building software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {articles.map((article, i) => {
            const colors =
              categoryColors[article.category] ?? categoryColors["Fintech Engineering"];
            return (
              <motion.article
                key={article.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="group glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
              >
                
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${colors.text} ${colors.bg} ${colors.border}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground leading-snug mb-2.5 group-hover:text-foreground/90 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
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
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-[10px] font-mono">{article.date}</span>
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center text-xs font-mono text-muted-foreground/50"
        >
          Articles coming soon — building in public
        </motion.p>
      </div>
    </section>
  );
}

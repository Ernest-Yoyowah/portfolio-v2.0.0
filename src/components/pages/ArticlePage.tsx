"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/data";

type Article = (typeof articles)[0];

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

export function ArticlePage({ article }: { article: Article }) {
  const colors =
    categoryColors[article.category] ?? categoryColors["Fintech Engineering"];
  const otherArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container-max section-padding pt-8 pb-32">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            All Articles
          </Link>
        </motion.div>

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${colors.text} ${colors.bg} ${colors.border}`}
              >
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                <Clock size={9} />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-white/[0.06] text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center mx-auto mb-4">
              <Clock size={20} className="text-[#22d3ee]" />
            </div>
            <p className="text-foreground font-semibold mb-2">
              Article coming soon
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              This article is currently being written. Subscribe to get notified
              when it publishes.
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {otherArticles.length > 0 && (
          <div className="max-w-2xl mt-16 border-t border-white/[0.06] pt-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              More Articles
            </p>
            <div className="space-y-3">
              {otherArticles.map((a, i) => {
                const c =
                  categoryColors[a.category] ??
                  categoryColors["Fintech Engineering"];
                return (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={`/writing/${a.id}`}
                      className="group flex items-center gap-4 glass rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all"
                    >
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border flex-shrink-0 ${c.text} ${c.bg} ${c.border}`}
                      >
                        {a.category.split(" ")[0]}
                      </span>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1 truncate">
                        {a.title}
                      </p>
                      <span className="text-[10px] font-mono text-muted-foreground/50 flex-shrink-0">
                        {a.readTime}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

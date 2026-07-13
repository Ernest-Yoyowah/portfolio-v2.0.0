import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Writing() {
  return (
    <section id="writing" className="py-24 border-t border-border">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Writing"
          title="Engineering Notebook"
          description="Thinking in public about payment systems, reliability engineering, and the craft of building software."
        />

        <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
          {articles.map((article) => (
            <article
              key={article.id}
              className="p-5 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span className="text-xs font-mono text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground flex-shrink-0 mt-0.5">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs font-mono text-muted-foreground">
          Articles in progress — building in public
        </p>
      </div>
    </section>
  );
}

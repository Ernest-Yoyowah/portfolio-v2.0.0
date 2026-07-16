import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function MediumLink() {
  return (
    <a
      href="https://ernestyoyowah.medium.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 border border-border rounded-lg px-4 py-3 mb-4 hover:border-foreground/20 hover:bg-muted/30 transition-all duration-200"
    >
      <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
        <span className="text-background text-xs font-bold leading-none">M</span>
      </div>
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
        Also writing on Medium — payment systems & fintech engineering
      </span>
      <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
    </a>
  );
}

export function Writing() {
  return (
    <section id="writing" className="py-24 border-t border-border">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Writing"
          title="Engineering Notebook"
          description="Thinking in public about payment systems, reliability engineering, and the craft of building software."
        />

        <MediumLink />

        <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
          {articles.slice(0, 3).map((article) => (
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

"use client";

import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/data";

type Article = (typeof articles)[0];

export function ArticlePage({ article }: { article: Article }) {
  const otherArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="container-max section-padding pt-8 pb-32">
        <div className="mb-10">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            All Articles
          </Link>
        </div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {article.category}
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <Clock size={10} />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            {article.excerpt}
          </p>

          <div className="border border-border rounded-lg p-7 text-center">
            <p className="text-sm font-semibold text-foreground mb-1.5">
              Article coming soon
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              This article is being written. Subscribe to get notified when it publishes.
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
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
        </div>

        {otherArticles.length > 0 && (
          <div className="max-w-2xl mt-14 pt-10 border-t border-border">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              More Articles
            </p>
            <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
              {otherArticles.map((a) => (
                <Link
                  key={a.id}
                  href={`/writing/${a.id}`}
                  className="group flex items-center gap-4 p-4 hover:bg-muted/40 transition-colors"
                >
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex-shrink-0">
                    {a.category.split(" ")[0]}
                  </span>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1 truncate">
                    {a.title}
                  </p>
                  <span className="text-xs font-mono text-muted-foreground flex-shrink-0">
                    {a.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

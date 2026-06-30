"use client";

import Link from "next/link";
import { articles } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

export function WritingPage() {
  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-10">
        <SectionHeader
          eyebrow="Writing"
          title="Engineering Notebook"
          description="Thinking in public about payment systems, reliability engineering, music technology, and the craft of building software."
        />

        <div className="divide-y divide-border border border-border rounded-lg overflow-hidden mb-10">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/writing/${article.id}`}
              className="group flex items-start justify-between gap-4 p-6 hover:bg-muted/40 transition-colors"
            >
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
                <h2 className="text-base font-semibold text-foreground leading-snug mb-1.5 group-hover:text-foreground transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <div className="flex gap-1.5 flex-wrap">
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
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="text-xs font-mono text-muted-foreground">
                  {article.date}
                </span>
                <ArrowUpRight
                  size={13}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="border border-border rounded-lg p-6">
          <p className="text-sm font-mono text-muted-foreground mb-1">
            Building in public — articles in progress.
          </p>
          <p className="text-sm text-muted-foreground">
            Get notified when new articles drop:{" "}
            <a
              href="mailto:ernestniiyoyowah@gmail.com"
              className="text-foreground underline underline-offset-2 hover:no-underline"
            >
              ernestniiyoyowah@gmail.com
            </a>
          </p>
        </div>
      </div>
    </PageShell>
  );
}

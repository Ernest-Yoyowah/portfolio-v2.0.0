"use client";

import Link from "next/link";
import { articles } from "@/lib/data";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

function MediumBanner() {
  return (
    <a
      href="https://ernestyoyowah.medium.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 border border-border rounded-lg px-6 py-5 mb-6 hover:border-foreground/20 hover:bg-muted/30 transition-all duration-200"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
          <span className="text-background text-sm font-bold leading-none select-none">M</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground leading-snug">Medium</p>
          <p className="text-xs font-mono text-muted-foreground mt-0.5 truncate">
            ernestyoyowah.medium.com
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <p className="text-xs text-muted-foreground hidden sm:block">Payment systems · Engineering</p>
        <ArrowUpRight
          size={14}
          className="text-muted-foreground group-hover:text-foreground transition-colors"
        />
      </div>
    </a>
  );
}

export function WritingPage() {
  const published = articles.filter((a) => a.date !== "Coming Soon");
  const upcoming = articles.filter((a) => a.date === "Coming Soon");

  return (
    <PageShell backLabel="Home" backHref="/">
      <div className="container-max section-padding pb-32 pt-10">
        <SectionHeader
          eyebrow="Writing"
          title="Engineering Notebook"
          description="Thinking in public about payment systems, reliability engineering, and the craft of building software."
        />

        <MediumBanner />

        {published.length > 0 && (
          <div className="divide-y divide-border border border-border rounded-lg overflow-hidden mb-4">
            {published.map((article) => (
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
                  <h2 className="text-base font-semibold text-foreground leading-snug mb-1.5">
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
                  <span className="text-xs font-mono text-muted-foreground">{article.date}</span>
                  <ArrowUpRight
                    size={13}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}

        {upcoming.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">In Progress</p>
            <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
              {upcoming.map((article) => (
                <Link
                  key={article.id}
                  href={`/writing/${article.id}`}
                  className="group flex items-start justify-between gap-4 p-5 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="w-px h-3 bg-border" />
                      <span className="text-xs font-mono text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h2 className="text-sm font-semibold text-foreground leading-snug mb-1">
                      {article.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground flex-shrink-0 mt-0.5">
                    Soon
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">
            More on Medium:{" "}
            <a
              href="https://ernestyoyowah.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:no-underline"
            >
              ernestyoyowah.medium.com
            </a>
            {" "}· or reach out at{" "}
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

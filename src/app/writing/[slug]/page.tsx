import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedArticle, getPublishedArticles } from "@/content/writing";
import HowMoneyMoves from "@/content/writing/how-money-moves";
import PciDssFrontend from "@/content/writing/pci-dss-frontend";
import { formatMonth } from "@/lib/format";

const bodies: Record<string, ComponentType> = {
  "how-money-moves": HowMoneyMoves,
  "pci-dss-frontend": PciDssFrontend,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedArticles()
    .filter((article) => article.slug in bodies)
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getPublishedArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/writing/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.summary },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  const Body = bodies[slug];
  if (!article || !Body) notFound();

  return (
    <article>
      <header className="mb-10">
        <Link
          href="/writing"
          className="mb-6 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Writing
        </Link>
        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-[1.75rem]">
          {article.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          <time dateTime={article.published}>{formatMonth(article.published, "long")}</time>
          {" · "}
          {article.readingTime}
        </p>
      </header>

      <div className="prose">
        <Body />
      </div>

      <footer className="mt-16 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <Link href="/writing" className="transition-colors hover:text-foreground">
          ← All writing
        </Link>
        {article.mediumUrl && (
          <a
            href={article.mediumUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Also published on Medium ↗
          </a>
        )}
      </footer>
    </article>
  );
}

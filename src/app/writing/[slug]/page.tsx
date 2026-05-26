import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/pages/ArticlePage";
import { articles } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);
  if (!article) notFound();

  return <ArticlePage article={article} />;
}

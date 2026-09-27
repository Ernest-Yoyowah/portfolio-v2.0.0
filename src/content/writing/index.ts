export type Article = {
  slug: string;
  title: string;
  summary: string;
  readingTime: string;
  /** `YYYY-MM`; omitted while the article is a draft. */
  published?: string;
  mediumUrl?: string;
};

export const articles: Article[] = [
  {
    slug: "how-money-moves",
    title: "How Money Actually Moves: Why Every Software Engineer Should Understand This",
    summary:
      "A successful API response doesn’t mean money has moved. Behind every payment is authentication, authorization, ledger commits, settlement and reconciliation, and every step has to be correct and recoverable.",
    readingTime: "12 min read",
    published: "2026-07",
    mediumUrl:
      "https://ernestyoyowah.medium.com/how-money-actually-moves-why-every-software-engineer-should-understand-this-35b807cabdc0",
  },
  {
    slug: "pci-dss-frontend",
    title: "PCI DSS Compliance for Frontend Engineers",
    summary:
      "What frontend engineers building card payment flows actually need to know about PCI DSS, tokenization and hosted checkout.",
    readingTime: "10 min read",
    published: "2026-07",
  },
  {
    slug: "transaction-orchestration",
    title: "Transaction Orchestration in High-Volume Payment Systems",
    summary:
      "Designing transaction pipelines that fail gracefully, from idempotency keys to dead letter queues.",
    readingTime: "8 min read",
  },
  {
    slug: "observability-payments",
    title: "Observability for Payment Systems",
    summary:
      "Dashboards, alerts and distributed tracing for payment infrastructure: what to measure and why.",
    readingTime: "7 min read",
  },
];

export type PublishedArticle = Article & { published: string };

function isPublished(article: Article): article is PublishedArticle {
  return Boolean(article.published);
}

export function getPublishedArticles() {
  return articles
    .filter(isPublished)
    .sort((a, b) => b.published.localeCompare(a.published));
}

export function getDrafts() {
  return articles.filter((article) => !article.published);
}

export function getPublishedArticle(slug: string) {
  return getPublishedArticles().find((article) => article.slug === slug);
}

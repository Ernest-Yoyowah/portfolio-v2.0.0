import type { Metadata } from "next";
import { EntryList } from "@/components/entry-list";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";
import { getDrafts, getPublishedArticles } from "@/content/writing";
import { formatMonth } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Ernest Yoyowah on payment systems and frontend engineering.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const drafts = getDrafts();

  return (
    <>
      <PageHeader
        title="Writing"
        description={
          <>
            Notes on payment systems and frontend engineering. Some are also on{" "}
            <a href={profile.medium} target="_blank" rel="noreferrer" className="link">
              Medium
            </a>
            .
          </>
        }
      />

      <EntryList
        entries={getPublishedArticles().map((article) => ({
          key: article.slug,
          title: article.title,
          description: article.summary,
          meta: formatMonth(article.published),
          href: `/writing/${article.slug}`,
        }))}
      />

      {drafts.length > 0 && (
        <Section title="In progress">
          <ul className="space-y-2 text-muted-foreground">
            {drafts.map((draft) => (
              <li key={draft.slug}>{draft.title}</li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

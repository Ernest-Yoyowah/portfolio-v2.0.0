import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { uses } from "@/content/uses";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "The languages, tools and software Ernest Yoyowah uses for engineering and music.",
  alternates: { canonical: "/uses" },
};

export default function UsesPage() {
  return (
    <>
      <PageHeader
        title="Tech Stack"
        description="What I use day to day, at work and for music."
      />
      <div>
        {uses.map((group) => (
          <Section key={group.label} title={group.label}>
            <dl className="space-y-3 sm:space-y-2">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-4"
                >
                  <dt className="font-medium">{item.name}</dt>
                  <dd className="text-muted-foreground">{item.note}</dd>
                </div>
              ))}
            </dl>
          </Section>
        ))}
      </div>
    </>
  );
}

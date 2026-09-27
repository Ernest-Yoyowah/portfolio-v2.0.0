import type { Metadata } from "next";
import Link from "next/link";
import { EntryList } from "@/components/entry-list";
import { Section } from "@/components/section";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { getPublishedArticles } from "@/content/writing";
import { buttonClass } from "@/lib/button";
import { formatMonth, formatYearRange } from "@/lib/format";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const work = experience.map(({ company, positions }) => {
    const current = positions[0];
    const first = positions[positions.length - 1];
    return {
      key: company,
      title: company,
      description: current.title,
      meta: formatYearRange(first.start, current.end),
    };
  });

  const selectedProjects = projects.slice(0, 4).map((project) => ({
    key: project.slug,
    title: project.name,
    description: project.summary,
    href: `/projects/${project.slug}`,
  }));

  const writing = getPublishedArticles().map((article) => ({
    key: article.slug,
    title: article.title,
    meta: formatMonth(article.published),
    href: `/writing/${article.slug}`,
  }));

  return (
    <>
      <section>
        <h1 className="text-xl font-semibold leading-snug tracking-tight text-balance sm:text-2xl">
          Software engineer in Accra, Ghana, building the platforms behind MTN’s digital services.
        </h1>
        <div className="mt-6 space-y-4 text-prose">
          <p>
            I’m a Lead Frontend Engineer at MTN Ghana. I lead the{" "}
            <Link href="/projects/ssp-platform" className="link text-foreground">
              SSP platform
            </Link>
            , which brings MTN’s self-service products into one place instead of a separate portal
            for each, and the frontend for MTN Pay, the gateway behind Mobile Money, card and
            airtime payments.
          </p>
          <p>
            What drives me is impact more than the stack. Somewhere a mother with a newborn can
            now swap her SIM or pay for a service from home instead of queueing at an MTN shop.
            She’ll never know who built it, and that’s fine.
          </p>
          <p>Outside work I play keys and build software for musicians.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={buttonClass("primary")}>
            Get in touch
          </a>
          <Link href="/about" className={buttonClass("secondary")}>
            More about me
          </Link>
        </div>
      </section>

      <Section title="Work" more={{ href: "/work", label: "Full history" }}>
        <EntryList entries={work} />
      </Section>

      <Section title="Projects" more={{ href: "/projects", label: "All projects" }}>
        <EntryList entries={selectedProjects} />
      </Section>

      <Section title="Writing" more={{ href: "/writing", label: "All writing" }}>
        <EntryList entries={writing} />
      </Section>
    </>
  );
}

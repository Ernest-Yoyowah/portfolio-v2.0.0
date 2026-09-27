import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { certifications, experience, skills, type Position } from "@/content/experience";
import { education } from "@/content/profile";
import { formatMonth, formatMonthRange } from "@/lib/format";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Work history, skills and certifications of Ernest Yoyowah, Lead Frontend Engineer at MTN Ghana.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work"
        description="I’ve been building for the web since 2020. Today I lead frontend architecture at MTN Ghana."
      />

      <div className="space-y-14">
        {experience.map((job) => (
          <article key={job.company}>
            <header className="flex items-baseline justify-between gap-4 border-b pb-2">
              <h2 className="text-base font-semibold">{job.company}</h2>
              <p className="shrink-0 text-sm text-muted-foreground">{job.location}</p>
            </header>
            <div className="mt-5 space-y-8">
              {job.positions.map((position) => (
                <PositionDetails key={position.title} position={position} />
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{job.stack.join(" · ")}</p>
          </article>
        ))}
      </div>

      <Section title="Skills">
        <dl className="space-y-3 sm:space-y-2">
          {skills.map((group) => (
            <div key={group.label} className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4">
              <dt className="text-muted-foreground">{group.label}</dt>
              <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <ul className="space-y-3">
          {education.map((item) => (
            <li key={item.school}>
              <p className="font-medium">{item.qualification}</p>
              <p className="text-muted-foreground">{item.school}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Certifications">
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li key={cert.title} className="flex items-baseline justify-between gap-6">
              <div className="min-w-0">
                <p>{cert.title}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                {formatMonth(cert.date)}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function PositionDetails({ position }: { position: Position }) {
  return (
    <section>
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-medium">
          {position.title}
          {position.team && (
            <span className="font-normal text-muted-foreground"> · {position.team}</span>
          )}
        </h3>
        <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
          {formatMonthRange(position.start, position.end)}
        </p>
      </div>
      <p className="mt-2 text-prose">{position.summary}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-prose marker:text-muted-foreground">
        {position.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  );
}

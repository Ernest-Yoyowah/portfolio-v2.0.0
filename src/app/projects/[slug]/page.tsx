import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { getProject, projects } from "@/content/projects";
import SspPlatform from "@/content/projects/ssp-platform";

const bodies: Record<string, ComponentType> = {
  "ssp-platform": SspPlatform,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  const Body = bodies[project.slug];

  const details = [
    ...(project.role ? [{ label: "Role", value: project.role }] : []),
    { label: "Category", value: project.category },
    { label: "Status", value: project.status },
    { label: "Stack", value: project.stack.join(", ") },
  ];

  return (
    <article>
      <PageHeader
        title={project.name}
        description={project.summary}
        back={{ href: "/projects", label: "Projects" }}
      >
        <dl className="mt-8 space-y-1.5 border-y py-4 text-sm">
          {details.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-4">
              <dt className="text-muted-foreground">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="prose">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <h2>Highlights</h2>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {Body && <Body />}
      </div>

      <nav
        aria-label="More projects"
        className="mt-16 flex justify-between gap-6 border-t pt-6 text-sm"
      >
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className="group min-w-0">
            <span className="block text-muted-foreground">Previous</span>
            <span className="group-hover:underline group-hover:decoration-border group-hover:underline-offset-[3px]">
              {previous.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/projects/${next.slug}`} className="group min-w-0 text-right">
            <span className="block text-muted-foreground">Next</span>
            <span className="group-hover:underline group-hover:decoration-border group-hover:underline-offset-[3px]">
              {next.name}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}

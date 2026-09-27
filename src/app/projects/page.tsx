import type { Metadata } from "next";
import { EntryList } from "@/components/entry-list";
import { PageHeader } from "@/components/page-header";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Platform, payment, telecom, identity and fleet tracking systems Ernest Yoyowah has built or worked on.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Products I’ve built or worked on. Most are internal to MTN Ghana, so the code isn’t public, but each page explains what the system does and where I fit in."
      />
      <EntryList
        entries={projects.map((project) => ({
          key: project.slug,
          title: project.name,
          description: project.summary,
          meta: project.category,
          href: `/projects/${project.slug}`,
        }))}
      />
    </>
  );
}

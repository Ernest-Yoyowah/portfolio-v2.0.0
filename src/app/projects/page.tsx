import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Ernest Yoyowah — MTN Pay, Self Service Portal, MTN Auth, Autosurveil GPS, and more.",
};

export default function Projects() {
  return <ProjectsPage />;
}

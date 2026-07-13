import type { Metadata } from "next";
import { UsesPage } from "@/components/pages/UsesPage";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools, languages, frameworks, and stack Ernest Yoyowah uses for software engineering and payment systems development.",
};

export default function Uses() {
  return <UsesPage />;
}

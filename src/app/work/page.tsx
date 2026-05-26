import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/WorkPage";

export const metadata: Metadata = {
  title: "Work & Experience",
  description:
    "Ernest Yoyowah's engineering experience — Lead Frontend Engineer at MTN Ghana, payment systems, Mobile Money, PCI DSS, and transaction observability.",
};

export default function Work() {
  return <WorkPage />;
}

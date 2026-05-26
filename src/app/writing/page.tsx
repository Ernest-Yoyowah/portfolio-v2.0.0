import type { Metadata } from "next";
import { WritingPage } from "@/components/pages/WritingPage";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Engineering articles by Ernest Yoyowah on payment systems, PCI DSS, and reliability engineering.",
};

export default function Writing() {
  return <WritingPage />;
}

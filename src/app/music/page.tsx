import type { Metadata } from "next";
import { MusicPage } from "@/components/pages/MusicPage";

export const metadata: Metadata = {
  title: "Music Technology",
  description:
    "Ernest Yoyowah's music technology work — PulseMIDI, PulseControl Bridge, CoreMIDI, MainStage live rigs, sound design, and creative engineering.",
};

export default function Music() {
  return <MusicPage />;
}

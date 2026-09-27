import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ernest Yoyowah is a software engineer in Accra, Ghana, leading frontend architecture for MTN Ghana’s self-service platform and payment products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />

      <div className="prose">
        <p>
          I’m a software engineer based in Accra, Ghana, and a Lead Frontend Engineer at MTN
          Ghana. I lead the frontend architecture of the{" "}
          <Link href="/projects/ssp-platform">SSP platform</Link> and MTN Pay, and I’ve spent most
          of the last three years on the products customers use to manage their accounts and move
          money: Mobile Money, card checkout, airtime, SIM services, and the identity checks that
          sit around them.
        </p>

        <p>
          I started in 2020 by building the website for Dkeys Music Institute. It was a small
          project, but it taught me how to work with people who don’t think in code, and how to
          ship something real for a real audience. After that came a short contract at Xcelsz
          fixing mobile layouts, component work on healthcare products at Jadaad Technologies, and a
          full rebuild of the{" "}
          <Link href="/projects/autosurveil">Autosurveil GPS</Link> fleet tracking platform, where I
          owned both the Next.js frontend and the Node.js backend.
        </p>

        <p>
          I joined the MTN Pulse team in July 2023 through Dexwin Tech. The app had grown quickly
          and it showed, so I spent a good part of my first year untangling it. I found more than 15
          structural problems and led a migration that reduced technical debt by 40%. In March 2025
          I was promoted to Lead Frontend Engineer, working on{" "}
          <Link href="/projects/mtn-pay">MTN Pay</Link> and the{" "}
          <Link href="/projects/mtn-ssp">Self Service Portal</Link>.
        </p>

        <p>
          More recently, an architecture review asked a simple question: why do customers need a
          different portal for every service? Account management, eCommerce, SIM swap and business
          services had each grown up as separate sites. I now lead the initiative that answers that
          question: a single platform made of independently deployed micro-frontends, with a
          shared design system underneath that I designed and introduced. Customers get one place
          for everything, and teams still ship on their own schedules.
        </p>

        <h2>Why I do this</h2>

        <p>
          Engineers, me included, can get carried away with tools and stacks. What actually
          excites me is the effect the work has on people’s lives.
        </p>

        <p>
          I often picture a mother at home with a newborn. She can now swap her SIM without
          travelling to an MTN shop, or pay for a service through MTN Pay without stepping outside.
          She will probably never know my name, and she doesn’t need to. Knowing that something I
          built saved her a trip and gave her an easier day is the most fulfilling part of what I
          do.
        </p>

        <p>
          That is also why I care so much about getting the details right. At this scale, a
          confusing screen or a failed payment isn’t an edge case. It’s someone’s afternoon.
        </p>

        <h2>How I work</h2>

        <p>
          Payments are unforgiving. A double tap can charge someone twice, and a success screen
          shown too early turns into a support ticket at best. So I try to understand a flow
          completely before I build it, including every way it can fail, and I treat security
          basics as requirements rather than extras: sanitised input, careful token handling, safe
          redirects, and no card data anywhere near the frontend.
        </p>

        <p>
          I also write about this work. <Link href="/writing/how-money-moves">How Money Actually
          Moves</Link> walks through what happens between tapping Send and the money arriving, and{" "}
          <Link href="/writing/pci-dss-frontend">PCI DSS for Frontend Engineers</Link> covers what
          card compliance means for the people building the checkout.
        </p>

        <h2>Outside work</h2>

        <p>
          I play keys and produce music, mostly in Ableton Live and MainStage. That’s also where my
          side projects come from. PulseMIDI is a macOS MIDI diagnostic and routing tool written in
          Rust with Tauri and React, and PulsePad is a pad controller for live performance. Both
          are still in development.
        </p>

        <h2>Education</h2>

        <p>
          I studied Computer Software Engineering at Ghana Communication Technology University.
          Before that I did General Science with Information Technology at Aggrey Memorial Senior
          High School in Cape Coast, where I served as Head Prefect for Academics.
        </p>

        <h2>Get in touch</h2>

        <p>
          I’m interested in teams building things that genuinely serve people, where technical
          rigour is valued. The best way to reach me is email at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>. I’m also on{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          and{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
}

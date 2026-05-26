import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { FintechSystems } from "@/components/sections/FintechSystems";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";
import { SectionCTA } from "@/components/ui/SectionCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <SectionCTA label="Full experience & certifications" href="/work" />
      <FintechSystems />
      <Projects />
      <SectionCTA label="View all projects" href="/projects" />
      <Writing />
      <SectionCTA label="Read all articles" href="/writing" />
      <Contact />
    </main>
  );
}

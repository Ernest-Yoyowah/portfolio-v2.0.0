import {
  personal,
  experiences,
  certifications,
  projects,
  techStack,
} from "@/lib/data";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function m(query: string, patterns: string[]): boolean {
  return patterns.some((p) => query.includes(p));
}

export function getResponse(input: string): string {
  const q = input.toLowerCase().trim();

  if (
    m(q, [
      "hello",
      "hi ",
      "hi,",
      "hey",
      "sup",
      "good morning",
      "good afternoon",
      "howdy",
      "what's up",
    ])
  ) {
    return `Hi there! Ask me anything about ${personal.name} — his experience, projects, skills, or how to get in touch.`;
  }

  if (m(q, ["how old", "age", "born", "birthday", "year born"])) {
    return `That information isn't available here. You're welcome to reach out directly at ${personal.email}.`;
  }

  if (
    m(q, [
      "who is",
      "who are you",
      "about him",
      "tell me about",
      "introduce",
      "background",
      "summary",
      "bio",
      "what does he do",
    ])
  ) {
    return `${personal.name} is a ${personal.role} based in ${personal.location}. ${personal.description} He has been building software since 2020 across fintech, telecom, and digital services.`;
  }

  if (m(q, ["where", "located", "based", "country", "city"])) {
    return `Ernest is based in Accra, Ghana.`;
  }

  if (
    m(q, [
      "contact",
      "email",
      "reach",
      "hire",
      "phone",
      "linkedin",
      "github",
      "get in touch",
      "talk to",
    ])
  ) {
    return `You can reach Ernest at ${personal.email} or call/WhatsApp ${personal.phone}. He is also on GitHub (${personal.github}) and LinkedIn (${personal.linkedin}).`;
  }

  if (
    m(q, [
      "how many compan",
      "how many jobs",
      "how many roles",
      "companies has he",
      "worked for",
    ])
  ) {
    const companies = [...new Set(experiences.map((e) => e.company))];
    const list = companies.map((c) => `• ${c}`).join("\n");
    return `Ernest has worked at ${companies.length} companies:\n${list}`;
  }

  if (
    m(q, [
      "frontend or backend",
      "backend or frontend",
      "front end or back end",
      "is he full stack",
      "full-stack",
      "fullstack",
      "what type of engineer",
      "what kind of engineer",
    ])
  ) {
    return `Ernest works across the full stack. His primary focus is frontend engineering (React, TypeScript, Next.js), but he also builds backend services with Node.js, MongoDB, and MySQL. He built an API proxy in Golang handling streaming analytics across multiple MTN apps. He describes himself as a software engineer who leads from the frontend, not a developer limited to it.`;
  }

  if (
    m(q, [
      "current job",
      "current role",
      "currently work",
      "where does he work",
      "employer",
      "company",
      "what is he doing now",
    ])
  ) {
    const current = experiences.find((e) => e.isCurrent);
    if (current) {
      return `Ernest currently works as ${current.role} at ${current.company} (${current.period}). ${current.description}`;
    }
  }

  if (
    m(q, [
      "mtn pay",
      "self service",
      "ssp",
      "payment gateway",
      "current team",
      "what team",
    ])
  ) {
    const mtn = experiences.find((e) => e.id === "mtn");
    const role = (mtn as any)?.roles?.find((r: any) => r.id === "mtn-pay-ssp");
    if (role) {
      return `Ernest is currently ${role.role} on the ${role.team} at MTN Ghana (${role.period}). ${role.description} Key work: ${role.highlights.slice(0, 2).join("; ")}.`;
    }
  }

  if (
    m(q, ["mtn pulse", "pulse team", "pulse app", "mymtn", "youth platform"])
  ) {
    const mtn = experiences.find((e) => e.id === "mtn");
    const role = (mtn as any)?.roles?.find(
      (r: any) => r.id === "mtn-pulse-eng",
    );
    if (role) {
      return `Ernest was ${role.role} on the ${role.team} at MTN Ghana (${role.period}). ${role.description} Key work: ${role.highlights.slice(0, 2).join("; ")}.`;
    }
  }

  if (m(q, ["mtn", "ghana telecom"])) {
    const mtn = experiences.find((e) => e.id === "mtn");
    const roles = (mtn as any)?.roles as any[] | undefined;
    if (mtn && roles) {
      return `Ernest has been at MTN Ghana since July 2023 — initially as ${roles[1].role} on the ${roles[1].team} (${roles[1].period}), then promoted to ${roles[0].role} on ${roles[0].team} (${roles[0].period}), where he currently works.`;
    }
  }

  if (m(q, ["jadaad"])) {
    const j = experiences.find((e) => e.id === "jadaad");
    if (j)
      return `At ${j.company} (${j.period}), Ernest worked as a ${j.role}. ${j.description}`;
  }

  if (m(q, ["xcelsz"])) {
    const x = experiences.find((e) => e.id === "xcelsz");
    if (x)
      return `At ${x.company} (${x.period}), Ernest worked as an ${x.role}. ${x.description}`;
  }

  if (m(q, ["dmi", "dkeys"])) {
    const d = experiences.find((e) => e.id === "dmi");
    if (d)
      return `At ${d.company} (${d.period}), Ernest worked as a ${d.role}. ${d.description}`;
  }

  if (
    m(q, [
      "experience",
      "work history",
      "career",
      "employment",
      "roles",
      "jobs",
      "how long",
    ])
  ) {
    const list = experiences
      .map((e) => `• ${e.role} at ${e.company} (${e.period})`)
      .join("\n");
    return `Ernest has ${experiences.length} professional roles:\n${list}`;
  }

  if (
    m(q, [
      "mastercard",
      "mobile money",
      "momo",
      "airtime",
      "pci",
      "dss",
      "payment flow",
    ])
  ) {
    const p = projects.find((p) => p.id === "mtn-pay");
    if (p) return `${p.title} — ${p.description} Stack: ${p.stack.join(", ")}.`;
  }

  if (m(q, ["self-service portal", "sim", "esim", "broadband", "bundle"])) {
    const p = projects.find((p) => p.id === "mtn-ssp");
    if (p) return `${p.title} — ${p.description} Stack: ${p.stack.join(", ")}.`;
  }

  if (
    m(q, ["auth service", "auth0", "identity", "authentication", "mtn auth"])
  ) {
    const p = projects.find((p) => p.id === "mtn-auth");
    if (p) return `${p.title} — ${p.description} Stack: ${p.stack.join(", ")}.`;
  }

  if (m(q, ["autosurveil", "gps", "fleet", "tracking", "vehicle"])) {
    const p = projects.find((p) => p.id === "autosurveil");
    if (p) return `${p.title} — ${p.description} Stack: ${p.stack.join(", ")}.`;
  }

  if (
    m(q, [
      "pulsemidi",
      "midi",
      "swift",
      "swiftui",
      "coremidi",
      "audiounit",
      "clap",
    ])
  ) {
    const p = projects.find((p) => p.id === "pulsemidi");
    if (p) return `${p.title} — ${p.description} Stack: ${p.stack.join(", ")}.`;
  }

  if (
    m(q, [
      "pulsecontrol",
      "pulse control",
      "control bridge",
      "control mobile",
      "wireless midi",
    ])
  ) {
    const bridge = projects.find((p) => p.id === "pulsecontrol-bridge");
    const mobile = projects.find((p) => p.id === "pulsecontrol-mobile");
    return `PulseControl is a two-part system Ernest is building under Ernest Keyz Studios. ${bridge ? `PulseControl Bridge: ${bridge.description}` : ""} ${mobile ? `PulseControl Mobile: ${mobile.description}` : ""}`;
  }

  if (
    m(q, [
      "project",
      "built",
      "build",
      "made",
      "created",
      "developed",
      "work on",
      "portfolio",
    ])
  ) {
    const list = projects
      .map((p) => `• ${p.title} — ${p.subtitle} (${p.status})`)
      .join("\n");
    return `Ernest has worked on ${projects.length} notable projects:\n${list}`;
  }

  if (m(q, ["golang", "go lang"])) {
    return `Ernest uses Golang for high-throughput backend services. He built an API proxy in Golang serving streaming analytics across multiple MTN apps. It is part of his backend stack alongside Node.js.`;
  }

  if (m(q, ["rust"])) {
    return `Ernest has used Rust in past experiments but his current music technology projects (PulseMIDI, PulseControl Bridge) are built in Swift and SwiftUI with CoreMIDI.`;
  }

  if (m(q, ["frontend", "react", "next.js", "nextjs", "tailwind"])) {
    return `Ernest's frontend stack: ${techStack.frontend.join(", ")}. He also uses ${techStack.stateManagement.join(" and ")} for state management. His primary area of expertise is frontend engineering, but he works across the full stack.`;
  }

  if (m(q, ["backend", "server", "node", "database", "mongodb", "api"])) {
    return `Ernest builds backend services using: ${techStack.backend.join(", ")}. He also uses Golang for high-throughput services — including an API proxy he built for streaming analytics across multiple MTN apps.`;
  }

  if (
    m(q, [
      "skill",
      "tech",
      "stack",
      "technolog",
      "language",
      "framework",
      "tools",
      "use",
    ])
  ) {
    return (
      `Ernest's tech stack:\n` +
      `• Languages: ${techStack.languages.join(", ")}\n` +
      `• Frontend: ${techStack.frontend.join(", ")}\n` +
      `• Backend: ${techStack.backend.join(", ")}\n` +
      `• State Management: ${techStack.stateManagement.join(", ")}\n` +
      `• Security: ${techStack.security.join(", ")}`
    );
  }

  if (
    m(q, [
      "certif",
      "course",
      "credential",
      "qualification",
      "study",
      "learn",
      "training",
    ])
  ) {
    const top = certifications
      .slice(0, 6)
      .map((c) => `• ${c.title} (${c.issuer}, ${c.date})`)
      .join("\n");
    return `Ernest has ${certifications.length} verified certifications, including:\n${top}\n...and ${certifications.length - 6} more from Meta, Coursera, University of Michigan, and Microsoft Imagine Cup.`;
  }

  if (
    m(q, ["payment", "fintech", "security", "compliance", "owasp", "fraud"])
  ) {
    return `Ernest specialises in frontend payment integration — Mobile Money, PCI DSS-compliant Mastercard checkout, and airtime flows. He enforces OWASP-aligned security practices and has implemented SIM swap validation and Ghana Card (NIA) integration for high-risk operations.`;
  }

  if (
    m(q, [
      "music",
      "piano",
      "keyboard",
      "ableton",
      "mainstage",
      "musician",
      "producer",
    ])
  ) {
    return `Ernest is also a musician and keyboardist. He builds native music tools under Ernest Keyz Studios — PulseMIDI (Swift + CoreMIDI, AudioUnit v3, CLAP), PulseControl Bridge (macOS desktop MIDI bridge, Network.framework, Bonjour/mDNS), and PulseControl Mobile (iOS/Android wireless controller, in development). His setup includes Ableton Live, MainStage, Studio One, Omnisphere, Kontakt, and a Korg Triton.`;
  }

  if (
    m(q, ["available", "open to work", "looking for", "opportunity", "hire"])
  ) {
    return `You can reach Ernest directly at ${personal.email} or ${personal.phone} to discuss opportunities.`;
  }

  return `I can answer questions about Ernest's experience, projects, skills, certifications, or how to contact him. Try: "What has he built?", "What are his skills?", "Tell me about his experience", or "How do I contact him?"`;
}

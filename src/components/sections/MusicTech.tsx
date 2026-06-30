import { SectionHeader } from "@/components/ui/SectionHeader";
import { musicTechCapabilities, musicStack } from "@/lib/data";

const stackCategories = [
  "DAW",
  "Synthesis",
  "Sampling",
  "Hardware",
  "System",
  "Language",
  "Framework",
  "Standard",
];

export function MusicTech() {
  return (
    <section id="music" className="py-24 border-t border-border">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Music & Creative Technology"
          title="Engineering Creative Systems"
          description="Where software engineering meets musical craft. Building the tools, workflows, and systems that power expressive performance and creative production."
        />

        <div className="border border-border rounded-lg p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Creative Engineering
              </p>
              <h3 className="text-xl font-semibold text-foreground leading-tight mb-4">
                I engineer tools for musicians and creators.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Music technology isn&apos;t a hobby — it&apos;s a discipline. I build
                systems that give musicians real-time control, reliable
                performance, and expressive freedom. From CoreMIDI routing in
                Swift to MainStage rigs for live worship, I approach music with
                the same engineering rigor as payment systems.
              </p>
            </div>
            <div className="border border-border rounded-lg p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Tools & Ecosystem
              </p>
              <div className="space-y-3">
                {stackCategories.map((cat) => {
                  const tools = musicStack.filter((t) => t.category === cat);
                  if (tools.length === 0) return null;
                  return (
                    <div key={cat} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-20 flex-shrink-0 uppercase tracking-wider pt-0.5">
                        {cat}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {tools.map((t) => (
                          <span
                            key={t.name}
                            className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {musicTechCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors duration-200"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                {cap.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <blockquote className="border border-border rounded-lg p-6 text-center">
          <p className="text-base text-muted-foreground leading-relaxed italic max-w-xl mx-auto">
            &ldquo;The best music technology disappears. The musician stops thinking
            about the tool and starts thinking about the music.&rdquo;
          </p>
          <p className="mt-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Creative Philosophy
          </p>
        </blockquote>
      </div>
    </section>
  );
}

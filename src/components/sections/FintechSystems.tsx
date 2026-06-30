import { SectionHeader } from "@/components/ui/SectionHeader";
import { fintechCapabilities } from "@/lib/data";
import {
  Smartphone,
  CreditCard,
  Zap,
  Shield,
  Activity,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  CreditCard,
  Zap,
  Shield,
  Activity,
  GitBranch,
};

const flowNodes = ["Client App", "API Gateway", "Payment Engine", "MoMo / Card"];

export function FintechSystems() {
  return (
    <section id="systems" className="py-24 border-t border-border">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Fintech Systems"
          title="Payment Infrastructure Expertise"
          description="Deep experience building the critical systems that move money — securely, reliably, and at scale in telecom and digital commerce environments."
        />

        <div className="border border-border rounded-lg p-5 mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Transaction Flow
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {flowNodes.map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded border border-border text-xs font-mono text-muted-foreground">
                  {node}
                </span>
                {i < flowNodes.length - 1 && (
                  <span className="text-muted-foreground text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fintechCapabilities.map((cap) => {
            const Icon = iconMap[cap.icon] ?? Activity;
            return (
              <div
                key={cap.title}
                className="border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded border border-border flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {cap.title}
                  </h3>
                </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

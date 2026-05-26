"use client";

import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function TransactionFlow() {
  const nodes = [
    { label: "Client App", color: "#22d3ee" },
    { label: "API Gateway", color: "#818cf8" },
    { label: "Payment Engine", color: "#22d3ee" },
    { label: "MoMo / Card", color: "#34d399" },
  ];

  return (
    <div className="glass rounded-2xl p-6 border border-white/[0.06]">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Transaction Flow
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: "backOut" }}
              className="px-3 py-1.5 rounded-lg border text-xs font-mono"
              style={{
                borderColor: node.color + "30",
                backgroundColor: node.color + "10",
                color: node.color,
              }}
            >
              {node.label}
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.1, duration: 0.3 }}
                className="h-px w-6 bg-white/20 origin-left"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FintechSystems() {
  return (
    <section id="systems" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#22d3ee]/[0.02] blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <SectionHeader
          eyebrow="Fintech Systems"
          title="Payment Infrastructure Expertise"
          description="Deep experience building the critical systems that move money — securely, reliably, and at scale in telecom and digital commerce environments."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mb-12"
        >
          <TransactionFlow />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fintechCapabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Activity;
            return (
              <motion.div
                key={cap.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="group glass rounded-2xl p-5 glass-hover border border-white/[0.06] hover:border-[#22d3ee]/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22d3ee]/15 transition-colors">
                    <Icon size={16} className="text-[#22d3ee]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/[0.07] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

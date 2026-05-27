"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import type { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    handle: "@ernestyoyowah",
    href: "https://github.com/Ernest-Yoyowah",
    icon: GithubIcon,
    description: "Code & open source",
  },
  {
    label: "LinkedIn",
    handle: "Ernest Yoyowah",
    href: "https://linkedin.com/in/ernestyoyowah",
    icon: LinkedinIcon,
    description: "Professional profile",
  },
  {
    label: "Email",
    handle: "ernestniiyoyowah@gmail.com",
    href: "mailto:ernestniiyoyowah@gmail.com",
    icon: Mail,
    description: "Direct contact",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#22d3ee]/[0.03] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-[#22d3ee] opacity-80 mb-4"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1] mb-4"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">remarkable</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="text-base text-muted-foreground leading-relaxed mb-3"
          >
            Whether you&apos;re building payment infrastructure, exploring
            creative technology, or want to talk systems engineering — I&apos;m
            open to interesting conversations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex items-center justify-center gap-1.5 text-xs font-mono text-muted-foreground/60 mb-12"
          >
            <MapPin size={11} />
            Based in Accra, Ghana
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            {socialLinks.map(
              ({ label, handle, href, icon: Icon, description }, i) => (
                <motion.a
                  key={label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-3 px-5 py-3.5 rounded-xl glass border border-white/[0.07] hover:border-white/[0.14] transition-all duration-200 text-left flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-[#22d3ee]/10 group-hover:text-[#22d3ee] transition-all">
                    <Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground/60 font-mono">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground truncate transition-colors">
                      {handle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-muted-foreground/40 group-hover:text-[#22d3ee] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                  />
                </motion.a>
              ),
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="mailto:ernestniiyoyowah@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#22d3ee]/10 border border-[#22d3ee]/25 text-[#22d3ee] font-medium text-sm hover:bg-[#22d3ee]/15 hover:border-[#22d3ee]/40 transition-all"
            >
              <Mail size={15} />
              Send a message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

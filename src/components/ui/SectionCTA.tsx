"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionCTAProps {
  label: string;
  href: string;
}

export function SectionCTA({ label, href }: SectionCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="container-max section-padding -mt-8 mb-4"
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#22d3ee] transition-colors"
      >
        {label}
        <ArrowRight
          size={13}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageShellProps {
  children: React.ReactNode;
  backLabel?: string;
  backHref?: string;
}

export function PageShell({
  children,
  backLabel = "Home",
  backHref = "/",
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="container-max section-padding pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            {backLabel}
          </Link>
        </motion.div>
      </div>
      {children}
    </div>
  );
}

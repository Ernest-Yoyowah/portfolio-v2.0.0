"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Music", href: "/music" },
  { label: "Writing", href: "/writing" },
  { label: "Uses", href: "/uses" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-white/[0.06] py-3"
            : "py-5 bg-transparent",
        )}
      >
        <div className="container-max section-padding flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Ernest Yoyowah — Home"
          >
            <div className="w-7 h-7 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center transition-all group-hover:bg-[#22d3ee]/20">
              <span className="text-[#22d3ee] text-xs font-mono font-bold">
                E
              </span>
            </div>
            <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              Ernest Yoyowah
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-sm rounded-md transition-colors",
                    isActive
                      ? "text-foreground bg-white/[0.06] font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:ernestniiyoyowah@gmail.com"
              className="px-4 py-1.5 rounded-lg text-sm font-medium bg-white/[0.06] border border-white/[0.08] text-foreground/80 hover:text-foreground hover:bg-white/[0.1] transition-all"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 glass border-b border-white/[0.06] md:hidden"
          >
            <nav
              className="section-padding py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "px-3 py-2.5 text-sm rounded-md transition-colors",
                      isActive
                        ? "text-foreground bg-white/[0.06] font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="mailto:ernestniiyoyowah@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-3 py-2.5 rounded-lg text-sm font-medium bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-center"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

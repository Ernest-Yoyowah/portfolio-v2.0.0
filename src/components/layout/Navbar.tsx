"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Uses", href: "/uses" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 bg-background transition-all duration-200",
          scrolled && "border-b border-border",
        )}
      >
        <div className="container-max section-padding flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground tracking-tight"
            aria-label="Ernest Yoyowah — Home"
          >
            Ernest Yoyowah
          </Link>

          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-sm rounded-md transition-colors",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
            <a
              href="mailto:ernestniiyoyowah@gmail.com"
              className="hidden md:inline-flex items-center px-3.5 py-1.5 text-sm rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity ml-2"
            >
              Get in touch
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ml-1"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 md:hidden transition-opacity duration-200",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        style={{ top: "3.5rem", background: "rgba(0,0,0,0.35)" }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed inset-x-0 top-14 z-40 md:hidden bg-background border-b border-border shadow-xl transition-all duration-200 origin-top",
          menuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none",
        )}
      >
        <nav
          className="section-padding pt-2 pb-5 flex flex-col"
          aria-label="Mobile navigation"
        >
          <div className="space-y-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-3.5 rounded-lg text-sm transition-colors",
                    isActive
                      ? "text-foreground font-medium bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <a
              href="mailto:ernestniiyoyowah@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-lg text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

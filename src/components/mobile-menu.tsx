"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/icons";
import { profile } from "@/content/profile";
import { isActive, mainNav, socialLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close when navigation happens, including browser back/forward.
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 640px)").matches) setOpen(false);
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted"
      >
        <span aria-hidden="true" className="relative h-3.5 w-[18px]">
          <span
            className={cn(
              "absolute inset-x-0 top-[3px] h-[1.5px] rounded-full bg-current transition-transform duration-200",
              open && "translate-y-[3.25px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute inset-x-0 bottom-[3px] h-[1.5px] rounded-full bg-current transition-transform duration-200",
              open && "-translate-y-[3.25px] -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col overflow-y-auto bg-background px-5 pt-2 pb-8 transition duration-200",
          open ? "opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile">
          <ul>
            {[...mainNav, { href: "/uses", label: "Tech Stack" }].map(
              ({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <li key={href} className="border-b">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-4 text-lg font-medium",
                        !active && "text-muted-foreground",
                      )}
                    >
                      {label}
                      <ChevronRightIcon className="size-4 text-muted-foreground" />
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </nav>

        <div className="mt-auto pt-10">
          <a
            href={`mailto:${profile.email}`}
            className="flex h-11 items-center justify-center rounded-md bg-foreground text-sm font-medium text-background"
          >
            Get in touch
          </a>
          <ul className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {label}
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive, mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <ul className={cn("items-center gap-1", className)}>
      {mainNav.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
                active ? "font-medium text-foreground" : "text-muted-foreground",
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

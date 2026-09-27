import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLinks } from "@/components/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-14 border-b bg-background">
      <nav
        aria-label="Main"
        className="mx-auto flex h-full w-full max-w-2xl items-center justify-between px-5 sm:px-6"
      >
        <Link href="/" className="-ml-1 rounded-md px-1 py-1 font-semibold tracking-tight">
          {profile.name}
        </Link>
        <div className="-mr-2 flex items-center gap-1">
          <NavLinks className="hidden sm:flex" />
          <span aria-hidden="true" className="mx-1.5 hidden h-4 w-px bg-border sm:block" />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

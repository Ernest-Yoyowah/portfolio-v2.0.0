import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { profile } from "@/content/profile";
import { socialLinks } from "@/lib/navigation";

const linkClass =
  "inline-flex items-center gap-1 transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-5 pb-10 sm:px-6">
      <div className="flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/uses" className={linkClass}>
              Tech Stack
            </Link>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className={linkClass}>
              Email
            </a>
          </li>
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                {label}
                <ArrowUpRightIcon className="size-3" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

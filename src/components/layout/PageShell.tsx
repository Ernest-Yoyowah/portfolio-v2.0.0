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
    <div className="min-h-screen bg-background pt-14">
      <div className="container-max section-padding pt-8 pb-2">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          {backLabel}
        </Link>
      </div>
      {children}
    </div>
  );
}

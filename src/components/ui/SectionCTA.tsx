import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionCTAProps {
  label: string;
  href: string;
}

export function SectionCTA({ label, href }: SectionCTAProps) {
  return (
    <div className="container-max section-padding -mt-6 mb-4">
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
        <ArrowRight
          size={13}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </Link>
    </div>
  );
}

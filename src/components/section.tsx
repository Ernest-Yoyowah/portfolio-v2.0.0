import Link from "next/link";

type SectionProps = {
  title: string;
  more?: { href: string; label: string };
  children: React.ReactNode;
};

export function Section({ title, more, children }: SectionProps) {
  return (
    <section className="mt-16 first:mt-0">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 className="font-semibold tracking-tight">{title}</h2>
        {more && (
          <Link
            href={more.href}
            className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {more.label}{" "}
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

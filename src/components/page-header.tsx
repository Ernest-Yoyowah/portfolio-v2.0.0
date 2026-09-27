import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description?: React.ReactNode;
  back?: { href: string; label: string };
  children?: React.ReactNode;
};

export function PageHeader({ title, description, back, children }: PageHeaderProps) {
  return (
    <header className="mb-12">
      {back && (
        <Link
          href={back.href}
          className="mb-6 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← {back.label}
        </Link>
      )}
      <h1 className="text-2xl font-semibold tracking-tight text-balance">{title}</h1>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
      {children}
    </header>
  );
}

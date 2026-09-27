import { cn } from "@/lib/utils";

type NoteProps = {
  title?: string;
  tone?: "default" | "warning";
  children: React.ReactNode;
};

export function Note({ title, tone = "default", children }: NoteProps) {
  return (
    <aside
      className={cn(
        "rounded-md border-l-2 px-4 py-3 text-[0.9375rem] leading-relaxed",
        tone === "warning"
          ? "border-red-500/70 bg-red-500/[0.05]"
          : "border-foreground/25 bg-muted",
      )}
    >
      {title && <p className="mb-1 font-semibold text-foreground">{title}</p>}
      <div className="[&>*+*]:mt-2">{children}</div>
    </aside>
  );
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-2 border-foreground py-1 pl-5 text-lg font-medium leading-relaxed text-foreground text-balance">
      {children}
    </p>
  );
}

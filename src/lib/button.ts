import { cn } from "@/lib/utils";

const base =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors";

const variants = {
  primary: "bg-foreground text-background hover:bg-foreground/85",
  secondary: "border bg-background hover:bg-muted",
};

export function buttonClass(variant: keyof typeof variants = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

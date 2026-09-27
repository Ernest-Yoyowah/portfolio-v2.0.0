import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";

export type Entry = {
  key: string;
  title: string;
  description?: string;
  meta?: string;
  href?: string;
};

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="-mx-3 space-y-0.5">
      {entries.map((entry) => (
        <li key={entry.key}>
          {entry.href ? (
            <Link
              href={entry.href}
              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
            >
              <EntryContent entry={entry} />
              <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          ) : (
            <div className="px-3 py-2.5">
              <EntryContent entry={entry} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function EntryContent({ entry }: { entry: Entry }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline justify-between gap-6">
        <p className="min-w-0 font-medium">{entry.title}</p>
        {entry.meta && (
          <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{entry.meta}</span>
        )}
      </div>
      {entry.description && <p className="text-muted-foreground">{entry.description}</p>}
    </div>
  );
}

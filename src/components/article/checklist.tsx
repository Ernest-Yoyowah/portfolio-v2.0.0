"use client";

import { useState } from "react";

export type ChecklistGroup = {
  label: string;
  items: string[];
};

export function Checklist({ groups }: { groups: ChecklistGroup[] }) {
  const [checked, setChecked] = useState<ReadonlySet<string>>(new Set());
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  function toggle(item: string) {
    setChecked((previous) => {
      const next = new Set(previous);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  }

  return (
    <div className="rounded-md border px-4 py-4 sm:px-5">
      <p className="text-sm text-muted-foreground" aria-live="polite">
        {checked.size} of {total} checked
      </p>
      {groups.map((group) => (
        <fieldset key={group.label} className="mt-5">
          <legend className="text-sm font-semibold text-foreground">{group.label}</legend>
          <div className="mt-2">
            {group.items.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-start gap-3 py-1.5 text-[0.9375rem] leading-relaxed"
              >
                <input
                  type="checkbox"
                  checked={checked.has(item)}
                  onChange={() => toggle(item)}
                  className="mt-[0.3rem] size-4 shrink-0 accent-foreground"
                />
                <span className={checked.has(item) ? "text-muted-foreground line-through" : undefined}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}

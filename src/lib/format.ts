const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const longMonthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** Parses a `YYYY-MM` string as the first day of that month (UTC). */
function parseMonth(value: string) {
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1));
}

export function formatMonth(value: string, style: "short" | "long" = "short") {
  const formatter = style === "long" ? longMonthYear : monthYear;
  return formatter.format(parseMonth(value));
}

export function formatMonthRange(start: string, end?: string) {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

export function formatYearRange(start: string, end?: string) {
  const startYear = start.slice(0, 4);
  if (!end) return `${startYear} – Present`;
  const endYear = end.slice(0, 4);
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`;
}

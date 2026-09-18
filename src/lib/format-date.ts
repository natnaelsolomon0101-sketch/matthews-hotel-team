/**
 * "2026-04-15" -> "April 15, 2026". UTC on purpose, so a date never shifts a
 * day with the build machine's timezone. Returns the input if it is not a date.
 *
 * Only for dates that already exist in a data module. Never pass `new Date()`:
 * a visible "updated" date that moves on every build is a false claim.
 */
export function formatDate(iso: string): string {
  const d = new Date(`${iso.slice(0, 10)}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

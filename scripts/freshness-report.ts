/**
 * Freshness report. Item 3 of "What the repo agents can do automatically
 * every week" in geo/11-everything-needed.md.
 *
 * Lists the published pages whose visible `lastUpdated` stamp has gone stale
 * and the statistics on /data/hotel-financing-statistics whose `verified`
 * date (the day a person here last opened the link) has gone stale. Prints a
 * markdown report; a human or the Site Maintainer decides what to re-read.
 *
 *   npx tsx scripts/freshness-report.ts              # 90-day threshold
 *   npx tsx scripts/freshness-report.ts --days 180
 *   npx tsx scripts/freshness-report.ts --today 2026-10-05
 *
 * Exit code 0 = nothing stale, 1 = at least one page or stat is over the
 * threshold.
 *
 * Three rules this script exists to hold, from geo/AGENTS.md:
 *
 *   - It reports, it never edits. A stale date means "someone should re-read
 *     the source", not "bump the date". Bumping `lastUpdated` without
 *     re-reading the source is the exact dishonesty the stamp exists to
 *     prevent.
 *   - It sends no requests anywhere. Dates come from the typed data modules,
 *     so nothing is fetched and matthewshotelmarkets.com is never touched.
 *   - "Today" is authored, never derived from the clock inside a rendered
 *     page. The default is the real date at run time because this is a
 *     script, not a page, and `--today` keeps the output reproducible.
 */
import { answerPages, answerPath } from "../src/lib/data/answers";
import { glossary } from "../src/lib/data/glossary";
import { tools } from "../src/lib/data/tools";
import { STATS } from "../src/lib/rates/statistics";

type Row = { path: string; date: string; age: number; label: string };

function num(args: string[], flag: string, fallback: number): number {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] ? Number(args[i + 1]) : fallback;
}

function str(args: string[], flag: string, fallback: string): string {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
}

function daysBetween(fromIso: string, toIso: string): number {
  const a = Date.parse(`${fromIso}T00:00:00Z`);
  const b = Date.parse(`${toIso}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return Number.NaN;
  return Math.round((b - a) / 86_400_000);
}

function table(rows: Row[], dateHeader: string): string {
  const head = `| Age | ${dateHeader} | Page |\n| --- | --- | --- |`;
  return [
    head,
    ...rows.map((r) => `| ${r.age} days | ${r.date} | ${r.label} |`),
  ].join("\n");
}

function main() {
  const args = process.argv.slice(2);
  const days = num(args, "--days", 90);
  const today = str(args, "--today", new Date().toISOString().slice(0, 10));

  const pages: Row[] = [];
  const collect = (path: string, date: string | undefined) => {
    if (!date) return;
    const age = daysBetween(date, today);
    if (Number.isNaN(age)) {
      console.error(`unparseable date on ${path}: ${date}`);
      process.exit(2);
    }
    pages.push({ path, date, age, label: path });
  };

  for (const page of answerPages) collect(answerPath(page), page.lastUpdated);
  for (const entry of glossary) collect(`/glossary/${entry.slug}`, entry.lastUpdated);
  for (const tool of tools) collect(`/tools/${tool.slug}`, tool.lastUpdated);

  const stats: Row[] = STATS.map((s) => ({
    path: s.id,
    date: s.verified,
    age: daysBetween(s.verified, today),
    label: `\`${s.id}\` (${s.publisher})`,
  }));

  const stalePages = pages.filter((r) => r.age > days).sort((a, b) => b.age - a.age);
  const staleStats = stats.filter((r) => r.age > days).sort((a, b) => b.age - a.age);

  const out: string[] = [];
  out.push(`# Freshness report, ${today}`);
  out.push("");
  out.push(
    `${pages.length} published pages carry a visible "last updated" stamp and ${stats.length} statistics carry a \`verified\` date. ` +
      `${stalePages.length} pages and ${staleStats.length} statistics are more than ${days} days old.`,
  );
  out.push("");
  out.push(
    "A stale date is not an error. It means nobody has re-read the sources behind that page since the date shown. " +
      "Re-read the source first and only then change the page: bumping the stamp without re-reading the source is exactly what the stamp exists to prevent.",
  );

  if (stalePages.length) {
    out.push("", `## Pages not updated in over ${days} days`, "");
    out.push(table(stalePages, "Last updated"));
  }
  if (staleStats.length) {
    out.push("", `## Statistics not re-verified in over ${days} days`, "");
    out.push(table(staleStats, "Verified"));
    out.push(
      "",
      "Each of these is one sentence, one number and one link on /data/hotel-financing-statistics. " +
        "Open the link, read the number off the page, and update `verified`. If the source now says something different, " +
        "that is a number change and it needs the old value, the new value and the URL in the PR description.",
    );
  }
  if (!stalePages.length && !staleStats.length) {
    out.push("", `Nothing is older than ${days} days.`);
  }

  console.log(out.join("\n"));
  process.exit(stalePages.length || staleStats.length ? 1 : 0);
}

main();

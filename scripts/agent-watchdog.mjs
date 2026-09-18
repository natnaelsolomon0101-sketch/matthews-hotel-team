// Agent watchdog. Reads geo/agent-log.md on main and reports whether each
// scheduled site agent has logged a run recently enough. A run only lands in
// the log when its PR merges, so a stuck PR counts as a missed run, which is
// what we want to hear about.
//
//   node scripts/agent-watchdog.mjs [YYYY-MM-DD]   # date defaults to today (UTC)
//
// Prints a markdown report. Exit code 0 = healthy, 1 = at least one agent overdue.
import fs from "node:fs";

// Before these dates an agent has not had its first scheduled run yet, so its
// silence is not a failure.
const RULES = {
  writer: { label: "Content Writer (weekdays 14:00 UTC)", firstRun: "2026-09-21" },
  maintainer: { label: "Site Maintainer (Mondays 13:00 UTC)", firstRun: "2026-09-21", maxDays: 8 },
  rates: { label: "Rate Sheet (1st of month 13:00 UTC)", firstRun: "2026-10-01" },
};

const today = process.argv[2] ?? new Date().toISOString().slice(0, 10);
const log = fs.readFileSync("geo/agent-log.md", "utf8");

const last = {};
for (const line of log.split("\n")) {
  const m = /^(\d{4}-\d{2}-\d{2}) \| (\w+) \|/.exec(line.trim());
  if (!m) continue;
  const [, date, role] = m;
  if (!last[role] || date > last[role]) last[role] = date;
}

const day = (s) => new Date(`${s}T00:00:00Z`);
const daysBetween = (a, b) => Math.round((day(b) - day(a)) / 86400000);
function weekdaysAfter(from, to) {
  // Weekdays d with from < d <= to.
  let n = 0;
  for (let d = day(from); ; ) {
    d = new Date(d.getTime() + 86400000);
    if (d > day(to)) break;
    const w = d.getUTCDay();
    if (w !== 0 && w !== 6) n++;
  }
  return n;
}

const problems = [];
const rows = [];
for (const [role, rule] of Object.entries(RULES)) {
  const seen = last[role];
  let status = "OK";
  if (today < rule.firstRun) {
    status = `not due yet (first run ${rule.firstRun})`;
  } else if (role === "writer") {
    const since = seen && seen >= rule.firstRun ? seen : prev(rule.firstRun);
    const missed = weekdaysAfter(since, today);
    if (missed >= 2) status = `OVERDUE: ${missed} weekday runs with no log entry since ${seen ?? "never"}`;
  } else if (role === "maintainer") {
    const since = seen && seen >= rule.firstRun ? seen : prev(rule.firstRun);
    const gap = daysBetween(since, today);
    if (gap > rule.maxDays) status = `OVERDUE: ${gap} days since ${seen ?? "never"}`;
  } else if (role === "rates") {
    const month = today.slice(0, 7);
    const dom = Number(today.slice(8, 10));
    if (dom >= 2 && !(seen && seen.startsWith(month)))
      status = `OVERDUE: no ${month} edition logged (last ${seen ?? "never"})`;
  }
  if (status.startsWith("OVERDUE")) problems.push(`${rule.label}: ${status}`);
  rows.push(`| ${rule.label} | ${seen ?? "never"} | ${status} |`);
}

function prev(d) {
  return new Date(day(d).getTime() - 86400000).toISOString().slice(0, 10);
}

console.log(`## Site agent watchdog, ${today}\n`);
console.log(`| Agent | Last logged run | Status |\n|---|---|---|\n${rows.join("\n")}\n`);
if (problems.length) {
  console.log(
    "A missed run means the routine did not fire, failed, or left its PR unmerged because the ship gate failed.\n" +
      "Check https://claude.ai/code/routines (run history and logs) and open PRs on `agent/*` branches.",
  );
}
process.exit(problems.length ? 1 : 0);

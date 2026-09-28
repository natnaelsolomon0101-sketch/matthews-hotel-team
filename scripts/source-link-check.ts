/**
 * Source-link check. Item 2 of "What the repo agents can do automatically
 * every week" in geo/11-everything-needed.md.
 *
 * Reads every external source URL out of the typed data modules (answer
 * pages, glossary terms, tool pages, the rate sheet's source catalog and the
 * statistics file), fetches each one once with a browser user agent, and
 * prints a markdown report naming the page each URL is cited on.
 *
 *   npx tsx scripts/source-link-check.ts            # check everything
 *   npx tsx scripts/source-link-check.ts --limit 20 # first 20 URLs
 *   npx tsx scripts/source-link-check.ts --delay 2000
 *
 * Exit code 0 = nothing dead, 1 = at least one dead or moved link.
 *
 * Three rules this script exists to hold, from geo/AGENTS.md:
 *
 *   - A 403, a 429 or a timeout is NOT a dead link. Plenty of publishers
 *     (CBRE, STR, hospitalitynet, several state franchise registries) answer
 *     403 to anything that is not a real browser. Those land in a separate
 *     "could not check" table and never set the exit code. A human confirms
 *     them before anything is edited.
 *   - It never touches matthewshotelmarkets.com. Our own URLs are skipped,
 *     and one request per URL means no loops at anyone.
 *   - It never edits a page. It reports, and a person decides.
 */
import { answerPages, answerPath } from "../src/lib/data/answers";
import { glossary } from "../src/lib/data/glossary";
import { tools } from "../src/lib/data/tools";
import { RATE_SOURCES } from "../src/lib/rates/sources";
import { STATS } from "../src/lib/rates/statistics";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

const OWN_HOST = /(^|\.)matthewshotelmarkets\.com$/i;

/** Dead, as opposed to blocked. Only these set the exit code. */
const DEAD = new Set([404, 410, 451]);

type Citation = { url: string; where: string[] };

function collect(): Citation[] {
  const byUrl = new Map<string, Set<string>>();
  const add = (url: string | undefined, where: string) => {
    if (!url) return;
    let host: string;
    try {
      const u = new URL(url);
      if (u.protocol !== "http:" && u.protocol !== "https:") return;
      host = u.host;
    } catch {
      return;
    }
    if (OWN_HOST.test(host.replace(/:\d+$/, ""))) return;
    const set = byUrl.get(url) ?? new Set<string>();
    set.add(where);
    byUrl.set(url, set);
  };

  for (const page of answerPages) {
    const path = answerPath(page);
    for (const s of page.sources ?? []) add(s.url, path);
  }
  for (const entry of glossary) {
    for (const s of entry.sources ?? []) add(s.url, `/glossary/${entry.slug}`);
  }
  for (const tool of tools) {
    for (const s of tool.sources ?? []) add(s.url, `/tools/${tool.slug}`);
  }
  for (const s of RATE_SOURCES) add(s.url, `/rates (${s.id})`);
  for (const s of STATS) add(s.url, `/data/hotel-financing-statistics (${s.id})`);

  return [...byUrl.entries()]
    .map(([url, where]) => ({ url, where: [...where].sort() }))
    .sort((a, b) => a.url.localeCompare(b.url));
}

type Result = Citation & {
  status: number | "error";
  finalUrl: string;
  detail?: string;
};

async function check(c: Citation, timeoutMs: number): Promise<Result> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(c.url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": UA,
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    return { ...c, status: res.status, finalUrl: res.url || c.url };
  } catch (err) {
    return {
      ...c,
      status: "error",
      finalUrl: c.url,
      detail: err instanceof Error ? err.message : String(err),
    };
  } finally {
    clearTimeout(timer);
  }
}

/** A redirect worth a human's attention: the path changed, not just the host casing or a trailing slash. */
function moved(r: Result): boolean {
  if (r.status !== 200) return false;
  const norm = (u: string) => {
    try {
      const x = new URL(u);
      return `${x.host.toLowerCase().replace(/^www\./, "")}${x.pathname.replace(/\/$/, "")}`;
    } catch {
      return u;
    }
  };
  return norm(r.url) !== norm(r.finalUrl);
}

function table(rows: string[][], header: string[]): string {
  const head = `| ${header.join(" | ")} |\n| ${header.map(() => "---").join(" | ")} |`;
  return [head, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");
}

async function main() {
  const args = process.argv.slice(2);
  const num = (flag: string, fallback: number) => {
    const i = args.indexOf(flag);
    return i >= 0 && args[i + 1] ? Number(args[i + 1]) : fallback;
  };
  const delay = num("--delay", 1000);
  const timeout = num("--timeout", 30000);
  const limit = num("--limit", Infinity);

  const citations = collect().slice(0, limit);
  const results: Result[] = [];
  for (const [i, c] of citations.entries()) {
    results.push(await check(c, timeout));
    if (i < citations.length - 1) await new Promise((r) => setTimeout(r, delay));
  }

  const dead = results.filter((r) => typeof r.status === "number" && DEAD.has(r.status));
  const redirected = results.filter(moved);
  const blocked = results.filter(
    (r) => r.status === "error" || (typeof r.status === "number" && r.status !== 200 && !DEAD.has(r.status)),
  );
  const ok = results.length - dead.length - blocked.length;

  const out: string[] = [];
  out.push(`# Source-link check, ${new Date().toISOString().slice(0, 10)}`);
  out.push("");
  out.push(
    `${results.length} external source URLs cited on answer pages, glossary terms, tool pages, /rates and /data/hotel-financing-statistics. ${ok} answered 200. ${dead.length} dead. ${redirected.length} moved. ${blocked.length} could not be checked from a script.`,
  );

  if (dead.length) {
    out.push("", "## Dead: fix these", "");
    out.push(
      table(
        dead.map((r) => [String(r.status), r.url, r.where.join("<br>")]),
        ["Status", "URL", "Cited on"],
      ),
    );
  }
  if (redirected.length) {
    out.push("", "## Moved: the citation should point at the new URL", "");
    out.push(
      table(
        redirected.map((r) => [r.url, r.finalUrl, r.where.join("<br>")]),
        ["Cited URL", "Redirects to", "Cited on"],
      ),
    );
  }
  if (blocked.length) {
    out.push(
      "",
      "## Could not be checked",
      "",
      "Not findings. These hosts answer 403, 429 or nothing at all to a scripted reader. Open each in a browser before changing any citation.",
      "",
    );
    out.push(
      table(
        blocked.map((r) => [
          r.status === "error" ? `error: ${(r.detail ?? "").slice(0, 60)}` : String(r.status),
          r.url,
          r.where.join("<br>"),
        ]),
        ["Result", "URL", "Cited on"],
      ),
    );
  }
  if (!dead.length && !redirected.length) {
    out.push("", "No dead or moved links.");
  }

  console.log(out.join("\n"));
  process.exit(dead.length || redirected.length ? 1 : 0);
}

main();

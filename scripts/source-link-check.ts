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
 *   - Neither is a 404 from a host that 404s its own home page. Some WAFs
 *     turn a block into a 404 instead of a 403: on 2026-10-12 every path on
 *     www.ftc.gov answered 404 to this runner, home page included, while the
 *     cited page was intact in a browser. So before any URL is called dead,
 *     the host's own root is fetched once. If the root is dead too, the host
 *     is blocking the runner, not missing the document, and every dead URL
 *     on it moves to "could not be checked".
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
  /** Set when a dead status was reclassified as a host-level block. */
  blockedHost?: string;
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

/**
 * Fetch one host's own root. A host that answers 404 or 410 to `https://host/`
 * is blocking this runner, whatever status it gave the cited path: no site
 * serves its home page as missing. One request per host, and only for hosts
 * that produced a dead status in the first place.
 */
async function rootIsDeadToo(host: string, timeoutMs: number): Promise<number | undefined> {
  const r = await check({ url: `https://${host}/`, where: [] }, timeoutMs);
  return typeof r.status === "number" && DEAD.has(r.status) ? r.status : undefined;
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

  // A dead status is only dead if the host still serves its own home page.
  const deadHosts = new Set(
    results
      .filter((r) => typeof r.status === "number" && DEAD.has(r.status))
      .map((r) => {
        try {
          return new URL(r.url).host;
        } catch {
          return "";
        }
      })
      .filter(Boolean),
  );
  for (const host of deadHosts) {
    await new Promise((r) => setTimeout(r, delay));
    const status = await rootIsDeadToo(host, timeout);
    if (status === undefined) continue;
    for (const r of results) {
      if (typeof r.status !== "number" || !DEAD.has(r.status)) continue;
      try {
        if (new URL(r.url).host !== host) continue;
      } catch {
        continue;
      }
      r.blockedHost = `${host} answers ${status} to its own home page, so this is a block, not a missing document`;
    }
  }

  const dead = results.filter(
    (r) => typeof r.status === "number" && DEAD.has(r.status) && !r.blockedHost,
  );
  const redirected = results.filter(moved);
  const blocked = results.filter(
    (r) =>
      r.status === "error" ||
      Boolean(r.blockedHost) ||
      (typeof r.status === "number" && r.status !== 200 && !DEAD.has(r.status)),
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
      "Not findings. These hosts answer 403, 429, a block dressed up as a 404, or nothing at all to a scripted reader. Open each in a browser before changing any citation.",
      "",
    );
    out.push(
      table(
        blocked.map((r) => [
          r.status === "error" ? `error: ${(r.detail ?? "").slice(0, 60)}` : String(r.status),
          r.url,
          r.blockedHost ?? "",
          r.where.join("<br>"),
        ]),
        ["Result", "URL", "Why not a finding", "Cited on"],
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

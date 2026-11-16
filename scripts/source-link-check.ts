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
 *   npx tsx scripts/source-link-check.ts --only sba.gov   # re-check one host
 *   npx tsx scripts/source-link-check.ts --stats-only     # just the figure half
 *
 * Exit code 0 = nothing dead, 1 = at least one dead or moved link.
 *
 * Four rules this script exists to hold, from geo/AGENTS.md:
 *
 *   - A redirect is only a move when the publisher says so. A 301 or a 308
 *     means the document lives at the new URL and the citation should be
 *     updated. A 302, 303 or 307 means the publisher is still serving the
 *     cited URL and redirecting on the fly, so the citation resolves for a
 *     reader and editing it can make things worse. Every eCFR short path this
 *     site cites, such as /current/title-44/section-60.3, answered 302 on
 *     2026-10-19 to a /chapter-I/... path, and some of those carry a generated
 *     subject-group hash that would be the more brittle citation of the two.
 *     www.sba.gov/document/sop-50-10-... answered 302 to legacy.sba.gov while
 *     SBA migrates its SOP library, and a firewall bouncing this runner to a
 *     block page looks the same. Those are listed separately and never set the
 *     exit code. In the same report www.gsa.gov/travel/plan-book/... answered
 *     301 to /travel/plan-a-trip/..., a real move, and that citation was
 *     changed.
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
 *
 * Since 2026-11-16 it also does the second half of the weekly job in
 * geo/11-everything-needed.md item 2: "pages whose text no longer contains the
 * cited figure". That half only works where a figure and a URL are paired in
 * the data, which is `src/lib/rates/statistics.ts`: one sentence, one number,
 * one link. Answer-page and glossary sources carry a prose label rather than
 * the figure, so there is nothing to match them against and they are checked
 * for status only. A figure that cannot be found is reported and never sets
 * the exit code: a number can live in a chart, arrive by script, or sit in a
 * PDF this script does not parse, and the page can still carry the claim.
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

/** One figure claim a citation is supposed to support. */
type Claim = { statId: string; text: string; values: number[] };

type Citation = { url: string; where: string[]; claims?: Claim[] };

/** Every number in a string, as numbers, with digit-group commas joined. */
function numbersIn(text: string): number[] {
  const out: number[] = [];
  for (const m of text.replace(/(\d),(?=\d{3}\b)/g, "$1").matchAll(/\d+(?:\.\d+)?/g)) {
    const n = Number(m[0]);
    if (Number.isFinite(n)) out.push(n);
  }
  return out;
}

/**
 * The figures in a statistic's sentence that are worth looking for on the page
 * cited for it. Two kinds are dropped, because their absence would prove
 * nothing and a report that cries wolf every week is worse than no report:
 *
 *   - Years between 1900 and 2100. A year dates the claim; it is not the claim.
 *   - Legal addresses: "13 CFR 120.910", "26 U.S.C. 1014", "Pub. L. No. 101-391".
 *     A section number parses as a decimal, so the integer rule below misses it.
 *   - Bare integers under 1000: basis points moved, vote tallies, a count of
 *     years, "25 basis points", "a 12 to 0 vote". The
 *     published figures on this page are rates, which carry a decimal point,
 *     and dollar amounts and counts, which are large. Measured on 2026-11-16:
 *     keeping small integers flagged 11 of 20 pages and every one of them was
 *     a false positive.
 *
 * So "8.02%" is looked for as 8.02 and "$47.42 billion" as 47.42, while the
 * "17 basis points" in the same sentence is not looked for at all.
 */
function figuresIn(text: string): number[] {
  const out: number[] = [];
  // "13 CFR 120.910" and "26 U.S.C. 1014" are addresses, not figures, and they
  // parse as decimals so the integer rule below does not catch them.
  const stripped = text.replace(
    /\b(?:\d+\s+)?(?:CFR|C\.F\.R\.|U\.S\.C\.|USC|Pub\.?\s*L\.?|FR|§+)\s*(?:No\.?\s*)?[\d.\u2013-]+/gi,
    " ",
  );
  for (const n of numbersIn(stripped)) {
    if (Number.isInteger(n) && n >= 1900 && n <= 2100) continue;
    if (Number.isInteger(n) && n < 1000) continue;
    if (!out.includes(n)) out.push(n);
  }
  return out;
}


/** Visible-ish text of an HTML page. */
function pageText(html: string): string {
  return html
    .replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");
}

function collect(): Citation[] {
  const byUrl = new Map<string, Set<string>>();
  const claimsByUrl = new Map<string, Claim[]>();
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
  for (const s of STATS) {
    add(s.url, `/data/hotel-financing-statistics (${s.id})`);
    const values = figuresIn(s.text);
    if (!values.length) continue;
    const list = claimsByUrl.get(s.url) ?? [];
    list.push({ statId: s.id, text: s.text, values });
    claimsByUrl.set(s.url, list);
  }

  return [...byUrl.entries()]
    .map(([url, where]) => ({
      url,
      where: [...where].sort(),
      claims: claimsByUrl.get(url),
    }))
    .sort((a, b) => a.url.localeCompare(b.url));
}

type Hop = { status: number; to: string };

type Result = Citation & {
  status: number | "error";
  finalUrl: string;
  detail?: string;
  /** Set when a dead status was reclassified as a host-level block. */
  blockedHost?: string;
  /** Every redirect followed, in order, with the status that sent us there. */
  hops: Hop[];
  /** Figures from `claims` that are not in the page text. */
  missingFigures?: { statId: string; values: number[] }[];
  /** Why the page text could not be read, when it could not. */
  textUnread?: string;
};

/** 301 and 308 mean the document lives somewhere else now. The rest do not. */
const PERMANENT = new Set([301, 308]);
const REDIRECT = new Set([301, 302, 303, 307, 308]);
const MAX_HOPS = 6;

/** Pages larger than this are not read into memory. */
const MAX_BODY_BYTES = 4_000_000;

/**
 * Read the page the citation landed on and say which of the figures it is
 * cited for are not in its text. A PDF, a spreadsheet or anything else this
 * script cannot turn into text is reported as unread rather than as missing,
 * because "not found" has to mean "looked for and not there".
 */
async function checkFigures(
  claims: Claim[],
  res: Response,
): Promise<Pick<Result, "missingFigures" | "textUnread">> {
  const type = (res.headers.get("content-type") ?? "").toLowerCase();
  if (!/text\/html|text\/plain|application\/xhtml/.test(type)) {
    return { textUnread: `content-type ${type || "unknown"} is not text this script can read` };
  }
  const length = Number(res.headers.get("content-length") ?? "0");
  if (length > MAX_BODY_BYTES) {
    return { textUnread: `${length} bytes, over the ${MAX_BODY_BYTES} byte read limit` };
  }
  let onPage: Set<number>;
  try {
    const body = await res.text();
    if (body.length > MAX_BODY_BYTES) {
      return { textUnread: `${body.length} bytes, over the ${MAX_BODY_BYTES} byte read limit` };
    }
    onPage = new Set(numbersIn(pageText(body)));
  } catch (err) {
    return { textUnread: err instanceof Error ? err.message : String(err) };
  }
  // Numeric comparison, not string: SBA writes "base rate plus 3.0%" where the
  // statistic says 3.00%, and 3.0 and 3.00 are the same number.
  const missingFigures = claims
    .map((c) => ({
      statId: c.statId,
      values: c.values.filter((v) => !onPage.has(v)),
    }))
    .filter((m) => m.values.length);

  // If NONE of the figures cited against this page is in it, the page is one
  // this script cannot read, not a page where every publisher figure changed
  // at once. Treasury's yield curve page is the case that forced this rule:
  // seven statistics cite it, it builds its table in the browser, and a
  // scripted reader gets the furniture and none of the rates. Reporting that
  // as seven revised figures every week is the kind of noise that teaches a
  // reader to skip the section. A page that serves some of its figures and
  // not others is the case worth reading, and that still reports.
  const total = claims.reduce((n, c) => n + c.values.length, 0);
  const missing = missingFigures.reduce((n, m) => n + m.values.length, 0);
  if (total >= 2 && missing === total) {
    return {
      textUnread: `none of the ${total} figures cited against this page is in the HTML it served, so the numbers are built in the browser or sit in a document this script cannot read`,
    };
  }
  return { missingFigures };
}

/**
 * Fetch one citation, following redirects one at a time so that each hop's
 * status is recorded. `redirect: "follow"` hides that: it reports the final
 * URL and nothing about how we got there, which is why every eCFR short path
 * read as "moved" in the weekly report for five weeks running without anyone
 * being able to tell whether eCFR had moved those sections or was just
 * serving its own short links.
 */
async function check(c: Citation, timeoutMs: number): Promise<Result> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const hops: Hop[] = [];
  let url = c.url;
  try {
    for (let i = 0; i < MAX_HOPS; i++) {
      const res = await fetch(url, {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "user-agent": UA,
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
        },
      });
      const location = res.headers.get("location");
      if (!REDIRECT.has(res.status) || !location) {
        const base: Result = { ...c, status: res.status, finalUrl: url, hops };
        if (!c.claims?.length || res.status !== 200) return base;
        return { ...base, ...(await checkFigures(c.claims, res)) };
      }
      const next = new URL(location, url).toString();
      hops.push({ status: res.status, to: next });
      if (hops.some((h, j) => j < hops.length - 1 && h.to === next)) {
        return { ...c, status: res.status, finalUrl: next, hops };
      }
      url = next;
    }
    return {
      ...c,
      status: "error",
      finalUrl: url,
      detail: `more than ${MAX_HOPS} redirects`,
      hops,
    };
  } catch (err) {
    return {
      ...c,
      status: "error",
      finalUrl: url,
      detail: err instanceof Error ? err.message : String(err),
      hops,
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

function norm(u: string): string {
  try {
    const x = new URL(u);
    return `${x.host.toLowerCase().replace(/^www\./, "")}${x.pathname.replace(/\/$/, "")}`;
  } catch {
    return u;
  }
}

/** The URL changed, not just the host casing or a trailing slash. */
function landedElsewhere(r: Result): boolean {
  return r.status === 200 && norm(r.url) !== norm(r.finalUrl);
}

/**
 * The publisher says the document moved: at least one hop was a 301 or a 308.
 * Only these are findings, because only these mean the cited URL is wrong.
 */
function movedPermanently(r: Result): boolean {
  return landedElsewhere(r) && r.hops.some((h) => PERMANENT.has(h.status));
}

/**
 * The cited URL still resolves and the publisher redirects on the fly: eCFR
 * short paths, SBA's move of its SOP library to legacy.sba.gov, and a WAF
 * bouncing a scripted reader to a block page all land here. Reported so a
 * person can see them, never as a finding, and never in the exit code.
 */
function redirectedTemporarily(r: Result): boolean {
  return landedElsewhere(r) && !r.hops.some((h) => PERMANENT.has(h.status));
}

/** "302, 301" for the report, so a reader can see what the publisher said. */
function hopStatuses(r: Result): string {
  return r.hops.map((h) => h.status).join(", ");
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

  // Re-check one citation or one host without sending 557 requests.
  const onlyAt = args.indexOf("--only");
  const only = onlyAt >= 0 ? args[onlyAt + 1] : undefined;
  // --stats-only: just the URLs a statistic is cited against, which is the
  // only set the figure half looks at. About 50 requests instead of 557, for
  // re-checking that half without a full run.
  const statsOnly = args.includes("--stats-only");
  const citations = collect()
    .filter((c) => (only ? c.url.includes(only) : true))
    .filter((c) => (statsOnly ? Boolean(c.claims?.length) : true))
    .slice(0, limit);
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
  const redirected = results.filter(movedPermanently);
  const temporary = results.filter(redirectedTemporarily);
  const blocked = results.filter(
    (r) =>
      r.status === "error" ||
      Boolean(r.blockedHost) ||
      (typeof r.status === "number" && r.status !== 200 && !DEAD.has(r.status)),
  );
  const ok = results.length - dead.length - blocked.length;

  // The second half of the weekly job: does the page still carry the figure?
  const withClaims = results.filter((r) => r.claims?.length);
  const figuresChecked = withClaims
    .filter((r) => r.missingFigures)
    .reduce((n, r) => n + (r.claims ?? []).reduce((m, c) => m + c.values.length, 0), 0);
  const figureMisses = withClaims.filter((r) => r.missingFigures?.length);
  const figuresUnread = withClaims.filter((r) => r.textUnread || (!r.missingFigures && !r.textUnread));

  const out: string[] = [];
  out.push(`# Source-link check, ${new Date().toISOString().slice(0, 10)}`);
  out.push("");
  out.push(
    `${results.length} external source URLs cited on answer pages, glossary terms, tool pages, /rates and /data/hotel-financing-statistics. ${ok} answered 200. ${dead.length} dead. ${redirected.length} moved. ${temporary.length} redirected on the fly. ${blocked.length} could not be checked from a script.`,
  );
  out.push(
    "",
    `Figures: ${figuresChecked} numbers from ${withClaims.length - figuresUnread.length} statistics pages were looked for in the text of the page that is cited for them. ${figureMisses.length} pages are missing at least one. ${figuresUnread.length} pages could not be read as text.`,
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
    out.push(
      "",
      "## Moved: the citation should point at the new URL",
      "",
      "The publisher answered 301 or 308, which means the document lives at the new URL now.",
      "",
    );
    out.push(
      table(
        redirected.map((r) => [
          r.url,
          r.finalUrl,
          hopStatuses(r),
          r.where.join("<br>"),
        ]),
        ["Cited URL", "Moved to", "Redirect", "Cited on"],
      ),
    );
  }
  if (temporary.length) {
    out.push(
      "",
      "## Redirected on the fly",
      "",
      "Not findings. Every hop was a 302, 303 or 307, so the publisher is still serving the cited URL and the citation resolves for a reader. A publisher serving its own short links reads this way, and so does a firewall bouncing a scripted reader to a block page: check the URL in the \"Lands on\" column. Change a citation here only if you open it and find a different document.",
      "",
    );
    out.push(
      table(
        temporary.map((r) => [
          r.url,
          r.finalUrl,
          hopStatuses(r),
          r.where.join("<br>"),
        ]),
        ["Cited URL", "Lands on", "Redirect", "Cited on"],
      ),
    );
  }
  if (figureMisses.length) {
    out.push(
      "",
      "## Cited figure not in the page text",
      "",
      "Not a finding on its own, and never in the exit code. The page answered 200 and this script read its text, but the number the statistic is cited for is not in it. That happens when a publisher revises a figure, which is the case worth catching. It also happens for a figure that is derived rather than quoted, such as the SBA 7(a) ceiling, which is Prime plus the cap SBA publishes and so is not on SBA's page by construction, and for a number a publisher writes in words rather than digits. Open the page and read it before changing anything. Only `src/lib/rates/statistics.ts` is checked this way, because it is the only module that pairs one figure with one link.",
      "",
    );
    out.push(
      table(
        figureMisses.flatMap((r) =>
          (r.missingFigures ?? []).map((m) => [
            m.statId,
            m.values.map((v) => String(v)).join(", "),
            r.url,
          ]),
        ),
        ["Statistic", "Figure not found", "Cited URL"],
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

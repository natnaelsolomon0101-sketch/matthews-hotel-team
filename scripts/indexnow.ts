/**
 * IndexNow submission for matthewshotelmarkets.com.
 *
 * Pushes URLs whose sitemap `lastmod` is within the last 48 hours to the
 * IndexNow API (https://www.indexnow.org/documentation, fetched 2026-09-17):
 * a single shared endpoint that fans out to every participating engine
 * (confirmed participants: Bing, Yandex; others vary — see
 * geo/02-crawl-index.md). Google does not consume IndexNow.
 *
 * SAFETY: this is a live submission to a third-party API. It refuses to run
 * unless it detects it's executing for the `main` branch (via
 * GITHUB_REF_NAME in CI, or `git rev-parse --abbrev-ref HEAD` locally), so
 * running it from this feature branch — or any other branch — is a no-op
 * unless you pass --force. The GitHub Actions workflow
 * (.github/workflows/indexnow.yml) only triggers on push to main anyway;
 * this check is defense in depth for anyone running it locally.
 *
 * Usage:
 *   npx tsx scripts/indexnow.ts             # refuses off `main`
 *   npx tsx scripts/indexnow.ts --force      # submit regardless of branch
 *   npx tsx scripts/indexnow.ts --dry-run    # print what would be submitted
 *
 * Env:
 *   BASE_URL   default https://matthewshotelmarkets.com
 */
import { execSync } from "node:child_process";

const BASE_URL = process.env.BASE_URL || "https://matthewshotelmarkets.com";
// Must match the filename of the key file in public/ (hosted at
// https://matthewshotelmarkets.com/<key>.txt so IndexNow can verify
// ownership per the spec's "key file" requirement).
const INDEXNOW_KEY = "e87b0b0a3a5b017521267333e3c1e8ea";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const WINDOW_HOURS = 48;

function currentBranch(): string {
  if (process.env.GITHUB_REF_NAME) return process.env.GITHUB_REF_NAME;
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

type SitemapUrlEntry = { loc: string; lastmod: string | null };

function parseSitemap(xml: string): SitemapUrlEntry[] {
  const entries: SitemapUrlEntry[] = [];
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]?.trim();
    const lastmod = block.match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1]?.trim() ?? null;
    if (loc) entries.push({ loc, lastmod });
  }
  return entries;
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const dryRun = args.includes("--dry-run");
  // --all submits every sitemap URL regardless of lastmod. Use it once after
  // a large launch, or when a normal run was missed; not on every deploy.
  const all = args.includes("--all");

  const branch = currentBranch();
  if (branch !== "main" && !force) {
    console.log(
      `[indexnow] refusing to submit: current branch is "${branch}", not "main". ` +
        `Pass --force to override (only do this deliberately).`,
    );
    process.exit(0);
  }

  const sitemapUrl = `${BASE_URL}/sitemap.xml`;
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    console.error(`[indexnow] could not fetch ${sitemapUrl}: HTTP ${res.status}`);
    process.exit(1);
  }
  const xml = await res.text();
  const entries = parseSitemap(xml);

  const cutoff = Date.now() - WINDOW_HOURS * 60 * 60 * 1000;
  const changed = entries.filter((e) => {
    if (all) return true;
    if (!e.lastmod) return false;
    const t = new Date(e.lastmod).getTime();
    return Number.isFinite(t) && t >= cutoff;
  });

  if (changed.length === 0) {
    console.log(`[indexnow] no URLs with lastmod in the last ${WINDOW_HOURS}h. Nothing to submit.`);
    return;
  }

  const host = new URL(BASE_URL).host;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: changed.map((e) => e.loc),
  };

  console.log(`[indexnow] ${changed.length} URL(s) changed in the last ${WINDOW_HOURS}h:`);
  for (const e of changed) console.log(`  ${e.loc} (lastmod ${e.lastmod})`);

  if (dryRun) {
    console.log("[indexnow] --dry-run: not submitting.");
    return;
  }

  const submitRes = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  // IndexNow returns 200 or 202 on success per spec.
  if (submitRes.status !== 200 && submitRes.status !== 202) {
    const text = await submitRes.text().catch(() => "");
    console.error(`[indexnow] submission failed: HTTP ${submitRes.status} ${text}`);
    process.exit(1);
  }

  console.log(`[indexnow] submitted successfully: HTTP ${submitRes.status}`);
}

main().catch((err) => {
  console.error("[indexnow] unhandled error", err);
  process.exit(1);
});

/**
 * fetch-sba-hotel-loans.ts: build the aggregates behind /data/sba-hotel-lending.
 *
 *   npx tsx scripts/fetch-sba-hotel-loans.ts                 # fetch, aggregate, write content/sba/*.json
 *   npx tsx scripts/fetch-sba-hotel-loans.ts --dry-run       # fetch, aggregate, print the reconciliation, write nothing
 *   npx tsx scripts/fetch-sba-hotel-loans.ts --cache-dir DIR # keep the raw CSVs in DIR and reuse them if present
 *   npx tsx scripts/fetch-sba-hotel-loans.ts --force         # rebuild even if SBA has not posted a new quarter
 *
 * SOURCE (public, no API key, verified 2026-09-18):
 *   SBA open data portal, dataset "7(a) & 504 FOIA", identifier SBA-OHA-2016-08-001.
 *   Landing page: https://data.sba.gov/dataset/7a-504-foia
 *   Metadata API: https://data.sba.gov/api/1/metastore/schemas/dataset/items/SBA-OHA-2016-08-001
 *   License declared in the dataset metadata: https://www.usa.gov/publicdomain/label/1.0/
 *
 * The CSV file names carry the as-of date (FOIA_7a_FY2020_Present_asof_260630.csv)
 * and change every quarter, so the script never hard-codes them. It asks the
 * metadata API for the current distribution list and picks the files by title.
 * If SBA renames the dataset, the titles or the columns, the script stops with
 * an error that says what it looked for and what it found.
 *
 * RULES
 *   - The raw CSVs are several hundred MB. They are streamed and never loaded
 *     whole, and they are never written inside the repo.
 *   - Only aggregates are written. No borrower name, address or loan-level row
 *     leaves this script. Lender and CDC names are the counterparties SBA
 *     itself ranks in its public lender reports.
 *   - Every total is reconciled against a straight count of the filtered rows.
 *     A mismatch is a hard failure.
 */
import { createReadStream, createWriteStream, existsSync } from "node:fs";
import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import path from "node:path";

const DATASET_ID = "SBA-OHA-2016-08-001";
const PORTAL = "https://data.sba.gov";
const METADATA_URL = `${PORTAL}/api/1/metastore/schemas/dataset/items/${DATASET_ID}?show-reference-ids=false`;
const LANDING_URL = `${PORTAL}/dataset/7a-504-foia`;
const OUT_DIR = path.join(process.cwd(), "content", "sba");
const UA = "matthewshotelmarkets.com sba-hotel-lending refresh";

/** First fiscal year reported. NAICS coding is complete from here on. */
const SINCE_FY = 2010;
const HOTEL_NAICS = "721110";
/** Reported separately, excluded from every other table. */
const OTHER_NAICS: Record<string, string> = {
  "721120": "Casino Hotels",
  "721191": "Bed-and-Breakfast Inns",
  "721199": "All Other Traveler Accommodation",
};

const BUCKETS: { key: string; label: string; min: number; max: number }[] = [
  { key: "lt350k", label: "Under $350,000", min: 0, max: 350_000 },
  { key: "350k-1m", label: "$350,000 to $999,999", min: 350_000, max: 1_000_000 },
  { key: "1m-2m", label: "$1.0 million to $1.99 million", min: 1_000_000, max: 2_000_000 },
  { key: "2m-3.5m", label: "$2.0 million to $3.49 million", min: 2_000_000, max: 3_500_000 },
  { key: "3.5m-5m", label: "$3.5 million to $4.99 million", min: 3_500_000, max: 5_000_000 },
  { key: "gte5m", label: "$5.0 million and over", min: 5_000_000, max: Infinity },
];

type Program = "7a" | "504";

type Dist = { title: string; url: string; program: Program; startFy: number; endFy: number | null; asOfLabel: string };

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const FORCE = args.includes("--force");
const cacheIdx = args.indexOf("--cache-dir");
const CACHE_DIR = cacheIdx >= 0 ? args[cacheIdx + 1] : null;

function die(msg: string): never {
  console.error(`\nSBA REFRESH FAILED\n${msg}\n`);
  process.exit(1);
}

/* ---------------------------------------------------------------- discovery */

async function discover(): Promise<{ dists: Dist[]; license: string; modified: string; dictionaryUrl: string | null }> {
  let res: Response;
  try {
    res = await fetch(METADATA_URL, { headers: { "User-Agent": UA, Accept: "application/json" } });
  } catch (e) {
    die(`Could not reach the SBA metadata API at ${METADATA_URL}: ${(e as Error).message}`);
  }
  if (!res.ok) {
    die(
      `The SBA metadata API returned HTTP ${res.status} for dataset ${DATASET_ID}.\n` +
        `URL tried: ${METADATA_URL}\n` +
        `SBA has probably moved or renamed the "7(a) & 504 FOIA" dataset. Open ${PORTAL}/oca-datasets, find the\n` +
        `dataset, and update DATASET_ID / METADATA_URL / LANDING_URL at the top of scripts/fetch-sba-hotel-loans.ts.`,
    );
  }
  const meta = (await res.json()) as {
    title?: string;
    license?: string;
    modified?: string;
    distribution?: { data?: { title?: string; downloadURL?: string; format?: string } }[];
  };
  const all = (meta.distribution ?? []).map((d) => d.data ?? {});
  const titles = all.map((d) => `  - ${d.title} -> ${d.downloadURL}`).join("\n");
  const dists: Dist[] = [];
  for (const d of all) {
    if (!d.title || !d.downloadURL || (d.format ?? "").toLowerCase() !== "csv") continue;
    const m = d.title.match(/FOIA\s*-\s*(504|7\(a\))\s*\(FY(\d{4})-(?:FY(\d{4})|Present)\)\s*as of\s*(.+)$/i);
    if (!m) continue;
    const endFy = m[3] ? Number(m[3]) : null;
    if (endFy !== null && endFy < SINCE_FY) continue;
    dists.push({
      title: d.title.trim(),
      url: d.downloadURL,
      program: m[1] === "504" ? "504" : "7a",
      startFy: Number(m[2]),
      endFy,
      asOfLabel: m[4].trim(),
    });
  }
  for (const p of ["7a", "504"] as Program[]) {
    if (!dists.some((d) => d.program === p && d.endFy === null)) {
      die(
        `No current "${p === "7a" ? "7(a)" : "504"} (FYxxxx-Present)" CSV found in dataset ${DATASET_ID}.\n` +
          `The script matches distribution titles like "FOIA - 7(a) (FY2020-Present) as of June 30, 2026".\n` +
          `Distributions SBA lists today:\n${titles || "  (none)"}\n` +
          `If SBA changed the title format, update the regular expression in discover().`,
      );
    }
  }
  const dict = all.find((d) => /data dictionary/i.test(d.title ?? ""));
  return {
    dists: dists.sort((a, b) => a.program.localeCompare(b.program) || a.startFy - b.startFy),
    license: meta.license ?? "",
    modified: meta.modified ?? "",
    dictionaryUrl: dict?.downloadURL ?? null,
  };
}

/* ------------------------------------------------------------ streaming CSV */

/** RFC 4180 state machine over string chunks. Calls onRow for each record. */
function csvParser(onRow: (row: string[]) => void) {
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  let pendingQuote = false; // saw a quote inside a quoted field; next char decides
  let lastWasCR = false;
  const endField = () => {
    row.push(field);
    field = "";
  };
  const endRow = () => {
    endField();
    if (row.length > 1 || row[0] !== "") onRow(row);
    row = [];
  };
  return {
    write(chunk: string) {
      for (let i = 0; i < chunk.length; i++) {
        const c = chunk[i];
        if (inQuotes) {
          if (pendingQuote) {
            pendingQuote = false;
            if (c === '"') {
              field += '"';
              continue;
            }
            inQuotes = false; // closing quote; fall through to handle c unquoted
          } else {
            if (c === '"') pendingQuote = true;
            else field += c;
            continue;
          }
        }
        if (c === '"') {
          inQuotes = true;
        } else if (c === ",") {
          endField();
        } else if (c === "\n") {
          if (!lastWasCR) endRow();
        } else if (c === "\r") {
          endRow();
        } else {
          field += c;
        }
        lastWasCR = c === "\r";
      }
    },
    end() {
      if (pendingQuote) {
        pendingQuote = false;
        inQuotes = false;
      }
      if (inQuotes) die("CSV ended inside a quoted field. The download was probably truncated.");
      if (field !== "" || row.length) endRow();
    },
  };
}

async function openCsv(d: Dist): Promise<{ stream: AsyncIterable<Uint8Array>; fileName: string; bytes: number | null }> {
  const fileName = decodeURIComponent(new URL(d.url).pathname.split("/").pop() ?? d.url);
  if (CACHE_DIR) {
    await mkdir(CACHE_DIR, { recursive: true });
    const local = path.join(CACHE_DIR, fileName);
    if (!existsSync(local)) {
      console.log(`  downloading ${fileName} to ${CACHE_DIR}`);
      const res = await fetch(d.url, { headers: { "User-Agent": UA } });
      if (!res.ok || !res.body) die(`Download failed: HTTP ${res.status} for ${d.url}\nThe metadata API listed this file, so SBA may be mid-upload. Try again later.`);
      await pipeline(Readable.fromWeb(res.body as never), createWriteStream(local));
    }
    return { stream: createReadStream(local), fileName, bytes: (await stat(local)).size };
  }
  const res = await fetch(d.url, { headers: { "User-Agent": UA } });
  if (!res.ok || !res.body) die(`Download failed: HTTP ${res.status} for ${d.url}\nThe metadata API listed this file, so SBA may be mid-upload. Try again later.`);
  const len = res.headers.get("content-length");
  return { stream: res.body as unknown as AsyncIterable<Uint8Array>, fileName, bytes: len ? Number(len) : null };
}

/* -------------------------------------------------------------- aggregation */

type Agg = { count: number; gross: number };
const agg = (): Agg => ({ count: 0, gross: 0 });
const add = (a: Agg, amt: number) => {
  a.count += 1;
  a.gross += amt;
};

type YearCell = Agg & { amounts: number[]; guaranteed: number; thirdParty: number; chargedOff: number; chargeOffAmount: number; paidInFull: number };

type FileRecon = {
  file: string;
  title: string;
  url: string;
  program: Program;
  asOf: string;
  bytes: number | null;
  rowsRead: number;
  hotelRows: number;
  hotelRowsBeforeSinceFy: number;
  hotelRowsCancelled: number;
  hotelRowsCounted: number;
  hotelGrossCounted: number;
  otherNaicsRows: number;
};

const byYear = new Map<string, YearCell>(); // `${fy}|${program}`
const byStateYear = new Map<string, Agg>(); // `${state}|${fy}|${program}`
const byLenderYear = new Map<string, Agg>(); // `${program}|${fy}|${state}|${name}`
const byBucketYear = new Map<string, Agg>(); // `${program}|${fy}|${bucket}`
const otherNaics = new Map<string, Agg>(); // `${naics}|${fy}|${program}`
const recon: FileRecon[] = [];
const asOfDates = new Set<string>();

function num(s: string | undefined): number {
  if (!s) return 0;
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
}

async function processFile(d: Dist) {
  const { stream, fileName, bytes } = await openCsv(d);
  console.log(`  reading ${fileName}${bytes ? ` (${(bytes / 1e6).toFixed(0)} MB)` : ""}`);
  const r: FileRecon = {
    file: fileName,
    title: d.title,
    url: d.url,
    program: d.program,
    asOf: "",
    bytes,
    rowsRead: 0,
    hotelRows: 0,
    hotelRowsBeforeSinceFy: 0,
    hotelRowsCancelled: 0,
    hotelRowsCounted: 0,
    hotelGrossCounted: 0,
    otherNaicsRows: 0,
  };
  let col: Record<string, number> | null = null;
  const lenderCol = d.program === "7a" ? "BankName" : "CDC_Name";
  const required = ["AsOfDate", "Program", "GrossApproval", "ApprovalFY", "NaicsCode", "ProjectState", "BorrState", "LoanStatus", "GrossChargeOffAmount", lenderCol];

  const parser = csvParser((row) => {
    if (!col) {
      col = Object.fromEntries(row.map((h, i) => [h.trim().replace(/^﻿/, ""), i]));
      const missing = required.filter((c) => !(c in col!));
      if (missing.length) {
        die(
          `${fileName} is missing expected column(s): ${missing.join(", ")}.\n` +
            `Columns found: ${row.join(", ")}\n` +
            `SBA changed the file layout. Compare with the data dictionary on ${LANDING_URL} and update processFile().`,
        );
      }
      return;
    }
    r.rowsRead += 1;
    const c = col;
    const naics = (row[c.NaicsCode] ?? "").trim();
    if (naics !== HOTEL_NAICS && !(naics in OTHER_NAICS)) return;
    const asOf = (row[c.AsOfDate] ?? "").trim();
    if (asOf) {
      asOfDates.add(asOf);
      r.asOf = asOf;
    }
    const fy = Number((row[c.ApprovalFY] ?? "").trim());
    const status = (row[c.LoanStatus] ?? "").replace(/\s+/g, "").toUpperCase(); // "P I F" -> "PIF"
    const amt = num(row[c.GrossApproval]);
    const inWindow = Number.isInteger(fy) && fy >= SINCE_FY;
    const cancelled = status === "CANCLD";

    if (naics !== HOTEL_NAICS) {
      r.otherNaicsRows += 1;
      if (inWindow && !cancelled) {
        const k = `${naics}|${fy}|${d.program}`;
        if (!otherNaics.has(k)) otherNaics.set(k, agg());
        add(otherNaics.get(k)!, amt);
      }
      return;
    }

    r.hotelRows += 1;
    if (!inWindow) {
      r.hotelRowsBeforeSinceFy += 1;
      return;
    }
    if (cancelled) {
      r.hotelRowsCancelled += 1;
      return;
    }
    r.hotelRowsCounted += 1;
    r.hotelGrossCounted += amt;

    const yk = `${fy}|${d.program}`;
    let y = byYear.get(yk);
    if (!y) {
      y = { ...agg(), amounts: [], guaranteed: 0, thirdParty: 0, chargedOff: 0, chargeOffAmount: 0, paidInFull: 0 };
      byYear.set(yk, y);
    }
    add(y, amt);
    y.amounts.push(amt);
    if (d.program === "7a") y.guaranteed += num(row[c.SBAGuaranteedApproval]);
    else y.thirdParty += num(row[c.ThirdPartyDollars]);
    if (status === "CHGOFF") {
      y.chargedOff += 1;
      y.chargeOffAmount += num(row[c.GrossChargeOffAmount]);
    } else if (status === "PIF") {
      y.paidInFull += 1;
    }

    const state = ((row[c.ProjectState] ?? "").trim() || (row[c.BorrState] ?? "").trim() || "Unknown").toUpperCase();
    const sk = `${state}|${fy}|${d.program}`;
    if (!byStateYear.has(sk)) byStateYear.set(sk, agg());
    add(byStateYear.get(sk)!, amt);

    const lender = (row[c[lenderCol]] ?? "").trim().replace(/\s+/g, " ") || "Not reported";
    const lk = `${d.program}|${fy}|${state}|${lender}`;
    if (!byLenderYear.has(lk)) byLenderYear.set(lk, agg());
    add(byLenderYear.get(lk)!, amt);

    const b = BUCKETS.find((x) => amt >= x.min && amt < x.max) ?? BUCKETS[0];
    const bk = `${d.program}|${fy}|${b.key}`;
    if (!byBucketYear.has(bk)) byBucketYear.set(bk, agg());
    add(byBucketYear.get(bk)!, amt);
  });

  const decoder = new TextDecoder("utf-8");
  for await (const chunk of stream) parser.write(decoder.decode(chunk, { stream: true }));
  parser.write(decoder.decode());
  parser.end();
  if (r.rowsRead === 0) die(`${fileName} had no data rows.`);
  recon.push(r);
}

/* ------------------------------------------------------------------ outputs */

const round = (n: number) => Math.round(n);
function median(xs: number[]): number {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function rankLenders(program: Program, years: number[], state: string | null, by: "count" | "gross", limit: number) {
  const m = new Map<string, Agg>();
  for (const [k, v] of byLenderYear) {
    const [p, fy, st, ...rest] = k.split("|");
    if (p !== program || !years.includes(Number(fy))) continue;
    if (state && st !== state) continue;
    const name = rest.join("|");
    if (!m.has(name)) m.set(name, agg());
    const a = m.get(name)!;
    a.count += v.count;
    a.gross += v.gross;
  }
  return [...m.entries()]
    .sort((a, b) => b[1][by] - a[1][by] || b[1].gross - a[1].gross || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, a], i) => ({
      rank: i + 1,
      name,
      count: a.count,
      // In the per-state lists a lender with one or two loans would expose a
      // single loan amount, so dollars are withheld below three loans.
      grossApproval: state && a.count < 3 ? null : round(a.gross),
    }));
}

async function main() {
  console.log(`SBA hotel lending refresh${DRY ? " (dry run, nothing will be written)" : ""}`);
  console.log(`metadata: ${METADATA_URL}`);
  const { dists, license, modified, dictionaryUrl } = await discover();
  console.log(`found ${dists.length} CSV distributions covering FY${SINCE_FY} onward:`);
  for (const d of dists) console.log(`  - ${d.title}`);

  // Skip the 500 MB download when SBA has not posted a new quarter.
  const existing = path.join(OUT_DIR, "summary.json");
  if (!DRY && !FORCE && existsSync(existing)) {
    try {
      const prev = JSON.parse(await readFile(existing, "utf8")) as { meta?: { files?: { title: string }[] } };
      const before = (prev.meta?.files ?? []).map((f) => f.title).sort().join("\n");
      const now = dists.map((d) => d.title).sort().join("\n");
      if (before === now) {
        console.log("\nNo new SBA release: the distribution titles match content/sba/summary.json. Nothing to do. Use --force to rebuild.");
        return;
      }
    } catch {
      // unreadable previous output: rebuild
    }
  }

  for (const d of dists) await processFile(d);

  if (asOfDates.size !== 1) {
    die(`Expected one AsOfDate across all files and found ${asOfDates.size}: ${[...asOfDates].join(", ")}. SBA may be part-way through a quarterly upload. Try again later.`);
  }
  const asOf = [...asOfDates][0];
  const [ay, am, ad] = asOf.split("-").map(Number);
  // The SBA fiscal year ends September 30 and is named for the year it ends in.
  const asOfFy = am >= 10 ? ay + 1 : ay;
  const lastFullFy = am === 9 && ad === 30 ? asOfFy : asOfFy - 1;
  const trailing5 = [4, 3, 2, 1, 0].map((i) => lastFullFy - i);
  const trailing3 = [2, 1, 0].map((i) => lastFullFy - i);

  /* by fiscal year and program */
  const years = [...new Set([...byYear.keys()].map((k) => Number(k.split("|")[0])))].sort((a, b) => a - b);
  const byFiscalYear = years.flatMap((fy) =>
    (["7a", "504"] as Program[]).map((program) => {
      const y = byYear.get(`${fy}|${program}`);
      const count = y?.count ?? 0;
      const gross = y?.gross ?? 0;
      return {
        fiscalYear: fy,
        partialYear: fy > lastFullFy,
        program,
        count,
        grossApproval: round(gross),
        averageLoan: count ? round(gross / count) : 0,
        medianLoan: round(median(y?.amounts ?? [])),
        ...(program === "7a" ? { sbaGuaranteedApproval: round(y?.guaranteed ?? 0) } : { thirdPartyLenderDollars: round(y?.thirdParty ?? 0) }),
        chargedOffCount: y?.chargedOff ?? 0,
        chargedOffGrossAmount: round(y?.chargeOffAmount ?? 0),
        paidInFullCount: y?.paidInFull ?? 0,
      };
    }),
  );

  /* by state */
  const states = [...new Set([...byStateYear.keys()].map((k) => k.split("|")[0]))].sort();
  const stateWindow = (st: string, fys: number[]) => {
    const out = { "7a": agg(), "504": agg() };
    for (const fy of fys) for (const p of ["7a", "504"] as Program[]) {
      const v = byStateYear.get(`${st}|${fy}|${p}`);
      if (v) {
        out[p].count += v.count;
        out[p].gross += v.gross;
      }
    }
    return {
      count7a: out["7a"].count,
      gross7a: round(out["7a"].gross),
      count504: out["504"].count,
      gross504: round(out["504"].gross),
      count: out["7a"].count + out["504"].count,
      grossApproval: round(out["7a"].gross + out["504"].gross),
    };
  };
  const byState = states.map((st) => ({
    state: st,
    lastFullFiscalYear: stateWindow(st, [lastFullFy]),
    trailing5: stateWindow(st, trailing5),
    top5Lenders7a: rankLenders("7a", trailing3, st, "count", 5),
    top5Cdcs504: rankLenders("504", trailing3, st, "count", 5),
  }));

  /* size buckets, trailing five full fiscal years */
  const sizeBuckets = (["7a", "504"] as Program[]).flatMap((program) =>
    BUCKETS.map((b) => {
      const a = agg();
      for (const fy of trailing5) {
        const v = byBucketYear.get(`${program}|${fy}|${b.key}`);
        if (v) {
          a.count += v.count;
          a.gross += v.gross;
        }
      }
      return { program, bucket: b.key, label: b.label, count: a.count, grossApproval: round(a.gross) };
    }),
  );

  /* adjacent NAICS codes, reported separately */
  const otherCodes = Object.entries(OTHER_NAICS).map(([code, description]) => {
    const win = (fys: number[]) => {
      const a = agg();
      for (const fy of fys) for (const p of ["7a", "504"]) {
        const v = otherNaics.get(`${code}|${fy}|${p}`);
        if (v) {
          a.count += v.count;
          a.gross += v.gross;
        }
      }
      return { count: a.count, grossApproval: round(a.gross) };
    };
    return { naics: code, description, lastFullFiscalYear: win([lastFullFy]), trailing5: win(trailing5) };
  });

  /* ------------------------------------------------------- reconciliation */
  const straightCount = recon.reduce((s, r) => s + r.hotelRowsCounted, 0);
  const straightGross = recon.reduce((s, r) => s + r.hotelGrossCounted, 0);
  const sumYearCount = byFiscalYear.reduce((s, y) => s + y.count, 0);
  const sumYearGross = [...byYear.values()].reduce((s, y) => s + y.gross, 0);
  const sumStateAll = [...byStateYear.values()].reduce((s, v) => s + v.count, 0);
  const sumLenderAll = [...byLenderYear.values()].reduce((s, v) => s + v.count, 0);
  const sumBucketAll = [...byBucketYear.values()].reduce((s, v) => s + v.count, 0);
  const t5Year = byFiscalYear.filter((y) => trailing5.includes(y.fiscalYear)).reduce((s, y) => s + y.count, 0);
  const t5State = byState.reduce((s, x) => s + x.trailing5.count, 0);
  const t5Bucket = sizeBuckets.reduce((s, x) => s + x.count, 0);
  const lfyYear = byFiscalYear.filter((y) => y.fiscalYear === lastFullFy).reduce((s, y) => s + y.count, 0);
  const lfyState = byState.reduce((s, x) => s + x.lastFullFiscalYear.count, 0);
  const checks: { name: string; expected: number; actual: number }[] = [
    { name: "by-year counts vs straight count of filtered rows", expected: straightCount, actual: sumYearCount },
    { name: "by-year gross approval vs straight sum (rounded $)", expected: round(straightGross), actual: round(sumYearGross) },
    { name: "state-year cells vs straight count", expected: straightCount, actual: sumStateAll },
    { name: "lender-year cells vs straight count", expected: straightCount, actual: sumLenderAll },
    { name: "size-bucket cells vs straight count", expected: straightCount, actual: sumBucketAll },
    { name: `by-state trailing 5 vs by-year FY${trailing5[0]}-FY${lastFullFy}`, expected: t5Year, actual: t5State },
    { name: `size buckets vs by-year FY${trailing5[0]}-FY${lastFullFy}`, expected: t5Year, actual: t5Bucket },
    { name: `by-state FY${lastFullFy} vs by-year FY${lastFullFy}`, expected: lfyYear, actual: lfyState },
  ];
  for (const r of recon) {
    checks.push({
      name: `${r.file}: hotel rows = before FY${SINCE_FY} + cancelled + counted`,
      expected: r.hotelRows,
      actual: r.hotelRowsBeforeSinceFy + r.hotelRowsCancelled + r.hotelRowsCounted,
    });
  }

  console.log("\nRECONCILIATION");
  console.log(`as of ${asOf} | last full fiscal year FY${lastFullFy} | NAICS ${HOTEL_NAICS} | cancelled loans (LoanStatus CANCLD) excluded`);
  console.log("file | rows read | NAICS 721110 rows | cancelled | counted | gross approval counted");
  for (const r of recon) {
    console.log(`${r.file} | ${r.rowsRead} | ${r.hotelRows} | ${r.hotelRowsCancelled} | ${r.hotelRowsCounted} | $${round(r.hotelGrossCounted).toLocaleString("en-US")}`);
  }
  let bad = 0;
  for (const c of checks) {
    const ok = c.expected === c.actual;
    if (!ok) bad += 1;
    console.log(`${ok ? "OK  " : "FAIL"} ${c.name}: expected ${c.expected.toLocaleString("en-US")}, got ${c.actual.toLocaleString("en-US")}`);
  }
  if (bad) die(`${bad} reconciliation check(s) failed. Nothing was written.`);
  if (straightCount < 1000) die(`Only ${straightCount} hotel loans found since FY${SINCE_FY}. That is implausibly low, so nothing was written. Check the NAICS column.`);

  const meta = {
    dataset: "7(a) & 504 FOIA",
    datasetId: DATASET_ID,
    publisher: "U.S. Small Business Administration",
    landingPage: LANDING_URL,
    metadataApi: METADATA_URL,
    dataDictionary: dictionaryUrl,
    license,
    datasetModified: modified,
    asOf,
    fetchedAt: new Date().toISOString(),
    naics: HOTEL_NAICS,
    sinceFiscalYear: SINCE_FY,
    lastFullFiscalYear: lastFullFy,
    partialFiscalYear: asOfFy > lastFullFy ? asOfFy : null,
    trailing5,
    trailing3,
    cancelledExcluded: true,
    files: recon.map((r) => ({ file: r.file, title: r.title, url: r.url, program: r.program, asOf: r.asOf, bytes: r.bytes })),
  };

  const summary = {
    meta,
    byFiscalYear,
    sizeBuckets,
    otherNaics: otherCodes,
    reconciliation: {
      files: recon.map((r) => ({
        file: r.file,
        program: r.program,
        rowsRead: r.rowsRead,
        hotelRows: r.hotelRows,
        hotelRowsBeforeSinceFy: r.hotelRowsBeforeSinceFy,
        hotelRowsCancelled: r.hotelRowsCancelled,
        hotelRowsCounted: r.hotelRowsCounted,
        hotelGrossCounted: round(r.hotelGrossCounted),
        otherNaicsRows: r.otherNaicsRows,
      })),
      checks,
    },
  };
  const lenders = {
    asOf,
    fiscalYears: trailing3,
    national: {
      lenders7aByCount: rankLenders("7a", trailing3, null, "count", 25),
      lenders7aByDollars: rankLenders("7a", trailing3, null, "gross", 25),
      cdcs504ByCount: rankLenders("504", trailing3, null, "count", 25),
      cdcs504ByDollars: rankLenders("504", trailing3, null, "gross", 25),
    },
  };
  const statesOut = { asOf, lastFullFiscalYear: lastFullFy, trailing5, lenderFiscalYears: trailing3, states: byState };

  if (DRY) {
    console.log(`\nDry run: would write summary.json, by-state.json and lenders.json to ${OUT_DIR}`);
    console.log(`Hotel loans counted since FY${SINCE_FY}: ${straightCount.toLocaleString("en-US")}, $${round(straightGross).toLocaleString("en-US")} gross approval.`);
    return;
  }
  await mkdir(OUT_DIR, { recursive: true });
  const write = (name: string, data: unknown) => writeFile(path.join(OUT_DIR, name), JSON.stringify(data, null, 2) + "\n");
  await write("summary.json", summary);
  await write("by-state.json", statesOut);
  await write("lenders.json", lenders);
  console.log(`\nWrote content/sba/summary.json, by-state.json, lenders.json (as of ${asOf}).`);
}

main().catch((e) => die((e as Error).stack ?? String(e)));

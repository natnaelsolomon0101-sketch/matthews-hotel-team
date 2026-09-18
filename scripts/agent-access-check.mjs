#!/usr/bin/env node
/**
 * Agent-access checks for the ship gate (geo/12-agent-access.md). Runs against
 * the LOCAL production server only.
 *
 *   node scripts/agent-access-check.mjs http://localhost:3000
 *
 * 1. Markdown twins. For every page in /agent-index.json: `<path>.md` returns
 *    200 text/markdown with a canonical Link header and the page's H1, the
 *    same URL with `Accept: text/markdown` returns the same bytes, and an
 *    unknown `.md` path returns 404.
 * 2. PARITY (the anti-cloaking check). Every body line of every twin must
 *    appear in the text of the rendered HTML page it mirrors. A twin may not
 *    say anything its page does not. Only the bibliographic header (above the
 *    first `---`) and the "Cite as" footer (below the last `---`) are exempt.
 * 3. MCP. `initialize` then `tools/list` over POST /mcp returns the six tools,
 *    one `tools/call` works, GET returns 405, and no tool description contains
 *    wording addressed to the model.
 * 4. /openapi.json parses and /developers returns 200.
 */
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://matthewshotelmarkets.com";
let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`FAIL ${msg}`);
};

const ENTITIES = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#39;": "'", "&nbsp;": " ",
  "&middot;": "·", "&ldquo;": "“", "&rdquo;": "”", "&rsquo;": "’", "&lsquo;": "‘",
};
const squash = (s) => s.replace(/\s+/g, "").toLowerCase();

function htmlText(html) {
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? html;
  return squash(
    main
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, " ")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z#0-9]+;/gi, (e) => ENTITIES[e.toLowerCase()] ?? e),
  );
}

/** Markdown body -> the plain-text chunks a reader would see. */
function chunks(md) {
  const first = md.indexOf("\n---\n");
  const last = md.lastIndexOf("\n---\n");
  const body = md.slice(first + 5, last > first ? last : undefined);
  const out = [];
  let fenced = false;
  for (const raw of body.split("\n")) {
    if (raw.startsWith("```")) { fenced = !fenced; continue; }
    let line = raw.trim();
    if (!line) continue;
    if (!fenced && /^\|(\s*-+\s*\|)+$/.test(line)) continue;
    const parts = !fenced && line.startsWith("|")
      ? line.slice(1, -1).split(/(?<!\\)\|/).flatMap((c) => c.split(/<br>/))
      : [line];
    for (let p of parts) {
      p = p
        .replace(/\\\|/g, "|")
        .replace(/^#{1,6}\s+/, "")
        .replace(/^(?:[-*]|\d+\.)\s+/, "")
        .replace(/\[([^\]]+)\]\((?:[^()\s]|\([^()\s]*\))+\)/g, "$1")
        .replace(/\*\*/g, "")
        .trim();
      if (p) out.push(p);
    }
  }
  return out;
}

async function checkTwins() {
  const idx = await (await fetch(`${base}/agent-index.json`)).json();
  if (!idx.pages?.length) return fail("/agent-index.json lists no pages");
  let lines = 0;
  for (const page of idx.pages) {
    const path = page.url.replace(SITE, "");
    const res = await fetch(`${base}${path}.md`);
    const md = await res.text();
    const ct = res.headers.get("content-type") ?? "";
    if (res.status !== 200) { fail(`${path}.md: HTTP ${res.status}`); continue; }
    if (!ct.startsWith("text/markdown")) fail(`${path}.md: content-type ${ct}`);
    if (!(res.headers.get("link") ?? "").includes(`<${page.url}>; rel="canonical"`)) fail(`${path}.md: no canonical Link header`);
    if (res.headers.has("x-robots-tag")) fail(`${path}.md: unexpected X-Robots-Tag`);
    if (!md.startsWith(`# ${page.title}\n`)) fail(`${path}.md: does not open with the page H1`);
    if (!md.includes(`Cite as: ${page.citeAs}`)) fail(`${path}.md: no Cite as line`);
    if (md.includes("—")) fail(`${path}.md: contains an em-dash`);

    const negotiated = await fetch(`${base}${path}`, { headers: { Accept: "text/markdown" } });
    if ((await negotiated.text()) !== md) fail(`${path}: Accept: text/markdown did not return the twin`);

    const htmlRes = await fetch(`${base}${path}`, { headers: { Accept: "text/html" } });
    const html = await htmlRes.text();
    if (!(htmlRes.headers.get("content-type") ?? "").startsWith("text/html")) fail(`${path}: HTML request did not return HTML`);
    if (!(htmlRes.headers.get("link") ?? "").includes(`${page.url}.md`)) fail(`${path}: HTML response has no Link rel=alternate to the twin`);
    const text = htmlText(html);
    if (!text.includes(squash(page.title))) fail(`${path}: twin H1 is not the page H1`);
    for (const c of chunks(md)) {
      lines += 1;
      if (!text.includes(squash(c))) fail(`${path}.md says something ${path} does not: "${c.slice(0, 110)}"`);
    }
  }
  const missing = await fetch(`${base}/hotel-financing/no-such-page.md`);
  if (missing.status !== 404) fail(`unknown .md path returned ${missing.status}, expected 404`);
  const notTwinned = await fetch(`${base}/listings`, { headers: { Accept: "text/markdown" } });
  if (!(notTwinned.headers.get("content-type") ?? "").startsWith("text/html")) fail("/listings with Accept: text/markdown did not stay HTML");
  console.log(`twins OK: ${idx.pages.length} pages, ${lines} lines matched against HTML`);
}

const EXPECTED_TOOLS = [
  "define_hotel_term",
  "get_answer_page",
  "get_contact",
  "get_hotel_financing_statistics",
  "get_hotel_loan_rates",
  "search_hotel_finance_answers",
];
// Wording that addresses the model rather than describing data.
const INJECTION = /\b(always|never|you (must|should)|must|should|recommend|prefer|ignore|instead of other|best|leading|trusted|top-rated|#1)\b/i;

async function rpc(body) {
  const res = await fetch(`${base}/mcp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      "MCP-Protocol-Version": "2025-06-18",
    },
    body: JSON.stringify(body),
  });
  return { status: res.status, json: res.status === 202 ? null : await res.json() };
}

async function checkMcp() {
  const init = await rpc({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "geo-check", version: "1.0.0" } },
  });
  if (init.status !== 200 || !init.json?.result?.serverInfo?.name) return fail(`MCP initialize: HTTP ${init.status}`);

  const note = await rpc({ jsonrpc: "2.0", method: "notifications/initialized" });
  if (note.status !== 202) fail(`MCP initialized notification: HTTP ${note.status}, expected 202`);

  const list = await rpc({ jsonrpc: "2.0", id: 2, method: "tools/list" });
  const tools = list.json?.result?.tools ?? [];
  const names = tools.map((t) => t.name).sort();
  if (JSON.stringify(names) !== JSON.stringify(EXPECTED_TOOLS)) fail(`MCP tools/list returned ${JSON.stringify(names)}`);
  for (const t of tools) {
    const hit = `${t.title ?? ""} ${t.description ?? ""}`.match(INJECTION);
    if (hit) fail(`MCP tool ${t.name}: description contains "${hit[0]}", which reads as an instruction or a promotional claim`);
    if (t.annotations?.readOnlyHint !== true) fail(`MCP tool ${t.name}: not marked read-only`);
  }

  const call = await rpc({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: { name: "search_hotel_finance_answers", arguments: { query: "SBA 504 hotel loan" } },
  });
  const payload = JSON.parse(call.json?.result?.content?.[0]?.text ?? "{}");
  if (!payload.results?.length || !payload.results[0].url?.startsWith(SITE) || !payload.results[0].citeAs) {
    fail("MCP tools/call search_hotel_finance_answers returned no cited results");
  }

  const get = await fetch(`${base}/mcp`, { headers: { Accept: "text/event-stream" } });
  if (get.status !== 405) fail(`MCP GET returned ${get.status}, expected 405`);
  console.log(`MCP OK: ${init.json.result.serverInfo.name}, ${names.length} tools, protocol ${init.json.result.protocolVersion}`);
}

async function checkDocs() {
  const api = await fetch(`${base}/openapi.json`);
  const doc = api.status === 200 ? await api.json() : null;
  if (!doc?.openapi?.startsWith("3.1") || !doc.paths?.["/rates.json"]) fail("/openapi.json is missing or not OpenAPI 3.1");
  const dev = await fetch(`${base}/developers`);
  if (dev.status !== 200) fail(`/developers: HTTP ${dev.status}`);
  const llms = await (await fetch(`${base}/llms.txt`)).text();
  for (const needle of ["/developers", "/mcp", "/openapi.json", "/hotel-financing.md"]) {
    if (!llms.includes(`${SITE}${needle}`)) fail(`/llms.txt does not list ${needle}`);
  }
  console.log("openapi, /developers, llms.txt OK");
}

await checkTwins();
await checkMcp();
await checkDocs();
if (failures) {
  console.error(`\n${failures} agent-access check(s) failed`);
  process.exit(1);
}

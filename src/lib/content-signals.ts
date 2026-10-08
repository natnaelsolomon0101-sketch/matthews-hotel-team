// The site's one statement of how its content may be used, shared by
// /robots.txt and /ai.txt so the two files can never disagree. Changing a
// value here is a robots policy change: owner only (geo/AGENTS.md, skill
// section 9).
//
// Content Signals (contentsignals.org; announced by Cloudflare on 2025-09-24,
// https://blog.cloudflare.com/content-signals-policy/, released under CC0;
// both read 2026-09-18). Three signals, each `yes` or `no`, written inside a
// User-agent group between the User-agent and Allow lines:
//   search    building a search index and returning links and excerpts
//   ai-input  feeding the content to a model at answer time (RAG, grounding)
//   ai-train  training or fine-tuning a model
// All three are `yes`: robots.txt already allows every search, fetch and
// training crawler by name, and the signal says the same thing in the one
// vocabulary written for it. A parser that does not know the line ignores it
// (RFC 9309 section 2.2.4), so it cannot change any bot's access.
export const CONTENT_SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=yes";

// Genuinely private paths only. See the robots.txt route for why `/_next/`
// is not here.
export const DISALLOW = ["/api/"];

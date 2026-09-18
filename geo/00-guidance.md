# geo/00-guidance.md — operator guidance, fetched 2026-09-17

Every agent reads this before writing config or content.

## A. Google Search Central — "AI features and your website"
Source: https://developers.google.com/search/docs/appearance/ai-features (fetched 2026-09-17)

1. Verbatim: **"There are no additional requirements to appear in AI Overviews or AI Mode, nor other
   special optimizations necessary."**
2. Eligibility = the page must be **indexed and eligible to be shown in Search with a snippet**. AI
   features are "built into Search and integral to how Search functions" — i.e. **they use the normal
   Search index**. There is no separate AI index to get into.
3. Verbatim: **"You don't need to create new machine readable files, AI text files, or markup to
   appear in these features. There's also no special schema.org structured data that you need to add."**
4. The page contains **no mention of llms.txt**. Google does not use it as a Search/AI lever.
5. Snippet controls *do* suppress you: `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` all
   limit what AI features can show. → Keep the site's existing `max-snippet:-1`. Never add `nosnippet`.
6. What it does recommend is ordinary, and all of it is in scope for this run: allow crawling in
   robots.txt; good internal linking; page experience; text content actually present on the page;
   high-quality images/video; **structured data that matches visible content**; current Business
   Profile / Merchant Center data.

**Operational consequence:** the single highest-leverage work for Google-family engines (Gemini, AI
Mode, AI Overviews) is *classic* — be indexable, rank, and answer the question in extractable text.
Do not let anyone on this run spend effort on Google-specific "AI markup." It does not exist.

## B. Anthropic guidance on agent-readable sites
**Honest status: I could not verify a first-party Anthropic page titled "Writing for Agents."**
`https://www.anthropic.com/engineering/writing-for-agents` returns **404**. Searches surface
secondary write-ups attributing an llms.txt recommendation to Anthropic, plus a first-party article
on *writing tools* for agents (https://www.anthropic.com/engineering/writing-tools-for-agents),
which is about tool design, not site SEO.

What *is* first-party verifiable: **Anthropic publishes llms.txt files for its own properties** —
`https://docs.anthropic.com/llms.txt`, `https://code.claude.com/llms.txt`,
`https://platform.claude.com/llms-full.txt`. That is real evidence of the practice, and it is the
honest basis for shipping one. It is not a documented ranking or citation guarantee.

**Do not cite "Anthropic's Writing for Agents guidance" as a source in any deliverable.** Cite the
llms.txt files above, or the llmstxt.org spec, and say plainly what is and isn't known.

## C. The llms.txt call for this run
Ship it, cheaply, and do not oversell it:
- Google: explicitly not used (see A.3/A.4).
- Anthropic: practices it on its own docs; no published claim about third-party sites.
- Perplexity and other agents: read it in some observed cases; not guaranteed.
- Cost is ~30 minutes if generated from the same data modules as the sitemap. The real win here is
  **de-drifting** the existing hand-written `public/llms.txt`, which is already stale.
- **Nobody plans around it.** The retrieval work (crawlability + ranking + a 300-word extractable
  answer) is what actually produces citations.

## D. Standing rule on sources
This file is the template for how every number in this run gets handled: **name the source, give the
date, and say so plainly when something could not be verified.** "Industry sources say" and
"Anthropic recommends" without a working URL are both failures. If you cannot verify it, write
"unverified" and move on — do not launder it into a claim.

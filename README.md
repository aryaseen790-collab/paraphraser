# OG Humanizer ([oghumanizer.com](https://oghumanizer.com))

A free AI humanizer and paraphrasing site powered by **Claude Haiku 5.5** (`claude-haiku-5-5`) or **Google Gemini** (free tier), switchable with one setting. It feels unlimited to normal users (no sign-up, no credit counter) while invisible guardrails keep the API bill under a hard cap.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · Anthropic TypeScript SDK · Google Gen AI SDK · Upstash Redis · Cloudflare Turnstile · Vercel

## Choosing the AI model

Set `AI_PROVIDER` (and the matching key) in your environment, then redeploy:

| `AI_PROVIDER` | What happens | Keys needed |
|---|---|---|
| `claude` (default) | Claude Haiku for every request. About $0.36 per 1,000 rewrites. | `ANTHROPIC_API_KEY` |
| `gemini` | Gemini only, on Google's free tier. When the free daily quota runs out, users see "high demand, try again later" until it resets. | `GEMINI_API_KEY` |
| `gemini,claude` | **Recommended free-first setup:** Gemini first; if Gemini errors or its quota runs out, the same request goes to Claude automatically. Claude spend still stops at `DAILY_BUDGET_USD`, after which only Gemini is used. | both |

- Get a Gemini key at [Google AI Studio](https://aistudio.google.com/apikey). The default model is `gemini-flash-lite-latest`; set `GEMINI_MODEL` to pin another one.
- **Free-tier trade-offs:** Google's free tier has low per-minute and per-day request limits, and under Google's terms for unpaid services your users' text may be used to improve Google's products and seen by human reviewers. The Privacy page updates automatically to say so when Gemini is enabled. Check Google's current [pricing and limits](https://ai.google.dev/gemini-api/docs/pricing) and [terms](https://ai.google.dev/gemini-api/terms).
- If you later enable billing on Google, set `GEMINI_INPUT_PRICE_PER_M` / `GEMINI_OUTPUT_PRICE_PER_M` so Gemini spend counts toward the daily budget.

## Features

- Text box with live word counter (1,000-word limit)
- Seven styles: Standard, Fluent, Formal, Simple, Creative, Shorten, Expand
- Output language: Auto-detect (same as input), English, Urdu, Arabic, Hindi, Spanish, French, German, Portuguese, Indonesian, Turkish, Bengali
- Streaming output (words appear as they're generated)
- Side-by-side view with changed words highlighted, Copy and Clear
- Light/dark theme, mobile-first layout, right-to-left text support
- Home page (`/`) is the AI humanizer (primary keyword "humanize ai"); the paraphraser lives at `/paraphrasing-tool`; `/humanize-ai` permanently redirects to `/`
- SEO landing pages (`/formal-paraphraser`, `/urdu-paraphrasing-tool`, `/humanize-ai-tagalog`, …), guides, sitemap, robots.txt, Open Graph image
- About, Privacy Policy, Terms of Use, Contact pages
- Ad slots beside or below the tool (off by default)

## How costs are controlled

The browser never talks to Claude. `POST /api/paraphrase` runs every check first, so a rejected request costs nothing:

| # | Guardrail | Where |
|---|---|---|
| 1 | Cheap models (Claude Haiku, thinking off; or Gemini free tier) | `src/config/ai.ts`, `src/lib/ai/` |
| 2 | ≤ 1,000 words and ≤ 12,000 characters, checked on the server | `src/lib/validate.ts` |
| 3 | `max_tokens` ≈ 1.5× the input estimate, capped at 2,000 | `src/lib/prompt.ts` |
| 4 | 30 requests/hour per IP (sliding window) | `src/config/protection.ts` |
| 5 | Cloudflare Turnstile token verified on every request | `src/lib/turnstile.ts` |
| 6 | Cache: SHA-256(text + style + language) → result for 7 days | `src/lib/cache-key.ts` |
| 7 | Daily budget switch from real token usage: paid models stop, free Gemini continues, else "high demand" message | `src/lib/budget.ts`, `src/config/pricing.ts` |
| + | Monthly spend limit in the Claude Console (the hard backstop) | Console |
| + | Build fails if a secret appears in browser files | `scripts/check-secrets.mjs` |

In production the route **refuses to call the AI model** if the Upstash or Turnstile keys are missing, so a forgotten env var can't remove the guardrails.

### Cost model

Haiku 5.5 is priced at $0.10 per million input tokens and $0.50 per million output tokens (prompts up to 100K tokens; check [current pricing](https://docs.claude.com/en/docs/about-claude/pricing) and edit `src/config/pricing.ts` if it changes).

```
cost per request ≈ 600 input × $0.10/1M + 600 output × $0.50/1M ≈ $0.00036
monthly cost     ≈ requests per month × $0.00036   (before cache savings)
```

| Uncached requests / day | ≈ per day | ≈ per month |
|---|---|---|
| 1,000 | $0.36 | $11 |
| 10,000 | $3.60 | $108 |

With `DAILY_BUDGET_USD=3`, the site serves roughly 8,000 uncached rewrites a day, and spend can't exceed about $93 a month. Replace the 600/600 estimate with real numbers after week one (see the checklist in `DEPLOYMENT.md`).

## Getting started

```bash
npm install
cp .env.example .env.local    # fill in the values (see comments in the file)
npm run dev                   # http://localhost:3000
```

Without Upstash/Turnstile keys, local dev uses an in-memory store and skips the bot check. Production never does.

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm test` | Unit tests (Vitest) |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run build` | Production build, then the secret-leak check |

## Configuration

| File | What you can change |
|---|---|
| `.env.local` / Vercel env vars | Keys, site name/URL, contact email, daily budget, ads on/off |
| `src/config/ai.ts` | Claude model, default Gemini model, provider order |
| `src/config/limits.ts` | Word/character caps, output-token caps |
| `src/config/protection.ts` | Rate limit, cache lifetime |
| `src/config/pricing.ts` | Per-token prices used for the budget (Gemini = 0 on the free tier) |
| `src/config/modes.ts` | The seven styles and their instructions to Claude |
| `src/config/languages.ts` | The language dropdown |
| `src/config/landing.ts` | SEO landing pages (slug, title, H1, intro) |
| `src/content/guides.ts` | How-to articles |

## Project structure

```
src/
  app/
    api/paraphrase/route.ts   the only place that calls the AI model (all checks live here)
    [slug]/page.tsx           SEO landing pages
    guides/                   how-to articles
    about, privacy, terms, contact/
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
  components/                 Paraphraser (the tool), ToolPage, AdSlot, theme, header/footer
  config/                     editable settings (see above)
  lib/ai/                     Claude and Gemini providers + fallback chain
  lib/                        prompt building, validation, store (Redis), budget, Turnstile, diff
scripts/check-secrets.mjs     fails the build if a secret leaks into browser files
tests/                        unit tests
```

## Deploying

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for Vercel, the custom domain, Search Console, ads, and the pre-launch checklist (including how to confirm the API key isn't visible in the browser).

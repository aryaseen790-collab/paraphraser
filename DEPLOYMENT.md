# Deployment guide (Phase 5)

This guide takes the site from your laptop to `https://yourdomain.com` on Vercel. Budget about an hour the first time.

## 1. Create the accounts and keys

| Service | What to do | Env vars it gives you |
|---|---|---|
| **Claude Console** (console.anthropic.com) | Add billing, create an API key, and **set a monthly spend limit** (Settings → Limits). This is the hard cap behind the code's daily budget. | `ANTHROPIC_API_KEY` |
| **Upstash** (upstash.com) | Create a Redis database (free tier, region close to your Vercel region, e.g. `us-east-1`). Open it and copy the REST URL and token. | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` |
| **Cloudflare Turnstile** (dash.cloudflare.com → Turnstile) | Add a widget. Widget mode: **Invisible** (or Managed). Hostnames: your domain, plus `localhost` while testing. | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |
| **GitHub** | Push this repository. | |
| **Vercel** (vercel.com) | Import the GitHub repository. | |

> **Choosing `DAILY_BUDGET_USD`:** keep it at or below *(Console monthly limit ÷ 31)*. Example: a $90/month Console limit → `DAILY_BUDGET_USD=2.9`. The code switch is what users see ("high demand, try again later"). The Console limit is the backstop if anything goes wrong.

## 2. Test locally first

```bash
npm install
cp .env.example .env.local    # fill in every value
npm run dev                   # http://localhost:3000
```

Use Cloudflare's test keys locally if you like: site key `1x00000000000000000000AA`, secret `1x0000000000000000000000000000000AA` (always pass).

```bash
npm test          # unit tests
npm run build     # production build + automatic secret-leak check
```

## 3. Deploy on Vercel

1. **Vercel → Add New → Project → Import** your GitHub repository. The framework is detected as Next.js; keep the default build settings.
2. Under **Environment Variables**, add every key from `.env.example` for the *Production* (and *Preview*) environment:
   - `ANTHROPIC_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `TURNSTILE_SECRET_KEY`, `DAILY_BUDGET_USD`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_URL` (your final `https://` domain), `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_ADS_ENABLED=false` for now
   - **Do not** set `ALLOW_DEV_FALLBACKS` in production.
3. Click **Deploy**. The build fails on purpose if a secret ends up in browser files (`scripts/check-secrets.mjs`).
4. `NEXT_PUBLIC_*` values are baked in at build time. After changing one, **redeploy** (Deployments → ⋯ → Redeploy).

> **Hobby vs Pro:** Vercel's free Hobby plan is for non-commercial use. It's fine for testing. Move to **Vercel Pro** (or another host such as Cloudflare) before you turn on ads.

## 4. Connect your custom domain

1. Vercel → Project → **Settings → Domains → Add** `yourdomain.com` (and `www.yourdomain.com`, set to redirect to the apex or the other way round).
2. At your registrar, create the DNS records Vercel shows, usually:
   - apex `yourdomain.com`: **A** record → `76.76.21.21`
   - `www`: **CNAME** → `cname.vercel-dns.com`
3. Wait for the green "Valid Configuration" tick. HTTPS certificates are issued automatically.
4. Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` and redeploy so canonical URLs, Open Graph tags and the sitemap use the real domain.
5. Add `yourdomain.com` to the Turnstile widget's hostname list.

> If you put Cloudflare's proxy (orange cloud) in front of Vercel, the server reads the visitor IP from `cf-connecting-ip`. If you **don't** use Cloudflare's proxy, nobody can set that header except the visitor, so remove it from `src/lib/ip.ts` to stop clients spoofing their rate-limit identity.

## 5. Search Console and analytics

1. **Google Search Console** → Add property → Domain → verify with the DNS TXT record → **Sitemaps** → submit `https://yourdomain.com/sitemap.xml`.
2. **Analytics:** Vercel Web Analytics (one click in the dashboard), Plausible, or Google Analytics. If you add a cookie-based tool or ads and have EU/UK visitors, add a consent banner.

## 6. Turning on ads (later)

1. Apply for **Google AdSense** once the site has real content and some traffic.
2. When approved, set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-…` and `NEXT_PUBLIC_ADS_ENABLED=true`, then redeploy.
3. Create ad units in AdSense and put their slot IDs in `src/components/ToolPage.tsx` (the `slot="sidebar"` and `slot="below-tool"` props). Until then, the slots show dashed placeholders.
4. Add `public/ads.txt` with the line AdSense gives you.

---

# Pre-launch checklist

**Security (do this first)**
- [ ] Open the live site in Chrome → **View Page Source** and search for `sk-ant`: no results.
- [ ] DevTools → **Network** → press Paraphrase → open the `/api/paraphrase` request: the request has only `text`, `mode`, `language`, `turnstileToken`, and no key appears in any header or response.
- [ ] DevTools → **Sources**: search all files (Ctrl/Cmd+Shift+F) for `sk-ant` and for your Upstash token: no results.
- [ ] The Vercel build log shows `✓ check-secrets: … no secrets found`.
- [ ] `.env.local` is **not** in GitHub (it's git-ignored).

**Cost guardrails**
- [ ] Monthly spend limit is set in the Claude Console.
- [ ] `DAILY_BUDGET_USD` is set and ≤ monthly limit ÷ 31.
- [ ] Budget switch works: temporarily set `DAILY_BUDGET_USD=0`, redeploy, and confirm the site says "We're experiencing high demand…". Then restore the value.
- [ ] Rate limit works: 31 quick requests from one browser → the 31st gets "You've sent a lot of requests…".
- [ ] Cache works: paraphrase the same text twice with the same style; the second response has header `X-Cache: HIT` and is instant.
- [ ] Input cap works: pasting 1,001+ words disables the button. The server also rejects it if you call the API directly.
- [ ] `curl -X POST https://yourdomain.com/api/paraphrase -H 'content-type: application/json' -d '{"text":"hi","mode":"standard","language":"auto"}'` returns *403 "We couldn't verify your browser"* (no Turnstile token = no Claude call).

**Product**
- [ ] A 300-word paste returns its first words in under 2 seconds and finishes in under 5.
- [ ] Every style and the Urdu/Arabic (right-to-left) output look right on a phone.
- [ ] Copy, Clear, Show changes and the dark-mode toggle work on iOS Safari and Android Chrome.
- [ ] About, Privacy, Terms and Contact pages have your real details (replace `hello@example.com`); legal text reviewed for your country.

**SEO**
- [ ] `https://yourdomain.com/sitemap.xml` and `/robots.txt` load and show your real domain.
- [ ] Sitemap submitted in Google Search Console.
- [ ] Share a link in WhatsApp/Slack: the preview image and title appear.

**After week one**
- [ ] In the Upstash data browser, open `stats:YYYY-MM-DD` keys: divide spend (`spend:YYYY-MM-DD`, micro-dollars) by `claudeCalls` to get the real cost per request, and look at `cacheHits`, `rateLimited`, `botBlocked`, `budgetBlocked`.
- [ ] Compare with the Claude Console usage page, then adjust `DAILY_BUDGET_USD` and the limits in `src/config/`.

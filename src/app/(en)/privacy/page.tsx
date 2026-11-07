import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { usesClaude, usesGemini } from "@/config/ai";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles the text you paraphrase and other data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const claude = usesClaude();
  const gemini = usesGemini();
  return (
    <ContentPage>
      <h1>Privacy Policy</h1>
      <p>
        <em>Last updated: November 2, 2026.</em> This page explains what happens to your data when you use{" "}
        {siteConfig.name}. Please replace it with a policy reviewed for your own jurisdiction before launch.
      </p>

      <h2>The text you paraphrase</h2>
      <ul>
        <li>
          Your text is sent over an encrypted connection to our server and then to our AI provider
          {claude && gemini ? "s (Google Gemini, with Anthropic Claude as a backup)" : gemini ? ", Google (Gemini)" : ", Anthropic (Claude)"}{" "}
          only to generate the rewrite.
        </li>
        <li>
          To return repeat requests instantly and keep the service free, the <strong>rewritten result</strong> of a request
          is cached for up to <strong>7 days</strong>. It is stored under a one-way SHA-256 hash of your text, style and
          language; we do not keep a readable copy of your original text, and the cache is not linked to you.
        </li>
        <li>We do not sell your text or use it for advertising profiles.</li>
        {claude && (
          <li>
            Anthropic processes requests under its commercial terms, does not use them to train its models, and may
            retain API data for a limited period for safety and abuse monitoring. See{" "}
            <a href="https://www.anthropic.com/legal/privacy" rel="noopener noreferrer" target="_blank">Anthropic&apos;s privacy policy</a>.
          </li>
        )}
        {gemini && (
          <li>
            <strong>Google Gemini:</strong> we may use Google&apos;s free Gemini API tier. Under Google&apos;s terms for
            unpaid services, Google may use submitted text and responses to provide, improve and develop its products,
            and human reviewers may read them. See the{" "}
            <a href="https://ai.google.dev/gemini-api/terms" rel="noopener noreferrer" target="_blank">Gemini API terms</a>{" "}
            and{" "}
            <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google&apos;s privacy policy</a>.
          </li>
        )}
        <li>Please do not paste passwords, financial details or other sensitive personal information.</li>
      </ul>

      <h2>Abuse protection</h2>
      <p>
        To stop bots, we use Cloudflare Turnstile, which may process technical information about your browser and
        device. Your IP address is used briefly to apply a per-visitor rate limit; the counter expires automatically
        within an hour. We also keep daily totals (such as the number of requests) that contain no personal data.
      </p>

      <h2>Cookies, analytics and ads</h2>
      <p>
        We store your light or dark theme choice in your browser. We use Google Tag Manager and Google Analytics to
        understand how many people visit, which pages they read and how they found us. These tools set cookies and
        collect information such as pages viewed, approximate location, device and browser type. They do not receive
        the text you paste into the tool. See{" "}
        <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
          how Google uses data from sites that use its services
        </a>
        . If advertising (for example Google AdSense) is enabled, ad providers may also use cookies to show and measure
        ads. Where the law requires it, we will ask for your consent first.
      </p>

      <h2>Your choices and contact</h2>
      <p>
        You can clear your browser storage at any time. For privacy questions, contact us via the{" "}
        <Link href="/contact">Contact page</Link>.
      </p>
    </ContentPage>
  );
}

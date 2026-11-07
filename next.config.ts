import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  experimental: {
    // Put the small Tailwind stylesheet straight into the HTML so the first paint
    // doesn't wait for a second request.
    inlineCss: true,
    // One 404 page for URLs that match no route (the site has a root layout per language).
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // The humanizer now lives on the home page.
    return [
      { source: "/humanize-ai", destination: "/", permanent: true },
      // These languages now have full translated sites.
      { source: "/spanish-paraphrasing-tool", destination: "/es/parafraseador", permanent: true },
      { source: "/portuguese-paraphrasing-tool", destination: "/pt/reescrever-texto", permanent: true },
      { source: "/french-paraphrasing-tool", destination: "/fr/reformuler-un-texte", permanent: true },
      { source: "/indonesian-paraphrasing-tool", destination: "/id/parafrase-online", permanent: true },
      { source: "/german-paraphrasing-tool", destination: "/de/text-umschreiben", permanent: true },
    ];
  },
  async headers() {
    const headers = [...securityHeaders];
    // Pre-launch: tell search engines not to index anything, including non-HTML
    // files. Set ALLOW_INDEXING=true (and redeploy) to launch.
    if (process.env.ALLOW_INDEXING !== "true") {
      headers.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;

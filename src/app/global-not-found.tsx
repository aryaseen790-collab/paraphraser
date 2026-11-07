import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Page not found | OG Humanizer",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <SiteShell locale="en">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-on-accent hover:bg-accent-hover">
          Go to the AI humanizer
        </Link>
      </div>
    </SiteShell>
  );
}

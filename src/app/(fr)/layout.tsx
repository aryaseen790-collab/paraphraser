import type { Metadata } from "next";
import { SiteShell, baseMetadata } from "@/components/SiteShell";
import { getDictionary } from "@/i18n/dictionaries";

export { viewport } from "@/components/SiteShell";

const dict = getDictionary("fr");

export const metadata: Metadata = baseMetadata("fr", dict.home.description);

/** Root layout for the French site: <html lang="fr">. */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="fr" chrome={dict.chrome}>
      {children}
    </SiteShell>
  );
}

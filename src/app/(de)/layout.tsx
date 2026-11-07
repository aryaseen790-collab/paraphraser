import type { Metadata } from "next";
import { SiteShell, baseMetadata } from "@/components/SiteShell";
import { getDictionary } from "@/i18n/dictionaries";

export { viewport } from "@/components/SiteShell";

const dict = getDictionary("de");

export const metadata: Metadata = baseMetadata("de", dict.home.description);

/** Root layout for the German site: <html lang="de">. */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="de" chrome={dict.chrome}>
      {children}
    </SiteShell>
  );
}

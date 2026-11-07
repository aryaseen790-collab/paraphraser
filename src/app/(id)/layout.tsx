import type { Metadata } from "next";
import { SiteShell, baseMetadata } from "@/components/SiteShell";
import { getDictionary } from "@/i18n/dictionaries";

export { viewport } from "@/components/SiteShell";

const dict = getDictionary("id");

export const metadata: Metadata = baseMetadata("id", dict.home.description);

/** Root layout for the Indonesian site: <html lang="id">. */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="id" chrome={dict.chrome}>
      {children}
    </SiteShell>
  );
}

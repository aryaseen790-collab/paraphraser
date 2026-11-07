import type { Metadata } from "next";
import { SiteShell, baseMetadata } from "@/components/SiteShell";
import { getDictionary } from "@/i18n/dictionaries";

export { viewport } from "@/components/SiteShell";

const dict = getDictionary("pt");

export const metadata: Metadata = baseMetadata("pt", dict.home.description);

/** Root layout for the Portuguese site: <html lang="pt">. */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="pt" chrome={dict.chrome}>
      {children}
    </SiteShell>
  );
}

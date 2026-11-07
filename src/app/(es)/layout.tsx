import type { Metadata } from "next";
import { SiteShell, baseMetadata } from "@/components/SiteShell";
import { getDictionary } from "@/i18n/dictionaries";

export { viewport } from "@/components/SiteShell";

const dict = getDictionary("es");

export const metadata: Metadata = baseMetadata("es", dict.home.description);

/** Root layout for the Spanish site: <html lang="es">. */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="es" chrome={dict.chrome}>
      {children}
    </SiteShell>
  );
}

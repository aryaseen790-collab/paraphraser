import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("es", "home");

export default function Page() {
  return <LocalePage locale="es" page="home" />;
}

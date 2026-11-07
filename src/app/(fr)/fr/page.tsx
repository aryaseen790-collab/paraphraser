import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("fr", "home");

export default function Page() {
  return <LocalePage locale="fr" page="home" />;
}

import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("pt", "home");

export default function Page() {
  return <LocalePage locale="pt" page="home" />;
}

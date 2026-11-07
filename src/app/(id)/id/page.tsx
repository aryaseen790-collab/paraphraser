import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("id", "home");

export default function Page() {
  return <LocalePage locale="id" page="home" />;
}

import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("de", "home");

export default function Page() {
  return <LocalePage locale="de" page="home" />;
}

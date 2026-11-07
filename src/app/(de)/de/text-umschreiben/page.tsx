import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("de", "paraphraser");

export default function Page() {
  return <LocalePage locale="de" page="paraphraser" />;
}

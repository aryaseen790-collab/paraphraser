import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("id", "paraphraser");

export default function Page() {
  return <LocalePage locale="id" page="paraphraser" />;
}

import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("pt", "paraphraser");

export default function Page() {
  return <LocalePage locale="pt" page="paraphraser" />;
}

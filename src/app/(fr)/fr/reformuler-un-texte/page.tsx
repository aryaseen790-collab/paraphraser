import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("fr", "paraphraser");

export default function Page() {
  return <LocalePage locale="fr" page="paraphraser" />;
}

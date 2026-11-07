import { LocalePage, localePageMetadata } from "@/components/LocalePage";

export const metadata = localePageMetadata("es", "paraphraser");

export default function Page() {
  return <LocalePage locale="es" page="paraphraser" />;
}

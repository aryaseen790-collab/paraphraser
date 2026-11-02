import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${siteConfig.name} team.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <ContentPage>
      <h1>Contact</h1>
      <p>
        Questions, feedback, bug reports or partnership ideas? We would love to hear from you. Email us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> and we will reply as soon as we can.
      </p>
      <p>
        If you are reporting a problem, tell us which style and language you used and, if you are comfortable, a short
        sample of the text. Please do not send sensitive personal information.
      </p>
    </ContentPage>
  );
}

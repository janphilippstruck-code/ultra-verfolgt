import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT } from "@/content/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Ultra Verfolgt" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung für das Projekt Ultra Verfolgt.",
      },
      { property: "og:title", content: "Impressum | Ultra Verfolgt" },
      {
        property: "og:description",
        content: "Impressum und Anbieterkennzeichnung für das Projekt Ultra Verfolgt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalPage title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p className="mt-3">
          {CONTACT.name}
          <br />
          {CONTACT.street}
          <br />
          {CONTACT.city}
          <br />
          {CONTACT.country}
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p className="mt-3">
          Telefon: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </section>
    </LegalPage>
  );
}

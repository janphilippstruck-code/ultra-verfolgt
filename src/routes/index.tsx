import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero, JagdFeatures, Konzept, Outro, Timeline } from "@/components/sections";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.ogTitle },
      { property: "og:description", content: SITE.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Konzept />
        <Timeline />
        <Eckdaten />
        <Outro />
      </main>
      <SiteFooter />
    </>
  );
}

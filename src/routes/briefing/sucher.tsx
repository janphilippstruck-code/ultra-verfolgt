import { createFileRoute } from "@tanstack/react-router";
import { BriefingGate } from "@/components/BriefingGate";

export const Route = createFileRoute("/briefing/sucher")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Sucher-Briefing – Ultra Verfolgt" },
      { name: "description", content: "Interner Bereich für das Sucher-Team der ersten Jagd." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Sucher-Briefing – Ultra Verfolgt" },
      { property: "og:description", content: "Interner Bereich für das Sucher-Team der ersten Jagd." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <BriefingGate group="sucher" />,
});

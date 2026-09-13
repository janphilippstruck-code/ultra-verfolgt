import { createFileRoute } from "@tanstack/react-router";
import { BriefingGate } from "@/components/BriefingGate";

export const Route = createFileRoute("/briefing/laeufer")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Läufer-Briefing – Ultra Verfolgt" },
      { name: "description", content: "Interner Bereich für die Laufteams der ersten Jagd." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Läufer-Briefing – Ultra Verfolgt" },
      { property: "og:description", content: "Interner Bereich für die Laufteams der ersten Jagd." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <BriefingGate group="laeufer" />,
});

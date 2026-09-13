/** Typen für die internen Briefings. Die Inhalte selbst liegen serverseitig. */

export type BriefingBlock =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; title?: string; lines: string[] }
  | { type: "schedule"; items: { time: string; title?: string; text?: string }[] }
  | { type: "cards"; items: { title: string; lines: string[] }[] }
  | { type: "quotes"; items: string[] };

export type BriefingSection = {
  id: string;
  nav: string;
  title: string;
  accent?: boolean;
  blocks: BriefingBlock[];
};

export type Briefing = {
  group: "laeufer" | "sucher";
  title: string;
  date: string;
  facts: string[];
  intro: string[];
  sections: BriefingSection[];
};

export type BriefingGroup = Briefing["group"];

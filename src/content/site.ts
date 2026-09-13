/**
 * Zentrale Inhalts- und Konfigurationsdatei.
 * Alle veränderbaren Texte, Daten und Kontaktangaben werden hier gepflegt.
 */

export const EVENT_DATE_ISO = "2026-09-20";
export const EVENT_DATE_LONG = "20. SEPTEMBER 2026";
export const EVENT_DATE_SHORT = "20.09.2026";
export const EVENT_REGION = "SAUERLAND";

/** 20.09.2026, 08:00 Uhr Europe/Berlin (UTC+2) */
export const EVENT_START_UTC = Date.UTC(2026, 8, 20, 6, 0, 0);
/** 20.09.2026, 16:00 Uhr Europe/Berlin (UTC+2) */
export const EVENT_END_UTC = Date.UTC(2026, 8, 20, 14, 0, 0);

export const SITE_URL = "https://ultraverfolgt.xn--ballonlufer-r8a.de";
export const OG_IMAGE = `${SITE_URL}/social/ultra-verfolgt-og.jpg`;

export const BALLONLAEUFER = {
  label: "Ein Projekt von Ballonläufer",
  href: "https://xn--ballonlufer-r8a.de/",
  logoAlt: "Ballonläufer",
};

export const SITE = {
  name: "Ultra Verfolgt",
  claim: "Gejagt bis ins Ziel",
  fullName: "ULTRA VERFOLGT – GEJAGT BIS INS ZIEL",
  title: "Ultra Verfolgt – Gejagt bis ins Ziel",
  description:
    "Drei Laufteams, ein Sucher-Team, acht Stunden und ein gemeinsames Ziel. Ultra Verfolgt ist ein taktisches Lauf- und Verfolgungsspiel im Sauerland.",
  ogTitle: "Ultra Verfolgt – Gejagt bis ins Ziel",
  ogDescription:
    "Drei Teams. Acht Stunden. Ein Ziel. Die erste Jagd beginnt am 20. September 2026.",
  logoAlt: "Ultra Verfolgt – Gejagt bis ins Ziel",
};

export const NAV_LINKS = [
  { label: "Konzept", href: "#konzept" },
  { label: "Der Weg", href: "#der-weg" },
  { label: "Season 1", href: "#season-1" },
  { label: "Season 2", href: "#season-2" },
  { label: "Intern", href: "#intern" },
];

export const NAV_HIGHLIGHT = { label: EVENT_DATE_SHORT, href: "#start" };

export const HERO = {
  kicker: `${EVENT_DATE_LONG} · ${EVENT_REGION}`,
  headline: "DREI TEAMS. ACHT STUNDEN. EIN ZIEL.",
  lead: "Ein taktisches Lauf- und Verfolgungsspiel, bei dem der kürzeste Weg nicht immer der sicherste ist.",
  cta: "DIE JAGD ENTDECKEN",
  ctaHref: "#konzept",
};

export const COUNTDOWN = {
  label: "DIE ERSTE JAGD BEGINNT IN",
  running: "DIE JAGD LÄUFT.",
  finished: "DIE ERSTE JAGD IST GESCHICHTE.",
  units: { days: "TAGE", hours: "STUNDEN", minutes: "MINUTEN", seconds: "SEKUNDEN" },
};

export const EXPERIMENT = {
  eyebrow: "SEASON 1 // DOKUMENTATION",
  heading: "DAS EXPERIMENT WIRD FESTGEHALTEN.",
  paragraphs: [
    "Was passiert, wenn sechs Läufer ihren eigenen Weg wählen – und ein Team alles daransetzt, sie wiederzufinden?",
    "Bei der ersten Ausgabe von Ultra Verfolgt sind die Kameras dabei.",
  ],
  bullets: ["Bei den Läufern.", "Bei den Suchern.", "Unterwegs.", "Und aus verschiedenen Perspektiven."],
  closing: ["Keine zweite Chance.", "Keine nachgestellten Entscheidungen."],
  final: "Acht Stunden Jagd – aus beiden Perspektiven.",
};

export const SEASON2 = {
  eyebrow: "SEASON 2 // WINTER 2026",
  heading: "DIE ERSTE JAGD IST ERST DER ANFANG.",
  paragraphs: [
    "Eine zweite Ausgabe von Ultra Verfolgt ist für November / Dezember 2026 geplant.",
    "Du möchtest beim nächsten Mal selbst auf der Flucht sein – oder die Jagd aufnehmen?",
  ],
  cta: "UNVERBINDLICH INTERESSE ANMELDEN",
  consent:
    "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Interessenbekundung für Ultra Verfolgt Season 2 gespeichert und zur Kontaktaufnahme verwendet werden. Weitere Informationen finde ich in der Datenschutzerklärung.",
  submit: "INTERESSE SENDEN",
  disclaimer:
    "Die Interessenbekundung ist unverbindlich und stellt weder eine Anmeldung noch eine Startplatzzusage dar.",
  successHeading: "DU BIST AUF DEM RADAR.",
  successText: [
    "Deine Interessenbekundung ist eingegangen.",
    "Dies ist noch keine Anmeldung oder Startplatzzusage.",
    "Wir melden uns, sobald Season 2 konkreter wird.",
  ],
};

export const INTERN = {
  eyebrow: "INTERN // SEASON 1",
  heading: "NUR FÜR DIE TEILNEHMER DER ERSTEN JAGD",
  text: "Dieser Bereich ist ausschließlich für die Teilnehmer der ersten Jagd bestimmt.",
  links: [
    { label: "LÄUFER-BRIEFING", to: "/briefing/laeufer" as const },
    { label: "SUCHER-BRIEFING", to: "/briefing/sucher" as const },
  ],
};


export type KonzeptBlock = { text: string; emphasis?: boolean };

export const KONZEPT: { heading: string; blocks: KonzeptBlock[] } = {
  heading: "DAS KONZEPT",
  blocks: [
    { text: "Drei Zweier-Teams machen sich auf den Weg zu einem gemeinsamen Ziel." },
    {
      text: "Es gibt keine vorgegebene Laufstrecke. Jedes Team entscheidet selbst, welchen Weg es nimmt, wo es Tempo macht und wann es versucht, von der Bildfläche zu verschwinden.",
    },
    { text: "DENN DIE LÄUFER SIND NICHT ALLEIN UNTERWEGS.", emphasis: true },
    {
      text: "Ein mobiles Sucher-Team setzt alles daran, die Teams aufzuspüren und zu stellen, bevor sie ihr Ziel erreichen.",
    },
    {
      text: "Die Entfernung ist so gewählt, dass erfahrene Marathonläufer das Ziel innerhalb von acht Stunden realistisch erreichen können.",
    },
    { text: "DER KÜRZESTE WEG IST NICHT ZWANGSLÄUFIG DER SICHERSTE.", emphasis: true },
    { text: "Die Läufer gewinnen, wenn ein nicht gestelltes Team das Ziel erreicht." },
    { text: "Das Sucher-Team gewinnt, wenn es alle Läufer-Teams rechtzeitig aufspürt." },
  ],
};

export type TimelineStation = {
  date: string;
  title: string;
  paragraphs: string[];
  marker: "past" | "current" | "upcoming" | "finish";
  badge?: string;
};

export const TIMELINE: {
  heading: string;
  intro: string;
  stations: TimelineStation[];
} = {
  heading: "DER WEG BIS ZUR ERSTEN JAGD",
  intro: "Das Projekt nimmt Schritt für Schritt Gestalt an.",
  stations: [
    {
      date: "JULI 2026",
      title: "DIE IDEE NIMMT FORM AN",
      paragraphs: [
        "Das Spielkonzept steht. Laufteams und Sucher werden zusammengestellt, erste Rollen verteilt und der Ablauf der Jagd weiterentwickelt.",
      ],
      marker: "past",
    },
    {
      date: "AUGUST 2026",
      title: "STRECKEN, TAKTIK UND TESTS",
      paragraphs: [
        "Startpunkte, Zielgebiet und mögliche Routen werden überprüft. Gleichzeitig werden Standort-Pings, Checkpoints, Joker und die Spielmechanik unter realistischen Bedingungen getestet.",
      ],
      marker: "current",
      badge: "AKTUELL",
    },
    {
      date: "SEPTEMBER 2026",
      title: "DIE TEAMS STEHEN BEREIT",
      paragraphs: [
        "Die letzten Details werden festgelegt. Laufteams und Sucher erhalten ihre Briefings, die Rollen werden final verteilt und alles wird für den ersten Pilotlauf vorbereitet.",
      ],
      marker: "upcoming",
    },
    {
      date: EVENT_DATE_LONG,
      title: "DIE ERSTE JAGD BEGINNT",
      paragraphs: [
        "Drei Laufteams machen sich auf den Weg.",
        "Das Sucher-Team nimmt die Verfolgung auf.",
        "Acht Stunden später steht fest, wer das Ziel erreicht – und wer vorher gefunden wird.",
      ],
      marker: "finish",
    },
  ],
};

export const FEATURES_SECTION = {
  eyebrow: "DAS SPIELPRINZIP",
  heading: "TEMPO ALLEIN REICHT NICHT.",
  teams: {
    figure: "3",
    label: "TEAMS",
    text: "Drei Zweierteams starten getrennt und suchen ihren eigenen Weg zum selben Ziel.",
  },
  sucher: {
    figure: "1",
    label: "SUCHER-TEAM",
    text: "Mobil, taktisch und immer auf der Suche nach dem nächsten Hinweis.",
  },
  stunden: {
    figure: "8:00:00",
    label: "ACHT STUNDEN",
    text: "Genug Zeit, um das Ziel zu erreichen. Zu wenig Zeit, um sich sicher zu fühlen.",
  },
  weg: {
    label: "KEIN SICHERER WEG",
    text: "Kurz, schnell oder unauffällig: Jede Route verändert das Risiko.",
  },
};



export const OUTRO = {
  heading: "DIE ERSTE JAGD BEGINNT",
  date: EVENT_DATE_LONG,
  note: "Weitere Informationen folgen.",
};

export const CONTACT = {
  name: "Jan-Philipp Struck",
  street: "Brüggenkampstraße 10",
  city: "59077 Hamm",
  country: "Deutschland",
  email: "janphilippstruck@gmx.de",
};

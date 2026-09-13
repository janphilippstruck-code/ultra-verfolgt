import type { Briefing, BriefingGroup } from "./briefing-types";

/**
 * Interne Briefing-Inhalte.
 * Diese Datei wird ausschließlich serverseitig geladen und erst
 * nach erfolgreicher Passwortprüfung an den Browser ausgeliefert.
 */

const LAEUFER: Briefing = {
  group: "laeufer",
  title: "LÄUFER-BRIEFING // SEASON 1",
  date: "20. September 2026",
  facts: ["Start: 08:00 Uhr", "Ende der Jagd: 16:00 Uhr"],
  intro: [
    "Dieses Briefing ist euer Nachschlagewerk für die erste Ausgabe von Ultra Verfolgt – Gejagt bis ins Ziel.",
    "Einige spielentscheidende Informationen erhaltet ihr erst am Veranstaltungsmorgen.",
  ],
  sections: [
    {
      id: "aufgabe",
      nav: "Aufgabe",
      title: "EURE AUFGABE",
      blocks: [
        { type: "lead", text: "Ihr tretet als eines von drei Zweier-Teams an." },
        {
          type: "p",
          text: "Eure Aufgabe ist es, innerhalb von acht Stunden das Ziel zu erreichen, ohne vorher vom Sucher-Team eliminiert zu werden.",
        },
        {
          type: "p",
          text: "Es gibt keine vorgegebene Laufstrecke. Welche Wege ihr nutzt, welche Umwege ihr in Kauf nehmt und wie offensiv oder defensiv ihr unterwegs seid, entscheidet ihr selbst.",
        },
        {
          type: "highlight",
          lines: ["Der kürzeste Weg ist nicht zwangsläufig der sicherste."],
        },
        {
          type: "list",
          items: [
            "Ein Laufteam ist erfolgreich, wenn es das Ziel innerhalb der Spielzeit erreicht, ohne zuvor eliminiert worden zu sein.",
            "Es gibt keine Platzierungen zwischen den Laufteams.",
            "Mehrere Teams können ihre Mission erfolgreich beenden.",
            "Das Sucher-Team erzielt einen vollständigen Sieg, wenn alle drei Laufteams vor Erreichen des Ziels eliminiert werden.",
          ],
        },
      ],
    },
    {
      id: "zeitplan",
      nav: "Zeitplan",
      title: "ZEITPLAN",
      blocks: [
        {
          type: "schedule",
          items: [
            {
              time: "ca. 06:30 Uhr",
              text: "Treffen der Laufteams, Vorbereitung, Technik und letzte organisatorische Hinweise.",
            },
            {
              time: "Vor dem Start",
              text: "Finales Briefing und Ausgabe der spielrelevanten Informationen.",
            },
            { time: "08:00 Uhr", title: "DIE JAGD BEGINNT." },
            {
              time: "10:00 Uhr",
              text: "Öffnet euren Missionsumschlag gemeinsam vor laufender Kamera. Erst ab diesem Zeitpunkt könnt ihr euch eure Joker verdienen.",
            },
            {
              time: "11:00 – 13:00 Uhr",
              text: "In diesem Zeitraum versucht die Spielleitung, jedes Team einmal unterwegs aufzusuchen und mit Wasser beziehungsweise Verpflegung zu versorgen. Es gibt keinen festen Zeitpunkt und keinen festgelegten Versorgungspunkt. Plant eure eigene Versorgung trotzdem selbstständig.",
            },
            { time: "16:00 Uhr", title: "ENDE DER JAGD." },
          ],
        },
      ],
    },
    {
      id: "route",
      nav: "Route",
      title: "ROUTENWAHL",
      blocks: [
        { type: "lead", text: "Eure Route ist grundsätzlich frei." },
        {
          type: "p",
          text: "Dabei gelten jederzeit die normalen gesetzlichen und sicherheitsrelevanten Vorgaben.",
        },
        {
          type: "p",
          text: "Privatgrundstücke, gesperrte Bereiche oder Wege, deren Nutzung nicht erlaubt ist, dürfen nicht betreten werden.",
        },
        {
          type: "highlight",
          lines: ["Das Spiel rechtfertigt keine riskanten Entscheidungen im Straßenverkehr."],
        },
      ],
    },
    {
      id: "tracking",
      nav: "Tracking",
      title: "TRACKING",
      blocks: [
        {
          type: "lead",
          text: "Während der gesamten aktiven Spielzeit muss eure Standortübertragung über Traccar aktiviert bleiben.",
        },
        { type: "p", text: "Ihr seid dafür verantwortlich, dass:" },
        {
          type: "list",
          items: [
            "euer Smartphone eingeschaltet bleibt,",
            "GPS aktiviert ist,",
            "Traccar im Hintergrund Standortdaten übertragen darf,",
            "ausreichend Akkukapazität beziehungsweise eine Powerbank vorhanden ist.",
          ],
        },
        { type: "p", text: "Die Spielleitung überwacht die Standortübertragung." },
        {
          type: "p",
          text: "Sollte Traccar keine aktuellen GPS-Daten mehr übertragen, wird als Rückfallebene ein WhatsApp-Live-Standort für bis zu acht Stunden verwendet.",
        },
        {
          type: "highlight",
          lines: ["Das Sucher-Team erhält keinen permanenten Live-Zugriff auf eure Position."],
        },
      ],
    },
    {
      id: "pings",
      nav: "Pings",
      title: "STANDORT-PINGS",
      blocks: [
        { type: "lead", text: "Jedes Team besitzt insgesamt acht Standort-Pings." },
        {
          type: "list",
          items: [
            "4 Pings zwischen 08:30 und 12:00 Uhr",
            "4 Pings zwischen 12:00 und 15:30 Uhr",
            "Die ersten 30 Minuten nach dem Start und die letzten 30 Minuten vor Ende der Jagd sind pingfrei.",
            "Zwischen zwei Pings liegen mindestens 20 Minuten.",
            "Zwei Ping-Zeiten werden durch die Spielleitung vorgegeben.",
            "Die übrigen sechs Zeiten legt das Team vor dem Start selbst verbindlich fest.",
          ],
        },
        { type: "p", text: "Die Spielleitung koordiniert sämtliche Pings." },
        {
          type: "highlight",
          lines: [
            "Die Läufer müssen zum Ping-Zeitpunkt selbst nichts versenden.",
            "Entscheidend ist, dass Traccar funktioniert.",
          ],
        },
        {
          type: "p",
          text: "Eure konkreten Ping-Zeiten werden euch individuell mitgeteilt und stehen nicht auf dieser Seite.",
        },
      ],
    },
    {
      id: "joker",
      nav: "Joker",
      title: "JOKER",
      blocks: [
        { type: "lead", text: "Zu Beginn des Spiels besitzt ihr noch keinen aktiven Joker." },
        { type: "p", text: "Beide Joker müssen zunächst durch Missionen verdient werden." },
        { type: "p", text: "Die Missionsaufgaben befinden sich in eurem verschlossenen Umschlag." },
        {
          type: "highlight",
          title: "UMSCHLAG",
          lines: [
            "Darf erst am 20.09.2026 um 10:00 Uhr geöffnet werden.",
            "Öffnung gemeinsam vor laufender Kamera.",
            "Missionsnachweise gehen ausschließlich privat an die Spielleitung.",
            "Nach erfolgreicher Prüfung wird der jeweilige Joker aktiviert.",
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "JOKER 1 // SUCHERPOSITION",
              lines: [
                "Ihr könnt einmalig die aktuelle Position der Sucher abfragen.",
                "Ihr erhaltet eine Momentaufnahme.",
                "Kein Live-Tracking.",
              ],
            },
            {
              title: "JOKER 2 // PING +15",
              lines: [
                "Ihr könnt einen noch bevorstehenden Standort-Ping einmalig um 15 Minuten nach hinten verschieben.",
                "Der Ping entfällt nicht.",
                "Der Joker muss spätestens zum ursprünglich vorgesehenen Ping-Zeitpunkt eingesetzt werden.",
              ],
            },
          ],
        },
        {
          type: "p",
          text: "Jeder eingesetzte Joker wird im gemeinsamen Teilnehmer-Chat bekannt gegeben. Veröffentlicht wird, welcher Joker eingesetzt wurde – nicht, welches Team ihn eingesetzt hat.",
        },
        {
          type: "quotes",
          items: ["JOKER AKTIVIERT // SUCHERPOSITION", "JOKER AKTIVIERT // PING +15 MINUTEN"],
        },
      ],
    },
    {
      id: "missionen",
      nav: "Missionen",
      title: "MISSIONEN // GESPERRT",
      blocks: [
        {
          type: "highlight",
          lines: [
            "Die genauen Missionsaufgaben befinden sich ausschließlich in eurem Missionsumschlag.",
            "Öffnung: 20.09.2026 · 10:00 Uhr – vor laufender Kamera.",
          ],
        },
        { type: "p", text: "Die Missionen sind freiwillig." },
        { type: "p", text: "Wer eine Mission nicht erfüllt, erhält den dazugehörigen Joker nicht." },
      ],
    },
    {
      id: "eliminierung",
      nav: "Eliminierung",
      title: "ELIMINIERUNG",
      accent: true,
      blocks: [
        {
          type: "lead",
          text: "Ein Laufteam gilt als eliminiert, sobald mindestens einer der beiden Läufer durch einen aktiven Sucher:",
        },
        {
          type: "list",
          items: [
            "körperlich berührt wird, oder",
            "mit einem eindeutig wahrnehmbaren Wasserstrahl aus der vorgesehenen Wasserpistole getroffen wird.",
          ],
        },
        { type: "p", text: "Ein Treffer auf Körper, Kleidung oder getragenen Rucksack zählt." },
        {
          type: "p",
          text: "Ein bloßes Vorbeispritzen oder einzelne nicht eindeutig zuordenbare Wasserspritzer gelten nicht als Treffer.",
        },
        {
          type: "highlight",
          lines: ["Wird einer der beiden Läufer eliminiert, gilt das gesamte Zweier-Team als eliminiert."],
        },
        { type: "p", text: "Nach eurer Eliminierung ist eure aktive Teilnahme am Spiel beendet. Ihr entscheidet anschließend selbst:" },
        {
          type: "list",
          items: [
            "Ihr lauft außer Konkurrenz weiter zum Ziel.",
            "Oder ihr lasst euch von der Spielleitung abholen.",
          ],
        },
      ],
    },
    {
      id: "versorgung",
      nav: "Versorgung",
      title: "VERSORGUNG",
      blocks: [
        {
          type: "p",
          text: "Zwischen ungefähr 11:00 und 13:00 Uhr versucht die Spielleitung, jedes Laufteam einmal unterwegs aufzusuchen.",
        },
        {
          type: "p",
          text: "Dabei können Wasser und Verpflegung übergeben und bei Bedarf technische Probleme kurz angesprochen werden.",
        },
        {
          type: "list",
          items: [
            "Der genaue Zeitpunkt wird nicht angekündigt.",
            "Es gibt keinen festen Treffpunkt.",
            "Die Versorgung ersetzt nicht eure eigene Verpflegungsplanung.",
          ],
        },
      ],
    },
    {
      id: "kamera",
      nav: "Kamera",
      title: "DIE JAGD WIRD DOKUMENTIERT",
      accent: true,
      blocks: [
        {
          type: "p",
          text: "Die erste Ausgabe von Ultra Verfolgt wird aus verschiedenen Perspektiven dokumentiert.",
        },
        { type: "p", text: "Ihr werdet teilweise mit Actionkamera und Audiotechnik ausgestattet." },
        { type: "highlight", title: "DIE WICHTIGSTE REGEL", lines: ["Spielt das Spiel – nicht die Kamera."] },
        { type: "p", text: "Ihr müsst nichts moderieren und keine künstlichen Szenen produzieren." },
        {
          type: "list",
          items: [
            "Redet miteinander.",
            "Besprecht eure Routen.",
            "Diskutiert Entscheidungen.",
            "Sprecht darüber, ob ihr einen Joker einsetzen wollt.",
            "Sagt ruhig, wenn ihr glaubt, dass die Sucher in der Nähe sind.",
          ],
        },
        {
          type: "p",
          text: "Auch Unsicherheit, falsche Entscheidungen und Meinungsverschiedenheiten gehören dazu. Genau diese echten Situationen sind später interessant.",
        },
        {
          type: "highlight",
          lines: ["Wenn etwas passiert, passiert es einmal.", "Keine Szene wird für die Kamera wiederholt."],
        },
      ],
    },
    {
      id: "kommunikation",
      nav: "Kommunikation",
      title: "WEITERE SPIELINFORMATIONEN",
      blocks: [
        {
          type: "highlight",
          lines: ["Zusätzliche spielrelevante Informationen erhaltet ihr am Veranstaltungsmorgen vor Ort."],
        },
      ],
    },
  ],
};

const SUCHER: Briefing = {
  group: "sucher",
  title: "SUCHER-BRIEFING // SEASON 1",
  date: "20. September 2026",
  facts: ["Jagdfreigabe: 08:30 Uhr", "Ende: 16:00 Uhr"],
  intro: [
    "Dieses Briefing ist euer Nachschlagewerk für die erste Ausgabe von Ultra Verfolgt – Gejagt bis ins Ziel.",
    "Einige spielentscheidende Informationen erhaltet ihr erst am Veranstaltungsmorgen.",
  ],
  sections: [
    {
      id: "aufgabe",
      nav: "Aufgabe",
      title: "EURE AUFGABE",
      blocks: [
        { type: "lead", text: "Drei Zweier-Teams sind unterwegs." },
        {
          type: "p",
          text: "Eure Aufgabe ist es, die Teams anhand der Informationen, die euch im Laufe des Spiels zur Verfügung gestellt werden, aufzuspüren und zu eliminieren.",
        },
        { type: "p", text: "Die Läufer bestimmen ihre Route selbst." },
        {
          type: "p",
          text: "Ihr besitzt keinen permanenten Zugriff auf ihre Positionen und kennt auch nicht ihr finales Ziel.",
        },
        {
          type: "p",
          text: "Ihr müsst aus einzelnen Standortinformationen, euren Beobachtungen und euren taktischen Entscheidungen ableiten, wo sich ein Team befinden könnte und wohin es sich wahrscheinlich bewegt.",
        },
        { type: "highlight", lines: ["Information ist eure wichtigste Ressource."] },
      ],
    },
    {
      id: "zeitplan",
      nav: "Zeitplan",
      title: "ZEITPLAN",
      blocks: [
        {
          type: "schedule",
          items: [
            {
              time: "Samstagabend",
              text: "Der genaue Treffpunkt des Sucher-Teams wird im internen Sucher-Chat bekannt gegeben.",
            },
            {
              time: "08:00 Uhr",
              text: "Die Laufteams starten. Das Sucher-Team bleibt zunächst an seinem Treffpunkt.",
            },
            { time: "ca. 08:15 Uhr", text: "Finales Sucher-Briefing durch die Spielleitung." },
            {
              time: "08:30 Uhr",
              title: "JAGDFREIGABE",
              text: "Ab jetzt dürft ihr aktiv nach den Läuferteams suchen.",
            },
            { time: "16:00 Uhr", title: "ENDE DER JAGD" },
          ],
        },
      ],
    },
    {
      id: "pings",
      nav: "Pings",
      title: "PING-FAHRPLAN",
      blocks: [
        { type: "lead", text: "Vor Beginn der Jagd erhaltet ihr einen Ping-Fahrplan." },
        { type: "p", text: "Ihr wisst damit, wann neue Standortinformationen eintreffen." },
        { type: "p", text: "Welche Ping-Zeit zu welchem Team gehört, erfahrt ihr zunächst nicht." },
        { type: "p", text: "Die Zuordnung erfolgt erst beim jeweiligen Ping." },
        { type: "quotes", items: ["PING // TEAM 2 // 10:20 UHR"] },
        {
          type: "highlight",
          lines: [
            "Ein Ping ist immer eine Momentaufnahme.",
            "Danach gibt es keine automatische Standortaktualisierung.",
          ],
        },
        { type: "p", text: "Allgemein gilt für jedes Laufteam:" },
        {
          type: "list",
          items: [
            "jedes Team besitzt 8 Pings",
            "4 zwischen 08:30 und 12:00 Uhr",
            "4 zwischen 12:00 und 15:30 Uhr",
            "mindestens 20 Minuten zwischen zwei Pings desselben Teams",
          ],
        },
      ],
    },
    {
      id: "tracking",
      nav: "Tracking",
      title: "TRACKING",
      blocks: [
        {
          type: "p",
          text: "Die Spielleitung muss auch die Position der Suchereinheiten jederzeit erkennen können.",
        },
        {
          type: "p",
          text: "Daher muss die vereinbarte Standortübertragung während der Jagd aktiv bleiben.",
        },
        {
          type: "highlight",
          lines: ["Die zentrale Standortübersicht ist ausschließlich für die Spielleitung bestimmt."],
        },
      ],
    },
    {
      id: "joker",
      nav: "Joker",
      title: "JOKER",
      blocks: [
        {
          type: "p",
          text: "Während der Jagd können besondere Spielereignisse beziehungsweise Joker ausgelöst werden.",
        },
        {
          type: "p",
          text: "Wird ein Joker aktiviert, erscheint die entsprechende Information im gemeinsamen Teilnehmer-Chat.",
        },
        { type: "p", text: "Das ausführende Laufteam wird dabei nicht genannt." },
        {
          type: "quotes",
          items: ["JOKER AKTIVIERT // SUCHERPOSITION", "JOKER AKTIVIERT // PING +15 MINUTEN"],
        },
      ],
    },
    {
      id: "eliminierung",
      nav: "Eliminierung",
      title: "ELIMINIERUNG",
      accent: true,
      blocks: [
        { type: "lead", text: "Ein Laufteam gilt als eliminiert, sobald mindestens einer der beiden Läufer:" },
        {
          type: "list",
          items: [
            "von einem aktiven Sucher körperlich berührt wird, oder",
            "mit einem eindeutig wahrnehmbaren Wasserstrahl aus der vorgesehenen Wasserpistole getroffen wird.",
          ],
        },
        { type: "p", text: "Treffer auf Körper, Kleidung oder getragenen Rucksack zählen." },
        {
          type: "p",
          text: "Ein bloßes Vorbeispritzen oder einzelne nicht eindeutig zuordenbare Spritzer zählen nicht.",
        },
        {
          type: "highlight",
          lines: [
            "Wird einer der beiden Läufer eliminiert, gilt das gesamte Zweier-Team als eliminiert.",
            "Die Eliminierung wird anschließend unmittelbar der Spielleitung gemeldet.",
          ],
        },
        {
          type: "p",
          text: "Ein eliminiertes Team nimmt nicht mehr aktiv am Spiel teil. Es entscheidet anschließend selbst, ob es außer Konkurrenz weiterläuft oder von der Spielleitung abgeholt wird.",
        },
        {
          type: "p",
          text: "Eliminierte Teilnehmer dürfen keine spielrelevanten Informationen an aktive Teams weitergeben.",
        },
      ],
    },
    {
      id: "fahrzeuge",
      nav: "Fahrzeuge & Fahrräder",
      title: "PKW UND FAHRRAD",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "PKW",
              lines: [
                "Aus dem Pkw heraus darf niemand eliminiert werden.",
                "Der Pkw dient ausschließlich der Fortbewegung, Koordination, Beobachtung und Positionierung der Sucher.",
                "Zum Stellen eines Läufers muss das Fahrzeug verlassen werden.",
              ],
            },
            {
              title: "FAHRRAD",
              lines: [
                "Vom Fahrrad aus darf eine Wasserpistole zur Eliminierung eingesetzt werden.",
                "Eine körperliche Berührung zur Eliminierung erfolgt nicht während der Fahrt.",
                "Im Zweifel wird der Eliminierungsversuch abgebrochen.",
              ],
            },
          ],
        },
        { type: "p", text: "Nicht erlaubt sind aus dem Fahrzeug heraus:" },
        {
          type: "list",
          items: [
            "Wasserstrahl aus dem Fahrzeug",
            "körperliche Berührung aus dem Fahrzeug",
            "Blockieren",
            "Bedrängen",
            "Abdrängen",
            "riskante Verfolgungsmanöver",
          ],
        },
        {
          type: "p",
          text: "Die Verwendung der Wasserpistole darf niemals dazu führen, dass unsicher gefahren, ein Läufer abgedrängt oder ein anderer Verkehrsteilnehmer gefährdet wird.",
        },
      ],
    },
    {
      id: "informationen",
      nav: "Informationen",
      title: "ERLAUBTE INFORMATIONEN",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "ERLAUBT",
              lines: [
                "Informationen der Spielleitung",
                "Ping-Fahrplan",
                "tatsächliche Standort-Pings",
                "eigene Beobachtungen",
                "öffentlich zugängliche Karten",
                "Navigationsdienste",
                "offiziell übermittelte Bilder und Hinweise",
              ],
            },
            {
              title: "NICHT ERLAUBT",
              lines: [
                "zusätzliche Scouts",
                "externe Freunde oder Bekannte zur Ortung",
                "heimliche zusätzliche Tracker",
                "Zugriff auf fremde Accounts",
                "sonstige Umgehungen des vorgesehenen Informationssystems",
              ],
            },
          ],
        },
        { type: "highlight", lines: ["Die Jagd soll durch euer eigenes Team entschieden werden."] },
        {
          type: "p",
          text: "Alles, was euch offiziell durch die Spielleitung zugespielt wird, ist Teil des Spiels. Nutzt das, was ihr darauf erkennt:",
        },
        {
          type: "list",
          items: ["Hintergrund.", "Landschaft.", "Straßen.", "Wege.", "Gebäude.", "Zeitliche Zusammenhänge."],
        },
        { type: "p", text: "Ihr bekommt nicht zwingend erklärt, warum eine Information bei euch landet." },
      ],
    },
    {
      id: "sicherheit",
      nav: "Sicherheit",
      title: "SICHERHEIT",
      accent: true,
      blocks: [
        { type: "lead", text: "Der Pkw ist ein taktisches Werkzeug und keine Verfolgungswaffe." },
        {
          type: "list",
          items: [
            "Keine Hochgeschwindigkeitsjagd.",
            "Keine riskanten Wendemanöver.",
            "Keine Blockade von Straßen oder Wegen.",
            "Keine Situationen schaffen, in denen ein Läufer zum gefährlichen Ausweichen gezwungen wird.",
          ],
        },
        { type: "p", text: "Dasselbe gilt für Fahrräder." },
        {
          type: "highlight",
          lines: ["Ein Team darf euch entkommen.", "Das ist kein Fehler im Spiel. Es gehört dazu."],
        },
      ],
    },
    {
      id: "kamera",
      nav: "Kamera",
      title: "DIE JAGD WIRD DOKUMENTIERT",
      accent: true,
      blocks: [
        { type: "p", text: "Eure Perspektive ist ein wesentlicher Teil des späteren Films." },
        {
          type: "p",
          text: "Während der Jagd entstehen Aufnahmen im Fahrzeug, auf Fahrrädern und bei mobilen Suchaktionen.",
        },
        { type: "highlight", title: "DIE WICHTIGSTE REGEL", lines: ["Spielt die Jagd – nicht die Kamera."] },
        {
          type: "p",
          text: "Ihr sollt keine Szenen nachstellen und nicht permanent erklären, was passiert. Viel interessanter sind eure echten taktischen Gespräche. Redet deshalb miteinander, wie ihr es ohnehin tun würdet.",
        },
        {
          type: "quotes",
          items: [
            "Der letzte Ping war hier. Wenn sie das Tempo halten, könnten sie inzwischen dort sein.",
            "Wenn sie die Hauptstraße vermeiden, bleibt eigentlich nur dieser Weg.",
            "Schicken wir die Fahrräder nach vorne oder halten wir sie zurück?",
            "Der nächste Ping kommt in zwölf Minuten. Warten wir darauf oder setzen wir jetzt um?",
            "Warum laufen die plötzlich alle in eine andere Richtung?",
            "Die haben gerade unsere Position abgefragt.",
            "Erkennt jemand etwas im Hintergrund?",
          ],
        },
        {
          type: "p",
          text: "Auch Frust, falsche Vermutungen und Meinungsverschiedenheiten gehören dazu. Wenn ihr zehn Minuten in die falsche Richtung fahrt, ist das kein Problem. Genau das gehört zur Geschichte.",
        },
        {
          type: "highlight",
          lines: [
            "Wenn ihr einen Läufer entdeckt, hat die Jagd Vorrang.",
            "Nicht anhalten, um eine Szene besser zu filmen.",
            "Keine Eliminierung wird für die Kamera wiederholt. Was passiert, passiert einmal.",
          ],
        },
        {
          type: "highlight",
          title: "TREFFPUNKT",
          lines: [
            "Der genaue Treffpunkt wird am Samstagabend im internen Sucher-Chat bekannt gegeben.",
            "Zusätzliche spielrelevante Informationen erhaltet ihr am Veranstaltungsmorgen persönlich durch die Spielleitung.",
          ],
        },
      ],
    },
  ],
};

export function getBriefing(group: BriefingGroup): Briefing {
  return group === "laeufer" ? LAEUFER : SUCHER;
}

export function getBriefingPasswordEnvName(group: BriefingGroup): string {
  return group === "laeufer" ? "RUNNER_BRIEFING_PASSWORD" : "HUNTER_BRIEFING_PASSWORD";
}

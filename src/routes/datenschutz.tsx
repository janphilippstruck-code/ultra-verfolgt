import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT, SITE_URL } from "@/content/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Ultra Verfolgt" },
      {
        name: "description",
        content: "Datenschutzerklärung für die Projektwebsite Ultra Verfolgt.",
      },
      { property: "og:title", content: "Datenschutz | Ultra Verfolgt" },
      {
        property: "og:description",
        content: "Datenschutzerklärung für die Projektwebsite Ultra Verfolgt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/datenschutz` }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <section>
        <h2>1. Verantwortlicher</h2>
        <p className="mt-3">
          Verantwortlicher für die Verarbeitung personenbezogener Daten auf dieser Website ist:
        </p>
        <p className="mt-3">
          {CONTACT.name}
          <br />
          {CONTACT.street}
          <br />
          {CONTACT.city}
          <br />
          {CONTACT.country}
        </p>
        <p className="mt-3">
          E-Mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </section>

      <section>
        <h2>2. Zweck der Website</h2>
        <p className="mt-3">
          Diese Website dient der Vorstellung des Projekts „Ultra Verfolgt – Gejagt bis ins Ziel“.
        </p>
        <p className="mt-3">
          Es werden nur solche personenbezogenen Daten verarbeitet, die für die technische
          Bereitstellung, Sicherheit und Erreichbarkeit der Website erforderlich sind oder die
          Besucher freiwillig im Rahmen einer Kontaktaufnahme per E-Mail übermitteln.
        </p>
        <p className="mt-3">
          Auf dieser Website werden derzeit insbesondere nicht eingesetzt:
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          <li>Benutzerkonten</li>
          <li>Anmeldeformulare</li>
          <li>Bewerbungsformulare</li>
          <li>Kontaktformulare</li>
          <li>Newsletter</li>
          <li>Kommentarfunktionen</li>
          <li>Online-Shops</li>
          <li>Zahlungsdienste</li>
          <li>Analyse- oder Trackingdienste</li>
          <li>Werbenetzwerke</li>
          <li>Social-Media-Plugins</li>
          <li>eingebettete Karten</li>
          <li>eingebettete Videos</li>
          <li>personalisierte Werbung</li>
        </ul>
      </section>

      <section>
        <h2>3. Hosting durch Lovable</h2>
        <p className="mt-3">
          Die Website wird über die Hosting-Infrastruktur von Lovable Cloud bereitgestellt.
        </p>
        <p className="mt-3">
          Anbieter:
          <br />
          Lovable Labs Incorporated
          <br />
          1111B South Governors Avenue
          <br />
          Dover, Delaware 19904
          <br />
          USA
        </p>
        <p className="mt-3">
          Europäische Kontaktanschrift:
          <br />
          Lovable Labs AB
          <br />
          Regeringsgatan 25
          <br />
          111 53 Stockholm
          <br />
          Schweden
        </p>
        <p className="mt-3">
          Beim Aufruf der Website können technisch erforderliche Daten verarbeitet werden. Dazu
          können insbesondere gehören:
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Abrufs</li>
          <li>aufgerufene Seite oder Datei</li>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL</li>
          <li>übertragene Datenmenge</li>
          <li>technischer Status des Abrufs</li>
        </ul>
        <p className="mt-3">
          Die Verarbeitung erfolgt, um die Website technisch bereitzustellen, ihre Stabilität und
          Sicherheit zu gewährleisten, technische Fehler zu erkennen und missbräuchliche Zugriffe
          abzuwehren.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f DSGVO. Das berechtigte Interesse
          besteht in der sicheren, zuverlässigen und technisch fehlerfreien Bereitstellung dieser
          Website.
        </p>
        <p className="mt-3">
          Die Daten werden gelöscht, sobald sie für die genannten Zwecke nicht mehr erforderlich
          sind und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Sicherheitsinteressen
          einer Löschung entgegenstehen.
        </p>
        <p className="mt-3">
          Eine Verarbeitung personenbezogener Daten in den USA oder anderen Staaten außerhalb der
          Europäischen Union beziehungsweise des Europäischen Wirtschaftsraums kann nicht
          vollständig ausgeschlossen werden.
        </p>
        <p className="mt-3">
          Soweit personenbezogene Daten in Drittländer übermittelt werden, erfolgt dies nach Maßgabe
          der gesetzlichen Voraussetzungen und der vom Anbieter eingesetzten Datenschutzgarantien.
        </p>
      </section>

      <section>
        <h2>4. Domainverwaltung durch STRATO</h2>
        <p className="mt-3">
          Die verwendete Domain beziehungsweise Subdomain wird bei folgendem Anbieter verwaltet:
        </p>
        <p className="mt-3">
          STRATO GmbH
          <br />
          Otto-Ostrowski-Straße 7
          <br />
          10249 Berlin
          <br />
          Deutschland
        </p>
        <p className="mt-3">
          Bei der technischen Auflösung der Domain können technisch notwendige Verbindungsdaten
          verarbeitet werden.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f DSGVO. Das berechtigte Interesse
          besteht in der sicheren und zuverlässigen Erreichbarkeit der Website unter der verwendeten
          Domain.
        </p>
      </section>

      <section>
        <h2>5. Verschlüsselte Verbindung</h2>
        <p className="mt-3">
          Die Website wird über eine verschlüsselte HTTPS- beziehungsweise TLS-Verbindung
          bereitgestellt.
        </p>
        <p className="mt-3">
          Die Verschlüsselung schützt übertragene Daten davor, während der Übertragung von
          unbefugten Dritten mitgelesen oder verändert zu werden.
        </p>
      </section>

      <section>
        <h2>6. Server-Protokolldateien</h2>
        <p className="mt-3">
          Beim Aufruf der Website können technisch notwendige Server-Protokolldaten verarbeitet
          werden.
        </p>
        <p className="mt-3">Die Verarbeitung dient insbesondere dazu:</p>
        <ul className="mt-3 flex flex-col gap-1">
          <li>die Inhalte der Website auszuliefern</li>
          <li>eine sichere Verbindung herzustellen</li>
          <li>technische Fehler zu erkennen</li>
          <li>Angriffe und missbräuchliche Zugriffe abzuwehren</li>
          <li>die Funktionsfähigkeit der Website zu gewährleisten</li>
        </ul>
        <p className="mt-3">
          Eine Zusammenführung dieser Daten mit anderen Datenbeständen durch den Betreiber dieser
          Website findet nicht statt.
        </p>
      </section>

      <section>
        <h2>7. Cookies und lokale Speicherung</h2>
        <p className="mt-3">
          Diese Website verwendet nach dem derzeitigen technischen Stand keine technisch nicht
          notwendigen Cookies.
        </p>
        <p className="mt-3">
          Insbesondere werden keine Analyse-, Marketing- oder Personalisierungs-Cookies eingesetzt.
        </p>
        <p className="mt-3">
          Sofern technisch notwendige Informationen im Browser gespeichert werden, erfolgt dies
          ausschließlich, soweit es für die Bereitstellung, Sicherheit oder Bedienbarkeit der
          Website erforderlich ist.
        </p>
        <p className="mt-3">
          Eine Einwilligungsanzeige beziehungsweise ein Cookie-Banner wird daher derzeit nicht
          eingesetzt.
        </p>
        <p className="mt-3">
          Sollte die Website zukünftig um einwilligungspflichtige Dienste oder Technologien ergänzt
          werden, wird vor deren Einsatz eine geeignete Einwilligungslösung eingerichtet und diese
          Datenschutzerklärung entsprechend angepasst.
        </p>
      </section>

      <section>
        <h2>8. Schriftarten</h2>
        <p className="mt-3">
          Die auf dieser Website eingesetzten Schriftarten werden lokal innerhalb des
          Websiteprojekts bereitgestellt.
        </p>
        <p className="mt-3">
          Beim Laden der Schriftarten wird keine Verbindung zu Google Fonts, Adobe Fonts oder
          anderen externen Schriftservern hergestellt.
        </p>
      </section>

      <section>
        <h2>9. Kontaktaufnahme per E-Mail</h2>
        <p className="mt-3">
          Besucher können über die im Impressum und in dieser Datenschutzerklärung angegebenen
          Kontaktdaten Kontakt aufnehmen.
        </p>
        <p className="mt-3">
          Bei einer Kontaktaufnahme können insbesondere folgende Daten verarbeitet werden:
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Inhalt der Nachricht</li>
          <li>Zeitpunkt der Kontaktaufnahme</li>
          <li>weitere freiwillig übermittelte Angaben</li>
        </ul>
        <p className="mt-3">
          Die Verarbeitung erfolgt zur Bearbeitung und Beantwortung der Anfrage.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b DSGVO, wenn die Kontaktaufnahme der
          Anbahnung oder Durchführung eines Vertrags- oder Teilnahmeverhältnisses dient.
        </p>
        <p className="mt-3">
          In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Artikel 6 Absatz 1 Buchstabe
          f DSGVO. Das berechtigte Interesse besteht in der Bearbeitung und Beantwortung eingehender
          Anfragen.
        </p>
        <p className="mt-3">
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine
          gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere
          Speicherung bestehen.
        </p>
      </section>

      <section>
        <h2>10. Externe Links</h2>
        <p className="mt-3">
          Diese Website kann Links zu Internetseiten anderer Anbieter enthalten.
        </p>
        <p className="mt-3">
          Beim Aufruf eines externen Links verlässt der Besucher diese Website. Für die Verarbeitung
          personenbezogener Daten auf der externen Website ist der jeweilige Anbieter
          verantwortlich.
        </p>
        <p className="mt-3">Externe Links müssen eindeutig als solche erkennbar sein.</p>
      </section>

      <section>
        <h2>11. Rechte betroffener Personen</h2>
        <p className="mt-3">
          Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das
          Recht:
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          <li>Auskunft über ihre verarbeiteten personenbezogenen Daten zu verlangen</li>
          <li>unrichtige Daten berichtigen zu lassen</li>
          <li>die Löschung personenbezogener Daten zu verlangen</li>
          <li>die Einschränkung der Verarbeitung zu verlangen</li>
          <li>der Verarbeitung personenbezogener Daten zu widersprechen</li>
          <li>bereitgestellte Daten in einem übertragbaren Format zu erhalten</li>
          <li>eine erteilte Einwilligung mit Wirkung für die Zukunft zu widerrufen</li>
          <li>sich bei einer Datenschutzaufsichtsbehörde zu beschweren</li>
        </ul>
        <p className="mt-3">
          Zur Ausübung dieser Rechte genügt eine Nachricht an:{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </section>

      <section>
        <h2>12. Beschwerderecht</h2>
        <p className="mt-3">
          Betroffene Personen haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
          beschweren.
        </p>
        <p className="mt-3">Für Nordrhein-Westfalen ist insbesondere zuständig:</p>
        <p className="mt-3">
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
          <br />
          Kavalleriestraße 2–4
          <br />
          40213 Düsseldorf
        </p>
        <p className="mt-3">
          Telefon: <a href="tel:+492113842400">0211 38424-0</a>
          <br />
          E-Mail: <a href="mailto:poststelle@ldi.nrw.de">poststelle@ldi.nrw.de</a>
        </p>
      </section>

      <section>
        <h2>13. Aktualisierung der Datenschutzerklärung</h2>
        <p className="mt-3">
          Diese Datenschutzerklärung entspricht dem derzeit vorgesehenen technischen und inhaltlichen
          Umfang der Website.
        </p>
        <p className="mt-3">
          Sie muss überprüft und gegebenenfalls angepasst werden, sobald insbesondere folgende
          Funktionen ergänzt oder verändert werden:
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          <li>Kontakt- oder Bewerbungsformulare</li>
          <li>Anmeldemöglichkeiten</li>
          <li>Teilnehmerprofile</li>
          <li>Newsletter</li>
          <li>eingebettete Karten</li>
          <li>externe Videos</li>
          <li>Social-Media-Inhalte</li>
          <li>Analyse- oder Trackingdienste</li>
          <li>neue Hostinganbieter</li>
          <li>Datenbanken</li>
          <li>Benutzerkonten</li>
          <li>Zahlungsfunktionen</li>
        </ul>
        <p className="mt-3">Stand: Juli 2026</p>
      </section>
    </LegalPage>
  );
}

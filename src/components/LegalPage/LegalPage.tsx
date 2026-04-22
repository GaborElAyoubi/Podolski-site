import './LegalPage.css';

export type LegalPageKind = 'impressum' | 'datenschutz';

interface LegalPageProps {
  page: LegalPageKind;
}

export function LegalPage({ page }: LegalPageProps) {
  if (page === 'datenschutz') {
    return (
      <article className="legal-page">
        <div className="legal-page-inner">
          <a className="legal-back-link" href="#top">
            Zurueck
          </a>
          <p className="legal-eyebrow">Rechtliches</p>
          <h1>Datenschutzerklaerung</h1>

          <section className="legal-section">
            <h2>Verantwortliche Stelle</h2>
            <p>
              Verantwortlich fuer die Bearbeitung personenbezogener Daten auf
              dieser Website ist: [Name/Firma, Adresse und E-Mail ergaenzen].
            </p>
          </section>

          <section className="legal-section">
            <h2>Kontaktformular</h2>
            <p>
              Wenn du das Anmeldeformular nutzt, werden Name, E-Mail-Adresse
              und deine Kurznachricht verarbeitet, um deine Anfrage zu
              beantworten und die Anmeldung zu organisieren.
            </p>
          </section>

          <section className="legal-section">
            <h2>Hosting und Zugriffsdaten</h2>
            <p>
              Beim Besuch der Website koennen technische Zugriffsdaten wie
              IP-Adresse, Datum, Uhrzeit, Browser und Betriebssystem durch den
              Hosting-Anbieter verarbeitet werden, um die Website sicher und
              stabil bereitzustellen.
            </p>
          </section>

          <section className="legal-section">
            <h2>Weitergabe und Aufbewahrung</h2>
            <p>
              Personenbezogene Daten werden nur weitergegeben, wenn dies fuer
              den Betrieb der Website, die Bearbeitung deiner Anfrage oder zur
              Erfuellung gesetzlicher Pflichten erforderlich ist. Daten werden
              nur so lange aufbewahrt, wie es fuer diese Zwecke notwendig ist.
            </p>
          </section>

          <section className="legal-section">
            <h2>Deine Rechte</h2>
            <p>
              Du kannst Auskunft, Berichtigung, Loeschung oder Einschraenkung
              der Bearbeitung deiner personenbezogenen Daten verlangen. Wende
              dich dafuer an die oben genannte Kontaktadresse.
            </p>
          </section>
        </div>
      </article>
    );
  }

  return (
    <article className="legal-page">
      <div className="legal-page-inner">
        <a className="legal-back-link" href="#top">
          Zurueck
        </a>
        <p className="legal-eyebrow">Rechtliches</p>
        <h1>Impressum</h1>

        <section className="legal-section">
          <h2>Angaben zur verantwortlichen Person</h2>
          <p>[Name/Firma ergaenzen]</p>
          <p>[Strasse und Hausnummer ergaenzen]</p>
          <p>[PLZ und Ort ergaenzen]</p>
          <p>[Land ergaenzen]</p>
        </section>

        <section className="legal-section">
          <h2>Kontakt</h2>
          <p>E-Mail: [E-Mail-Adresse ergaenzen]</p>
        </section>

        <section className="legal-section">
          <h2>Haftung fuer Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden sorgfaeltig erstellt. Fuer die
            Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte wird
            jedoch keine Gewaehr uebernommen.
          </p>
        </section>

        <section className="legal-section">
          <h2>Haftung fuer Links</h2>
          <p>
            Diese Website kann Links zu externen Websites enthalten. Fuer deren
            Inhalte sind ausschliesslich die jeweiligen Betreiber
            verantwortlich.
          </p>
        </section>
      </div>
    </article>
  );
}

import { LegalLayout } from '../../components/LegalLayout/LegalLayout';

export function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section className="legal-section">
        <h2>Angaben zur verantwortlichen Person</h2>
        <p>[Name/Firma ergänzen]</p>
        <p>[Strasse und Hausnummer ergänzen]</p>
        <p>[PLZ und Ort ergänzen]</p>
        <p>[Land ergänzen]</p>
      </section>

      <section className="legal-section">
        <h2>Kontakt</h2>
        <p>E-Mail: [E-Mail-Adresse ergänzen]</p>
      </section>

      <section className="legal-section">
        <h2>Haftung fuer Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden sorgfältig erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch
          keine Gewähr übernommen.
        </p>
      </section>

      <section className="legal-section">
        <h2>Haftung fuer Links</h2>
        <p>
          Diese Website kann Links zu externen Websites enthalten. Für deren
          Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.
        </p>
      </section>
    </LegalLayout>
  );
}

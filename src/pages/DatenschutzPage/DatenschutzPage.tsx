import { LegalLayout } from '../../components/LegalLayout/LegalLayout';

export function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section className="legal-section">
        <h2>Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Bearbeitung personenbezogener Daten auf dieser
          Website ist: [Name/Firma, Adresse und E-Mail ergänzen].
        </p>
      </section>

      <section className="legal-section">
        <h2>Kontaktformular</h2>
        <p>
          Wenn du das Anmeldeformular nutzt, werden Name, E-Mail-Adresse und
          deine Kurznachricht verarbeitet, um deine Anfrage zu beantworten und
          die Anmeldung zu organisieren.
        </p>
      </section>

      <section className="legal-section">
        <h2>Hosting und Zugriffsdaten</h2>
        <p>
          Beim Besuch der Website können technische Zugriffsdaten wie
          IP-Adresse, Datum, Uhrzeit, Browser und Betriebssystem durch den
          Hosting-Anbieter verarbeitet werden, um die Website sicher und stabil
          bereitzustellen.
        </p>
      </section>

      <section className="legal-section">
        <h2>Weitergabe und Aufbewahrung</h2>
        <p>
          Personenbezogene Daten werden nur weitergegeben, wenn dies für den
          Betrieb der Website, die Bearbeitung deiner Anfrage oder zur
          Erfüllung gesetzlicher Pflichten erforderlich ist. Daten werden nur
          so lange aufbewahrt, wie es für diese Zwecke notwendig ist.
        </p>
      </section>

      <section className="legal-section">
        <h2>Deine Rechte</h2>
        <p>
          Du kannst Auskunft, Berichtigung, Löschung oder Einschränkung der
          Bearbeitung deiner personenbezogenen Daten verlangen. Wende dich
          dafür an die oben genannte Kontaktadresse.
        </p>
      </section>
    </LegalLayout>
  );
}

import { LegalLayout } from '@/components/LegalLayout/LegalLayout';
import { LegalSection } from '@/components/LegalSection/LegalSection';

const datenschutzSections = [
  {
    title: 'Verantwortliche Stelle',
    paragraphs: [
      'Verantwortlich für die Bearbeitung personenbezogener Daten auf dieser Website ist: [Name/Firma, Adresse und E-Mail ergänzen].',
    ],
  },
  {
    title: 'Kontaktformular',
    paragraphs: [
      'Wenn du das Anmeldeformular nutzt, werden Name, E-Mail-Adresse und deine Kurznachricht verarbeitet, um deine Anfrage zu beantworten und die Anmeldung zu organisieren.',
    ],
  },
  {
    title: 'Hosting und Zugriffsdaten',
    paragraphs: [
      'Beim Besuch der Website können technische Zugriffsdaten wie IP-Adresse, Datum, Uhrzeit, Browser und Betriebssystem durch den Hosting-Anbieter verarbeitet werden, um die Website sicher und stabil bereitzustellen.',
    ],
  },
  {
    title: 'Weitergabe und Aufbewahrung',
    paragraphs: [
      'Personenbezogene Daten werden nur weitergegeben, wenn dies für den Betrieb der Website, die Bearbeitung deiner Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Daten werden nur so lange aufbewahrt, wie es für diese Zwecke notwendig ist.',
    ],
  },
  {
    title: 'Deine Rechte',
    paragraphs: [
      'Du kannst Auskunft, Berichtigung, Löschung oder Einschränkung der Bearbeitung deiner personenbezogenen Daten verlangen. Wende dich dafür an die oben genannte Kontaktadresse.',
    ],
  },
];

export function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      {datenschutzSections.map((section) => (
        <LegalSection
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
    </LegalLayout>
  );
}

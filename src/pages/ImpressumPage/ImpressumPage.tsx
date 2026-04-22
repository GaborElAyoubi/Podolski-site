import { LegalLayout } from '@/components/LegalLayout/LegalLayout';
import { LegalSection } from '@/components/LegalSection/LegalSection';

const impressumSections = [
  {
    title: 'Angaben zur verantwortlichen Person',
    paragraphs: [
      '[Name/Firma ergänzen]',
      '[Strasse und Hausnummer ergänzen]',
      '[PLZ und Ort ergänzen]',
      '[Land ergänzen]',
    ],
  },
  {
    title: 'Kontakt',
    paragraphs: ['E-Mail: [E-Mail-Adresse ergänzen]'],
  },
  {
    title: 'Haftung für Inhalte',
    paragraphs: [
      'Die Inhalte dieser Website wurden sorgfältig erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.',
    ],
  },
  {
    title: 'Haftung für Links',
    paragraphs: [
      'Diese Website kann Links zu externen Websites enthalten. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.',
    ],
  },
];

export function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      {impressumSections.map((section) => (
        <LegalSection
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
    </LegalLayout>
  );
}

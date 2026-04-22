import './LegalSection.css';

interface LegalSectionProps {
  title: string;
  paragraphs: string[];
}

export function LegalSection({ title, paragraphs }: LegalSectionProps) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

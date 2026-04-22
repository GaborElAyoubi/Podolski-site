import type { ReactNode } from 'react';
import './LegalLayout.css';

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <article className="legal-page">
      <div className="legal-page-inner">
        <a className="legal-back-link" href="#top">
          Zurück
        </a>
        <p className="legal-eyebrow">Rechtliches</p>
        <h1>{title}</h1>

        {children}
      </div>
    </article>
  );
}

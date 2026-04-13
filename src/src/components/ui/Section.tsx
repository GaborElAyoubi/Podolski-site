import { PropsWithChildren } from 'react';
import { Container } from './Container';

interface SectionProps extends PropsWithChildren {
  id?: string;
  title: string;
  intro?: string;
}

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <Container>
        <div className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

import type { CSSProperties } from 'react';
import { siteContent } from '@/content/siteContent';
import { useTimedPulse } from '@/hooks/useTimedPulse';
import './Concept.css';

const CONCEPT_PULSE_DURATION_MS = 900;

interface ConceptProps {
  progress: number;
}

type ConceptStyle = CSSProperties & {
  '--concept-progress': number;
};

function clampProgress(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}

export function Concept({ progress }: ConceptProps) {
  const { activeKey, triggerPulse } = useTimedPulse(CONCEPT_PULSE_DURATION_MS);
  const conceptStyle: ConceptStyle = {
    '--concept-progress': clampProgress(progress),
  };

  return (
    <section className="concept section-shell" id="concept" style={conceptStyle}>
      <div className="concept-card section-stack">
        <h2 className="concept-title section-title">{siteContent.concept.title}</h2>
        <ul className="concept-list">
          {siteContent.concept.items.map((item) => (
            <li
              key={item.text}
              className={activeKey === item.text ? 'is-pulsing' : undefined}
              onMouseEnter={() => triggerPulse(item.text)}
              onFocus={() => triggerPulse(item.text)}
              tabIndex={0}
            >
              <span className="concept-list-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

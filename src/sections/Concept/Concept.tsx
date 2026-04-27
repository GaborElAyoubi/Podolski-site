import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
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
  const conceptItems = [
    'Öffnung des Herzraums',
    'Berührt sein auf mehreren Ebenen',
    'Gefühl von Verbundenheit',
    'Eigene Grenzen erkennen und achten',
    'Achtsames Miteinander',
    'Begegnungen auf Herzebene',
  ];
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pulseTimeoutRef = useRef<number | null>(null);
  const conceptStyle: ConceptStyle = {
    '--concept-progress': clampProgress(progress),
  };

  useEffect(() => {
    return () => {
      if (pulseTimeoutRef.current !== null) {
        window.clearTimeout(pulseTimeoutRef.current);
      }
    };
  }, []);

  const triggerPulse = (item: string) => {
    if (pulseTimeoutRef.current !== null) {
      window.clearTimeout(pulseTimeoutRef.current);
    }

    setActiveItem(item);
    pulseTimeoutRef.current = window.setTimeout(() => {
      setActiveItem((currentItem) => (currentItem === item ? null : currentItem));
      pulseTimeoutRef.current = null;
    }, CONCEPT_PULSE_DURATION_MS);
  };

  return (
    <section className="concept" id="concept" style={conceptStyle}>
      <div className="concept-card">
        <h2 className="concept-title">Worum es geht</h2>
        <ul className="concept-list">
          {conceptItems.map((item) => (
            <li
              key={item}
              className={activeItem === item ? 'is-pulsing' : undefined}
              onMouseEnter={() => triggerPulse(item)}
              onFocus={() => triggerPulse(item)}
            >
              <span className="concept-list-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

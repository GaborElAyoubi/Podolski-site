import './Hero.css';
import type { CSSProperties } from 'react';

interface HeroProps {
  progress: number;
}

export function Hero({ progress }: HeroProps) {
  const heroStyle = {
    '--hero-visible-height': `calc(${100 - progress * 100}vh + ${4.75 * progress}rem)`,
    '--hero-padding-block': `${4 - progress * 3.15}rem`,
    '--hero-padding-inline': `${4 - progress * 2.5}rem`,
    '--hero-center-scale': 1 - progress * 0.42,
    '--hero-center-y': `${-2 + progress * 2}vh`,
    '--hero-list-opacity': 1 - progress * 1.4,
    '--hero-list-y': `${progress * -16}px`,
  } as CSSProperties;

  return (
    <section
      className="hero"
      id="top"
      style={heroStyle}
    >
      <div className="hero-sticky">
        <div className="hero-center">
          <h1 className="hero-title">BERÜHRUNG</h1>

          <ul className="hero-list">
            <li>Berühren</li>
            <li>Berührt sein</li>
            <li>Berührt werden</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

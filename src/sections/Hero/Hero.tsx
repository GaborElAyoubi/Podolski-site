import './Hero.css';
import type { CSSProperties } from 'react';
import featherImage from '../../public/images/feder.png';
import { HERO_SHRINK_DISTANCE } from '@/hooks/useHeroScrollProgress';

interface HeroProps {
  progress: number;
}

type HeroStyle = CSSProperties & {
  '--hero-scroll-buffer': string;
  '--hero-visible-height': string;
  '--hero-padding-block': string;
  '--hero-padding-inline': string;
  '--hero-center-scale': number;
  '--hero-center-y': string;
};

function clampProgress(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}

function getHeroStyle(progress: number): HeroStyle {
  const clampedProgress = clampProgress(progress);

  return {
    '--hero-scroll-buffer': `${HERO_SHRINK_DISTANCE}px`,
    '--hero-visible-height': `calc(${100 - clampedProgress * 100}vh + ${4.75 * clampedProgress}rem)`,
    '--hero-padding-block': `${4 - clampedProgress * 3.15}rem`,
    '--hero-padding-inline': `${4 - clampedProgress * 2.5}rem`,
    '--hero-center-scale': 1 - clampedProgress * 0.42,
    '--hero-center-y': `${-2 + clampedProgress * 2}vh`,
  };
}

export function Hero({ progress }: HeroProps) {
  const heroStyle = getHeroStyle(progress);

  return (
    <section
      className="hero"
      id="top"
      style={heroStyle}
    >
      <div className="hero-sticky">
        <img className="hero-backdrop-feather" src={featherImage} alt="" aria-hidden="true" />

        <div className="hero-center">
          <p className="hero-kicker">Achtsame Begegnung in Arbon</p>
          <h1 className="hero-title">Berührung</h1>
          <p className="hero-lede">
            Ein Abend für Präsenz, innere Ruhe und Begegnung auf Herzebene.
          </p>

          <div className="hero-meta" aria-label="Veranstaltungsdetails">
            <span>19 - 21 Uhr</span>
            <span>Schloss Arbon</span>
          </div>

          <div className="hero-actions">
            <a className="hero-action hero-action-primary" href="#anmelden">
              Anmelden
            </a>
            <a className="hero-action hero-action-secondary" href="#concept">
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

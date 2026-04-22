import './Hero.css';
import type { CSSProperties } from 'react';
import featherImage from '../../public/images/feder.png';

interface HeroProps {
  progress: number;
}

type HeroStyle = CSSProperties & {
  '--hero-visible-height': string;
  '--hero-padding-block': string;
  '--hero-padding-inline': string;
  '--hero-center-scale': number;
  '--hero-center-y': string;
  '--hero-list-opacity': number;
  '--hero-list-y': string;
  '--hero-feather-opacity': number;
  '--hero-feather-rotate': string;
  '--hero-feather-rotate-right': string;
  '--hero-feather-scale': number;
  '--hero-feather-scale-right': number;
};

function clampProgress(progress: number) {
  return Math.min(Math.max(progress, 0), 1);
}

function getHeroStyle(progress: number): HeroStyle {
  const clampedProgress = clampProgress(progress);
  const rightFeatherProgress = clampProgress((clampedProgress - 0.12) / 0.88);

  return {
    '--hero-visible-height': `calc(${100 - clampedProgress * 100}vh + ${4.75 * clampedProgress}rem)`,
    '--hero-padding-block': `${4 - clampedProgress * 3.15}rem`,
    '--hero-padding-inline': `${4 - clampedProgress * 2.5}rem`,
    '--hero-center-scale': 1 - clampedProgress * 0.42,
    '--hero-center-y': `${-2 + clampedProgress * 2}vh`,
    '--hero-list-opacity': 1 - clampedProgress * 1.4,
    '--hero-list-y': `${clampedProgress * -16}px`,
    '--hero-feather-opacity': Math.max(1 - clampedProgress * 1.35, 0),
    '--hero-feather-rotate': `${clampedProgress * 190}deg`,
    '--hero-feather-rotate-right': `${238 - rightFeatherProgress * 190}deg`,
    '--hero-feather-scale': 1 - clampedProgress * 0.25,
    '--hero-feather-scale-right': 1 - rightFeatherProgress * 0.25,
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
        <img
          className="hero-feather hero-feather-left"
          src={featherImage}
          alt=""
          aria-hidden="true"
        />
        <img
          className="hero-feather hero-feather-right"
          src={featherImage}
          alt=""
          aria-hidden="true"
        />

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

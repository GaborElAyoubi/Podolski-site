import './Hero.css';
import type { CSSProperties } from 'react';
import featherImage from '../../public/images/feder.png';

interface HeroProps {
  progress: number;
}

export function Hero({ progress }: HeroProps) {
  const rightFeatherProgress = Math.min(Math.max((progress - 0.12) / 0.88, 0), 1);

  const heroStyle = {
    '--hero-visible-height': `calc(${100 - progress * 100}vh + ${4.75 * progress}rem)`,
    '--hero-padding-block': `${4 - progress * 3.15}rem`,
    '--hero-padding-inline': `${4 - progress * 2.5}rem`,
    '--hero-center-scale': 1 - progress * 0.42,
    '--hero-center-y': `${-2 + progress * 2}vh`,
    '--hero-list-opacity': 1 - progress * 1.4,
    '--hero-list-y': `${progress * -16}px`,
    '--hero-feather-opacity': Math.max(1 - progress * 1.35, 0),
    '--hero-feather-rotate': `${progress * 190}deg`,
    '--hero-feather-rotate-right': `${238 - rightFeatherProgress * 190}deg`,
    '--hero-feather-scale': 1 - progress * 0.25,
    '--hero-feather-scale-right': 1 - rightFeatherProgress * 0.25,
  } as CSSProperties;

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

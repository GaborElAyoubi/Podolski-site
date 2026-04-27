import './Hero.css';
import featherImage from '../../public/images/feder.png';
import { siteContent } from '@/content/siteContent';
import { getHeroStyle } from './heroMotion';

interface HeroProps {
  progress: number;
}

export function Hero({ progress }: HeroProps) {
  const heroStyle = getHeroStyle(progress);
  const { hero } = siteContent;

  return (
    <section className="hero" id="top" style={heroStyle}>
      <div className="hero-sticky">
        <img className="hero-backdrop-feather" src={featherImage} alt="" aria-hidden="true" />

        <div className="hero-center">
          <p className="hero-kicker">{hero.kicker}</p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-lede">{hero.lede}</p>

          <div className="hero-meta" aria-label="Veranstaltungsdetails">
            {hero.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="hero-action hero-action-primary" href={hero.actions.primary.href}>
              {hero.actions.primary.label}
            </a>
            <a className="hero-action hero-action-secondary" href={hero.actions.secondary.href}>
              {hero.actions.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

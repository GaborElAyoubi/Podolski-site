import './Hero.css';

interface HeroProps {
  scrolled: boolean;
}

export function Hero({ scrolled }: HeroProps) {
  return (
    <section className={`hero ${scrolled ? 'hero-small' : ''}`} id="top">
      <div className="hero-center">
        <h1 className="hero-title">BERÜHRUNG</h1>

        <ul className="hero-list">
          <li>Berühren</li>
          <li>Berührt sein</li>
          <li>Berührt werden</li>
        </ul>
      </div>
    </section>
  );
}

import './About.css';
import { siteContent } from '@/content/siteContent';

export function About() {
  const { about } = siteContent;

  return (
    <section className="about section-shell" id="about">
      <div className="about-card section-stack">
        <h2 className="about-title section-title">{about.title}</h2>

        <h3 className="about-lede">{about.lede}</h3>

        <div className="about-body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p className="about-thanks">{about.thanks}</p>
        </div>
      </div>
    </section>
  );
}

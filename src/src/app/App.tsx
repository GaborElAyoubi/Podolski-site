import { ButtonLink } from '../components/ui/ButtonLink';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { siteContent } from '../content/siteContent';
import { ContactForm } from '../features/contact/components/ContactForm';

export function App() {
  return (
    <>
      <header className="site-header">
        <Container>
          <div className="site-header__inner">
            <a className="brand" href="#top">
              {siteContent.brandName}
            </a>

            <nav className="nav" aria-label="Hauptnavigation">
              {siteContent.navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      <main id="top">
        <section className="hero">
          <Container>
            <div className="hero__content">
              <p className="eyebrow">Einfache Website. Saubere Architektur. Erweiterbar.</p>
              <h1>{siteContent.heroTitle}</h1>
              <p className="hero__text">{siteContent.heroText}</p>

              <div className="hero__actions">
                <ButtonLink href="#contact">{siteContent.heroPrimaryCta}</ButtonLink>
                <ButtonLink href="#offers" variant="secondary">
                  {siteContent.heroSecondaryCta}
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        <Section title={siteContent.aboutTitle} intro={siteContent.aboutText}>
          <div className="info-card">
            <strong>Architektur-Idee:</strong> Inhalte, UI und Feature-Logik sind getrennt. Dadurch kannst du später leicht Formspree, CMS, Supabase oder ein eigenes Backend ergänzen.
          </div>
        </Section>

        <Section id="offers" title={siteContent.offersTitle}>
          <div className="card-grid">
            {siteContent.offers.map((offer) => (
              <article key={offer.title} className="card">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="process" title={siteContent.processTitle}>
          <div className="card-grid">
            {siteContent.process.map((step) => (
              <article key={step.title} className="card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title={siteContent.contactTitle} intro={siteContent.contactText}>
          <div className="contact-layout">
            <div className="contact-card">
              <h3>Direkter Kontakt</h3>
              <p>
                E-Mail: <a href={`mailto:${siteContent.contactEmail}`}>{siteContent.contactEmail}</a>
              </p>
              <p>
                Dieses Setup ist bewusst einfach. Die Implementierung hinter dem Formular ist über ein Service-Interface gekapselt und kann später ersetzt werden.
              </p>
            </div>

            <ContactForm targetEmail={siteContent.contactEmail} />
          </div>
        </Section>
      </main>
    </>
  );
}

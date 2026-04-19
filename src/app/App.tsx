import { siteContent } from '../content/siteContent';
import { ContactForm } from '../features/contact/components/ContactForm';

export function App() {
  return (
    <main>
      <section>
        <h1>{siteContent.heroTitle}</h1>
        <p>{siteContent.heroText}</p>
      </section>

      <section>
        <h2>{siteContent.aboutTitle}</h2>
        <p>{siteContent.aboutText}</p>
      </section>

      <section id="offers">
        <h2>{siteContent.offersTitle}</h2>
        {siteContent.offers.map((offer) => (
          <article key={offer.title}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </article>
        ))}
      </section>

      <section id="process">
        <h2>{siteContent.processTitle}</h2>
        {siteContent.process.map((step) => (
          <article key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </section>

      <section id="contact">
        <h2>{siteContent.contactTitle}</h2>
        <p>{siteContent.contactText}</p>
        <ContactForm targetEmail={siteContent.contactEmail} />
      </section>
    </main>
  );
}

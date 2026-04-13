import type { SiteContent } from '../types/site';

export const siteContent: SiteContent = {
  brandName: 'Dein Angebot',
  heroTitle: 'Klare, professionelle Website für dein Angebot',
  heroText:
    'Diese Seite ist bewusst einfach gehalten: Menschen verstehen sofort dein Angebot und können dir direkt eine Anfrage senden. Die Architektur bleibt dabei offen für spätere Erweiterungen wie CMS, Admin-Oberfläche oder Backend.',
  heroPrimaryCta: 'Jetzt anfragen',
  heroSecondaryCta: 'Angebot ansehen',
  aboutTitle: 'Was dich auszeichnet',
  aboutText:
    'Nutze diesen Bereich für Vertrauen, Positionierung und ein klares Wertversprechen. Schreibe hier in 3–5 Sätzen, wem du hilfst, was du anbietest und warum man gerade dich kontaktieren sollte.',
  offersTitle: 'Leistungen',
  offers: [
    {
      title: 'Angebot 1',
      description:
        'Kurze, verständliche Beschreibung deiner ersten Leistung mit Fokus auf dem konkreten Nutzen für Interessenten.',
    },
    {
      title: 'Angebot 2',
      description:
        'Hier beschreibst du eine zweite Leistung oder ein Paket. Bleibe einfach und klar formuliert.',
    },
    {
      title: 'Persönliche Betreuung',
      description:
        'Anfragen werden persönlich beantwortet. Genau das passt zu einem kleinen, direkten und vertrauensvollen Setup.',
    },
  ],
  processTitle: 'So läuft es ab',
  process: [
    {
      title: '1. Anfrage senden',
      description: 'Interessenten schicken dir direkt eine Nachricht über das Formular.',
    },
    {
      title: '2. Persönliche Rückmeldung',
      description: 'Du antwortest individuell per E-Mail und klärst die Details direkt.',
    },
    {
      title: '3. Nächste Schritte',
      description: 'Erst wenn nötig, erweiterst du die Seite später um Admin oder Backend.',
    },
  ],
  contactTitle: 'Kontakt',
  contactText:
    'Nutze das Formular für eine erste Anfrage. Aktuell wird bewusst ein einfacher E-Mail-Flow verwendet. Später kann diese Stelle leicht an einen Formularservice oder ein Backend angebunden werden.',
  contactEmail: 'hello@example.com',
  navigation: [
    { label: 'Angebot', href: '#offers' },
    { label: 'Ablauf', href: '#process' },
    { label: 'Kontakt', href: '#contact' },
  ],
};

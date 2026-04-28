export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface ConceptItem {
  text: string;
}

export interface SignupDateOption {
  label: string;
  value: string;
}

export const siteContent = {
  brandName: 'Berührung',
  mainNavigation: [
    {
      label: 'Konzept',
      href: '#concept',
    },
    {
      label: 'Anmelden',
      href: '#anmelden',
    },
    {
      label: 'Über mich',
      href: '#about',
    },
  ] satisfies NavigationItem[],
  hero: {
    title: 'Berührung',
    lede: 'Berühren, berührt sein, berührt werden',
    meta: ['19 - 21 Uhr', 'Schloss Arbon'],
    actions: {
      primary: {
        label: 'Anmelden',
        href: '#anmelden',
      },
      secondary: {
        label: 'Mehr erfahren',
        href: '#concept',
      },
    },
  },
  concept: {
    title: 'Worum es geht',
    items: [
      { text: 'Öffnung des Herzraums' },
      { text: 'Berührt sein auf mehreren Ebenen' },
      { text: 'Gefühl von Verbundenheit' },
      { text: 'Eigene Grenzen erkennen und achten' },
      { text: 'Achtsames Miteinander' },
      { text: 'Begegnungen auf Herzebene' },
    ] satisfies ConceptItem[],
  },
  signup: {
    title: 'Ich freue mich auf deine Nachricht.',
    text: 'Da die Anzahl Teilnehmer:innen beschränkt ist, bitte ich dich um eine kurze verbindliche Anmeldung.',
    details: {
      timeLabel: 'Zeit',
      timeValue: '19 - 21 Uhr',
      locationLabel: 'Ort',
      locationValue: 'Schloss Arbon, erste Tür rechts nach Haupteingang',
      datesPlaceholder: 'Bitte wählen',
      options: [
        { label: '1. Juli', value: '2026-07-01' },
        { label: '19. August', value: '2026-08-19' },
        { label: '16. September', value: '2026-09-16' },
        { label: '7. Oktober', value: '2026-10-07' },
        { label: '4. November', value: '2026-11-04' },
        { label: '2. Dezember', value: '2026-12-02' },
      ] satisfies SignupDateOption[],
    },
    fields: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      preferredDateLabel: 'Wunschdatum',
      noteLabel: 'Kurznachricht',
      submitLabel: 'Anmelden',
      submittingLabel: 'Wird gesendet...',
      pendingMessage: 'Deine Anmeldung wird gerade gesendet.',
      successDialogTitle: 'Anmeldung gesendet',
      successDialogCloseLabel: 'Verstanden',
    },
    endpoint: '/api/contact',
  },
  about: {
    title: 'Entstehung',
    paragraphs: [
      'Einen Grossteil meines Lebens habe ich in meinen Schattenseiten verbracht. Dadurch haben sich wunderbare - wenn auch schmerzvolle - Ereignisse, Begegnungen, Konfrontationen und Möglichkeiten ergeben, genau hinzusehen, zu erkennen und zu transformieren. Ein langer oftmals beschwerlicher, aber auch immer wieder lichtvoller Weg gehört nun zu meiner Geschichte.',
      'Seit Jahren spüre ich den Ruf nach Berührung im Sinne von Berührt-sein. Nach einem etwas zaghaften «Ja» haben sich mir einige Türen geöffnet und ich durfte in Felder eintauchen, die mich näher zu mir brachten und mich aus der Komfortzone geführt haben.',
      'Ein Lebensereignis hat sich mir im Rückblick als ein grosser Segen offenbart. So war es mir endlich möglich ganz «Ja» zu sagen. Ein klarer Ruf nach Berührung und danach, diese Erfahrung anderen Seelen zugänglich zu machen hat sich mir offenbart. Es ist ein «Ja» dazu, Berührung in die Welt zu tragen!',
    ],
    thanks: 'Danke, danke, danke.',
  },
};

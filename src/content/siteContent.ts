export interface NavigationItem {
  label: string;
  href: `#${string}`;
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
  signup: {
    endpoint: '/api/contact',
  },
};

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export const siteContent = {
  brandName: 'Berührung',
  mainNavigation: [
    {
      label: 'Concept',
      href: '#concept',
    },
    {
      label: 'Anmelden',
      href: '#anmelden',
    },
    {
      label: 'About',
      href: '#about',
    },
  ] satisfies NavigationItem[],
  signup: {
    recipientEmail: '',
  },
};

export function getSignupMailtoHref() {
  return siteContent.signup.recipientEmail
    ? `mailto:${siteContent.signup.recipientEmail}`
    : undefined;
}

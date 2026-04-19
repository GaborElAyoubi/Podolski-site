export interface NavigationItem {
  label: string;
  href: string;
}

export interface OfferItem {
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface SiteContent {
  brandName: string;
  heroTitle: string;
  heroText: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  aboutTitle: string;
  aboutText: string;
  offersTitle: string;
  offers: OfferItem[];
  processTitle: string;
  process: StepItem[];
  navigation: NavigationItem[];
}

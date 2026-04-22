export type LegalRoute = 'impressum' | 'datenschutz';

export interface LegalRouteConfig {
  id: LegalRoute;
  label: string;
  href: `#/${LegalRoute}`;
}

export const legalRoutes = [
  {
    id: 'impressum',
    label: 'Impressum',
    href: '#/impressum',
  },
  {
    id: 'datenschutz',
    label: 'Datenschutz',
    href: '#/datenschutz',
  },
] satisfies LegalRouteConfig[];

export function getLegalRouteFromHash(hash: string): LegalRoute | null {
  const route = legalRoutes.find((legalRoute) => {
    return legalRoute.href === hash;
  });

  return route?.id ?? null;
}

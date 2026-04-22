import { useEffect, useState } from 'react';
import { getLegalRouteFromHash, type LegalRoute } from '@/routing/routes';

export function useHashRoute() {
  const [legalRoute, setLegalRoute] = useState<LegalRoute | null>(() =>
    getLegalRouteFromHash(window.location.hash),
  );

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = window.location.hash;
      const nextLegalRoute = getLegalRouteFromHash(nextHash);

      setLegalRoute(nextLegalRoute);

      if (nextLegalRoute) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      if (!legalRoute) {
        return;
      }

      window.requestAnimationFrame(() => {
        const targetId = nextHash.slice(1);
        const targetElement = targetId
          ? document.getElementById(targetId)
          : null;

        if (targetElement) {
          targetElement.scrollIntoView();
          return;
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [legalRoute]);

  return { legalRoute };
}

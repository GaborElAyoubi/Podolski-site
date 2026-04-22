import { DatenschutzPage } from '@/pages/DatenschutzPage/DatenschutzPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { ImpressumPage } from '@/pages/ImpressumPage/ImpressumPage';
import type { LegalRoute } from './routes';

interface PageRendererProps {
  legalRoute: LegalRoute | null;
  scrollProgress: number;
}

export function PageRenderer({
  legalRoute,
  scrollProgress,
}: PageRendererProps) {
  if (legalRoute === 'impressum') {
    return <ImpressumPage />;
  }

  if (legalRoute === 'datenschutz') {
    return <DatenschutzPage />;
  }

  return <HomePage scrollProgress={scrollProgress} />;
}

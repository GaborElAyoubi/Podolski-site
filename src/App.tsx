import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { useHeroScrollProgress } from '@/hooks/useHeroScrollProgress';
import { PageRenderer } from '@/routing/PageRenderer';
import { useHashRoute } from '@/routing/useHashRoute';

export function App() {
  const scrollProgress = useHeroScrollProgress();
  const { legalRoute } = useHashRoute();

  return (
    <div className="app-shell">
      <Header progress={legalRoute ? 1 : scrollProgress} />

      <main className="app-main">
        <PageRenderer legalRoute={legalRoute} scrollProgress={scrollProgress} />
      </main>

      <Footer />
    </div>
  );
}

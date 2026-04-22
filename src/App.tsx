import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Concept } from './components/Concept/Concept';
import { Organisation } from './components/Organisation/Organisation';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { LegalPage, type LegalPageKind } from './components/LegalPage/LegalPage';

const HERO_SHRINK_DISTANCE = 320;

function getLegalPageFromHash(): LegalPageKind | null {
  if (window.location.hash === '#/impressum') {
    return 'impressum';
  }

  if (window.location.hash === '#/datenschutz') {
    return 'datenschutz';
  }

  return null;
}

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [legalPage, setLegalPage] = useState<LegalPageKind | null>(() =>
    getLegalPageFromHash(),
  );
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) {
        return;
      }

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const nextProgress = Math.min(
          Math.max(window.scrollY / HERO_SHRINK_DISTANCE, 0),
          1,
        );

        setScrollProgress(nextProgress);
        ticking.current = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const nextLegalPage = getLegalPageFromHash();

      setLegalPage(nextLegalPage);

      if (nextLegalPage) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      if (!legalPage) {
        return;
      }

      window.requestAnimationFrame(() => {
        const targetId = window.location.hash.slice(1);
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
  }, [legalPage]);

  return (
    <div className="app-shell">
      <Header progress={legalPage ? 1 : scrollProgress} />

      <main className="app-main">
        {legalPage ? (
          <LegalPage page={legalPage} />
        ) : (
          <>
            <Hero progress={scrollProgress} />
            <Concept />
            <Organisation />
            <About />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

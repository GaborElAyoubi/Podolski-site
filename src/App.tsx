import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Concept } from './components/Concept/Concept';
import { Organisation } from './components/Organisation/Organisation';
import { About } from './components/About/About';

const HERO_SHRINK_DISTANCE = 320;

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
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

  return (
    <>
      <Header progress={scrollProgress} />

      <main>
        <Hero progress={scrollProgress} />
        <Concept />
        <Organisation />
        <About />
      </main>
    </>
  );
}

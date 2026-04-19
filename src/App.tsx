import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const isScrollingUp = nextScrollY < lastScrollY.current;

      setScrolled((current) => {
        if (!current && nextScrollY > 180) {
          return true;
        }

        if (current && isScrollingUp && nextScrollY < 5) {
          return false;
        }

        return current;
      });

      lastScrollY.current = nextScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />

      <main>
        <Hero scrolled={scrolled} />
        <About />
      </main>
    </>
  );
}

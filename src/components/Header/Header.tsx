import './Header.css';
import { useEffect, useId, useState, type CSSProperties } from 'react';

interface HeaderProps {
  progress: number;
}

export function Header({ progress }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className="site-header"
      style={{
        opacity: progress,
        transform: `translateY(${(progress - 1) * 100}%)`,
      } as CSSProperties}
    >
      <div className="site-header-inner">
        <a className="site-brand" href="#top">
          Berührung
        </a>

        <nav className="site-nav site-nav-desktop">
          <a href="#concept">Concept</a>
          <a href="#organisation">Organisation</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="site-menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`site-menu-icon${isMenuOpen ? ' is-open' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className={`site-menu-overlay${isMenuOpen ? ' is-open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id={menuId}
        className={`site-nav-mobile${isMenuOpen ? ' is-open' : ''}`}
        aria-label="Site"
      >
        <a href="#concept" onClick={() => setIsMenuOpen(false)}>
          Concept
        </a>
        <a href="#organisation" onClick={() => setIsMenuOpen(false)}>
          Organisation
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
      </nav>
    </header>
  );
}

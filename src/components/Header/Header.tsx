import './Header.css';
import { useEffect, useId, useState, type CSSProperties, type MouseEvent } from 'react';
import { siteContent } from '@/content/siteContent';

interface HeaderProps {
  progress: number;
}

export function Header({ progress }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  const scrollSectionToCenter = (href: `#${string}`) => {
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    const contentTarget = target?.firstElementChild instanceof HTMLElement ? target.firstElementChild : target;
    const sectionOffset = href === '#anmelden' || href === '#about' ? 56 : 0;

    if (!contentTarget) {
      return;
    }

    const { top, height } = contentTarget.getBoundingClientRect();
    const targetTop = window.scrollY + top;
    const centeredTop = targetTop - (window.innerHeight - height) / 2 - sectionOffset;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const nextScrollTop = Math.max(0, Math.min(centeredTop, maxScrollTop));

    window.history.replaceState(null, '', href);
    window.scrollTo({
      top: nextScrollTop,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (href: `#${string}`) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollSectionToCenter(href);
    setIsMenuOpen(false);
  };

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
          {siteContent.brandName}
        </a>

        <nav className="site-nav site-nav-desktop">
          {siteContent.mainNavigation.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="site-menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Menü schliessen' : 'Menü öffnen'}
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
        aria-label="Seitennavigation"
      >
        {siteContent.mainNavigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleNavClick(item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

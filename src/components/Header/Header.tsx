import './Header.css';
import type { CSSProperties } from 'react';

interface HeaderProps {
  progress: number;
}

export function Header({ progress }: HeaderProps) {
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

        <nav className="site-nav">
          <a href="#concept">Concept</a>
          <a href="#organisation">Organisation</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

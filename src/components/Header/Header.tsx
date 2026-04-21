import './Header.css';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  return (
    <header className={`site-header ${scrolled ? 'visible' : ''}`}>
      <div className="site-header-inner">
        <a className="site-brand" href="#top">
          Berührung
        </a>

        <nav className="site-nav">
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

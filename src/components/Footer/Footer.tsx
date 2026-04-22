import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <a className="site-footer-brand" href="#top">
          Beruehrung
        </a>

        <nav className="site-footer-nav" aria-label="Rechtliches">
          <a href="#/impressum">Impressum</a>
          <a href="#/datenschutz">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}

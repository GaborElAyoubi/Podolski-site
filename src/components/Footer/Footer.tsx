import { legalRoutes } from '@/routing/routes';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <a className="site-footer-brand" href="#top">
          Berührung
        </a>

        <nav className="site-footer-nav" aria-label="Rechtliches">
          {legalRoutes.map((route) => (
            <a key={route.id} href={route.href}>
              {route.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

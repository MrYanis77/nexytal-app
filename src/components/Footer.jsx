import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const footerLinkClass =
  'text-sm text-content-muted no-underline transition-colors hover:text-primary';

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="flex h-1 w-full">
        <div className="w-1/3 bg-primary" />
        <div className="w-2/3 bg-accent" />
      </div>

      <div className="mx-auto max-w-container-2xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/accueil" className="shrink-0">
            <img
              src="/assets/logo_nexytal.png"
              alt="Nexytal"
              width={160}
              height={48}
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <p className="text-center text-sm text-content-muted">
            © {currentYear} Nexytal — Tous droits réservés
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/mentions-legales" className={footerLinkClass}>
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className={footerLinkClass}>
              Confidentialité
            </Link>
            <Link to="/contact" className={footerLinkClass}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

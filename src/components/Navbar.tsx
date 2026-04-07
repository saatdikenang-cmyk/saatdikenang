import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import logoDark from '@/assets/logo-dark.png';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/process', label: t('nav.process') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/blog', label: t('nav.blog') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoDark} alt="Saat Dikenang" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-xs tracking-wider uppercase transition-colors duration-300 ${
                isActive(link.to) ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <Link
            to="/book"
            className="bg-accent text-accent-foreground px-5 py-2 font-body text-xs tracking-wider uppercase hover:bg-accent/90 transition-all duration-300"
          >
            {t('nav.book')}
          </Link>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm tracking-wider ${
                isActive(link.to) ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <button
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className="font-body text-xs tracking-wider uppercase text-muted-foreground"
            >
              {lang === 'en' ? 'Indonesia' : 'English'}
            </button>
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="bg-accent text-accent-foreground px-5 py-2 font-body text-xs tracking-wider uppercase"
            >
              {t('nav.book')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

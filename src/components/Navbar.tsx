import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled && !open;

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/process', label: t('nav.process') },
    { to: '/faq', label: t('nav.faq') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-background/90 backdrop-blur-md border-b border-border/50'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-18 px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={transparent ? logoWhite : logoDark}
            alt="Saat Dikenang"
            className="h-5 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                isActive(link.to)
                  ? 'text-accent'
                  : transparent
                  ? 'text-background/70 hover:text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className={`font-body text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
              transparent ? 'text-background/60 hover:text-background' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <Link
            to="/book"
            className="bg-accent text-accent-foreground px-6 py-2.5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-accent/90 transition-all duration-300"
          >
            {t('nav.book')}
          </Link>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden ${transparent ? 'text-background' : 'text-foreground'}`}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-8 pt-2 space-y-4 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm tracking-wider py-1 ${
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

import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logoDark from '@/assets/logo-dark.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <img src={logoDark} alt="Saat Dikenang" className="h-12 w-auto mb-2" />
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">Navigation</p>
            <div className="space-y-2">
              {['/', '/pricing', '/portfolio', '/process', '/faq', '/blog'].map((path) => (
                <Link key={path} to={path} className="block font-body text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">Contact</p>
            <div className="space-y-2 font-body text-sm text-foreground/70">
              <a href="mailto:saatdikenang@gmail.com" className="block hover:text-foreground transition-colors">
                saatdikenang@gmail.com
              </a>
              <a href="https://wa.me/6285173032882" className="block hover:text-foreground transition-colors">
                +62 851 7303 2882
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Saat Dikenang. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

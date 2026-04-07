// import { Link } from 'react-router-dom';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Instagram, Mail, Phone } from 'lucide-react';
// import logoDark from '@/assets/logo-dark.png';

// const Footer = () => {
//   const { t, lang } = useLanguage();

//   return (
//     <footer className="border-t border-border">
//       {/* Top band */}
//       <div className="bg-card py-20 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
//             {/* Brand */}
//             <div className="md:col-span-5 space-y-6">
//               <img src={logoDark} alt="Saat Dikenang" className="h-10 w-auto" />
//               <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm">
//                 {t('footer.tagline')}
//               </p>
//               <div className="flex items-center gap-4 pt-2">
//                 <a href="https://instagram.com/saatdikenang" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
//                   <Instagram size={18} strokeWidth={1.5} />
//                 </a>
//                 <a href="mailto:saatdikenang@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
//                   <Mail size={18} strokeWidth={1.5} />
//                 </a>
//                 <a href="https://wa.me/6285173032882" className="text-muted-foreground hover:text-accent transition-colors">
//                   <Phone size={18} strokeWidth={1.5} />
//                 </a>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="md:col-span-3 space-y-5">
//               <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
//                 {lang === 'en' ? 'Navigation' : 'Navigasi'}
//               </p>
//               <div className="space-y-3">
//                 {[
//                   { path: '/', label: lang === 'en' ? 'Home' : 'Beranda' },
//                   { path: '/pricing', label: lang === 'en' ? 'Pricing' : 'Harga' },
//                   { path: '/process', label: lang === 'en' ? 'Process' : 'Proses' },
//                   { path: '/faq', label: 'FAQ' },
//                 ].map((item) => (
//                   <Link key={item.path} to={item.path} className="block font-body text-sm text-foreground/60 hover:text-foreground transition-colors duration-300">
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Contact */}
//             <div className="md:col-span-4 space-y-5">
//               <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
//                 {lang === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
//               </p>
//               <div className="space-y-3 font-body text-sm text-foreground/60">
//                 <a href="mailto:saatdikenang@gmail.com" className="block hover:text-foreground transition-colors duration-300">
//                   saatdikenang@gmail.com
//                 </a>
//                 <a href="https://wa.me/6285173032882" className="block hover:text-foreground transition-colors duration-300">
//                   +62 851 7303 2882
//                 </a>
//                 <p className="text-foreground/40 pt-2">Makassar, Indonesia</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="bg-foreground py-6 px-6">
//         <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2">
//           <p className="font-body text-[11px] text-background/40 tracking-wider">
//             © {new Date().getFullYear()} Saat Dikenang. {t('footer.rights')}
//           </p>
//           <p className="font-body text-[11px] text-background/30 tracking-wider">
//             {lang === 'en' ? 'Framed and Filmed Your Beautiful Moment' : 'Mengabadikan Momen Indahmu'}
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Mail, Phone } from 'lucide-react';
import logoDark from '@/assets/logo-dark.png';

const Footer = () => {
  const { t, lang } = useLanguage();

  const navItems = [
    { path: '/', label: lang === 'en' ? 'Home' : 'Beranda' },
    { path: '/pricing', label: lang === 'en' ? 'Packages' : 'Paket' },
    { path: '/process', label: lang === 'en' ? 'Process' : 'Proses' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <footer className="border-t border-border">
      {/* Top band */}
      <div className="bg-card py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5 space-y-6">
              <img src={logoDark} alt="Saat Dikenang" className="h-3 w-auto" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm">
                {t('footer.tagline')}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://instagram.com/saatdikenang" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="mailto:saatdikenang@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  <Mail size={18} strokeWidth={1.5} />
                </a>
                <a href="https://wa.me/6285173032882" className="text-muted-foreground hover:text-accent transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 space-y-5">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                {lang === 'en' ? 'Navigation' : 'Navigasi'}
              </p>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block font-body text-sm text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-4 space-y-5">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                {lang === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
              </p>
              <div className="space-y-3 font-body text-sm text-foreground/60">
                <a href="mailto:saatdikenang@gmail.com" className="block hover:text-foreground transition-colors duration-300">
                  saatdikenang@gmail.com
                </a>
                <a href="https://wa.me/6285173032882" className="block hover:text-foreground transition-colors duration-300">
                  +62 851 7303 2882
                </a>
                <p className="text-foreground/40 pt-2">Makassar, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-foreground py-6 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-[11px] text-background/40 tracking-wider">
            © {new Date().getFullYear()} Saat Dikenang. {t('footer.rights')}
          </p>
          <p className="font-body text-[11px] text-background/30 tracking-wider">
            {lang === 'en' ? 'Framed and Filmed Your Beautiful Moment' : 'Mengabadikan Momen Indahmu'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
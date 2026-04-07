import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { en: 'Home', id: 'Beranda' },
  'nav.pricing': { en: 'Packages', id: 'Paket' },
  'nav.portfolio': { en: 'Portfolio', id: 'Portofolio' },
  'nav.process': { en: 'Our Process', id: 'Proses Kami' },
  'nav.faq': { en: 'FAQ', id: 'FAQ' },
  'nav.blog': { en: 'Blog', id: 'Blog' },
  'nav.book': { en: 'Book a Call', id: 'Jadwalkan Panggilan' },

  // Hero
  'hero.tagline': { en: 'Saat Dikenang', id: 'Saat Dikenang' },
  'hero.subtitle': { en: 'Premium photography & videography for timeless moments. We capture clarity, trust, and cinematic beauty in every frame.', id: 'Fotografi & videografi premium untuk momen abadi. Kami menangkap kejelasan, kepercayaan, dan keindahan sinematik di setiap frame.' },
  'hero.cta': { en: 'Book via WhatsApp', id: 'Pesan via WhatsApp' },
  'hero.cta2': { en: 'View Portfolio', id: 'Lihat Portofolio' },

  // Services
  'services.title': { en: 'Our Services', id: 'Layanan Kami' },
  'services.photo': { en: 'Photography', id: 'Fotografi' },
  'services.video': { en: 'Videography', id: 'Videografi' },
  'services.combo': { en: 'Photo + Video', id: 'Foto + Video' },
  'services.subtitle': { en: 'Timeless visuals crafted with authority and cinematic precision.', id: 'Visual abadi yang dibuat dengan otoritas dan presisi sinematik.' },

  // Pricing
  'pricing.title': { en: 'Investment', id: 'Investasi' },
  'pricing.subtitle': { en: 'Choose the package that captures your story best.', id: 'Pilih paket yang paling cocok untuk mengabadikan ceritamu.' },
  'pricing.photos': { en: 'edited photos', id: 'foto diedit' },
  'pricing.location': { en: 'location', id: 'lokasi' },
  'pricing.locations': { en: 'locations', id: 'lokasi' },
  'pricing.session': { en: 'session', id: 'sesi' },
  'pricing.revision': { en: 'revision', id: 'revisi' },
  'pricing.revisions': { en: 'revisions', id: 'revisi' },
  'pricing.video_output': { en: 'video output', id: 'output video' },
  'pricing.best_value': { en: 'Best Value', id: 'Nilai Terbaik' },
  'pricing.book': { en: 'Book This Package', id: 'Pesan Paket Ini' },

  // Portfolio
  'portfolio.title': { en: 'Portfolio', id: 'Portofolio' },
  'portfolio.subtitle': { en: 'A curated selection of our finest cinematic work.', id: 'Koleksi pilihan dari karya sinematik terbaik kami.' },

  // Process
  'process.title': { en: 'Our Framework', id: 'Kerangka Kerja Kami' },
  'process.subtitle': { en: 'A structured approach that builds trust and delivers clarity.', id: 'Pendekatan terstruktur yang membangun kepercayaan dan memberikan kejelasan.' },
  'process.step1.title': { en: 'Consultation', id: 'Konsultasi' },
  'process.step1.desc': { en: 'We discuss your vision, preferences, and the story you want to tell.', id: 'Kami mendiskusikan visi, preferensi, dan cerita yang ingin Anda sampaikan.' },
  'process.step2.title': { en: 'Planning', id: 'Perencanaan' },
  'process.step2.desc': { en: 'Location scouting, mood board creation, and scheduling your perfect session.', id: 'Survei lokasi, pembuatan mood board, dan penjadwalan sesi sempurna Anda.' },
  'process.step3.title': { en: 'Capture', id: 'Pengambilan Gambar' },
  'process.step3.desc': { en: 'The cinematic session — directed with clarity and creative authority.', id: 'Sesi sinematik — diarahkan dengan kejelasan dan otoritas kreatif.' },
  'process.step4.title': { en: 'Delivery', id: 'Pengiriman' },
  'process.step4.desc': { en: 'Professionally edited, color-graded, and delivered in timeless quality.', id: 'Diedit secara profesional, grading warna, dan dikirim dalam kualitas abadi.' },

  // FAQ
  'faq.title': { en: 'Frequently Asked Questions', id: 'Pertanyaan yang Sering Diajukan' },
  'faq.q1': { en: 'How long is a typical session?', id: 'Berapa lama sesi biasanya?' },
  'faq.a1': { en: 'Sessions range from 1 to 2 hours depending on your chosen package. We ensure every minute is used to capture your best moments.', id: 'Sesi berkisar dari 1 hingga 2 jam tergantung paket yang Anda pilih. Kami memastikan setiap menit digunakan untuk menangkap momen terbaik Anda.' },
  'faq.q2': { en: 'How many revisions are included?', id: 'Berapa banyak revisi yang termasuk?' },
  'faq.a2': { en: 'Videography packages include 1-2 revisions. Photography edits are finalized with our signature cinematic style.', id: 'Paket videografi termasuk 1-2 revisi. Editan fotografi diselesaikan dengan gaya sinematik khas kami.' },
  'faq.q3': { en: 'Can I choose my own locations?', id: 'Bisakah saya memilih lokasi sendiri?' },
  'faq.a3': { en: 'Absolutely. We also provide location recommendations based on your aesthetic preferences and the story we want to craft together.', id: 'Tentu saja. Kami juga memberikan rekomendasi lokasi berdasarkan preferensi estetik Anda dan cerita yang ingin kami buat bersama.' },
  'faq.q4': { en: 'How long until I receive my photos/videos?', id: 'Berapa lama sampai saya menerima foto/video?' },
  'faq.a4': { en: 'Photos are typically delivered within 7-14 working days. Videos require 14-21 working days for full cinematic editing and color grading.', id: 'Foto biasanya dikirim dalam 7-14 hari kerja. Video membutuhkan 14-21 hari kerja untuk editing sinematik dan grading warna penuh.' },
  'faq.q5': { en: 'Do you travel outside Makassar?', id: 'Apakah Anda melayani di luar Makassar?' },
  'faq.a5': { en: 'Yes, we are available for destination shoots. Additional travel fees may apply depending on the location.', id: 'Ya, kami tersedia untuk pemotretan di destinasi. Biaya perjalanan tambahan mungkin berlaku tergantung lokasi.' },

  // Blog
  'blog.title': { en: 'Journal', id: 'Jurnal' },
  'blog.subtitle': { en: 'Stories, tips, and behind-the-scenes insights.', id: 'Cerita, tips, dan wawasan di balik layar.' },

  // Book
  'book.title': { en: 'Book a Call', id: 'Jadwalkan Panggilan' },
  'book.subtitle': { en: 'Let\'s discuss how we can capture your timeless moments.', id: 'Mari diskusikan bagaimana kami dapat mengabadikan momen abadi Anda.' },

  // Footer
  'footer.tagline': { en: 'Capturing timeless moments with cinematic clarity and trust.', id: 'Mengabadikan momen abadi dengan kejelasan sinematik dan kepercayaan.' },
  'footer.rights': { en: 'All rights reserved.', id: 'Hak cipta dilindungi.' },

  // CTA
  'cta.whatsapp': { en: 'Book via WhatsApp', id: 'Pesan via WhatsApp' },
  'cta.call': { en: 'Book a Call', id: 'Jadwalkan Panggilan' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('sd-lang');
    return (saved as Language) || 'id';
  });
  const [showPicker, setShowPicker] = useState(() => !localStorage.getItem('sd-lang'));

  useEffect(() => {
    localStorage.setItem('sd-lang', lang);
  }, [lang]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  const handleSelect = (selected: Language) => {
    setLang(selected);
    setShowPicker(false);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {showPicker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm">
          <div className="bg-background p-12 text-center space-y-8 max-w-md mx-4">
            <h2 className="font-display text-3xl font-light tracking-tight">Saat Dikenang</h2>
            <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">Choose your language / Pilih bahasa</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleSelect('id')}
                className="px-8 py-3 border border-foreground/20 text-foreground font-body text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Indonesia
              </button>
              <button
                onClick={() => handleSelect('en')}
                className="px-8 py-3 border border-foreground/20 text-foreground font-body text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

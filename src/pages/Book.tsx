import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import heroImg from '@/assets/hero-1.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Book = () => {
  const { t, lang } = useLanguage();

  const waMessage = lang === 'en'
    ? 'Hi Saat Dikenang! I\'d like to schedule a call to discuss your services.'
    : 'Halo Saat Dikenang! Saya ingin menjadwalkan panggilan untuk membahas layanan Anda.';
  const waUrl = `https://wa.me/6285173032882?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="pt-24">
      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('book.title')}</motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light mb-6">{t('book.subtitle')}</motion.h1>
              <motion.div variants={fadeUp} className="editorial-divider !mx-0 mb-8" />
              <motion.p variants={fadeUp} className="font-body text-sm text-muted-foreground leading-relaxed mb-12 max-w-md">
                {lang === 'en'
                  ? 'Whether you\'re planning a graduation shoot, a personal session, or a creative project — we\'re here to bring your vision to life with clarity and cinematic authority.'
                  : 'Baik Anda merencanakan pemotretan wisuda, sesi personal, atau proyek kreatif — kami di sini untuk mewujudkan visi Anda dengan kejelasan dan otoritas sinematik.'}
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-4">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="hero" size="xl" className="w-full max-w-sm gap-3">
                    <MessageCircle size={18} />
                    {t('cta.whatsapp')}
                  </Button>
                </a>
                <a href="tel:+6285173032882" className="block">
                  <Button variant="hero-outline" size="xl" className="w-full max-w-sm gap-3">
                    <Phone size={18} />
                    +62 851 7303 2882
                  </Button>
                </a>
                <a href="mailto:saatdikenang@gmail.com" className="block">
                  <Button variant="hero-outline" size="xl" className="w-full max-w-sm gap-3">
                    <Mail size={18} />
                    saatdikenang@gmail.com
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              className="hidden md:block overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src={heroImg}
                alt="Book a session"
                className="w-full aspect-[3/4] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;

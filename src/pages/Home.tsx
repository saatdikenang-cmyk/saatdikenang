import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Camera, Film, ArrowRight } from 'lucide-react';
import heroImg from '@/assets/hero-1.jpg';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Home = () => {
  const { t, lang } = useLanguage();

  const waMessage = lang === 'en'
    ? 'Hi Saat Dikenang! I\'m interested in your services. Could you share more details?'
    : 'Halo Saat Dikenang! Saya tertarik dengan layanan Anda. Bisa berbagi detail lebih lanjut?';
  const waUrl = `https://wa.me/6285173032882?text=${encodeURIComponent(waMessage)}`;

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cinematic graduation photography" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-body text-xs tracking-[0.3em] uppercase text-background/70 mb-6">
            Saat Dikenang
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-background leading-tight mb-8">
            {t('hero.tagline')}
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-sm md:text-base text-background/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">{t('hero.cta')}</Button>
            </a>
            <Link to="/portfolio">
              <Button variant="hero-outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground">
                {t('hero.cta2')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {t('services.title')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">
              {t('services.subtitle')}
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: Camera, title: t('services.photo'), desc: lang === 'en' ? 'From Gold to Platinum — every package designed to frame your story with clarity and elegance.' : 'Dari Gold hingga Platinum — setiap paket dirancang untuk membingkai cerita Anda dengan kejelasan dan keanggunan.' },
              { icon: Film, title: t('services.video'), desc: lang === 'en' ? 'Cinematic videography that transforms moments into timeless visual narratives.' : 'Videografi sinematik yang mengubah momen menjadi narasi visual abadi.' },
              { icon: Camera, title: t('services.combo'), desc: lang === 'en' ? 'The complete experience — photo and video captured in one seamless session.' : 'Pengalaman lengkap — foto dan video ditangkap dalam satu sesi yang mulus.' },
            ].map((service) => (
              <motion.div key={service.title} variants={fadeUp} className="text-center space-y-6 p-8">
                <service.icon className="mx-auto text-accent" size={32} strokeWidth={1} />
                <h3 className="font-display text-2xl font-light">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <Link to="/pricing" className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-accent hover:gap-3 transition-all">
                  {lang === 'en' ? 'View Packages' : 'Lihat Paket'} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {t('portfolio.title')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">
              {t('portfolio.subtitle')}
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[portfolio1, portfolio2, portfolio3, portfolio4].map((img, i) => (
              <motion.div key={i} variants={fadeUp} className="overflow-hidden group">
                <img
                  src={img}
                  alt={`Portfolio work ${i + 1}`}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                {lang === 'en' ? 'View Full Portfolio' : 'Lihat Portofolio Lengkap'} <ArrowRight size={14} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light mb-8">
              {lang === 'en' ? 'Ready to capture your timeless moments?' : 'Siap mengabadikan momen abadi Anda?'}
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-muted-foreground mb-12 leading-relaxed">
              {lang === 'en'
                ? 'Let\'s create something beautiful together. Reach out and let us craft your cinematic story.'
                : 'Mari ciptakan sesuatu yang indah bersama. Hubungi kami dan biarkan kami membuat cerita sinematik Anda.'}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">{t('cta.whatsapp')}</Button>
              </a>
              <Link to="/book">
                <Button variant="hero-outline" size="xl">{t('cta.call')}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;

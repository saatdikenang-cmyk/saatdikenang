import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Camera, Film, ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';
import heroImg from '@/assets/hero-1.jpg';
import logoWhite from '@/assets/logo-white.png';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const waMessage = lang === 'en'
    ? 'Hi Saat Dikenang! I\'m interested in your services. Could you share more details?'
    : 'Halo Saat Dikenang! Saya tertarik dengan layanan Anda. Bisa berbagi detail lebih lanjut?';
  const waUrl = `https://wa.me/6285173032882?text=${encodeURIComponent(waMessage)}`;



  return (
    <main className="grain-overlay">
     {/* Hero */}
<section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
  <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
    <img
      src={heroImg}
      alt="Cinematic graduation photography"
      className="w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
  </motion.div>

  <motion.div
    className="relative z-10 text-center px-6 max-w-4xl mx-auto"
    style={{ opacity: heroOpacity }}
    initial="hidden"
    animate="visible"
    variants={stagger}
  >
          {/* <motion.h1 variants={fadeUp} className="font-RelationshipOfMelodrame text-4xl md:text-6xl lg:text-7xl font-light text-background leading-[1.1] mb-8 tracking-tight">
            {t('hero.tagline')}
          </motion.h1> */}
          <motion.p variants={fadeUp} className="font-body text-sm md:text-base text-background/60 max-w-xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">{t('hero.cta')}</Button>
            </a>
            
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
            <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {t('services.title')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">
              {t('services.subtitle')}
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
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
              <motion.div key={service.title} variants={fadeUp} className="bg-background text-center space-y-6 p-12 group hover:bg-card transition-colors duration-500">
                <service.icon className="mx-auto text-accent" size={28} strokeWidth={1} />
                <h3 className="font-display text-2xl font-light">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <Link to="/pricing" className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.15em] uppercase text-accent hover:gap-3 transition-all duration-300">
                  {lang === 'en' ? 'View Packages' : 'Lihat Paket'} <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
<section className="py-32 px-6 bg-card">
  <div className="container mx-auto max-w-6xl">
    
    {/* Title */}
    <motion.div
      className="text-center mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
        {t('portfolio.title')}
      </motion.p>
      <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">
        {t('portfolio.subtitle')}
      </motion.h2>
    </motion.div>

    {/* IG FEED */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="w-full"
    >
      
      <iframe
        src="https://emb.fouita.com/widget/0x420058/ftdnfaudij"
        title="Instagram Feed"
        width="100%"
        height="600"
        className="rounded-2xl border-0"
      ></iframe>
    </motion.div>

  </div>
</section>



      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light mb-8 text-background">
              {lang === 'en' ? 'Ready to capture your timeless moments?' : 'Siap mengabadikan momen abadi Anda?'}
            </motion.h2>
            <motion.div variants={fadeUp} className="editorial-divider mb-8 bg-background/20" />
            <motion.p variants={fadeUp} className="font-body text-background/50 mb-12 leading-relaxed text-sm">
              {lang === 'en'
                ? 'Let\'s create something beautiful together. Reach out and let us craft your cinematic story.'
                : 'Mari ciptakan sesuatu yang indah bersama. Hubungi kami dan biarkan kami membuat cerita sinematik Anda.'}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">{t('cta.whatsapp')}</Button>
              </a>
              <Link to="/book">
                <Button variant="hero-outline" size="xl" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  {t('cta.call')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;

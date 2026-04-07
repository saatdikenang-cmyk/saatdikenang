import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import heroImg from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const images = [
  { src: heroImg, span: 'md:col-span-2' },
  { src: portfolio2, span: '' },
  { src: portfolio1, span: '' },
  { src: portfolio3, span: 'md:col-span-2' },
  { src: hero2, span: '' },
  { src: portfolio4, span: '' },
];

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('portfolio.title')}</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-light">{t('portfolio.subtitle')}</motion.h1>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {images.map((img, i) => (
              <motion.div key={i} variants={fadeUp} className={`overflow-hidden group ${img.span}`}>
                <img
                  src={img.src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;

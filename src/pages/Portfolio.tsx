import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
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
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const images = [
  { src: heroImg, span: 'md:col-span-2 md:row-span-2', label: 'Graduation' },
  { src: portfolio2, span: '', label: 'Portrait' },
  { src: portfolio1, span: '', label: 'Outdoor' },
  { src: portfolio3, span: 'md:col-span-2', label: 'Cinematic' },
  { src: hero2, span: '', label: 'Story' },
  { src: portfolio4, span: '', label: 'Detail' },
];

const Portfolio = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lightbox !== null) setLightbox((lightbox + 1) % images.length);
      if (e.key === 'ArrowLeft' && lightbox !== null) setLightbox((lightbox - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('portfolio.title')}</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-light">{t('portfolio.subtitle')}</motion.h1>
            <motion.div variants={fadeUp} className="editorial-divider mt-8" />
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`overflow-hidden group relative cursor-zoom-in ${img.span}`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={`Portfolio ${img.label}`}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100">
                  <span className="font-body text-[11px] tracking-[0.2em] uppercase text-background">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-background/70 hover:text-background z-10">
              <X size={24} />
            </button>
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === lightbox ? 'bg-background' : 'bg-background/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;

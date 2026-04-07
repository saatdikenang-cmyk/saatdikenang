import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const blogPosts = [
  {
    slug: 'graduation-photo-tips',
    title: { en: '5 Tips for Stunning Graduation Photos', id: '5 Tips untuk Foto Wisuda yang Menakjubkan' },
    excerpt: { en: 'Make your graduation photos timeless with these expert styling and posing tips.', id: 'Buat foto wisuda Anda abadi dengan tips gaya dan pose dari ahli ini.' },
    date: '2026-03-15',
    category: { en: 'Styling Tips', id: 'Tips Gaya' },
    image: portfolio1,
  },
  {
    slug: 'cinematic-storytelling',
    title: { en: 'The Art of Cinematic Storytelling in Photography', id: 'Seni Storytelling Sinematik dalam Fotografi' },
    excerpt: { en: 'How we use light, composition, and emotion to craft visual narratives that last forever.', id: 'Bagaimana kami menggunakan cahaya, komposisi, dan emosi untuk membuat narasi visual yang abadi.' },
    date: '2026-02-28',
    category: { en: 'Behind the Scenes', id: 'Di Balik Layar' },
    image: portfolio2,
  },
  {
    slug: 'choosing-location',
    title: { en: 'How to Choose the Perfect Location for Your Shoot', id: 'Cara Memilih Lokasi Sempurna untuk Pemotretan Anda' },
    excerpt: { en: 'Location sets the mood. Learn how to pick spots that elevate your visual story.', id: 'Lokasi menentukan suasana. Pelajari cara memilih tempat yang meningkatkan cerita visual Anda.' },
    date: '2026-02-10',
    category: { en: 'Storytelling', id: 'Bercerita' },
    image: portfolio3,
  },
];

const Blog = () => {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('blog.title')}</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">{t('blog.subtitle')}</motion.h1>
            <motion.div variants={fadeUp} className="editorial-divider mt-8" />
          </motion.div>
          <motion.div className="space-y-0 divide-y divide-border" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {blogPosts.map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="group py-12 first:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[lang]}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-body text-[11px] tracking-[0.15em] uppercase text-accent">{post.category[lang]}</span>
                      <span className="text-muted-foreground/40 text-xs">·</span>
                      <span className="text-muted-foreground text-xs">{post.date}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-light mb-4 group-hover:text-accent transition-colors duration-300">
                      {post.title[lang]}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{post.excerpt[lang]}</p>
                    <Link to="#" className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.15em] uppercase text-foreground hover:text-accent hover:gap-3 transition-all duration-300">
                      {lang === 'en' ? 'Read More' : 'Baca Selengkapnya'} <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

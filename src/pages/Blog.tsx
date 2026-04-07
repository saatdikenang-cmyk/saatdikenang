import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  },
  {
    slug: 'cinematic-storytelling',
    title: { en: 'The Art of Cinematic Storytelling in Photography', id: 'Seni Storytelling Sinematik dalam Fotografi' },
    excerpt: { en: 'How we use light, composition, and emotion to craft visual narratives that last forever.', id: 'Bagaimana kami menggunakan cahaya, komposisi, dan emosi untuk membuat narasi visual yang abadi.' },
    date: '2026-02-28',
    category: { en: 'Behind the Scenes', id: 'Di Balik Layar' },
  },
  {
    slug: 'choosing-location',
    title: { en: 'How to Choose the Perfect Location for Your Shoot', id: 'Cara Memilih Lokasi Sempurna untuk Pemotretan Anda' },
    excerpt: { en: 'Location sets the mood. Learn how to pick spots that elevate your visual story.', id: 'Lokasi menentukan suasana. Pelajari cara memilih tempat yang meningkatkan cerita visual Anda.' },
    date: '2026-02-10',
    category: { en: 'Storytelling', id: 'Bercerita' },
  },
];

const Blog = () => {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('blog.title')}</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">{t('blog.subtitle')}</motion.h1>
          </motion.div>
          <motion.div className="space-y-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {blogPosts.map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="border-b border-border pb-12 group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-body text-xs tracking-wider uppercase text-accent">{post.category[lang]}</span>
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-light mb-4 group-hover:text-accent transition-colors">
                  {post.title[lang]}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{post.excerpt[lang]}</p>
                <Link to="#" className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-foreground hover:text-accent hover:gap-3 transition-all">
                  {lang === 'en' ? 'Read More' : 'Baca Selengkapnya'} <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

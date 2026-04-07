import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Pricing = () => {
  const { t, lang } = useLanguage();

  const waMsg = (pkg: string) => {
    const msg = lang === 'en'
      ? `Hi Saat Dikenang! I'm interested in the ${pkg} package. Could you share more details?`
      : `Halo Saat Dikenang! Saya tertarik dengan paket ${pkg}. Bisa berbagi detail lebih lanjut?`;
    return `https://wa.me/6285173032882?text=${encodeURIComponent(msg)}`;
  };

  const photoPackages = [
    {
      name: 'Gold',
      features: [`20 ${t('pricing.photos')}`, `1 ${t('pricing.location')}`, `1 ${lang === 'en' ? 'hour' : 'jam'} ${t('pricing.session')}`],
      tag: lang === 'en' ? 'Budget-Friendly' : 'Hemat',
    },
    {
      name: 'Spesial',
      features: [`30 ${t('pricing.photos')}`, `1 ${t('pricing.location')}`, `1.5 ${lang === 'en' ? 'hour' : 'jam'} ${t('pricing.session')}`],
      tag: 'Standard',
    },
    {
      name: 'Platinum',
      features: [`40 ${t('pricing.photos')}`, `2 ${t('pricing.locations')}`, `2 ${lang === 'en' ? 'hour' : 'jam'} ${t('pricing.session')}`],
      tag: t('pricing.best_value'),
      best: true,
    },
  ];

  const videoPackages = [
    {
      name: 'Basic',
      features: [`1 ${t('pricing.location')}`, `1 ${t('pricing.revision')}`, `60 min ${t('pricing.session')}`, `1 min ${t('pricing.video_output')}`],
    },
    {
      name: 'Standard',
      features: [`1-2 ${t('pricing.locations')}`, `2 ${t('pricing.revisions')}`, `90 min ${t('pricing.session')}`, `1.5-2 min ${t('pricing.video_output')}`],
    },
    {
      name: 'Premium',
      features: [`2 ${t('pricing.locations')}`, `2 ${t('pricing.revisions')}`, `120 min ${t('pricing.session')}`, `2-3 min ${t('pricing.video_output')}`],
      best: true,
      tag: t('pricing.best_value'),
    },
  ];

  const comboPackage = {
    name: 'Photo + Video',
    features: [
      `2 ${t('pricing.locations')}`,
      `30 ${t('pricing.photos')}`,
      `2-2.5 min ${t('pricing.video_output')}`,
      `120 min ${t('pricing.session')}`,
      lang === 'en' ? 'Flexible split time' : 'Waktu fleksibel',
    ],
  };

  const PackageCard = ({ name, features, best, tag }: { name: string; features: string[]; best?: boolean; tag?: string }) => (
    <motion.div
      variants={fadeUp}
      className={`relative p-10 border bg-background flex flex-col transition-all duration-500 group hover:shadow-lg ${
        best ? 'border-accent shadow-[0_0_40px_-12px_hsl(var(--accent)/0.15)]' : 'border-border hover:border-foreground/20'
      }`}
    >
      {best && (
        <div className="absolute -top-px left-0 right-0 h-0.5 bg-accent" />
      )}
      {tag && (
        <span className={`inline-flex items-center gap-1.5 self-start font-body text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 mb-6 ${
          best ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'
        }`}>
          {best && <Sparkles size={10} />}
          {tag}
        </span>
      )}
      <h3 className="font-display text-3xl font-light mb-8">{name}</h3>
      <ul className="space-y-4 mb-10 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground/70">
            <Check size={14} className="text-accent mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a href={waMsg(name)} target="_blank" rel="noopener noreferrer">
        <Button variant={best ? 'hero' : 'hero-outline'} className="w-full">
          {t('pricing.book')}
        </Button>
      </a>
    </motion.div>
  );

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('pricing.title')}</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-light">{t('pricing.subtitle')}</motion.h1>
            <motion.div variants={fadeUp} className="editorial-divider mt-8" />
          </motion.div>

          {/* Photography */}
          <div className="mb-28">
            <h2 className="font-display text-2xl font-light mb-14 text-center">{lang === 'en' ? 'Photography Packages' : 'Paket Fotografi'}</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {photoPackages.map((p) => <PackageCard key={p.name} {...p} />)}
            </motion.div>
          </div>

          {/* Videography */}
          <div className="mb-28">
            <h2 className="font-display text-2xl font-light mb-14 text-center">{lang === 'en' ? 'Videography Packages' : 'Paket Videografi'}</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              {videoPackages.map((p) => <PackageCard key={p.name} {...p} />)}
            </motion.div>
          </div>

          {/* Combo */}
          <div>
            <h2 className="font-display text-2xl font-light mb-14 text-center">{lang === 'en' ? 'Complete Package' : 'Paket Lengkap'}</h2>
            <motion.div className="max-w-md mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <PackageCard {...comboPackage} best tag={lang === 'en' ? 'All-in-One' : 'Lengkap'} />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;

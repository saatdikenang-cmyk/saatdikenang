import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, MapPin, Camera, Package } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const icons = [MessageCircle, MapPin, Camera, Package];

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { num: '01', title: t('process.step1.title'), desc: t('process.step1.desc') },
    { num: '02', title: t('process.step2.title'), desc: t('process.step2.desc') },
    { num: '03', title: t('process.step3.title'), desc: t('process.step3.desc') },
    { num: '04', title: t('process.step4.title'), desc: t('process.step4.desc') },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t('process.title')}</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-light">{t('process.subtitle')}</motion.h1>
            <motion.div variants={fadeUp} className="editorial-divider mt-8" />
          </motion.div>
          <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-16">
              {steps.map((step, i) => {
                const Icon = icons[i];
                return (
                  <motion.div key={step.num} variants={fadeUp} className="flex gap-8 items-start relative">
                    {/* Timeline dot */}
                    <div className="relative z-10 shrink-0 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center bg-background border border-border">
                      <Icon size={20} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="pt-1 md:pt-3">
                      <span className="font-body text-[11px] tracking-[0.2em] uppercase text-accent mb-2 block">{step.num}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-light mb-3">{step.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Process;

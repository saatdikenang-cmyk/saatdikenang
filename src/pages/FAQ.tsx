import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">FAQ</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light">{t('faq.title')}</motion.h1>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <AccordionItem value={`faq-${i}`} className="border border-border px-6">
                    <AccordionTrigger className="font-display text-lg font-light hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;

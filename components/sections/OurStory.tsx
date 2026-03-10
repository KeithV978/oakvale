'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function OurStory() {
  const { ref, isInView } = useScrollAnimation();

  const paragraphs = [
    'Health systems across the Global South face a compounding challenge: rising disease burden, post-Covid workforce strain, and a persistent knowledge gap between what international best practice recommends and what local practitioners are equipped to deliver.',
    'Oakvale Learning exists to close that gap — not by importing Western solutions unchanged, but by developing learning that is globally grounded and locally designed. We believe that the developing world has to know better to do better, and that genuine transformation begins with high-quality, culturally attuned learning.',
    'We work with health implementers, government agencies, universities and development funders to design programmes that strengthen institutions, build careers and create the systemic change that lasts.',
  ];

  const quotes = [
    {
      text: 'The developing world is now in a place where we\'ve got to do our own learning and introspection to get ourselves out of where we are.',
      featured: true,
    },
    {
      text: 'Learning can transform lives. The knowledge economy can change life for the better. We create our own opportunities with the knowledge we have.',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section bg-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-16">Why we exist</h2>

          {/* Body Paragraphs */}
          <motion.div className="space-y-8 mb-16" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {paragraphs.map((para, idx) => (
              <motion.p key={idx} variants={itemVariants} className="text-lg text-navy-900 leading-relaxed">
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Quotes */}
          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {quotes.map((quote, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${
                  quote.featured
                    ? 'bg-health-primary/5 border-l-4 border-health-primary p-8 rounded-lg'
                    : 'bg-gray-50 p-8 rounded-lg border-l-4 border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <Quote className={`flex-shrink-0 ${quote.featured ? 'text-health-primary' : 'text-gray-400'}`} size={24} />
                  <p className={`text-xl leading-relaxed font-semibold ${quote.featured ? 'text-navy-900' : 'text-navy-900/80'}`}>
                    &quot;{quote.text}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

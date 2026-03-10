'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Rocket, Link2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhyOakvale() {
  const { ref, isInView } = useScrollAnimation();

  const differentiators = [
    {
      number: '01',
      title: 'Evidence-based, context-designed',
      description: 'Our programmes are grounded in global evidence but designed for the realities of delivery in Africa.',
      icon: CheckCircle,
    },
    {
      number: '02',
      title: 'Learning connected to earning',
      description:
        'We embed employability skills and micro-enterprise pathways into our learning solutions because meaningful economic change is what lasting community impact looks like.',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Pilot-ready and scale-up capable',
      description: 'Whether a tight 50-person pilot or a national rollout, we design programmes that can prove their value quickly and grow with your ambition.',
      icon: Rocket,
    },
    {
      number: '04',
      title: 'Long-term partnership orientation',
      description:
        "We're not a one-off training vendor. Our best work happens through sustained partnerships built on shared commitment to systemic change that lasts.",
      icon: Link2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-4">Why Oakvale Learning</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Globally relevant. Locally grounded.</h2>

            <div className="mb-12 p-6 bg-health-primary/5 border-l-4 border-health-primary rounded">
              <p className="text-lg font-semibold text-navy-900 mb-4">{`"High-quality, globally relevant health and care learning — tailored for local success."`}</p>
              <p className="text-navy-900 leading-relaxed">
                The best capacity building models are not imported from the West and delivered unchanged. Sustainable capacity building translates global best practice into locally meaningful, practically applicable learning. That is what we do.
              </p>
            </div>
          </div>

          {/* Differentiators */}
          <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-health-primary/10 mb-4"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <Icon className="text-health-primary" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{diff.title}</h3>
                  <p className="text-navy-900 leading-relaxed">{diff.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

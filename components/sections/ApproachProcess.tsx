'use client';

import { motion } from 'framer-motion';
import { Search, Pencil, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ApproachProcess() {
  const { ref, isInView } = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'Needs Analysis',
      description: 'We invest time understanding your institutional context, workforce gaps and programme objectives before designing anything.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Programme Design',
      description: 'Evidence-based curriculum and training architecture, co-developed with your team and calibrated to your local context.',
      icon: Pencil,
    },
    {
      number: '03',
      title: 'Delivery & Support',
      description: 'Facilitation, trainer development, digital content and ongoing implementation support for your teams.',
      icon: Zap,
    },
    {
      number: '04',
      title: 'Impact & Scale',
      description: 'Monitoring frameworks, outcome reporting and scale-up pathway development to demonstrate value and inform the next phase.',
      icon: BarChart3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-16">How we move from conversation to impact</h2>

          {/* Steps */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="group">
                  <div className="flex items-start gap-8">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-lg bg-health-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      <Icon className="text-health-primary" size={28} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pb-8 border-b border-gray-200 last:border-b-0">
                      <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-health-primary transition-colors">{step.title}</h3>
                      <p className="text-navy-900 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="self-start pt-2 text-health-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight size={24} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

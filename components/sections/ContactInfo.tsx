'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactInfo() {
  const { ref, isInView } = useScrollAnimation();

  const interests = [
    'CHW training programmes with potential for state or national scale',
    'Workforce training programmes with youth / female empowerment components',
    'University curriculum co-development in interdisciplinary fields',
    'Technology-enabled scale-up of existing training programmes',
    'Proposal partnerships with NGOs and development foundations',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
          {/* Intro Section */}
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-navy-900 leading-relaxed mb-8">
              {`We're best placed to support organisations working on health workforce development in Africa — particularly where there is intent to build something that lasts rather than deliver a one-off training event. We welcome enquiries at any stage, including early-stage programme scoping and proposal co-development.`}
            </p>

            {/* Interests Section */}
            <div>
              <h3 className="text-2xl font-bold text-health-primary mb-8 uppercase tracking-wide text-sm">{`We're Particularly Interested In`}</h3>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {interests.map((interest, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      <CheckCircle className="text-health-primary" size={24} />
                    </motion.div>
                    <p className="text-navy-900 pt-0.5 leading-relaxed">{interest}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

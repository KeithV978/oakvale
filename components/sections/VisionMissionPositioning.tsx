'use client';

import { motion } from 'framer-motion';
import { Target, Compass, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VisionMissionPositioning() {
  const { ref, isInView } = useScrollAnimation();

  const sections = [
    {
      icon: Compass,
      title: 'Our Purpose',
      subtitle: 'Changing lives through learning and self-discovery.',
      description:
        'The fundamental reason we exist — and what motivates every programme we design and every partnership we build.',
      color: 'from-health-primary/10 to-health-primary/5',
    },
    {
      icon: Target,
      title: 'Our Mission',
      subtitle:
        'Our mission is to provide evidence-based learning that builds skills, raises standards and creates career pathways across the Global South.',
      description:
        'By applying knowledge to real-world challenges, we develop healthcare talent to strengthen systems and improve lives over the long term.',
      color: 'from-health-secondary/10 to-health-secondary/5',
    },
    {
      icon: Award,
      title: 'Our Positioning',
      subtitle: 'High-quality, globally relevant health and care learning — tailored for local success.',
      description: 'Culturally attuned. Evidence-based. Designed to translate knowledge into opportunity.',
      color: 'from-blue-100/20 to-blue-50/20',
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
    <section ref={ref} className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center">Vision, Mission & Positioning</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <div className={`bg-gradient-to-br ${section.color} p-8 rounded-lg h-full border border-gray-200`}>
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-health-primary/20 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      <Icon className="text-health-primary" size={24} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{section.title}</h3>
                    <p className="text-lg font-semibold text-health-primary mb-4 leading-relaxed">{section.subtitle}</p>
                    <p className="text-navy-900 leading-relaxed">{section.description}</p>
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

'use client';

import { motion } from 'framer-motion';
import { Users, Book, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesOverview() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      number: '01',
      title: 'Workforce Development',
      description: 'Structured, scalable programmes across all cadres — health, social care and the informal sector. Learning connected to earning, with employability skills and micro-enterprise pathways built in.',
      tags: ['All Cadres', 'Learn & Earn', 'Youth & Female', 'Micro-Enterprise'],
      icon: Users,
    },
    {
      number: '02',
      title: 'Institutional Systems Strengthening',
      description:
        'Co-creating cutting-edge academic programmes for universities and continuous professional development (CPD) programs for corporates. Culturally attuned, best-practice knowledge brought to African realities through contextual case studies and applied learning.',
      tags: ['Institutions', 'CPD', 'Case Studies', 'Co-Design'],
      icon: Book,
    },
    {
      number: '03',
      title: 'Technology-Enabled Learning',
      description:
        'Digital learning infrastructure and e-learning content that extends reach, improves consistency and enables data-driven improvement, built for the bandwidth and device realities of our delivery contexts.',
      tags: ['E-Learning', 'LMS', 'Digital Content', 'Scale'],
      icon: Zap,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          {/* Section Header */}
          <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Three areas of institutional impact</h2>
          <p className="text-lg text-navy-900 mb-16 max-w-3xl leading-relaxed">
            From frontline workforce development to technology-enabled learning platforms, our programmes create lasting systemic change, not just short-term skills transfer.
          </p>

          {/* Services Grid */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-lg bg-health-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      <Icon className="text-health-primary" size={28} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-navy-900 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-health-primary/10 text-health-primary text-sm font-semibold rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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

'use client';

import { motion } from 'framer-motion';
import { Heart, Building2, BookOpen, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhoWeWorkWith() {
  const { ref, isInView } = useScrollAnimation();

  const audiences = [
    {
      title: 'NGOs & Health Programme Implementers',
      description: 'Organisations delivering community interventions who need training infrastructure that supports skills acquisition programmes, youth empowerment schemes and community-based micro-enterprise projects.',
      keyNeed: 'Training design, content development & deployment support',
      icon: Heart,
    },
    {
      title: 'Government Ministries & Agencies',
      description:
        'Health ministries and government agencies requiring large-scale workforce development solutions — from national training rollouts to job creation programmes and female/youth empowerment initiatives.',
      keyNeed: 'Scalable solutions, ROI evidence & policy alignment',
      icon: Building2,
    },
    {
      title: 'Universities & Academic Institutions',
      description:
        'Medical and health sciences faculties seeking curriculum co-development partnerships contextual, case study-led programmes that bring global best practice to African realities.',
      keyNeed: 'Curriculum co-design & long-term academic partnerships',
      icon: BookOpen,
    },
    {
      title: 'International Funders & Foundations',
      description:
        'Development foundations and health funders seeking credible implementing partners for workforce development, youth employment and systems-strengthening components of grant-funded programmes.',
      keyNeed: 'Proposal partnerships, delivery credibility & impact reporting',
      icon: TrendingUp,
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
          {/* Section Header */}
          <p className="text-sm font-semibold uppercase tracking-widest text-health-primary mb-4">Who we work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Partners across the health ecosystem</h2>
          <p className="text-lg text-navy-900 mb-16 max-w-3xl leading-relaxed">
            We work with organisations that are serious about building capacity at scale - from programme implementers to ministries, academic institutions and development funders.
          </p>

          {/* Audiences Grid */}
          <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 hover:border-health-primary/30 transition-all group">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-health-primary/10 mb-4"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <Icon className="text-health-primary" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{audience.title}</h3>
                  <p className="text-navy-900 leading-relaxed mb-6">{audience.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-health-primary mb-2">KEY NEED</p>
                    <p className="text-navy-900 font-semibold">{audience.keyNeed}</p>
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

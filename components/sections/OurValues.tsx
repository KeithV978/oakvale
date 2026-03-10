'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Award, Handshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function OurValues() {
  const { ref, isInView } = useScrollAnimation();

  const values = [
    {
      title: 'Proactive',
      description: 'We take initiative and make change happen. We don\'t wait for perfect conditions. We act and iterate.',
      icon: Zap,
    },
    {
      title: 'Solutions-Focused',
      description: 'We solve problems and don\'t give up. When barriers appear - institutional, logistical or financial, we find a way through.',
      icon: Target,
    },
    {
      title: 'Excellence',
      description:
        'We hold ourselves to the highest standards in programme design, delivery and partnership. Quality is non-negotiable at any scale.',
      icon: Award,
    },
    {
      title: 'Commitment',
      description:
        'We care about systemic change that lasts. We measure our success by whether the systems we work with are stronger because of it.',
      icon: Handshake,
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="relative section bg-white bg-cover bg-center" style={{ backgroundImage: `url('/freepik__create-an-image-of-a-healthcare-black-professional__85815.png')`}}>
          <div className="absolute inset-0 bg-white/65 z-0" />
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 text-center">The principles that guide our work</h2>
          <p className="text-center text-lg text-navy-900 mb-16 max-w-2xl mx-auto">Our values define who we are and how we approach every partnership, programme and proposal.</p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 bg-health-primary/10 rounded-full mb-4 mx-auto block"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <Icon className="text-health-primary" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-health-primary mb-3 text-center">{value.title}</h3>
                  <p className="text-navy-900 text-sm leading-relaxed text-center">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

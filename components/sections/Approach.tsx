'use client';

import { motion } from 'framer-motion';
import { Zap, Search, Pencil, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Approach() {
  const { ref, isInView } = useScrollAnimation();
  
const values = [
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
      icon: BarChart3
      ,
    },
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <section ref={ref} className="relative section bg-gradient-to-br from-gray-50 to-white bg-center bg-cover" style={{ backgroundImage: `url('/freepik__create-an-image-of-a-healthcare-black-professional__85816.png')` }}>
     
      <div className="absolute inset-0 bg-white/65 z-0" />
     
      <div className="section-inner z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header text-center mb-4">
           How we move from conversation to impact
          </h2>

          <p className="text-center text-lg text-navy-900 mb-12 max-w-2xl mx-auto">
            {`We don't just deliver content; we build resilient healthcare organisations. Our approach is
            rooted in four core values:`}
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:translate-y--2 text-center group"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 bg-health-primary/10 rounded-full mb-4 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <Icon className="text-health-primary" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-health-primary mb-3">{value.title}</h3>
                  <p className="text-navy-900 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

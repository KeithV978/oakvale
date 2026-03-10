'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactHero() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-health-primary to-health-primary/90 text-white"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        animate={{ x: isInView ? 0 : 100, y: isInView ? 0 : -100 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 section-inner text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto"
          >
            Start a conversation
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95"
          >
           {` We work with a focused number of institutional partners at any one time. If your project aligns with our areas of expertise, we'd like to hear from you.`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

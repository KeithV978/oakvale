'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="section bg-gradient-to-br from-health-primary to-health-primary/95 text-white relative overflow-hidden">
      {/* Animated background accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
        animate={{ x: isInView ? 0 : 100, y: isInView ? 0 : -100 }}
        transition={{ duration: 0.8 }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <MessageSquare size={32} />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Not sure which service fits your need?
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl mb-12 leading-relaxed opacity-95"
          >
           {` Many of our best partnerships start with a conversation rather than a brief. Tell us what you're working on and we'll help you think through the right approach.`}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <AnimatedButton
              href="/contact"
              variant="secondary"
              icon={ArrowRight}
              iconPosition="right"
              className="border-white bg-white text-health-primary"
            >
              Start a conversation
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTAStrip() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section bg-health-primary text-white relative overflow-hidden"
    >
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
          className="text-center max-w-3xl mx-auto"
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-start gap-4 mb-6"
          >
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center pt-1"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Zap className="text-white" size={24} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to build something that lasts?
            </h2>
          </motion.div>

          {/* Body Copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 leading-relaxed opacity-95"
          >
           {` Whether you're scoping a pilot project, developing a proposal or looking to build a long-term learning partnership — we'd like to hear from you.`}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <AnimatedButton
              href="/contact"
              variant="secondary"
              icon={ArrowRight}
              iconPosition="right"
              className="border-white bg-white text-health-primary"
            >
              Get in touch
            </AnimatedButton>
            <AnimatedButton
              href="/solutions"
              variant="secondary"
              icon={ArrowRight}
              iconPosition="right"
              className="border-white text-white hover:bg-white hover:text-health-primary"
            >
              View our services
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

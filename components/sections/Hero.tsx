'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import backgroundImage from '@/public/main-hero.jpg';

export default function Hero() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-start py-20  overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/50 z-0" />
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl z-10"
        animate={{ x: isInView ? 0 : 100, y: isInView ? 0 : -100 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-20 section-inner bg-black/30 backdrop-blur-md rounded-lg p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left"
        >
          {/* Hero Text - "Sage Statement" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <img src="/oakvale-white.svg" alt="Oakvale Logo" className="h-10 w-auto mb-4" />
            <p className="text-2xl md:text-3xl font-semibold text-health-primary mb-2">
              Learning solutions that build{' '}
              <span className="block md:inline">
                resilient organisations, strengthen health economies, and transform frontline teams
              </span>
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl md:text-6xl font-bold text-white"
          >
            High-quality, globally relevant health and social care learning tailored for local success.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white mb-12 max-w-3xl leading-relaxed"
          >
            We partner with governments, NGOs, and healthcare providers across the Global South to
            provide evidence-based learning that builds skills, raises standards, and creates lasting
            systemic change.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/partnership" className="btn-primary bg-white text-health-primary hover:bg-health-primary hover:text-white rounded-full">
              Discuss a Partnership
            </Link>
            <Link href="/solutions" className="btn-secondary bg-health-primary hover:bg-health-primary/90 text-white rounded-full">
              Explore Our Solutions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedButton from '@/components/AnimatedButton';
import backgroundImage from '@/public/main-hero.jpg';

const cyclingWords = ['needs.', 'deserves.', 'is ready for.'];

const CyclingText = ({ isInView }: { isInView: boolean }) => {
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.span
      key={wordIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="inline-block text-health-primary"
    >
      {cyclingWords[wordIndex]}
    </motion.span>
  );
};

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
      <div className="absolute inset-0 bg-white/65 z-0" />
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-health-primary opacity-5 rounded-full blur-3xl z-20"
        animate={{ x: isInView ? 0 : 100, y: isInView ? 0 : -100 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-20 section-inner bg-black/40 backdrop-blur-lg rounded-lg p-8 md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left"
        > 

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="tracking-widest text-sm md:text-base font-semibold uppercase tracking-wide text-health-primary">
              Workforce Development <span className="text-slate-300">|</span> Global South
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-6 tracking-wide xl md:text-7xl font-bold text-slate-100 leading-tight"
          >
            Building the <br/>  health systems <br/> Africa <CyclingText isInView={isInView} />
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl leading-relaxed"
          >
            Evidence-based workforce development programmes for health and academic institutions, governments, donor agencies, implementing partners and the communities they serve.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <AnimatedButton href="/partnership" variant="primary" icon={Sparkles} iconPosition="left">
             Explore our services
            </AnimatedButton>
            <AnimatedButton href="/solutions" variant="secondary" className="bg-white border-none hover:text-health-primary" icon={ArrowRight} iconPosition="right">
              Start a conversation
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

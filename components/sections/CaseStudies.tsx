'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CaseStudies() {
  const { ref, isInView } = useScrollAnimation();

  const logos = [
    { name: 'EKOUnimed', url: '/ekounimed.png' },
    { name: 'UNILAG', url: '/UNILAG-LOGO.png' },
    { name: 'Healthy Entrepreneurs Nigeria', url: '/healthy-entrepreneurs-nigeria.png' },
    { name: 'Advantage Health Africa', url: '/advantage-health-africa.png' },
  ];

  const caseStudies = [
    {
      title: 'Empowering Community Health Workers',
      excerpt:
        'Discover how our tailored curriculum and digital delivery model successfully upskilled a pilot cohort of 50 community health workers with Healthy Entrepreneurs Nigeria, paving the way for scalable state-wide health access.',
      image: 'https://unsplash.com/photos/african-american-women-checking-boxes-of-pills-client-looking-to-buy-vitamins-and-supplements-in-pharmacy-pharmacist-and-clients-asking-about-prescription-medicine-pharmaceutics-O38-A4tQjm4',
    },
    {
      title: 'Advancing Clinical Leadership',
      excerpt:
        'Learn about our strategic curriculum partnerships with leading Nigerian universities to bridge the gap between medical academics and practical healthcare management.',
      image: 'https://via.placeholder.com/400x250?text=Clinical+Leadership',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
          <h2 className="section-header text-center mb-12">
            Trusted by Leaders in Healthcare and Development
          </h2>

          {/* Logo Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 pb-12 border-b border-gray-200"
          >
            <p className="text-center text-sm font-semibold text-navy-900 mb-8 uppercase tracking-wide">
              Our Partners
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-16 w-full flex items-center justify-center"
                >
                  <div className="h-14 w-30">
                    <img src={logo.url} alt={logo.name} className="h-full w-full object-contain" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div style={{ backgroundImage: `url(${study.image})` }} className="h-full w-full object-cover">
                    {/* <span className="text-gray-500 text-sm">Placeholder Image</span> */}
                  </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-health-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-navy-900 leading-relaxed">{study.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 btn-primary bg-health-secondary hover:gap-3 transition-all">
              Read Our Case Studies
              <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

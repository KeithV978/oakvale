'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import logo from '@/public/oakvale-white.svg';
// import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Partner', href: '/partnership' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-health-primary backdrop-blur-lg shadow-lg'
          : 'bg-transparent shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-health-primary to-teal-600 bg-clip-text text-transparent"
            >
             <img src={logo.src} alt="Oakvale Logo" className="h-8 w-auto" />
            </motion.div> 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-navy-900 font-medium hover:text-health-primary transition-colors duration-300 relative group ${
        isScrolled
          ? 'text-white hover:text-white'
          : 'text-navy-900 hover:text-health-primary'
      }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-health-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/partnership" className={`btn-primary text-sm py-2 px-6 ${
        isScrolled
          ? 'bg-health-secondary hover:bg-health-secondary/90 text-white'
          : 'bg-health-primary'
      }`}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-navy-900 block transition-colors"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-navy-900 block transition-colors"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-navy-900 block transition-colors"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
        >
          <div className="flex flex-col gap-4 py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-navy-900 font-medium hover:text-health-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partnership"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center text-sm py-3"
            >
              Get Started
            </Link>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'underline' | 'pill';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  variant = 'default',
  icon: Icon,
  iconPosition = 'left',
}: AnimatedLinkProps) {
  const baseClasses = 'relative inline-flex items-center gap-2 transition-colors duration-300';

  const variants = {
    default: 'text-health-primary hover:text-health-secondary',
    underline: 'text-health-primary group',
    pill: 'px-4 py-2 rounded-full bg-health-primary/10 text-health-primary hover:bg-health-primary/20',
  };

  const linkContent = (
    <motion.span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {variant === 'underline' && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-health-primary to-health-secondary"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      )}

      <motion.div
        className="flex items-center gap-2"
      >
        {Icon && iconPosition === 'left' && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Icon size={18} />
          </motion.div>
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <motion.div
            whileHover={{ scale: 1.2, x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Icon size={18} />
          </motion.div>
        )}
      
        {children}
      </motion.div>

      {variant === 'underline' && (
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      )}
    </motion.span>
  );

  return (
    <Link href={href}>
      {linkContent}
    </Link>
  );
}

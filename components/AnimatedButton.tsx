'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export default function AnimatedButton({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
}: AnimatedButtonProps) {
  const baseClasses = 'inline-block px-8 py-3 font-semibold rounded-full cursor-pointer relative overflow-hidden group';

  const variantClasses = {
    primary: 'bg-health-primary text-white',
    secondary: 'border-2 border-health-primary text-health-primary',
  };

  const buttonContent = (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {/* Shimmer background effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          variant === 'primary'
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
            : 'bg-gradient-to-r from-transparent via-health-primary/20 to-transparent'
        }`}
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />

      {/* Glow effect for primary button */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-full bg-health-primary opacity-0"
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Text content */}
      <motion.span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Icon size={20} />
          </motion.div>
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <motion.div
            whileHover={{ scale: 1.2, x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Icon size={20} />
          </motion.div>
        )}
      </motion.span>

      {/* Hover underline for secondary button */}
      {variant === 'secondary' && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-health-primary"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return buttonContent;
}

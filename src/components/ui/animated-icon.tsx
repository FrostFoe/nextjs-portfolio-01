'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedMaterialIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  iconName: string;
}

export const AnimatedMaterialIcon = ({ iconName, className, ...props }: AnimatedMaterialIconProps) => (
  <motion.span
    className={cn("material-symbols-outlined", className)}
    whileHover={{ scale: 1.2, y: -2, rotate: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    {...props}
  >
    {iconName}
  </motion.span>
);

interface AnimatedIconWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const AnimatedIconWrapper = ({ children, className }: AnimatedIconWrapperProps) => (
    <motion.div
        className={className}
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        {children}
    </motion.div>
);

"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMaterialIconProps extends HTMLMotionProps<"span"> {
  iconName: string;
}

export const AnimatedMaterialIcon = ({
  iconName,
  className,
  ...props
}: AnimatedMaterialIconProps) => (
  <motion.span
    className={cn("material-symbols-outlined", className)}
    whileHover={{ scale: 1.2, y: -2, rotate: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    {...props}
  >
    {iconName}
  </motion.span>
);

interface AnimatedIconWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const AnimatedIconWrapper = ({
  children,
  className,
  ...props
}: AnimatedIconWrapperProps) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    {...props}
  >
    {children}
  </motion.div>
);

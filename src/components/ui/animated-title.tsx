"use client";
import { motion } from "framer-motion";

export function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1 + index * 0.05,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          className="inline-block mr-[0.25em] text-foreground"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

const TAGS = {
  div: motion.div,
  li: motion.li,
  figure: motion.figure,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: keyof typeof TAGS;
};

/** Fade-and-rise on scroll into view. Honors prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = TAGS[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

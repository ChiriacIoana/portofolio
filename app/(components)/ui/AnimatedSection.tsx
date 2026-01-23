"use client";

import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variants: Variants;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
};

export function AnimatedSection({
  children,
  className,
  variants,
  viewport = { once: false, amount: 0.3 },
}: Props) {
  return (
    <motion.section
      className={clsx(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.section>
  );
}

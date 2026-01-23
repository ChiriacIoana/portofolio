"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedIconLink({
  href,
  children,
  className,
  delay = 0.5,
}: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "text-gray-400 hover:text-white transition-colors",
        className
      )}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      {children}
    </motion.a>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variants: Variants;
};

export function RevealText({ children, className, variants }: Props) {
  return (
    <motion.div className={clsx(className)} variants={variants}>
      {children}
    </motion.div>
  );
}

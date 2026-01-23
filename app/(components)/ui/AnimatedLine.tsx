"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  className?: string;
  orientation?: "vertical" | "horizontal";
  delay?: number;
  duration?: number;
};

export function AnimatedLine({
  className,
  orientation = "vertical",
  delay = 0,
  duration = 1,
}: Props) {
  const isVertical = orientation === "vertical";

  return (
    <motion.div
      className={clsx(className)}
      initial={isVertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={isVertical ? { scaleY: 1 } : { scaleX: 1 }}
      transition={{ delay, duration, ease: "easeInOut" }}
      style={{
        transformOrigin: isVertical ? "top" : "left",
      }}
    />
  );
}

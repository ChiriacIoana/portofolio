"use client";

import { motion } from "framer-motion";

export function AnimatedLine({
  orientation = "vertical",
  className = "",
  delay = 0,
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={
        orientation === "vertical"
          ? { scaleY: 0 }
          : { scaleX: 0 }
      }
      whileInView={
        orientation === "vertical"
          ? { scaleY: 1 }
          : { scaleX: 1 }
      }
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      style={{
        transformOrigin:
          orientation === "vertical" ? "top" : "left",
      }}
    />
  );
}

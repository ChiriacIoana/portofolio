"use client";

import { motion } from "framer-motion";

type TreeNodeProps = {
  label: string;
  level: number; // 1–5
};

export function TreeNode({ label, level }: TreeNodeProps) {
  return (
    <motion.div
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
     
      <span className="text-sm font-mono text-gray-300 w-28 group-hover:text-white transition-colors">
        {label}
      </span>

      
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i < level
                ? "bg-white group-hover:bg-gray-200"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

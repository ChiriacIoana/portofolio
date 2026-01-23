"use client";

import { AnimatedLine } from "./AnimatedLine";
import { TreeNode } from "./TreeNode";

export function TreeBranch({
  title,
  skills,
  delay = 0,
}: {
  title: string;
  skills: { label: string; level: number }[];
  delay?: number;
}) {
  return (
    <div className="relative pl-10 py-10">
      <AnimatedLine
        orientation="horizontal"
        className="absolute top-12 left-[-20px] h-px w-10 bg-gray-700"
        delay={delay}
      />

      <div
        className="font-mono text-sm text-gray-400 mb-4"
        style={{ animationDelay: `${delay + 0.2}s` }}
      >
        {title}
      </div>

      <div className="space-y-3">
        {skills.map((skill, i) => (
          <TreeNode key={skill.label} label={skill.label} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

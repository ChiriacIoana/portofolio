"use client";

import { AnimatedLine } from "./AnimatedLine";
import { TreeBranch } from "./TreeBranch";

export function SkillTree() {
  return (
    <div className="relative pl-10 py-16">
      
      <AnimatedLine
        className="absolute left-2 top-0 w-px h-full bg-gray-700"
        delay={0}
      />

      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-16">
        <TreeBranch
          title="Frontend"
          delay={0.3}
          skills={[
            { label: "React", level: 4 },
            { label: "Next.js", level: 3 },
            { label: "Tailwind", level: 4 },
          ]}
        />

        <TreeBranch
          title="Backend"
          delay={0.5}
          skills={[
            { label: "NestJS", level: 2 },
            { label: "Express", level: 1 },
          ]}
        />

        <TreeBranch
          title="Languages"
          delay={0.7}
          skills={[
            { label: "JavaScript", level: 4 },
            { label: "TypeScript", level: 3 },
            { label: "C / C++", level: 5 },
            { label: "Python", level: 2 },
          ]}
        />

        <TreeBranch
          title="Embedded"
          delay={0.9}
          skills={[
            { label: "Arduino", level: 3 },
            { label: "ESP32", level: 3 },
            { label: "REV Control Hub", level: 5 },
          ]}
        />
      </div>
    </div>
  );
}

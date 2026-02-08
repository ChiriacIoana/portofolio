"use client";

import { ArrowUpRight } from "lucide-react";

type ExperienceItemProps = {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  href?: string;
};

export function ExperienceItem({
  period,
  role,
  company,
  description,
  skills,
  href,
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-8 py-8">
      
      <span className="text-sm font-mono text-gray-500 tracking-wide">
        {period}
      </span>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          {role} · {company}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </h3>

        <p className="text-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full
                         bg-white/5 text-teal-300
                         hover:bg-white/10 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
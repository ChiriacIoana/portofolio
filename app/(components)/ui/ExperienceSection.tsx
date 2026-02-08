"use client";

import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  return (
    <section className="py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">
        Experience
      </h2>

      <div className="divide-y divide-white/5">
        <ExperienceItem
          period="2024 — Present"
          role="Programmer & Team leader"
          company="KronBOT"
          description="Programming robots for the FIRST Tech Challenge, leading a team of over 20 students. Developed software architecture, implemented features, and mentored teammates in robotics and programming."
          skills={["Java", "Embedded Systems", "Team Leadership", "Robotics"]}
        />

        <ExperienceItem
          period="2023 — Present"
          role="Embedded Systems"
          company="Infotron"
          description="Developed practical projects using Arduino UNO and ESP32 microcontrollers, gaining hands-on experience in embedded systems and hardware–software integration."
          skills={["Arduino", "C++", "Electronics", "ESP32"]}
        />

         <ExperienceItem
          period="2024 — Present"
          role="Web Development"
          company="Coder Dojo & Personal Projects"
          description="Developed practical projects using modern web technologies, focusing on building responsive and interactive web applications."
          skills={["React", "Next.js", "Tailwind CSS", "NestJS", "TypeScript"]}
        />
      </div>
    </section>
  );
}
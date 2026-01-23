"use client";

import { SkillTree } from "@/app/(components)/ui/SkillTree";
import { Github, Instagram, Mail } from "lucide-react";
import { AnimatedSection } from "@/app/(components)/ui/AnimatedSection";
import { AnimatedLine } from "@/app/(components)/ui/AnimatedLine";
import { AnimatedIconLink } from "@/app/(components)/ui/AnimatedIconLink";
import { slideReveal } from "@/app/lib/animations";
import { ScrollAnimatedCard } from "@/app/(components)/ui/pop-up-scrollable";

function HomePage() {
  return (
    <div className="bg-[#131316] text-white font-roboto">
      <AnimatedSection
        className="py-20 flex items-center"
        variants={slideReveal(-100, 1)}
      >
        <span className="text-sm text-gray-500 font-mono absolute left-0 ml-12">
          01
        </span>

        <div className="max-w-xl ml-30 space-y-4">
          <p className="text-sm text-gray-400 font-mono">hi, my name is</p>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Ioana Chiriac
          </h1>

          <h2 className="text-2xl text-gray-400 font-mono">
            I like to build stuff and things for the web.
          </h2>

          <p className="text-sm text-gray-400 font-mono">
            I am a high-school student passionate about web development and
            embedded systems.
          </p>
        </div>
      </AnimatedSection>

      <div className="relative">
        <AnimatedLine className="w-px h-80 bg-gray-700 ml-30" delay={0} />

        <AnimatedLine
          orientation="horizontal"
          className="absolute top-17 left-30 h-px w-25 bg-gray-700"
          delay={0.3}
        />

        <AnimatedIconLink
          href="https://github.com/ChiriacIoana"
          className="absolute top-16 px-30 translate-x-1/2"
          delay={0.5}
        >
          <Github size={20} />
        </AnimatedIconLink>

        <AnimatedLine
          orientation="horizontal"
          className="absolute top-38 left-30 h-px w-25 bg-gray-700"
          delay={0.4}
        />

        <AnimatedIconLink
          href="https://www.instagram.com/ioana.chr9"
          className="absolute top-36 px-30 translate-x-1/2"
          delay={0.7}
        >
          <Instagram size={20} />
        </AnimatedIconLink>

        <AnimatedLine
          orientation="horizontal"
          className="absolute top-59 left-30 h-px w-25 bg-gray-700"
          delay={0.5}
        />

        <AnimatedIconLink
          href="mailto:ioana.chiriac@email.com"
          className="absolute top-56 px-30 translate-x-1/2"
          delay={0.9}
        >
          <Mail size={20} />
        </AnimatedIconLink>
      </div>

      <AnimatedSection
        className="py-20 flex items-start"
        variants={slideReveal(-100, 1)}
      >
        <span className="text-sm text-gray-500 font-mono absolute py-20 left-0 ml-12">
          02
        </span>

        <div className="max-w-xl ml-30 space-y-10">
          <h2 className="text-3xl font-bold">what i do</h2>
          <SkillTree />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default HomePage;

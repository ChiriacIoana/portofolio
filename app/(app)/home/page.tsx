"use client";

import { motion, easeOut, Variants } from "framer-motion";
import { ScrollAnimatedCard } from "@/app/(components)/ui/pop-up-scrollable";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(5px)",
    x: -100,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 18,
      ease: easeOut,
    },
  },
};

function HomePage() {
  const sectionNr="<01/>"
  return (
    <div className="bg-[#131316] text-white font-roboto">
      <div className="">
        <motion.section
          className="min-h-screen flex items-center"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.span
            className="text-sm text-gray-500 font-mono absolute left-0 ml-12 top-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {sectionNr}
          </motion.span>
          <div className="max-w-xl ml-30 text-left space-y-4">
            <p className="text-sm text-gray-400 font-mono tracking-wider">
              hi, my name is
            </p>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-5xl font-bold font-inter leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Ioana Chiriac
              </h1>
              <h2 className="text-2xl md:text-2xl text-gray-400 font-mono">
                I like to build things for the web.
              </h2>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed max-w-lg text-base">
              I am a high-school student passionate about web development and
              embedded systems. I enjoy creating -type a lot of text here
              blablablablabla
            </p>
          </div>
        </motion.section>
      </div>

      <motion.section
        className="min-h-screen flex items-center"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-xl ml-30 text-left">
          <h2 className="text-3xl font-bold">hire me pls</h2>
          <p className="mt-2">please hire me</p>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="min-h-screen grid place-items-center"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-center">
          <p className="mb-8 text-xl">google hire me</p>

          <div className="flex flex-wrap justify-center gap-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{
                  duration: 1,
                  ease: easeOut,
                  delay: i * 0.2,
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="w-[200px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Scroll card */}
      <div
        style={{
          margin: "100px auto",
          maxWidth: 500,
          paddingBottom: 100,
        }}
      >
        <ScrollAnimatedCard
          gradientFrom={200}
          gradientTo={250}
          chlidren={"🚀"}
        />
      </div>
    </div>
  );
}

export default HomePage;

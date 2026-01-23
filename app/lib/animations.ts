import { Variants, easeOut } from "framer-motion";

export const slideReveal = (
  x: number = -100,
  duration: number = 1
): Variants => ({
  hidden: {
    opacity: 0,
    filter: "blur(5px)",
    x,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      duration,
      ease: easeOut,
    },
  },
});

export const fadeIn = (duration = 0.6): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease: easeOut },
  },
});

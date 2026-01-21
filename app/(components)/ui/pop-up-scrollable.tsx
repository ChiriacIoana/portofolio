import * as motion from "motion/react-client"
import type {Variants} from "motion/react"
import React from "react"

interface ScrollAnimatedCardProps {
    chlidren: React.ReactNode
    gradientFrom: number
    gradientTo: number
    variants?: Variants
    viewportAmount?: number
}

const defaultCardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: 120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

export function ScrollAnimatedCard({
    chlidren,
    gradientFrom,
    gradientTo,
    variants=defaultCardVariants,
    viewportAmount=0.8,
}: ScrollAnimatedCardProps) {
    const background = `linear-gradient(306deg,  hsl(${gradientFrom}, 100%, 50%) , hsl(${gradientTo}, 100%, 50%))`
    return (
        <motion.div
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: viewportAmount, once: false}}
        >
         <div style={{ ...splash, background}}/>
         <motion.div style={card} variants={variants}>
            {chlidren}
            </motion.div>
        </motion.div>
    )
}
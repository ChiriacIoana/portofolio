import * as motion from "motion/react-client";

export default function AboutPage() {
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#3d0110",
        borderRadius: 12,
    }
    return (
        <>
        <motion.div
        className="ml-10 p-10"
            style={box}
            animate={{rotate:360}}
            transition={{duration:10, repeat:Infinity}}
        />
        <motion.div
        className="ml-10 p-10"
            style={box}
            initial={{scale: 0}}
            animate={{
                scale: 1,
                transition: {duration: 2, repeat: Infinity, repeatType: "reverse"}
            }}
        />
        </>
    )
}
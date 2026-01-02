import { motion } from "framer-motion";
const ClayFloatingShapes = () => {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {
    /* Large Floating Sphere - Top Right */
  }
            <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute top-[-5%] right-[-5%] w-64 h-64 md:w-96 md:h-96 rounded-full opacity-60 blur-xl"
    style={{
      background: "radial-gradient(circle at 30% 30%, rgba(109, 93, 252, 0.4), rgba(224, 198, 253, 0.1))",
      boxShadow: "inset -10px -10px 20px rgba(109, 93, 252, 0.2), inset 10px 10px 20px rgba(255, 255, 255, 0.4)"
    }}
  />

            {
    /* Medium Floating Cube-ish Shape - Bottom Left */
  }
            <motion.div
    animate={{
      y: [0, 30, 0],
      x: [0, 10, 0],
      rotate: [0, 10, 0]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }}
    className="absolute bottom-[10%] left-[-5%] w-48 h-48 md:w-72 md:h-72 rounded-[3rem] opacity-50 blur-lg"
    style={{
      background: "linear-gradient(135deg, rgba(255, 184, 184, 0.4), rgba(255, 255, 255, 0.1))",
      boxShadow: "inset 10px 10px 20px rgba(255, 255, 255, 0.4), inset -10px -10px 20px rgba(255, 184, 184, 0.2)"
    }}
  />

            {
    /* Small Floating Donut - Center Top */
  }
            <motion.div
    animate={{
      y: [0, -15, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }}
    className="absolute top-[20%] left-[20%] w-24 h-24 rounded-full border-[1.5rem] border-primary/20 opacity-40 blur-md"
    style={{
      boxShadow: "0 0 20px rgba(109, 93, 252, 0.2)"
    }}
  />
        </div>;
};
export {
  ClayFloatingShapes
};

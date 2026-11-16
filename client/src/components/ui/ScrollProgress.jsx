import { motion, useScroll, useSpring } from "framer-motion";
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  return <motion.div
    className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[60]"
    style={{ scaleX }}
  />;
}
export {
  ScrollProgress as default
};

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);
  if (!isVisible) return null;
  return <>
            {
    /* Main Cursor Dot */
  }
            <motion.div
    className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
    style={{
      x: cursorXSpring,
      y: cursorYSpring,
      translateX: "-50%",
      translateY: "-50%"
    }}
  />
            {
    /* Trailing Glow */
  }
            <motion.div
    className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] will-change-transform"
    style={{
      x: cursorXSpring,
      y: cursorYSpring,
      translateX: "-50%",
      translateY: "-50%"
    }}
    transition={{ type: "spring", damping: 50, stiffness: 200, delay: 0.1 }}
  />
            {
    /* Large Ambient Glow */
  }
            <motion.div
    className="fixed top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-[9997] will-change-transform"
    style={{
      x: cursorXSpring,
      y: cursorYSpring,
      translateX: "-50%",
      translateY: "-50%"
    }}
  />
        </>;
}
export {
  CursorFollower as default
};

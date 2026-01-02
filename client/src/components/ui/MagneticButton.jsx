import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
function MagneticButton({
  children,
  className,
  strength = 0.5,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return <motion.div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    animate={{ x, y }}
    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    className={cn("inline-block", className)}
  >
            <button
    onClick={onClick}
    className={cn("w-full h-full", className)}
    {...props}
  >
                {children}
            </button>
        </motion.div>;
}
export {
  MagneticButton as default
};

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
function Spotlight({
  children,
  className,
  size = 350,
  color = "rgba(120, 119, 198, 0.3)"
  // Default purple-ish glow
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: -size, y: -size });
  const [opacity, setOpacity] = useState(0);
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };
  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return <div
    ref={divRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className={cn("relative overflow-hidden", className)}
  >
            {
    /* Background Spotlight */
  }
            <div
    className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
    style={{
      opacity,
      background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%)`
    }}
  />

            {
    /* Border Spotlight (Optional: requires pseudo-element or border logic, keeping simple bg for now) */
  }

            {
    /* Content */
  }
            <div className="relative z-10">{children}</div>
        </div>;
}
export {
  Spotlight as default
};

import { useEffect, useRef, useState } from "react";
import { useEffectContext } from "../../../context/EffectContext";
import { Particle } from "./Particle";
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const { isEnabled, currentTheme } = useEffectContext();
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0
  });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    const baseArea = 1920 * 1080;
    const currentArea = dimensions.width * dimensions.height;
    const densityFactor = Math.min(Math.max(currentArea / baseArea, 0.5), 1.5);
    const count = Math.floor(currentTheme.particleCount * densityFactor);
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      const p = new Particle(dimensions.width, dimensions.height, currentTheme);
      newParticles.push(p);
    }
    particlesRef.current = newParticles;
  }, [dimensions, currentTheme]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isEnabled) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameRef.current = requestAnimationFrame(render);
    };
    render();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, isEnabled, currentTheme]);
  if (!isEnabled) return null;
  return <canvas
    ref={canvasRef}
    className="fixed inset-0 pointer-events-none z-0 touch-none"
  />;
}
export {
  ParticleCanvas
};

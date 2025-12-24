import { useEffect, useRef, useState } from "react";
import { useEffectContext } from "../../../context/EffectContext";
import { Particle } from "./Particle";

export function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { isEnabled, currentTheme } = useEffectContext();
    // Initialize with window dimensions immediately to avoid 1-frame delay
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    // Refs for animation loop
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>();

    // 1. Handle Resize
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Initial size
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 2. Initialize / Re-initialize Particles
    useEffect(() => {
        if (!dimensions.width || !dimensions.height) return;

        // Calculate density based on screen area (BASE is for 1920x1080 approx)
        const baseArea = 1920 * 1080;
        const currentArea = dimensions.width * dimensions.height;
        const densityFactor = Math.min(Math.max(currentArea / baseArea, 0.5), 1.5); // Clamp min 0.5 for mobile visibility

        const count = Math.floor(currentTheme.particleCount * densityFactor);

        // Create particles
        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            const p = new Particle(dimensions.width, dimensions.height, currentTheme);
            // Distribute initially so they don't all pop in at once if desired, 
            // but Particle.reset(true) handles random Y.
            newParticles.push(p);
        }
        particlesRef.current = newParticles;

    }, [dimensions, currentTheme]);

    // 3. Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isEnabled) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Ensure canvas size matches state (avoid scaling artifacts)
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach(p => {
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
    }, [dimensions, isEnabled, currentTheme]); // Re-run if these change

    if (!isEnabled) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 touch-none"
        />
    );
}

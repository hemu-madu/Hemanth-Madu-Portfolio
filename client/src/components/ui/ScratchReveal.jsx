import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
function ScratchReveal({
  children,
  width,
  height,
  minScratchPercentage = 50,
  onComplete,
  className
}) {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = width || parent.clientWidth;
      canvas.height = height || parent.clientHeight;
    }
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#C0C0C0");
    gradient.addColorStop(0.5, "#E8E8E8");
    gradient.addColorStop(1, "#C0C0C0");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    addNoise(ctx, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-over";
    ctx.font = "bold 20px Inter, sans-serif";
    ctx.fillStyle = "#666666";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Scratch to Reveal", canvas.width / 2, canvas.height / 2);
  }, [width, height]);
  const addNoise = (ctx, w, h) => {
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 20 - 10;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imageData, 0, 0);
  };
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    checkCompletion();
  };
  const checkCompletion = () => {
    if (isComplete) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }
    const percentage = transparentPixels / (pixels.length / 4) * 100;
    if (percentage >= minScratchPercentage) {
      setIsComplete(true);
      if (onComplete) onComplete();
      canvas.style.transition = "opacity 0.5s ease";
      canvas.style.opacity = "0";
      setTimeout(() => {
        canvas.style.display = "none";
      }, 500);
    }
  };
  const handleMouseDown = (e) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };
  const handleMouseMove = (e) => {
    if (isScratching) {
      scratch(e.clientX, e.clientY);
    }
  };
  const handleMouseUp = () => {
    setIsScratching(false);
  };
  const handleTouchStart = (e) => {
    setIsScratching(true);
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };
  const handleTouchMove = (e) => {
    if (isScratching) {
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };
  return <div className={cn("relative w-full h-full overflow-hidden select-none", className)}>
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {children}
            </div>
            <canvas
    ref={canvasRef}
    className="absolute inset-0 z-10 cursor-pointer touch-none"
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleMouseUp}
  />
        </div>;
}
export {
  ScratchReveal as default
};

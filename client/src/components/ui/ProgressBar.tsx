import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  name: string;
  percentage: number;
  color: "primary" | "secondary";
  delay?: number;
}

export default function ProgressBar({ name, percentage, color, delay = 0 }: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className={cn(
            "h-2.5 rounded-full",
            color === "primary" ? "bg-primary" : "bg-green-500"
          )}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay }}
        />
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 w-12 h-12 rounded-full p-0 shadow-lg z-50 transition-all duration-300",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}

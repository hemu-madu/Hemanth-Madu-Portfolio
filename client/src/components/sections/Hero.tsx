import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Cpu } from "lucide-react";

import { useTypingEffect } from "@/hooks/use-typing-effect";
import { ClayFloatingShapes } from "@/components/ui/clay-floating-shapes";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const { displayedText } = useTypingEffect("Computer Science Engineer & Full Stack Developer", 50, 1000);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Tech Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <ClayFloatingShapes />

        {/* Grid Pattern (Subtler) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Glow Effects (Kept for ambiance but softer) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[80px] opacity-30 will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[60px] opacity-20 will-change-transform"></div>

        {/* Floating Coding Symbols */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-6xl font-mono font-bold text-primary/10 select-none z-0 will-change-transform"
        >
          {"<Code />"}
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-[5%] text-8xl font-mono font-bold text-blue-500/10 select-none z-0 will-change-transform"
        >
          {"{ }"}
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 will-change-transform"
        >
          <Code className="w-24 h-24 text-primary/20" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 will-change-transform"
        >
          <Database className="w-32 h-32 text-blue-400/10" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-10 will-change-transform"
        >
          <Cpu className="w-16 h-16 text-cyan-400/20" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-100px)]">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Hello, I'm <br />
              <span className="text-gradient-primary">Hemanth Madu</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 min-h-[32px]"
            >
              <span className="text-gradient-secondary">{displayedText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 ml-1 bg-primary align-middle"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground/80 leading-relaxed mb-8 max-w-lg"
            >
              Passionate about building efficient, scalable, and innovative software solutions.
              Specializing in modern web technologies, embedded systems, and system architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                className="btn-clay min-w-[160px]"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </button>
              <button
                className="btn-outline min-w-[160px]"
                onClick={() => window.open("/Hemanth_Madu_Resume.pdf", "_blank")}
              >
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary/50 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-background relative z-10 shadow-2xl">
                  <img
                    src="/hemanth-profile.png"
                    alt="Hemanth Madu"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400?text=HM";
                    }}
                  />
                </div>
              </div>

              {/* Decorative Orbiting Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border border-primary/20 border-dashed z-0 will-change-transform"
              />

              {/* Floating Emojis */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 text-4xl z-20 drop-shadow-lg will-change-transform"
              >
                🚀
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-6 text-4xl z-20 drop-shadow-lg will-change-transform"
              >
                💻
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 -left-2 text-3xl z-20 drop-shadow-lg will-change-transform"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block" // Hidden on mobile to save space
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-sm text-muted-foreground mb-2 tracking-widest uppercase text-xs">Scroll</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
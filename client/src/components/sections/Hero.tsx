import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideIn } from "@/lib/animations";

export default function Hero() {
  // Animation settings
  const rightSlideAnimation = slideIn('right');
  
  // Function to scroll to different sections of the page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="pt-0 pb-16 lg:pb-24 bg-black section-gradient">
      {/* Banner at the top */}
      <div className="w-full bg-black">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-h-[180px] overflow-hidden"
        >
          <img 
            src="/hemanth-banner.png" 
            alt="Hemanth Madu Banner" 
            className="w-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Main hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-8 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
              Hello, I'm <span className="text-gradient">Hemanth Madu</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
              Computer Science Engineering Student | B.Tech 2021-2025
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Enthusiastic and highly motivated Computer Science graduate with a passion for building efficient, scalable, and innovative software solutions. Skilled in Python, C, and web development technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
          
          {/* Right side - Profile image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={rightSlideAnimation}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img 
                src="/hemanth-profile.png" 
                alt="Hemanth Madu Profile Photo" 
                className="object-cover w-full h-full" 
                onError={(e) => {
                  console.error("Image failed to load");
                  e.currentTarget.src = "https://via.placeholder.com/300";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideIn } from "@/lib/animations";

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

  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
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
              Recent Computer Science graduate with hands-on experience in Python and C. Skilled in problem-solving, eager to contribute technical expertise to innovative software development roles.
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
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={slideIn}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img 
                src="/assets/profile-photo.png" 
                alt="Profile Photo" 
                className="object-cover w-full h-full" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

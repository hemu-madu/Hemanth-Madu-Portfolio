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
    <section id="hero" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-8 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Hello, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
              Frontend Developer & UI/UX Designer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A passionate fresher with a strong foundation in modern web technologies and design principles, ready to create engaging digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-blue-600 text-white"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-200 hover:bg-gray-50"
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
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

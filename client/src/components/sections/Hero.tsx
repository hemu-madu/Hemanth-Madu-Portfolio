import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-secondary font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">John Doe</h1>
            <h2 className="text-2xl md:text-3xl text-neutral font-medium mb-6">Frontend Developer</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              A passionate fresher with a keen eye for creating beautiful, functional, and user-friendly websites. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#" className="flex items-center gap-2">
                  <FaDownload className="h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-400 to-secondary p-1.5">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

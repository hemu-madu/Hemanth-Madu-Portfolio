import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeIn, slideIn } from "@/lib/animations";
import { MapPin, Mail, Phone, Globe, Download, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-center mb-2 text-white">About <span className="text-gradient">Me</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
            
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideIn('right')}
          >
            <Card className="p-6 md:p-8 bg-gray-900/80 border-gray-800 shadow-xl">
              <motion.p 
                className="text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                I am an enthusiastic and highly motivated Computer Science graduate with a passion for building efficient, scalable, and innovative software solutions. With a strong foundation in programming, data structures, and web development, I am eager to contribute my skills to real-world projects. I enjoy problem-solving, learning new technologies, and collaborating in a team-driven environment. My goal is to develop impactful applications that enhance user experiences and optimize business processes.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <MapPin className="text-primary mr-3" />
                  <span className="text-gray-300">Eluru, A.P, India</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Mail className="text-primary mr-3" />
                  <span className="text-gray-300">hemanthmadu6454@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Phone className="text-primary mr-3" />
                  <span className="text-gray-300">+91 9491142102</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Globe className="text-primary mr-3" />
                  <a href="https://github.com/hemu-madu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">github.com/hemu-madu</a>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Linkedin className="text-primary mr-3" />
                  <a href="https://www.linkedin.com/in/hemanth-madu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">linkedin.com/in/hemanth-madu</a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-primary/90 text-white transform transition-transform hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";
import { MapPin, Mail, Phone, Globe, Download } from "lucide-react";

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
          >
            <h2 className="text-3xl font-bold text-center mb-2 text-white">About <span className="text-gradient">Me</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            
            <Card className="p-6 md:p-8 bg-gray-900/80 border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-6">
                Recent Computer Science graduate with hands-on experience in Python and C from academic projects. Skilled in problem-solving, eager to contribute technical expertise to innovative software development roles.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm particularly interested in scalable software solutions and cloud-based applications. My academic journey has equipped me with strong foundations in computer science fundamentals, data structures, and algorithms.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                As Chair of ACM Student Chapters at PACE Institute of Technology & Sciences, I've led multiple technical initiatives that have enhanced my leadership and collaboration skills. When I'm not coding, I enjoy technical volunteering and cooking.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3" />
                  <span className="text-gray-300">Eluru, A.P, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary mr-3" />
                  <span className="text-gray-300">hemanthmadu6454@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3" />
                  <span className="text-gray-300">+91 9491142102</span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-primary mr-3" />
                  <a href="https://github.com/hemu-madu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">github.com/hemu-madu</a>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";
import { MapPin, Mail, Phone, Globe, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            
            <Card className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                I am an enthusiastic fresher passionate about technology and web development. I'm eager to develop scalable and innovative software solutions while creating responsive and user-friendly applications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I believe in continuous learning and staying updated with the latest technologies. My goal is to build innovative solutions that solve real-world problems while continuing to grow my skills.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and expanding my knowledge in the tech field.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3" />
                  <span className="text-gray-700">Eluru, A.P, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary mr-3" />
                  <span className="text-gray-700">hemanthmadu6454@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3" />
                  <span className="text-gray-700">+91 9491142102</span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-primary mr-3" />
                  <a href="https://github.com/hemu-madu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">github.com/hemu-madu</a>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="default" className="bg-gray-800 hover:bg-gray-700">
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

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { MapPin, Mail, Phone, Globe, Download, Linkedin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my background, skills, and passion for technology
          </p>
        </motion.div>

        <div className="responsive-grid cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="modern-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                  <p className="text-gray-600">Computer Science Graduate</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I am an enthusiastic and highly motivated Computer Science graduate with a passion for building 
                efficient, scalable, and innovative software solutions. With a strong foundation in programming, 
                data structures, and web development, I am eager to contribute my skills to real-world projects.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I enjoy problem-solving, learning new technologies, and collaborating in team-driven environments. 
                My goal is to develop impactful applications that enhance user experiences and optimize business processes.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <button className="btn-primary group">
                <a 
                  href="/Hemanth_Madu_Resume.pdf" 
                  download="Hemanth_Madu_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> 
                  Download Resume
                </a>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="modern-card p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-colors hover:bg-teal-50 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Eluru, A.P, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-colors hover:bg-coral-50 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:hemanthmadu6454@gmail.com" className="text-gray-600 hover:text-coral-500 transition-colors">
                      hemanthmadu6454@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-colors hover:bg-blue-50 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+919491142102" className="text-gray-600 hover:text-blue-500 transition-colors">
                      +91 9491142102
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-colors hover:bg-yellow-50 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <a 
                      href="https://github.com/hemu-madu" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      github.com/hemu-madu
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-colors hover:bg-blue-50 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/hemanth-madu" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/hemanth-madu
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
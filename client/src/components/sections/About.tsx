import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { MapPin, Mail, Phone, Globe, Download, Linkedin, Award, User, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] text-primary/10"
        >
          <User className="w-24 h-24" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[5%] text-coral-500/10"
        >
          <Heart className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2"
        >
          <Sparkles className="w-[500px] h-[500px] text-yellow-500/5 opacity-5" />
        </motion.div>
      </div>
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <div className="modern-card p-8 bg-card border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Professional Summary</h3>
                  <p className="text-muted-foreground">Computer Science Engineer</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Results-driven Computer Science graduate with a strong foundation in software development and a passion for creating scalable, user-centric solutions. Experienced in full-stack development, I leverage extensive knowledge in data structures, algorithms, and modern web technologies to build efficient applications.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative environments where innovation and technical excellence are valued. With a proactive approach to problem-solving and a commitment to continuous learning, I am dedicated to delivering high-quality software that optimizes business processes and enhances user experiences.
              </p>
            </div>


          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="modern-card p-8 bg-card border-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-background border border-border/50 rounded-xl transition-colors hover:bg-teal-50/10 hover:border-teal-500/30 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <a
                      href="https://maps.app.goo.gl/uazX4YtAJDKZWLP26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      Eluru, A.P, India
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-background border border-border/50 rounded-xl transition-colors hover:bg-coral-50/10 hover:border-coral-500/30 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:hemanthmadu6454@gmail.com" className="text-muted-foreground hover:text-coral-500 transition-colors block">
                      hemanthmadu6454@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-background border border-border/50 rounded-xl transition-colors hover:bg-blue-50/10 hover:border-blue-500/30 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+919491142102" className="text-muted-foreground hover:text-blue-500 transition-colors block">
                      +91 9491142102
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-background border border-border/50 rounded-xl transition-colors hover:bg-yellow-50/10 hover:border-yellow-500/30 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">GitHub</p>
                    <a
                      href="https://github.com/hemu-madu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-yellow-600 transition-colors block"
                    >
                      github.com/hemu-madu
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-background border border-border/50 rounded-xl transition-colors hover:bg-blue-50/10 hover:border-blue-500/30 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-sm">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/hemanth-madu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-600 transition-colors block"
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
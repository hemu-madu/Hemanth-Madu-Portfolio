import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  // Google Form embed URL - this sends form submissions to hemanthmadu6454@gmail.com
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSejrQGQMtrk7dHvOkMKXgCf4tvnXHB1Y16iS6BIc8Eqzgpe8g/viewform?embedded=true";

  return (
    <section id="contact" className="py-16 lg:py-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-white">Get <span className="text-gradient">In Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Feel free to reach out to me for any opportunities, collaborations, or just to say hello. I'll get back to you as soon as possible.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-md overflow-hidden">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Send a Message</h3>
                
                <div className="relative h-[480px] -mx-4 -mb-4 mt-2">
                  <iframe 
                    src={googleFormUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    title="Contact Form"
                  >
                    Loading form...
                  </iframe>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600 flex items-center justify-center gap-2">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSejrQGQMtrk7dHvOkMKXgCf4tvnXHB1Y16iS6BIc8Eqzgpe8g/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/90 text-sm"
                  >
                    <span>Open in new window</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-900/80 text-white rounded-xl p-6 md:p-8 shadow-md border border-gray-800">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <MapPin size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-gray-300">Eluru, A.P, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Mail size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-300">hemanthmadu6454@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Phone size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-300">+91 9491142102</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/hemanth-madu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                      <FaLinkedinIn size={18} />
                    </a>
                    <a href="https://github.com/hemu-madu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

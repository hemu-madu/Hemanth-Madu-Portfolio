import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-coral-400 to-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Hemanth</span>
                <span className="text-gradient-coral">Madu</span>
              </h3>
              <p className="text-gray-300 mt-2">Computer Science Engineer</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative software solutions with passion and precision. 
              Always ready to take on new challenges and create impactful applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400 text-sm">hemanthmadu6454@gmail.com</p>
              <p className="text-gray-400 text-sm">+91 9491142102</p>
              <p className="text-gray-400 text-sm">Eluru, A.P, India</p>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/hemanth-madu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="social-icon social-linkedin"
              >
                <FaLinkedinIn size={18} />
              </motion.a>
              
              <motion.a
                href="https://github.com/hemu-madu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="social-icon social-github"
              >
                <FaGithub size={18} />
              </motion.a>
              
              <motion.a
                href="mailto:hemanthmadu6454@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="social-icon social-email"
              >
                <FaEnvelope size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
            >
              © {new Date().getFullYear()} Hemanth Madu. Made with 
              <Heart className="w-4 h-4 text-red-400 mx-1 fill-current" />
              All rights reserved.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
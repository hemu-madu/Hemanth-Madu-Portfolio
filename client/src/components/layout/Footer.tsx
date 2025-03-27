import { Link } from "wouter";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#hero" className="text-2xl font-bold text-white mb-4 inline-block">
              John<span className="text-secondary">Doe</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate frontend developer focused on creating intuitive and engaging user 
              experiences with modern web technologies.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition duration-300">
                  Education
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MdEmail className="text-secondary mr-3 mt-1" />
                <span>john@example.com</span>
              </li>
              <li className="flex items-start">
                <MdPhone className="text-secondary mr-3 mt-1" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <MdLocationOn className="text-secondary mr-3 mt-1" />
                <span>New York, NY, USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed with <span className="text-red-500">♥</span> by John Doe
          </p>
        </div>
      </div>
    </footer>
  );
}

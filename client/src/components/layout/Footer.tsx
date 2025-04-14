import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">© {new Date().getFullYear()} Hemanth Madu. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/hemanth-madu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://github.com/hemu-madu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="mailto:hemanthmadu6454@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

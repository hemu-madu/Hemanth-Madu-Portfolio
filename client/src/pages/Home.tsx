import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Internships from "@/components/sections/Internships";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// This is the main Homepage file - it controls the entire portfolio website layout
// It imports all the different sections and arranges them in order

export default function Home() {
  useEffect(() => {
    // This makes the page start at the top when it first loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      {/* Top navigation menu */}
      <Navbar />
      
      {/* Main content area with all portfolio sections */}
      <main>
        {/* The banner and intro section with your photo */}
        <Hero />
        
        {/* Information about you and your background */}
        <About />
        
        {/* Your technical and design skills */}
        <Skills />
        
        {/* Your educational background */}
        <Education />
        
        {/* Your certifications */}
        <Certifications />
        
        {/* Your internships */}
        <Internships />
        
        {/* Your projects and portfolio items */}
        <Portfolio />
        
        {/* Contact form for people to reach you */}
        <Contact />
      </main>
      
      {/* Bottom footer with copyright and links */}
      <Footer />
    </motion.div>
  );
}

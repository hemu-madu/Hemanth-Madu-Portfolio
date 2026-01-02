import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";
import Internships from "@/components/sections/Internships";
import Portfolio from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Quotes from "@/components/sections/Quotes";
import Footer from "@/components/layout/Footer";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen flex flex-col"
  >
      {
    /* Top navigation menu */
  }
      <Navbar />

      {
    /* Main content area with all portfolio sections */
  }
      <main>
        {
    /* The banner and intro section with your photo */
  }
        <Hero />

        {
    /* Information about you and your background */
  }
        <About />

        {
    /* Your technical and design skills */
  }
        <Skills />

        {
    /* Your educational background */
  }
        <Education />

        {
    /* Your leadership experience */
  }
        <Leadership />

        {
    /* Your certifications */
  }
        <Certifications />

        {
    /* Your internships */
  }
        <Internships />

        {
    /* Your projects and portfolio items */
  }
        <Portfolio />

        {
    /* Quotes Section */
  }
        <Quotes />

        {
    /* Contact form for people to reach you */
  }
        <Contact />
      </main>

      {
    /* Bottom footer with copyright and links */
  }
      <Footer />
    </motion.div>;
}
export {
  Home as default
};

import { useEffect, Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";

// Lazy load sections below the fold to improve initial load time
const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Education = lazy(() => import("@/components/sections/Education"));
const Leadership = lazy(() => import("@/components/sections/Leadership"));
const Certifications = lazy(() => import("@/components/sections/Certifications"));
const Internships = lazy(() => import("@/components/sections/Internships"));
const Portfolio = lazy(() => import("@/components/sections/Projects"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Quotes = lazy(() => import("@/components/sections/Quotes"));
const Footer = lazy(() => import("@/components/layout/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

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
        {/* The banner and intro section with your photo - kept eager for LCP */}
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          {/* Information about you and your background */}
          <About />

          {/* Your technical and design skills */}
          <Skills />

          {/* Your educational background */}
          <Education />

          {/* Your leadership experience */}
          <Leadership />

          {/* Your certifications */}
          <Certifications />

          {/* Your internships */}
          <Internships />

          {/* Your projects and portfolio items */}
          <Portfolio />

          {/* Quotes Section */}
          <Quotes />

          {/* Contact form for people to reach you */}
          <Contact />
        </Suspense>
      </main>

      {/* Bottom footer with copyright and links */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}

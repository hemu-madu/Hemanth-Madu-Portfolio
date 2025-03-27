import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-white">My <span className="text-gradient">Portfolio</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and experience in software development and problem-solving.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeIn}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

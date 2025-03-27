import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ProgressBar from "@/components/ui/ProgressBar";
import { technicalSkills, designSkills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-white">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Technical Skills</h3>
              
              {technicalSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="primary"
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Design Skills</h3>
              
              {designSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="secondary"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

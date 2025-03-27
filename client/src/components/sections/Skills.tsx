import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/lib/animations";
import ProgressBar from "@/components/ui/ProgressBar";
import { technicalSkills, designSkills } from "@/lib/data";

export default function Skills() {
  const leftSlideAnimation = slideIn('left');
  const rightSlideAnimation = slideIn('right');

  return (
    <section id="skills" className="py-16 lg:py-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-white">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftSlideAnimation}
            className="bg-gray-900/60 p-6 rounded-lg shadow-lg border border-gray-800"
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 text-gray-200 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0 0 8px rgba(255,255,255,0.3)" 
              }}
            >
              Technical Skills
            </motion.h3>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  custom={index}
                >
                  <ProgressBar
                    name={skill.name}
                    percentage={skill.percentage}
                    color="primary"
                    delay={index * 0.12}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightSlideAnimation}
            className="bg-gray-900/60 p-6 rounded-lg shadow-lg border border-gray-800"
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 text-gray-200 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0 0 8px rgba(255,255,255,0.3)" 
              }}
            >
              Additional Skills
            </motion.h3>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {designSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  custom={index}
                >
                  <ProgressBar
                    name={skill.name}
                    percentage={skill.percentage}
                    color="secondary"
                    delay={index * 0.12}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

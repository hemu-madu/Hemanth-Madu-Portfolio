import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Calendar, GraduationCap, Award } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 md:p-8 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" 
                        style={{ 
                          backgroundColor: edu.iconBg, 
                          color: edu.iconColor 
                        }}>
                        {edu.type === 'degree' ? (
                          <GraduationCap className="h-8 w-8" />
                        ) : (
                          <Award className="h-8 w-8" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.title}</h3>
                      <p className="text-gray-600 mb-2">{edu.institution}</p>
                      <div className="flex items-center text-gray-500 mb-4">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Calendar, Award, Users } from "lucide-react";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            Leadership <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Leading technical initiatives and building strong computing communities
          </p>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {leadership.map((experience, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 md:p-8 mb-8 modern-card">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: experience.iconBg }}
                      >
                        <Award className="w-8 h-8" style={{ color: experience.iconColor }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{experience.title}</h3>
                      <p className="text-lg text-gray-700 mb-2">{experience.institution}</p>
                      <p className="text-md font-medium text-teal-600 mb-2">{experience.organization}</p>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar className="mr-2 h-4 w-4 text-teal-500" />
                        <span>{experience.period}</span>
                        <span className="mx-3">•</span>
                        <span className="text-sm">Membership ID: {experience.membershipId}</span>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-teal-500" />
                          Key Responsibilities
                        </h4>
                        <div className="space-y-3">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                              <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
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

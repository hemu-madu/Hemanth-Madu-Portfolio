import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { education } from "@/lib/data";

import { Calendar, GraduationCap, Award, BookOpen, Scroll } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      {/* Background Floaters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-primary/5"
        >
          <GraduationCap className="w-32 h-32" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 right-[10%] text-blue-500/5"
        >
          <BookOpen className="w-24 h-24" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Academic <span className="text-gradient-primary">Journey</span></h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-blue-600 z-10 flex items-center justify-center shadow-lg shadow-primary/20">
                  {edu.type === 'degree' ? <GraduationCap className="text-white w-5 h-5" /> : <Award className="text-white w-5 h-5" />}
                </div>

                {/* Content Card Side */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <Card className="p-6 relative group hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                    {/* Date Badge */}
                    <div className={`absolute -top-3 ${index % 2 !== 0 ? 'left-6' : 'md:right-6 left-6 md:left-auto'} bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20`}>
                      {edu.period}
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-bold text-foreground mb-1">{edu.title}</h3>
                      <p className="text-primary font-medium mb-3">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

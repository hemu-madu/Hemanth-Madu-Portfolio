import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Calendar, Briefcase } from "lucide-react";
import { internships } from "@/lib/data";
function Internships() {
  return <section id="internships" className="py-16 lg:py-24 bg-background section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeIn}
  >
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground"><span className="text-gradient">Internships</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <motion.div
    className="max-w-4xl mx-auto"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
            {internships.map((internship, index) => <motion.div key={index} variants={fadeIn}>
                <Card className="p-8 md:p-10 mb-8 hybrid-card bg-card/80 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl p-3 border border-slate-100 dark:border-slate-800 shrink-0 mx-auto transform rotate-0 hover:rotate-3 transition-transform duration-300">
                        {internship.logo ? <img
    src={internship.logo}
    alt={internship.institution}
    className="w-full h-full object-contain"
  /> : <Briefcase className="h-10 w-10 text-primary" />}
                      </div>
                    </div>
                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{internship.title}</h3>
                      <p className="text-xl text-muted-foreground mb-4 font-medium">{internship.institution}</p>
                      <div className="flex items-center justify-center text-muted-foreground mb-6 bg-secondary/50 py-2 px-4 rounded-full inline-flex mx-auto">
                        <Calendar className="mr-2 h-5 w-5 text-primary" />
                        <span className="font-medium">{internship.period}</span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{internship.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
export {
  Internships as default
};

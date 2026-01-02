import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Calendar, Award } from "lucide-react";
import { certifications } from "@/lib/data";
function Certifications() {
  return <section id="certifications" className="py-16 lg:py-24 bg-background section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeIn}
  >
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground"><span className="text-gradient">Certifications</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <motion.div
    className="max-w-3xl mx-auto"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
            {certifications.map((cert, index) => <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      delay: index * 0.1,
      type: "spring",
      stiffness: 100
    }}
  >
                <Card className="p-6 md:p-8 mb-8 hybrid-card card-hover">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div
    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
    style={{
      backgroundColor: "#10b981",
      color: "#FFFFFF"
    }}
  >
                        <Award className="h-8 w-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground mb-2">{cert.institution}</p>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>{cert.period}</span>
                      </div>
                      <p className="text-muted-foreground">{cert.description}</p>
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
  Certifications as default
};

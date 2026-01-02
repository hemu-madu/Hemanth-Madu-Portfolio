import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Award, Users, CheckCircle2, Target, Trophy } from "lucide-react";
import { leadership } from "@/lib/data";
function Leadership() {
  return <section id="leadership" className="py-20 bg-muted/20 relative overflow-hidden">
      {
    /* Background Floaters */
  }
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-10 right-[15%] text-primary/5"
  >
          <Target className="w-32 h-32" />
        </motion.div>

        <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    className="absolute bottom-20 left-[10%] text-yellow-500/5"
  >
          <Trophy className="w-24 h-24" />
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
          <h2 className="mb-4">Leadership <span className="text-gradient-primary">Experience</span></h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading technical initiatives and building strong computing communities
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {leadership.map((experience, index) => <motion.div
    key={index}
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
    className="relative"
  >
              <Card className="overflow-hidden border border-white/20 dark:border-white/5 bg-neu-light dark:bg-neu-dark shadow-neumorph dark:shadow-neumorph-dark rounded-2xl">
                <div className="grid md:grid-cols-12 gap-0">
                  {
    /* Left Sidebar with Info */
  }
                  <div className="md:col-span-4 bg-neu-light/50 dark:bg-neu-dark/50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/20 dark:border-white/5">
                    <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-sm mb-6">
                      {experience.logo ? <img src={experience.logo} alt={experience.organization} className="w-full h-full object-contain" /> : <Award className="w-full h-full text-primary" />}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{experience.title}</h3>
                    <p className="text-primary font-medium mb-1">{experience.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4">{experience.organization}</p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-background rounded-full border border-border text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {experience.period}
                    </div>
                  </div>

                  {
    /* Right Content */
  }
                  <div className="md:col-span-8 p-8 md:p-10">
                    <h4 className="flex items-center font-semibold text-lg mb-6">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Key Responsibilities & Achievements
                    </h4>
                    <div className="space-y-4">
                      {experience.responsibilities.map((resp, idx) => <motion.div
    key={idx}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 * idx }}
    className="flex gap-3 items-start group"
  >
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{resp}</p>
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  Leadership as default
};

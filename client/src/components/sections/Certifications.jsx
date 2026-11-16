import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">
            <span className="w-5 h-px bg-primary rounded-full" />
            Certifications
          </span>
          <h2 className="section-title">
            Credentials &{" "}
            <span className="gradient-text">Training</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              className="glass-card p-6 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-5 shadow-glass-sm`}
                role="img"
                aria-label={cert.title}
              >
                {cert.icon}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-primary mb-3">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground border-t border-border/50 pt-4">
                <Calendar className="w-3.5 h-3.5" />
                {cert.date}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;

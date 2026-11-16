import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Trophy } from "lucide-react";
import { education } from "@/lib/data";

const typeIcons = {
  degree: GraduationCap,
  secondary: Award,
};

function EducationCard({ edu, index }) {
  const Icon = typeIcons[edu.type] || GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      {index < education.length - 1 && (
        <div
          className="absolute left-[18px] top-10 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--primary)/0.4), hsl(var(--border)/0.3), transparent)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Timeline dot / icon */}
      <div
        className={`absolute left-0 top-5 w-9 h-9 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-glow-primary`}
        aria-hidden="true"
      >
        <Icon className="w-4 h-4 text-white" />
      </div>

      {/* Card */}
      <div className="glass-card p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Logo */}
          {edu.logo && (
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-muted border border-border flex items-center justify-center shrink-0 overflow-hidden shadow-glass-sm">
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-full h-full object-contain p-1"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          )}

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5">{edu.field}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold bg-primary/8 text-primary border border-primary/15 rounded-full px-3 py-1">
                <Trophy className="w-3 h-3" />
                {edu.score}
              </div>
            </div>

            <p className="text-sm font-medium text-foreground mb-2">{edu.institution}</p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {edu.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
              </span>
            </div>

            {edu.highlights.length > 0 && (
              <ul className="space-y-1.5">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Education() {
  return (
    <section id="education" className="section-padding section-bg-alt">
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
            Education
          </span>
          <h2 className="section-title">
            Academic{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

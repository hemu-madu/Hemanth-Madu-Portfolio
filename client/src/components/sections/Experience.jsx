import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";
import { useState } from "react";

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {index < experience.length - 1 && (
        <div
          className="absolute left-[11px] top-12 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--primary)/0.4), hsl(var(--border)/0.3), transparent)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-6 w-5 h-5 rounded-full border-2 border-background shadow-glow-primary flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
        }}
        aria-hidden="true"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      {/* Card */}
      <div className="glass-card mb-8 overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
            {/* Company logo */}
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-muted border border-border flex items-center justify-center shrink-0 overflow-hidden shadow-glass-sm">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              ) : (
                <Briefcase className="w-6 h-6 text-primary" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                </div>
                <span className="inline-flex items-center text-xs font-medium bg-primary/8 text-primary border border-primary/15 rounded-full px-3 py-1">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {exp.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {exp.tech.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          {/* Toggle responsibilities */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            aria-expanded={expanded}
          >
            <ChevronRight
              className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
            />
            {expanded ? "Hide" : "Show"} Responsibilities
          </button>
        </div>

        {/* Expanded responsibilities */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-0 border-t border-border/50">
            <ul className="mt-4 space-y-2.5">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-padding section-bg-alt">
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
            Professional Experience
          </span>
          <h2 className="section-title">
            Work{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Internships and training programs that shaped my engineering perspective.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

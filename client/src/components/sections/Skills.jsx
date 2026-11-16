import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Settings, Globe, BookOpen } from "lucide-react";
import { skillCategories } from "@/lib/data";

const categoryIcons = {
  code: Code,
  cpu: Cpu,
  terminal: Terminal,
  settings: Settings,
  globe: Globe,
  book: BookOpen,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillChip({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="skill-chip cursor-default select-none"
    >
      {skill.icon ? (
        <i className={`${skill.icon} text-base`} aria-hidden="true" />
      ) : (
        <span
          className="w-1.5 h-1.5 rounded-full bg-current opacity-50"
          aria-hidden="true"
        />
      )}
      <span>{skill.name}</span>
    </motion.div>
  );
}

function SkillCategoryCard({ category, index }) {
  const Icon = categoryIcons[category.icon] || Code;

  return (
    <motion.div
      variants={cardVariant}
      className="glass-card p-6 h-full"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-lg ${category.bg} flex items-center justify-center shrink-0`}
        >
          <Icon className={`w-4.5 h-4.5 ${category.color}`} />
        </div>
        <h3 className="text-sm font-semibold text-foreground">{category.label}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
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
            Technical Skills
          </span>
          <h2 className="section-title">
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Organized by domain — from bare-metal firmware to full-stack web
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-sm text-muted-foreground/70"
        >
          Skills listed reflect genuine experience and study — not arbitrary proficiency scores.
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;

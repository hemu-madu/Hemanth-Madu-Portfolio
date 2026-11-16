import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useState } from "react";

const categoryColors = {
  Security: "bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
  "Full Stack": "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
  Frontend: "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800",
  Embedded: "bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
};

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const categoryClass =
    categoryColors[project.category] ||
    "bg-primary/8 text-primary border-primary/15";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-card overflow-hidden flex flex-col h-full cursor-default"
    >
      {/* Project image */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.parentElement.style.background =
              "linear-gradient(135deg, hsl(var(--muted)), hsl(var(--border)))";
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${categoryClass}`}
          >
            {project.category}
          </span>
        </div>

        {/* Action buttons on hover */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} on GitHub`}
              className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:bg-background transition-all duration-200 shadow-glass-sm border border-border/60"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Live demo of ${project.title}`}
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-all duration-200 shadow-glow-primary"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-foreground leading-snug">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
          </div>
          <p className="text-xs text-primary font-medium mb-3">{project.tagline}</p>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Key highlights toggle */}
        <div className="mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors mb-3 flex items-center gap-1"
            aria-expanded={expanded}
          >
            {expanded ? "▴" : "▾"} {expanded ? "Hide" : "Show"} highlights
          </button>

          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 border-t border-border/50 pt-3"
            >
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground leading-relaxed">{h}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              View Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {!project.demoUrl && project.githubUrl && (
            <span className="text-xs text-muted-foreground/60 ml-auto">
              No live demo available
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
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
            Projects
          </span>
          <h2 className="section-title">
            Engineering{" "}
            <span className="gradient-text">Showcase</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Selected projects demonstrating systems thinking, security implementation,
            and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            More projects on GitHub
          </p>
          <a
            href="https://github.com/hemu-madu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github className="w-4 h-4" />
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

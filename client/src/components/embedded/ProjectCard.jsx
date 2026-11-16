import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Terminal,
  Zap,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink,
  Globe,
} from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const getBadgeIcon = (category) => {
    if (category?.includes("Linux")) return Terminal;
    if (category?.includes("RTOS")) return Zap;
    if (category?.includes("Cloud") || category?.includes("Web")) return Globe;
    return Cpu;
  };

  const BadgeIcon = getBadgeIcon(project.category);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.1 }}
        className="hw-card-hover p-6 sm:p-7 flex flex-col justify-between h-full group"
      >
        <div>
          {/* Project Preview Image if available */}
          {project.image && (
            <div className="w-full h-36 rounded-xl bg-surface/60 border border-border/80 overflow-hidden mb-5 p-2 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="register-badge flex items-center gap-1.5 font-semibold">
              <BadgeIcon className="w-3.5 h-3.5 text-primary" />
              {project.badge}
            </span>
            <span className="font-mono text-xs text-muted-foreground px-2 py-0.5 rounded bg-surface border border-border">
              {project.platform}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-primary/90 mb-4 leading-relaxed">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Core Highlights List (Collapsed/Expanded) */}
          <div className="space-y-2 mb-6">
            <div className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider flex items-center justify-between">
              <span>Engineering Highlights</span>
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer"
              >
                {expanded ? (
                  <>
                    <ChevronUp className="w-3 h-3" /> Show less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3" /> View all ({project.highlights.length})
                  </>
                )}
              </button>
            </div>

            <ul className="space-y-2 pt-1">
              {(expanded ? project.highlights : project.highlights.slice(0, 3)).map(
                (h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Actions & Tags */}
        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 pb-5 border-t border-border">
            {project.tags.map((tag) => (
              <span key={tag} className="hw-tag text-[11px]">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border/80">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>Inspect Architecture Stack</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-foreground hover:border-primary/50 hover:text-primary transition-colors self-start sm:self-auto"
                aria-label={`Source code for ${project.title}`}
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Architecture Deep-Dive Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
              onClick={() => setModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl p-5 sm:p-7 md:p-8 z-10"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="register-badge">{project.platform}</span>
                    <span className="font-mono text-xs text-primary">{project.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn-icon shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Architecture Stack Layers */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>{project.architecture.type}</span>
                </div>

                <div className="space-y-2.5">
                  {project.architecture.layers.map((layer, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-3 rounded-xl bg-surface border border-border/80 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                        L{lIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
                        {layer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Highlights */}
              <div className="space-y-2 mb-6 pt-4 border-t border-border">
                <h5 className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Verified Implementation Details
                </h5>
                <ul className="grid grid-cols-1 gap-2">
                  {project.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border text-xs font-mono">
                <span className="text-muted-foreground">Validated on real hardware</span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub Repository
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

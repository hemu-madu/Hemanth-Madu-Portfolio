import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Code,
  Cpu,
  Terminal,
  Zap,
  HardDrive,
  Settings,
  Search,
  Monitor,
  Network,
  Layers,
  ArrowRight,
  ShieldCheck,
  Users,
} from "lucide-react";
import { skillCategories, architectureModels } from "@/lib/data";

const iconMap = {
  code: Code,
  cpu: Cpu,
  terminal: Terminal,
  "hard-drive": HardDrive,
  zap: Zap,
  network: Network,
  settings: Settings,
  search: Search,
  monitor: Monitor,
  users: Users,
  layers: Layers,
  shield: ShieldCheck,
};

export default function SkillsPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="page-container">
        {/* Header */}
        <div className="mb-12">
          <span className="section-eyebrow">
            <Terminal className="w-3.5 h-3.5" />
            Technical Competencies
          </span>
          <h1 className="section-title">
            Embedded Systems &amp; <span className="gradient-text-cyan">Linux Stack</span>
          </h1>
          <div className="w-12 h-1 bg-primary rounded-full mb-4" />
          <p className="section-desc">
            Directly derived from hands-on firmware and Linux driver engineering &mdash; without arbitrary proficiency percentages.
          </p>
        </div>

        {/* 9-Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="hw-card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="font-mono text-sm font-bold text-foreground">
                        {category.label}
                      </h2>
                    </div>
                    <span className="font-mono text-[10px] text-primary px-2 py-0.5 rounded bg-surface border border-border">
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="hw-tag">
                        {skill.icon ? (
                          <i className={`${skill.icon} text-sm text-primary`} aria-hidden="true" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Link to Projects */}
        <div className="hw-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-foreground">See Skills in Action</h3>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">
              Explore real-world driver implementations, custom kernel compilation, and FreeRTOS task graphs.
            </p>
          </div>
          <Link href="/projects">
            <span className="btn-primary font-mono text-xs whitespace-nowrap">
              View Embedded Projects
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

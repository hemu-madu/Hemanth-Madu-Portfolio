import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { HardDrive, Github, ArrowRight } from "lucide-react";
import { projects, personalInfo } from "@/lib/data";
import ProjectCard from "@/components/embedded/ProjectCard";

export default function ProjectsPage() {
  const [projectCategory, setProjectCategory] = useState("all");

  const filteredProjects =
    projectCategory === "all"
      ? projects
      : projects.filter((p) => p.category === projectCategory);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="page-container">
        {/* Header */}
        <div className="mb-8">
          <span className="section-eyebrow">
            <HardDrive className="w-3.5 h-3.5" />
            Verified Hardware &amp; Software Engineering
          </span>
          <h1 className="section-title">
            Project <span className="gradient-text-cyan">Showcase</span>
          </h1>
          <div className="w-12 h-1 bg-primary rounded-full mb-4" />
          <p className="section-desc">
            Documented embedded engineering projects spanning Linux device drivers, FreeRTOS surveillance firmware, and bare-metal STM32 register-level drivers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-border/80">
          <button
            type="button"
            onClick={() => setProjectCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
              projectCategory === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setProjectCategory("Linux Kernel & Drivers")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
              projectCategory === "Linux Kernel & Drivers"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Linux Kernel &amp; Drivers ({projects.filter((p) => p.category === "Linux Kernel & Drivers").length})
          </button>
          <button
            type="button"
            onClick={() => setProjectCategory("RTOS Firmware")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
              projectCategory === "RTOS Firmware"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            RTOS Firmware ({projects.filter((p) => p.category === "RTOS Firmware").length})
          </button>
          <button
            type="button"
            onClick={() => setProjectCategory("Bare-Metal Drivers")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
              projectCategory === "Bare-Metal Drivers"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Bare-Metal Drivers ({projects.filter((p) => p.category === "Bare-Metal Drivers").length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repositories Strip */}
        <div className="hw-card p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-2">Explore Source Repositories</h3>
          <p className="text-xs text-muted-foreground font-mono mb-6 leading-relaxed">
            All codebases, architectures, Makefiles, and test applications are maintained on GitHub.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline font-mono text-xs inline-flex"
          >
            <Github className="w-4 h-4 text-primary" />
            <span>github.com/hemu-madu</span>
          </a>
        </div>
      </div>
    </div>
  );
}

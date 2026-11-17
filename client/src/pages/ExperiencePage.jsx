import { motion } from "framer-motion";
import { Link } from "wouter";
import { Activity, CheckCircle2, ArrowRight, Download, Cpu } from "lucide-react";
import { experience, personalInfo, getAssetPath } from "@/lib/data";

export default function ExperiencePage() {
  const resumeUrl = getAssetPath("Hemanth_Madu_Resume.pdf");

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="page-container">
        {/* Header */}
        <div className="mb-12">
          <span className="section-eyebrow">
            <Activity className="w-3.5 h-3.5" />
            Employment History
          </span>
          <h1 className="section-title">
            Professional <span className="gradient-text-cyan">Experience</span>
          </h1>
          <div className="w-12 h-1 bg-primary rounded-full mb-4" />
          <p className="section-desc">
            Direct embedded systems engineering employment documented from my resume.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {experience.map((exp) => (
            <div key={exp.id} className="hw-card p-6 sm:p-8 relative">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border mb-6">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <div className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                      <img
                        src={exp.logo}
                        alt={exp.logoAlt || exp.company}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-foreground">{exp.role}</h2>
                      <span className="register-badge">{exp.type}</span>
                    </div>
                    <p className="text-base font-semibold text-primary">{exp.company}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {exp.period} &bull; {exp.location}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-xs self-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Experience
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <h3 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                  Core Responsibilities &amp; Outcomes
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accomplishments if present */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="p-4 rounded-xl bg-surface border border-border mb-6">
                  <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Key Highlights &amp; Accomplishments
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="font-mono text-xs text-foreground flex items-start gap-2">
                        <span className="text-primary font-bold">&gt;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {exp.tech.map((t) => (
                  <span key={t} className="hw-tag text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Strip */}
        <div className="hw-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div>
            <h3 className="text-base font-bold text-foreground">Verified Resume Available</h3>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">
              Review full employment history and institutional references in PDF format.
            </p>
          </div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-mono text-xs whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download Resume.pdf
          </a>
        </div>
      </div>
    </div>
  );
}

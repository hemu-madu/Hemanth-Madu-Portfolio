import { Link } from "wouter";
import { Github, Linkedin, Mail, ArrowUpRight, Cpu, Terminal, ShieldCheck } from "lucide-react";
import { personalInfo, getAssetPath } from "@/lib/data";

const quickLinks = [
  { href: "#about", label: "About Overview" },
  { href: "#skills", label: "9-Domain Technical Stack" },
  { href: "#experience", label: "Bitsilica Experience" },
  { href: "#projects", label: "Embedded Linux & RTOS Projects" },
  { href: "#architecture", label: "Hardware & Driver Architecture" },
  { href: "#education", label: "Education & ACM Leadership" },
  { href: "#contact", label: "Contact & Terminal" },
];

const socialLinks = [
  { href: personalInfo.github, icon: Github, label: "GitHub" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const resumeUrl = getAssetPath("Hemanth_Madu_Resume.pdf");

  return (
    <footer className="border-t border-border/80 bg-surface/60 relative overflow-hidden">
      {/* Subtle PCB dot pattern */}
      <div className="absolute inset-0 bg-pcb-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="page-container relative py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Engineering Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/">
              <span className="inline-flex items-center gap-3 cursor-pointer group">
                <span className="w-10 h-10 rounded-xl bg-chip-dark border border-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                  <svg viewBox="0 0 512 512" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="footer-h-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path d="M140 380V132h50v98h132v-98h50v248h-50v-98H190v98h-50z" fill="url(#footer-h-grad)" />
                  </svg>
                </span>
                <span className="font-bold text-foreground text-base tracking-tight font-heading">
                  Hemanth Madu
                </span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Embedded Systems Engineer specializing in low-level firmware, FreeRTOS multi-tasking, Linux Device Drivers, and Linux Kernel space integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                STM32 &bull; LPC2148 &bull; Linux 6.x
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-primary">
                <Terminal className="w-3.5 h-3.5" />
                Hyderabad, IN
              </div>
            </div>
          </div>

          {/* Architecture / Quick Nav */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Technical Navigation
            </p>
            <ul className="grid grid-cols-1 gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-primary/60 group-hover:text-primary transition-colors">&gt;</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication & Resume */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Direct Contact
            </p>
            <ul className="space-y-3 font-mono text-xs">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{label}</span>
                    {!href.startsWith("mailto") && (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center font-mono text-xs py-2"
              >
                Download Resume.pdf
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Hardware Telemetry Bar */}
        <div className="border-t border-border/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>&copy; {year} Hemanth Madu.</span>
            <span className="text-primary/40">&bull;</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground/80">
            <span>RAM: 0x20000000</span>
            <span className="text-border">|</span>
            <span>FLASH: 0x08000000</span>
            <span className="text-border">|</span>
            <span className="text-primary">Built for Embedded Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

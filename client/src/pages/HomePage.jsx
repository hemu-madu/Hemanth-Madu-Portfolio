import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Cpu,
  Terminal,
  Zap,
  HardDrive,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Download,
  CheckCircle2,
  Layers,
  GraduationCap,
  Users,
  Award,
  ShieldCheck,
  Activity,
  Send,
  Loader2,
  Copy,
  Check,
} from "lucide-react";
import {
  personalInfo,
  skillCategories,
  experience,
  projects,
  education,
  certifications,
  leadership,
  getAssetPath,
} from "@/lib/data";
import HeroTerminalVisual from "@/components/embedded/HeroTerminalVisual";
import ArchitectureExplorer from "@/components/embedded/ArchitectureExplorer";
import ProjectCard from "@/components/embedded/ProjectCard";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_l2kzfr9";
const EMAILJS_TEMPLATE_ID = "template_84mfy7j";
const EMAILJS_PUBLIC_KEY = "RRH4Jf0jkFJJvwO-Y";

export default function HomePage() {
  const { toast } = useToast();
  const resumeUrl = getAssetPath("Hemanth_Madu_Resume.pdf");

  // Project Filter State
  const [projectCategory, setProjectCategory] = useState("all");

  // Contact Form State
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      toast({ title: `${label} copied to clipboard`, description: value });
      setTimeout(() => setCopiedField(null), 2000);
    } catch {}
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Please enter your name (min 2 characters).";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.subject.trim() || form.subject.trim().length < 3)
      e.subject = "Please enter a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: "Hemanth",
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Telemetry message sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      toast({
        title: "Transmission failed",
        description: `Direct email: ${personalInfo.email}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* ── 1. HERO SECTION ──────────────────────── */}
      <section id="hero" className="relative bg-ambient-glow border-b border-border/80 pt-10 pb-20 md:py-24">
        {/* Subtle background circuit / grid */}
        <div
          className="absolute inset-0 bg-circuit-pattern opacity-30 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_30%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="page-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Positioning & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start w-full">
              {/* DP & Identity Block */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6 w-full text-center sm:text-left">
                {/* Profile DP */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="relative group shrink-0"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-3xl p-1 bg-gradient-to-tr from-primary via-cyan-400 to-accent shadow-xl shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                    <img
                      src={getAssetPath("hemanth-profile.jpg")}
                      alt="Hemanth Madu"
                      className="w-full h-full object-cover rounded-[22px] transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full bg-emerald-500 border-2 border-background text-[10px] font-mono font-bold text-white shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    ONLINE
                  </span>
                </motion.div>

                {/* Name & Title */}
                <div className="flex-1 min-w-0">
                  {/* Telemetry Status Pill */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/30 text-xs font-mono text-muted-foreground mb-3 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-foreground font-semibold">STATUS:</span>
                    <span>Ready for Embedded Linux &amp; Firmware Roles</span>
                  </motion.div>

                  {/* Candidate Name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.06 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase mb-1 font-heading break-words"
                  >
                    Hemanth <span className="gradient-text-cyan">Madu</span>
                  </motion.h1>

                  {/* Professional Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90 tracking-tight font-heading mb-2"
                  >
                    Embedded Systems Engineer
                  </motion.div>

                  {/* Core Specialization Line */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.14 }}
                    className="font-mono text-xs sm:text-sm text-primary font-semibold tracking-wide flex flex-wrap items-center justify-center sm:justify-start gap-2"
                  >
                    <span>Embedded Linux</span>
                    <span className="text-muted-foreground/60">&bull;</span>
                    <span>Linux Device Drivers</span>
                    <span className="text-muted-foreground/60">&bull;</span>
                    <span>Firmware Development</span>
                    <span className="text-muted-foreground/60">&bull;</span>
                    <span>FreeRTOS</span>
                  </motion.div>
                </div>
              </div>

              {/* Concise Introduction */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Primary Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 }}
                className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto"
              >
                <a href="#projects" className="btn-primary font-mono text-xs">
                  View My Projects
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline font-mono text-xs"
                >
                  <Download className="w-4 h-4 text-primary" />
                  Download Resume
                </a>

                <a href="#contact" className="btn-ghost font-mono text-xs">
                  Contact Me
                </a>
              </motion.div>

              {/* Hardware / Code Attributes Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-4 border-t border-border/80 w-full"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 text-primary" />
                  github.com/hemu-madu
                </a>
                <span className="text-border">|</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  LinkedIn
                </a>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Hyderabad, IN
                </span>
              </motion.div>
            </div>

            {/* Right Column: Interactive Microcontroller Terminal Visualizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <HeroTerminalVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT & HARDWARE INTEGRATION SECTION ── */}
      <section id="about" className="section-padding bg-background border-b border-border/80">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Core Engineering Positioning */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="section-eyebrow">
                  <Cpu className="w-3.5 h-3.5" />
                  01 / Engineering Profile
                </span>
                <h2 className="section-title">
                  Low-Level Firmware &amp; <span className="gradient-text-cyan">Linux Kernel Interfacing</span>
                </h2>
                <div className="w-12 h-1 bg-primary rounded-full mb-6" />
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  I am an Embedded Systems Engineer who works directly with the silicon &mdash; designing bare-metal register-level drivers, configuring FreeRTOS real-time schedulers, and developing Linux character device drivers on Linux Kernel 6.x.
                </p>
                <p>
                  My practical experience spans ARM Cortex-M4 (STM32L476RG, STM32F411RE), ARM7 (LPC2148), and ESP32 microcontrollers. I implement peripheral communication drivers across UART, SPI, I2C, CAN, ADC, and GPIO, utilizing hardware interrupts (EXTI) and Direct Memory Access (DMA) to eliminate polling bottlenecks.
                </p>
                <p>
                  On the Linux side, I focus on the transition between Kernel Space and User Space &mdash; compiling custom kernels with tailored <code className="font-mono text-primary text-xs bg-surface px-1 py-0.5 rounded border border-border">menuconfig</code> profiles, developing loadable kernel modules (LKMs), implementing <code className="font-mono text-primary text-xs bg-surface px-1 py-0.5 rounded border border-border">file_operations</code> dispatch tables, dynamic device number allocation, and sysfs/udev node creation.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "Bare-Metal Peripheral Drivers (UART, SPI, I2C)",
                  "FreeRTOS Multitasking & Synchronization",
                  "Linux Kernel Character Device Drivers",
                  "Hardware Interrupts (EXTI) & DMA Transfers",
                  "Register-Level Hardware Debugging (GDB/RealTerm)",
                  "Kernel Compilation & Makefiles (Linux 6.x)",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-foreground p-2.5 rounded-xl bg-surface border border-border">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Engineer Profile & Silicon Summary Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Profile Card */}
              <div className="hw-card p-5 flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-primary to-accent border border-primary/30 overflow-hidden shadow-md">
                    <img
                      src={getAssetPath("hemanth-profile.jpg")}
                      alt="Hemanth Madu"
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-foreground text-base truncate font-heading">
                    Hemanth Madu
                  </h3>
                  <p className="text-xs text-primary font-mono truncate">
                    Embedded Systems Engineer
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                    B.Tech in CSE &bull; Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="hw-card p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                    TARGET SPECIFICATIONS
                  </span>
                  <span className="font-mono text-[10px] text-emerald-500 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    REAL SILICON TESTED
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Primary Microcontrollers:</span>
                    <span className="text-foreground font-semibold">STM32L476 / LPC2148</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Architecture Cores:</span>
                    <span className="text-foreground font-semibold">ARM Cortex-M4 / ARM7</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Operating Systems:</span>
                    <span className="text-foreground font-semibold">FreeRTOS / Linux 6.8</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Kernel Space:</span>
                    <span className="text-foreground font-semibold">LKM Character Drivers</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Bus Protocols:</span>
                    <span className="text-foreground font-semibold">I2C, SPI, UART, CAN</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center font-mono text-xs py-2.5"
                  >
                    <Download className="w-4 h-4" />
                    Download Full Embedded Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE ARCHITECTURE EXPLORER ── */}
      <section id="architecture" className="section-padding bg-surface/40 border-b border-border/80">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-eyebrow">
                <Layers className="w-3.5 h-3.5" />
                02 / System Engineering
              </span>
              <h2 className="section-title mb-0">
                Hardware &amp; Driver <span className="gradient-text-cyan">Architecture</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-muted-foreground max-w-sm">
              Explore the control flow, memory boundaries, and interrupt handling across the systems I develop.
            </p>
          </div>

          <ArchitectureExplorer />
        </div>
      </section>

      {/* ── 4. TECHNICAL SKILLS SECTION ─────────── */}
      <section id="skills" className="section-padding bg-background border-b border-border/80">
        <div className="page-container">
          <div className="mb-12">
            <span className="section-eyebrow">
              <Terminal className="w-3.5 h-3.5" />
              03 / Technical Competencies
            </span>
            <h2 className="section-title">
              Embedded <span className="gradient-text-cyan">Skill Taxonomy</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-4" />
            <p className="section-desc">
              Organized directly from my practical engineering background &mdash; without arbitrary percentage bars.
            </p>
          </div>

          {/* 9-Domain Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="hw-card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-foreground">
                      {category.label}
                    </span>
                    <span className="font-mono text-[10px] text-primary px-2 py-0.5 rounded bg-surface border border-border">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROFESSIONAL EXPERIENCE SECTION ──── */}
      <section id="experience" className="section-padding bg-surface/30 border-b border-border/80">
        <div className="page-container">
          <div className="mb-12">
            <span className="section-eyebrow">
              <Activity className="w-3.5 h-3.5" />
              04 / Employment History
            </span>
            <h2 className="section-title">
              Professional <span className="gradient-text-cyan">Experience</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-4" />
            <p className="section-desc">
              Direct embedded systems engineering employment documented from my resume.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="hw-card p-6 sm:p-8 relative">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border mb-6">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden p-1.5 shadow-sm">
                        <img
                          src={exp.logo}
                          alt={exp.logoAlt || exp.company}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
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
                  <h4 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                    Core Responsibilities &amp; Outcomes
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Accomplishments if present */}
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
        </div>
      </section>

      {/* ── 6. FEATURED PROJECTS (RESUME & SYSTEMS SHOWCASE) ────────── */}
      <section id="projects" className="section-padding bg-background border-b border-border/80">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="section-eyebrow">
                <HardDrive className="w-3.5 h-3.5" />
                05 / Featured Embedded Projects
              </span>
              <h2 className="section-title mb-0">
                Engineering <span className="gradient-text-cyan">Project Showcase</span>
              </h2>
            </div>
            <p className="font-mono text-xs text-muted-foreground max-w-sm">
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

          {/* Filtered Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {(projectCategory === "all"
              ? projects
              : projects.filter((p) => p.category === projectCategory)
            ).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. EDUCATION & LEADERSHIP SECTION ────── */}
      <section id="education" className="section-padding bg-surface/30 border-b border-border/80">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 6 Cols: Education */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="section-eyebrow">
                  <GraduationCap className="w-3.5 h-3.5" />
                  06 / Academic Foundations
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Education
                </h2>
                <div className="w-12 h-1 bg-primary rounded-full mb-4" />
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="hw-card p-6">
                    <div className="flex items-start gap-4 mb-3">
                      {edu.logo && (
                        <div className="w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center shrink-0 overflow-hidden p-1 shadow-sm">
                          <img
                            src={edu.logo}
                            alt={edu.logoAlt || edu.institution}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                          <span className="register-badge">{edu.score}</span>
                        </div>
                        <p className="text-sm font-semibold text-primary">{edu.institution}</p>
                        <p className="font-mono text-xs text-muted-foreground mt-1">
                          {edu.period} &bull; {edu.location}
                        </p>
                      </div>
                    </div>

                    {edu.highlights.length > 0 && (
                      <ul className="mt-4 pt-4 border-t border-border space-y-1.5">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-primary font-mono">&gt;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Cols: Leadership & Certifications */}
            <div className="lg:col-span-6 space-y-6">
              {/* Leadership */}
              <div>
                <span className="section-eyebrow">
                  <Users className="w-3.5 h-3.5" />
                  07 / Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  ACM Student Chapter
                </h2>
                <div className="w-12 h-1 bg-primary rounded-full mb-4" />
              </div>

              {leadership.map((item) => (
                <div key={item.id} className="hw-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {item.logo && (
                      <div className="w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center shrink-0 overflow-hidden p-1 shadow-sm">
                        <img
                          src={item.logo}
                          alt={item.logoAlt || item.organization}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs font-semibold text-primary">{item.organization}</p>
                      <p className="font-mono text-xs text-muted-foreground mt-0.5">
                        {item.period} &bull; Member ID: {item.membershipId}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-border">
                    {item.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Certifications Strip */}
              <div className="hw-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    Documented Certifications
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl bg-surface border border-border text-xs flex items-center gap-3">
                      {c.logo && (
                        <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden p-1 shadow-sm">
                          <img
                            src={c.logo}
                            alt={c.logoAlt || c.issuer}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-foreground mb-0.5">{c.title}</div>
                        <div className="text-primary font-mono text-[11px]">{c.issuer}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{c.badge}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RESUME & CONTACT SECTION ─────────── */}
      <section id="contact" className="section-padding bg-background relative">
        <div className="page-container relative">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">
              <Mail className="w-3.5 h-3.5" />
              08 / Communication &bull; TTY
            </span>
            <h2 className="section-title">
              Let&apos;s Build <span className="gradient-text-cyan">Reliable Systems</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
            <p className="section-desc mx-auto">
              Open to Embedded Software Engineer, Embedded Linux Engineer, Linux Device Driver Developer, and Firmware Engineer roles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left 5 Cols: Direct Contact & Resume */}
            <div className="lg:col-span-5 space-y-4">
              <div className="hw-card p-6 space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-border">
                  <div className="relative shrink-0">
                    <img
                      src={getAssetPath("hemanth-profile.jpg")}
                      alt="Hemanth Madu"
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-primary/40"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-foreground text-sm font-heading truncate">
                      Hemanth Madu
                    </div>
                    <div className="font-mono text-[11px] text-primary truncate">
                      Embedded Systems Engineer
                    </div>
                  </div>
                </div>

                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  DIRECT CHANNELS
                </h3>

                {/* Email with copy */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-surface border border-border">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 min-w-0 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase text-muted-foreground">Email</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.email, "Email")}
                    className="btn-icon shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedField === "Email" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-surface border border-border">
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 min-w-0 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase text-muted-foreground">Phone</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.phone, "Phone")}
                    className="btn-icon shrink-0"
                    aria-label="Copy phone number"
                  >
                    {copiedField === "Phone" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-foreground">{personalInfo.location}</p>
                  </div>
                </div>

                {/* GitHub & LinkedIn */}
                <div className="pt-2 border-t border-border grid grid-cols-2 gap-2 font-mono text-xs">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-surface border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-surface border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>

                {/* Resume Download CTA */}
                <div className="pt-2">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center font-mono text-xs py-2.5"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume (Hemanth_Madu_Resume.pdf)
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Telemetry Transmission Message Form */}
            <div className="lg:col-span-7">
              <div className="hw-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Send Message</h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      Direct transmission &bull; 24h response guarantee
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="label">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Engineering Recruiter"
                        className={`field ${errors.name ? "field-error" : ""}`}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1 font-mono">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="label">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="recruiter@company.com"
                        className={`field ${errors.email ? "field-error" : ""}`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="label">
                      Subject / Opportunity <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Embedded Linux / Firmware Role Discussion"
                      className={`field ${errors.subject ? "field-error" : ""}`}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <p className="text-xs text-destructive mt-1 font-mono">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="label">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Details regarding your team, technology stack, or interview process..."
                      className={`field resize-none ${errors.message ? "field-error" : ""}`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1 font-mono">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 font-mono text-xs disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Transmit Message to Hemanth
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

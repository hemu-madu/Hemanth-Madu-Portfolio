import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { href: personalInfo.github, icon: Github, label: "GitHub" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
];

const techBadges = [
  "Embedded C",
  "Linux BSP",
  "Device Drivers",
  "RTOS",
  "Python",
  "React",
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function Hero() {
  const { displayedText } = useTypingEffect(personalInfo.roles, 60, 800, true);

  const resumeUrl = (() => {
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}Hemanth_Madu_Resume.pdf`;
  })();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 bg-mesh pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 bg-grid opacity-30 dark:opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(var(--primary)/0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left — Text Content */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary/80 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance"
            >
              Hemanth{" "}
              <span className="gradient-text">Madu</span>
            </motion.h1>

            {/* Typing effect role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <span className="text-lg md:text-xl font-medium text-muted-foreground">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-primary rounded-full"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg text-pretty"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techBadges.map((badge) => (
                <span key={badge} className="tech-badge">
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="btn-ghost"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto") ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <div className="w-px h-5 bg-border mx-1" aria-hidden="true" />
              <span className="text-xs text-muted-foreground font-mono">
                hemanthmadu6454@gmail.com
              </span>
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-20 animate-pulse-glow"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative border ring */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)/0.4), hsl(var(--accent)/0.2))",
                    padding: "2px",
                    borderRadius: "1rem",
                  }}
                  aria-hidden="true"
                >
                  <div className="w-full h-full rounded-2xl bg-background" />
                </div>

                {/* Profile image */}
                <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
                  <img
                    src={`${
                      import.meta.env.BASE_URL.endsWith("/")
                        ? import.meta.env.BASE_URL
                        : `${import.meta.env.BASE_URL}/`
                    }hemanth-profile.png`}
                    alt="Hemanth Madu — Embedded Linux Engineer"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Floating code label */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 shadow-glass-md border border-border/60"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1" aria-hidden="true">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <code className="text-xs font-mono text-muted-foreground">
                      <span className="text-cyan-500">gcc</span>{" "}
                      <span className="text-green-500">-o</span> firmware.elf
                    </code>
                  </div>
                </motion.div>

                {/* Floating Linux label */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-glass-md border border-border/60"
                >
                  <div className="flex items-center gap-2">
                    <i className="devicon-linux-plain text-lg text-orange-500" aria-hidden="true" />
                    <span className="text-xs font-semibold text-foreground">
                      Linux BSP
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer group"
          onClick={() => scrollTo("about")}
          role="button"
          aria-label="Scroll to about section"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollTo("about")}
        >
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

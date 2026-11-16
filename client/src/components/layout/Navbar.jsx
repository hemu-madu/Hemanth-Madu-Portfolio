import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon, Cpu, Terminal, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { getAssetPath } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#about", label: "About", path: "/about" },
  { href: "#skills", label: "Skills", path: "/skills" },
  { href: "#experience", label: "Experience", path: "/experience" },
  { href: "#projects", label: "Projects", path: "/projects" },
  { href: "#architecture", label: "Architecture", path: "/" },
  { href: "#education", label: "Education", path: "/about" },
  { href: "#contact", label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      if (location === "/" || location === "") {
        const sections = ["contact", "education", "projects", "architecture", "experience", "skills", "about", "hero"];
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setActiveSection(s);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const resumeUrl = getAssetPath("Hemanth_Madu_Resume.pdf");

  const handleNavClick = (item) => {
    setMobileOpen(false);
    if (location === "/" || location === "") {
      const targetId = item.href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
    }
    // If not on home, navigate to route or home anchor
    setLocation(item.path);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-hardware"
            : "bg-background/40 backdrop-blur-md border-b border-transparent"
        )}
      >
        <div className="page-container">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* "H" Brand Logo (like tab title) */}
            <Link href="/" aria-label="Hemanth Madu — Embedded Systems Engineer">
              <span className="flex items-center gap-3 cursor-pointer group">
                <span className="relative w-10 h-10 rounded-xl bg-chip-dark border border-primary/40 flex items-center justify-center shrink-0 shadow-glow-cyan/20 group-hover:border-primary group-hover:scale-105 transition-all overflow-hidden">
                  <svg viewBox="0 0 512 512" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="nav-h-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path d="M140 380V132h50v98h132v-98h50v248h-50v-98H190v98h-50z" fill="url(#nav-h-grad)" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-foreground text-sm tracking-tight font-heading">
                      Hemanth Madu
                    </span>
                    <span className="font-mono text-[10px] text-primary/90 hidden sm:inline px-1 py-0.2 rounded bg-primary/10 border border-primary/20">
                      sys_init()
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground hidden sm:block">
                    Embedded Linux &bull; Firmware
                  </span>
                </div>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface/70 border border-border/80 backdrop-blur-md"
              aria-label="Embedded Engineering Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const targetId = item.href.replace("#", "");
                const isSelected =
                  location === "/" ? activeSection === targetId : location === item.path;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      "relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer select-none",
                      isSelected
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="embedded-nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-card border border-primary/30 shadow-sm -z-10"
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons & Resume */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleTheme}
                className="btn-icon"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-3.5 font-mono"
              >
                <Download className="w-3.5 h-3.5 text-primary" />
                Resume.pdf
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (location === "/") {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setLocation("/contact");
                  }
                }}
                className="btn-primary text-xs py-2 px-4 font-mono font-semibold"
              >
                Connect
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={toggleTheme}
                className="btn-icon"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="btn-icon"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden bg-card border-l border-border p-6 flex flex-col justify-between shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Navigation &bull; Target
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="btn-icon"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Drawer Brand Badge with "H" Logo */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border mb-5">
                  <div className="w-11 h-11 rounded-xl bg-chip-dark border border-primary/40 flex items-center justify-center shrink-0 shadow-sm">
                    <svg viewBox="0 0 512 512" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="drawer-h-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                      <path d="M140 380V132h50v98h132v-98h50v248h-50v-98H190v98h-50z" fill="url(#drawer-h-grad)" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-foreground text-sm truncate font-heading">
                      Hemanth Madu
                    </div>
                    <div className="font-mono text-[11px] text-primary truncate">
                      Embedded Systems Engineer
                    </div>
                  </div>
                </div>

                <nav className="flex flex-col gap-1.5">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono text-left transition-colors hover:bg-surface text-muted-foreground hover:text-primary"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-muted-foreground/60">{item.href}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-border flex flex-col gap-2.5">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline justify-center font-mono text-xs"
                >
                  <Download className="w-4 h-4 text-primary" />
                  Download Resume.pdf
                </a>
                <a
                  href="#contact"
                  onClick={() => {
                    setMobileOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary justify-center font-mono text-xs"
                >
                  Contact Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16" aria-hidden="true" />
    </>
  );
}

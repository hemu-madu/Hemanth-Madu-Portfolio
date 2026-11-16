import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Cpu,
  GraduationCap,
  Users,
  Award,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import {
  personalInfo,
  education,
  certifications,
  leadership,
  getAssetPath,
} from "@/lib/data";

export default function AboutPage() {
  const resumeUrl = getAssetPath("Hemanth_Madu_Resume.pdf");

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="page-container space-y-16">
        {/* Header with Profile DP */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-3xl p-1 bg-gradient-to-tr from-primary to-accent shadow-xl shadow-primary/20">
              <img
                src={getAssetPath("hemanth-profile.jpg")}
                alt="Hemanth Madu"
                className="w-full h-full object-cover rounded-[22px]"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="section-eyebrow">
              <Cpu className="w-3.5 h-3.5" />
              01 / Engineering Profile
            </span>
            <h1 className="section-title">
              About <span className="gradient-text-cyan">Hemanth Madu</span>
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full mb-4 mx-auto sm:mx-0" />
            <p className="section-desc">{personalInfo.about}</p>
          </div>
        </div>

        {/* Bio & Silicon Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <div className="hw-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                Embedded Systems &amp; Low-Level Software Development
              </h2>
              <p>
                As an Embedded Systems Engineer, my passion lies in writing robust code that interfaces with real silicon. I develop bare-metal and RTOS-based firmware for ARM Cortex-M (STM32) and ARM7 (LPC2148) platforms, writing modular register-level peripheral drivers for UART, SPI, I2C, CAN, and ADC.
              </p>
              <p>
                In the Embedded Linux realm, I bridge the gap between kernel space and user space. I have experience compiling custom Linux 6.x kernels, writing loadable kernel modules (LKMs), character device drivers, and configuring dynamic major/minor number allocations with udev-compatible sysfs classes.
              </p>
              <p>
                I prioritize deterministic execution, thread safety through FreeRTOS queues/mutexes/semaphores, and asynchronous interrupt/DMA-driven I/O to maximize system throughput while keeping power consumption minimal.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="hw-card p-6 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="font-bold text-foreground">TECHNICAL ATTRIBUTES</span>
                <span className="text-primary text-[11px]">HARDWARE &bull; LINUX</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                <span className="text-muted-foreground">Platforms:</span>
                <span className="text-foreground font-semibold">STM32, LPC2148, ESP32</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                <span className="text-muted-foreground">Firmware:</span>
                <span className="text-foreground font-semibold">Bare-Metal C &bull; FreeRTOS</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                <span className="text-muted-foreground">Kernel:</span>
                <span className="text-foreground font-semibold">Linux 6.8 &bull; Char Drivers</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                <span className="text-muted-foreground">Toolchains:</span>
                <span className="text-foreground font-semibold">GCC ARM, STM32CubeIDE</span>
              </div>
              <div className="pt-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center font-mono text-xs py-2.5"
                >
                  <Download className="w-4 h-4" />
                  Download Resume.pdf
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education & ACM Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-border">
          {/* Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="section-eyebrow">
                <GraduationCap className="w-3.5 h-3.5" />
                02 / Academic Qualifications
              </span>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
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

          {/* ACM Leadership */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="section-eyebrow">
                <Users className="w-3.5 h-3.5" />
                03 / Leadership &amp; Community
              </span>
              <h2 className="text-2xl font-bold text-foreground">ACM Student Chapter</h2>
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

            {/* Certifications Box */}
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
    </div>
  );
}

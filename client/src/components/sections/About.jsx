import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "https://maps.app.goo.gl/uazX4YtAJDKZWLP26",
    target: "_blank",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/hemu-madu",
    href: personalInfo.github,
    target: "_blank",
    color: "text-foreground",
    bg: "bg-muted",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hemanth-madu",
    href: personalInfo.linkedin,
    target: "_blank",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <section id="about" className="section-padding section-bg-alt">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="section-label">
            <span className="w-5 h-px bg-primary rounded-full" />
            About Me
          </span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Bio — wider column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <i className="devicon-linux-plain text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Computer Science Engineer
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    B.Tech CSE — PACE Institute of Technology &amp; Sciences
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5">
                {personalInfo.about}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I bring together a deep interest in hardware-level programming with strong
                software engineering fundamentals. My experience spans developing firmware
                modules in Embedded C, working with RTOS, debugging serial communication
                protocols, and building full-stack web applications. I value clean,
                maintainable code and collaborative engineering teams.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CGPA", value: "8.63 / 10", sub: "B.Tech CSE" },
                { label: "Current Role", value: "Embedded Intern", sub: "Bitsilica" },
                { label: "Leadership", value: "4 Years", sub: "ACM Chair" },
                { label: "Graduation", value: "May 2025", sub: "B.Tech" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="glass-card p-5 text-center">
                  <div className="stat-number text-2xl mb-1">{value}</div>
                  <div className="text-xs font-medium text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info — narrower column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Contact Information
            </h3>
            {contactDetails.map(({ icon: Icon, label, value, href, target, color, bg }) => (
              <motion.a
                key={label}
                variants={item}
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 glass-card group cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

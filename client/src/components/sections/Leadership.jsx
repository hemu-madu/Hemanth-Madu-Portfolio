import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Users, Hash } from "lucide-react";
import { leadership } from "@/lib/data";

function Leadership() {
  return (
    <section id="leadership" className="section-padding section-bg-alt">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">
            <span className="w-5 h-px bg-primary rounded-full" />
            Leadership
          </span>
          <h2 className="section-title">
            Leadership{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Building technical communities and driving engineering culture on campus.
          </p>
        </motion.div>

        {/* Leadership cards */}
        <div className="space-y-6 max-w-4xl">
          {leadership.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid md:grid-cols-12">
                {/* Left sidebar */}
                <div className="md:col-span-4 p-8 bg-muted/30 dark:bg-surface/50 border-b md:border-b-0 md:border-r border-border/50 flex flex-col items-center text-center justify-center">
                  {/* Logo */}
                  {role.logo ? (
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-muted border border-border shadow-glass-md p-3 mb-5 overflow-hidden">
                      <img
                        src={role.logo}
                        alt={role.organization}
                        className="w-full h-full object-contain"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  )}

                  <h3 className="text-base font-bold text-foreground mb-1">{role.title}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{role.institution}</p>
                  <p className="text-xs text-muted-foreground mb-4">{role.organization}</p>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background rounded-full px-3 py-1.5 border border-border">
                    <Calendar className="w-3 h-3" />
                    {role.period}
                  </div>

                  {role.membershipId && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                      <Hash className="w-3 h-3" />
                      Member ID: {role.membershipId}
                    </div>
                  )}
                </div>

                {/* Right content */}
                <div className="md:col-span-8 p-8">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {role.summary}
                  </p>

                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {role.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {resp}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;

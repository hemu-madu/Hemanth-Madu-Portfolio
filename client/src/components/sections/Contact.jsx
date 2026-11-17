import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/lib/data";

const EMAILJS_SERVICE_ID = "service_i8t4avp";
const EMAILJS_TEMPLATE_ID = "template_84mfy7j";
const EMAILJS_PUBLIC_KEY = "RRH4Jf0jkFJJvwO-Y";

const socialLinks = [
  {
    href: personalInfo.github,
    icon: Github,
    label: "GitHub",
    username: "hemu-madu",
    hoverColor: "hover:text-foreground",
  },
  {
    href: personalInfo.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    username: "hemanth-madu",
    hoverColor: "hover:text-blue-500",
  },
];

function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Name must be at least 2 characters.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.subject.trim() || form.subject.trim().length < 3)
      e.subject = "Subject must be at least 3 characters.";
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
        title: "Message sent!",
        description:
          "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to send",
        description:
          "Something went wrong. Please email me directly at hemanthmadu6454@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-bg-alt">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, hsl(var(--primary)/0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="section-label justify-center">
            <span className="w-5 h-px bg-primary rounded-full" />
            Contact
          </span>
          <h2 className="section-title">
            Let's Work{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            I'm open to embedded systems roles, firmware positions, and full-stack
            opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-base font-semibold text-foreground mb-6">
              Contact Details
            </h3>

            {/* Direct contact */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                color: "text-primary",
                bg: "bg-primary/8",
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
            ].map(({ icon: Icon, label, value, href, target, color, bg }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 glass-card group"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Divider */}
            <div className="border-t border-border/50 pt-4">
              <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-widest">
                Social
              </p>
              <div className="space-y-2">
                {socialLinks.map(({ href, icon: Icon, label, username, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-muted-foreground ${hoverColor} transition-all duration-200`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{username}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="glass-card p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-foreground">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Typically responds within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    I'll respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="form-label">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={`form-field ${errors.name ? "border-destructive focus:ring-destructive/50" : ""}`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-destructive mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className={`form-field ${errors.email ? "border-destructive focus:ring-destructive/50" : ""}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-destructive mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Inquiry / Hello"
                    className={`form-field ${errors.subject ? "border-destructive focus:ring-destructive/50" : ""}`}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-destructive mt-1.5">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, role, or anything you'd like to discuss..."
                    className={`form-field resize-none ${errors.message ? "border-destructive focus:ring-destructive/50" : ""}`}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

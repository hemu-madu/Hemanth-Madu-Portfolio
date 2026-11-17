import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Loader2,
  Download,
  Copy,
  Check,
  Terminal,
  AlertTriangle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { personalInfo, getAssetPath } from "@/lib/data";

const EMAILJS_SERVICE_ID = "service_l2kzfr9";
const EMAILJS_TEMPLATE_ID = "template_84mfy7j";
const EMAILJS_PUBLIC_KEY = "RRH4Jf0jkFJJvwO-Y";

export default function ContactPage() {
  const { toast } = useToast();
  const resumeUrl = getAssetPath("Hemanth_Madu_Resume.pdf");

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [fallbackData, setFallbackData] = useState(null);

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
      e.name = "Please enter your name.";
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
    setFallbackData(null);

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
      setFallbackData(null);
    } catch (err) {
      console.error("EmailJS Error:", err);
      const errText = String(err?.text || err?.message || "");
      const isGmailGrantIssue =
        err?.status === 412 ||
        errText.toLowerCase().includes("invalid grant") ||
        errText.toLowerCase().includes("reconnect");

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        form.subject || "Embedded Systems Inquiry"
      )}&body=${encodeURIComponent(
        `Hi Hemanth,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
      )}`;

      setFallbackData({
        mailtoUrl,
        isGmailGrantIssue,
        message: isGmailGrantIssue
          ? "The EmailJS service requires reconnecting the Gmail account in the EmailJS dashboard. You can deliver your message immediately using the mail client link below."
          : "Automated transmission temporarily unavailable. Click below to deliver via your email client without losing your message.",
      });

      toast({
        title: "Transmission failed",
        description: isGmailGrantIssue
          ? "EmailJS Gmail grant expired. Use the 1-click mailto option below."
          : `Direct email: ${personalInfo.email}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="page-container">
        {/* Header */}
        <div className="mb-12">
          <span className="section-eyebrow">
            <Terminal className="w-3.5 h-3.5" />
            Communication &bull; TTY
          </span>
          <h1 className="section-title">
            Contact &amp; <span className="gradient-text-cyan">Inquiries</span>
          </h1>
          <div className="w-12 h-1 bg-primary rounded-full mb-4" />
          <p className="section-desc">
            Open to Embedded Software Engineer, Embedded Linux Engineer, Linux Device Driver Developer, and Firmware Engineer positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl">
          {/* Left 5 Cols: Direct Contact */}
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

              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                DIRECT CONTACT CHANNELS
              </h2>

              {/* Email */}
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
                  aria-label="Copy email"
                >
                  {copiedField === "Email" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
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
                  aria-label="Copy phone"
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

              {/* Social */}
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

              {/* Resume Download */}
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

          {/* Right 7 Cols: Form */}
          <div className="lg:col-span-7">
            <div className="hw-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Transmit Direct Message</h3>
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
                      placeholder="e.g. Technical Recruiter"
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
                    Subject / Role Opportunity <span className="text-primary">*</span>
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
                    placeholder="Role details, hardware architecture, or interview process..."
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

                {/* Fallback Action when Automated Email Service requires reconnect */}
                {fallbackData && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-3 font-mono mt-3"
                  >
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-300">
                          {fallbackData.isGmailGrantIssue
                            ? "EmailJS Gmail Session Expired"
                            : "Transmission Notice"}
                        </p>
                        <p className="text-[11px] text-amber-200/90 mt-1 leading-relaxed">
                          {fallbackData.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={fallbackData.mailtoUrl}
                        className="btn-primary text-xs py-2 px-3.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Send via Email Client (mailto)
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(personalInfo.email, "Email")}
                        className="btn-outline text-xs py-2 px-3 inline-flex items-center gap-1.5"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        Copy Email Address
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

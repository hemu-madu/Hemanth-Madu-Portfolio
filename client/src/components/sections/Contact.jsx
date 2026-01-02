import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceId = "service_l2kzfr9";
    const templateId = "template_84mfy7j";
    const publicKey = "RRH4Jf0jkFJJvwO-Y";
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Hemanth"
    };
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out! I'll get back to you within 24 hours."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {
    /* Background Grid Pattern */
  }
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {
    /* Floating Background Elements */
  }
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-10 right-[5%] opacity-5"
  >
          <MessageCircle className="w-32 h-32 text-primary" />
        </motion.div>

        <motion.div
    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    className="absolute bottom-10 left-[5%] opacity-5"
  >
          <Mail className="w-24 h-24 text-blue-500" />
        </motion.div>

        <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute top-1/2 left-[-50px] w-64 h-64 border-2 border-primary/5 border-dashed rounded-full"
  />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
          <h2 className="mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="responsive-grid cols-2 items-start">
          {
    /* Contact Information */
  }
          <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="space-y-8"
  >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {
    /* Contact Cards */
  }
            <div className="space-y-6">
              <motion.div
    whileHover={{ x: 5 }}
    className="flex items-center p-6 bg-card dark:bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
  >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-coral-300 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a
    href="mailto:hemanthmadu6454@gmail.com"
    className="text-foreground font-medium hover:text-primary transition-colors"
  >
                    hemanthmadu6454@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
    whileHover={{ x: 5 }}
    className="flex items-center p-6 bg-card dark:bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
  >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a
    href="tel:+919491142102"
    className="text-foreground font-medium hover:text-primary transition-colors"
  >
                    +91 9491142102
                  </a>
                </div>
              </motion.div>

              <motion.div
    whileHover={{ x: 5 }}
    className="flex items-center p-6 bg-card dark:bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
  >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <a
    href="https://maps.app.goo.gl/uazX4YtAJDKZWLP26"
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground font-medium hover:text-primary transition-colors block"
  >
                    Eluru, A.P, India
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {
    /* Contact Form */
  }
          <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
            <div className="hybrid-card p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
                  <p className="text-muted-foreground">I'll respond within 24 hours</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
    type="text"
    name="name"
    id="name"
    value={formData.name}
    onChange={handleInputChange}
    required
    className="block py-4 px-4 w-full text-base text-foreground bg-background shadow-inner rounded-2xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
    placeholder=" "
  />
                    <label
    htmlFor="name"
    className="absolute text-base text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none"
  >
                      Full Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
    type="email"
    name="email"
    id="email"
    value={formData.email}
    onChange={handleInputChange}
    required
    className="block py-4 px-4 w-full text-base text-foreground bg-background shadow-inner rounded-2xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
    placeholder=" "
  />
                    <label
    htmlFor="email"
    className="absolute text-base text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none"
  >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <input
    type="text"
    name="subject"
    id="subject"
    value={formData.subject}
    onChange={handleInputChange}
    required
    className="block py-4 px-4 w-full text-base text-foreground bg-background shadow-inner rounded-2xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
    placeholder=" "
  />
                  <label
    htmlFor="subject"
    className="absolute text-base text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none"
  >
                    Subject
                  </label>
                </div>

                <div className="relative group">
                  <textarea
    name="message"
    id="message"
    value={formData.message}
    onChange={handleInputChange}
    required
    rows={5}
    className="block py-4 px-4 w-full text-base text-foreground bg-background shadow-inner rounded-2xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
    placeholder=" "
  />
                  <label
    htmlFor="message"
    className="absolute text-base text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none"
  >
                    Message
                  </label>
                </div>

                <button
    type="submit"
    disabled={isSubmitting}
    className="w-full h-14 btn-clay flex items-center justify-center text-lg"
  >
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                      <span>Sending Message...</span>
                    </> : <>
                      <Send className="w-6 h-6 mr-3" />
                      <span>Send Message</span>
                    </>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  Contact as default
};

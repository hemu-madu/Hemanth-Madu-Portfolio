import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fadeIn } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { contactFormSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaDribbble } from "react-icons/fa";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I will get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-black section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-white">Get <span className="text-gradient">In Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Feel free to reach out to me for any opportunities, collaborations, or just to say hello. I'll get back to you as soon as possible.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-md">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your Message" 
                              rows={5} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          <span>Send Message</span>
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
              
              <div className="bg-gray-900/80 text-white rounded-xl p-6 md:p-8 shadow-md border border-gray-800">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <MapPin size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-gray-300">Eluru, A.P, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Mail size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-300">hemanthmadu6454@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Phone size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-300">+91 9491142102</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/hemanth-madu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                      <FaLinkedinIn size={18} />
                    </a>
                    <a href="https://github.com/hemu-madu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

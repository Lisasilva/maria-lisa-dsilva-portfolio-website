import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:marialisadsilva@email.com",
      label: "marialisadsilva@email.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/marialisadsilva",
      label: "linkedin.com/in/marialisadsilva",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/marialisadsilva",
      label: "github.com/marialisadsilva",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-forest text-primary-foreground"
      ref={ref}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text text-sage mb-4">Get In Touch</p>
          <h2 className="editorial-heading text-cream">Contact</h2>
          <p className="mt-4 body-large text-cream/70 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities in Data Engineering,
            Business Analysis, and Data Analytics roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label-text text-sage block mb-2">Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-cream"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="label-text text-sage block mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-cream"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="label-text text-sage block mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 focus:border-cream min-h-[150px]"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-cream text-forest hover:bg-cream/90 font-medium"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl text-cream mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cream/5 border border-cream/10 hover:border-cream/30 transition-colors group"
                  >
                    <link.icon
                      size={20}
                      className="text-sage group-hover:text-cream transition-colors"
                    />
                    <div>
                      <p className="text-sm text-sage">{link.name}</p>
                      <p className="text-cream">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-8 border-t border-cream/10">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-4 border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
              >
                <FileText size={20} />
                <span>
                  <p className="text-sm text-sage">Download</p>
                  <p className="font-medium">Resume / CV</p>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

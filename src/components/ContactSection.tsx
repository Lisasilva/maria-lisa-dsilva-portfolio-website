import { getResumeHref } from "@/lib/resume";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/marialisadsilva",
      label: "linkedin.com/in/marialisadsilva",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Lisasilva",
      label: "github.com/Lisasilva",
    },
  ];

  return (
    <section
      id="contact"
      className="portfolio-accent section-padding bg-forest text-primary-foreground"
      ref={ref}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text accent-text mb-4">Get In Touch</p>
          <h2 className="editorial-heading text-cream">Contact</h2>
          <p className="mt-4 body-large text-cream/70 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities in Data Engineering,
            Business Analysis, and Data Analytics roles.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {/* Email Button */}
          <motion.a
            href="mailto:marialisa917@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 accent-button font-medium text-lg  transition-colors"
          >
            <Mail size={24} />
            Email Me
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 accent-outline border transition-colors group"
              >
                <link.icon
                  size={20}
                  className="accent-text group-hover:text-inherit transition-colors"
                />
                <span className="text-inherit">{link.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Resume Download */}
          <motion.a
            href={getResumeHref()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-4 border accent-outline  transition-colors"
          >
            <FileText size={20} />
            <span>
              <p className="text-sm text-inherit">Download</p>
              <p className="font-medium">Resume / CV</p>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

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

        <div className="flex flex-col items-center gap-8">
          {/* Email Button */}
          <motion.a
            href="mailto:marialisa917@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-forest font-medium text-lg hover:bg-cream/90 transition-colors"
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
                className="flex items-center gap-3 px-6 py-3 bg-cream/5 border border-cream/10 hover:border-cream/30 transition-colors group"
              >
                <link.icon
                  size={20}
                  className="text-sage group-hover:text-cream transition-colors"
                />
                <span className="text-cream">{link.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Resume Download */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-4 border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
          >
            <FileText size={20} />
            <span>
              <p className="text-sm text-sage">Download</p>
              <p className="font-medium">Resume / CV</p>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { getResumeHref } from "@/lib/resume";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from "lucide-react";
import sunsetMeadowImg from "@/assets/backgrounds/sunset-meadow.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/marialisadsilva",
      label: "/in/marialisadsilva",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Lisasilva",
      label: "@Lisasilva",
    },
  ];

  return (
    <section
      id="contact"
      className="portfolio-accent section-padding bg-forest text-primary-foreground"
      ref={ref}
    >
      <PaintingBackdrop src={sunsetMeadowImg} position="center 70%" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text accent-text mb-4">06 · Get In Touch</p>
          <h2 className="editorial-heading text-cream">Let's <em className="accent-gold">talk.</em></h2>
          <p className="mt-4 body-large text-cream/70 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities in Data Engineering,
            Business Analysis, and Data Analytics roles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Primary: email */}
          <motion.a
            href="mailto:marialisa917@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 accent-card border hover:-translate-y-2"
          >
            <span className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full accent-button accent-button--solid border flex items-center justify-center shrink-0">
                <Mail size={22} />
              </span>
              <span className="text-left">
                <span className="block label-text accent-text">Email</span>
                <span className="block font-heading text-xl md:text-2xl text-cream">marialisa917@gmail.com</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-6 py-3 accent-button accent-button--solid border font-medium text-sm group-hover:shadow-lg">
              Say hello
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>

          {/* Secondary: three equal tiles */}
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {[
              ...socialLinks.map((link) => ({ ...link, external: true })),
              {
                name: "Resume",
                icon: FileText,
                href: getResumeHref(),
                label: "Download CV",
                external: true,
              },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                className="group flex items-center gap-4 p-5 accent-card border hover:-translate-y-2"
              >
                <span className="w-10 h-10 rounded-full border accent-outline flex items-center justify-center shrink-0 group-hover:border-[hsl(var(--gold))]">
                  <link.icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block label-text accent-text">{link.name}</span>
                  <span className="block text-sm text-cream truncate">{link.label}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

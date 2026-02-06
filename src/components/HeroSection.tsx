import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import profileImage from "@/assets/profile-portrait.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-forest"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground order-2 lg:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4"
          >
            Maria Lisa
            <br />
            D Silva
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sage text-2xl md:text-3xl font-heading tracking-wide mb-8"
          >
            Data Engineer | Dubai, UAE
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="body-large text-cream/80 max-w-lg mb-10"
          >
            Data Engineer specializing in building robust, scalable data
            pipelines and enterprise data platforms, with hands-on experience
            in data analysis, business intelligence, full-stack development,
            and applied machine learning. Currently based in Dubai, UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-forest font-medium text-sm tracking-wide hover:bg-cream/90 transition-colors"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream font-medium text-sm tracking-wide hover:bg-cream/10 transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream font-medium text-sm tracking-wide hover:bg-cream/10 transition-colors"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-sage/20 -z-10" />
            <img
              src={profileImage}
              alt="Maria Lisa D Silva"
              className="w-72 md:w-80 lg:w-96 h-auto object-cover grayscale"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-cream/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

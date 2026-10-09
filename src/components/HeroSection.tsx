import { getResumeHref } from "@/lib/resume";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { useCallback } from "react";
import profileImage from "@/assets/profile-portrait.png";
import forestMistImg from "@/assets/backgrounds/forest-mist.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

const HeroSection = () => {
  // Prevent right-click context menu
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  }, []);

  // Prevent drag
  const handleDragStart = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    return false;
  }, []);

  return (
    <section
      id="home"
      className="portfolio-accent min-h-screen relative flex items-center bg-forest"
    >
      <PaintingBackdrop src={forestMistImg} position="center 40%" />

      <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32">
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
            <span className="sr-only"> — Data Engineer Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="accent-text text-2xl md:text-3xl font-heading tracking-wide mb-8"
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border accent-outline font-medium text-sm tracking-wide transition-colors"
            >
              <ArrowDown size={16} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border accent-outline font-medium text-sm tracking-wide transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href={getResumeHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border accent-outline font-medium text-sm tracking-wide transition-colors"
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
          <div 
            className="relative group cursor-default select-none"
            onContextMenu={handleContextMenu}
          >
            <div className="absolute -inset-4 accent-frame -z-10 transition-all duration-500" />
            <div className="overflow-hidden bg-[#F1ECE2]">
              <img
                src={profileImage}
                alt="Maria Lisa D Silva"
                className="w-72 md:w-80 lg:w-96 h-auto object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                draggable={false}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
                style={{
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  WebkitTouchCallout: 'none',
                  maxWidth: '100%',
                }}
              />
            </div>
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

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Globe, Award, Palette, ExternalLink } from "lucide-react";

import silentMeadowImg from "@/assets/paintings/silent-meadow.jpeg";
import peakyManImg from "@/assets/paintings/peaky-man.jpg";
import redBloomsImg from "@/assets/paintings/red-blooms.png";
import frostedWoodsImg from "@/assets/paintings/frosted-woods.jpeg";
import gentleSorrowImg from "@/assets/paintings/gentle-sorrow.jpeg";
import furyWavesImg from "@/assets/paintings/fury-waves.jpeg";

const languages = [
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Fluent" },
  { language: "Kannada", level: "Native" },
  { language: "Konkani", level: "Native" },
  { language: "French", level: "Beginner" },
];

const paintings = [
  { id: 1, src: silentMeadowImg, alt: "The Silent Meadow", title: "The Silent Meadow" },
  { id: 2, src: peakyManImg, alt: "The Peaky Man", title: "The Peaky Man" },
  { id: 3, src: redBloomsImg, alt: "Red Blooms in Earnest", title: "Red Blooms in Earnest" },
  { id: 4, src: frostedWoodsImg, alt: "Frosted Woods", title: "Frosted Woods" },
  { id: 5, src: gentleSorrowImg, alt: "Gentle Sorrow", title: "Gentle Sorrow" },
  { id: 6, src: furyWavesImg, alt: "Fury Waves", title: "Fury Waves" },
];

const BeyondDataSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      id="beyond"
      className="section-padding bg-background"
      ref={ref}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">The Human Side</p>
          <h2 className="editorial-heading">Beyond Data</h2>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe size={24} className="text-forest" />
            <h3 className="font-heading text-2xl md:text-3xl">Languages I Speak</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-forest/10 border border-forest/20 p-5 text-center hover:border-forest/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <p className="font-heading text-lg font-medium text-foreground">
                  {lang.language}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NCC Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award size={24} className="text-forest" />
            <h3 className="font-heading text-2xl md:text-3xl">NCC Experience</h3>
          </div>

          <div className="bg-forest/10 border border-forest/20 p-8 md:p-10">
            <p className="body-large text-muted-foreground max-w-2xl">
              Former NCC cadet, an experience that strengthened my discipline,
              teamwork, and leadership skills.
            </p>
            <a
              href="/NCC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-forest font-medium hover:underline transition-all"
            >
              <span>View NCC Certificate</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        {/* Creative Corner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Palette size={24} className="text-forest" />
            <h3 className="font-heading text-2xl md:text-3xl">Creative Corner</h3>
          </div>

          <p className="body-large text-muted-foreground max-w-2xl mb-10">
            Painting is my creative escape — a space where I explore patience,
            detail, and expression beyond logic and code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group relative overflow-hidden cursor-default select-none"
                onContextMenu={handleContextMenu}
              >
                <div className="aspect-[3/4] overflow-hidden shadow-lg relative">
                  <img
                    src={painting.src}
                    alt={painting.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 pointer-events-none"
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
                  
                  {/* Hover overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pointer-events-none">
                    <div className="p-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-heading text-xl md:text-2xl text-cream font-medium tracking-wide">
                        {painting.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(74,93,78,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Copyright Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center text-sm text-muted-foreground mt-12 italic"
          >
            All artworks displayed are original creations by Maria Lisa D Silva. Unauthorized reproduction or commercial use is prohibited.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondDataSection;

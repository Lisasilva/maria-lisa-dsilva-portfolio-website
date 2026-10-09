import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Globe, Award, Palette, ExternalLink } from "lucide-react";

import silentMeadowImg from "@/assets/gallery/silent-meadow.jpg";
import peakyManImg from "@/assets/gallery/peaky-man.jpg";
import redBloomsImg from "@/assets/gallery/red-blooms.jpg";
import frostedWoodsImg from "@/assets/gallery/frosted-woods.jpg";
import gentleSorrowImg from "@/assets/gallery/gentle-sorrow.jpg";
import furyWavesImg from "@/assets/gallery/fury-waves.jpg";
import sunsetSkyImg from "@/assets/backgrounds/sunset-sky.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

const languages = [
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Fluent" },
  { language: "Kannada", level: "Fluent" },
  { language: "Konkani", level: "Native" },
  { language: "French", level: "Beginner" },
];

const paintings = [
  { id: 1, src: silentMeadowImg, ratio: "638 / 900", title: "The Silent Meadow" },
  { id: 2, src: peakyManImg, ratio: "675 / 900", title: "The Peaky Man" },
  { id: 3, src: redBloomsImg, ratio: "526 / 719", title: "Red Blooms in Earnest" },
  { id: 4, src: frostedWoodsImg, ratio: "900 / 675", title: "Frosted Woods" },
  { id: 5, src: gentleSorrowImg, ratio: "665 / 900", title: "Gentle Sorrow" },
  { id: 6, src: furyWavesImg, ratio: "652 / 900", title: "Fury Waves" },
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
      className="portfolio-accent section-padding bg-background"
      ref={ref}
    >
      <PaintingBackdrop src={sunsetSkyImg} side="right" position="center top" />
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">05 · The Human Side</p>
          <h2 className="editorial-heading">Beyond Data</h2>
        </motion.div>

        {/* Creative Corner: the reveal */}
        <motion.div
          id="creative-corner"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="scroll-mt-28 mb-24"
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-16 items-end mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Palette size={20} className="accent-text" />
                <span className="label-text">Creative Corner</span>
              </div>
              <h3 className="font-heading text-4xl md:text-5xl leading-tight">
                Plot twist: <em className="accent-text">I paint too.</em>
              </h3>
            </div>
            <p className="body-large text-muted-foreground">
              Remember those soft backgrounds behind every section? Not stock
              photos. Every one of them is a painting of mine. Here they are
              properly, without the haze.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
            {paintings.map((painting, index) => (
              <motion.figure
                key={painting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                className="gallery-mat break-inside-avoid mb-8 select-none"
                onContextMenu={handleContextMenu}
              >
                {/* Drawn as a background with no <img>, so there is no "Save image" or drag-out */}
                <div
                  role="img"
                  aria-label={painting.title}
                  className="w-full bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url(${painting.src})`, aspectRatio: painting.ratio }}
                  onDragStart={handleDragStart}
                />
                <figcaption className="py-4 text-center">
                  <span className="font-heading italic text-lg text-foreground">{painting.title}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4 italic">
            All artworks displayed are original creations by Maria Lisa D Silva. Unauthorized reproduction or commercial use is prohibited.
          </p>
        </motion.div>

        {/* Languages, with NCC as a short footnote-style line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="accent-card border p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe size={20} className="accent-text" />
            <h3 className="font-heading text-2xl">Languages I Speak</h3>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {languages.map((lang) => (
              <li key={lang.language} className="border-l accent-edge pl-4">
                <p className="font-heading text-lg">{lang.language}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t accent-edge flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 shrink-0">
              <Award size={18} className="accent-text" />
              <span className="label-text">NCC · 2015–2017</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              Former member of the National Cadet Corps (NCC) (2015–2017). The experience strengthened my discipline, leadership, and teamwork while training me in structured decision-making, responsibility, and performing effectively under pressure.
            </p>
            <a
              href="/NCC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 shrink-0 text-sm accent-text font-medium hover:underline"
            >
              Certificate
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondDataSection;

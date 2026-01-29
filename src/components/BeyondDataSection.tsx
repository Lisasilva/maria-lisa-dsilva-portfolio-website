import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, Palette, ExternalLink } from "lucide-react";

const languages = [
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Fluent" },
  { language: "Kannada", level: "Native" },
  { language: "Konkani", level: "Native" },
  { language: "French", level: "Beginner" },
];

const paintings = [
  { id: 1, placeholder: true },
  { id: 2, placeholder: true },
  { id: 3, placeholder: true },
  { id: 4, placeholder: true },
  { id: 5, placeholder: true },
  { id: 6, placeholder: true },
];

const BeyondDataSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                className="bg-forest/5 border border-forest/10 p-5 text-center hover:border-forest/30 transition-colors"
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

          <div className="bg-forest/5 border border-forest/10 p-8 md:p-10">
            <p className="body-large text-muted-foreground max-w-2xl">
              Former NCC cadet, an experience that strengthened my discipline,
              teamwork, and leadership skills.
            </p>
            <a
              href="/ncc-certificate.pdf"
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {paintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="aspect-square bg-forest/5 border border-forest/10 overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 group-hover:bg-forest/10 transition-colors">
                  <Palette size={32} className="opacity-30 group-hover:opacity-50 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6 italic">
            Add your paintings to showcase your artwork
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondDataSection;

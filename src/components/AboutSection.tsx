import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Palette, Languages } from "lucide-react";
import redBloomsImg from "@/assets/backgrounds/red-blooms.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = {
    qualification: "Bachelor of Technology",
    degree: "Computer & Communication Engineering",
    minor: "Minor in Big Data Analytics",
    school: "Manipal Institute of Technology, Manipal, India",
    years: "2020–2024",
  };

  return (
    <section id="about" className="portfolio-accent section-padding bg-background" ref={ref}>
      <PaintingBackdrop src={redBloomsImg} side="right" position="center" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">01 · Get to Know Me</p>
          <h2 className="editorial-heading">About</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 body-large text-muted-foreground">
              <p>
                I enjoy building data systems that are reliable, scalable, and
                easy to work with. Whether it's modernizing enterprise data
                platforms or building personal projects from scratch, I like
                understanding how things work under the hood and solving
                problems one layer at a time.
              </p>
              <p>
                Outside the world of data, I paint, maintain my Duolingo streak, and
                occasionally dive into side projects just to explore a new
                technology or idea.
              </p>
            </div>

            {/* Personal Interests */}
            <div className="mt-8 flex gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Palette size={20} />
                <span className="text-sm">Art & Painting</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Languages size={20} />
                <span className="text-sm">Language Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={24} />
              <h3 className="font-heading text-2xl">Education</h3>
            </div>

            <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-l-2 accent-edge pl-6 py-2"
            >
              <h4 className="font-heading font-bold text-3xl leading-snug">
                {education.qualification}
              </h4>
              <p className="font-bold text-lg mt-2">{education.degree}</p>
              <p className="font-bold mt-1">{education.minor}</p>
              <p className="italic text-muted-foreground mt-4">
                {education.school}
              </p>
              <p className="italic text-sm text-muted-foreground mt-1">
                {education.years}
              </p>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Palette, Languages } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Computer & Communication Engineering",
      school: "Manipal Institute of Technology",
      minor: "Minor in Big Data Analytics",
      years: "2020–2024",
    },
    {
      degree: "12th Grade",
      school: "Madhava Kripa School, Manipal",
      years: "",
    },
    {
      degree: "10th Grade",
      school: "S.M.S. English Medium School, Brahmavara",
      years: "",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">Get to Know Me</p>
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
                I'm a Data Engineer with a passion for designing and
                implementing scalable data solutions that drive business
                insights. My expertise spans across Big Data ecosystems, BI
                visualizations, and applied machine learning.
              </p>
              <p>
                With hands-on experience in enterprise-level data migrations,
                ETL pipeline development, and real-time analytics, I thrive on
                transforming complex data challenges into elegant, efficient
                solutions.
              </p>
              <p>
                Outside the world of data, I express my creativity through
                painting and staying committed to my Duolingo streak.
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
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="border-l-2 border-forest/20 pl-6 py-2"
                >
                  <h4 className="font-medium text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.school}</p>
                  {edu.minor && (
                    <p className="text-sm text-forest">{edu.minor}</p>
                  )}
                  {edu.years && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.years}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

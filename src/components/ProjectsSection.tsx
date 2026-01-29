import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Supply Chain Management Platform",
    category: "Blockchain & Java",
    description:
      "Built a decentralized supply chain tracking system using blockchain technology to ensure transparency and traceability across the entire supply chain.",
    tech: ["Java", "Blockchain", "Smart Contracts", "REST API"],
    impact: "Improved supply chain transparency by 60%",
  },
  {
    title: "Crime Data Mining & Analysis",
    category: "Data Science",
    description:
      "Developed clustering models to analyze crime patterns and predict high-risk areas using advanced data mining techniques.",
    tech: ["Python", "Scikit-learn", "Clustering", "Data Visualization"],
    impact: "Identified 15+ crime pattern clusters",
  },
  {
    title: "AI Document De-duplication Pipeline",
    category: "NLP & GenAI",
    description:
      "Created an intelligent document processing pipeline using NLP and GPT to identify and remove duplicate documents in large datasets.",
    tech: ["Python", "NLP", "GPT API", "Vector Embeddings"],
    impact: "Reduced document redundancy by 40%",
  },
  {
    title: "Vehicle Financing BI Dashboard",
    category: "BI & Analytics",
    description:
      "Designed comprehensive Power BI dashboard with ML-driven predictions for vehicle financing risk assessment and portfolio analysis.",
    tech: ["Power BI", "DAX", "Python", "Machine Learning"],
    impact: "Enhanced decision-making accuracy by 35%",
  },
  {
    title: "IR Sensor Distance Measurement",
    category: "Embedded Systems",
    description:
      "Engineered an embedded system for precise distance measurement using infrared sensors with real-time data processing.",
    tech: ["Arduino", "C++", "IR Sensors", "Signal Processing"],
    impact: "Achieved ±2mm measurement accuracy",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">Featured Work</p>
          <h2 className="editorial-heading">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-card border border-border hover:border-forest/30 transition-all duration-300 hover-lift"
            >
              {/* Project Header */}
              <div className="bg-forest p-6">
                <p className="label-text text-sage mb-2">{project.category}</p>
                <h3 className="font-heading text-xl md:text-2xl text-cream">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm">
                    <span className="text-forest font-medium">Impact:</span>{" "}
                    <span className="text-muted-foreground">
                      {project.impact}
                    </span>
                  </p>
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vehicle Financing BI Dashboard",
    category: "BI & Analytics",
    description:
      "Designed comprehensive Power BI dashboard with ML-driven predictions for vehicle financing risk assessment and portfolio analysis.",
    tech: ["Power BI", "DAX", "Python", "Machine Learning"],
    impact: "Enhanced decision-making accuracy by 35%",
    link: "https://github.com/Lisasilva/Vehicle-Financing-Performance-Dashboard-for-Automotive-Finance",
  },
  {
    title: "AI Document De-duplication Pipeline",
    category: "NLP & GenAI",
    description:
      "Created an intelligent document processing pipeline using NLP and GPT to identify and remove duplicate documents in large datasets.",
    tech: ["Python", "NLP", "GPT API", "Vector Embeddings"],
    impact: "Reduced document redundancy by 40%",
    link: "https://github.com/Lisasilva/AI-Powered-Document-De-Duplication-and-Consolidation",
  },
  {
    title: "Crime Data Mining & Analysis",
    category: "Data Science",
    description:
      "Developed clustering models to analyze crime patterns and predict high-risk areas using advanced data mining techniques.",
    tech: ["Python", "Scikit-learn", "Clustering", "Data Visualization"],
    impact: "Identified 15+ crime pattern clusters",
    link: "https://github.com/Lisasilva/Crime-Analysis-in-India",
  },
  {
    title: "Supply Chain Management Platform",
    category: "Blockchain & Java",
    description:
      "Built a decentralized supply chain tracking system using blockchain technology to ensure transparency and traceability across the entire supply chain.",
    tech: ["Java", "Blockchain", "Smart Contracts", "REST API"],
    impact: "Improved supply chain transparency by 60%",
    link: "https://github.com/Lisasilva/Warehouse-Simulation",
  },
  {
    title: "IR Sensor Distance Measurement",
    category: "Embedded Systems",
    description:
      "Engineered an embedded system for precise distance measurement using infrared sensors with real-time data processing.",
    tech: ["Arduino", "C++", "IR Sensors", "Signal Processing"],
    impact: "Achieved ±2mm measurement accuracy",
    link: "https://github.com/Lisasilva/Distance-Measurement-Using-IR-Sharp-Sensor",
  },
  {
    title: "The Warehouse Store Application",
    category: "Database Systems",
    description:
      "A C# Windows Forms e-commerce app with SQL Plus backend, using normalized databases and ER modeling for managing products, carts, inventory, and orders.",
    tech: ["C#", "Windows Forms", "SQL Plus (Oracle)", "ER Diagrams", "Database Normalization"],
    impact: "Enabled product browsing, cart, order, and inventory management for customers and admins.",
    link: "https://github.com/Lisasilva/The-Warehouse-Store-using-C-Sharp",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-forest" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text text-sage mb-4">Featured Work</p>
          <h2 className="editorial-heading text-cream">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-charcoal/50 border border-sage/20 hover:border-sage/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(74,93,78,0.25)] flex flex-col"
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <p className="text-xs font-medium tracking-widest uppercase text-sage mb-2">
                  {project.category}
                </p>
                <h3 className="font-heading text-xl text-cream group-hover:text-sage/90 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="px-6 pb-6 flex-grow flex flex-col">
                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-sage/10 border border-sage/20 text-xs text-cream/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-sage/20 mb-4">
                  <p className="text-sm">
                    <span className="text-sage font-medium">Impact:</span>{" "}
                    <span className="text-cream/70">{project.impact}</span>
                  </p>
                </div>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* View Project Button */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-sage bg-sage/20 text-sage hover:bg-sage hover:text-forest hover:border-sage transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      View Project
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-sage/20 text-cream/50 cursor-not-allowed"
                    disabled
                  >
                    <Github size={16} className="mr-2" />
                    Coming Soon
                  </Button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Code, Database, Layers, Workflow, Wrench } from "lucide-react";
import CertificationsSection from "./CertificationsSection";
import horseImg from "@/assets/backgrounds/gentle-sorrow.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

// Shown three per row on large screens, in this order
const skillCategories = [
  {
    title: "Data Engineering",
    icon: Workflow,
    skills: ["Databricks", "ETL/ELT", "Medallion Architecture", "dbt", "DuckDB", "MotherDuck", "API Ingestion", "Data Migration", "Incremental Loading", "Data Quality"],
  },
  {
    title: "Big Data & Processing",
    icon: Layers,
    skills: ["Apache Spark", "Spark SQL", "Airflow", "Batch Processing", "Pipeline Orchestration"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Greenplum", "MySQL", "Oracle", "DBeaver"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL", "Pandas", "Java", "Bash / Shell", "Git"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["GitHub", "GitHub Actions", "CI/CD", "VS Code", "Postman", "Jupyter Notebooks", "Cloudflare Pages", "Claude Code", "Lovable", "Google Colab"],
  },
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "DAX", "Excel", "Observable Framework", "scikit-learn"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="portfolio-accent section-padding bg-background" ref={ref}>
      <PaintingBackdrop src={horseImg} side="center" position="center 35%" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">03 · Technical Expertise</p>
          <h2 className="editorial-heading">Skills & Certifications</h2>
        </motion.div>

        {/* Skills Grid - Compact Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="accent-card p-5 border transition-colors hover-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <category.icon size={22} className="accent-text" />
                <h3 className="font-heading text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 accent-key border text-xs hover:-translate-y-1 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <CertificationsSection />
    </section>
  );
};

export default SkillsSection;

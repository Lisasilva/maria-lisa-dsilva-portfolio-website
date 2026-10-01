import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  BarChart3,
  Globe,
  Wrench,
} from "lucide-react";
import CertificationsSection from "./CertificationsSection";

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      "Databricks",
      "Airflow",
      "Spark SQL",
      "Greenplum",
      "ETL / ELT",
      "CI/CD",
      "dbt",
      "DuckDB",
      "MotherDuck",
      "API Ingestion",
      "Data Migration",
      "Orchestration",
      "Medallion Architecture",
      "PostgreSQL",
      "Incremental Loading",
      "Data Quality",
      "Pandas",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["SQL", "Python", "Java", "Bash / Shell Scripting", "Git"],
  },
  {
    title: "BI & Analytics",
    icon: BarChart3,
    skills: [
      "Power BI",
      "Tableau",
      "DAX",
      "Excel",
      "Data Visualization",
      "Observable Framework",
      "Interactive Map Dashboards",
    ],
  },
  {
    title: "Frameworks & Web",
    icon: Globe,
    skills: ["Spring Boot", "Hibernate", "REST APIs", "HTML", "CSS", "JDBC", "JPA"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "GitHub",
      "GitHub Actions",
      "DBeaver",
      "Postman",
      "VS Code",
      "Cloudflare Pages",
      "Claude Code",
      "Lovable",
      "Google Colab",
      "Jupyter Notebooks",
      "MySQL Workbench",
      "RapidMiner",
      "SQL Plus",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">Technical Expertise</p>
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
              className="bg-forest/5 p-5 border border-forest/20 hover:border-forest/40 transition-colors hover-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <category.icon size={22} className="text-forest" />
                <h3 className="font-heading text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-forest/10 border border-forest/15 text-xs text-muted-foreground hover:-translate-y-0.5 hover:border-forest/30 transition-all duration-200 cursor-default"
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

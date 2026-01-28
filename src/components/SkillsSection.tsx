import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  BarChart3,
  Globe,
  Wrench,
  Award,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["SQL", "Python", "Java", "C/C++"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      "Databricks",
      "SparkSQL",
      "Airflow",
      "Greenplum",
      "Talend",
      "ETL",
      "CI/CD",
    ],
  },
  {
    title: "BI & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "DAX", "Excel"],
  },
  {
    title: "Frameworks & Web",
    icon: Globe,
    skills: ["Spring Boot", "Hibernate", "REST APIs", "HTML", "CSS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "GitHub",
      "Postman",
      "DBeaver",
      "MySQL Workbench",
      "RapidMiner",
      "Android Studio",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/aws-cloud-practitioner",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    link: "https://credentials.databricks.com/data-engineer-associate",
  },
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    link: "https://credentials.databricks.com/data-engineer-professional",
  },
  {
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    link: "https://www.credly.com/badges/snowpro-core",
  },
  {
    name: "Generative AI Fundamentals",
    issuer: "Databricks",
    link: "https://credentials.databricks.com/generative-ai-fundamentals",
  },
  {
    name: "Big Data & Machine Learning Specialization",
    issuer: "UC San Diego (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/specialization",
  },
  {
    name: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/specialization",
  },
  {
    name: "Power BI Data Analyst",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/certificate",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary" ref={ref}>
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-background p-6 border border-border hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon size={24} className="text-forest" />
                <h3 className="font-heading text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-muted text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award size={24} className="text-forest" />
            <h3 className="font-heading text-2xl">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="bg-background p-4 border border-forest/20 hover:border-forest/40 hover:bg-forest/5 transition-colors cursor-pointer block"
              >
                <h4 className="font-medium text-sm mb-1 hover:text-forest transition-colors">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

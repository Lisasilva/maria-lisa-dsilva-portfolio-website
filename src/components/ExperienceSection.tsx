import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "Genpact",
    period: "Oct 2024 – Dec 2025",
    description: [
      "Contributed to large-scale Databricks migration spanning 35+ domains, 60k+ objects, 15k+ jobs, 3k+ reports, 120+ sources.",
      "Migrated 900+ Greenplum/PostgreSQL objects to Databricks Enterprise Data Lake using SparkSQL Medallion Architecture.",
      "Developed PXF/reverse-PXF connectors, views, and DDL scripts enabling ingestion from S3, Oracle, Smartsheet, Box.",
      "Engineered SparkSQL ETL pipelines supporting scalable ingestion, transformation, and egress across enterprise data domains.",
      "Re-architected orchestration by migrating Talend TAC workflows to Airflow DAGs with CRON scheduling, GitHub YAML CI/CD, DBeaver metadata.",
      "Achieved 98%+ data accuracy via log diagnostics, SIT validation, and RCA across distributed Spark ETL pipelines.",
    ],
    achievements: [
      "Awarded Genpact Bronze Performance Excellence for technical ownership and delivery in the migration program.",
      "Selected Top 20 Performer (<4 YOE); inducted into Technical Leadership Development Program.",
    ],
  },
  {
    title: "GenAI Intern",
    company: "Genpact",
    period: "Feb 2024 – Jul 2024",
    description: [
      "Built an AI-powered document deduplication system using NLTK, TF-IDF, LLMs, Sentence Transformers, and the Affinity Propagation algorithm, reducing average document length by 54.6%, eliminating .docx duplicates (0.97 semantic similarity), and improving data clarity.",
      "Developed a Vehicle Financing Performance Dashboard integrating Python ML models (85% accuracy) with SQL/DAX-driven data cleaning, feature engineering, visualization, and KPI tracking, increasing loan approvals by 20% while reducing defaults by 25%.",
    ],
  },
  {
    title: "Campus Ambassador",
    company: "Bazaarvoice",
    period: "Mar 2023 – Dec 2023",
    description: [
      "Represented Bazaarvoice on campus, promoting brand awareness",
      "Organized tech events and workshops for students",
    ],
  },
  {
    title: "Software Development Intern",
    company: "NMBR Systems",
    period: "Jun 2023 – Jul 2023",
    description: [
      "Built a Java/Spring Boot management system integrating MySQL, REST APIs, and Postman testing for reliable data operations.",
      "Optimized SQL queries, implemented JPA/Hibernate ORM with Java Streams to boost CRUD efficiency, workflows, and software efficiency.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "D'Souza Metal Cutting Pvt Ltd",
    period: "Jun 2022 – Aug 2022",
    description: [
      "Developed web solutions for business operations",
      "Enhanced digital presence through modern web technologies",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding bg-forest text-primary-foreground"
      ref={ref}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text text-sage mb-4">Professional Journey</p>
          <h2 className="editorial-heading text-cream">Experience</h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-cream/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-sage rounded-full border-2 border-cream/40" />

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-cream/10 p-6 border border-cream/20 hover:border-cream/40 transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase size={16} className="text-sage" />
                    <span className="label-text text-sage">{exp.company}</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-cream mb-2">
                    {exp.title}
                  </h3>
                  <div className={`flex items-center gap-2 text-cream/60 text-sm mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <ul className={`space-y-2 text-cream/70 text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-sage mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

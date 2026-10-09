import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase } from "lucide-react";
import furyWavesImg from "@/assets/backgrounds/fury-waves.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

const experiences: { title: string; company: string; period: string; description: string[]; achievements?: string[] }[] = [
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
      "Developed a responsive and intuitive UI for a PDF invoice generation application using HTML and CSS.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="portfolio-accent section-padding bg-forest text-primary-foreground"
      ref={ref}
    >
      <PaintingBackdrop src={furyWavesImg} position="center 55%" />
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-text accent-text mb-4">02 · Professional Journey</p>
          <h2 className="editorial-heading text-cream">Experience</h2>
        </motion.div>

        {/* Single-column timeline: dates on the left rail, roles on the right */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[7px] md:left-[199px] top-0 bottom-0 w-px accent-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative grid md:grid-cols-[176px_1fr] gap-3 md:gap-12 pl-8 md:pl-0 mb-10 last:mb-0"
            >
              <div className="md:text-right md:pt-6">
                <p className="font-heading text-lg text-cream/90 leading-snug">{exp.period}</p>
              </div>

              <span className="absolute left-0 md:left-[192px] top-1.5 md:top-8 w-[15px] h-[15px] rounded-full accent-dot border-[3px]" />

              <div className="accent-card p-6 md:p-7 border">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={15} className="accent-text" />
                  <span className="label-text accent-text">{exp.company}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl card-title mb-4">{exp.title}</h3>
                <ul className="space-y-2 card-body text-sm leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="accent-gold mt-[7px] w-1 h-1 rounded-full bg-current shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.achievements && (
                  <div className="mt-5 pt-4 border-t accent-edge">
                    <p className="label-text accent-gold mb-3">Achievements</p>
                    <ul className="space-y-2 card-body text-sm leading-relaxed">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Award size={14} className="accent-gold mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

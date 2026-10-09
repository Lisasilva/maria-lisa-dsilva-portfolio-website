import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Award, Briefcase } from "lucide-react";
import furyWavesImg from "@/assets/backgrounds/fury-waves.jpg";
import PaintingBackdrop from "@/components/PaintingBackdrop";

const experiences: { title: string; company: string; period: string; description: string[]; achievements?: string[]; link?: { label: string; href: string } }[] = [
  {
    title: "Data Engineer",
    company: "Genpact",
    period: "Oct 2024 – Dec 2025",
    description: [
      "Engineered Spark SQL ELT migrations of 900+ Greenplum/PostgreSQL objects across 15+ domains to Databricks Lakehouse (Medallion Architecture), owning 300+ end to end: DDL conversion, schema mapping, transformations, views, data validation.",
      "Migrated PXF/reverse-PXF external tables and data exchange workflows, recreating Greenplum read/write patterns using Spark SQL, Databricks external tables and AWS S3 storage across Oracle, MySQL, Smartsheet, Box and other enterprise sources.",
      "Modernized legacy Talend TAC ingestion/egress workflows into scheduled Airflow DAGs with YAML-based GitHub CI/CD and DBeaver metadata configurations, boosting pipeline automation by ~80%.",
      "Achieved 98%+ data accuracy via Spark pipeline validation, SQL reconciliation, log diagnostics, root cause analysis (RCA) and SIT testing, resolving schema, transformation and data issues with business stakeholders.",
      "Awarded Bronze Performance Excellence and selected as a Top 20 Performer. Inducted into the Technical Leadership Development program.",
    ],
  },
  {
    title: "Co-founder",
    company: "Peelahaati",
    period: "Mar 2025 – Oct 2025",
    description: [
      "Co-founded Peelahaati, an artisan-focused e-commerce initiative connecting Indian craftsmen with customers seeking authentic handmade products.",
      "Led early-stage business development, brand strategy, artisan partnerships, product curation, and operational planning while establishing marketplace processes and improving workflows to support scalable growth.",
    ],
    link: { label: "linktr.ee/peelahaati", href: "https://linktr.ee/peelahaati" },
  },
  {
    title: "GenAI Intern",
    company: "Genpact",
    period: "Feb 2024 – Jul 2024",
    description: [
      "Built an AI-powered document deduplication system (NLTK, TF-IDF, LLMs, Sentence Transformers, Affinity Propagation), reducing average document length by 54.6% and eliminating .docx duplicates (0.97 semantic similarity).",
      "Developed a Vehicle Financing Performance Dashboard with Python ML models (85% accuracy), SQL/DAX data cleaning, feature engineering, visualization and KPIs, raising loan approvals by 20% and cutting defaults by 25%.",
    ],
  },
  {
    title: "Campus Ambassador",
    company: "Bazaarvoice",
    period: "Mar 2023 – Dec 2023",
    description: [
      "Represented Bazaarvoice on campus by promoting brand awareness, organizing tech events and workshops for students.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "NMBR Systems",
    period: "Jun 2023 – Jul 2023",
    description: [
      "Built a Java/Spring Boot management system with MySQL, REST APIs and Postman-tested CRUD operations.",
      "Optimized SQL queries and implemented JPA/Hibernate ORM with Java Streams, reducing manual effort.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "D'Souza Metal Cutting Pvt Ltd",
    period: "Jun 2022 – Aug 2022",
    description: [
      "Developed a responsive HTML/CSS UI for PDF invoice generation, cutting manual processing time by 50%.",
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
      <div className="container-wide relative z-10">
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
        <div className="relative max-w-6xl mx-auto">
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

              <div className="accent-card p-6 md:p-7 border hover:-translate-y-1">
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
                {exp.link && (
                  <a
                    href={exp.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium accent-gold hover:underline underline-offset-4"
                  >
                    Visit {exp.link.label}
                    <ArrowUpRight size={14} />
                  </a>
                )}
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

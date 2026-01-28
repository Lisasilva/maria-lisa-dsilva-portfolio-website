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
      "Led large-scale Greenplum to Databricks migration for enterprise data platform",
      "Implemented SparkSQL transformations and Airflow orchestration pipelines",
      "Designed Medallion Architecture with CI/CD automation",
      "Achieved 98%+ data accuracy across enterprise-scale data sets",
    ],
    featured: true,
  },
  {
    title: "GenAI Intern",
    company: "Genpact",
    period: "Feb 2024 – Jul 2024",
    description: [
      "Developed NLP-based document de-duplication pipeline",
      "Built BI dashboard with ML-driven predictions",
      "Worked with cutting-edge generative AI technologies",
    ],
    featured: true,
  },
  {
    title: "Campus Ambassador",
    company: "Bazaarvoice",
    period: "2023",
    description: [
      "Represented Bazaarvoice on campus, promoting brand awareness",
      "Organized tech events and workshops for students",
    ],
    featured: false,
  },
  {
    title: "Software Development Intern",
    company: "NMBR Systems",
    period: "2022",
    description: [
      "Contributed to software development projects",
      "Gained hands-on experience with enterprise software development",
    ],
    featured: false,
  },
  {
    title: "Web Development Intern",
    company: "D'Souza Metal Cutting Pvt Ltd",
    period: "2021",
    description: [
      "Developed web solutions for business operations",
      "Enhanced digital presence through modern web technologies",
    ],
    featured: false,
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

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cream/20 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-cream rounded-full transform -translate-x-1/2 mt-2" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div
                    className={`${
                      exp.featured
                        ? "bg-cream/10 p-6 border border-cream/20"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Briefcase size={16} className="text-sage" />
                      <span className="label-text text-sage">{exp.company}</span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl text-cream mb-2">
                      {exp.title}
                    </h3>
                    <div
                      className={`flex items-center gap-2 text-cream/60 text-sm mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <ul
                      className={`space-y-2 text-cream/70 text-sm ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

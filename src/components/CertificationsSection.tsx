import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    issueDate: "Sep 2025",
    expirationDate: "Sep 2027",
    credentialId: "161907208",
    link: "https://credentials.databricks.com/e5860d5c-820b-4a43-a5c6-87a2a86f510c#acc.5HtsPReQ",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    issueDate: "Dec 2024",
    expirationDate: "Dec 2026",
    credentialId: "124833227",
    link: "https://credentials.databricks.com/b2473f0e-1555-4618-b440-8fcd79ac95ce#acc.YnOSMEXa",
  },
  {
    name: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    issueDate: "Oct 2025",
    expirationDate: null,
    credentialId: "163415099",
    link: "https://credentials.databricks.com/cc3eb4d9-5c83-4c5e-9328-07d9f4c07717#acc.R7lYtau0",
  },
  {
    name: "Academy Accreditation - AI Agent Fundamentals",
    issuer: "Databricks",
    issueDate: "Apr 2026",
    expirationDate: null,
    credentialId: "",
    link: "https://credentials.databricks.com/d345c748-60db-4eab-9d8d-071e745af393#acc.y4LHh5xq",
  },
  {
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    issueDate: "Nov 2025",
    expirationDate: "Nov 2027",
    credentialId: "166035708",
    link: "https://achieve.snowflake.com/a3796344-8128-4820-971f-2c68f6975de3#acc.r85zGvHO",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Dec 2025",
    expirationDate: "Dec 2028",
    credentialId: "da4a22bc499241c2b32851bc68499d10",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/da4a22bc499241c2b32851bc68499d10",
  },
  {
    name: "Introduction to Big Data",
    issuer: "UC San Diego - Rady School of Management",
    issueDate: "Mar 2023",
    expirationDate: null,
    credentialId: "UE6WRA6Y2FAJ",
    link: "https://www.coursera.org/account/accomplishments/verify/UE6WRA6Y2FAJ",
  },
  {
    name: "Big Data Integration and Processing",
    issuer: "UC San Diego - Rady School of Management",
    issueDate: "Apr 2023",
    expirationDate: null,
    credentialId: "4TFWQT55PX52",
    link: "https://www.coursera.org/account/accomplishments/verify/4TFWQT55PX52",
  },
  {
    name: "Big Data Modeling and Management Systems",
    issuer: "UC San Diego - Rady School of Management",
    issueDate: "May 2023",
    expirationDate: null,
    credentialId: "VDS9B78UEYAJ",
    link: "https://www.coursera.org/account/accomplishments/verify/VDS9B78UEYAJ",
  },
  {
    name: "Machine Learning With Big Data",
    issuer: "UC San Diego - Rady School of Management",
    issueDate: "Nov 2023",
    expirationDate: null,
    credentialId: "RUQZVX833SZD",
    link: "https://www.coursera.org/account/accomplishments/verify/RUQZVX833SZD",
  },
  {
    name: "Graph Analytics for Big Data",
    issuer: "UC San Diego - Rady School of Management",
    issueDate: "Nov 2023",
    expirationDate: null,
    credentialId: "6MLNUG7MMDLD",
    link: "https://www.coursera.org/account/accomplishments/verify/6MLNUG7MMDLD",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="portfolio-accent relative z-10 py-16" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Award size={28} className="accent-text" />
          <h3 className="font-heading text-3xl md:text-4xl">Certifications</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group accent-card border p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Header with subtle badge icon */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full accent-key flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="accent-text" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-lg font-medium leading-tight text-foreground group-hover:text-forest transition-colors">
                    {cert.name}
                  </h4>
                </div>
              </div>

              {/* Issuer */}
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {cert.issuer}
              </p>

              {/* Dates */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                <span>Issued: {cert.issueDate}</span>
                {cert.expirationDate && (
                  <span>Expires: {cert.expirationDate}</span>
                )}
              </div>

              {/* Credential ID */}
              <p className="text-xs text-muted-foreground/70 mb-4 font-mono truncate">
                ID: {cert.credentialId}
              </p>

              {/* Spacer to push button to bottom */}
              <div className="flex-grow" />

              {/* View Credential Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="portfolio"
                  size="sm"
                  className="w-full accent-button transition-all duration-300"
                >
                  <span>View Credential</span>
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

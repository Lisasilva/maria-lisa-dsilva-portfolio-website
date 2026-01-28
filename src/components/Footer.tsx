import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-charcoal text-cream/60">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-heading text-lg text-cream/80">
            Maria Lisa Dsilva
          </p>

          <nav className="flex gap-6">
            <a
              href="#home"
              className="text-sm hover:text-cream transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm hover:text-cream transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-cream transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-cream transition-colors"
            >
              Contact
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

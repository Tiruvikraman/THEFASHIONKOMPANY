import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter">
            Ready to Scale
            <br />
            Your Label?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/60 max-w-lg mx-auto">
            From 200 to 200,000 pieces. Start with a sample, scale to production.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground text-base font-medium transition-all hover:bg-accent/90 hover:scale-[0.98]"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground/10 text-primary-foreground text-base font-medium transition-all hover:bg-primary-foreground/20"
            >
              Browse Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

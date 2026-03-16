import { motion } from "framer-motion";
import { Droplets, Wind, Recycle, Leaf } from "lucide-react";

const metrics = [
  { icon: Droplets, value: "98.4%", label: "Water Recycled", desc: "Closed-loop dyeing systems recycle nearly all water used in production." },
  { icon: Wind, value: "62%", label: "Carbon Reduced", desc: "Solar-powered facilities and optimized logistics reduce our footprint." },
  { icon: Recycle, value: "100%", label: "Zero Waste", desc: "Fabric scraps are repurposed into secondary products and insulation." },
  { icon: Leaf, value: "GOTS", label: "Certified Organic", desc: "Full organic cotton supply chain certified to global standards." },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const SustainabilitySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div {...entrance} className="text-center mb-16">
          <p className="font-mono-tech text-muted-foreground mb-3">SUSTAINABILITY</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
            Data, Not Claims.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Sustainability measured in liters, kilograms, and percentages — not marketing slogans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              {...entrance}
              transition={{ ...entrance.transition, delay: i * 0.1 }}
              className="rounded-xl bg-secondary p-8 shadow-industrial transition-all hover:shadow-industrial-md"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <metric.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl font-semibold tracking-tighter text-foreground">{metric.value}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{metric.label}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;

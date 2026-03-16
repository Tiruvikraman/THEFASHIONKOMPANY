import { motion } from "framer-motion";
import { Droplets, Wind, Recycle, Leaf, Sun, Zap } from "lucide-react";

const metrics = [
  { icon: Droplets, value: "98.4%", label: "Water Recycled", desc: "Our closed-loop dyeing system recycles 98.4% of all water used, processing over 2 million liters daily." },
  { icon: Wind, value: "62%", label: "Carbon Reduction", desc: "Year-over-year carbon reduction through solar power, EV fleet logistics, and optimized supply chains." },
  { icon: Recycle, value: "0 kg", label: "Landfill Waste", desc: "Zero waste to landfill. All fabric scraps repurposed into secondary products, insulation, or recycled yarn." },
  { icon: Leaf, value: "40%", label: "Organic Cotton", desc: "40% of our total cotton consumption is GOTS-certified organic, sourced from verified Indian farms." },
  { icon: Sun, value: "2.4 MW", label: "Solar Capacity", desc: "On-site solar arrays generate 2.4 MW, powering 70% of our manufacturing operations." },
  { icon: Zap, value: "15%", label: "Energy Savings", desc: "IoT-enabled machinery monitoring reduces energy consumption by 15% through predictive maintenance." },
];

const certifications = ["GOTS Certified", "OEKO-TEX Standard 100", "ISO 14001", "ISO 9001", "BSCI Compliant", "WRAP Certified"];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const SustainabilityPage = () => {
  return (
    <main className="pt-20">
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div {...entrance} className="max-w-3xl">
            <p className="font-mono-tech text-muted-foreground mb-3">SUSTAINABILITY</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-foreground">
              Measured in Data,
              <br />Not Promises.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every metric is independently verified. We believe transparency is the only credible path to sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                {...entrance}
                transition={{ ...entrance.transition, delay: i * 0.08 }}
                className="rounded-xl bg-background p-8 shadow-industrial hover:shadow-industrial-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-4xl font-semibold tracking-tighter text-foreground">{metric.value}</p>
                <p className="mt-1 font-medium text-foreground">{metric.label}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <motion.div {...entrance}>
            <p className="font-mono-tech text-muted-foreground mb-3">CERTIFICATIONS</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground mb-10">
              Globally Recognized Standards
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                {...entrance}
                transition={{ ...entrance.transition, delay: i * 0.05 }}
                className="rounded-xl bg-secondary p-6 text-center shadow-industrial"
              >
                <p className="text-sm font-medium text-foreground">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SustainabilityPage;

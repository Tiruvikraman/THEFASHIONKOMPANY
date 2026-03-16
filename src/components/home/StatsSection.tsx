import { motion } from "framer-motion";

const stats = [
  { value: "98.4%", label: "Water Recycled", sub: "Closed-loop dyeing" },
  { value: "12", label: "Day Sample Lead", sub: "Design to doorstep" },
  { value: "500+", label: "Global Brands", sub: "Across 40 countries" },
  { value: "50M+", label: "Garments/Year", sub: "Production capacity" },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...entrance}
              transition={{ ...entrance.transition, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 font-mono-tech text-muted-foreground">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

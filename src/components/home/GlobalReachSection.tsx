import { motion } from "framer-motion";
import factoryImg from "@/assets/factory-aerial.jpg";

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const GlobalReachSection = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container">
        <motion.div {...entrance} className="text-center mb-16">
          <p className="font-mono-tech text-muted-foreground mb-3">GLOBAL REACH</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
            From Tirupur to the World.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Exporting to 40+ countries across Europe, North America, Middle East, and Asia Pacific.
          </p>
        </motion.div>

        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-hero"
        >
          <img
            src={factoryImg}
            alt="Aerial view of manufacturing facility in Tirupur"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { region: "Europe", countries: "UK, Germany, France, Italy" },
                { region: "Americas", countries: "USA, Canada, Brazil" },
                { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
                { region: "Asia Pacific", countries: "Australia, Japan, S. Korea" },
              ].map((item) => (
                <div key={item.region}>
                  <p className="font-mono-tech text-primary-foreground/50 mb-1">{item.region}</p>
                  <p className="text-sm text-primary-foreground/80">{item.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReachSection;

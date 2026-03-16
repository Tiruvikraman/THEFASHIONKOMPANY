import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fabricCotton from "@/assets/fabric-cotton.jpg";
import fabricTerry from "@/assets/fabric-terry.jpg";
import fabricPique from "@/assets/fabric-pique.jpg";

const fabrics = [
  { name: "100% Combed Cotton", gsm: "140–220 GSM", use: "T-Shirts, Polos", image: fabricCotton, composition: "100% Cotton" },
  { name: "French Terry", gsm: "280–420 GSM", use: "Hoodies, Joggers", image: fabricTerry, composition: "80/20 Cotton-Poly" },
  { name: "Pique Knit", gsm: "180–240 GSM", use: "Polos, Sportswear", image: fabricPique, composition: "100% Cotton" },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const FabricPreview = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div {...entrance} className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono-tech text-muted-foreground mb-3">FABRIC LIBRARY</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
              Touch the Quality.
            </h2>
          </div>
          <Link
            to="/fabrics"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Full Library
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fabrics.map((fabric, i) => (
            <motion.div
              key={fabric.name}
              {...entrance}
              transition={{ ...entrance.transition, delay: i * 0.1 }}
            >
              <Link to="/fabrics" className="group block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-background shadow-industrial transition-all hover:shadow-industrial-lg">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ clipPath: "inset(0)" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground">{fabric.name}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="font-mono-tech text-muted-foreground">{fabric.gsm}</span>
                    <span className="font-mono-tech text-muted-foreground">{fabric.composition}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{fabric.use}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricPreview;

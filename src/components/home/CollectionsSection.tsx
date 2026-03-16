import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hoodieImg from "@/assets/product-hoodie.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import poloImg from "@/assets/product-polo.jpg";
import joggerImg from "@/assets/product-jogger.jpg";
import sportswearImg from "@/assets/product-sportswear.jpg";

const collections = [
  { name: "T-Shirts", gsm: "140–220 GSM", image: tshirtImg, moq: "MOQ 500" },
  { name: "Polos", gsm: "180–240 GSM", image: poloImg, moq: "MOQ 300" },
  { name: "Hoodies", gsm: "320–420 GSM", image: hoodieImg, moq: "MOQ 200" },
  { name: "Joggers", gsm: "280–380 GSM", image: joggerImg, moq: "MOQ 200" },
  { name: "Sportswear", gsm: "150–220 GSM", image: sportswearImg, moq: "MOQ 500" },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const CollectionsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div {...entrance} className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono-tech text-muted-foreground mb-3">FEATURED COLLECTIONS</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
              Built for Scale
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {collections.map((item, i) => (
            <motion.div
              key={item.name}
              {...entrance}
              transition={{ ...entrance.transition, delay: i * 0.08 }}
            >
              <Link to="/products" className="group block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-background shadow-industrial transition-all hover:shadow-industrial-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                    <h3 className="text-lg font-semibold text-primary-foreground">{item.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-mono-tech text-primary-foreground/60">{item.gsm}</span>
                      <span className="font-mono-tech text-primary-foreground/60">{item.moq}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;

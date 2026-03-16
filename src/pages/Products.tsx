import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hoodieImg from "@/assets/product-hoodie.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import poloImg from "@/assets/product-polo.jpg";
import joggerImg from "@/assets/product-jogger.jpg";
import sportswearImg from "@/assets/product-sportswear.jpg";

const categories = ["All", "T-Shirts", "Polos", "Hoodies", "Joggers", "Sportswear", "Kidswear"];

const products = [
  { id: 1, name: "Essential Crew Tee", category: "T-Shirts", gsm: "180 GSM", fabric: "100% Combed Cotton", fit: "Regular", moq: 500, image: tshirtImg },
  { id: 2, name: "Premium Polo", category: "Polos", gsm: "220 GSM", fabric: "Pique Knit", fit: "Classic", moq: 300, image: poloImg },
  { id: 3, name: "Heavyweight Hoodie", category: "Hoodies", gsm: "420 GSM", fabric: "French Terry", fit: "Boxy", moq: 200, image: hoodieImg },
  { id: 4, name: "Tech Jogger", category: "Joggers", gsm: "320 GSM", fabric: "French Terry", fit: "Tapered", moq: 200, image: joggerImg },
  { id: 5, name: "Performance Jacket", category: "Sportswear", gsm: "180 GSM", fabric: "Dry-Fit Poly", fit: "Athletic", moq: 500, image: sportswearImg },
  { id: 6, name: "Oversized Tee", category: "T-Shirts", gsm: "220 GSM", fabric: "100% Combed Cotton", fit: "Oversized", moq: 500, image: tshirtImg },
  { id: 7, name: "Mock Neck Polo", category: "Polos", gsm: "240 GSM", fabric: "Pique Knit", fit: "Slim", moq: 300, image: poloImg },
  { id: 8, name: "Zip-Up Hoodie", category: "Hoodies", gsm: "380 GSM", fabric: "French Terry", fit: "Regular", moq: 200, image: hoodieImg },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="pt-20">
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div {...entrance}>
            <p className="font-mono-tech text-muted-foreground mb-3">PRODUCT CATALOG</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-foreground">
              Our Collections
            </h1>
          </motion.div>

          {/* Category filters */}
          <motion.div {...entrance} transition={{ ...entrance.transition, delay: 0.1 }} className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Product grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                {...entrance}
                transition={{ ...entrance.transition, delay: i * 0.05 }}
              >
                <Link to={`/products/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary shadow-industrial transition-all hover:shadow-industrial-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-mono-tech text-muted-foreground">{product.gsm}</span>
                      <span className="font-mono-tech text-muted-foreground">{product.fabric}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-mono-tech text-muted-foreground">{product.fit}</span>
                      <span className="font-mono-tech text-muted-foreground">MOQ {product.moq}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;

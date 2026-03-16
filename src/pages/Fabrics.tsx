import { motion } from "framer-motion";
import fabricCotton from "@/assets/fabric-cotton.jpg";
import fabricTerry from "@/assets/fabric-terry.jpg";
import fabricPique from "@/assets/fabric-pique.jpg";

const fabrics = [
  { name: "Single Jersey", gsm: "140–180 GSM", composition: "100% Combed Cotton", uses: "T-Shirts, Underwear, Casual Tops", image: fabricCotton, certifications: ["GOTS", "OEKO-TEX"] },
  { name: "Interlock", gsm: "180–240 GSM", composition: "100% Cotton / Cotton-Lycra", uses: "Polos, Baby Wear, Dressy Tees", image: fabricPique, certifications: ["OEKO-TEX"] },
  { name: "French Terry", gsm: "280–420 GSM", composition: "80/20 Cotton-Poly", uses: "Hoodies, Joggers, Sweatshirts", image: fabricTerry, certifications: ["GOTS", "OEKO-TEX"] },
  { name: "Fleece", gsm: "300–400 GSM", composition: "100% Cotton / Cotton-Poly", uses: "Hoodies, Jackets, Winter Wear", image: fabricTerry, certifications: ["GOTS"] },
  { name: "Pique Knit", gsm: "180–240 GSM", composition: "100% Cotton", uses: "Polos, Sportswear", image: fabricPique, certifications: ["OEKO-TEX"] },
  { name: "Rib Knit", gsm: "200–280 GSM", composition: "95% Cotton 5% Spandex", uses: "Cuffs, Collars, Fitted Tops", image: fabricCotton, certifications: ["GOTS", "OEKO-TEX"] },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const Fabrics = () => {
  return (
    <main className="pt-20">
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div {...entrance}>
            <p className="font-mono-tech text-muted-foreground mb-3">FABRIC LIBRARY</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-foreground">
              Premium Knit Fabrics
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Explore our curated library of high-quality knitted fabrics. Request swatches for any fabric.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabrics.map((fabric, i) => (
              <motion.div
                key={fabric.name}
                {...entrance}
                transition={{ ...entrance.transition, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-industrial transition-all hover:shadow-industrial-lg">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ clipPath: "inset(0)" }}
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-foreground">{fabric.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono-tech text-muted-foreground tabular-nums">{fabric.gsm}</span>
                    <span className="font-mono-tech text-muted-foreground">{fabric.composition}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{fabric.uses}</p>
                  <div className="flex gap-2 mt-3">
                    {fabric.certifications.map((cert) => (
                      <span key={cert} className="font-mono-tech px-2 py-1 rounded bg-secondary text-secondary-foreground">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fabrics;

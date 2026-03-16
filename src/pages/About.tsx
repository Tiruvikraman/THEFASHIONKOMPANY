import { motion } from "framer-motion";
import { Shield, Globe, Users, TrendingUp, CheckCircle, Award } from "lucide-react";

const values = [
  { icon: Globe, title: "Global Reach", desc: "Serving international brands across continents with reliability and precision." },
  { icon: TrendingUp, title: "Market Intelligence", desc: "Proactive insights on competitor activities, trends, and currency fluctuations." },
  { icon: Shield, title: "Quality Assurance", desc: "Strict quality control at every stage — from raw materials to final inspection." },
  { icon: Users, title: "Customer First", desc: "Customer satisfaction remains at the core of every operation we undertake." },
];

const products = [
  "T-shirts", "Polo Shirts", "Sweats & Hoodies", "Denims",
  "Chinos", "Shirts", "Homewear", "Sportswear",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-mono tracking-widest uppercase text-primary-foreground/60 mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Gloria Casa Moda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed"
          >
            A trusted sourcing partner and garment manufacturer, delivering high-quality apparel solutions to global clients with strong expertise in knit and woven garments.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Gloria Casa Moda, we specialize in exporting a diverse range of products for men, women, and kids, serving international brands with reliability and precision. Our team continuously monitors global market dynamics and provides our clients with valuable insights, including competitor activities, socio-political developments, industrial trends, and currency fluctuations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              This proactive approach helps our partners make informed decisions and stay competitive in the ever-evolving fashion industry. Customer satisfaction remains at the core of our operations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              By combining modern manufacturing techniques with skilled craftsmanship, we ensure each product meets the expectations of global fashion markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-16"
          >
            What Drives Us
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6"
          >
            Our Product Range
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-10">
            We manufacture a wide variety of garments for men, women, and children.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.div
                key={p}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
            <Award className="w-12 h-12 shrink-0 text-accent mt-1" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Uncompromising Quality
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Since our products serve both domestic and international markets, we maintain strict quality control procedures at every stage of production. From raw material sourcing to final inspection, our comprehensive quality checks ensure that every garment meets the highest standards of durability, comfort, and style.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;

import { motion } from "framer-motion";
import { Factory, Droplets, Scissors, Layers, CheckCircle2, Package } from "lucide-react";
import factoryImg from "@/assets/factory-aerial.jpg";

const stages = [
  { icon: Factory, title: "Knitting", desc: "High-speed circular knitting machines produce fabric at 1,200+ RPM with precision gauge control.", time: "2–3 days" },
  { icon: Droplets, title: "Dyeing", desc: "Reactive dyeing with closed-loop water recycling. Pantone color matching to ΔE < 0.5.", time: "3–4 days" },
  { icon: Scissors, title: "Cutting", desc: "CAD-optimized auto-cutting with <2% fabric waste. Laser cutting for precision patterns.", time: "1–2 days" },
  { icon: Layers, title: "Stitching", desc: "28 production lines with specialized stations. Flatlock, overlock, and coverseam capabilities.", time: "3–5 days" },
  { icon: CheckCircle2, title: "Quality Control", desc: "AQL 1.5 standard. 4-point fabric inspection. Every garment passes needle detection.", time: "1 day" },
  { icon: Package, title: "Packing", desc: "Custom packaging, poly-bagging, carton packing with barcoding and SKU management.", time: "1–2 days" },
];

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const Manufacturing = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        <img src={factoryImg} alt="Factory aerial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="relative container pb-12">
          <p className="font-mono-tech text-accent mb-2">MANUFACTURING</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-primary-foreground">
            Production Stages
          </h1>
        </div>
      </section>

      {/* Stages */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                {...entrance}
                transition={{ ...entrance.transition, delay: i * 0.1 }}
                className="rounded-xl bg-secondary p-8 shadow-industrial hover:shadow-industrial-md transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <stage.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-mono-tech text-muted-foreground">{stage.time}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stage.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-mono-tech text-accent">STAGE {String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Manufacturing;

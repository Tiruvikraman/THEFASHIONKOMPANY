import { motion } from "framer-motion";
import { ArrowRight, Wand2, Palette, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import hoodieImg from "@/assets/product-hoodie.jpg";

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const AIDesignerPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div {...entrance}>
            <p className="font-mono-tech text-accent mb-3">AI-POWERED DESIGN</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
              Design with
              <br />Intelligence.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Upload your logo, select your fabric, choose your fit — our AI generates
              production-ready garment designs with real-time 3D preview and instant costing.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: Wand2, title: "Logo to Apparel", desc: "AI maps your logo onto 3D garment models" },
                { icon: Palette, title: "Fabric Intelligence", desc: "AI recommends fabrics based on your design needs" },
                { icon: Layers, title: "Instant Costing", desc: "Real-time bulk pricing as you design" },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/ai-designer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 hover:scale-[0.98] active:scale-[0.96]"
            >
              Launch AI Designer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Preview mock */}
          <motion.div
            {...entrance}
            transition={{ ...entrance.transition, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero bg-primary">
              <div className="absolute top-0 inset-x-0 h-10 bg-primary flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                <span className="ml-4 font-mono-tech text-primary-foreground/40">AI DESIGNER</span>
              </div>
              <div className="pt-10 flex">
                {/* Sidebar */}
                <div className="w-48 bg-primary p-4 space-y-4 hidden sm:block">
                  <div>
                    <p className="font-mono-tech text-primary-foreground/40 mb-2">GARMENT</p>
                    <div className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-sm text-primary-foreground">Heavyweight Hoodie</div>
                  </div>
                  <div>
                    <p className="font-mono-tech text-primary-foreground/40 mb-2">FABRIC</p>
                    <div className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-sm text-primary-foreground">420 GSM French Terry</div>
                  </div>
                  <div>
                    <p className="font-mono-tech text-primary-foreground/40 mb-2">FIT</p>
                    <div className="flex gap-1">
                      {["Slim", "Regular", "Boxy"].map((fit, i) => (
                        <button
                          key={fit}
                          className={`px-2 py-1 rounded text-xs ${
                            i === 2 ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10 text-primary-foreground/60"
                          }`}
                        >
                          {fit}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono-tech text-primary-foreground/40 mb-2">COLOR</p>
                    <div className="flex gap-2">
                      {["bg-foreground", "bg-muted", "bg-accent"].map((c, i) => (
                        <div key={i} className={`w-6 h-6 rounded-full ${c} ${i === 0 ? "ring-2 ring-accent ring-offset-1 ring-offset-primary" : ""}`} />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Viewport */}
                <div className="flex-1 bg-muted/10 flex items-center justify-center p-8">
                  <img
                    src={hoodieImg}
                    alt="3D Hoodie preview"
                    className="w-full max-w-xs rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIDesignerPreview;

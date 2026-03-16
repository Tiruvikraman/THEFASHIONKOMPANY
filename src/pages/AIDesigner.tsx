import { useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Upload } from "lucide-react";
import hoodieImg from "@/assets/product-hoodie.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import poloImg from "@/assets/product-polo.jpg";

const garmentTypes = [
  { label: "T-Shirt", image: tshirtImg },
  { label: "Polo", image: poloImg },
  { label: "Hoodie", image: hoodieImg },
];

const fabrics = ["100% Combed Cotton", "French Terry", "Pique Knit", "Fleece", "Rib Knit"];
const fits = ["Slim", "Regular", "Boxy", "Oversized"];
const necks = ["Crew", "V-Neck", "Mock", "Henley"];
const sleeves = ["Short", "3/4", "Long", "Sleeveless"];
const colors = [
  { name: "Black", value: "hsl(0, 0%, 5%)" },
  { name: "White", value: "hsl(0, 0%, 98%)" },
  { name: "Navy", value: "hsl(220, 50%, 20%)" },
  { name: "Olive", value: "hsl(80, 30%, 30%)" },
  { name: "Sand", value: "hsl(35, 40%, 75%)" },
  { name: "Charcoal", value: "hsl(0, 0%, 30%)" },
];

const AIDesigner = () => {
  const [selectedGarment, setSelectedGarment] = useState(0);
  const [selectedFabric, setSelectedFabric] = useState(0);
  const [selectedFit, setSelectedFit] = useState(1);
  const [selectedNeck, setSelectedNeck] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-5rem)]">
        {/* Left sidebar */}
        <div className="w-full lg:w-80 bg-primary p-6 overflow-y-auto flex-shrink-0">
          <div className="flex items-center gap-2 mb-8">
            <Wand2 className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary-foreground">AI Designer</span>
          </div>

          {/* Garment type */}
          <div className="mb-6">
            <p className="font-mono-tech text-primary-foreground/40 mb-3">GARMENT TYPE</p>
            <div className="grid grid-cols-3 gap-2">
              {garmentTypes.map((g, i) => (
                <button
                  key={g.label}
                  onClick={() => setSelectedGarment(i)}
                  className={`rounded-lg p-2 text-xs text-center transition-all ${
                    selectedGarment === i
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/15"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fabric */}
          <div className="mb-6">
            <p className="font-mono-tech text-primary-foreground/40 mb-3">FABRIC</p>
            <div className="space-y-1">
              {fabrics.map((f, i) => (
                <button
                  key={f}
                  onClick={() => setSelectedFabric(i)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    selectedFabric === i
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground/60 hover:bg-primary-foreground/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-6">
            <p className="font-mono-tech text-primary-foreground/40 mb-3">COLOR</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-8 h-8 rounded-full transition-all ${
                    selectedColor === i ? "ring-2 ring-accent ring-offset-2 ring-offset-primary" : ""
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Fit */}
          <div className="mb-6">
            <p className="font-mono-tech text-primary-foreground/40 mb-3">FIT</p>
            <div className="flex flex-wrap gap-1">
              {fits.map((f, i) => (
                <button
                  key={f}
                  onClick={() => setSelectedFit(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    selectedFit === i
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/15"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Neck */}
          <div className="mb-6">
            <p className="font-mono-tech text-primary-foreground/40 mb-3">NECKLINE</p>
            <div className="flex flex-wrap gap-1">
              {necks.map((n, i) => (
                <button
                  key={n}
                  onClick={() => setSelectedNeck(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    selectedNeck === i
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/15"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Logo upload */}
          <div className="mb-6">
            <p className="font-mono-tech text-primary-foreground/40 mb-3">LOGO / PRINT</p>
            <div className="border-2 border-dashed border-primary-foreground/20 rounded-xl p-6 text-center cursor-pointer hover:border-accent/50 transition-colors">
              <Upload className="w-6 h-6 text-primary-foreground/40 mx-auto mb-2" />
              <p className="text-xs text-primary-foreground/40">Drop your logo here</p>
            </div>
          </div>
        </div>

        {/* Main viewport */}
        <div className="flex-1 flex items-center justify-center bg-muted relative">
          <motion.div
            key={selectedGarment}
            initial={{ opacity: 0, rotateY: -30 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-md"
          >
            <img
              src={garmentTypes[selectedGarment].image}
              alt={garmentTypes[selectedGarment].label}
              className="w-full rounded-xl shadow-hero"
            />
          </motion.div>

          {/* Specs overlay */}
          <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md rounded-xl p-4 shadow-industrial-md">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-medium text-foreground">
                  {fits[selectedFit]} {garmentTypes[selectedGarment].label}
                </p>
                <p className="font-mono-tech text-muted-foreground">
                  {fabrics[selectedFabric]} · {necks[selectedNeck]} · {colors[selectedColor].name}
                </p>
              </div>
              <button className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all hover:scale-[0.98]">
                Request Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AIDesigner;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, HardHat, Globe, ShoppingBag } from "lucide-react";

/* ─── DYNAMIC IMAGES ─────────────────────────────────────────────────────── */
const images = import.meta.glob("/src/assets/brand_images/*.{png,jpg,jpeg,svg}", { eager: true });

const brands: Record<string, string> = {};
Object.entries(images).forEach(([path, img]: any) => {
  const file = path.split("/").pop()?.toLowerCase().replace(/\s/g, "");
  brands[file!] = img.default;
});

/* ─── HELPERS ────────────────────────────────────────────────────────────── */
function formatBrandName(key: string): string {
  return key
    .replace(/\.(png|jpg|jpeg|svg)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ─── BRAND GRID ─────────────────────────────────────────────────────────── */
function BrandGrid({ items, accentColor }: { items: string[]; accentColor?: string }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const accent = accentColor ?? "#6366f1";

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((key, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, y: -4, zIndex: 10 }}
          className="group flex flex-col items-center justify-start rounded-2xl cursor-pointer relative overflow-hidden"
          style={{
            height: 120,
            background: "linear-gradient(135deg, #ffffff, #f0f4ff)",
            border: "1.5px solid #e0e7ff",
            boxShadow: "0 2px 12px rgba(99,102,241,0.08)",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 36px ${accent}40`;
            (e.currentTarget as HTMLElement).style.borderColor = accent;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(99,102,241,0.08)";
            (e.currentTarget as HTMLElement).style.borderColor = "#e0e7ff";
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(135deg, ${accent}15, ${accent}08)` }}
          />

          {/* logo — same size as original */}
          <div className="relative flex items-center justify-center w-full" style={{ height: 90 }}>
            <img
              src={brands[key]}
              alt={formatBrandName(key)}
              className="h-12 md:h-14 w-full object-contain px-4"
              style={{ filter: "none" }}
            />
          </div>

          {/* brand name below */}
          <div className="relative w-full flex items-center justify-center px-2" style={{ height: 30 }}>
            <span
              className="text-center w-full truncate"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: accent,
                lineHeight: 1,
              }}
              title={formatBrandName(key)}
            >
              {formatBrandName(key)}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── SECTION HEADER ─────────────────────────────────────────────────────── */
function SectionHeader({ icon: Icon, label, title, color }: {
  icon: typeof Shirt; label: string; title: string; color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color }}>
          {label}
        </span>
      </div>
      <h2
        className="text-2xl md:text-3xl font-black text-gray-900"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h2>
      <div className="mt-3 h-[2px] w-10 rounded-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </motion.div>
  );
}

/* ─── SUB-SECTION HEADER ─────────────────────────────────────────────────── */
function SubSectionHeader({ icon: Icon, label, color }: {
  icon: typeof Globe; label: string; color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2 mb-5"
    >
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center"
        style={{ background: `${color}18`, border: `1px solid ${color}35` }}
      >
        <Icon className="w-3 h-3" style={{ color }} />
      </div>
      <span
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color }}
      >
        {label}
      </span>
      <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }} />
    </motion.div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────────────────────── */
export default function BrandSections() {
  const fashionExportBrands = [
    "jack&jones.png", "harmont&blaine.png", "sonnybonno.png", "yamamay.png",
    "f__k.png",           "bhtextile.png",  "tailorenstitch.png",
        "lolaliza.png",   "treeker9.png",
    "cat.png",            
  ];

  const fashionDomesticBrands = [
    "masculinilatino.png", "netplay.png", "zaivame.png","mufti.png"
  ];

  const workwearBrands = [
    "cat.png", "tailorenstitch.png", "groenendijk.png", "vodaphone.png",
    "opel.png", "bmw.png", "kubler.png", "benz.png",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <main
        className="pt-[68px]"
        style={{
          background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* ── PAGE HERO ── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #07071a 0%, #0d0d2b 60%, #060616 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(165,180,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #3b82f6, #7c3aed)" }} />

          <div className="container max-w-6xl px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs text-indigo-300 uppercase tracking-[0.25em] font-semibold mb-4">
                <span className="w-4 h-px bg-indigo-400 inline-block" />
                Our Clients
              </span>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Brands That{" "}
                <span style={{
                  background: "linear-gradient(90deg, #93c5fd, #c4b5fd)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Trust Us
                </span>
              </h1>
              <p className="mt-4 text-white/50 text-sm max-w-lg leading-relaxed">
                From global fashion labels to world-class workwear manufacturers — we deliver quality that keeps clients coming back.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        </section>

        {/* ── BRAND SECTIONS ── */}
        <section className="py-20">
          <div className="container max-w-6xl px-6">

            {/* FASHION */}
            <div className="mb-16">
              <SectionHeader icon={Shirt} label="Fashion" title="Fashion Brands" color="#1d4ed8" />

              {/* Export Retail */}
              <div className="mb-10">
                <SubSectionHeader icon={Globe} label="Export Retail" color="#1d4ed8" />
                <BrandGrid items={fashionExportBrands} accentColor="#1d4ed8" />
              </div>

              {/* Domestic Retail */}
              <div>
                <SubSectionHeader icon={ShoppingBag} label="Domestic Retail" color="#7c3aed" />
                <BrandGrid items={fashionDomesticBrands} accentColor="#7c3aed" />
              </div>
            </div>

            <div className="h-px mb-16 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* WORKWEAR */}
            <div className="mb-12">
              <SectionHeader icon={HardHat} label="Workwear" title="Workwear Brands" color="#0f766e" />
              <BrandGrid items={workwearBrands} accentColor="#0f766e" />
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layers, Tag, ArrowRight, SlidersHorizontal } from "lucide-react";
import fabricCotton from "@/assets/fabric-cotton.jpg";
import fabricTerry  from "@/assets/fabric-terry.jpg";
import fabricPique  from "@/assets/fabric-pique.jpg";

/* ─── ALL FABRICS ────────────────────────────────────────────────────────── */
const fabrics = [
  /* ── KNIT ── */
  {
    name: "Single Jersey",      type: "Knit",
    gsm: "140–180 GSM",         composition: "100% Combed Cotton",
    uses: "T-Shirts, Underwear, Casual Tops",
    tag: "Best Seller",         accent: "#1d4ed8",
    certs: ["GOTS", "OEKO-TEX"],
    image: "https://static.fibre2fashion.com/MemberResources/LeadResources/8/2021/5/Buyer/21194420/Images/21194420_0_single-jersey-fabric4.jpg?tr=w-260,h-260,cm-pad_resize,bg-F3F3F3",
  },
  {
    name: "Interlock",          type: "Knit",
    gsm: "180–240 GSM",         composition: "100% Cotton / Cotton-Lycra",
    uses: "Polos, Baby Wear, Dressy Tees",
    tag: "Smooth",              accent: "#0891b2",
    certs: ["OEKO-TEX"],
    image: "https://vrclothing.in/wp-content/uploads/2024/02/interlock-fabric-2-vr-clothing-500x375.webp",
  },
  {
    name: "French Terry",       type: "Knit",
    gsm: "280–420 GSM",         composition: "80/20 Cotton-Poly",
    uses: "Hoodies, Joggers, Sweatshirts",
    tag: "Popular",             accent: "#0f766e",
    certs: ["GOTS", "OEKO-TEX"],
    image: "https://5.imimg.com/data5/SELLER/Default/2022/8/AE/DP/FT/47943000/knitted-french-terry-fabric-500x500.jpg",
  },
  {
    name: "Fleece",             type: "Knit",
    gsm: "240–280 GSM",         composition: "Cotton / Polyester",
    uses: "Sweatshirts, Jackets, Winter Wear",
    tag: "Seasonal",            accent: "#b45309",
    certs: ["GOTS"],
    image: "https://sino-silk.com/wp-content/uploads/2024/03/Sherpa-Fleece.jpg",
  },
  {
    name: "Pique",         type: "Knit",
    gsm: "180–240 GSM",         composition: "100% Cotton",
    uses: "Polos, Sportswear",
    tag: "Premium",             accent: "#7c3aed",
    certs: ["OEKO-TEX"],
    image: "https://www.acornfabrics.com/wp-content/uploads/2016/10/What-is-pique-fabric-1.jpg",
  },
  {
    name: "Rib",           type: "Knit",
    gsm: "200–280 GSM",         composition: "95% Cotton 5% Spandex",
    uses: "Cuffs, Collars, Fitted Tops",
    tag: "Stretch",             accent: "#dc2626",
    certs: ["GOTS", "OEKO-TEX"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-XMcKJSdFuXSqC6KdTi3-fYaoqbgSSmVSg&s",
  },
  {
    name: "Baby Terry",         type: "Knit",
    gsm: "180–260 GSM",         composition: "100% Combed Cotton",
    uses: "Babywear, Towels, Robes",
    tag: "Soft",                accent: "#ec4899",
    certs: ["GOTS", "OEKO-TEX"],
    image: "https://static.fibre2fashion.com/MemberResources/LeadResources/8/2018/6/Buyer/18148951/Images/18148951_0_knit-baby-terry-fabric.jpg",
  },
  {
    name: "Quilted",            type: "Knit",
    gsm: "300–450 GSM",         composition: "Cotton / Poly Fill",
    uses: "Jackets, Vests, Outerwear",
    tag: "Structured",          accent: "#9333ea",
    certs: [],
    image: "https://i.etsystatic.com/6707372/r/il/5d5fd0/3533033833/il_570xN.3533033833_gtgs.jpg",
  },
  {
    name: "Bamboo Modal Blend", type: "Knit",
    gsm: "160–220 GSM",         composition: "50% Bamboo 50% Modal",
    uses: "Loungewear, Innerwear, Activewear",
    tag: "Eco",                 accent: "#059669",
    certs: ["OEKO-TEX"],
    image: "https://static.fibre2fashion.com/MemberResources/LeadResources/8/2020/8/Buyer/20184375/Images/20184375_0_bamboo-fabric.jpg",
  },
  {
    name: "Cotton Lyocell Blend", type: "Knit",
    gsm: "150–200 GSM",           composition: "70% Cotton 30% Lyocell",
    uses: "Casual Tops, Dresses, Shirts",
    tag: "Sustainable",           accent: "#15803d",
    certs: ["GOTS"],
    image: "https://m.media-amazon.com/images/I/61Yvu6nRAtL.jpg",
  },
  /* ── WOVEN ── */
  {
    name: "Poplin",             type: "Woven",
    gsm: "90–130 GSM",          composition: "100% Cotton",
    uses: "Formal Shirts, Dresses, Blouses",
    tag: "Classic",             accent: "#1d4ed8",
    certs: ["OEKO-TEX"],
    image: "https://www.raystitch.co.uk/cdn/shop/files/poplinwhite_1.jpg?v=1685520126&width=1200",
  },
  {
    name: "Flannel",            type: "Woven",
    gsm: "150–250 GSM",         composition: "100% Cotton / Cotton-Wool",
    uses: "Casual Shirts, Pyjamas, Winter Wear",
    tag: "Warm",                accent: "#b45309",
    certs: ["OEKO-TEX"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMbS98AbFtRWfpSfmoZMFD8-1fShO8FP0-A&s",
  },
  {
    name: "Twill",              type: "Woven",
    gsm: "180–300 GSM",         composition: "100% Cotton",
    uses: "Trousers, Workwear, Jackets",
    tag: "Durable",             accent: "#0f766e",
    certs: ["OEKO-TEX"],
    image: "https://thefabricofourlives.com/wp-content/uploads/2025/09/cotton-twill-fabric-e1761678283281.jpg",
  },
  {
    name: "Jacquard",           type: "Woven",
    gsm: "200–350 GSM",         composition: "Cotton / Poly Blend",
    uses: "Formal Wear, Upholstery, Decorative",
    tag: "Premium",             accent: "#7c3aed",
    certs: [],
    image: "https://5.imimg.com/data5/BE/SI/MY-59197131/jacquard-blue-knitted-fabric-500x500.jpg",
  },
  {
    name: "Denim",              type: "Denim",
    gsm: "280–420 GSM",         composition: "100% Cotton",
    uses: "Jeans, Jackets, Workwear",
    tag: "Iconic",              accent: "#1e40af",
    certs: ["OEKO-TEX"],
    image: "https://www.longancraft.com/cdn/shop/articles/q6fb7YmPgKaf8MQLtIeJ.webp?v=1729513819&width=800",
  },
];

const FILTERS = ["All", "Knit", "Woven"];

/* ─── FABRIC CARD ────────────────────────────────────────────────────────── */
function FabricCard({ fabric, index }: { fabric: typeof fabrics[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay: (index % 12) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="group relative rounded-xl overflow-hidden bg-slate-100 cursor-default"
        style={{
          boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 36px rgba(0,0,0,0.13)`;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(0,0,0,0.07)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={fabric.image}
            alt={fabric.name}
            className="w-full h-full object-cover"
            style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0.3"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

          

          {/* type pill */}
          <div className="absolute top-3 right-3 bg-white/15 backdrop-blur text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/20">
            {fabric.type}
          </div>

          {/* name + composition over image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-sm leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
              {fabric.name}
            </h3>
           
          </div>
        </div>

        {/* footer strip */}
        <div className="px-4 py-3 bg-white border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            
            
          </div>
           <p className="text-black/95 text-xs mt-0.5">{fabric.composition}</p>
        </div>

        {/* bottom accent slide */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: `linear-gradient(90deg, ${fabric.accent}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
const Fabrics = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? fabrics : fabrics.filter(f => f.type === active);
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <main className="pt-[68px]" style={{ fontFamily: "'Inter', sans-serif" }}>

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

          <div ref={headerRef} className="container max-w-6xl px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs text-indigo-300 uppercase tracking-[0.25em] font-semibold mb-4">
                <span className="w-4 h-px bg-indigo-400 inline-block" />
                Fabric Library
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Premium{" "}
                <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Fabrics
                </span>
              </h1>
              <p className="mt-4 text-white/50 text-sm max-w-lg leading-relaxed">
                Explore our curated library of high-quality knit and woven fabrics — certified, consistent, and ready for bulk production.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        </section>

        {/* ── CATALOG ── */}
        <section className="relative py-16 overflow-hidden"
          style={{ background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="container max-w-6xl px-6 relative">

            {/* filter bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 flex-wrap mb-10"
            >
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mr-2">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </div>
              {FILTERS.map(f => {
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-250"
                    style={{
                      background: isActive ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "#ffffff",
                      color:  isActive ? "#ffffff" : "#64748b",
                      border: isActive ? "1px solid transparent" : "1px solid #e2e8f0",
                      boxShadow: isActive ? "0 3px 14px rgba(37,99,235,0.3)" : "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    {f}
                  </button>
                );
              })}
              <span className="ml-auto text-xs text-slate-400 font-medium">
                {filtered.length} {filtered.length === 1 ? "fabric" : "fabrics"}
              </span>
            </motion.div>

            {/* grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((fabric, i) => (
                <FabricCard key={fabric.name} fabric={fabric} index={i} />
              ))}
            </div>

            {/* bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-xs text-gray-400 mt-12"
            >
              Custom compositions & GSM ranges available on request ·{" "}
              <Link to="/contact" className="text-blue-500 hover:underline font-medium">
                Request a swatch
              </Link>
            </motion.p>

          </div>
        </section>

      </main>
    </>
  );
};

export default Fabrics;
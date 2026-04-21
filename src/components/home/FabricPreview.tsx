import { motion, useInView } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const fabrics = [
  {
    name: "100% Combed Cotton",
    gsm: "140–220 GSM",
    use: "T-Shirts, Polos",
    composition: "100% Cotton",
    tag: "Best Seller",
    image: "https://static.fibre2fashion.com/MemberResources/LeadResources/8/2021/5/Buyer/21194420/Images/21194420_0_single-jersey-fabric4.jpg?tr=w-260,h-260,cm-pad_resize,bg-F3F3F3",
    accent: "#1d4ed8",
  },
  {
    name: "French Terry",
    gsm: "280–420 GSM",
    use: "Hoodies, Joggers",
    composition: "80/20 Cotton-Poly",
    tag: "Popular",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/8/AE/DP/FT/47943000/knitted-french-terry-fabric-500x500.jpg",
    accent: "#0f766e",
  },
  {
    name: "Pique Knit",
    gsm: "180–240 GSM",
    use: "Polos, Sportswear",
    composition: "100% Cotton",
    tag: "Premium",
    image: "https://runtangtextile.com/wp-content/uploads/2023/12/260gsm-100Cotton-Pique-Knit-Fabric-190cm-ZD37016-1.jpg",
    accent: "#7c3aed",
  },
  {
    name: "Fleece",
    gsm: "200–280 GSM",
    use: "Sweatshirts, Jackets",
    composition: "Cotton / Polyester",
    tag: "Seasonal",
    image: "https://www.thefabricbee.co.uk/cdn/shop/products/fleece-white.jpg?v=1579539834",
    accent: "#b45309",
  },
];

/* ─── CARD ───────────────────────────────────────────────────────────────── */
function FabricCard({ fabric, index }: { fabric: typeof fabrics[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/fabrics" className="group block">
        <div
          className="relative rounded-xl overflow-hidden"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
        >
          {/* image */}
          <div className="relative h-56 overflow-hidden bg-slate-100">
            <img
              src={fabric.image}
              alt={fabric.name}
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x300?text=Fabric"; }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            />
            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            

            {/* bottom text over image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                {fabric.name}
              </h3>
              <p className="text-white/70 text-xs mt-0.5">{fabric.composition}</p>
            </div>
          </div>

          {/* footer strip */}
          <div
            className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-100"
            style={{ transition: "background 0.3s ease" }}
          >
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-500 font-medium">{fabric.use}</span>
            </div>
            <ArrowRight
              className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300"
            />
          </div>

          {/* bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2.5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
            style={{ background: `linear-gradient(90deg, ${fabric.accent}, transparent)` }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── SECTION ────────────────────────────────────────────────────────────── */
const FabricPreview = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
    `}</style>

    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* top / bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ambient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: "#bfdbfe" }} />

      <div className="container max-w-6xl px-6 relative">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold mb-3">
              <span className="w-4 h-px bg-blue-400 inline-block" />
              Fabric Library
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Sourced for{" "}
              <span style={{
                background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Every Market
              </span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-sm leading-relaxed">
              Premium knit fabrics — certified, consistent, and ready for bulk production.
            </p>
          </div>

          <Link
            to="/fabrics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 border border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full transition-all duration-300 self-start md:self-auto"
          >
            View Full Library
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {fabrics.map((fabric, i) => (
            <FabricCard key={fabric.name} fabric={fabric} index={i} />
          ))}
        </div>

        {/* ── BOTTOM NOTE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-xs text-gray-400 mt-10"
        >
          Custom compositions & GSM ranges available on request ·{" "}
          <Link to="/contact" className="text-blue-500 hover:underline font-medium">
            Request a swatch
          </Link>
        </motion.p>

      </div>
    </section>
  </>
);

export default FabricPreview;
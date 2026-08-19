import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Tag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import WomenImg from "@/assets/product_collections/womens/women-17032025-13.jpg";
import KidsImg from "@/assets/product_collections/kids/1.png";
import WorkwearImg from "@/assets/product_collections/Workwear/1.jpeg";
import HomeTextilesImg from "@/assets/product_collections/HomeTextiles/3.png";
import MenImg from "@/assets/product_collections/mens/6.jpg";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const collections = [
  { name: "Men",           slug: "men",           category: "Basics",   accent: "#1d4ed8", image: MenImg},
  { name: "Women",         slug: "women",         category: "Classics", accent: "#0f766e", image: WomenImg },
  { name: "Kid's",         slug: "kids",          category: "Kids",     accent: "#7c3aed", image: KidsImg },
  { name: "WorkWear",      slug: "workwear",      category: "Bottoms",  accent: "#b45309", image: WorkwearImg },
  { name: "Home Textiles", slug: "hometextile", category: "Active",   accent: "#059669", image: HomeTextilesImg },
];

/* ─── CARD ───────────────────────────────────────────────────────────────── */
function CollectionCard({ item, index }: { item: typeof collections[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ↓ updated href: /products#slug */}
      <Link to={`/products#${item.slug}`} className="group block">
        <div
          className="relative rounded-xl overflow-hidden bg-white"
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
          <div className="relative h-64 overflow-hidden bg-slate-100">
            <img
              src={item.image}
              alt={item.name}
              onError={e => { e.currentTarget.src = "https://via.placeholder.com/400x300?text=Product"; }}
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* arrow icon top-right */}
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>

            {/* name over image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                {item.name}
              </h3>
            </div>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-100">
            <span
              className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: item.accent, background: `${item.accent}12` }}
            >
              Sample Available
            </span>
          </div>

          {/* bottom accent slide */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── SECTION ────────────────────────────────────────────────────────────── */
const CollectionsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? collections : collections.slice(0, 6);

  return (
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
        {/* border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* ambient blob */}
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: "#c7d2fe" }} />

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
                Featured Collections
              </span>
              <h2
                className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Built for{" "}
                <span style={{
                  background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Scale
                </span>
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-sm leading-relaxed">
                Export-ready garments across all categories — consistent quality, competitive MOQs.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 border border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full transition-all duration-300 self-start md:self-auto"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ── GRID ── */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <AnimatePresence>
              {visible.map((item, i) => (
                <CollectionCard key={item.name} item={item} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {/* ── SHOW MORE ── */}
          {!showAll && collections.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-700 border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50 px-6 py-3 rounded-full transition-all duration-300 shadow-sm"
              >
                Show More Collections
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}

          {/* ── BOTTOM NOTE ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-xs text-gray-400 mt-8"
          >
            Custom styles, sizes & private label available ·{" "}
            <Link to="/contact" className="text-blue-500 hover:underline font-medium">
              Send an enquiry
            </Link>
          </motion.p>

        </div>
      </section>
    </>
  );
};

export default CollectionsSection;

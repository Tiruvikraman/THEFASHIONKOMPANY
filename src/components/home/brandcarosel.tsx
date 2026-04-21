import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── IMAGES ─────────────────────────────────────────────────────────────── */
const images = import.meta.glob("/src/assets/brand_images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});
const brands: string[] = Object.values(images).map((img: any) => img.default);

/* ─── INFINITE MARQUEE ───────────────────────────────────────────────────── */
// Duplicates the list so we can loop seamlessly
function Marquee({ items, speed = 40 }: { items: string[]; speed?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackW, setTrackW] = useState(0);

  useEffect(() => {
    if (trackRef.current) setTrackW(trackRef.current.scrollWidth / 2);
  }, [items]);

  return (
    <div className="overflow-hidden w-full" style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
      <motion.div
        ref={trackRef}
        className="flex items-center gap-16 w-max"
        animate={trackW ? { x: [0, -trackW] } : {}}
        transition={{ duration: trackW / speed, ease: "linear", repeat: Infinity }}
      >
        {/* render twice for seamless loop */}
        {[...items, ...items].map((src, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center justify-center"
            style={{ width: 120, height: 100 }}
          >
            <img
              src={src}
              alt={`Brand ${i}`}
              onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
              className="w-300 max-h-400 object-contain"
              
              />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── SECTION ────────────────────────────────────────────────────────────── */
const BrandCarousel = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
    `}</style>

    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      {/* ambient blobs */}
      <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-[0.12] pointer-events-none"
        style={{ background: "#bfdbfe" }} />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-[0.10] pointer-events-none"
        style={{ background: "#c7d2fe" }} />

      <div className="container max-w-6xl px-6 relative">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold mb-3">
            <span className="w-4 h-px bg-blue-400 inline-block" />
            Our Clients
            <span className="w-4 h-px bg-blue-400 inline-block" />
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Trusted by{" "}
            <span style={{
              background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Global Brands
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xxxl mx-auto leading-relaxed">
            Partnering with internationally recognized brands — delivering quality garments
            with consistency, reliability, and care.
          </p>
        </motion.div>

     

        {/* ── MARQUEE ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {brands.length > 0 ? (
            <Marquee items={brands} speed={38} />
          ) : (
            /* fallback placeholder logos when no images are loaded */
            <div className="flex items-center justify-center gap-12 flex-wrap opacity-30">
              {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"].map((b) => (
                <span key={b} className="text-gray-400 font-bold text-sm tracking-widest uppercase">{b}</span>
              ))}
            </div>
          )}
        </motion.div>

        {/* ── BOTTOM NOTE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-gray-400 mt-10"
        >
          Logos shown with permission · Confidential client references available on request
        </motion.p>

      </div>
    </section>
  </>
);

export default BrandCarousel;
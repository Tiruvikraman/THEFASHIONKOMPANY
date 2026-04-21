import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";
import factoryImg from "@/assets/world-map.png";

const regions = [
  { region: "Europe",       countries: "Netherlands, Germany, Sweden, Spain, Belgium, France, Denmark, Italy",                    color: "#3b82f6" },
  { region: "Americas",     countries: "USA, Canada, Brazil, South America", color: "#10b981" },
  { region: "Middle East",  countries: "UAE, Saudi Arabia, Qatar, Iraq",           color: "#f59e0b" },
  { region: "Asia Pacific", countries: "Australia, Russia, Japan, S. Korea", color: "#a855f7" },
];

const GlobalReachSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
    `}</style>

    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)",
        fontFamily: "'Inter', sans-serif",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      {/* ambient blobs */}
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: "#bfdbfe" }} />
      <div className="absolute -bottom-20 left-0 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none"
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
              Global Reach
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              From Tirupur{" "}
              <span style={{
                background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                to the World.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed md:text-right">
            Exporting to 25+ countries across Europe, North America, Middle East, and Asia Pacific.
          </p>
        </motion.div>

        {/* ── MAP CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 1px 8px rgba(0,0,0,0.06)" }}
        >
          {/* map image */}
          <img
            src={factoryImg}
            alt="Global export map"
            className="w-full object-cover"
            style={{ height: "clamp(280px, 45vw, 420px)" }}
          />

          {/* layered overlay — lighter at top so map is visible, darker at bottom for text */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(7,7,26,0.25) 0%, rgba(7,7,26,0.55) 55%, rgba(7,7,26,0.88) 100%)" }} />

          {/* top-left badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3.5 py-1.5">
            <Globe2 className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase">25+ Countries</span>
          </div>

          {/* ── REGION CARDS overlaid at bottom ── */}
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regions.map((item, i) => (
                <motion.div
                  key={item.region}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="rounded-xl p-4 border border-white/10 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  {/* colored dot + region */}
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: item.color }} />
                    <p className="font-bold text-white text-sm tracking-wide" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {item.region}
                    </p>
                  </div>
                  {/* countries */}
                  <p className="text-white/70 text-xs leading-relaxed">
                    {item.countries}
                  </p>
                  {/* bottom accent */}
                  <div className="mt-3 h-[2px] rounded-full w-8" style={{ background: item.color }} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM NOTE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-gray-400 mt-8"
        >
          New markets onboarded regularly ·{" "}
          <a href="/contact" className="text-blue-500 hover:underline font-medium">
            Enquire about your region
          </a>
        </motion.p>

      </div>
    </section>
  </>
);

export default GlobalReachSection;
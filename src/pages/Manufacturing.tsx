import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Droplets, Scissors, Layers, CheckCircle2, Package, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import factoryImg from "https://apparelresources.com/wp-content/uploads/2017/10/Tirupur-India-apparel-exporters.jpg";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const stages = [
  {
    icon: Factory,      title: "Knitting",        time: "3–4 days",
    accent: "#1d4ed8",  glow: "rgba(29,78,216,0.15)",   bg: "rgba(29,78,216,0.07)",
    desc: "High-speed circular knitting machines produce fabric at 1,200+ RPM with precision gauge control.",
  },
  {
    icon: Droplets,     title: "Dyeing",           time: "5–12 days",
    accent: "#0891b2",  glow: "rgba(8,145,178,0.15)",   bg: "rgba(8,145,178,0.07)",
    desc: "Reactive dyeing with closed-loop water recycling. Pantone color matching to ΔE < 0.5.",
  },
  {
    icon: Scissors,     title: "Cutting",          time: "1–3 days",
    accent: "#7c3aed",  glow: "rgba(124,58,237,0.15)",  bg: "rgba(124,58,237,0.07)",
    desc: "CAD-optimized auto-cutting with <2% fabric waste. Laser cutting for precision patterns.",
  },
  {
    icon: Layers,       title: "Stitching",        time: "3–10 days",
    accent: "#059669",  glow: "rgba(5,150,105,0.15)",   bg: "rgba(5,150,105,0.07)",
    desc: "28 production lines with specialized stations. Flatlock, overlock, and coverseam capabilities.",
  },
  {
    icon: CheckCircle2, title: "Quality Control",  time: "3 day",
    accent: "#b45309",  glow: "rgba(180,83,9,0.15)",    bg: "rgba(180,83,9,0.07)",
    desc: "AQL 1.5 standard. 4-point fabric inspection. Every garment passes needle detection.",
  },
  {
    icon: Package,      title: "Packing",          time: "1–2 days",
    accent: "#9333ea",  glow: "rgba(147,51,234,0.15)",  bg: "rgba(147,51,234,0.07)",
    desc: "Custom packaging, poly-bagging, carton packing with barcoding and SKU management.",
  },
];

/* ─── STAGE CARD ─────────────────────────────────────────────────────────── */
function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = stage.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="relative rounded-xl p-7 overflow-hidden cursor-default group bg-white"
      style={{
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 14px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 36px ${stage.glow}, 0 2px 8px rgba(0,0,0,0.05)`;
        (e.currentTarget as HTMLElement).style.borderColor = `${stage.accent}40`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
      }}
    >
      {/* hover bg wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(ellipse at 15% 15%, ${stage.bg}80, transparent 65%)` }}
      />

      {/* top row: icon + time */}
      <div className="relative flex items-center justify-between mb-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
          style={{ background: stage.bg, border: `1.5px solid ${stage.accent}25` }}
        >
          <Icon className="w-5 h-5" style={{ color: stage.accent }} />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <Clock className="w-3 h-3" />
          {stage.time}
        </div>
      </div>

      {/* stage number */}
      <p className="relative text-[10px] font-bold uppercase tracking-[0.25em] mb-2"
        style={{ color: stage.accent }}>
        Stage {String(index + 1).padStart(2, "0")}
      </p>

      {/* title */}
      <h3
        className="relative text-lg font-black text-gray-900 mb-2"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {stage.title}
      </h3>

      {/* divider */}
      <div className="relative h-px w-8 mb-3" style={{ background: `${stage.accent}40` }} />

      {/* desc */}
      <p className="relative text-sm text-gray-500 leading-relaxed">{stage.desc}</p>

      {/* bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] rounded-full"
        style={{ background: `linear-gradient(90deg, ${stage.accent}, transparent)` }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1.1, delay: index * 0.1 + 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
const Manufacturing = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <main className="pt-[68px]" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
          <img src="https://apparelresources.com/wp-content/uploads/2017/10/Tirupur-India-apparel-exporters.jpg" alt="Factory aerial" className="absolute inset-0 w-full h-full object-cover" />

          {/* layered overlay */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(6,6,22,0.3) 0%, rgba(6,6,22,0.6) 55%, rgba(6,6,22,0.92) 100%)" }} />

          {/* grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(165,180,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }} />

          <div ref={headerRef} className="relative container max-w-6xl px-6 pb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs text-indigo-300 uppercase tracking-[0.25em] font-semibold mb-4">
                <span className="w-4 h-px bg-indigo-400 inline-block" />
                Manufacturing
              </span>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Production{" "}
                <span style={{
                  background: "linear-gradient(90deg, #93c5fd, #c4b5fd)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Stages
                </span>
              </h1>
              <p className="mt-3 text-white/55 text-sm max-w-lg leading-relaxed">
                From raw yarn to export-ready garments — six precision stages, one quality promise.
              </p>
            </motion.div>
          </div>

          {/* bottom clip */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        </section>

        {/* ── STAGES ── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* ambient blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none"
            style={{ background: "#bfdbfe" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none"
            style={{ background: "#c7d2fe" }} />

          <div className="container max-w-6xl px-6 relative">

            {/* section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold mb-3">
                  <span className="w-4 h-px bg-blue-400 inline-block" />
                  Our Process
                </span>
                <h2
                  className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  End-to-End{" "}
                  <span style={{
                    background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    In-House
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
                Full production control means consistent quality at every step — no outsourcing, no compromises.
              </p>
            </motion.div>

            {/* timeline indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-0 mb-10 overflow-x-auto pb-2"
            >
              {stages.map((s, i) => (
                <div key={s.title} className="flex items-center shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: `${s.accent}12`, color: s.accent }}>
                    <span className="font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden sm:inline">{s.title}</span>
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-6 h-px bg-slate-200 mx-1 shrink-0" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {stages.map((stage, i) => (
                <StageCard key={stage.title} stage={stage} index={i} />
              ))}
            </div>

            {/* total lead time banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 rounded-2xl overflow-hidden relative flex flex-col sm:flex-row items-center justify-between gap-6 p-8"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                boxShadow: "0 8px 32px rgba(29,78,216,0.25)",
              }}
            >
              <div className="absolute inset-0 opacity-[0.07]" style={{
                backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                backgroundSize: "18px 18px",
              }} />
              <div className="relative text-center sm:text-left">
                <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-1">Total Lead Time</p>
                <p className="text-white text-3xl font-black" style={{ fontFamily: "'Syne', sans-serif" }}>
                  45–60 Days
                </p>
                <p className="text-white/60 text-sm mt-1">From order confirmation to ready-to-ship</p>
              </div>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg shrink-0"
              >
                Start a Production Order
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-xs text-gray-400 mt-8"
            >
              Rush orders & expedited production available on request ·{" "}
              <Link to="/contact" className="text-blue-500 hover:underline font-medium">
                Contact our team
              </Link>
            </motion.p>

          </div>
        </section>

      </main>
    </>
  );
};

export default Manufacturing;
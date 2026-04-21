import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets, Wind, Recycle, Leaf, Sun, Zap,
  ShieldCheck, Waves, TreePine, RefreshCcw
} from "lucide-react";

import zld   from "@/assets/initiatives/zld.png";
import tree  from "@/assets/initiatives/tree.png";
import waste from "@/assets/initiatives/waste.png";

/* ─── CERTIFICATION IMAGES (glob from assets) ────────────────────────────── */
const certImgs = import.meta.glob(
  "/src/assets/certifications/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);
const certList = Object.values(certImgs).map((m: any) => m.default as string);

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const metrics = [
  {
    icon: Droplets, value: "98.4%", label: "Water Recycled",
    desc: "Closed-loop dyeing system recycles 98.4% of all water used, processing over 2 million liters daily.",
    color: "#0891b2", bg: "rgba(8,145,178,0.08)",
  },
  {
    icon: Wind, value: "62%", label: "Carbon Reduction",
    desc: "Year-over-year carbon reduction through solar power, EV fleet logistics, and optimized supply chains.",
    color: "#059669", bg: "rgba(5,150,105,0.08)",
  },
  {
    icon: Recycle, value: "0 kg", label: "Landfill Waste",
    desc: "Zero waste to landfill. All fabric scraps are repurposed into secondary products or recycled yarn.",
    color: "#7c3aed", bg: "rgba(124,58,237,0.08)",
  },
  {
    icon: Leaf, value: "40%", label: "Organic Cotton",
    desc: "40% of total cotton consumption is GOTS-certified organic, sourced from verified Indian farms.",
    color: "#15803d", bg: "rgba(21,128,61,0.08)",
  },
  {
    icon: Sun, value: "2.4 MW", label: "Solar Capacity",
    desc: "On-site solar arrays generate 2.4 MW, powering 70% of our manufacturing operations.",
    color: "#d97706", bg: "rgba(217,119,6,0.08)",
  },
  {
    icon: Zap, value: "15%", label: "Energy Savings",
    desc: "IoT-enabled machinery monitoring reduces energy consumption through predictive maintenance.",
    color: "#1d4ed8", bg: "rgba(29,78,216,0.08)",
  },
];

const esg = [
  {
    letter: "E", title: "Environmental",
    color: "#059669", bg: "rgba(5,150,105,0.07)",
    points: [
      "ZDHC, GOTS & OEKO-TEX aligned production",
      "Closed-loop water recycling system",
      "Solar-powered manufacturing facility",
      "Zero landfill waste policy",
    ],
  },
  {
    letter: "S", title: "Social",
    color: "#1d4ed8", bg: "rgba(29,78,216,0.07)",
    points: [
      "BSCI & SEDEX compliant factory partners",
      "Fair wages & safe working conditions",
      "No child or forced labour — audited annually",
      "Worker health, welfare & skill training",
    ],
  },
  {
    letter: "G", title: "Governance",
    color: "#7c3aed", bg: "rgba(124,58,237,0.07)",
    points: [
      "ISO 9001 & ISO 14001 certified processes",
      "Transparent supply chain documentation",
      "Regular third-party compliance audits",
      "Full traceability from fibre to shipment",
    ],
  },
];

const initiatives = [
  {
    id: "zld",
    icon: Waves,          // ✅ Lucide component — used as <Icon />
    src: zld,             // ✅ image string   — used as src=""
    tag: "Water",
    title: "Zero Liquid Discharge",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.07)",
    tagBg: "rgba(8,145,178,0.10)",
    gradient: "linear-gradient(135deg, #0891b2, #0e7490)",
    description:
      "Our Zero Liquid Discharge (ZLD) plant ensures that not a single drop of wastewater leaves our facility untreated. Every litre of process water is treated, recovered, and re-introduced into the production cycle — eliminating effluent discharge into rivers, soil, or groundwater entirely.",
    stats: [
      { value: "100%",  label: "Effluent Treated" },
      { value: "2M L",  label: "Recovered Daily" },
      { value: "0 L",   label: "Discharged Externally" },
    ],
    highlights: [
      "Multi-stage effluent treatment plant (ETP)",
      "Reverse osmosis & evaporation recovery",
      "Real-time TDS & pH monitoring sensors",
      "TNPCB compliant ZLD certification",
    ],
  },
  {
    id: "green",
    icon: TreePine,        // ✅ Lucide component
    src: tree,             // ✅ image string
    tag: "Environment",
    title: "Green Initiatives & Afforestation",
    color: "#15803d",
    bg: "rgba(21,128,61,0.07)",
    tagBg: "rgba(21,128,61,0.10)",
    gradient: "linear-gradient(135deg, #15803d, #166534)",
    description:
      "Beyond the factory floor, we invest in the ecosystems around us. Our annual afforestation drives have planted thousands of native trees across Tirupur district, while our campus runs entirely on solar and wind-assisted power. We partner with local NGOs and panchayats to restore green cover, improve air quality, and create biodiversity corridors.",
    stats: [
      { value: "12K+",   label: "Trees Planted" },
      { value: "2.4 MW", label: "Solar Capacity" },
      { value: "70%",    label: "Renewable Energy Use" },
    ],
    highlights: [
      "Annual tree plantation drives with employees",
      "Native species prioritized for local biodiversity",
      "Solar rooftop across all production blocks",
      "Green building norms for new infrastructure",
    ],
  },
  {
    id: "waste",
    icon: RefreshCcw,      // ✅ Lucide component
    src: waste,            // ✅ image string
    tag: "Circularity",
    title: "Waste Recycling & Circularity",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.07)",
    tagBg: "rgba(124,58,237,0.10)",
    gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    description:
      "We operate a fully circular waste model. Fabric offcuts are shredded and respun into recycled yarn. Chemical drums are returned to vendors. Cardboard and plastic from packaging are baled and sent to certified recyclers. Nothing is sent to landfill — every by-product has a second life built into our process from the start.",
    stats: [
      { value: "0 kg",      label: "Landfill Waste" },
      { value: "95%",       label: "Scrap Repurposed" },
      { value: "3 Streams", label: "Sorted & Recycled" },
    ],
    highlights: [
      "Fabric scrap → recycled yarn through open-end spinning",
      "Chemical container take-back programme",
      "Segregated waste streams: textile, plastic, paper, metal",
      "Monthly third-party recycling audits",
    ],
  },
];

/* ─── METRIC CARD ────────────────────────────────────────────────────────── */
function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon   = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="relative rounded-xl p-7 bg-white overflow-hidden group cursor-default"
      style={{
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 36px ${metric.color}28`;
        (e.currentTarget as HTMLElement).style.borderColor = `${metric.color}40`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(ellipse at 15% 15%, ${metric.bg}, transparent 65%)` }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative"
        style={{ background: metric.bg, border: `1px solid ${metric.color}25` }}
      >
        <Icon className="w-5 h-5" style={{ color: metric.color }} />
      </div>

      <p className="relative text-4xl font-black leading-none" style={{ color: metric.color, fontFamily: "'Syne', sans-serif" }}>
        {metric.value}
      </p>
      <p className="relative text-gray-800 font-bold text-sm mt-3">{metric.label}</p>
      <div className="relative h-px w-8 my-3" style={{ background: `${metric.color}40` }} />
      <p className="relative text-gray-500 text-xs leading-relaxed">{metric.desc}</p>

      <motion.div
        className="absolute bottom-0 left-0 h-[3px] rounded-full"
        style={{ background: `linear-gradient(90deg, ${metric.color}, transparent)` }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1.1, delay: index * 0.09 + 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

/* ─── ESG CARD ───────────────────────────────────────────────────────────── */
function ESGCard({ item, index }: { item: typeof esg[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl p-7 bg-white group relative overflow-hidden"
      style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(ellipse at 10% 10%, ${item.bg}, transparent 65%)` }}
      />

      <div className="relative flex items-center gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: item.bg, border: `1.5px solid ${item.color}30` }}
        >
          <span className="text-2xl font-black" style={{ color: item.color, fontFamily: "'Syne', sans-serif" }}>
            {item.letter}
          </span>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: item.color }}>
            {item.letter === "E" ? "Environmental" : item.letter === "S" ? "Social" : "Governance"}
          </p>
          <h3 className="text-lg font-black text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
            {item.title}
          </h3>
        </div>
      </div>

      <ul className="relative space-y-2.5">
        {item.points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" style={{ color: item.color }} />
            <span className="text-gray-600 text-sm leading-snug">{pt}</span>
          </li>
        ))}
      </ul>

      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
      />
    </motion.div>
  );
}

/* ─── CERT GRID ──────────────────────────────────────────────────────────── */
function CertGrid() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!certList.length) return null;

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {certList.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.25 } }}
          className="flex items-center justify-center rounded-xl bg-white p-4 cursor-default group relative overflow-hidden"
          style={{
            height: 90,
            border: "1.5px solid #e0e7ff",
            boxShadow: "0 2px 10px rgba(99,102,241,0.07)",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(99,102,241,0.2)";
            (e.currentTarget as HTMLElement).style.borderColor = "#818cf8";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(99,102,241,0.07)";
            (e.currentTarget as HTMLElement).style.borderColor = "#e0e7ff";
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(135deg, #ede9fe40, #bfdbfe40)" }}
          />
          <img
            src={src}
            alt={`Certification ${i + 1}`}
            className="relative h-12 w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ─── INITIATIVE CARD ────────────────────────────────────────────────────── */
function InitiativeCard({ item, index }: { item: typeof initiatives[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon   = item.icon;   // ✅ Lucide component — safe to use as <Icon />

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden bg-white group"
      style={{
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.4s ease",
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${item.color}22`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
      }}
    >
      {/* ── Image block ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 240 }}>
        <img
          src={item.src}        // ✅ string — used only as src attribute
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* colour tint on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: item.gradient }}
        />

        {/* tag pill */}
        <span
          className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.92)", color: item.color, border: `1px solid ${item.color}30` }}
        >
          {item.tag}
        </span>
      </div>

      {/* ── Content block ── */}
      <div className="p-7">

        {/* icon + title */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: item.tagBg, border: `1px solid ${item.color}25` }}
          >
            <Icon className="w-5 h-5" style={{ color: item.color }} />  {/* ✅ JSX component */}
          </div>
          <h3
            className="text-xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {item.title}
          </h3>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.description}</p>

        {/* stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {item.stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl px-3 py-3 text-center"
              style={{ background: item.tagBg, border: `1px solid ${item.color}15` }}
            >
              <p
                className="text-lg font-black leading-none"
                style={{ color: item.color, fontFamily: "'Syne', sans-serif" }}
              >
                {s.value}
              </p>
              <p className="text-[10px] text-gray-500 mt-1 leading-tight font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* highlights */}
        <ul className="space-y-2">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
              <span className="text-gray-500 text-xs leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* animated bottom bar */}
        <motion.div
          className="mt-6 h-[3px] rounded-full origin-left"
          style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function SustainabilityPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <main className="pt-[68px]" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #07071a 0%, #0d0d2b 60%, #060616 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(165,180,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,1) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #059669, #1d4ed8)" }}
          />

          <div className="container max-w-6xl px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs text-emerald-300 uppercase tracking-[0.25em] font-semibold mb-4">
                <span className="w-4 h-px bg-emerald-400 inline-block" />
                Sustainability & ESG
              </span>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Measured in{" "}
                <span style={{
                  background: "linear-gradient(90deg, #6ee7b7, #93c5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Data,
                </span>
                <br />Not Promises.
              </h1>
              <p className="mt-4 text-white/50 text-sm max-w-lg leading-relaxed">
                Every metric is independently verified. We believe transparency is the only credible path to sustainability.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        </section>

        {/* ── ESG PILLARS ── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="container max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold mb-3">
                  <span className="w-4 h-px bg-blue-400 inline-block" />
                  Our Commitment
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                  ESG{" "}
                  <span style={{ background: "linear-gradient(90deg, #1d4ed8, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Framework
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
                We ensure sustainability, ethical sourcing, and compliance across our entire global supply chain.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {esg.map((item, i) => <ESGCard key={item.letter} item={item} index={i} />)}
            </div>
          </div>
        </section>

        {/* ── IMPACT METRICS ── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: "linear-gradient(170deg, #f1f5f9 0%, #f8fafc 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ background: "#bbf7d0" }}
          />

          <div className="container max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs text-emerald-600 uppercase tracking-[0.25em] font-semibold mb-3">
                  <span className="w-4 h-px bg-emerald-400 inline-block" />
                  Impact Metrics
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Numbers That{" "}
                  <span style={{ background: "linear-gradient(90deg, #059669, #0891b2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Matter
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
                Independently verified data — because real sustainability has receipts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {metrics.map((m, i) => <MetricCard key={m.label} metric={m} index={i} />)}
            </div>
          </div>
        </section>

        {/* ── OUR INITIATIVES ── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "linear-gradient(170deg, #f8fafc 0%, #f0fdf4 60%, #f1f5f9 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="absolute top-20 left-0 w-72 h-72 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: "#6ee7b7" }} />
          <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: "#a5b4fc" }} />

          <div className="container max-w-6xl px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs text-emerald-600 uppercase tracking-[0.25em] font-semibold mb-3">
                  <span className="w-4 h-px bg-emerald-400 inline-block" />
                  On The Ground
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Our{" "}
                  <span style={{ background: "linear-gradient(90deg, #059669, #0891b2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Initiatives 
                  </span>
                   {" "}as a {" "}
                   <span style={{ background: "linear-gradient(90deg, #054196, #0891b2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Cluster 
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
                Concrete programmes that go beyond compliance — built into how we operate every single day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initiatives.map((item, i) => (
                <InitiativeCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        


      </main>
    </>
  );
}
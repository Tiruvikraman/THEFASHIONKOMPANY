import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Globe2, Factory, Users, PackageCheck } from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const stats = [
  {
    value: 28, suffix: "+",
    label: "Years of Experience",
    sub: "In apparel export sourcing",
    icon: PackageCheck,
    color: "#1d4ed8",
    glow: "rgba(29,78,216,0.15)",
    bg: "rgba(29,78,216,0.07)",
    accent: "#dbeafe",
  },
  {
    value: 25, suffix: "+",
    label: "Countries Served",
    sub: "Across Europe, Americas & Middle East",
    icon: Globe2,
    color: "#0f766e",
    glow: "rgba(15,118,110,0.15)",
    bg: "rgba(15,118,110,0.07)",
    accent: "#ccfbf1",
  },
  {
    value: 50, suffix: "+",
    label: "Vetted Factories",
    sub: "Audited & compliance-ready",
    icon: Factory,
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.15)",
    bg: "rgba(124,58,237,0.07)",
    accent: "#ede9fe",
  },
  {
    value: 24, suffix: "+",
    label: "Global Clients",
    sub: "Brands, retailers & importers",
    icon: Users,
    color: "#b45309",
    glow: "rgba(180,83,9,0.15)",
    bg: "rgba(180,83,9,0.07)",
    accent: "#fef3c7",
  },
  // {
  //   value: 20, suffix: "M+",
  //   label: "Garments Exported",
  //   sub: "From basics to complex orders",
  //   icon: PackageCheck,
  //   color: "#1d4ed8",
  //   glow: "rgba(29,78,216,0.15)",
  //   bg: "rgba(29,78,216,0.07)",
  //   accent: "#dbeafe",
  // },
];

/* ─── ANIMATED COUNTER ───────────────────────────────────────────────────── */
function Counter({ target, prefix = "", suffix = "", inView }: {
  target: number; prefix?: string; suffix?: string; inView: boolean;
}) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 50, damping: 16 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);
  useEffect(() => { if (inView) mv.set(target); }, [inView, target, mv]);
  return <motion.span>{display}</motion.span>;
}

/* ─── CARD ───────────────────────────────────────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="relative rounded-xl p-8 overflow-hidden cursor-default group"
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0 1px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${stat.glow}, 0 1px 8px rgba(0,0,0,0.05)`;
        (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}40`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 12px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
      }}
    >
      {/* hover bg wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl"
        style={{ background: `radial-gradient(ellipse at 15% 15%, ${stat.accent}90, transparent 60%)` }}
      />

      {/* icon */}
      <div
        className="relative w-10 h-10 rounded-lg flex items-center justify-center mb-6"
        style={{ background: stat.bg, border: `1px solid ${stat.color}20` }}
      >
        <Icon className="w-5 h-5" style={{ color: stat.color }} />
      </div>

      {/* number */}
      <div
        className="relative leading-none tracking-tight font-black"
        style={{ color: stat.color, fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem,5vw,3.5rem)" }}
      >
        <Counter
          target={stat.value}
          prefix={(stat as any).prefix ?? ""}
          suffix={stat.suffix}
          inView={inView}
        />
      </div>

      {/* divider */}
      <div className="relative mt-4 mb-3 h-px w-10" style={{ background: `${stat.color}30` }} />

      {/* label */}
      <p className="relative text-gray-800 font-semibold text-sm leading-snug">{stat.label}</p>
      <p className="relative text-gray-400 text-xs mt-1 leading-relaxed">{stat.sub}</p>

      {/* bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${stat.color}, ${stat.accent})` }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1.1, delay: index * 0.12 + 0.35, ease: "easeOut" }}
      />
    </motion.div>
  );
}

/* ─── SECTION ────────────────────────────────────────────────────────────── */
const StatsSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
    `}</style>

    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 60%, #f8fafc 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* very subtle top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ambient blobs — very soft */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: "#bfdbfe" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "#c7d2fe" }} />

      <div className="container max-w-6xl px-6 relative">

        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold mb-3">
              <span className="w-4 h-px bg-blue-400 inline-block" />
              Our Track Record
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Trusted by Brands{" "}
              <span style={{
                background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Worldwide
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed md:text-right">
            Decades of sourcing & manufacturing expertise, an extensive factory network, and a commitment
            to delivery excellence — every single order.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

      </div>
    </section>
  </>
);

export default StatsSection;
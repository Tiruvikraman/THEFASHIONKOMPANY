import logo from "@/assets/logo.png";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Globe, Users, Sparkles, Shirt, Tag, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const highlights = [
  { icon: Globe,    label: "25+ Countries Served"     },
  { icon: Sparkles, label: "Large Production Capacity" },
  { icon: Users,    label: "Strong Vendor Network"    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Custom hanger icon — lucide has no hanger, so a small hand-drawn one */
const HangerIcon = ({ size = 40, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M12 3a1.5 1.5 0 1 1 1.5 1.5" />
    <path d="M12 4.5v2" />
    <path d="M12 6.5 3 12.5a1 1 0 0 0 0.55 1.83H20.45A1 1 0 0 0 21 12.5L12 6.5Z" />
    <path d="M5 17.5h14" />
  </svg>
);

/* Decorative scattered garment motifs, floating + parallax */
const decorItems = [
  { Icon: HangerIcon, side: "left",  top: "12%",  x: "6%",  size: 56, rot: -18, depth: 1.0, delay: 0.2,  float: 6, color: "rgba(120,135,255,0.55)" },
  { Icon: Shirt,       side: "left",  top: "48%",  x: "13%", size: 38, rot: 10,  depth: 0.5, delay: 0.5,  float: 4, color: "rgba(255,255,255,0.4)"  },
  { Icon: Tag,         side: "left",  top: "74%",  x: "4%",  size: 30, rot: -8,  depth: 0.8, delay: 0.8,  float: 5, color: "rgba(120,135,255,0.45)" },

  { Icon: HangerIcon, side: "right", top: "20%",  x: "8%",  size: 42, rot: 22,  depth: 0.7, delay: 0.35, float: 5, color: "rgba(255,255,255,0.4)"  },
  { Icon: Scissors,    side: "right", top: "55%",  x: "5%",  size: 34, rot: -14, depth: 1.0, delay: 0.65, float: 6, color: "rgba(120,135,255,0.55)" },
  { Icon: Shirt,       side: "right", top: "78%",  x: "14%", size: 48, rot: 8,   depth: 0.5, delay: 0.95, float: 4, color: "rgba(255,255,255,0.4)"  },
];

/* ─── PARALLAX MOUSE ─────────────────────────────────────────────────────── */
function useParallax() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mx.set(((clientX - left) / width  - 0.5) * 14);
    my.set(((clientY - top)  / height - 0.5) * 10);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };
  return { sx, sy, handleMouseMove, handleMouseLeave };
}

/* One floating decorative icon, drifting up/down forever + reacting to parallax */
const DecorIcon = ({ item, sx, sy }: { item: typeof decorItems[number]; sx: any; sy: any }) => {
  const px = useTransform(sx, (v: number) => `${v * item.depth * (item.side === "left" ? -1 : 1)}px`);
  const py = useTransform(sy, (v: number) => `${v * item.depth}px`);
  const { Icon } = item;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: item.top,
        [item.side]: item.x,
        x: px,
        y: py,
        color: item.color,
        pointerEvents: "none",
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -item.float, 0], rotate: [item.rot, item.rot + 4, item.rot] }}
        transition={{ duration: 5 + item.float, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
      >
        {Icon === HangerIcon
          ? <HangerIcon size={item.size} style={{ filter: "drop-shadow(0 0 14px rgba(80,92,228,0.45))" }} />
          : <Icon size={item.size} style={{ filter: "drop-shadow(0 0 14px rgba(80,92,228,0.45))" }} />
        }
      </motion.div>
    </motion.div>
  );
};

/* ─── HERO ───────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const { sx, sy, handleMouseMove, handleMouseLeave } = useParallax();
  const txtX = useTransform(sx, v => `${v * 0.25}px`);
  const txtY = useTransform(sy, v => `${v * 0.25}px`);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=DM+Sans:wght@300;400;500;600&display=swap');

        .gcm-logo-text {
          font-family: 'Pristina', 'Segoe Script', 'Brush Script MT', 'Great Vibes', cursive;
          letter-spacing: 0.5px;
        }
        .gcm-hero { font-family: 'DM Sans', sans-serif; }

        .gcm-badge {
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.07);
        }
        .gcm-chip {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .gcm-chip:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        .gcm-btn-primary {
          background: #2752e0;
          box-shadow: 0 4px 20px rgba(16, 35, 157, 0.4);
          transition: box-shadow 0.3s, transform 0.3s, background 0.3s;
        }
        .gcm-btn-primary:hover {
          background: #1723a8;
          box-shadow: 0 6px 32px rgba(42, 55, 200, 0.55);
          transform: translateY(-2px);
        }
        .gcm-btn-secondary {
          border: 1px solid rgba(255,255,255,0.22);
          background: transparent;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .gcm-btn-secondary:hover {
          border-color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }
        .gcm-breadcrumb a, .gcm-breadcrumb span {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .gcm-breadcrumb a:hover { color: #fff; }
        .gcm-breadcrumb .sep    { color: rgba(255,255,255,0.3); margin: 0 6px; }
        .gcm-breadcrumb .active { color: #fff; font-weight: 500; }

        @media (max-width: 900px) {
          .gcm-decor { display: none; }
        }
      `}</style>

      <section
        className="gcm-hero relative min-h-svh flex flex-col overflow-hidden"
        style={{ background: "#111214" }}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
      >
        {/* subtle grain overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

        {/* red ambient glow */}
        <div style={{
          position: "absolute", left: "-5%", bottom: "10%",
          width: 500, height: 500,
          background: "rgba(196,28,28,0.07)",
          filter: "blur(100px)", borderRadius: "50%",
          zIndex: 1, pointerEvents: "none",
        }} />

        {/* purple ambient glow, right side, balances composition */}
        <div style={{
          position: "absolute", right: "-6%", top: "18%",
          width: 460, height: 460,
          background: "rgba(80,92,228,0.08)",
          filter: "blur(110px)", borderRadius: "50%",
          zIndex: 1, pointerEvents: "none",
        }} />

        {/* ── DECORATIVE GARMENT MOTIFS, filling left/right gaps ── */}
        <div className="gcm-decor" style={{ position: "absolute", inset: 0, zIndex: 2 }}>
          {decorItems.map((item, i) => (
            <DecorIcon key={i} item={item} sx={sx} sy={sy} />
          ))}
        </div>

        {/* ── BREADCRUMB ── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gcm-breadcrumb relative flex justify-center"
          style={{ zIndex: 10, padding: "28px 56px 0" }}
        >
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <Link to="/about">About</Link>
          <span className="sep">/</span>
          <Link to="/services">Services</Link>
          <span className="sep">/</span>
          <Link to="/sourcing">Sourcing</Link>
          <span className="sep">/</span>
          <span className="active">Global Sourcing</span>
        </motion.nav>

        {/* ── SINGLE CENTERED COLUMN ── */}
        <div
          className="relative flex-1 flex flex-col items-center justify-center text-center"
          style={{
            zIndex: 10,
            padding: "65px 6% 72px",
          }}
        >

          <motion.div
            style={{ x: txtX, y: txtY, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 720 }}
          >

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-flex items-center gap-2 gcm-badge rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
                Your Trusted Manufacturing & Sourcing Consultant · Tiruppur, India
              </span>
            </motion.div>

            {/* Logo mark */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
              className="flex items-center justify-center mb-6"
            >
              <img
                src={logo}
                alt="The Fashion Kompany"
                style={{ height: "200px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
              />
            </motion.div>

            {/* red accent line */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
              style={{ height: 3, width: "100%", maxWidth: 360, background: "linear-gradient(90deg, rgba(63, 54, 235, 0.55), rgba(63, 54, 235, 0.55), transparent)", margin: "0 auto 24px" }}
            />

            {/* description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.9}
              style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.8, maxWidth: 560, marginBottom: "32px", fontWeight: 300 }}
            >
              We prioritize developing garments that have a positive impact on people and the planet.
              Our goal is to deliver exceptional value, quality and style — from product development
              to doorstep delivery — serving men, women, kids &amp; infants across global markets.
            </motion.p>

            {/* highlight chips */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={1.1}
              className="flex flex-wrap gap-3 mb-10 justify-center"
            >
              {highlights.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 1.0 + i * 0.1 }}
                  className="gcm-chip flex items-center gap-2 rounded-full px-4 py-2 cursor-default"
                >
                  <Icon style={{ width: 13, height: 13, color: "#505ce4" }} />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={1.3}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="gcm-btn-primary inline-flex items-center gap-2 rounded-full text-white font-semibold text-sm tracking-wide"
                style={{ padding: "14px 32px" }}
              >
                Send Inquiry
                <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
              <Link
                to="/about"
                className="gcm-btn-secondary inline-flex items-center gap-2 rounded-full text-white font-medium text-sm tracking-wide"
                style={{ padding: "14px 32px" }}
              >
                Our Services
              </Link>
            </motion.div>

          </motion.div>

        </div>

        {/* location label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
          style={{ position: "absolute", bottom: 28, left: 0, right: 0, zIndex: 10, alignItems: "center", gap: 10 }}
        >
          <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.3)" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Tiruppur · Tamil Nadu · India
          </span>
        </motion.div>

      </section>
    </>
  );
};

export default HeroSection;
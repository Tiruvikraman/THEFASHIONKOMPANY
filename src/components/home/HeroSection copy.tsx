import logo from "@/assets/logo.png";
import bg from "@/assets/Team/img1.png";
import bg2 from "@/assets/Team/img2.png";
import bg5   from "@/assets/Team/img5.png";
import bg7   from "@/assets/Team/group_photo.png";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const highlights = [
  { icon: Globe,       label: "25+ Countries Served"     },
  { icon: Sparkles,    label: "Large Production Capacity" },
  { icon: Users,       label: "Strong Vendor Network"    },
  // { icon: ShieldCheck, label: "Quality Control Systems"  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }),
};

const bgImages = [bg, bg2, bg5, bg7];

/* ─── PARALLAX MOUSE ─────────────────────────────────────────────────────── */
function useParallax() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mx.set(((clientX - left) / width - 0.5) * 18);
    my.set(((clientY - top)  / height - 0.5) * 12);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };
  return { sx, sy, handleMouseMove, handleMouseLeave };
}

/* ─── HERO ───────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const { sx, sy, handleMouseMove, handleMouseLeave } = useParallax();
  const txtX = useTransform(sx, v => `${v * 0.3}px`);
  const txtY = useTransform(sy, v => `${v * 0.3}px`);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: "0%", opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 1 }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

        .gcm-logo-text {
          font-family: 'Pristina', 'Segoe Script', 'Brush Script MT', 'Great Vibes', cursive;
          letter-spacing: 0.5px;
        }
        .gcm-hero { font-family: 'DM Sans', sans-serif; }

        @keyframes gcm-shimmer {
          0%   { background-position: -300% center; }
          100% { background-position:  300% center; }
        }

        .gcm-badge {
          backdrop-filter: blur(14px);
          border: 1px solid rgba(165,180,252,0.3);
          background: rgba(255,255,255,0.09);
        }

        .gcm-chip {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .gcm-chip:hover {
          background: rgba(99,102,241,0.22);
          border-color: rgba(165,180,252,0.55);
          transform: translateY(-2px);
        }

        .gcm-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          box-shadow: 0 0 28px rgba(99,102,241,0.55), 0 4px 18px rgba(99,102,241,0.3);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .gcm-btn:hover {
          box-shadow: 0 0 48px rgba(99,102,241,0.75), 0 6px 28px rgba(99,102,241,0.45);
          transform: translateY(-2px);
        }

        .gcm-grain::before {
          content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          opacity: 0.35;
        }

        .gcm-dot {
          transition: width 0.4s ease, background 0.4s ease;
        }

        /* Deep text shadow so brand name is always legible over any bg image */
        .gcm-brand-shadow {
          text-shadow:
            0 2px 8px rgba(0,0,0,0.6),
            0 4px 24px rgba(0,0,0,0.5),
            0 8px 48px rgba(0,0,0,0.4);
          filter: drop-shadow(0 0 20px rgba(222, 209, 209, 0.01));
        }

        /* Logo drop shadow to keep it visible on any bg */
        .gcm-logo-shadow {
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.55)) drop-shadow(0 4px 20px rgba(0,0,0,0.4));
        }
      `}</style>

      <section
        className="gcm-hero gcm-grain relative min-h-svh flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
      >

        {/* ── SLIDING BG IMAGES ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.85, ease: [0.77, 0, 0.18, 1] }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImages[current]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>

          {/* stronger dark overlay for text legibility */}
          <div className="absolute inset-0 z-10" style={{ background: "rgba(8,6,24,0.0)" }} />

          {/* purple tint */}
          <div className="absolute inset-0 z-10"
            style={{ background: "linear-gradient(135deg, rgba(15,12,41,0.05) 0%, rgba(30,27,75,0.05) 50%, rgba(15,23,42,0.55) 100%)" }} />

          {/* extra vignette — darkens edges, keeps center readable */}
          <div className="absolute inset-0 z-10"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.005) 100%)" }} />
        </div>

        {/* ── AMBIENT GLOWS ── */}
        {([
          ["8%","15%",420,"rgba(99,102,241,0.18)",0],
          ["65%","5%", 300,"rgba(168,85,247,0.14)",1.5],
          ["80%","55%",340,"rgba(236,72,153,0.10)",3],
          ["20%","68%",270,"rgba(99,102,241,0.11)",2],
        ] as const).map(([l,t,s,c,d],i)=>(
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ left:l, top:t, width:s, height:s, background:c, filter:"blur(80px)", zIndex:11 }}
            animate={{ scale:[1,1.18,1], opacity:[0.3,0.55,0.3] }}
            transition={{ duration:6, delay:d, repeat:Infinity, ease:"easeInOut" }} />
        ))}

        {/* ── GRID ── */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          zIndex: 11,
          backgroundImage:"linear-gradient(rgba(165,180,252,1) 1px,transparent 1px),linear-gradient(90deg,rgba(165,180,252,1) 1px,transparent 1px)",
          backgroundSize:"80px 80px"
        }} />

        {/* ── CONTENT ── */}
        <motion.div
          className="relative text-center container max-w-5xl px-6 flex flex-col items-center"
          style={{ x: txtX, y: txtY, zIndex: 20 }}
        >
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] }}
            className="inline-flex items-center gap-2 gcm-badge rounded-full px-5 py-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/90 tracking-[0.22em] uppercase font-semibold">
              Your Trusted Sourcing Consultant · Tiruppur, India
            </span>
          </motion.div>

          {/* ── LOGO + BRAND NAME — centered row ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4"
          >
            <img
              src={logo}
              alt="Gloria Casa Moda"
              className="gcm-logo-shadow"
              style={{ height: "88px", width: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <h1
              className="gcm-logo-text gcm-brand-shadow"
              style={{
                fontSize: "clamp(3rem, 10vw, 7rem)",
                color: "#c41c1c",
                lineHeight: 1.05,
              }}
            >
              Gloria Casa Moda
            </h1>
          </motion.div>

          {/* thin accent line */}
          <div className="flex justify-center mt-3 mb-8 w-full">
            <div className="h-[1px] w-full max-w-md rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(165,180,252,0.1), transparent)" }} />
          </div>

          {/* tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22,1,0.36,1] }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}
          >
            We specialize in producing and sourcing high-quality garments for men, women,
            kids &amp; infants — from product development to doorstep delivery, with full transparency.
          </motion.p>

          {/* highlight chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22,1,0.36,1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {highlights.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.95 + i * 0.1 }}
                className="gcm-chip flex items-center gap-2 rounded-full px-4 py-2 cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-indigo-300" />
                <span className="text-xs text-white/90 font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22,1,0.36,1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="gcm-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm tracking-wide">
              Send Inquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white/80 hover:text-white font-medium text-sm tracking-wide border border-white/20 hover:border-white/40 hover:bg-white/6 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>

          {/* ── SLIDE DOT INDICATORS ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            {bgImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="gcm-dot h-1.5 rounded-full"
                style={{
                  width: i === current ? "28px" : "8px",
                  background: i === current ? "rgba(165,180,252,0.9)" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </motion.div>

        </motion.div>

      </section>
    </>
  );
};

export default HeroSection;
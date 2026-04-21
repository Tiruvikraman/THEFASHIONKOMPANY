import logo from "@/assets/logo.png";
import bg  from "@/assets/Team/img1.png";
import bg2 from "@/assets/Team/img2.png";
import bg5 from "@/assets/Team/img5.png";
import bg7 from "@/assets/Team/group_photo.png";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Globe, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

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
    mx.set(((clientX - left) / width  - 0.5) * 14);
    my.set(((clientY - top)  / height - 0.5) * 10);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };
  return { sx, sy, handleMouseMove, handleMouseLeave };
}

/* ─── SCROLLING PHOTO BOX ────────────────────────────────────────────────── */
const ScrollingPhotoBox = () => {
  const clipRef  = useRef<HTMLDivElement>(null); // the overflow:hidden box
  const trackRef = useRef<HTMLDivElement>(null); // the flex row of images
  const animRef  = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // index always goes 0→1→2→3→0→1… using the ORIGINAL 4 images (no tripling needed)
  const indexRef = useRef(0);
  const posRef   = useRef(0); // current translateX offset in px

  useEffect(() => {
    const clip  = clipRef.current;
    const track = trackRef.current;
    if (!clip || !track) return;

    const swipeToNext = () => {
      cancelAnimationFrame(animRef.current);

      const boxW = clip.offsetWidth;            // exact pixel width of the clipping box
      indexRef.current = (indexRef.current + 1) % bgImages.length;
      const target = indexRef.current * boxW;   // exact pixel we need to land on
      const speed  = 24;                        // px per frame — higher = faster swipe

      const sweep = () => {
        const diff = target - posRef.current;
        if (diff <= speed) {
          // Snap exactly — guarantees only 1 image is ever visible
          posRef.current = target;
          track.style.transform = `translateX(-${posRef.current}px)`;
          timerRef.current = setTimeout(swipeToNext, 3000);
          return;
        }
        posRef.current += speed;
        track.style.transform = `translateX(-${posRef.current}px)`;
        animRef.current = requestAnimationFrame(sweep);
      };

      animRef.current = requestAnimationFrame(sweep);
    };

    // Hold first image for 3 s then start cycling
    timerRef.current = setTimeout(swipeToNext, 3000);

    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    /* clip box — overflow hidden, exact size of the right column */
    <div
      ref={clipRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* track: all 4 images side by side, each exactly as wide as the clip box */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          height: "100%",
          width: `${bgImages.length * 100}%`,  // e.g. 400% for 4 images
          willChange: "transform",
        }}
      >
        {bgImages.map((src, i) => (
          <div
            key={i}
            style={{
              width: `${100 / bgImages.length}%`, // each slide = 1/4 of track = 100% of clip
              height: "100%",
              flexShrink: 0,
            }}
          >
            <img
              src={src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
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

        {/* ── BREADCRUMB ── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gcm-breadcrumb relative"
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

        {/* ── TWO-COLUMN GRID — text left | photo right (Target HK style) ── */}
        <div
          className="relative flex-1"
          style={{
            zIndex: 10,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",  // equal halves; change to "55fr 45fr" to give more room to text
            gap: "48px",
            padding: "48px 56px 72px",
            alignItems: "center",
          }}
        >

          {/* ── LEFT: TEXT CONTENT ── */}
          <motion.div style={{ x: txtX, y: txtY }}>

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-flex items-center gap-2 gcm-badge rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
                Your Trusted Sourcing Consultant · Tiruppur, India
              </span>
            </motion.div>

            {/* Logo + Brand Name */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
              className="flex items-center gap-5 mb-6"
            >
              <img
                src={logo}
                alt="Gloria Casa Moda"
                style={{ height: "64px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
              />
              <h1
                className="gcm-logo-text"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", color: "#c41c1c", lineHeight: 1.05, textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
              >
                Gloria Casa Moda
              </h1>
            </motion.div>

            {/* red accent line */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
              style={{ height: 3, width: "100%", maxWidth: 360, background: "linear-gradient(90deg, rgba(63, 54, 235, 0.55), transparent)", marginBottom: "24px" }}
            />

            {/* description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.9}
              style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "rgba(255,255,255,0.80)", lineHeight: 1.8, maxWidth: 500, marginBottom: "32px", fontWeight: 300 }}
            >
              We prioritize developing garments that have a positive impact on people and the planet.
              Our goal is to deliver exceptional value, quality and style — from product development
              to doorstep delivery — serving men, women, kids &amp; infants across global markets.
            </motion.p>

            {/* highlight chips */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={1.1}
              className="flex flex-wrap gap-3 mb-10"
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
              className="flex flex-wrap gap-4"
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

          {/* ── RIGHT: SCROLLING PHOTO BOX ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: "420px",   // ← adjust this to make the photo box taller/shorter
              position: "relative",
            }}
          >
            <ScrollingPhotoBox />
          </motion.div>

        </div>

        {/* location label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: 28, left: 56, zIndex: 10, display: "flex", alignItems: "center", gap: 10 }}
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
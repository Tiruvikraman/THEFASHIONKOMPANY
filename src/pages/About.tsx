import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Shield, TrendingUp, CheckCircle, Award, Package,
  Search, FileText, Truck, ClipboardCheck, Factory, Clock,
  DollarSign, MessageSquare, BadgeCheck, MapPin, ArrowRight,
  Globe, Star, Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import bgImage   from "@/assets/abt_pg_bg.jpeg";
import founderImg from "@/assets/founder_image.jpeg";
import logo      from "@/assets/logo.png";
import tea       from "@/assets/Position_logo/tea.png";
import abat      from "@/assets/Position_logo/abat.png";
import ml        from "@/assets/brand_images/masculinilatino.png";
import bsl       from "@/assets/Position_logo/bsl.png";

/* ─── FOUNDER ORG POSITIONS ─────────────────────────────────────────────── */
const founderPositions = [
  {
    role: "Managing Director",
    org: "Gloria Casa Moda",
    logo: logo,
    color: "#1d4ed8",
  },
  {
    role: "Co-Founder",
    org: "Masculino Latino",
    logo: ml,
    color: "#7c3aed",
  },
  {
    role: "Executive Committee Member           / Vice Chairman — Branding & Sustainability Committee",
    org: "Tirupur Exporters Association",
    logo: tea,
    color: "#0891b2",
  },
  {
    role: "Co-Founder & Vice President",
    org: "Association of Buying Agents for Textiles (ABAT)",
    logo: abat,
    color: "#059669",
  },
  {
    role: "Vice President for South Region",
    org: "Brands and Sourcing Leaders Association (BSL)",
    logo: bsl,
    color: "#059669",
  },
];

/* ─── ANIMATION VARIANTS ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }),
};
const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const whatWeDo = [
  { icon: Package,        text: "Product Development",   sub: "Based on detailed client requirements & spec sheets" },
  { icon: ClipboardCheck, text: "Sampling & Design",     sub: "Precision execution from initial concept to final sample" },
  { icon: Search,         text: "Vendor Sourcing",       sub: "Factory evaluation, audits & capability assessment" },
  { icon: DollarSign,     text: "Costing & Negotiation", sub: "Transparent pricing with highly competitive pricing" },
  { icon: Clock,          text: "Production Follow-Up",  sub: "Real-time timeline tracking & milestone management" },
  { icon: Shield,         text: "Quality Control",       sub: "In-line & final inspections to global standards" },
  { icon: FileText,       text: "Export Documentation",  sub: "Full logistics coordination & compliance paperwork" },
  { icon: Truck,          text: "Shipment & Forwarding", sub: "Efficient logistics coordination with timely and secure global delivery" },
];

const advantages = [
  { icon: Factory, label: "End-to-End Infrastructure",  color: "#f59e0b" },
  { icon: Award,   label: "Skilled Workforce",           color: "#10b981" },
  { icon: Globe,   label: "Global Compliance",           color: "#3b82f6" },
  { icon: Zap,     label: "Cost-Effective Production",   color: "#ec4899" },
  { icon: Truck,   label: "Fast Turnaround",             color: "#8b5cf6" },
];

const stats = [
  { value: "30+",  label: "Years Experience" },
  { value: "25+",  label: "Countries Served" },
  { value: "25+",  label: "Happy Clients" },
  { value: "20M+", label: "Units Exported" },
];

/* ─── FLOATING PARTICLE ──────────────────────────────────────────────────── */
const Particle = ({ x, y, delay, size }: { x: number; y: number; delay: number; size: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`, top: `${y}%`, width: size, height: size,
      background: "radial-gradient(circle, rgba(139,92,246,0.05), transparent)",
    }}
    animate={{ y: [0, -30, 0], opacity: [0.4, 0.9, 0.4] }}
    transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
const About = () => {
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="pt-20 overflow-x-hidden font-sans" style={{ fontFamily: "'Outfit', 'Segoe UI', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600&display=swap');
        * { font-family: 'Outfit', 'Segoe UI', sans-serif; }
        .playfair { font-family: 'Playfair Display', serif; }
        .gcm-logo-text {
          font-family: 'Pristina', 'Segoe Script', 'Brush Script MT', 'Great Vibes', cursive;
          letter-spacing: 0.5px;
        }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .shimmer-text {
          background: linear-gradient(90deg, #c7d2fe, #a78bfa, #f0abfc, #818cf8, #c7d2fe);
          background-size: 200%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .glow-card:hover { box-shadow: 0 0 0 2px #818cf8, 0 20px 50px -10px rgba(129,140,248,0.4); }
        .grain::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat; opacity: 0.35;
        }
        .pos-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .pos-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px -8px rgba(0,0,0,0.12); }
      `}</style>

      {/* ════ HERO ════ */}
      <section ref={heroRef} className="relative min-h-[88vh] flex items-center overflow-hidden grain">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/95" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        </motion.div>

        {([
          [10, 20, 0,   12],
          [80, 60, 1,   8 ],
          [30, 75, 2,   14],
          [60, 15, 0.5, 10],
          [90, 40, 1.5, 6 ],
        ] as [number, number, number, number][]).map(([x, y, d, s], i) => (
          <Particle key={i} x={x} y={y} delay={d} size={s} />
        ))}

        <motion.div className="relative container max-w-6xl px-6 py-32" style={{ opacity: heroOpacity }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8">
            <MapPin className="w-4 h-4 text-indigo-300" />
            <span className="text-xs text-indigo-200 tracking-widest uppercase font-semibold">Tiruppur, India · Est. 1998</span>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
            className="flex items-center gap-6 mb-4">
            <img src={logo} alt="Gloria Casa Moda" style={{ height: "96px", width: "auto", objectFit: "contain", flexShrink: 0 }} />
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
              <span className="gcm-logo-text" style={{ color: "#ac1b1b" }}>Gloria Casa Moda</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
            Your trusted apparel sourcing partner — bridging world-class Indian manufacturing
            with global fashion demands. Quality, speed, and integrity at every stitch.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="group flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-indigo-500/30 transition-all"
            >
              Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white px-7 py-3.5 rounded-full backdrop-blur transition-all"
            >
              View Catalogue
            </button>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="mt-16 flex flex-wrap gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* ════ FOUNDER SECTION ════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/60 to-transparent pointer-events-none" />
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-indigo-100" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-indigo-200" />

        <div className="container max-w-6xl px-6 relative">

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-xs text-indigo-400 uppercase tracking-[0.3em] mb-3 font-semibold">
            Our Story
          </motion.p>

          {/* ── Top row: portrait + text ── */}
          <div className="flex flex-wrap gap-16 items-start">

            {/* Portrait */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="w-64 shrink-0 sticky top-28 self-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20 blur-sm" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-indigo-100 shadow-2xl shadow-indigo-200/50">
                  <img src={founderImg} className="w-full h-full object-cover" alt="Mr. Mezhiselvan" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                    <p className="text-white text-sm font-bold">Mr. Mezhi Selvan</p>
                    <p className="text-indigo-200 text-xs">Managing Director</p>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl border border-indigo-100 px-3 py-2 flex items-center gap-2"
                >
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-gray-700">25+ Yrs</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Text column */}
            <div className="flex-1 min-w-[280px] space-y-7">
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black leading-tight">
                <span className="text-gray-900">Built for Work.</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent playfair italic">
                  Designed for Performance.
                </span>
              </motion.h2>

              {[
                "The story begins in the heart of Tiruppur — India's knit capital — where Gloria Casa Moda was founded with a singular vision: to be the most reliable sourcing partner for global apparel buyers. What started as a small FashionWear operation has grown into a full-service export sourcing destination trusted by brands across Europe, the Americas, and the Middle East.",
                "In addition to our Fashionwear division, we have expanded our capabilities to cover workwear apparel, sustainable collections, and performance wear. Our network spans over 40+ vetted factories across South India, giving our clients unmatched production flexibility.",
                "Every fabric is carefully selected, every stitch inspected. We believe that great clothing starts with great sourcing — and great sourcing starts with people who genuinely care.",
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="text-gray-600 text-lg leading-relaxed">
                  {text}
                </motion.p>
              ))}

              {/* commitment card */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
                className="relative overflow-hidden rounded-2xl p-6 border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <BadgeCheck className="text-indigo-500 w-7 h-7 mb-3" />
                <h3 className="text-lg font-bold text-indigo-800 mb-2">Our Commitment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We work closely with skilled artisans and factory partners who share our commitment to ethical manufacturing,
                  fair wages, and environmental responsibility — so every order you place reflects values you're proud of.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ── POSITIONS ROW ── */}
          <div className="mt-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-100 to-transparent" />
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold shrink-0">
                Roles &amp; Affiliations
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-indigo-100 to-transparent" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {founderPositions.map((pos, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="pos-card relative flex flex-col gap-4 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm overflow-hidden"
                >
                  {/* accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${pos.color}, ${pos.color}88)` }}
                  />

                  {/* org logo — larger container */}
                  <div
                    className="w-20 h-20 rounded-xl shrink-0 overflow-hidden flex items-center justify-center border shadow-sm"
                    style={{ borderColor: `${pos.color}30`, background: `${pos.color}10` }}
                  >
                    <img
                      src={pos.logo}
                      alt={pos.org}
                      className="w-14 h-14 object-contain"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const parent = e.currentTarget.parentElement!;
                        if (!parent.querySelector("span")) {
                          const span = document.createElement("span");
                          span.textContent = pos.org[0];
                          span.style.cssText = `font-size:22px;font-weight:700;color:${pos.color}`;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>

                  {/* text — bumped up one size each */}
                  <div className="flex-1">
                    <p className="text-base font-bold text-gray-800 leading-snug mb-1.5">{pos.org}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{pos.role}</p>
                  </div>

                  {/* footer dot */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                    <div className="w-2 h-2 rounded-full" style={{ background: pos.color }} />
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Active</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ════ WHAT WE DO ════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0f0f23 0%, #1a1040 50%, #0f172a 100%)" }}>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} />

        <div className="container max-w-6xl px-6 relative">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-indigo-400 text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Services</p>
            <h2 className="text-5xl font-black text-white">
              What We <span className="shimmer-text">Do</span>
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Since our inception in the year 1998, we have been consistently following a path of progressive development
              with our product excellence, customisation and timely delivery. Today we are reckoned as a dependable and
              professionally competent organisation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -6 }}
                className="glow-card group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 cursor-default overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                    <item.icon className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.text}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.sub}</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-[40px] bg-gradient-to-br from-indigo-500/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} />
      </section>

      {/* ════ TIRUPPUR ADVANTAGE ════ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container max-w-6xl px-6">
          <div className="flex flex-wrap gap-16 items-center">

            <div className="flex-1 min-w-[280px]">
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-xs text-indigo-400 uppercase tracking-[0.3em] mb-3 font-semibold">
                Why Tiruppur
              </motion.p>
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-4xl md:text-5xl font-black leading-tight mb-6">
                The{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Tiruppur
                </span>
                <br />Advantage
              </motion.h2>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                className="text-gray-500 text-lg leading-relaxed">
                Tiruppur accounts for over 90% of India's cotton knitwear exports.
                Being headquartered here gives our clients direct access to the
                world's most efficient apparel manufacturing ecosystem.
              </motion.p>
            </div>

            <div className="flex-1 min-w-[280px] space-y-4">
              {advantages.map((adv, i) => (
                <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg cursor-default">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                    style={{ background: `${adv.color}20`, border: `1.5px solid ${adv.color}40` }}
                  >
                    <adv.icon className="w-5 h-5" style={{ color: adv.color }} />
                  </div>
                  <span className="text-gray-800 font-semibold">{adv.label}</span>
                  <CheckCircle className="ml-auto w-5 h-5 text-green-400 shrink-0" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const certifications = [
  { src: "https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.png", label: "ISO Certified" },
  { src: "https://global-standard.org/templates/yootheme/cache/10/gots-logo_rgb_2018_transp_72dpi-10496efb.png", label: "GOTS" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2025/6/517106389/GN/CK/AJ/7810356/bsci-certification-services-500x500.jpg", label: "BSCI" },
  { src: "https://logowik.com/content/uploads/images/sedex-certification98321.logowik.com.webp", label: "SEDEX" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvE4k6S8N3AwJycMy-EBEHKM2KpISutXqRQ&s", label: "Certified" },
  { src: "https://image.pitchbook.com/cDegDJj0p6NRsKTm9MwwRgWsMkE1703078149140_200x200", label: "Certified" },
  {src: "https://wrapcompliance.org/wp-content/uploads/2022/11/Main-logo.png", label: "WRAP Certified" },
];

/* ─── MARQUEE TRACK ──────────────────────────────────────────────────────── */
function CertTrack({ reversed = false }: { reversed?: boolean }) {
  const items = [...certifications, ...certifications];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
    >
      <motion.div
        className="flex items-center gap-12 w-max py-4"
        animate={{ x: reversed ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {items.map((cert, i) => (
          <div
            key={i}
            className="shrink-0 flex flex-col items-center justify-center gap-2 group cursor-default"
            style={{ width: 180, height: 120 }}
          >
            <div
              className="w-full h-full flex items-center justify-center rounded-xl px-4 py-3 border border-slate-200 bg-white transition-all duration-300 group-hover:shadow-lg"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}
            >
              <img
                src={cert.src}
                alt={cert.label}
                className="max-w-full max-h-full object-contain"
                style={{
                  filter: "none",
                  transition: "transform 0.3s ease",
                  maxHeight: 80,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── SECTION ────────────────────────────────────────────────────────────── */
const CertificationScroll = () => (
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
      {/* background glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: "#bfdbfe" }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "#c7d2fe" }} />

      <div className="container max-w-6xl px-6 relative">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold mb-3">
              <span className="w-4 h-px bg-blue-400 inline-block" />
              Compliance & Standards
            </span>

            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Certifications That{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Speak for Us
              </span>
            </h2>
          </div>

          <p className="text-gray-500 text-sm max-w-xs leading-relaxed md:text-right">
            Ensuring quality, sustainability, and ethical sourcing at every stage of production.
          </p>
        </motion.div>

        {/* TRUST TAGS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            "Ethical Manufacturing",
            "Sustainable Sourcing",
            "Global Compliance",
            "Worker Safety",
            "Quality Assurance",
          ].map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm"
            >
              <ShieldCheck className="w-3 h-3 text-blue-500" />
              {chip}
            </span>
          ))}
        </motion.div>

        {/* MARQUEE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CertTrack />
        </motion.div>

        {/* FOOTER NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-gray-400 mt-10"
        >
          All our factories and suppliers are fully certified, ensuring compliance with global quality, sustainability, and ethical standards.
         
        </motion.p>

      </div>
    </section>
  </>
);

export default CertificationScroll;
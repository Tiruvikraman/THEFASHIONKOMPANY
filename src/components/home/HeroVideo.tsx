import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "End-to-end sourcing & quality control",
  "50+ audited factory partners",
  "On-time delivery across 25+ countries",
  "Private label & custom development",
];

export default function HeroVideoSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <section
        ref={sectionRef}
        className="relative py-24 overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)",
          fontFamily: "'Inter', sans-serif",
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        {/* ambient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: "#bfdbfe" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "#c7d2fe" }} />

        <div className="container max-w-3xl px-6 relative mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold justify-center md:justify-start">
              <span className="w-4 h-px bg-blue-400 inline-block" />
              Who We Are
            </span>

            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Global Sourcing.{" "}
              <span style={{
                background: "linear-gradient(90deg, #1d4ed8, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Trusted
              </span>{" "}
              Partnerships.
            </h2>

            <p className="text-gray-500 leading-relaxed text-sm">
              We specialize in delivering high-quality garments and workwear solutions
              to global brands. With a strong manufacturing network and strict quality
              control, we ensure reliability at every stage of production — from
              fabric sourcing to final shipment.
            </p>

            <ul className="space-y-3 inline-block text-left">
              {highlights.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="h-px bg-slate-200 w-16 mx-auto md:mx-0" />

            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                  boxShadow: "0 4px 20px rgba(29,78,216,0.25)",
                  transition: "box-shadow 0.3s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(29,78,216,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(29,78,216,0.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-700 border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50 px-6 py-3 rounded-full transition-all duration-300"
              >
                Send Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
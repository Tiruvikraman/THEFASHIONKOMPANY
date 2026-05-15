import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, ArrowRight, CheckCircle2, Maximize2 } from "lucide-react";
import PosterImg from "@/assets/thumbnail.png"; // ✅ imported properly

const highlights = [
  "End-to-end sourcing & quality control",
  "50+ audited factory partners",
  "On-time delivery across 25+ countries",
  "Private label & custom development",
];

export default function HeroVideoSection() {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const modalRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });

  const [playing,   setPlaying]   = useState(false);
  const [loaded,    setLoaded]    = useState(false);
  const [error,     setError]     = useState(false);
  const [modal,     setModal]     = useState(false); // fullscreen modal

  /* Auto-play muted on mount */
  useEffect(() => {
    const v = videoRef.current;
    if (v) return;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }, []);

  /* Sync modal video when opened */
  useEffect(() => {
    if (modal) {
      const mv = modalRef.current;
      const sv = videoRef.current;
      if (!mv || !sv) return;
      mv.currentTime = sv.currentTime;
      mv.play().catch(() => {});
      sv.pause();
      setPlaying(false);
    }
  }, [modal]);

  /* Close modal on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  /* Click play → open modal fullscreen */
  const handlePlayClick = () => {
    if (!playing) {
      setModal(true);
    } else {
      togglePlay();
    }
  };

  const closeModal = () => {
    const mv = modalRef.current;
    const sv = videoRef.current;
    if (mv && sv) {
      sv.currentTime = mv.currentTime;
      mv.pause();
    }
    setModal(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');

        /* Pulsing ring around play button */
        @keyframes ping-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          80%  { transform: scale(1.9); opacity: 0;   }
          100% { transform: scale(1.9); opacity: 0;   }
        }
        .play-ring { animation: ping-ring 1.8s ease-out infinite; }

        /* B&W to colour on hover */
        .play-btn-center {
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: grayscale(1) brightness(1.1);
        }
        .play-btn-center:hover {
          transform: scale(1.12);
          filter: grayscale(0) brightness(1);
        }

        /* Modal backdrop */
        .video-modal-backdrop {
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(8px);
        }
      `}</style>

      {/* ── FULLSCREEN MODAL ── */}
      {modal && (
        <div
          className="video-modal-backdrop fixed inset-0 z-[999] flex flex-col items-center justify-center"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl px-4"
            onClick={e => e.stopPropagation()}
          >
            <video
              ref={modalRef}
              src="https://gloriacasamoda.com/wp-content/uploads/2024/08/glory-intro.mp4"
              poster={PosterImg}
              controls          /* ✅ all native controls: speed, fullscreen, seek etc. */
              autoPlay
              loop
              playsInline
              className="w-full rounded-2xl shadow-2xl border border-white/10"
              style={{ maxHeight: "80vh", background: "#000" }}
            />
            {/* close hint */}
            <p className="text-white/30 text-xs text-center mt-3">
              Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/50">Esc</kbd> or click outside to close
            </p>
          </motion.div>
        </div>
      )}

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

        <div className="container max-w-6xl px-6 relative">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* ── LEFT: VIDEO ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* outer glow frame */}
              <div className="absolute -inset-1.5 rounded-2xl opacity-30 blur-sm pointer-events-none"
                style={{ background: "linear-gradient(135deg, #bfdbfe, #c7d2fe)" }} />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900">

                {/* loading skeleton */}
                {!loaded && !error && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-slate-800 z-10"
                    style={{ height: "clamp(240px, 40vw, 400px)" }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      <span className="text-white/40 text-xs">Loading video...</span>
                    </div>
                  </div>
                )}

                {/* error state */}
                {error && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10"
                    style={{ height: "clamp(240px, 40vw, 400px)" }}
                  >
                    <div className="text-center px-6">
                      <p className="text-white/50 text-sm">Video unavailable</p>
                      <a
                        href="https://gloriacasamoda.com/wp-content/uploads/2024/08/glory-intro.mp4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-xs mt-2 inline-block hover:underline"
                      >
                        Open in browser →
                      </a>
                    </div>
                  </div>
                )}

                {/* ✅ poster via import */}
                <video
                  ref={videoRef}
                  src="https://gloriacasamoda.com/wp-content/uploads/2024/08/glory-intro.mp4"
                  poster={PosterImg}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full object-cover block"
                  style={{ height: "clamp(240px, 40vw, 400px)" }}
                  onCanPlay={() => setLoaded(true)}
                  onError={() => setError(true)}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />

                {/* dark overlay when paused */}
                {!playing && loaded && (
                  <div className="absolute inset-0  pointer-events-none" />
                )}

                {/* ── CENTER ANIMATED PLAY BUTTON ── */}
                {!error && !playing && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button
                      onClick={handlePlayClick}
                      aria-label="Play video"
                      className="play-btn-center relative flex items-center justify-center"
                      style={{ width: 72, height: 72 }}
                    >
                      {/* pulsing ring */}
                      <span
                        className="play-ring absolute inset-0 rounded-full border-2 border-white"
                        style={{ borderColor: "rgba(255,255,255,0.6)" }}
                      />
                      {/* button circle */}
                      <span
                        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          border: "2px solid rgba(255,255,255,0.5)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        <Play className="w-7 h-7 text-white ml-1" />
                      </span>
                    </button>
                  </div>
                )}

                {/* ── BOTTOM-LEFT: pause + enlarge when playing ── */}
                {!error && (
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 z-20">
                    {playing && (
                      <button
                        onClick={togglePlay}
                        aria-label="Pause"
                        className="gcm-video-play w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          background: "rgba(0,0,0,0.55)",
                          border: "1.5px solid rgba(255,255,255,0.25)",
                          backdropFilter: "blur(4px)",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                      >
                        <Pause className="w-4 h-4 text-white" />
                      </button>
                    )}

                    {/* Enlarge / fullscreen button */}
                    <button
                      onClick={() => setModal(true)}
                      aria-label="Enlarge video"
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        border: "1.5px solid rgba(255,255,255,0.25)",
                        backdropFilter: "blur(4px)",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                    >
                      <Maximize2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                )}

                {/* badge */}
                <div className="absolute bottom-5 right-5 bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/15 z-20">
                  Company Overview
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: TEXT ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 text-xs text-blue-600 uppercase tracking-[0.25em] font-semibold">
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

              <ul className="space-y-3">
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

              <div className="h-px bg-slate-200 w-16" />

              <div className="flex flex-wrap items-center gap-4">
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
        </div>
      </section>
    </>
  );
}

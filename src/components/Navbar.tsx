import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Globe2 } from "lucide-react";
import logo from "../assets/logo.png";
const navLinks = [
  { label: "Home",      href: "/"        },
  { label: "About Us",      href: "/about"        },
  { label: "Products",      href: "/products"      },
  { label: "Our Clients",   href: "/our-clients"   },
  // { label: "Manufacturing", href: "/manufacturing" },
  { label: "Sustainability",href: "/sustainability" },
];

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();
  const isHome                  = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const onDark = isHome && !scrolled;

  return (
    <>
      <style>{`
        /*
          Pristina is a Windows system font — not on Google Fonts.
          Stack: Pristina → Segoe Script (Windows) → Brush Script MT (macOS/iOS)
          → Great Vibes (Google Fonts fallback, loaded below) → cursive
        */
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600&display=swap');

        .gcm-logo-text {
          font-family: 'Pristina', 'Segoe Script', 'Brush Script MT', 'Great Vibes', cursive;
          letter-spacing: 0.5px;
        }

        .gcm-nav-link { position: relative; transition: color 0.2s ease; }
        .gcm-nav-link::after {
          content: '';
          position: absolute; bottom: -3px; left: 0;
          width: 0; height: 2px; border-radius: 9999px;
          background: linear-gradient(90deg, #3b82f6, #7c3aed);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .gcm-nav-link:hover::after,
        .gcm-nav-link.active::after { width: 100%; }
      `}</style>

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: onDark ? "rgba(6,6,22,0.6)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: onDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
          boxShadow: scrolled && !onDark ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div className="container max-w-6xl px-6 flex items-center justify-between" style={{ height: 68 }}>

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-3 shrink-0">

 <img
  src={logo}
  alt="logo"
  className="h-10 w-auto object-contain"
/>

  <span
    className="gcm-logo-text text-[2.35rem] leading-none font-black tracking-[-0.02em]"
    style={{ color: "#ebc897fe" }}
  >
    The Fashion Kompany
  </span>

</Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`gcm-nav-link text-sm font-medium pb-1 ${isActive ? "active" : ""}`}
                  style={{
                    color: onDark
                      ? isActive ? "#ffffff" : "rgba(255,255,255,0.65)"
                      : isActive ? "#1e40af" : "#64748b",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                boxShadow: "0 3px 16px rgba(37,99,235,0.35)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 5px 24px rgba(37,99,235,0.55)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 16px rgba(37,99,235,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg"
            style={{ color: onDark ? "rgba(255,255,255,0.85)" : "#475569" }}
          >
            <AnimatePresence mode="wait">
              {isOpen
                ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X    className="w-5 h-5" /></motion.span>
                : <motion.span key="menu" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-5 h-5" /></motion.span>
              }
            </AnimatePresence>
          </button>

        </div>
      </motion.header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-[68px]"
            style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", fontFamily: "'Inter', sans-serif" }}
          >
            <nav className="container max-w-6xl px-6 flex flex-col pt-8 pb-6 gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-slate-100 group"
                  >
                    <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-bold text-base"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", boxShadow: "0 4px 20px rgba(37,99,235,0.3)" }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            <div className="container max-w-6xl px-6 py-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Tirupur, Tamil Nadu, India</span>
              <div className="flex gap-3">
                {["GOTS", "OEKO-TEX", "ISO"].map(c => (
                  <span key={c} className="text-[10px] font-semibold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
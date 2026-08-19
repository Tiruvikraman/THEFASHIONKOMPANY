import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .gcm-footer-link { transition: color 0.2s ease, padding-left 0.2s ease; }
        .gcm-footer-link:hover { padding-left: 4px; color: #93c5fd; }
      `}</style>

      <footer
        style={{
          background: "linear-gradient(160deg, #07071a 0%, #0d0d2b 60%, #060616 100%)",
          fontFamily: "'Inter', sans-serif",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* ── TOP BAND ── */}
        <div className="container max-w-6xl px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* ── BRAND COL ── */}
            <div className="lg:col-span-4 space-y-5">

              {/* Logo + Name row */}
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="The Fashion Kompany"
                  style={{ height: "48px", width: "auto", objectFit: "contain" }}
                />
                <div>
                  <h3
                    className="text-xl font-black text-white tracking-tight mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    The Fashion Kompany
                  </h3>
                  <div className="h-[2px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #7c3aed)" }} />
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Precision manufacturing for the modern label. From Tirupur to the world.
              </p>

              {/* contact mini-list */}
              <div className="space-y-2.5">
                {[
                  { icon: MapPin, text: "1/3,Ground Floor,Vadaku Thottam,Mangalam Main Road,Parapalayam,Tiruppur – 641604," },
                  { icon: Mail, text: "Md@thefashionkompany.com, Gm@thefashionkompany.com" },
                  { icon: Phone, text: "+91-98944 40335, +91-98944 42496" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="text-white/50 text-xs">{text}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* ── PRODUCTS ── */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-semibold">Products</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "T-Shirts", hash: "#tshirts" },
                  { label: "Polos", hash: "#polos" },
                  { label: "Hoodies", hash: "#hoodie" },
                  { label: "Workwear", hash: "#workwear" },
                  { label: "Women", hash: "#women" },
                  { label: "Kidswear", hash: "#kids" },
                  { label: "Home Textiles", hash: "#hometextile" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={`/products${item.hash}`}
                    className="gcm-footer-link text-sm text-white/55 hover:text-blue-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── PLATFORM ── */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-semibold">Platform</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Fabric Library", path: "/fabrics" },
                  { label: "Manufacturing", path: "/manufacturing" },
                  { label: "Sustainability", path: "/sustainability" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="gcm-footer-link text-sm text-white/55 hover:text-blue-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── The Fashion Kompany ── */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-semibold">The Fashion Kompany</p>
              <div className="flex flex-col gap-2.5">
                {[
                  
                  { label: "Instagram", href: "#" },
                  { label: "Contact Sales", href: "/contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="gcm-footer-link inline-flex items-center gap-1 text-sm text-white/55 hover:text-blue-300"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>

              {/* CTA button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2.5 rounded-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                    boxShadow: "0 4px 16px rgba(29,78,216,0.3)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(29,78,216,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(29,78,216,0.3)"; }}
                >
                  Send an Enquiry
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="container max-w-6xl px-6">
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="container max-w-6xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-xs text-white/30">
              © 2026 The Fashion Kompany. All rights reserved.
            </p>



          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
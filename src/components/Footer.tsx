import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold tracking-tighter mb-4">THE GLOBAL LOOM</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Precision manufacturing for the modern label. From Tirupur to the world.
            </p>
          </div>

          <div>
            <p className="font-mono-tech text-primary-foreground/40 mb-4">Products</p>
            <div className="flex flex-col gap-3">
              {["T-Shirts", "Polos", "Hoodies", "Joggers", "Sportswear", "Kidswear"].map((item) => (
                <Link key={item} to="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-tech text-primary-foreground/40 mb-4">Platform</p>
            <div className="flex flex-col gap-3">
              {["AI Designer", "Fabric Library", "Manufacturing", "Sustainability", "Buyer Portal"].map((item) => (
                <Link key={item} to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-tech text-primary-foreground/40 mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Contact Sales", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 The Global Loom. All rights reserved. Tirupur, Tamil Nadu, India.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono-tech text-primary-foreground/30">GOTS Certified</span>
            <span className="font-mono-tech text-primary-foreground/30">OEKO-TEX</span>
            <span className="font-mono-tech text-primary-foreground/30">ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

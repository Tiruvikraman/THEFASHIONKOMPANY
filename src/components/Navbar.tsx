import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "AI Designer", href: "/ai-designer" },
  { label: "Fabrics", href: "/fabrics" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Sustainability", href: "/sustainability" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isHome ? "bg-primary/80 backdrop-blur-md" : "bg-background/80 backdrop-blur-md shadow-industrial"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-xl font-semibold tracking-tighter ${isHome ? "text-primary-foreground" : "text-foreground"}`}>
              THE GLOBAL LOOM
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-100 ${
                  location.pathname === link.href
                    ? isHome ? "text-primary-foreground opacity-100" : "text-foreground opacity-100"
                    : isHome ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-250 ${
                isHome
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isHome ? "text-primary-foreground" : "text-foreground"}`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav className="container flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-lg font-medium w-fit"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-manufacturing.jpg";

const entrance = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial knitting machine producing fabric"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <motion.p
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.2 }}
          className="font-mono-tech text-accent mb-6"
        >
          TIRUPUR, INDIA → WORLDWIDE
        </motion.p>

        <motion.h1
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter text-primary-foreground leading-[0.9]"
        >
          THE FUTURE
          <br />
          OF KNITS.
        </motion.h1>

        <motion.p
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          Design, simulate, and scale your production with AI-driven transparency.
          Premium knitted garments for the world's most ambitious brands.
        </motion.p>

        <motion.div
          {...entrance}
          transition={{ ...entrance.transition, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground text-base font-medium transition-all hover:bg-accent/90 hover:scale-[0.98] active:scale-[0.96]"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/ai-designer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground/10 text-primary-foreground text-base font-medium transition-all hover:bg-primary-foreground/20 backdrop-blur-sm"
          >
            AI Designer
          </Link>
        </motion.div>
      </div>

      {/* Live stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <div className="bg-primary-foreground/5 backdrop-blur-md rounded-xl p-5 border border-primary-foreground/10">
          <p className="font-mono-tech text-primary-foreground/40 mb-3">LIVE FACTORY STATUS</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-8">
              <span className="text-xs text-primary-foreground/50">Knitting RPM</span>
              <span className="font-mono text-sm text-accent">1,240</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-xs text-primary-foreground/50">Active Lines</span>
              <span className="font-mono text-sm text-accent">24/28</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-xs text-primary-foreground/50">Tirupur</span>
              <span className="font-mono text-sm text-primary-foreground/70">32°C</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import {
  Shield, Globe, Users, TrendingUp, CheckCircle, Award, Package,
  Search, FileText, Truck, ClipboardCheck, Factory, Zap, Clock,
  DollarSign, MessageSquare, Leaf, BadgeCheck, MapPin
} from "lucide-react";
import founderImg from "@/assets/founder-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const whatWeDo = [
  { icon: Package, text: "Product development based on client requirements" },
  { icon: ClipboardCheck, text: "Sampling and design execution" },
  { icon: Search, text: "Vendor sourcing and factory evaluation" },
  { icon: DollarSign, text: "Costing and negotiation" },
  { icon: Clock, text: "Production follow-up and timeline management" },
  { icon: Shield, text: "Quality control and inspections" },
  { icon: FileText, text: "Export documentation and logistics coordination" },
];

const whatWeOffer = [
  { icon: Factory, text: "Access to a strong network of audited Tiruppur manufacturers" },
  { icon: Award, text: "Expertise in knitwear, activewear, and fashion garments" },
  { icon: Shield, text: "Strict quality control following international standards" },
  { icon: TrendingUp, text: "Flexible MOQ and scalable production capacity" },
  { icon: MessageSquare, text: "Transparent communication and real-time updates" },
  { icon: Truck, text: "On-time delivery with complete compliance support" },
];

const tiruppurAdvantages = [
  "End-to-end infrastructure (knitting, dyeing, printing, stitching)",
  "Skilled workforce with decades of expertise",
  "Strong export ecosystem with global compliance standards",
  "Cost-effective production without compromising quality",
  "Fast turnaround due to clustered manufacturing units",
];

const certifications = [
  { name: "GOTS", full: "Global Organic Textile Standard" },
  { name: "OEKO-TEX", full: "OEKO-TEX Certification" },
  { name: "BSCI", full: "BSCI Compliance" },
  { name: "ISO", full: "ISO Quality Standards" },
];

const timeline = [
  { year: "1998", desc: "Company established as a sourcing partner in Tiruppur" },
  { year: "2005", desc: "Expanded vendor network and international client base" },
  { year: "2012", desc: "Strengthened quality control systems and compliance processes" },
  { year: "2018", desc: "Integrated end-to-end sourcing solutions" },
  { year: "2023", desc: "Serving global clients with scalable production capabilities" },
  { year: "Present", desc: "Trusted buying office with long-term international partnerships" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-mono tracking-widest uppercase text-primary-foreground/60 mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Gloria Casa Moda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed"
          >
            A trusted sourcing partner and garment manufacturer, delivering high-quality apparel solutions to global clients since 1998.
          </motion.p>
        </div>
      </section>

      {/* Founder Story — Split Layout */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-hero">
                <img
                  src={founderImg}
                  alt="Founder of Gloria Casa Moda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">Since 1998</p>
                <p className="text-xs opacity-80">Tiruppur, India</p>
              </div>
            </motion.div>

            {/* Right — Story */}
            <div className="space-y-8">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              >
                <p className="text-sm font-mono tracking-widest uppercase text-accent mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                  From Vision to Global Trust
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded in 1998, our journey began with a clear vision — to bridge the gap between global apparel buyers and the manufacturing excellence of Tiruppur, India. What started as a small sourcing initiative has evolved into a trusted export buying office, serving clients across international markets with consistency, transparency, and commitment.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              >
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With decades of hands-on experience in the garment industry, our founder built this organization on strong values of integrity, quality assurance, and long-term partnerships. Understanding both the expectations of global brands and the capabilities of local manufacturers has been the key to our sustained growth.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
                className="bg-muted/50 border border-border rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">Founder's Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to become a globally recognized sourcing partner known for reliability, ethical practices, and product excellence. We aim to simplify the sourcing process for our clients by offering complete transparency, efficient communication, and uncompromised quality at every stage of production.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono tracking-widest uppercase text-accent mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We act as a complete apparel sourcing and buying partner, managing the entire supply chain from concept to shipment.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item.text}
                custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-industrial-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono tracking-widest uppercase text-accent mb-3">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end solutions designed to reduce risk, save time, and ensure consistent quality for global buyers.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeOffer.map((item, i) => (
              <motion.div
                key={item.text}
                custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-industrial-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiruppur Advantage */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <p className="text-sm font-mono tracking-widest uppercase text-primary-foreground/60">Strategic Location</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                The Tiruppur Advantage
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Tiruppur is known as the <span className="text-accent font-semibold">Knitwear Capital of India</span>, offering a highly integrated textile ecosystem. This strategic advantage allows us to deliver speed, efficiency, and competitive pricing to our clients.
              </p>
            </motion.div>
            <div className="space-y-3">
              {tiruppurAdvantages.map((adv, i) => (
                <motion.div
                  key={adv}
                  custom={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono tracking-widest uppercase text-accent mb-3">Trust</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with factories that adhere to globally recognized certifications and ethical standards. Our focus on sustainability and compliance ensures every product meets international expectations.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-industrial-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.full}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-muted/30 overflow-hidden">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono tracking-widest uppercase text-accent mb-3">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our Timeline
            </h2>
          </motion.div>

          {/* Horizontal scrollable timeline */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex-shrink-0 w-56 relative pt-12"
                >
                  <div className="absolute top-[26px] left-4 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="bg-card border border-border rounded-xl p-5">
                    <p className="text-xl font-bold text-accent mb-2">{item.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
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

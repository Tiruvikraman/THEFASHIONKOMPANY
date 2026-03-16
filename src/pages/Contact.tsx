import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-20">
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...entrance}>
              <p className="font-mono-tech text-muted-foreground mb-3">GET STARTED</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-foreground">
                Let's Build
                <br />Together.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Whether you need 200 samples or 200,000 production units, we're ready to scale with you.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Tirupur, Tamil Nadu, India</p>
                    <p className="text-sm text-muted-foreground">India's Knitwear Capital</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">sales@thegloballoom.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">+91 421 123 4567</p>
                    <p className="text-sm text-muted-foreground">Mon–Sat, 9AM–6PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...entrance} transition={{ ...entrance.transition, delay: 0.2 }}>
              {submitted ? (
                <div className="rounded-2xl bg-secondary p-12 text-center shadow-industrial">
                  <p className="text-2xl font-semibold text-foreground mb-2">Thank you!</p>
                  <p className="text-muted-foreground">Our team will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="rounded-2xl bg-secondary p-8 shadow-industrial space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono-tech text-muted-foreground mb-1 block">FIRST NAME</label>
                      <input required className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="font-mono-tech text-muted-foreground mb-1 block">LAST NAME</label>
                      <input required className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">EMAIL</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">COMPANY / BRAND</label>
                    <input required className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">PROJECT DETAILS</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 hover:scale-[0.98]"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

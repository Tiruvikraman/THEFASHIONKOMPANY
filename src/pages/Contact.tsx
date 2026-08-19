import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Loader2 } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_g4wsjhc";
const EMAILJS_TEMPLATE_ID = "template_g4ov5je";
const EMAILJS_PUBLIC_KEY = "cxWqr8WWq2CvMzoNX";

const entrance = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const COUNTRY_CODES = [
  { code: "+1",   label: "🇺🇸 +1 (USA/Canada)" },
  { code: "+7",   label: "🇷🇺 +7 (Russia/Kazakhstan)" },
  { code: "+20",  label: "🇪🇬 +20 (Egypt)" },
  { code: "+27",  label: "🇿🇦 +27 (South Africa)" },
  { code: "+30",  label: "🇬🇷 +30 (Greece)" },
  { code: "+31",  label: "🇳🇱 +31 (Netherlands)" },
  { code: "+32",  label: "🇧🇪 +32 (Belgium)" },
  { code: "+33",  label: "🇫🇷 +33 (France)" },
  { code: "+34",  label: "🇪🇸 +34 (Spain)" },
  { code: "+36",  label: "🇭🇺 +36 (Hungary)" },
  { code: "+39",  label: "🇮🇹 +39 (Italy)" },
  { code: "+40",  label: "🇷🇴 +40 (Romania)" },
  { code: "+41",  label: "🇨🇭 +41 (Switzerland)" },
  { code: "+43",  label: "🇦🇹 +43 (Austria)" },
  { code: "+44",  label: "🇬🇧 +44 (UK)" },
  { code: "+45",  label: "🇩🇰 +45 (Denmark)" },
  { code: "+46",  label: "🇸🇪 +46 (Sweden)" },
  { code: "+47",  label: "🇳🇴 +47 (Norway)" },
  { code: "+48",  label: "🇵🇱 +48 (Poland)" },
  { code: "+49",  label: "🇩🇪 +49 (Germany)" },
  { code: "+51",  label: "🇵🇪 +51 (Peru)" },
  { code: "+52",  label: "🇲🇽 +52 (Mexico)" },
  { code: "+53",  label: "🇨🇺 +53 (Cuba)" },
  { code: "+54",  label: "🇦🇷 +54 (Argentina)" },
  { code: "+55",  label: "🇧🇷 +55 (Brazil)" },
  { code: "+56",  label: "🇨🇱 +56 (Chile)" },
  { code: "+57",  label: "🇨🇴 +57 (Colombia)" },
  { code: "+58",  label: "🇻🇪 +58 (Venezuela)" },
  { code: "+60",  label: "🇲🇾 +60 (Malaysia)" },
  { code: "+61",  label: "🇦🇺 +61 (Australia)" },
  { code: "+62",  label: "🇮🇩 +62 (Indonesia)" },
  { code: "+63",  label: "🇵🇭 +63 (Philippines)" },
  { code: "+64",  label: "🇳🇿 +64 (New Zealand)" },
  { code: "+65",  label: "🇸🇬 +65 (Singapore)" },
  { code: "+66",  label: "🇹🇭 +66 (Thailand)" },
  { code: "+81",  label: "🇯🇵 +81 (Japan)" },
  { code: "+82",  label: "🇰🇷 +82 (South Korea)" },
  { code: "+84",  label: "🇻🇳 +84 (Vietnam)" },
  { code: "+86",  label: "🇨🇳 +86 (China)" },
  { code: "+90",  label: "🇹🇷 +90 (Turkey)" },
  { code: "+91",  label: "🇮🇳 +91 (India)" },
  { code: "+92",  label: "🇵🇰 +92 (Pakistan)" },
  { code: "+93",  label: "🇦🇫 +93 (Afghanistan)" },
  { code: "+94",  label: "🇱🇰 +94 (Sri Lanka)" },
  { code: "+95",  label: "🇲🇲 +95 (Myanmar)" },
  { code: "+98",  label: "🇮🇷 +98 (Iran)" },
  { code: "+211", label: "🇸🇸 +211 (South Sudan)" },
  { code: "+212", label: "🇲🇦 +212 (Morocco)" },
  { code: "+213", label: "🇩🇿 +213 (Algeria)" },
  { code: "+249", label: "🇸🇩 +249 (Sudan)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+972", label: "🇮🇱 +972 (Israel)" },
  { code: "+973", label: "🇧🇭 +973 (Bahrain)" },
  { code: "+974", label: "🇶🇦 +974 (Qatar)" },
  { code: "+975", label: "🇧🇹 +975 (Bhutan)" },
  { code: "+976", label: "🇲🇳 +976 (Mongolia)" },
  { code: "+977", label: "🇳🇵 +977 (Nepal)" },
  { code: "+992", label: "🇹🇯 +992 (Tajikistan)" },
  { code: "+993", label: "🇹🇲 +993 (Turkmenistan)" },
  { code: "+994", label: "🇦🇿 +994 (Azerbaijan)" },
  { code: "+995", label: "🇬🇪 +995 (Georgia)" },
  { code: "+996", label: "🇰🇬 +996 (Kyrgyzstan)" },
  { code: "+998", label: "🇺🇿 +998 (Uzbekistan)" },
];

const Contact = () => {
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const searchRef = useRef("");
  const searchTimerRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleSelectKeyDown = (e) => {
    if (e.key.length !== 1) return;

    searchRef.current += e.key.toLowerCase();

    clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      searchRef.current = "";
    }, 1000);

    const match = COUNTRY_CODES.find((c) =>
      c.label.toLowerCase().includes(searchRef.current)
    );

    if (match) {
      setCountryCode(match.code);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* ── Left column ── */}
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

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      1/3, Ground Floor, Vadaku Thottam,<br />
                      Mangalam Main Road, Parapalayam,<br />
                      Tiruppur – 641604
                    </p>
                    <p className="text-sm text-muted-foreground">India's Knitwear Capital</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Md@thefashionkompany.com<br />Gm@thefashionkompany.com
                    </p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      +91-98944 40335<br />+91-98944 42496
                    </p>
                    <p className="text-sm text-muted-foreground">Mon–Sat, 9AM–6PM IST</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    
                      
                      +91-98944 40335
                    <br/>
                      +91-98944 42496
                    <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ── Right column — form ── */}
            <motion.div {...entrance} transition={{ ...entrance.transition, delay: 0.2 }}>
              {submitted ? (
                <div className="rounded-2xl bg-secondary p-12 text-center shadow-industrial">
                  <p className="text-2xl font-semibold text-foreground mb-2">Thank you!</p>
                  <p className="text-muted-foreground">Our team will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-secondary p-8 shadow-industrial space-y-6"
                >
                  <input type="hidden" name="to_email" value="tiruvikramanvelusamy,22d156@psgitech.ac.in" />
                  <input type="hidden" name="phone" value={`${countryCode} ${phoneNumber}`} />

                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono-tech text-muted-foreground mb-1 block">FIRST NAME *</label>
                      <input
                        required
                        name="first_name"
                        className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="font-mono-tech text-muted-foreground mb-1 block">LAST NAME *</label>
                      <input
                        required
                        name="last_name"
                        className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">EMAIL *</label>
                    <input
                      required
                      type="email"
                      name="from_email"
                      className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">PHONE NUMBER *</label>
                    <div className="flex gap-2">
                      <select
                        ref={selectRef}
                        required
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        onKeyDown={handleSelectKeyDown}
                        className="px-3 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                      </select>

                      <input
                        required
                        type="tel"
                        placeholder=" "
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                        maxLength={12}
                        className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    
                  </div>

                  {/* Company */}
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">COMPANY / BRAND *</label>
                    <input
                      required
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono-tech text-muted-foreground mb-1 block">PROJECT DETAILS *</label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm shadow-industrial focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>

                  {error && <p className="text-xs text-red-500">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 hover:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
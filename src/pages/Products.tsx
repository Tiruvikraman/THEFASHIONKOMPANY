import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

/* ─── GLOB IMPORTS ───────────────────────────────────────────────────────── */
const kidsImgs = import.meta.glob("@/assets/product_collections/kids/*.{jpg,jpeg,png,webp}", { eager: true });
const mensImgs = import.meta.glob("@/assets/product_collections/mens/*.{jpg,jpeg,png,webp}", { eager: true });
const menPoloImgs = import.meta.glob("@/assets/product_collections/mens/polo/*.{jpg,jpeg,png,webp}", { eager: true });
const menTshirtImgs = import.meta.glob("@/assets/product_collections/mens/*.{jpg,jpeg,png,webp}", { eager: true });
const menSweatshirtImgs = import.meta.glob("@/assets/product_collections/hoodie/*.{jpg,jpeg,png,webp}", { eager: true });
const womensImgs = import.meta.glob("@/assets/product_collections/womens/*.{jpg,jpeg,png,webp}", { eager: true });
const hoodieImgs = import.meta.glob("@/assets/product_collections/hoodie/*.{jpg,jpeg,png,webp}", { eager: true });
const workwearImgs = import.meta.glob("@/assets/product_collections/workwear/*.{jpg,jpeg,png,webp}", { eager: true });
const innerImgs = import.meta.glob("@/assets/product_collections/Inner_garments/*.{jpg,jpeg,png,webp}", { eager: true });
const infantImgs = import.meta.glob("@/assets/product_collections/Infants/*.{jpg,jpeg,png,webp}", { eager: true });
const homeTextilesImgs = import.meta.glob("@/assets/product_collections/HomeTextiles/*.{jpg,jpeg,png,webp}", { eager: true });

const sleevelessImgs: Record<string, { default: string }> = Object.fromEntries(
  [
    "https://gloryhouz.data-corp.in/uploads/glory/style/front6.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4040D.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4042-A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/161.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4042-C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4043.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4045.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4046a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4046-B.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4047.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4048.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4049a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4049b.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4050a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/159.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/158.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/fs.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4055b.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CH7_1304.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A2034.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A1964.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0304.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7716.JPG",
  ].map((url) => [url, { default: url }])
);

const joggersImgs: Record<string, { default: string }> = Object.fromEntries(
  [
    "https://gloryhouz.data-corp.in/uploads/glory/style/DSC_1788.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/DSC_1771.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7008-nc.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/192.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/191.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7009C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/190.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/134.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/MLFT7015-D_1.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/MLFT7017-A_1.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/MLFT7018-A_1.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CENTER7.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/189.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CENTER6.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7021C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front21.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/ER.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/DF.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7024a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front20.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front19.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front18.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front16.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7025C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front15.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7026A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7026C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7026D.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7027B.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7027D.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7028A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7028B.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7028cc.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7028D.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7029ASIDE.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7029B.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7029C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7031a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7033C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7034A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7035D.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7035E.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7036A.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7036B.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7036C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7037a.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7037b.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7037c.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/188.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/187.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/186.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/185.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/184.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/183.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/182.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7040B(1).jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7040C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/181.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7042A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7042B.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7042C_(2).jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7043A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7043b.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/7047a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A3322.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A3291.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A6151.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A5002.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0204.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0181.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0071.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A9961.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7283.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A73941.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/front1.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/FRONT4.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CH7_1384.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CH7_1349.JPG",
  ].map((url) => [url, { default: url }])
);

const shortsImgs: Record<string, { default: string }> = Object.fromEntries(
  [
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7189.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7317.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7209.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7300.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CH7_1399.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CH7_1367.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/CH7_1426.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/8909235737465-4854.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/8909235737465-4889.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/8909235737465-4916.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6003A.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6008c.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6021b1.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6022a.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6025D.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/173.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6027C.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A3266.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A6165.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A6138.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A2642.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A2623.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A1502.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/4M6A1454.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/FRONT3.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/FRONT2.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/FRONT1.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6041-a.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6041-b.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6041-c.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/6041-d.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0234.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0279.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0A0A0248.jpg",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7356.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7264.JPG",
    "https://gloryhouz.data-corp.in/uploads/glory/style/0W2A7338.JPG",
  ].map((url) => [url, { default: url }])
);

const toSrcs = (glob: Record<string, unknown>): string[] =>
  Object.values(glob).map((m) => (m as { default: string }).default);

/* ─── TYPES ──────────────────────────────────────────────────────────────── */
interface SubCategory {
  slug: string;
  label: string;
  accent: string;
  fabric: string;
  images: string[];
  subcategories?: SubCategory[];
}

interface FilterGroup {
  group: string;
  slug: string;
  accent: string;
  subcategories: SubCategory[];
}

/* ─── FILTER STRUCTURE ───────────────────────────────────────────────────── */
const FILTER_GROUPS: FilterGroup[] = [
  {
    group: "Fashionwear",
    slug: "fashionwear",
    accent: "#7c3aed",
    subcategories: [
      {
        slug: "men",
        label: "Men",
        accent: "#0891b2",
        fabric: "Various",
        images: toSrcs(mensImgs),
        subcategories: [
          {
            slug: "men-polo",
            label: "Polo",
            accent: "#0284c7",
            fabric: "Pique Cotton",
            images: toSrcs(menPoloImgs),
          },
          {
            slug: "men-tshirt",
            label: "T-Shirt",
            accent: "#0891b2",
            fabric: "Single Jersey",
            images: toSrcs(menTshirtImgs),
          },
          {
            slug: "men-sweatshirt",
            label: "Sweatshirt / Hoodie",
            accent: "#6d28d9",
            fabric: "French Terry",
            images: toSrcs(menSweatshirtImgs),
          },
{ slug: "joggers", label: "Joggers", accent: "#dc2626", fabric: "French Terry", images: toSrcs(joggersImgs) },
      { slug: "shorts", label: "Shorts", accent: "#d97706", fabric: "Various", images: toSrcs(shortsImgs) },
        ],
      },
      { slug: "women", label: "Women", accent: "#ec4899", fabric: "Various", images: toSrcs(womensImgs) },
      { slug: "kids", label: "Kids", accent: "#7c3aed", fabric: "Combed Cotton", images: toSrcs(kidsImgs) },
      { slug: "infant", label: "Infant", accent: "#247fda", fabric: "Various", images: toSrcs(infantImgs) },
      // { slug: "sleeveless", label: "Sleeveless", accent: "#059669", fabric: "Single Jersey", images: toSrcs(sleevelessImgs) },
      
      { slug: "inner", label: "Inners", accent: "#9333ea", fabric: "Various", images: toSrcs(innerImgs) },
   
    ],
  },
  {
    group: "Workwear",
    slug: "workwear",
    accent: "#b45309",
    subcategories: [
      { slug: "workwear", label: "Workwear", accent: "#b45309", fabric: "TC / Cotton", images: toSrcs(workwearImgs) },
    ],
  },
  {
    group: "Home Textiles",
    slug: "hometextile",
    accent: "#059669",
    subcategories: [
      { slug: "hometextile", label: "Home Textiles", accent: "#059669", fabric: "Various", images: toSrcs(homeTextilesImgs) },
    ],
  },
];

/* ─── FLATTEN ALL PRODUCTS ───────────────────────────────────────────────── */
interface Product {
  id: string;
  name: string;
  category: string;
  parentCategory: string | null;
  group: string;
  fabric: string;
  accent: string;
  image: string;
}

const ALL_PRODUCTS: Product[] = FILTER_GROUPS.flatMap((group) =>
  group.subcategories.flatMap((cat) => {
    // If this subcategory has its own children, flatten those instead
    if (cat.subcategories?.length) {
      return cat.subcategories.flatMap((sub) =>
        sub.images.map((src, idx) => ({
          id: `${sub.slug}-${idx}`,
          name: `${sub.label} ${idx + 1}`,
          category: sub.slug,
          parentCategory: cat.slug,
          group: group.slug,
          fabric: sub.fabric,
          accent: sub.accent,
          image: src,
        }))
      );
    }
    return cat.images.map((src, idx) => ({
      id: `${cat.slug}-${idx}`,
      name: `${cat.label} ${idx + 1}`,
      category: cat.slug,
      parentCategory: null,
      group: group.slug,
      fabric: cat.fabric,
      accent: cat.accent,
      image: src,
    }));
  })
);

/* ─── HASH RESOLVER ──────────────────────────────────────────────────────── */
interface ResolvedFilter {
  group: string;
  sub: string | null;
  subsub: string | null;
}

function resolveFilter(hash: string): ResolvedFilter {
  const slug = hash.replace("#", "").toLowerCase().trim();
  if (!slug) return { group: "all", sub: null, subsub: null };

  for (const g of FILTER_GROUPS) {
    if (g.slug === slug) return { group: g.slug, sub: null, subsub: null };
    for (const s of g.subcategories) {
      if (s.slug === slug) return { group: g.slug, sub: s.slug, subsub: null };
      for (const ss of s.subcategories ?? []) {
        if (ss.slug === slug) return { group: g.slug, sub: s.slug, subsub: ss.slug };
      }
    }
  }
  return { group: "all", sub: null, subsub: null };
}

/* ─── PRODUCT CARD ───────────────────────────────────────────────────────── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay: (index % 12) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group block">
        <div
          className="relative rounded-xl overflow-hidden bg-slate-100"
          style={{
            boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(0,0,0,0.13)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(0,0,0,0.07)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={product.image}
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.3"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

            {/* Name over image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-sm leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                {product.name}
              </h3>
              <p className="text-white/60 text-xs mt-0.5">{product.fabric}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center px-4 py-3 bg-white border-t border-slate-100">
            <span
              className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: product.accent, background: `${product.accent}18` }}
            />
          </div>

          {/* Bottom accent slide */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            style={{ background: `linear-gradient(90deg, ${product.accent}, transparent)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
const Products = () => {
  const location = useLocation();
  const catalogRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [activeSubSub, setActiveSubSub] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  /* Sync state from URL hash */
  useEffect(() => {
    const { group, sub, subsub } = resolveFilter(location.hash);
    setActiveGroup(group);
    setActiveSub(sub);
    setActiveSubSub(subsub);
    if (group !== "all") setOpenGroup(group);

    if (location.hash && catalogRef.current) {
      setTimeout(() => {
        catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [location.hash]);

  /* Update state + push history without full navigation */
  const applyFilter = (groupSlug: string, subSlug?: string, subSubSlug?: string) => {
    const hash = subSubSlug
      ? `#${subSubSlug}`
      : subSlug
      ? `#${subSlug}`
      : `#${groupSlug}`;
    window.history.pushState(null, "", `/products${hash}`);
    const { group, sub, subsub } = resolveFilter(hash);
    setActiveGroup(group);
    setActiveSub(sub);
    setActiveSubSub(subsub);
    if (group !== "all") setOpenGroup(group);
  };

  const clearFilter = () => {
    window.history.pushState(null, "", "/products");
    setActiveGroup("all");
    setActiveSub(null);
    setActiveSubSub(null);
    setOpenGroup(null);
  };

  /* Derive visible products */
  const filtered: Product[] = ALL_PRODUCTS.filter((p) => {
    if (activeGroup === "all") return true;
    if (activeSubSub) return p.category === activeSubSub;
    if (activeSub) return p.parentCategory === activeSub || p.category === activeSub;
    return p.group === activeGroup;
  });

  /* Helper: find the open group's subcategory data */
  const openGroupData = FILTER_GROUPS.find((g) => g.slug === openGroup);
  const openSubData = openGroupData?.subcategories.find((s) => s.slug === activeSub);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <main className="pt-[68px]" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #07071a 0%, #0d0d2b 60%, #060616 100%)" }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(165,180,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,1) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
          {/* Glow blob */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #3b82f6, #7c3aed)" }}
          />

          <div ref={headerRef} className="container max-w-6xl px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs text-indigo-300 uppercase tracking-[0.25em] font-semibold mb-4">
                <span className="w-4 h-px bg-indigo-400 inline-block" />
                Product Catalog
              </span>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Our{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #93c5fd, #c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Collections
                </span>
              </h1>
              <p className="mt-4 text-white/50 text-sm max-w-lg leading-relaxed">
                Export-ready garments across all categories — consistent quality, competitive MOQs, and full customisation available.
              </p>

              {/* Quick-jump group links */}
              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={clearFilter}
                  className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 text-white/70 hover:bg-white/10 transition-all duration-200"
                >
                  All
                </button>
                {FILTER_GROUPS.map((g) => (
                  <button
                    key={g.slug}
                    onClick={() => applyFilter(g.slug)}
                    className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200"
                    style={{
                      borderColor: `${g.accent}80`,
                      color: g.accent,
                      background: `${g.accent}18`,
                    }}
                  >
                    {g.group}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Clip transition to catalog section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          />
        </section>

        {/* ── CATALOG ── */}
        <section
          ref={catalogRef}
          id="catalog"
          className="relative py-16 overflow-hidden"
          style={{ background: "linear-gradient(170deg, #f8fafc 0%, #f1f5f9 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="container max-w-6xl px-6 relative">

            {/* ── FILTER PANEL ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              {/* Row 1: Group-level pills */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filter
                </div>

                {/* All button */}
                <button
                  onClick={clearFilter}
                  className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200"
                  style={{
                    background: activeGroup === "all"
                      ? "linear-gradient(135deg, #2563eb, #7c3aed)"
                      : "#ffffff",
                    color: activeGroup === "all" ? "#ffffff" : "#64748b",
                    border: activeGroup === "all" ? "1px solid transparent" : "1px solid #e2e8f0",
                    boxShadow: activeGroup === "all" ? "0 3px 14px #2563eb40" : "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  All
                </button>

                {/* Main category pills */}
                {FILTER_GROUPS.map((g) => {
                  const isGroupActive = activeGroup === g.slug && !activeSub;
                  const hasSubcategories = g.subcategories.length > 1;

                  return (
                    <div key={g.slug} className="relative inline-flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (openGroup === g.slug) {
                            setOpenGroup(null);
                          } else {
                            applyFilter(g.slug);
                            setOpenGroup(g.slug);
                          }
                        }}
                        className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-1.5"
                        style={{
                          background: isGroupActive
                            ? `linear-gradient(135deg, ${g.accent}, ${g.accent}cc)`
                            : "#ffffff",
                          color: isGroupActive ? "#ffffff" : "#64748b",
                          border: isGroupActive ? "1px solid transparent" : "1px solid #e2e8f0",
                          boxShadow: isGroupActive ? `0 3px 14px ${g.accent}40` : "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                      >
                        {g.group}
                        {hasSubcategories && (
                          <ChevronDown
                            className="w-3 h-3 transition-transform duration-300"
                            style={{
                              transform: openGroup === g.slug ? "rotate(180deg)" : "rotate(0deg)",
                              opacity: 0.7,
                            }}
                          />
                        )}
                      </button>
                    </div>
                  );
                })}

                {/* Item count */}
                <span className="ml-auto text-xs text-slate-400 font-medium">
                  {filtered.length} {filtered.length === 1 ? "item" : "items"}
                </span>
              </div>

              {/* Row 2: Subcategory pills (level 2) */}
              <AnimatePresence>
                {openGroup && (openGroupData?.subcategories.length ?? 0) > 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-200">
                      {openGroupData?.subcategories.map((sub) => {
                        const isSubActive = activeSub === sub.slug;
                        return (
                          <button
                            key={sub.slug}
                            onClick={() => {
                              applyFilter(openGroup, sub.slug);
                              setActiveSubSub(null);
                            }}
                            className="text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1"
                            style={{
                              background: isSubActive
                                ? `linear-gradient(135deg, ${sub.accent}, ${sub.accent}cc)`
                                : "#f8fafc",
                              color: isSubActive ? "#ffffff" : "#64748b",
                              border: isSubActive ? "1px solid transparent" : "1px solid #e2e8f0",
                              boxShadow: isSubActive ? `0 2px 10px ${sub.accent}40` : "none",
                            }}
                          >
                            {sub.label}
                            {(sub.subcategories?.length ?? 0) > 0 && (
                              <ChevronDown
                                className="w-3 h-3"
                                style={{
                                  transform: isSubActive ? "rotate(180deg)" : "rotate(0deg)",
                                  transition: "transform 0.3s",
                                  opacity: 0.7,
                                }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row 3: Sub-subcategory pills (level 3 — e.g. Polo / T-Shirt / Sweatshirt under Men) */}
              <AnimatePresence>
                {activeSub && (openSubData?.subcategories?.length ?? 0) > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-slate-100 pl-4">
                      {openSubData?.subcategories?.map((ss) => {
                        const isActive = activeSubSub === ss.slug;
                        return (
                          <button
                            key={ss.slug}
                            onClick={() => applyFilter(openGroup!, activeSub, ss.slug)}
                            className="text-[11px] font-semibold px-3 py-1 rounded-full border transition-all duration-200"
                            style={{
                              background: isActive
                                ? `linear-gradient(135deg, ${ss.accent}, ${ss.accent}cc)`
                                : "#f1f5f9",
                              color: isActive ? "#fff" : "#64748b",
                              border: isActive ? "1px solid transparent" : "1px solid #e2e8f0",
                              boxShadow: isActive ? `0 2px 8px ${ss.accent}40` : "none",
                            }}
                          >
                            {ss.label}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── PRODUCT GRID ── */}
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
              >
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-sm">No products found in this category yet.</p>
                <p className="text-slate-300 text-xs mt-1">Add images to the folder and rebuild.</p>
              </div>
            )}

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center text-xs text-gray-400 mt-12"
            >
              Custom styles, private label & bulk orders available ·{" "}
              <Link to="/contact" className="text-blue-500 hover:underline font-medium">
                Send an enquiry
              </Link>
            </motion.p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
import React, { useState, useEffect, useRef } from "react";

/* ---------- tiny inline icon set (line-art, olive/terracotta) ---------- */
const Icon = ({ name, className = "" }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "leaf":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <path d="M12 40C10 24 18 10 38 8c2 20-10 30-26 32Z" />
          <path d="M14 38C18 26 24 18 36 12" />
        </svg>
      );
    case "leafSmall":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M6 20C5 12 9 5 19 4c1 10-5 15-13 16Z" />
        </svg>
      );
    case "sofa":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <path d="M8 26v10a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V26" />
          <path d="M6 26a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v4H6z" />
          <path d="M10 22v-4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4" />
          <path d="M10 38v3M38 38v3" />
        </svg>
      );
    case "faucet":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <path d="M12 18h10v-4a4 4 0 0 1 8 0v10h6" />
          <path d="M32 24c4 0 6 3 6 6s-3 6-7 6" />
          <path d="M14 30v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2" />
        </svg>
      );
    case "vase":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <path d="M18 8h12l2 6-4 4v6c6 2 8 8 8 12a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2c0-4 2-10 8-12v-6l-4-4Z" />
          <path d="M24 8V4M20 4h8" />
        </svg>
      );
    case "screen":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <rect x="7" y="10" width="34" height="22" rx="2" />
          <path d="M18 38h12M24 32v6" />
          <path d="M14 18l5 5 5-6 4 4 6-7" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <circle cx="24" cy="24" r="16" />
          <path d="M29 19l-3 8-8 3 3-8Z" />
        </svg>
      );
    case "pencil":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <path d="M30 8l10 10-20 20H10V28Z" />
          <path d="M25 13l10 10" />
        </svg>
      );
    case "clip":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <rect x="10" y="10" width="28" height="30" rx="2" />
          <path d="M18 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M17 21h14M17 28h14M17 35h9" />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <path d="M27 21l9-9 4 4-9 9" />
          <path d="M25 23L9 39l-3-3 16-16Z" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 48 48" className={className} {...common}>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor" stroke="none">
          <path d="M10 26c0-8 5-14 12-16l1 4c-5 2-8 6-8 10h7v12H10Zm19 0c0-8 5-14 12-16l1 4c-5 2-8 6-8 10h7v12H29Z" />
        </svg>
      );
    case "arrowL":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M15 5l-7 7 7 7" />
        </svg>
      );
    case "arrowR":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M9 5l7 7-7 7" />
        </svg>
      );
    case "insta":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 21s7-7.4 7-12a7 7 0 1 0-14 0c0 4.6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.4" />
        </svg>
      );
    case "fb":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M15 8h2V5h-2a4 4 0 0 0-4 4v2H9v3h2v6h3v-6h2.4l.6-3H14V9a1 1 0 0 1 1-1Z" />
        </svg>
      );
    default:
      return null;
  }
};

/* ---------- organic divider (blob wave, not a straight line) ---------- */
const WaveDivider = ({ fill = "#FDF8F3", flip = false, className = "" }) => (
  <svg
    viewBox="0 0 1440 120"
    className={className}
    style={{ display: "block", width: "100%", transform: flip ? "scaleY(-1)" : "none" }}
    preserveAspectRatio="none"
  >
    <path
      d="M0,64 C240,110 420,10 720,40 C1020,70 1200,10 1440,56 L1440,120 L0,120 Z"
      fill={fill}
    />
  </svg>
);

/* ---------- reveal-on-scroll (single orchestrated hook, used sparingly) ---------- */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ---------- image helpers: warm, textured, no placeholder-gray ---------- */
const IMG = {
  hero: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
  service1: "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=800&auto=format&fit=crop",
  service2: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop",
  service3: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?q=80&w=800&auto=format&fit=crop",
  service4: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  proj1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
  proj2: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=900&auto=format&fit=crop",
  proj3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
  proj4: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=900&auto=format&fit=crop",
  proj5: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=900&auto=format&fit=crop",
  founder: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop",
  founderShelf: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=600&auto=format&fit=crop",
  ctaBowls: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=900&auto=format&fit=crop",
  footerRoom: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=400&auto=format&fit=crop",
  avatar1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  avatar2: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
  avatar3: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200&auto=format&fit=crop",
};

/* ---------- logo ---------- */
const Logo = ({ dark = false, brand = "OLIVA" }) => (
  <div className="tf-logo">
    <Icon name="leaf" className="tf-logo-icon" />
    <div className="tf-logo-text">
      <span className="tf-logo-serif">{brand.split(" ")[0].toLowerCase()}</span>
      <span className="tf-logo-caps">{brand.split(" ").slice(1).join(" ") || "INTERIORS"}</span>
    </div>
  </div>
);

/* =====================================================================
   MAIN
   ===================================================================== */
export default function TerraCloneSite() {
  const BRAND = "OLIVA INTERIORS";
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "PROCESS", "JOURNAL", "CONTACT"];

  const services = [
    {
      icon: "sofa",
      title: "Full-Service Interior Design",
      desc: "End-to-end design and styling, from first sketch to the final cushion placement.",
      img: IMG.service1,
    },
    {
      icon: "faucet",
      title: "Kitchen & Bath Design",
      desc: "Considered layouts and natural materials for the rooms you live in most.",
      img: IMG.service2,
    },
    {
      icon: "vase",
      title: "Styling & Decor",
      desc: "Curated objects and textiles that bring warmth and story to a finished room.",
      img: IMG.service3,
    },
    {
      icon: "screen",
      title: "E-Design",
      desc: "A full design plan delivered remotely, wherever in the world you call home.",
      img: IMG.service4,
    },
  ];

  const projects = [
    { img: IMG.proj1, name: "Sagewood Residence", loc: "Austin, Texas" },
    { img: IMG.proj2, name: "Mossy Glen Kitchen", loc: "Seattle, Washington" },
    { img: IMG.proj3, name: "Sunset Cliffs Home", loc: "San Diego, California" },
    { img: IMG.proj4, name: "Caldera Bathroom", loc: "Portland, Oregon" },
    { img: IMG.proj5, name: "Willow Creek Retreat", loc: "Napa Valley, California" },
  ];

  const processSteps = [
    { icon: "compass", num: "DISCOVER", desc: "We listen closely to how you live and what you're dreaming of." },
    { icon: "pencil", num: "DESIGN", desc: "Concepts, palettes, and layouts take shape around your space." },
    { icon: "clip", num: "PLAN", desc: "Every material, finish, and timeline is mapped out in detail." },
    { icon: "hammer", num: "EXECUTE", desc: "We manage the build so nothing falls on your shoulders." },
    { icon: "sun", num: "ENJOY", desc: "You settle into a space that finally feels entirely yours." },
  ];

  const whyUs = [
    "Wellness-focused design",
    "Sustainable & natural materials",
    "Personalized, boutique approach",
    "Timeless, soulful spaces",
  ];

  const testimonials = [
    {
      quote:
        "Working with the studio felt less like a renovation and more like being understood. Every room now feels like it was always meant to be this way.",
      name: "JESSICA T.",
      loc: "Austin, Texas",
      avatar: IMG.avatar1,
    },
    {
      quote:
        "They took our scattered Pinterest boards and turned them into a home that's calm, warm, and completely ours. We still can't believe it's the same house.",
      name: "DANIEL & KYLE",
      loc: "Seattle, Washington",
      avatar: IMG.avatar2,
    },
    {
      quote:
        "From the first call to the final walkthrough, every detail was considered. Our kitchen is now the room we never want to leave.",
      name: "MICHELLE R.",
      loc: "Napa Valley, California",
      avatar: IMG.avatar3,
    },
  ];

  const nextT = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);
  const prevT = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="tf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        :root{
          --cream:#FDF8F3;
          --cream-2:#F9F5EF;
          --olive:#5D6B4F;
          --olive-light:#6B7A5B;
          --olive-dark:#3D4A35;
          --terracotta:#8C5A3C;
          --sand:#C4A484;
          --charcoal:#2B2B2B;
        }

        .tf-root{
          background:var(--cream);
          color:var(--charcoal);
          font-family:'Inter',sans-serif;
          font-weight:400;
          -webkit-font-smoothing:antialiased;
          overflow-x:hidden;
          position:relative;
        }
        .tf-root *{box-sizing:border-box;}
        .tf-root h1,.tf-root h2,.tf-root h3{
          font-family:'Playfair Display',serif;
          margin:0;
          color:var(--charcoal);
          font-weight:600;
        }
        .tf-root p{margin:0;line-height:1.65;}
        .tf-root img{display:block;max-width:100%;}
        .tf-root a{color:inherit;text-decoration:none;}
        .tf-root button{font-family:inherit;cursor:pointer;}

        .tf-wrap{max-width:1240px;margin:0 auto;padding:0 32px;}
        @media(max-width:768px){.tf-wrap{padding:0 20px;}}

        .tf-italic{font-style:italic;font-weight:500;}

        /* ---- buttons ---- */
        .tf-btn{
          display:inline-flex;align-items:center;gap:8px;
          padding:14px 30px;
          border-radius:999px;
          font-size:12.5px;
          letter-spacing:0.09em;
          font-weight:500;
          border:1px solid transparent;
          transition:transform .35s cubic-bezier(.22,1,.36,1), background .3s ease, color .3s ease, box-shadow .3s ease;
          white-space:nowrap;
        }
        .tf-btn-solid{background:var(--olive-dark);color:var(--cream);}
        .tf-btn-solid:hover{background:var(--olive);transform:translateY(-2px);box-shadow:0 10px 24px -8px rgba(61,74,53,.5);}
        .tf-btn-outline{background:transparent;color:var(--olive-dark);border-color:var(--olive-dark);}
        .tf-btn-outline:hover{background:var(--olive-dark);color:var(--cream);transform:translateY(-2px);}
        .tf-btn-cream{background:var(--cream);color:var(--olive-dark);}
        .tf-btn-cream:hover{background:#fff;transform:translateY(-2px);}
        .tf-link{
          font-size:12.5px;letter-spacing:.06em;font-weight:500;color:var(--terracotta);
          display:inline-flex;align-items:center;gap:5px;
          border-bottom:1px solid transparent;
          transition:border-color .3s ease, gap .3s ease;
        }
        .tf-link:hover{border-color:var(--terracotta);gap:9px;}

        /* ---- header ---- */
        .tf-header{
          position:sticky;top:0;z-index:100;
          background:rgba(253,248,243,0.86);
          backdrop-filter:blur(14px);
          -webkit-backdrop-filter:blur(14px);
          transition:box-shadow .3s ease, padding .3s ease;
          padding:22px 0;
        }
        .tf-header.scrolled{
          box-shadow:0 1px 0 rgba(43,43,43,0.07), 0 12px 30px -20px rgba(43,43,43,.25);
          padding:14px 0;
        }
        .tf-header-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;}
        .tf-logo{display:flex;align-items:center;gap:10px;}
        .tf-logo-icon{width:26px;height:26px;color:var(--terracotta);flex-shrink:0;}
        .tf-logo-text{display:flex;flex-direction:column;line-height:1.05;}
        .tf-logo-serif{font-family:'Playfair Display',serif;font-size:19px;color:var(--charcoal);letter-spacing:.01em;}
        .tf-logo-caps{font-size:9.5px;letter-spacing:.24em;color:var(--olive-dark);font-weight:500;}
        .tf-nav{display:flex;align-items:center;gap:34px;}
        .tf-nav a{
          font-size:12.5px;letter-spacing:.08em;font-weight:500;color:var(--charcoal);
          position:relative;padding-bottom:3px;
        }
        .tf-nav a::after{
          content:'';position:absolute;left:0;bottom:0;height:1px;width:0;background:var(--terracotta);
          transition:width .3s ease;
        }
        .tf-nav a:hover::after{width:100%;}
        .tf-burger{display:none;background:none;border:none;padding:6px;}
        .tf-burger span{display:block;width:22px;height:1.5px;background:var(--charcoal);margin:5px 0;transition:transform .3s, opacity .3s;}

        @media(max-width:980px){
          .tf-nav{display:none;}
          .tf-burger{display:block;}
          .tf-header-cta{display:none;}
        }

        .tf-mobile-nav{
          max-width:1240px;margin:0 auto;padding:0 20px;
          display:flex;flex-direction:column;gap:2px;
          overflow:hidden;
          transition:max-height .4s ease, opacity .3s ease, margin-top .4s ease;
        }
        .tf-mobile-nav a{
          padding:13px 4px;font-size:13.5px;letter-spacing:.06em;font-weight:500;
          border-bottom:1px solid rgba(93,107,79,.14);
        }

        /* ---- hero ---- */
        .tf-hero{position:relative;background:var(--cream);padding-top:8px;}
        .tf-hero-grid{
          display:grid;grid-template-columns:0.72fr 1fr;
          gap:56px;align-items:center;
          padding:36px 0 96px;
        }
        @media(max-width:980px){
          .tf-hero-grid{grid-template-columns:1fr;gap:40px;padding:20px 0 64px;text-align:left;}
        }
        .tf-overline{
          font-size:11.5px;letter-spacing:.18em;color:var(--terracotta);font-weight:500;
          display:flex;align-items:center;gap:9px;margin-bottom:20px;
        }
        .tf-overline::before{content:'';width:26px;height:1px;background:var(--terracotta);}
        .tf-hero h1{
          font-size:clamp(34px,4.6vw,54px);
          line-height:1.1;
          letter-spacing:-.01em;
          margin-bottom:22px;
        }
        .tf-hero p.tf-lead{
          font-size:16.5px;color:#4b4b46;max-width:420px;margin-bottom:32px;
        }
        .tf-hero-media{position:relative;}
        .tf-hero-img-wrap{
          position:relative;border-radius:22px;overflow:hidden;
          box-shadow:0 40px 70px -35px rgba(61,74,53,.45);
        }
        .tf-hero-img-wrap img{
          width:100%;height:520px;object-fit:cover;
          transition:transform 1.1s cubic-bezier(.22,1,.36,1);
        }
        .tf-hero-img-wrap:hover img{transform:scale(1.045);}
        .tf-hero-img-overlay{
          position:absolute;inset:0;
          background:linear-gradient(180deg,rgba(253,248,243,0) 55%, rgba(253,248,243,.55) 100%);
        }
        .tf-hero-olive-tree{
          position:absolute;left:-34px;bottom:-26px;width:120px;height:150px;
          color:var(--olive);opacity:.9;
          filter:drop-shadow(0 18px 20px rgba(61,74,53,.25));
          display:none;
        }
        @media(min-width:1180px){.tf-hero-olive-tree{display:block;}}
        @media(max-width:980px){.tf-hero-img-wrap img{height:360px;}}

        .tf-wave-section{position:relative;line-height:0;margin-top:-2px;}

        /* ---- section titles ---- */
        .tf-section{padding:96px 0;}
        .tf-section-head{max-width:620px;margin-bottom:56px;}
        .tf-section-head.center{margin-left:auto;margin-right:auto;text-align:center;}
        .tf-section-head h2{font-size:clamp(26px,3.2vw,38px);line-height:1.2;}
        .tf-section-top-row{
          display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:56px;
        }
        @media(max-width:700px){.tf-section-top-row{flex-direction:column;align-items:flex-start;gap:18px;}}

        /* ---- what we do ---- */
        .tf-services-wrap{position:relative;}
        .tf-services-bg-leaf{position:absolute;top:-40px;right:-60px;width:340px;height:340px;color:var(--sand);opacity:.35;pointer-events:none;}
        .tf-services-bg-leaf-2{position:absolute;bottom:0;right:120px;width:120px;height:120px;color:var(--olive);opacity:.25;pointer-events:none;transform:rotate(35deg);}
        .tf-services-grid{
          display:grid;grid-template-columns:repeat(4,1fr);gap:26px;position:relative;z-index:1;
        }
        @media(max-width:980px){.tf-services-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:560px){.tf-services-grid{grid-template-columns:1fr;}}
        .tf-service-card{
          background:var(--cream-2);
          border-radius:22px;
          padding:22px;
          transition:transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease;
        }
        .tf-service-card:hover{transform:translateY(-8px);box-shadow:0 26px 44px -28px rgba(61,74,53,.4);}
        .tf-service-img{border-radius:16px;overflow:hidden;height:150px;margin-bottom:20px;}
        .tf-service-img img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.22,1,.36,1);}
        .tf-service-card:hover .tf-service-img img{transform:scale(1.08);}
        .tf-service-icon{
          width:46px;height:46px;border-radius:50%;background:var(--olive-dark);
          display:flex;align-items:center;justify-content:center;margin-bottom:16px;
        }
        .tf-service-icon svg{width:22px;height:22px;color:var(--cream);}
        .tf-service-card h3{font-size:17.5px;margin-bottom:9px;line-height:1.3;}
        .tf-service-card p{font-size:13.5px;color:#5c5c56;margin-bottom:16px;}

        /* ---- projects ---- */
        .tf-projects-scroll{
          display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x proximity;
          padding-bottom:14px;margin:0 -32px;padding-left:32px;padding-right:32px;
          scrollbar-width:thin;scrollbar-color:var(--sand) transparent;
        }
        @media(max-width:768px){.tf-projects-scroll{margin:0 -20px;padding-left:20px;padding-right:20px;}}
        .tf-projects-scroll::-webkit-scrollbar{height:5px;}
        .tf-projects-scroll::-webkit-scrollbar-thumb{background:var(--sand);border-radius:8px;}
        .tf-project-card{
          flex:0 0 auto;width:280px;scroll-snap-align:start;
        }
        .tf-project-img{
          border-radius:20px;overflow:hidden;height:340px;margin-bottom:16px;position:relative;
          box-shadow:0 20px 34px -22px rgba(43,43,43,.35);
        }
        .tf-project-img img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.22,1,.36,1);}
        .tf-project-card:hover .tf-project-img img{transform:scale(1.07);}
        .tf-project-card h3{font-size:16px;margin-bottom:4px;}
        .tf-project-card span{font-size:12.5px;color:var(--terracotta);letter-spacing:.03em;}

        /* ---- founder ---- */
        .tf-founder{position:relative;background:var(--cream-2);overflow:hidden;}
        .tf-founder-blob{
          position:absolute;top:-120px;left:-120px;width:420px;height:420px;border-radius:50%;
          background:radial-gradient(circle at 30% 30%, rgba(93,107,79,.18), transparent 70%);
        }
        .tf-founder-blob-2{
          position:absolute;bottom:-160px;right:-100px;width:460px;height:460px;border-radius:50%;
          background:radial-gradient(circle at 60% 60%, rgba(140,90,60,.16), transparent 70%);
        }
        .tf-founder-grid{
          display:grid;grid-template-columns:0.9fr 1.2fr 0.7fr;
          gap:36px;align-items:center;position:relative;z-index:1;
        }
        @media(max-width:980px){.tf-founder-grid{grid-template-columns:1fr;text-align:left;}}
        .tf-founder-img-main{
          border-radius:50%;overflow:hidden;aspect-ratio:1/1;
          border:10px solid var(--cream);
          box-shadow:0 30px 50px -26px rgba(61,74,53,.4);
          position:relative;
        }
        .tf-founder-img-main img{width:100%;height:100%;object-fit:cover;}
        .tf-founder-img-shelf{
          border-radius:50%;overflow:hidden;aspect-ratio:1/1;max-width:220px;margin-left:auto;
          border:8px solid var(--cream);
          box-shadow:0 24px 40px -22px rgba(140,90,60,.35);
        }
        @media(max-width:980px){.tf-founder-img-shelf{margin:0 auto;max-width:180px;}}
        .tf-founder-img-shelf img{width:100%;height:100%;object-fit:cover;}
        .tf-founder-eyebrow{font-size:11.5px;letter-spacing:.18em;color:var(--terracotta);font-weight:500;margin-bottom:16px;}
        .tf-founder h2{font-size:clamp(24px,3vw,32px);margin-bottom:20px;line-height:1.25;}
        .tf-founder p.body{font-size:15px;color:#4b4b46;margin-bottom:14px;max-width:440px;}
        @media(max-width:980px){.tf-founder p.body{margin-left:0;margin-right:0;}}

        /* ---- process + why choose ---- */
        .tf-process-grid{display:grid;grid-template-columns:1.75fr 1fr;gap:44px;align-items:stretch;}
        @media(max-width:980px){.tf-process-grid{grid-template-columns:1fr;}}
        .tf-process-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:22px;margin-top:44px;}
        @media(max-width:900px){.tf-process-steps{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:520px){.tf-process-steps{grid-template-columns:1fr;}}
        .tf-process-step{position:relative;padding-top:6px;}
        .tf-process-step::before{
          content:'';position:absolute;top:0;left:0;width:34px;height:1px;background:var(--sand);
        }
        .tf-process-icon{width:38px;height:38px;color:var(--olive-dark);margin:16px 0 14px;}
        .tf-process-step .num{font-size:11px;letter-spacing:.16em;color:var(--terracotta);font-weight:600;margin-bottom:8px;display:block;}
        .tf-process-step p{font-size:13px;color:#5c5c56;}

        .tf-why-card{
          background:var(--olive-dark);color:var(--cream);
          border-radius:26px;padding:40px 32px;
          position:relative;overflow:hidden;
          display:flex;flex-direction:column;justify-content:space-between;
        }
        .tf-why-card h3{color:var(--cream);font-size:20px;letter-spacing:.06em;margin-bottom:26px;}
        .tf-why-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:16px;}
        .tf-why-list li{display:flex;align-items:flex-start;gap:12px;font-size:14px;line-height:1.4;}
        .tf-why-list .tick{
          width:20px;height:20px;border-radius:50%;border:1px solid rgba(253,248,243,.5);
          display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;
        }
        .tf-why-list .tick svg{width:11px;height:11px;color:var(--cream);}
        .tf-why-plant{position:absolute;bottom:-30px;right:-24px;width:150px;height:190px;color:rgba(253,248,243,.16);}

        /* ---- testimonials ---- */
        .tf-testimonials-track{
          display:grid;grid-template-columns:repeat(3,1fr);gap:26px;
        }
        @media(max-width:980px){.tf-testimonials-track{grid-template-columns:1fr;}}
        .tf-testimonial-card{
          background:var(--cream-2);border-radius:22px;padding:36px 30px;
          display:flex;flex-direction:column;gap:20px;
          transition:box-shadow .35s ease, transform .35s ease;
        }
        .tf-testimonial-card:hover{box-shadow:0 22px 40px -26px rgba(61,74,53,.3);transform:translateY(-4px);}
        .tf-testimonial-card svg.quote{width:30px;height:30px;color:var(--sand);}
        .tf-testimonial-card p.txt{font-size:14.5px;color:#4b4b46;line-height:1.7;}
        .tf-testimonial-person{display:flex;align-items:center;gap:12px;margin-top:auto;}
        .tf-testimonial-avatar{width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;}
        .tf-testimonial-avatar img{width:100%;height:100%;object-fit:cover;}
        .tf-testimonial-person .name{font-size:12.5px;font-weight:600;letter-spacing:.04em;}
        .tf-testimonial-person .loc{font-size:12px;color:var(--terracotta);}
        .tf-testi-arrows{display:flex;gap:10px;justify-content:center;margin-top:40px;}
        .tf-testi-arrow-btn{
          width:42px;height:42px;border-radius:50%;border:1px solid rgba(93,107,79,.35);
          background:transparent;display:flex;align-items:center;justify-content:center;
          transition:background .3s ease, border-color .3s ease;color:var(--olive-dark);
        }
        .tf-testi-arrow-btn:hover{background:var(--olive-dark);color:var(--cream);border-color:var(--olive-dark);}
        .tf-testi-arrow-btn svg{width:17px;height:17px;}

        .tf-testi-mobile{display:none;}
        @media(max-width:980px){
          .tf-testimonials-track{display:none;}
          .tf-testi-mobile{display:block;}
        }

        /* ---- final CTA ---- */
        .tf-cta{
          background:var(--olive-dark);color:var(--cream);
          border-radius:32px;overflow:hidden;
          display:grid;grid-template-columns:0.85fr 1.15fr;align-items:stretch;
        }
        @media(max-width:860px){.tf-cta{grid-template-columns:1fr;}}
        .tf-cta-img{height:100%;min-height:280px;overflow:hidden;}
        .tf-cta-img img{width:100%;height:100%;object-fit:cover;}
        .tf-cta-text{padding:56px 48px;display:flex;flex-direction:column;justify-content:center;gap:22px;}
        @media(max-width:600px){.tf-cta-text{padding:44px 30px;}}
        .tf-cta-eyebrow{font-size:11.5px;letter-spacing:.18em;color:var(--sand);font-weight:500;}
        .tf-cta-text h2{color:var(--cream);font-size:clamp(24px,3.4vw,34px);line-height:1.2;}

        /* ---- footer ---- */
        .tf-footer{background:var(--cream-2);position:relative;padding-top:88px;}
        .tf-footer-grid{
          display:grid;grid-template-columns:1.4fr 1fr 1fr 1.1fr;gap:40px;padding-bottom:56px;
        }
        @media(max-width:860px){.tf-footer-grid{grid-template-columns:1fr 1fr;row-gap:40px;}}
        @media(max-width:520px){.tf-footer-grid{grid-template-columns:1fr;}}
        .tf-footer-desc{font-size:13.5px;color:#5c5c56;margin:18px 0 22px;max-width:260px;}
        .tf-footer-social{display:flex;gap:10px;}
        .tf-footer-social a{
          width:36px;height:36px;border-radius:50%;border:1px solid rgba(93,107,79,.35);
          display:flex;align-items:center;justify-content:center;transition:background .3s ease,color .3s ease;
        }
        .tf-footer-social a svg{width:16px;height:16px;}
        .tf-footer-social a:hover{background:var(--olive-dark);color:var(--cream);border-color:var(--olive-dark);}
        .tf-footer h4{font-size:12px;letter-spacing:.14em;color:var(--olive-dark);font-weight:600;margin-bottom:20px;font-family:'Inter',sans-serif;}
        .tf-footer-links{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;}
        .tf-footer-links a{font-size:13.5px;color:#4b4b46;transition:color .3s ease;}
        .tf-footer-links a:hover{color:var(--terracotta);}
        .tf-footer-contact{font-size:13.5px;color:#4b4b46;display:flex;flex-direction:column;gap:10px;}
        .tf-footer-room{
          position:absolute;bottom:64px;right:32px;width:96px;height:96px;border-radius:50%;overflow:hidden;
          border:6px solid var(--cream);box-shadow:0 16px 30px -16px rgba(43,43,43,.3);display:none;
        }
        @media(min-width:1100px){.tf-footer-room{display:block;}}
        .tf-footer-room img{width:100%;height:100%;object-fit:cover;}
        .tf-footer-bottom{
          background:var(--olive-dark);color:rgba(253,248,243,.75);
          padding:18px 0;font-size:12px;letter-spacing:.02em;
          display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;
        }
        .tf-footer-bottom a{opacity:.9;}
        .tf-footer-bottom a:hover{opacity:1;text-decoration:underline;}

        .tf-deco-leaf{position:absolute;pointer-events:none;color:var(--olive);opacity:.14;}
        .tf-svg-sm{width:13px;height:13px;flex-shrink:0;}
      `}</style>

      {/* ================= HEADER ================= */}
      <header className={`tf-header ${scrolled ? "scrolled" : ""}`}>
        <div className="tf-wrap tf-header-inner">
          <a href="#home"><Logo brand={BRAND} /></a>
          <nav className="tf-nav">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </nav>
          <a href="#contact" className="tf-btn tf-btn-solid tf-header-cta">BOOK A CONSULTATION</a>
          <button className="tf-burger" aria-label="Menu" onClick={() => setNavOpen((v) => !v)}>
            <span style={{ transform: navOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: navOpen ? 0 : 1 }} />
            <span style={{ transform: navOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
        <div
          className="tf-mobile-nav"
          style={{
            maxHeight: navOpen ? "420px" : "0px",
            opacity: navOpen ? 1 : 0,
            marginTop: navOpen ? "18px" : "0px",
          }}
        >
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setNavOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="tf-btn tf-btn-solid" style={{ marginTop: "14px", justifyContent: "center" }} onClick={() => setNavOpen(false)}>
            BOOK A CONSULTATION
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="tf-hero">
        <div className="tf-wrap">
          <div className="tf-hero-grid">
            <div>
              <div className="tf-overline">ORGANIC SPACES, INSPIRED LIVING.</div>
              <h1>
                Beautiful interiors that <span className="tf-italic">restore</span> and inspire.
              </h1>
              <p className="tf-lead">
                We design wellness-inspired homes that blend natural beauty, function, and soulful living.
              </p>
              <a href="#projects" className="tf-btn tf-btn-solid">EXPLORE OUR WORK</a>
            </div>
            <div className="tf-hero-media">
              <div className="tf-hero-img-wrap">
                <img src={IMG.hero} alt="Boucle curved sofa in a Mediterranean-style living room with fireplace and wooden coffee table" />
                <div className="tf-hero-img-overlay" />
              </div>
              <Icon name="leaf" className="tf-hero-olive-tree" />
            </div>
          </div>
        </div>
        <div className="tf-wave-section">
          <WaveDivider fill="#FDF8F3" />
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section id="services" className="tf-section tf-services-wrap">
        <Icon name="leafSmall" className="tf-services-bg-leaf" />
        <Icon name="leafSmall" className="tf-services-bg-leaf-2" />
        <div className="tf-wrap">
          <Reveal>
            <div className="tf-section-head center">
              <h2>Thoughtful design for how you live.</h2>
            </div>
          </Reveal>
          <div className="tf-services-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="tf-service-card">
                  <div className="tf-service-img">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <div className="tf-service-icon"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#contact" className="tf-link">LEARN MORE <Icon name="arrowR" className="tf-svg-sm" /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="tf-section" style={{ background: "var(--cream-2)", paddingBottom: "104px" }}>
        <div className="tf-wrap">
          <Reveal>
            <div className="tf-section-top-row">
              <div className="tf-section-head" style={{ marginBottom: 0 }}>
                <h2>Spaces that feel like home.</h2>
              </div>
              <a href="#contact" className="tf-link">VIEW ALL PROJECTS <Icon name="arrowR" className="tf-svg-sm" /></a>
            </div>
          </Reveal>
        </div>
        <div className="tf-wrap">
          <div className="tf-projects-scroll">
            {projects.map((p) => (
              <div key={p.name} className="tf-project-card">
                <div className="tf-project-img">
                  <img src={p.img} alt={`${p.name}, ${p.loc}`} />
                </div>
                <h3>{p.name}</h3>
                <span>{p.loc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tf-wave-section" style={{ marginTop: "72px", transform: "translateY(2px)" }}>
          <WaveDivider fill="#F9F5EF" flip />
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section id="about" className="tf-section tf-founder" style={{ paddingTop: "0" }}>
        <div className="tf-founder-blob" />
        <div className="tf-founder-blob-2" />
        <div className="tf-wrap" style={{ paddingTop: "24px" }}>
          <div className="tf-founder-grid">
            <Reveal>
              <div className="tf-founder-img-main">
                <img src={IMG.founder} alt="Founder Marisa seated in a naturally lit studio" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <div className="tf-founder-eyebrow">MEET THE FOUNDER</div>
                <h2>Designing with intention. Rooted in nature.</h2>
                <p className="body">
                  Hi, I'm Marisa. I started this studio after years of feeling like interior design had lost touch with how people actually want to feel in their homes — grounded, unhurried, and at ease.
                </p>
                <p className="body" style={{ marginBottom: "28px" }}>
                  Every project begins with natural materials, honest craftsmanship, and a home's own light and landscape, so the result feels less designed than simply, finally right.
                </p>
                <a href="#about" className="tf-link">MORE ABOUT MARISA <Icon name="arrowR" className="tf-svg-sm" /></a>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="tf-founder-img-shelf">
                <img src={IMG.founderShelf} alt="Shelf styled with ceramic vases and plants" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PROCESS + WHY US ================= */}
      <section id="process" className="tf-section">
        <div className="tf-wrap">
          <div className="tf-process-grid">
            <Reveal>
              <div>
                <div className="tf-section-head" style={{ marginBottom: 0 }}>
                  <h2>A thoughtful process. Effortless experience.</h2>
                </div>
                <div className="tf-process-steps">
                  {processSteps.map((s) => (
                    <div key={s.num} className="tf-process-step">
                      <Icon name={s.icon} className="tf-process-icon" />
                      <span className="num">{s.num}</span>
                      <p>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="tf-why-card">
                <div>
                  <h3>WHY CHOOSE US</h3>
                  <ul className="tf-why-list">
                    {whyUs.map((w) => (
                      <li key={w}>
                        <span className="tick"><Icon name="check" /></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <Icon name="leaf" className="tf-why-plant" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="tf-section" style={{ background: "var(--cream-2)" }}>
        <div className="tf-wrap">
          <Reveal>
            <div className="tf-section-head center">
              <h2>Stories from our clients.</h2>
            </div>
          </Reveal>

          <div className="tf-testimonials-track">
            {testimonials.map((t) => (
              <div key={t.name} className="tf-testimonial-card">
                <Icon name="quote" className="quote" />
                <p className="txt">{t.quote}</p>
                <div className="tf-testimonial-person">
                  <div className="tf-testimonial-avatar"><img src={t.avatar} alt={t.name} /></div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="loc">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tf-testi-mobile">
            <div className="tf-testimonial-card">
              <Icon name="quote" className="quote" />
              <p className="txt">{testimonials[testimonialIdx].quote}</p>
              <div className="tf-testimonial-person">
                <div className="tf-testimonial-avatar"><img src={testimonials[testimonialIdx].avatar} alt="" /></div>
                <div>
                  <div className="name">{testimonials[testimonialIdx].name}</div>
                  <div className="loc">{testimonials[testimonialIdx].loc}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tf-testi-arrows">
            <button className="tf-testi-arrow-btn" onClick={prevT} aria-label="Previous testimonial"><Icon name="arrowL" /></button>
            <button className="tf-testi-arrow-btn" onClick={nextT} aria-label="Next testimonial"><Icon name="arrowR" /></button>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section id="contact" className="tf-section" style={{ paddingBottom: "40px" }}>
        <div className="tf-wrap">
          <Reveal>
            <div className="tf-cta">
              <div className="tf-cta-img">
                <img src={IMG.ctaBowls} alt="Handmade ceramic bowls arranged on a wooden surface" />
              </div>
              <div className="tf-cta-text">
                <div className="tf-cta-eyebrow">READY TO BEGIN?</div>
                <h2>Let's create a space that feels like you.</h2>
                <div>
                  <a href="#contact" className="tf-btn tf-btn-cream">BOOK YOUR CONSULTATION</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="tf-footer">
        <div className="tf-footer-room"><img src={IMG.footerRoom} alt="" /></div>
        <div className="tf-wrap">
          <div className="tf-footer-grid">
            <div>
              <Logo brand={BRAND} />
              <p className="tf-footer-desc">
                Wellness-inspired interiors for homes that feel warm, natural, and entirely your own.
              </p>
              <div className="tf-footer-social">
                <a href="#" aria-label="Instagram"><Icon name="insta" /></a>
                <a href="#" aria-label="Pinterest"><Icon name="pin" /></a>
                <a href="#" aria-label="Facebook"><Icon name="fb" /></a>
              </div>
            </div>
            <div>
              <h4>QUICK LINKS</h4>
              <ul className="tf-footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>SERVICES</h4>
              <ul className="tf-footer-links">
                <li><a href="#services">Full-Service Design</a></li>
                <li><a href="#services">Kitchen & Bath</a></li>
                <li><a href="#services">Styling & Decor</a></li>
                <li><a href="#services">E-Design</a></li>
              </ul>
            </div>
            <div>
              <h4>LET'S CONNECT</h4>
              <div className="tf-footer-contact">
                <span>hello@olivainteriors.com</span>
                <span>(512) 555-0148</span>
                <span>Austin, Texas</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-footer-bottom">
          <div className="tf-wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: "12px" }}>
            <span>© 2024 {BRAND.split(" ")[0][0] + BRAND.split(" ")[0].slice(1).toLowerCase()} Interiors. All rights reserved.</span>
            <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, ChevronDown, Instagram, Youtube, Music2, Heart, Star, Sparkles } from "lucide-react";

// ── Floating gold particle ──────────────────────────────────────────────
function Particle({ x, size, duration, delay }: { x: number; size: number; duration: number; delay: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        bottom: "-10px",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,168,83,0.7) 0%, rgba(245,215,128,0.3) 50%, transparent 100%)",
        animation: `float-particle ${duration}s linear ${delay}s infinite`,
        filter: "blur(1px)",
      }}
    />
  );
}

// ── App launcher card ───────────────────────────────────────────────────
interface AppCard {
  name: string;
  tagline: string;
  icon: string;
  color: string;
  glow: string;
  border: string;
  url: string;
  badge?: string;
  external: boolean;
}

const APPS: AppCard[] = [
  {
    name: "CLC Premier Studios",
    tagline: "AI-powered music & video creation studio",
    icon: "🎬",
    color: "linear-gradient(135deg, #00D485 0%, #4ade80 100%)",
    glow: "rgba(0,212,133,0.25)",
    border: "rgba(0,212,133,0.3)",
    url: "https://clc-premiere-studios.vercel.app",
    badge: "OPEN APP",
    external: true,
  },
  {
    name: "Kept by Crystal Lynn Creates",
    tagline: "Your virtual home for Godly living & organization",
    icon: "🏡",
    color: "linear-gradient(135deg, #4A8C5C 0%, #7AB88A 100%)",
    glow: "rgba(74,140,92,0.25)",
    border: "rgba(74,140,92,0.3)",
    url: "https://kept-by-clccreates.vercel.app",
    badge: "VISIT",
    external: true,
  },
  {
    name: "CLC Beauties",
    tagline: "Beauty tips, tutorials & products curated with love",
    icon: "💄",
    color: "linear-gradient(135deg, #E8A4A4 0%, #C47A7A 100%)",
    glow: "rgba(232,164,164,0.25)",
    border: "rgba(232,164,164,0.3)",
    url: "https://clcbeauties.com",
    badge: "VISIT",
    external: true,
  },
  {
    name: "Crystal Lynn on YouTube",
    tagline: "Music videos, tutorials, vlogs & more",
    icon: "📺",
    color: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
    glow: "rgba(255,0,0,0.2)",
    border: "rgba(255,0,0,0.3)",
    url: "https://youtube.com/@clc4321",
    badge: "SUBSCRIBE",
    external: true,
  },
  {
    name: "Calendi",
    tagline: "Smart multi-screen dashboard — your time, your way",
    icon: "🗓️",
    color: "linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)",
    glow: "rgba(139,92,246,0.25)",
    border: "rgba(139,92,246,0.3)",
    url: "https://calendi.vercel.app",
    badge: "OPEN",
    external: true,
  },
];

// ── Brand values ────────────────────────────────────────────────────────
const VALUES = [
  { icon: Heart, label: "Faith First", desc: "Everything rooted in Godly purpose and grace" },
  { icon: Sparkles, label: "Creative Freedom", desc: "Art, music, design — expression without limits" },
  { icon: Star, label: "Empowered Women", desc: "Helping moms and Christian women rise and thrive" },
  { icon: Music2, label: "Authentic Voice", desc: "Real stories, real music, real community" },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const particlesRef = useRef<{ x: number; size: number; dur: number; delay: number }[]>([]);

  if (particlesRef.current.length === 0) {
    particlesRef.current = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      size: 4 + Math.random() * 8,
      dur: 8 + Math.random() * 12,
      delay: -(Math.random() * 20),
    }));
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#080610", minHeight: "100vh", color: "#F5EDDC" }}>
      {/* ── Sticky nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,6,16,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,168,83,0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="font-script text-2xl gold-text"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Crystal Lynn Creates
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "My World", "Connect"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(245,237,220,0.55)" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#D4A853"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(245,237,220,0.55)"; }}
              >
                {item}
              </a>
            ))}
            <a
              href="#my-world"
              className="text-sm font-bold px-4 py-2 rounded-full transition-all hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #C9883E, #D4A853)",
                color: "#080610",
              }}
            >
              Explore My World
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 80px",
        }}
      >
        {/* Background gradient orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "10%", left: "5%", width: 600, height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }} />
          <div style={{
            position: "absolute", bottom: "15%", right: "5%", width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,164,164,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }} />
          {/* Subtle dot grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(212,168,83,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
        </div>

        {/* Floating particles */}
        <div className="particles">
          {particlesRef.current.map((p, i) => (
            <Particle key={i} x={p.x} size={p.size} duration={p.dur} delay={p.delay} />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div
            className="fade-up fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(212,168,83,0.08)", border: "1px solid rgba(212,168,83,0.2)" }}
          >
            <Sparkles size={12} style={{ color: "#D4A853" }} />
            <span className="text-xs font-bold tracking-[0.2em]" style={{ color: "#D4A853" }}>
              WELCOME TO THE CREATIVE EMPIRE
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="fade-up fade-up-2 font-serif"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            <span className="gold-text">Crystal Lynn</span>
          </h1>
          <h1
            className="fade-up fade-up-2 font-serif"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "rgba(245,237,220,0.9)",
              marginBottom: "2rem",
            }}
          >
            Creates
          </h1>

          {/* Tagline */}
          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
              color: "rgba(245,237,220,0.55)",
              maxWidth: 580,
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Artist. Entrepreneur. Creator. Faith-driven woman building a world where creativity meets purpose — and every woman is empowered to rise.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-4 flex items-center gap-4 justify-center flex-wrap">
            <a
              href="#my-world"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-85 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #C9883E, #D4A853, #F5D780)",
                color: "#080610",
                boxShadow: "0 0 32px rgba(212,168,83,0.35)",
              }}
            >
              <Play size={14} fill="#080610" />
              Explore My World
            </a>
            <a
              href="https://youtube.com/@clc4321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-85"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,168,83,0.2)",
                color: "#F5EDDC",
              }}
            >
              <Youtube size={14} />
              Watch on YouTube
            </a>
          </div>

          {/* Scroll cue */}
          <div
            className="fade-up fade-up-5 flex flex-col items-center gap-2 mt-16"
            style={{ color: "rgba(212,168,83,0.4)", animation: "fade-up-in 0.7s 0.8s ease forwards, scroll-bounce 2s ease infinite" }}
          >
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ── */}
      <section
        id="story"
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: 80, paddingBottom: 100 }}
      >
        <div className="gold-divider mb-16" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="fade-up">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(232,164,164,0.06) 100%)",
                border: "1px solid rgba(212,168,83,0.15)",
              }}
            >
              {/* Gold corner accents */}
              {[["top-4 left-4", "border-t border-l"], ["top-4 right-4", "border-t border-r"], ["bottom-4 left-4", "border-b border-l"], ["bottom-4 right-4", "border-b border-r"]].map(([pos, border], i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-8 h-8 ${border}`}
                  style={{ borderColor: "rgba(212,168,83,0.5)" }}
                />
              ))}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212,168,83,0.1)", border: "2px solid rgba(212,168,83,0.3)" }}
                >
                  <span style={{ fontSize: 40 }}>👑</span>
                </div>
                <p className="text-xs tracking-[0.25em] font-semibold" style={{ color: "rgba(212,168,83,0.5)" }}>
                  ADD YOUR PHOTO HERE
                </p>
                <p className="text-xs" style={{ color: "rgba(245,237,220,0.25)" }}>
                  Replace with your professional headshot
                </p>
              </div>
            </div>
          </div>

          {/* Story text */}
          <div className="fade-up fade-up-1">
            <p className="text-xs font-bold tracking-[0.25em] mb-4" style={{ color: "#D4A853" }}>
              MY STORY
            </p>
            <h2
              className="font-serif mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#F5EDDC",
              }}
            >
              More Than a Creator —{" "}
              <span style={{ fontStyle: "italic", color: "#D4A853" }}>a Movement</span>
            </h2>

            <div className="space-y-4" style={{ color: "rgba(245,237,220,0.65)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              <p>
                Crystal Lynn is a multi-passionate creative entrepreneur, artist, and content creator whose work spans music production, video editing, beauty, and intentional Christian living.
              </p>
              <p>
                She founded Crystal Lynn Creates as the home for all her creative endeavors — a place where faith meets art, and where women are empowered to build the lives they were created for.
              </p>
              <p>
                Through her family of brands, Crystal Lynn serves moms and Christian women with tools, content, and community that nurture creativity, organization, and Godly purpose.
              </p>
              <p
                className="scripture"
                style={{ borderLeft: "3px solid #D4A853", paddingLeft: "1.25rem", fontStyle: "italic", color: "rgba(245,237,220,0.6)" }}
              >
                "She is clothed with strength and dignity, and she laughs without fear of the future." — Proverbs 31:25
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://youtube.com/@clc4321"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition-all hover:opacity-80"
                style={{ background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.2)", color: "#FF4444" }}
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://instagram.com/crystallynncreates"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition-all hover:opacity-80"
                style={{ background: "rgba(232,164,164,0.1)", border: "1px solid rgba(232,164,164,0.2)", color: "#E8A4A4" }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ paddingTop: 20, paddingBottom: 100 }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="gold-divider mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={`fade-up fade-up-${i + 1} glass gold-glow rounded-2xl p-6 text-center`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}
                >
                  <Icon size={20} style={{ color: "#D4A853" }} />
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#F5EDDC" }}>{label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(245,237,220,0.45)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP LAUNCHER / MY WORLD ── */}
      <section id="my-world" style={{ paddingTop: 20, paddingBottom: 100 }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="gold-divider mb-16" />

          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] mb-3" style={{ color: "#D4A853" }}>
              MY WORLD
            </p>
            <h2
              className="font-serif"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "#F5EDDC",
              }}
            >
              The CLC <span style={{ fontStyle: "italic", color: "#D4A853" }}>Universe</span>
            </h2>
            <p className="mt-4 text-base" style={{ color: "rgba(245,237,220,0.45)", maxWidth: 480, margin: "1rem auto 0" }}>
              Every brand, every tool, every experience — all connected under one creative vision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {APPS.map((app, i) => (
              <a
                key={app.name}
                href={app.url}
                target={app.external ? "_blank" : undefined}
                rel={app.external ? "noopener noreferrer" : undefined}
                className={`card-lift glass rounded-3xl overflow-hidden block`}
                style={{ textDecoration: "none" }}
              >
                <div className="p-8">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${app.border}`, boxShadow: `0 0 20px ${app.glow}` }}
                    >
                      <span style={{ fontSize: 32 }}>{app.icon}</span>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(245,237,220,0.6)" }}
                    >
                      {app.badge} <ExternalLink size={10} />
                    </span>
                  </div>

                  {/* Name + tagline */}
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ color: "#F5EDDC", fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {app.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,237,220,0.5)" }}>
                    {app.tagline}
                  </p>

                  {/* Color bar */}
                  <div
                    className="h-0.5 mt-6 rounded-full"
                    style={{ background: app.color, opacity: 0.6 }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section id="connect" style={{ paddingTop: 20, paddingBottom: 120 }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="gold-divider mb-16" />

          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(212,168,83,0.06) 0%, rgba(232,164,164,0.04) 50%, rgba(212,168,83,0.06) 100%)",
              border: "1px solid rgba(212,168,83,0.2)",
            }}
          >
            {/* Background glow */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400, height: 400, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div className="relative">
              <p className="font-script text-4xl mb-4" style={{ fontFamily: "'Dancing Script', cursive", color: "#D4A853" }}>
                Let's Create Together
              </p>
              <p style={{ color: "rgba(245,237,220,0.55)", maxWidth: 480, margin: "0 auto 2rem", lineHeight: 1.7 }}>
                Join the community of creative, faith-filled women building beautiful lives. Subscribe, connect, and be part of the CLC family.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://youtube.com/@clc4321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-85"
                  style={{
                    background: "linear-gradient(135deg, #C9883E, #D4A853)",
                    color: "#080610",
                    boxShadow: "0 0 24px rgba(212,168,83,0.3)",
                  }}
                >
                  <Youtube size={16} />
                  Subscribe on YouTube
                </a>
                <a
                  href="https://instagram.com/crystallynncreates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,83,0.2)", color: "#F5EDDC" }}
                >
                  <Instagram size={16} />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(212,168,83,0.1)", padding: "2rem 1.5rem", textAlign: "center" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-script text-xl" style={{ fontFamily: "'Dancing Script', cursive", color: "rgba(212,168,83,0.6)" }}>
            Crystal Lynn Creates
          </span>
          <p className="text-xs" style={{ color: "rgba(245,237,220,0.25)" }}>
            © {new Date().getFullYear()} Crystal Lynn Creates. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: "https://youtube.com/@clc4321", icon: Youtube, color: "#FF4444" },
              { href: "https://instagram.com/crystallynncreates", icon: Instagram, color: "#E8A4A4" },
            ].map(({ href, icon: Icon, color }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
                <Icon size={18} style={{ color }} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

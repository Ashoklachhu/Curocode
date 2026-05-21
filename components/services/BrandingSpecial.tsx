"use client";

import { useState, useEffect } from "react";

const WORDS = ["Bold.", "Memorable.", "Powerful.", "Distinctive.", "Timeless."];

const SWATCHES = [
  { bg: "bg-gradient-to-br from-indigo-600 to-purple-700", label: "Primary",   hex: "#6366F1" },
  { bg: "bg-gradient-to-br from-slate-800 to-slate-900",   label: "Dark",      hex: "#0F172A" },
  { bg: "bg-white",                                         label: "White",     hex: "#FFFFFF", dark: true },
  { bg: "bg-gradient-to-br from-indigo-400 to-purple-400", label: "Accent",    hex: "#818CF8" },
  { bg: "bg-gradient-to-br from-slate-600 to-slate-700",   label: "Neutral",   hex: "#475569" },
];

const FLOATERS = [
  { size: 120, x: "10%",  y: "15%", delay: 0,   duration: 7 },
  { size: 60,  x: "82%",  y: "10%", delay: 1.5, duration: 9 },
  { size: 90,  x: "75%",  y: "70%", delay: 0.8, duration: 8 },
  { size: 40,  x: "20%",  y: "75%", delay: 2,   duration: 6 },
  { size: 55,  x: "50%",  y: "5%",  delay: 0.4, duration: 10 },
];

export default function BrandingSpecial() {
  const [wordIdx, setWordIdx]     = useState(0);
  const [fadeIn, setFadeIn]       = useState(true);
  const [drawn, setDrawn]         = useState(false);
  const [swatchIdx, setSwatchIdx] = useState(-1);

  // Cycling word
  useEffect(() => {
    const t = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setFadeIn(true);
      }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  // Trigger draw + swatch animations on mount
  useEffect(() => {
    const t1 = setTimeout(() => setDrawn(true), 300);
    let i = 0;
    const t2 = setInterval(() => {
      setSwatchIdx(i);
      i++;
      if (i >= SWATCHES.length) clearInterval(t2);
    }, 180);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, []);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Floating geometric shapes */}
      {FLOATERS.map((f, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-indigo-500/10 pointer-events-none"
          style={{
            width:  f.size,
            height: f.size,
            left:   f.x,
            top:    f.y,
            animation: `float ${f.duration}s ease-in-out ${f.delay}s infinite`,
            background: "radial-gradient(circle, rgba(99,102,241,0.04), transparent)",
          }}
        />
      ))}
      {/* Extra dot grid accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: animated word ───────────────────── */}
          <div>
            <p className="text-slate-600 text-xs font-semibold tracking-widest uppercase mb-5">
              Your brand should be
            </p>
            <div
              className="text-6xl sm:text-7xl lg:text-8xl font-black gradient-text leading-none mb-8 transition-all duration-300"
              style={{ opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(10px)" }}
            >
              {WORDS[wordIdx]}
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              A great brand is felt before it&apos;s read. It communicates your values in a glance, builds trust on first contact, and turns customers into advocates.
            </p>
            <div className="space-y-4">
              {[
                "Logo, typography, and colour system built to last",
                "Arabic and English versions delivered as standard",
                "Full brand guidelines your whole team can follow",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: animated brand board ──────────── */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 bg-gradient-to-br from-indigo-600 to-purple-600" />

            <div className="relative gradient-border rounded-3xl overflow-hidden bg-[#0a0e20]/90">

              {/* Card header bar */}
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-slate-600 text-xs font-medium">Brand Identity — CuroCode</span>
              </div>

              <div className="p-7 space-y-7">

                {/* Logo section */}
                <div>
                  <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-3">Logo Mark</p>
                  <div className="flex items-center gap-5">
                    {/* Animated SVG logo */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-[0_0_24px_rgba(99,102,241,0.5)] flex-shrink-0">
                      <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
                        {/* O shape - animated draw */}
                        <path
                          d="M18 6 C10.27 6 4 12.27 4 20 C4 27.73 10.27 34 18 34"
                          stroke="white" strokeWidth="3" strokeLinecap="round"
                          style={{
                            strokeDasharray: 60,
                            strokeDashoffset: drawn ? 0 : 60,
                            transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s",
                          }}
                        />
                        <path
                          d="M18 34 C25.73 34 32 27.73 32 20 C32 12.27 25.73 6 18 6"
                          stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"
                          style={{
                            strokeDasharray: 60,
                            strokeDashoffset: drawn ? 0 : 60,
                            transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0.6s",
                          }}
                        />
                        {/* Center dot */}
                        <circle
                          cx="18" cy="20" r="3" fill="white"
                          style={{
                            opacity: drawn ? 1 : 0,
                            transform: drawn ? "scale(1)" : "scale(0)",
                            transformOrigin: "18px 20px",
                            transition: "opacity 0.4s 1.4s, transform 0.4s 1.4s",
                          }}
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-black text-xl tracking-tight leading-none mb-1">
                        Your Brand
                      </div>
                      <div className="text-slate-500 text-xs tracking-widest uppercase">Tagline goes here</div>
                    </div>
                    {/* Dark version chip */}
                    <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                      <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center">
                        <span className="text-white font-black text-[8px]">O</span>
                      </div>
                      <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
                        <span className="text-slate-900 font-black text-[8px]">O</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color palette */}
                <div>
                  <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-3">Colour Palette</p>
                  <div className="flex gap-2.5">
                    {SWATCHES.map((sw, i) => (
                      <div
                        key={sw.label}
                        className="flex-1"
                        style={{
                          opacity: swatchIdx >= i ? 1 : 0,
                          transform: swatchIdx >= i ? "translateY(0)" : "translateY(8px)",
                          transition: "all 0.35s ease",
                        }}
                      >
                        <div className={`h-10 rounded-lg ${sw.bg} border border-white/[0.08] mb-1.5`} />
                        <p className="text-slate-600 text-[9px] font-medium truncate">{sw.label}</p>
                        <p className={`text-[9px] font-mono ${sw.dark ? "text-slate-400" : "text-slate-600"}`}>{sw.hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-3">Typography</p>
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-white font-black text-4xl leading-none tracking-tight">Aa</div>
                      <div className="text-slate-600 text-[10px] mt-1">Display / Black</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-2xl leading-none">Aa</div>
                      <div className="text-slate-600 text-[10px] mt-1">Body / Semibold</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-slate-400 text-xs leading-relaxed max-w-[120px]">
                        ABCDEFGHIJKLM<br />abcdefghijklm<br />0123456789
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini mockups row */}
                <div>
                  <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-3">Brand in Context</p>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Business card */}
                    <div className="rounded-xl overflow-hidden border border-white/[0.06] aspect-[1.75/1] bg-gradient-to-br from-indigo-600 to-purple-700 p-2.5 flex flex-col justify-between">
                      <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
                        <span className="text-white font-black text-[8px]">O</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-[8px] leading-none">Your Name</div>
                        <div className="text-white/60 text-[7px]">hello@brand.ae</div>
                      </div>
                    </div>
                    {/* Social post */}
                    <div className="rounded-xl overflow-hidden border border-white/[0.06] aspect-square bg-[#0d1225] flex flex-col">
                      <div className="flex-1 bg-gradient-to-br from-indigo-900/50 to-purple-900/30 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white font-black text-xs">O</span>
                        </div>
                      </div>
                      <div className="px-2 py-1.5 flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                        <div className="text-slate-500 text-[8px]">@yourbrand</div>
                      </div>
                    </div>
                    {/* Letterhead */}
                    <div className="rounded-xl overflow-hidden border border-white/[0.06] aspect-[0.75/1] bg-white flex flex-col p-2">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-4 h-4 rounded bg-indigo-600 flex items-center justify-center">
                          <span className="text-white font-black text-[7px]">O</span>
                        </div>
                        <div className="h-1 w-8 rounded bg-indigo-200" />
                      </div>
                      <div className="space-y-0.5 flex-1">
                        {[80, 60, 70, 50, 65, 40].map((w, i) => (
                          <div key={i} className="h-[3px] rounded bg-slate-200" style={{ width: `${w}%` }} />
                        ))}
                      </div>
                      <div className="h-1 rounded bg-indigo-600 mt-2" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-[0_0_16px_rgba(99,102,241,0.5)]"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              Brand Identity Kit
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

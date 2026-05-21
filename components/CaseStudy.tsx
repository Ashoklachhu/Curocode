"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const metrics = [
  { value: "215%", label: "Increase in Leads" },
  { value: "47%", label: "Lower Cost / Lead" },
  { value: "3.2x", label: "ROAS Achieved" },
];

export default function CaseStudy() {
  return (
    <section id="work" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Left — Study info */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Case Study
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Driving Growth for
              <br />
              <span className="gradient-text">Automotive Leaders</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              We helped a UAE-based dealership increase their qualified leads by{" "}
              <span className="text-white font-semibold">215% in 60 days</span>{" "}
              through AI automation and precision-targeted ad campaigns.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300 group"
            >
              View Case Study
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — Metrics card */}
          <div className="relative">
            {/* Card */}
            <div className="gradient-border rounded-3xl p-8 bg-[#0a0f1e]/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Chart mock */}
              <div className="relative mb-8 h-32 flex items-end gap-1.5 overflow-hidden rounded-xl bg-white/[0.02] p-4 border border-white/[0.04]">
                {[20, 35, 28, 45, 38, 60, 52, 75, 68, 85, 78, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background: i < 8
                        ? "rgba(99,102,241,0.3)"
                        : "linear-gradient(to top, #6366f1, #8b5cf6)",
                      boxShadow: i >= 8 ? "0 0 8px rgba(99,102,241,0.5)" : "none",
                    }}
                  />
                ))}
                {/* Trend line overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-lg px-2.5 py-1">
                  <TrendingUp size={12} className="text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold">+215%</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center space-y-1.5">
                    <div className="text-3xl font-black gradient-text">{m.value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative dot grid */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-indigo-400"
                  style={{
                    left: `${(i % 5) * 28}%`,
                    top: `${Math.floor(i / 5) * 28}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const reasons = [
  { text: "AI-first approach for real, measurable automation" },
  { text: "Transparent strategy & reporting — no black boxes" },
  { text: "High-performance websites built to convert" },
  { text: "Result-driven marketing campaigns with proven ROI" },
  { text: "Local UAE expertise with global design standards" },
  { text: "Dedicated team — not a freelancer or template shop" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left — Visual panel */}
          <div className="relative">
            <div className="gradient-border rounded-3xl p-8 bg-[#0a0f1e]/70 backdrop-blur-sm relative overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-3xl" />

              {/* Stack of metric cards */}
              <div className="space-y-4 relative z-10">
                {[
                  { label: "Client Satisfaction", value: 98, color: "#6366f1" },
                  { label: "On-Time Delivery", value: 95, color: "#8b5cf6" },
                  { label: "Lead Generation Avg.", value: 87, color: "#06b6d4" },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-white font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${item.value}%`,
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)`,
                          boxShadow: `0 0 10px ${item.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Divider */}
                <div className="border-t border-white/[0.06] pt-6 mt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { v: "5+", l: "Years Experience" },
                      { v: "UAE", l: "Market Expertise" },
                      { v: "24/7", l: "Support" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-2xl font-black gradient-text">{s.v}</div>
                        <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Why Businesses
                <br />
                <span className="gradient-text">Choose CuroCode</span>
              </h2>
            </div>

            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r.text} className="flex items-start gap-3.5 group">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_16px_rgba(99,102,241,0.6)] transition-all duration-300">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors duration-200">
                    {r.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-[1.02] group"
            >
              Let&apos;s Grow Together
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

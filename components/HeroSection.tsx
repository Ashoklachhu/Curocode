"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, User, Mail, Phone, ChevronDown, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "5★", label: "Average Rating" },
];

const services = [
  "Web Development",
  "AI Automation",
  "Digital Marketing",
  "SEO & Growth",
  "Branding",
  "Custom Software",
];

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg grid-pattern pt-[72px]"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT — Copy ── */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              AI-Powered Digital Solutions
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight">
                We Build.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight">
                We Automate.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight">
                We{" "}
                <span className="gradient-text">Grow</span>{" "}
                <span className="text-white">Your Business.</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
              CuroCode helps businesses in the UAE and beyond grow with
              cutting-edge websites, AI automation, and performance-driven
              marketing.
            </p>

            {/* Stats */}
            <div className="pt-4 grid grid-cols-4 gap-2 sm:gap-4 border-t border-white/[0.06]">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black gradient-text">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Lead Form ── */}
          <div className="w-full">
            <div className="gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#0a0e20]/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Subtle top glow inside card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-600/15 rounded-full blur-[40px] pointer-events-none" />

              {!submitted ? (
                <>
                  {/* Card header */}
                  <div className="mb-6 relative z-10">
                    <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                      Book a Free Strategy Call
                    </h3>
                    <p className="text-slate-400 text-sm mt-1.5">
                      Tell us about your project — we&apos;ll get back within 24 hrs.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    {/* Name */}
                    <div className="relative">
                      <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Ahmed Al Mansoori"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 000 0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                        I&apos;m Interested In
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full appearance-none px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] transition-all duration-200 cursor-pointer"
                          style={{ color: form.service ? "#f0f2ff" : "#475569" }}
                        >
                          <option value="" disabled style={{ background: "#0a0e20", color: "#94a3b8" }}>
                            Select a service
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s} style={{ background: "#0a0e20", color: "#f0f2ff" }}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                        <span className="mt-0.5 flex-shrink-0">⚠️</span>
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-shimmer w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_50px_rgba(99,102,241,0.65)] hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:scale-[1.01] mt-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Book My Free Call
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Trust note */}
                    <p className="text-center text-xs text-slate-600 pt-1">
                      🔒 No spam. No commitment. Reply within 24 hours.
                    </p>
                  </form>
                </>
              ) : (
                /* ── Success state ── */
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">You&apos;re all set!</h3>
                    <p className="text-slate-400 text-sm mt-2 max-w-xs">
                      Thanks <span className="text-white font-medium">{form.name.split(" ")[0]}</span>! We&apos;ve received your request and will reach out within 24 hours.
                    </p>
                  </div>
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                  >
                    Explore our services
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070f] to-transparent pointer-events-none" />
    </section>
  );
}

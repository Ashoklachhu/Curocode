"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface Props {
  serviceTitle: string;
  serviceSlug: string;
  accent: { from: string; to: string; glow: string };
}

const SERVICES = [
  "Web Development",
  "AI Automation",
  "Digital Marketing",
  "SEO & Growth",
  "Branding",
  "Custom Software",
];

export default function ServiceLeadForm({ serviceTitle, serviceSlug, accent }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: serviceTitle, message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in name, email, and phone.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service,
          notes: form.message.trim(),
          source: `service_page_${serviceSlug}`,
          status: "new",
        }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error ?? "Failed to submit");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${accent.glow.replace("0.35", "0.3")}, transparent)`, boxShadow: `0 0 30px ${accent.glow}` }}
        >
          <CheckCircle2 size={32} className="text-white" />
        </div>
        <h3 className="text-white font-bold text-xl">You're all set, {form.name.split(" ")[0]}!</h3>
        <p className="text-slate-400 text-sm max-w-xs">
          We've received your enquiry about <span className="text-white font-medium">{form.service}</span>.
          Expect a call or WhatsApp message within a few hours.
        </p>
        <p className="text-slate-600 text-xs mt-2">Sent to: {form.email}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 font-medium mb-1.5">Full Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ahmed Al Mansouri"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.10)] transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-500 font-medium mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+971 50 123 4567"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.10)] transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-slate-500 font-medium mb-1.5">Email Address *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="ahmed@yourcompany.ae"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.10)] transition-all"
        />
      </div>

      <div>
        <label className="block text-xs text-slate-500 font-medium mb-1.5">Service Interest</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s} style={{ background: "#0a0e20" }}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-slate-500 font-medium mb-1.5">Tell us about your project <span className="text-slate-700">(optional)</span></label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Brief description of your business and what you're looking to achieve..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.10)] transition-all resize-none leading-relaxed"
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r ${accent.from} ${accent.to} text-white font-semibold text-sm transition-all duration-300 disabled:opacity-60`}
        style={{ boxShadow: `0 0 20px ${accent.glow}` }}
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={15} /> Book My Free Consultation</>
        )}
      </button>

      <p className="text-center text-xs text-slate-600">
        No spam. No pushy sales. Just a friendly conversation about your goals.
      </p>
    </form>
  );
}

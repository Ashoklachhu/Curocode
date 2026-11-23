"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { ENQUIRY_OPTIONS } from "@/lib/services-data";

interface Props {
  serviceTitle: string;
  serviceSlug: string;
  /** Overrides the lead source recorded with the enquiry. */
  source?: string;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder:text-stone-600 text-sm focus:outline-none focus:border-sand-300/60 transition-colors";

export default function ServiceLeadForm({ serviceTitle, serviceSlug, source }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: serviceTitle, message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in your name, email and phone.");
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
          source: source ?? `service_page_${serviceSlug}`,
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
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
          <CheckCircle2 size={30} className="text-emerald-400" />
        </div>
        <h3 className="text-white font-bold text-xl">Thank you, {form.name.split(" ")[0]}.</h3>
        <p className="text-stone-400 text-sm max-w-xs">
          We have received your enquiry about <span className="text-white font-medium">{form.service}</span> and
          will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="s-name" className="block text-xs text-stone-400 font-medium mb-1.5">Full name *</label>
          <input id="s-name" type="text" value={form.name} required placeholder="Your name"
            onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
        </div>
        <div>
          <label htmlFor="s-phone" className="block text-xs text-stone-400 font-medium mb-1.5">Phone *</label>
          <input id="s-phone" type="tel" value={form.phone} required placeholder="+971 50 000 0000"
            onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="s-email" className="block text-xs text-stone-400 font-medium mb-1.5">Work email *</label>
        <input id="s-email" type="email" value={form.email} required placeholder="you@company.com"
          onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
      </div>

      <div>
        <label htmlFor="s-service" className="block text-xs text-stone-400 font-medium mb-1.5">Service</label>
        <div className="relative">
          <select
            id="s-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            {ENQUIRY_OPTIONS.map((s) => (
              <option key={s} value={s} style={{ background: "#161616" }}>{s}</option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="s-message" className="block text-xs text-stone-400 font-medium mb-1.5">
          Project or hiring needs <span className="text-stone-600">(optional)</span>
        </label>
        <textarea
          id="s-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Roles, team size, technologies or a short description of your project..."
          rows={3}
          className={`${inputClass} resize-none leading-relaxed`}
        />
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sand-300 hover:bg-sand-200 text-stone-950 font-semibold text-sm transition-colors disabled:opacity-60"
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={15} /> Request Consultation</>
        )}
      </button>

      <p className="text-center text-xs text-stone-600">Your details are kept confidential and never shared.</p>
    </form>
  );
}

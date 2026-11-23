"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { ENQUIRY_OPTIONS } from "@/lib/services-data";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder:text-stone-600 text-sm focus:outline-none focus:border-sand-300/60 focus:bg-white/[0.06] transition-colors";

interface Props {
  /** Show a free-text message field. */
  withMessage?: boolean;
  /** Recorded with the lead so you can see which page it came from. */
  source?: string;
  title?: string;
}

export default function ContactForm({ withMessage = false, source = "hero_form", title = "Request a consultation" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", notes: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
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
    <div className="gradient-border rounded-3xl p-7 sm:p-9 bg-[#161616]/90">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <p className="text-stone-500 text-sm mt-1">No obligation. We reply within one business day.</p>
          </div>

          <div>
            <label htmlFor="c-name" className="text-xs text-stone-400 font-medium mb-1.5 block">Full name</label>
            <input id="c-name" type="text" required placeholder="Your name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="c-email" className="text-xs text-stone-400 font-medium mb-1.5 block">Work email</label>
              <input id="c-email" type="email" required placeholder="you@company.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-phone" className="text-xs text-stone-400 font-medium mb-1.5 block">Phone</label>
              <input id="c-phone" type="tel" required placeholder="+971 50 000 0000" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="c-service" className="text-xs text-stone-400 font-medium mb-1.5 block">How can we help?</label>
            <div className="relative">
              <select
                id="c-service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{ color: form.service ? "#f2efe9" : "#78716c" }}
              >
                <option value="" disabled style={{ background: "#161616" }}>Select a service</option>
                {ENQUIRY_OPTIONS.map((s) => (
                  <option key={s} value={s} style={{ background: "#161616", color: "#f2efe9" }}>{s}</option>
                ))}
              </select>
              <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
            </div>
          </div>

          {withMessage && (
            <div>
              <label htmlFor="c-notes" className="text-xs text-stone-400 font-medium mb-1.5 block">
                Tell us about your project <span className="text-stone-600">(optional)</span>
              </label>
              <textarea
                id="c-notes"
                rows={4}
                maxLength={2000}
                placeholder="Goals, timeline, team size or technologies..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className={`${inputClass} resize-none leading-relaxed`}
              />
            </div>
          )}

          {error && (
            <p role="alert" className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            {loading ? "Sending..." : <>Send Enquiry <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" /></>}
          </button>

          <p className="text-center text-xs text-stone-600">Your details are kept confidential and never shared.</p>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center py-10 space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 size={30} className="text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Thank you, {form.name.split(" ")[0]}.</h3>
            <p className="text-stone-400 text-sm mt-2 max-w-xs">
              We have received your enquiry and will be in touch within one business day.
            </p>
          </div>
          <Link href="/#services" className="inline-flex items-center gap-2 text-sand-300 hover:text-sand-200 text-sm font-semibold">
            Explore our services <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}

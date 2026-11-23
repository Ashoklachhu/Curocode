"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { ICONS } from "@/lib/icons";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];
  const Icon = ICONS[svc.icon] ?? Zap;

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title={<>Software, AI and engineering talent, <span className="gradient-text">built around your goals.</span></>}
          intro="From custom platforms and AI solutions to individual specialists and complete product teams, we bring the capability you need to move faster and deliver with confidence."
        />

        <div className="mt-14 grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Tabs */}
          <div role="tablist" aria-label="Services" className="flex lg:flex-col gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0">
            {SERVICES.map((s, i) => {
              const TabIcon = ICONS[s.icon] ?? Zap;
              const selected = i === active;
              return (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-white/[0.05] border-sand-300/30 text-white"
                      : "border-transparent text-stone-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <TabIcon size={18} className={selected ? "text-sand-300" : "text-stone-500"} />
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div role="tabpanel" className="gradient-border rounded-3xl p-7 sm:p-10 bg-[#161616]/80">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center">
                <Icon size={20} className="text-sand-300" />
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-[0.18em] uppercase">{svc.category}</p>
            </div>

            <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{svc.tagline}</h3>
            <p className="mt-4 text-stone-400 leading-relaxed max-w-2xl">{svc.description}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {svc.features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-sand-400 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-300 text-sm">{f.title}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/services/${svc.slug}`}
              className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.04] text-sm font-semibold transition-colors group"
            >
              Learn more about {svc.short}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

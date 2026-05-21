"use client";

import Link from "next/link";
import { ArrowRight, Monitor, Brain, Palette, Target, Shield, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web & App Development",
    slug: "web-app-development",
    label: "Development & Engineering",
    desc: "Custom websites, portals, and web applications engineered for your business — fast, secure, and built to scale.",
    tags: ["Custom Build", "Mobile-First", "Arabic RTL"],
  },
  {
    icon: Brain,
    title: "AI Automation",
    slug: "ai-automation",
    label: "Autonomous Systems",
    desc: "Intelligent workflows that eliminate manual work — WhatsApp AI agents, workflow bots, and deep integrations running 24/7.",
    tags: ["WhatsApp AI", "Workflow Bots", "Integrations"],
  },
  {
    icon: Palette,
    title: "Brand & UI Design",
    slug: "brand-ui-design",
    label: "Design & Identity",
    desc: "Premium brand identities and UI design systems that make your business look world-class at every touchpoint.",
    tags: ["Logo Design", "UI Systems", "Arabic"],
  },
  {
    icon: Target,
    title: "AI-Powered Marketing Funnel",
    slug: "ai-marketing-funnel",
    label: "AI-Driven Growth",
    desc: "End-to-end marketing funnels — ads, landing pages, and nurture sequences — all running autonomously to fill your pipeline.",
    tags: ["Google & Meta Ads", "AI Creative", "Auto-Optimise"],
  },
  {
    icon: Shield,
    title: "Smart Support System",
    slug: "smart-support-system",
    label: "Autonomous Customer Handling",
    desc: "AI chatbots, automated helpdesks, and autonomous customer workflows delivering instant support around the clock.",
    tags: ["AI Chatbot", "WhatsApp Help", "24/7"],
  },
  {
    icon: BarChart3,
    title: "AI Business Intelligence",
    slug: "ai-business-intelligence",
    label: "Data & Intelligence",
    desc: "AI-powered dashboards and automated reports that turn your business data into clear, actionable growth decisions.",
    tags: ["Live Dashboards", "AI Reports", "Predictive"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Six AI-Powered Services.
              <br />
              <span className="gradient-text">One Autonomous Agency.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed lg:pb-1">
            Every service we offer is driven by AI and built to run autonomously — so your business grows even while you sleep.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group gradient-border rounded-2xl p-7 relative overflow-hidden block transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.07),transparent_65%)]" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/10 border border-indigo-500/20 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                  <Icon size={21} className="text-indigo-400" />
                </div>

                {/* Label */}
                <p className="text-indigo-400/70 text-[10px] font-semibold tracking-widest uppercase mb-1.5 relative z-10">{svc.label}</p>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-2.5 relative z-10">{svc.title}</h3>

                {/* Desc */}
                <p className="text-slate-500 text-sm leading-relaxed relative z-10 mb-5">{svc.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 relative z-10 mb-6">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-slate-600 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold relative z-10 group-hover:gap-3 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-slate-600 text-sm mb-4">Want all six working together for your business?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/15 hover:border-indigo-500/40 transition-all duration-200"
          >
            Book a free AI strategy session <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}

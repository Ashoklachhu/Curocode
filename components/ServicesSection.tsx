"use client";

import Link from "next/link";
import { ArrowRight, Globe, Brain, Megaphone, TrendingUp, Diamond, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Solutions",
    slug: "web-solutions",
    desc: "High-performing websites and web apps tailored to your business goals — blazing fast, beautifully designed.",
    tags: ["Landing Pages", "E-Commerce", "Web Apps"],
  },
  {
    icon: Brain,
    title: "AI Automation",
    slug: "ai-automation",
    desc: "Automate workflows, engage customers 24/7, and scale operations with intelligent AI-powered systems.",
    tags: ["WhatsApp AI", "Workflow Bots", "Integrations"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Data-driven campaigns on Google, Meta, TikTok and Snapchat built for the UAE market.",
    tags: ["Google Ads", "Meta Ads", "Creatives"],
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    slug: "seo-growth",
    desc: "Rank higher on Google UAE, attract organic traffic, and grow without depending on ad spend.",
    tags: ["Technical SEO", "Arabic SEO", "Local SEO"],
  },
  {
    icon: Diamond,
    title: "Branding",
    slug: "branding",
    desc: "Build a powerful brand identity that connects with your audience and makes you impossible to forget.",
    tags: ["Logo Design", "Brand Guide", "Social Kit"],
  },
  {
    icon: Shield,
    title: "Maintenance",
    slug: "maintenance",
    desc: "99.9% uptime, daily backups, and priority support — keeping your digital assets performing perfectly.",
    tags: ["99.9% Uptime", "Security", "Priority Support"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
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
              End-to-End Solutions
              <br />
              <span className="gradient-text">Powered by AI & Strategy</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed lg:pb-1">
            We combine creativity, technology, and data to deliver measurable results for your business.
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
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.07),transparent_65%)]" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/10 border border-indigo-500/20 flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                  <Icon size={21} className="text-indigo-400" />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-2.5 relative z-10">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10 mb-5">
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 relative z-10 mb-6">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-slate-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold relative z-10 group-hover:gap-3 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-slate-600 text-sm mb-4">Not sure which service fits your needs?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/15 hover:border-indigo-500/40 transition-all duration-200"
          >
            Book a free strategy call — we&apos;ll figure it out together
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}

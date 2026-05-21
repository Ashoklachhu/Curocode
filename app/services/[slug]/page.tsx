import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, CheckCircle2, ChevronRight,
  Zap, Smartphone, Palette, Plug, ShoppingCart, ShieldCheck,
  MessageCircle, GitBranch, BarChart3, Mail, Bot, Layers,
  Target, ImageIcon, Play, TrendingUp, Wand2, LineChart,
  Settings2, FileText, Link2, MapPin, Globe, Search,
  PenTool, BookOpen, LayoutGrid, Briefcase, Lightbulb, Package,
  ShieldAlert, HardDrive, RefreshCw, Phone, BarChart2,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import { getService, SERVICE_SLUGS } from "@/lib/services-data";
import ServiceLeadForm from "@/components/services/ServiceLeadForm";
import WorkGallery from "@/components/services/WorkGallery";
import BrandingSpecial from "@/components/services/BrandingSpecial";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Map icon name strings → Lucide components
const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Zap, Smartphone, Palette, Plug, ShoppingCart, ShieldCheck,
  MessageCircle, GitBranch, BarChart3, Mail, Bot, Layers,
  Target, ImageIcon, Play, TrendingUp, Wand2, LineChart,
  Settings2, FileText, Link2, MapPin, Globe, Search,
  PenTool, BookOpen, LayoutGrid, Briefcase, Lightbulb, Package,
  ShieldAlert, HardDrive, RefreshCw, Phone, BarChart2,
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} | CuroCode UAE`,
    description: svc.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const isBranding = svc.slug === "branding";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#07091a] text-white overflow-x-hidden">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 bg-indigo-600" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-8 bg-purple-600" />
            <div className="absolute inset-0 grid-pattern opacity-25" />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-600 text-xs mb-8 flex-wrap">
              <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/#services" className="hover:text-slate-400 transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-indigo-400">{svc.title}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  {svc.category}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                  <span className="gradient-text">
                    {svc.tagline.split(".")[0]}.
                  </span>
                  {svc.tagline.includes(".") && svc.tagline.split(".").slice(1).join(".").trim() && (
                    <>
                      <br />
                      <span className="text-white">{svc.tagline.split(".").slice(1).join(".").trim()}</span>
                    </>
                  )}
                </h1>

                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  {svc.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#get-started"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_32px_rgba(99,102,241,0.6)] transition-all"
                  >
                    Get a Free Quote
                  </a>
                  <Link
                    href="/#services"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
                  >
                    <ArrowLeft size={14} /> All Services
                  </Link>
                </div>
              </div>

              {/* Right: Lead Form */}
              <div className="gradient-border rounded-3xl p-7 sm:p-8 bg-[#0a0e20]/90">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Free Consultation
                  </div>
                  <h2 className="text-white font-black text-xl">Get a Free Quote</h2>
                  <p className="text-slate-500 text-sm mt-1">We'll get back to you within a few hours.</p>
                </div>
                <ServiceLeadForm
                  serviceTitle={svc.title}
                  serviceSlug={svc.slug}
                  accent={svc.accent}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANDING SPECIAL (branding page only) ────── */}
        {isBranding && <BrandingSpecial />}

        {/* ── FEATURES ─────────────────────────────────── */}
        <section className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                What&apos;s Included
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Everything You Need to{" "}
                <span className="gradient-text">Succeed</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {svc.features.map((feat) => {
                const Icon = ICON_MAP[feat.icon] ?? Zap;
                return (
                  <div
                    key={feat.title}
                    className="group gradient-border rounded-2xl p-7 bg-[#0a0e20]/70 hover:bg-[#0a0e20]/90 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(99,102,241,0.12)]"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.07),transparent_65%)]" />

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/10 border border-indigo-500/20 flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                      <Icon size={20} className="text-indigo-400" />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2 relative z-10">{feat.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">{feat.desc}</p>

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WORK GALLERY ─────────────────────────────── */}
        <WorkGallery accent={svc.accent} title={svc.title} />

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {svc.faq.map((item) => (
                <div key={item.q} className="gradient-border rounded-2xl overflow-hidden bg-[#0a0e20]/70 group hover:bg-[#0a0e20]/90 transition-all duration-200">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

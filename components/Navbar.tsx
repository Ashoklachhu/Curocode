"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Monitor, Brain, Palette, Target, Shield, BarChart3, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Web & App Development",          href: "/services/web-app-development",      icon: Monitor,   color: "text-indigo-400" },
  { label: "AI Automation",                  href: "/services/ai-automation",            icon: Brain,     color: "text-indigo-400" },
  { label: "Brand & UI Design",              href: "/services/brand-ui-design",          icon: Palette,   color: "text-indigo-400" },
  { label: "AI-Powered Marketing Funnel",    href: "/services/ai-marketing-funnel",      icon: Target,    color: "text-indigo-400" },
  { label: "Smart Support System",           href: "/services/smart-support-system",     icon: Shield,    color: "text-indigo-400" },
  { label: "AI Business Intelligence",       href: "/services/ai-business-intelligence", icon: BarChart3, color: "text-indigo-400" },
];

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "About",    href: "/#about" },
  { label: "Work",     href: "/#work" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isServicePage = pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isServicePage
            ? "bg-[#05070f]/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05),0_4px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[68px] sm:h-[76px] flex items-center justify-between gap-4">

          {/* ── Logo ─────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.45)] group-hover:shadow-[0_0_32px_rgba(99,102,241,0.7)] transition-all duration-300">
                <span className="text-white font-black text-base leading-none">C</span>
              </div>
              {/* Live pulse dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#05070f] animate-pulse" />
            </div>
            <div className="leading-none">
              <span className="text-white font-black text-lg tracking-tight block">
                Curo<span className="gradient-text">Code</span>
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ──────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isServicePage
                        ? "text-white bg-indigo-500/10"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 transition-all duration-200 ${
                      dropOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Triangle */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0d1225] border-l border-t border-white/[0.08]" />
                    <div className="bg-[#0d1225] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.12)] p-2">
                      {serviceLinks.map((s) => {
                        const Icon = s.icon;
                        const active = pathname === s.href;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 group ${
                              active
                                ? "bg-indigo-500/10 text-white"
                                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.12] transition-colors ${s.color}`}>
                              <Icon size={13} />
                            </div>
                            <span className="font-medium">{s.label}</span>
                            {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-white bg-white/[0.06]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop CTAs ─────────────────────── */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-400 hover:text-emerald-400 text-sm font-medium border border-white/[0.06] hover:border-emerald-500/30 hover:bg-emerald-500/[0.06] transition-all duration-200"
            >
              <Phone size={13} />
              WhatsApp
            </a>
            <Link
              href={isServicePage ? "#get-started" : "/#contact"}
              className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_32px_rgba(99,102,241,0.6)] transition-all duration-300"
            >
              Book a Free Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* ── Mobile Toggle ─────────────────────── */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute transition-all duration-300 ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
            >
              <X size={18} />
            </span>
            <span
              className={`absolute transition-all duration-300 ${menuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
            >
              <Menu size={18} />
            </span>
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-[300px] bg-[#080c1a] border-l border-white/[0.06] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[68px] border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span className="text-white font-bold text-sm">CuroCode</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
          <Link href="/" onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              pathname === "/" ? "bg-indigo-500/10 text-white border border-indigo-500/20" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            }`}>
            Home
          </Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all">
            About
          </Link>
          <Link href="/#work" onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all">
            Our Work
          </Link>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isServicePage ? "bg-indigo-500/10 text-white border border-indigo-500/20" : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96 mt-1" : "max-h-0"}`}>
              <div className="space-y-0.5 pl-2">
                {serviceLinks.map((s) => {
                  const Icon = s.icon;
                  const active = pathname === s.href;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        active ? "text-white bg-white/[0.06]" : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <Icon size={14} className={s.color} />
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="px-4 pb-6 pt-4 border-t border-white/[0.06] space-y-3">
          <a
            href="https://wa.me/971000000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-emerald-500/30 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/[0.08] transition-all"
          >
            <Phone size={14} /> WhatsApp Us
          </a>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>
    </>
  );
}

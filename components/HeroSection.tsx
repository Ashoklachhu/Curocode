import Link from "next/link";
import { ArrowRight, Code2, Brain, Users } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients served" },
  { value: "98%", label: "Client retention" },
  { value: "5★", label: "Average rating" },
];

const pillars = [
  {
    icon: Code2,
    title: "Build",
    heading: "Custom software development",
    items: "Web platforms, mobile apps, enterprise systems and APIs",
    href: "/services/software-development",
  },
  {
    icon: Brain,
    title: "Automate",
    heading: "AI solutions & automation",
    items: "AI agents, chatbots, workflow automation and data analytics",
    href: "/services/ai-solutions",
  },
  {
    icon: Users,
    title: "Scale",
    heading: "Engineering talent & teams",
    items: "Staff augmentation and dedicated development teams",
    href: "/services/staff-augmentation",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg grid-pattern pt-[72px]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

          {/* ── Copy ── */}
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-stone-300 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-400" />
              Headquartered in Dubai · Delivering worldwide
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight">
              Software, AI and the
              <br />
              <span className="gradient-text">teams to build them.</span>
            </h1>

            <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-xl">
              CuroCode is a Dubai-based software and AI company. We build custom software and
              AI solutions for businesses around the world, and provide skilled engineers and
              dedicated teams when you need to scale your own.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-colors group"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.04] font-semibold text-sm transition-colors"
              >
                Explore Services
              </Link>
            </div>

            <dl className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.06]">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</dd>
                  <p className="text-xs text-stone-500 mt-1">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* ── What we do card ── */}
          <div className="gradient-border rounded-3xl p-3 bg-[#161616]/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-sand-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sand-400 text-[11px] font-semibold tracking-[0.2em] uppercase">{p.title}</p>
                    <h2 className="text-white font-bold mt-1">{p.heading}</h2>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">{p.items}</p>
                  </div>
                  <ArrowRight size={16} className="text-stone-600 group-hover:text-sand-300 mt-1 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Code2, Compass, Eye, Handshake, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PresenceMap from "@/components/PresenceMap";
import { LOCATIONS } from "@/lib/locations-data";

export const metadata: Metadata = {
  title: "About Us | CuroCode, Dubai",
  description:
    "CuroCode is a Dubai-based software and AI company helping businesses worldwide build custom software, adopt AI and scale their engineering teams.",
};

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients served" },
  { value: "98%", label: "Client retention" },
  { value: `${LOCATIONS.length}`, label: "Countries" },
];

const pillars = [
  { icon: Code2, title: "We build", desc: "Custom web platforms, mobile apps and enterprise systems engineered for performance, security and scale.", href: "/services/software-development" },
  { icon: Brain, title: "We automate", desc: "Practical AI, from agents and chatbots to workflow automation and data analytics, that delivers measurable value.", href: "/services/ai-solutions" },
  { icon: Users, title: "We scale", desc: "Skilled engineers and dedicated teams that extend your capacity without the cost and delay of hiring.", href: "/services/staff-augmentation" },
];

const values = [
  { icon: Target, title: "Client success first", desc: "We measure ourselves by the outcomes we create for our clients, not the hours we bill." },
  { icon: ShieldCheck, title: "Quality without shortcuts", desc: "Clean code, thorough testing and honest estimates, because what we build has to last." },
  { icon: Handshake, title: "Transparency", desc: "Clear communication, visible progress and no surprises on scope, timeline or cost." },
  { icon: Lightbulb, title: "Curiosity", desc: "We keep learning, especially in AI, so our clients benefit from what is genuinely new and useful." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] text-white overflow-x-hidden">
        <PageHero
          breadcrumb="About"
          eyebrow="About CuroCode"
          title={<>Technology that helps businesses <span className="gradient-text">build, automate and grow.</span></>}
          intro="CuroCode is a software and AI company headquartered in Dubai. We work with businesses around the world to design and build custom software, put AI to work, and provide the engineering talent they need to move faster."
        >
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl pt-8 border-t border-white/[0.06]">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-white">{s.value}</dd>
                <p className="text-xs text-stone-500 mt-1">{s.label}</p>
              </div>
            ))}
          </dl>
        </PageHero>

        {/* ── WHO WE ARE ───────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Who we are</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                A technology partner built around your goals
              </h2>
            </div>
            <div className="space-y-5 text-stone-400 leading-relaxed">
              <p>
                We started CuroCode with a simple belief: every business, whatever its size, should have
                access to world-class engineering and the practical benefits of AI. Too many companies are
                held back by long hiring cycles, unreliable vendors or technology that never quite delivers.
              </p>
              <p>
                From our headquarters in Dubai, we bring together experienced engineers, designers and AI
                specialists to solve that problem. Some clients hand us a complete product to build. Others
                ask us to automate a process with AI. Many simply need skilled people to join their team.
                In every case, we take ownership of the result.
              </p>
              <p>
                Today we work with businesses across the Middle East, Asia, Europe, North America and
                Australia, combining startup speed with the discipline and quality that enterprise work demands.
              </p>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ─────────────────────────── */}
        <section className="py-20 sm:py-24 border-t border-white/[0.05] bg-[#131313]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-white/[0.07] bg-[#161616] p-8 sm:p-10">
              <Compass size={24} className="text-sand-300" />
              <h3 className="mt-6 text-2xl font-extrabold text-white">Our mission</h3>
              <p className="mt-3 text-stone-400 leading-relaxed">
                To help businesses everywhere build better software, adopt AI with confidence and scale their
                teams on their own terms, through reliable delivery and genuine partnership.
              </p>
            </div>
            <div className="rounded-3xl border border-white/[0.07] bg-[#161616] p-8 sm:p-10">
              <Eye size={24} className="text-sand-300" />
              <h3 className="mt-6 text-2xl font-extrabold text-white">Our vision</h3>
              <p className="mt-3 text-stone-400 leading-relaxed">
                To be the most trusted technology partner to come out of Dubai, known worldwide for the
                quality of our engineering and the impact of our AI solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ───────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">What we do</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Three ways we help businesses move forward
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <Link key={p.title} href={p.href} className="group rounded-2xl border border-white/[0.07] bg-[#151515] p-7 hover:border-sand-300/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center">
                      <Icon size={20} className="text-sand-300" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed">{p.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sand-300 text-sm font-semibold">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05] bg-[#131313]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our values</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              What guides how we work
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title}>
                    <Icon size={22} className="text-sand-300" />
                    <h3 className="mt-4 text-white font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GLOBAL ───────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Global presence</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Headquartered in Dubai, working across {LOCATIONS.length} countries
            </h2>
            <PresenceMap className="mt-12" />
            <p className="mt-8 text-center text-sm text-stone-500">
              {LOCATIONS.map((l) => l.name).join("  ·  ")}
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-20 sm:py-24 border-t border-white/[0.05] bg-[#131313]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-sand-300/25 bg-sand-300/[0.05] p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold text-white">Work with us</h3>
              <p className="mt-3 text-stone-400 leading-relaxed">
                Have a project, an AI idea or a team to grow? Let&apos;s talk about how we can help.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-colors">
                Start a Project <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-3xl border border-white/[0.07] bg-[#161616] p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold text-white">Join us</h3>
              <p className="mt-3 text-stone-400 leading-relaxed">
                Excited by technology and building great products? Explore opportunities to grow with CuroCode.
              </p>
              <Link href="/careers" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.04] font-semibold text-sm transition-colors">
                View Careers <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

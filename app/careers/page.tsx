import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Brain, Cloud, Code2, Globe2, GraduationCap, Bug, LayoutGrid,
  PenTool, Rocket, Smartphone, Sparkles, Users, Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers | CuroCode, Dubai",
  description:
    "Join CuroCode and build software and AI solutions for businesses around the world. Explore the roles we hire for and how to apply.",
};

const APPLY_EMAIL = "hello@curocode.ae";
const applyHref = (role?: string) =>
  `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Job application${role ? `: ${role}` : ""}`)}`;

const reasons = [
  { icon: Globe2, title: "International projects", desc: "Work with clients across the Middle East, Asia, Europe, North America and Australia." },
  { icon: Sparkles, title: "Hands-on with AI", desc: "Build real AI products, from agents and chatbots to automation and data platforms." },
  { icon: GraduationCap, title: "Keep learning", desc: "Grow your skills through varied projects, code reviews and knowledge sharing across the team." },
  { icon: Rocket, title: "Ownership and impact", desc: "Take responsibility for meaningful work and see the difference it makes for our clients." },
  { icon: Users, title: "Supportive team", desc: "Work alongside experienced engineers, designers and delivery leads who help each other succeed." },
  { icon: LayoutGrid, title: "Career growth", desc: "Clear expectations and opportunities to take on more responsibility as you grow." },
];

const roles = [
  { icon: Code2, title: "Software Engineers", desc: "Frontend, backend and full-stack developers working with React, Next.js, Node.js, Python, Java, .NET and more." },
  { icon: Smartphone, title: "Mobile Developers", desc: "iOS, Android and cross-platform engineers using Swift, Kotlin, Flutter and React Native." },
  { icon: Brain, title: "AI & Data Engineers", desc: "Engineers building LLM applications, automation, data pipelines and machine learning models." },
  { icon: Cloud, title: "Cloud & DevOps Engineers", desc: "Specialists in AWS, Azure, Google Cloud, Kubernetes, CI/CD and infrastructure as code." },
  { icon: Bug, title: "QA Engineers", desc: "Manual and automation testers experienced with Playwright, Cypress, Selenium and Appium." },
  { icon: PenTool, title: "Designers & Delivery", desc: "UI/UX designers, business analysts, project managers and delivery leads." },
];

const process = [
  { num: "01", title: "Apply", desc: "Email your CV and a short note about the kind of role you are looking for." },
  { num: "02", title: "Introductory call", desc: "A conversation about your experience, interests and what you want from your next role." },
  { num: "03", title: "Technical assessment", desc: "A practical exercise or technical interview relevant to the role." },
  { num: "04", title: "Offer", desc: "We share feedback promptly and, if it is a match, make you an offer." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] text-white overflow-x-hidden">
        <PageHero
          breadcrumb="Careers"
          eyebrow="Careers at CuroCode"
          title={<>Build what&apos;s next, <span className="gradient-text">with us.</span></>}
          intro="We are always looking for talented, curious people who love building great software and want to work on AI and engineering projects for clients around the world."
        >
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#roles" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-colors">
              See roles we hire for <ArrowRight size={15} />
            </a>
            <a href={applyHref()} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.04] font-semibold text-sm transition-colors">
              <Mail size={15} /> Send your CV
            </a>
          </div>
        </PageHero>

        {/* ── WHY JOIN ─────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why join us</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Do the best work of your career
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title}>
                    <Icon size={22} className="text-sand-300" />
                    <h3 className="mt-4 text-white font-bold">{r.title}</h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed">{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ROLES ────────────────────────────────────── */}
        <section id="roles" className="py-20 sm:py-28 border-t border-white/[0.05] bg-[#131313] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Roles we hire for</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Where you could fit in
            </h2>
            <p className="mt-5 max-w-2xl text-stone-400 leading-relaxed">
              We hire throughout the year as new projects begin. If your skills match one of these areas,
              we would love to hear from you, even if there is no specific opening listed today.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {roles.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex flex-col rounded-2xl border border-white/[0.07] bg-[#161616] p-7">
                    <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center">
                      <Icon size={20} className="text-sand-300" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed flex-1">{r.desc}</p>
                    <a href={applyHref(r.title)} className="mt-6 inline-flex items-center gap-1.5 text-sand-300 hover:text-sand-200 text-sm font-semibold">
                      Apply <ArrowRight size={14} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Hiring process</p>
            <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Simple, respectful and quick
            </h2>
            <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((s) => (
                <li key={s.num} className="rounded-2xl border border-white/[0.07] bg-[#151515] p-7">
                  <span className="text-sand-300 font-extrabold text-sm tracking-widest">{s.num}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── APPLY ────────────────────────────────────── */}
        <section className="py-20 sm:py-24 border-t border-white/[0.05] bg-[#131313]">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <div className="rounded-3xl border border-sand-300/25 bg-sand-300/[0.05] p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Ready to apply?</h2>
              <p className="mt-4 text-stone-400 leading-relaxed max-w-xl mx-auto">
                Send your CV to <span className="text-white font-semibold">{APPLY_EMAIL}</span>. Include the role
                you are interested in, your location and links to your GitHub, portfolio or LinkedIn profile.
              </p>
              <a href={applyHref()} className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-colors">
                <Mail size={16} /> Email Your CV
              </a>
              <p className="mt-6 text-xs text-stone-500">
                Looking to hire engineers instead? <Link href="/contact" className="text-sand-300 hover:text-sand-200">Contact our team</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

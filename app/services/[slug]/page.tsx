import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { getService, SERVICES, SERVICE_SLUGS } from "@/lib/services-data";
import { getIcon } from "@/lib/icons";
import ServiceLeadForm from "@/components/services/ServiceLeadForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} | CuroCode, Dubai`,
    description: svc.summary,
  };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">{children}</p>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const [headline, ...rest] = svc.tagline.split(". ");
  const subline = rest.join(". ");
  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] text-white overflow-x-hidden">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden mesh-bg">
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-stone-500 text-xs mb-10 flex-wrap">
              <Link href="/" className="hover:text-stone-300 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/#services" className="hover:text-stone-300 transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-sand-300">{svc.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <Eyebrow>{svc.category}</Eyebrow>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight">
                  <span className="text-white">{headline.replace(/\.$/, "")}.</span>
                  {subline && (
                    <>
                      <br />
                      <span className="gradient-text">{subline}</span>
                    </>
                  )}
                </h1>

                <p className="mt-6 text-stone-400 text-lg leading-relaxed max-w-xl">{svc.description}</p>

                <ul className="mt-8 space-y-3">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-stone-300 text-sm">
                      <CheckCircle2 size={16} className="text-sand-400 flex-shrink-0" /> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#get-started"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sand-300 text-stone-950 hover:bg-sand-200 font-semibold text-sm transition-colors"
                  >
                    Talk to Our Team <ArrowRight size={15} />
                  </a>
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/[0.12] text-stone-300 hover:text-white hover:bg-white/[0.04] text-sm font-semibold transition-colors"
                  >
                    <ArrowLeft size={14} /> All Services
                  </Link>
                </div>
              </div>

              <div id="get-started" className="gradient-border rounded-3xl p-7 sm:p-9 bg-[#161616]/90 scroll-mt-28">
                <div className="mb-6">
                  <h2 className="text-white font-bold text-xl">Request a consultation</h2>
                  <p className="text-stone-500 text-sm mt-1">Tell us about your needs. We reply within one business day.</p>
                </div>
                <ServiceLeadForm serviceTitle={svc.short} serviceSlug={svc.slug} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ─────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="max-w-2xl">
              <Eyebrow>Capabilities</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                What you get with {svc.short}
              </h2>
            </div>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {svc.features.map((feat) => {
                const Icon = getIcon(feat.icon);
                return (
                  <div key={feat.title} className="rounded-2xl border border-white/[0.07] bg-[#151515] p-7 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-sand-300" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05] bg-[#131313]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="max-w-2xl">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">How we work together</h2>
            </div>
            <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {svc.process.map((s) => (
                <li key={s.num} className="rounded-2xl border border-white/[0.07] bg-[#161616] p-7">
                  <span className="text-sand-300 font-extrabold text-sm tracking-widest">{s.num}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-stone-400 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="py-20 sm:py-28 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-12">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently asked questions</h2>
            </div>
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {svc.faq.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-white font-semibold">
                    {item.q}
                    <ChevronRight size={16} className="text-sand-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-stone-400 text-sm leading-relaxed pr-8">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ──────────────────────────────────── */}
        <section className="py-20 sm:py-24 border-t border-white/[0.05] bg-[#131313]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <Eyebrow>Explore more</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Related services</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {related.map((r) => {
                const Icon = getIcon(r.icon);
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group rounded-2xl border border-white/[0.07] bg-[#161616] p-7 hover:border-sand-300/30 transition-colors"
                  >
                    <Icon size={20} className="text-sand-300" />
                    <h3 className="mt-4 text-white font-bold">{r.title}</h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed">{r.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sand-300 text-sm font-semibold">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

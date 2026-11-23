import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | CuroCode, Dubai",
  description:
    "Get in touch with CuroCode in Dubai about custom software, AI solutions or engineering teams. We reply within one business day.",
};

const channels = [
  { icon: Mail, label: "Email", value: "hello@curocode.ae", href: "mailto:hello@curocode.ae" },
  { icon: Phone, label: "Phone", value: "+971 50 881 7963", href: "tel:+971508817963" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/971508817963" },
  { icon: MapPin, label: "Headquarters", value: "Dubai, United Arab Emirates" },
];

const nextSteps = [
  { num: "01", title: "We review your enquiry", desc: "A member of our team reads your message and comes back to you within one business day." },
  { num: "02", title: "Discovery call", desc: "A short call to understand your goals, timeline, budget and any technical constraints." },
  { num: "03", title: "Tailored proposal", desc: "A clear recommendation: a solution plan, a team composition, or both, with transparent pricing." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] text-white overflow-x-hidden">
        <PageHero
          breadcrumb="Contact"
          eyebrow="Contact us"
          title={<>Let&apos;s talk about <span className="gradient-text">what you&apos;re building.</span></>}
          intro="Whether you have a software project, an AI idea or a team to grow, we would love to hear from you. Share a few details and we will be in touch within one business day."
        />

        <section className="pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Details */}
            <div className="space-y-10">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {channels.map((c) => {
                  const Icon = c.icon;
                  const inner = (
                    <>
                      <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-sand-300" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500">{c.label}</p>
                        <p className="text-white font-semibold text-sm mt-0.5">{c.value}</p>
                      </div>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#151515] p-4 hover:border-sand-300/30 transition-colors"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#151515] p-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div>
                <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase">What happens next</p>
                <ol className="mt-5 space-y-5">
                  {nextSteps.map((s) => (
                    <li key={s.num} className="flex gap-4">
                      <span className="text-sand-300 font-extrabold text-sm tracking-widest pt-0.5">{s.num}</span>
                      <div>
                        <p className="text-white font-semibold">{s.title}</p>
                        <p className="text-sm text-stone-400 mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-[#151515] p-6">
                <p className="text-white font-bold">Looking for a job?</p>
                <p className="mt-1.5 text-sm text-stone-400">
                  This form is for business enquiries. If you would like to join CuroCode, visit our careers page.
                </p>
                <Link href="/careers" className="mt-4 inline-flex items-center gap-2 text-sand-300 hover:text-sand-200 text-sm font-semibold">
                  Careers at CuroCode <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Form */}
            <ContactForm withMessage source="contact_page" title="Send us an enquiry" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

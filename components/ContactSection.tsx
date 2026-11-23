import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.05] bg-[#131313]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Get started</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight">
            Let&apos;s build something together.
          </h2>
          <p className="mt-5 text-stone-400 text-base sm:text-lg leading-relaxed max-w-lg">
            Tell us about the software you want to build, the process you want to automate with AI
            or the skills your team needs. We will get back to you within one business day.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href="tel:+971508817963" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
              <Phone size={16} className="text-sand-400" /> +971 50 881 7963
            </a>
            <a href="mailto:hello@curocode.ae" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors">
              <Mail size={16} className="text-sand-400" /> hello@curocode.ae
            </a>
            <p className="flex items-center gap-3 text-stone-300">
              <MapPin size={16} className="text-sand-400" /> Dubai, United Arab Emirates
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/[0.07] bg-[#161616] p-6">
            <p className="text-white font-bold">Looking to join CuroCode?</p>
            <p className="mt-1.5 text-sm text-stone-400">
              We are always keen to meet talented engineers, designers and delivery professionals.
            </p>
            <Link
              href="/careers"
              className="mt-4 inline-flex items-center gap-2 text-sand-300 hover:text-sand-200 text-sm font-semibold transition-colors"
            >
              View careers <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <ContactForm source="home_contact" />
      </div>
    </section>
  );
}

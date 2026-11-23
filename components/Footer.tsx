import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

const columns = [
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Engagement Models", href: "/#models" },
      { label: "How It Works", href: "/#process" },
      { label: "Global Presence", href: "/#global" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3 space-y-5 lg:pr-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sand-300 flex items-center justify-center">
                <span className="text-stone-950 font-extrabold text-lg leading-none">C</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Curo<span className="gradient-text">Code</span>
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
              A Dubai-based software and AI company building custom software, AI solutions and
              engineering teams for businesses worldwide.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+971508817963" className="flex items-center gap-2.5 text-stone-500 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-sand-400 flex-shrink-0" />
                +971 50 881 7963
              </a>
              <a href="mailto:hello@curocode.ae" className="flex items-center gap-2.5 text-stone-500 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-sand-400 flex-shrink-0" />
                hello@curocode.ae
              </a>
              <div className="flex items-center gap-2.5 text-stone-500 text-sm">
                <MapPin size={14} className="text-sand-400 flex-shrink-0" />
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-white font-semibold text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} CuroCode. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">Dubai, UAE · Serving clients worldwide</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    "Web Solutions",
    "AI Automation",
    "Digital Marketing",
    "SEO & Growth",
    "Branding",
    "Maintenance",
  ],
  Company: ["About Us", "Our Work", "Careers", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#040610]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <span className="text-white font-black text-lg leading-none">C</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Curo<span className="gradient-text">Code</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building digital experiences.
              <br />
              Automating success.
              <br />
              Growing your future.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+971508817963" className="flex items-center gap-2.5 text-slate-500 hover:text-white text-sm transition-colors group">
                <Phone size={14} className="text-indigo-400 flex-shrink-0" />
                +971 50 881 7963
              </a>
              <a href="mailto:hello@omnigrowth.ae" className="flex items-center gap-2.5 text-slate-500 hover:text-white text-sm transition-colors group">
                <Mail size={14} className="text-indigo-400 flex-shrink-0" />
                hello@curocode.ae
              </a>
              <div className="flex items-center gap-2.5 text-slate-500 text-sm">
                <MapPin size={14} className="text-indigo-400 flex-shrink-0" />
                Dubai, UAE
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat} className="space-y-4">
              <h4 className="text-white font-semibold text-sm">{cat}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} CuroCode Digital. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Built with Strategy.{" "}
            <span className="gradient-text font-semibold">Powered by AI.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

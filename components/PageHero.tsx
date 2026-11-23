import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  breadcrumb: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}

/** Top banner used by inner pages (About, Contact, Careers). */
export default function PageHero({ breadcrumb, eyebrow, title, intro, children }: Props) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden mesh-bg">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-stone-500 text-xs mb-10">
          <Link href="/" className="hover:text-stone-300 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-sand-300">{breadcrumb}</span>
        </nav>
        <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.06] tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-stone-400 text-lg leading-relaxed">{intro}</p>
        {children}
      </div>
    </section>
  );
}

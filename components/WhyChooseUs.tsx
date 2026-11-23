import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Globe2, BadgeCheck, Handshake, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const reasons = [
  { icon: BadgeCheck, title: "Proven expertise", desc: "Hands-on experience across software engineering, AI and cloud, with every engineer assessed for technical depth and clear communication." },
  { icon: Clock, title: "Time-zone friendly", desc: "Dubai sits between Europe and Asia, giving strong working-hour overlap with clients across the Middle East, Europe and Asia-Pacific, with flexible hours for the Americas." },
  { icon: Handshake, title: "Flexible engagement", desc: "Start with one engineer or a full team. Scale up, scale down or change models as your roadmap evolves." },
  { icon: Lock, title: "Your IP, protected", desc: "NDAs, secure access policies and full IP assignment are standard in every engagement." },
  { icon: ShieldCheck, title: "Quality built in", desc: "Code reviews, automated testing and documented processes keep delivery consistent and maintainable." },
  { icon: Globe2, title: "One accountable partner", desc: "A dedicated account manager is your single point of contact for performance, reporting and support." },
];


export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why CuroCode"
              title={<>A technology partner you can <span className="gradient-text">rely on.</span></>}
              intro="We are 100% focused on making our clients successful. When you need skilled people, we make sure they have the expertise and attitude to plug straight into your team. When you give us a project, we take ownership of getting it done well and on time."
            />

            <div className="mt-10 rounded-3xl border border-white/[0.07] bg-[#151515] p-7">
              <p className="text-white font-bold text-lg">Based in Dubai. Working worldwide.</p>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                Our headquarters in Dubai gives us access to a diverse, international talent pool and
                a central location for serving clients across time zones.
              </p>
              <Link
                href="/#global"
                className="mt-5 inline-flex items-center gap-2 text-sand-300 hover:text-sand-200 text-sm font-semibold transition-colors"
              >
                See where we work <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 content-start lg:pt-14">
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
      </div>
    </section>
  );
}

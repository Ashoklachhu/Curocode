import Link from "next/link";
import { ArrowRight, UserPlus, Users, Code2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const models = [
  {
    icon: Code2,
    name: "Project Delivery",
    slug: "software-development",
    bestFor: "Well-defined projects where you want a single accountable partner.",
    points: [
      "We own delivery from discovery to launch",
      "Clear scope, milestones and budget agreed up front",
      "Post-launch support and maintenance available",
    ],
  },
  {
    icon: UserPlus,
    name: "Staff Augmentation",
    slug: "staff-augmentation",
    bestFor: "Filling skill gaps and adding capacity to an existing team.",
    points: [
      "Engineers join your team and follow your processes",
      "You manage the work; we handle hiring, HR and payroll",
      "Flexible monthly terms, scale up or down",
    ],
  },
  {
    icon: Users,
    name: "Dedicated Team",
    slug: "dedicated-teams",
    bestFor: "Long-term product development with a stable, focused team.",
    points: [
      "Cross-functional team working only on your product",
      "Delivery manager included for day-to-day management",
      "Regular reporting on progress, quality and spend",
    ],
    featured: true,
  },
];

export default function EngagementModels() {
  return (
    <section id="models" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Engagement models"
          title="Flexible ways to work with us"
          intro="Whether you want us to deliver a complete solution or extend your own team, choose the model that fits your goals, budget and level of control."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col border ${
                  m.featured ? "bg-[#1a1a1a] border-sand-300/30" : "bg-[#151515] border-white/[0.07]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-sand-300/10 border border-sand-300/20 flex items-center justify-center">
                    <Icon size={20} className="text-sand-300" />
                  </div>
                  {m.featured && (
                    <span className="text-[11px] font-semibold tracking-wide uppercase text-stone-950 bg-sand-300 px-2.5 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{m.name}</h3>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                  <span className="text-stone-300 font-medium">Best for: </span>{m.bestFor}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-stone-400 flex-1">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-sand-400 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${m.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sand-300 hover:text-sand-200 text-sm font-semibold transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

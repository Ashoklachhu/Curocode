import SectionHeading from "@/components/SectionHeading";

const steps = [
  { num: "01", title: "Discovery", desc: "Tell us about your goals, whether it is a product to build, a process to automate with AI or a team to grow. We clarify requirements, timelines and budget." },
  { num: "02", title: "Proposal", desc: "We recommend the right approach: a solution design and delivery plan, or a team composition matched to your technology stack and culture." },
  { num: "03", title: "Kick-off", desc: "We agree scope and contracts, assemble the team and plan the first milestones. For team engagements, you interview and approve every engineer." },
  { num: "04", title: "Deliver and support", desc: "We deliver in regular, visible milestones and stay with you after launch for support, improvements and scaling." },
];

const stack = [
  "React", "Next.js", "Angular", "Vue.js", "Node.js", "Python", "Java", ".NET", "Go", "PHP / Laravel",
  "Flutter", "React Native", "Swift", "Kotlin", "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform",
  "PostgreSQL", "MongoDB", "Snowflake", "Power BI", "OpenAI & LLMs", "LangChain", "WhatsApp Business API", "Playwright", "Cypress", "Figma",
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 border-t border-white/[0.05] bg-[#131313]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to delivery"
          intro="A simple, transparent process for projects and teams alike."
        />

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <li key={s.num} className="rounded-2xl border border-white/[0.07] bg-[#161616] p-7">
              <span className="text-sand-300 font-extrabold text-sm tracking-widest">{s.num}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <p className="text-stone-500 text-xs font-semibold tracking-[0.2em] uppercase">Technologies we work with</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {stack.map((t) => (
              <li
                key={t}
                className="px-3.5 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-stone-300 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

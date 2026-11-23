import SectionHeading from "@/components/SectionHeading";
import PresenceMap from "@/components/PresenceMap";
import { LOCATIONS } from "@/lib/locations-data";

export default function GlobalPresence() {
  return (
    <section id="global" className="py-20 sm:py-28 border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Global presence"
            title={<>Headquartered in Dubai. <span className="gradient-text">Working worldwide.</span></>}
            intro="From our base in Dubai, we partner with businesses and engineering talent across the Middle East, Asia, Europe, North America and Australia."
          />
          <dl className="flex gap-10 lg:pb-2">
            <div>
              <dd className="text-4xl font-extrabold text-white">{LOCATIONS.length}</dd>
              <dt className="text-xs text-stone-500 mt-1">Countries</dt>
            </div>
            <div>
              <dd className="text-4xl font-extrabold text-white">4</dd>
              <dt className="text-xs text-stone-500 mt-1">Continents</dt>
            </div>
          </dl>
        </div>

        <PresenceMap className="mt-14" />

        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {LOCATIONS.map((p) => (
            <li
              key={p.slug}
              className={`rounded-2xl border px-5 py-4 ${
                p.isHQ ? "border-sand-300/30 bg-sand-300/[0.06]" : "border-white/[0.07] bg-[#151515]"
              }`}
            >
              <p className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className={`w-1.5 h-1.5 rounded-full ${p.isHQ ? "bg-sand-200" : "bg-sand-400"}`} />
                {p.name}
              </p>
              <p className={`mt-1 text-xs ${p.isHQ ? "text-sand-300" : "text-stone-500"}`}>{p.region}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

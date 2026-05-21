import Image from "next/image";

interface Props {
  accent: { from: string; to: string; text: string; glow: string };
  title: string;
  slug: string;
}

// Add real project screenshots here keyed by "slug/label"
const GALLERY_IMAGES: Record<string, string> = {
  "ai-automation/Project Dashboard":
    "https://res.cloudinary.com/djk19sn0p/image/upload/v1779393093/Ai_Automation_knsw2x.png",
};

const PLACEHOLDERS = [
  { label: "Project Dashboard" },
  { label: "Mobile App" },
  { label: "Landing Page" },
  { label: "Analytics View" },
  { label: "Brand Identity" },
];

function BrowserFrame({
  label,
  isLarge,
  accent,
  imageUrl,
}: {
  label: string;
  isLarge: boolean;
  accent: Props["accent"];
  imageUrl?: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0e20]/80 group h-full">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/[0.06] bg-white/[0.02] flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-2 flex-1 h-4 rounded bg-white/[0.04] border border-white/[0.06]" />
      </div>

      {/* Content area */}
      <div className={`relative overflow-hidden ${isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={label}
              fill
              sizes={isLarge ? "(max-width: 1024px) 100vw, 66vw" : "33vw"}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {/* Label badge */}
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {label}
            </div>
          </>
        ) : (
          <>
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${accent.glow.replace("0.35", "0.25")}, transparent 70%)`,
              }}
            />
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-10">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="bg-white/20" />
              ))}
            </div>
            {/* Skeleton elements */}
            <div className="absolute inset-0 p-4 flex flex-col gap-3">
              <div className={`h-4 rounded-lg bg-gradient-to-r ${accent.from} ${accent.to} opacity-30 w-2/3`} />
              <div className="h-2.5 rounded bg-white/10 w-full" />
              <div className="h-2.5 rounded bg-white/8 w-5/6" />
              <div className="h-2.5 rounded bg-white/6 w-4/5" />
              <div className="flex-1" />
              <div className="flex gap-2">
                <div className={`h-8 rounded-lg bg-gradient-to-r ${accent.from} ${accent.to} opacity-40 w-24`} />
                <div className="h-8 rounded-lg bg-white/10 w-20" />
              </div>
            </div>
            {/* Hover label */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {label} — Coming Soon
            </div>
            {/* Corner badge */}
            <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${accent.from} ${accent.to} text-white opacity-70`}>
              SAMPLE
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function WorkGallery({ accent, title, slug }: Props) {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20 blur-[100px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${accent.glow}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase mb-4 ${accent.text} border-current/30`}
            style={{ background: accent.glow.replace("0.35", "0.1") }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            {title} Projects
            <br />
            <span className={`bg-gradient-to-r ${accent.from} ${accent.to} bg-clip-text text-transparent`}>
              That Delivered Results
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-4">
            Screenshots coming soon — we&apos;re compiling our best UAE case studies.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEHOLDERS.map((p, i) => (
            <div key={i} className={i === 0 ? "lg:col-span-2" : ""}>
              <BrowserFrame
                label={p.label}
                isLarge={i === 0}
                accent={accent}
                imageUrl={GALLERY_IMAGES[`${slug}/${p.label}`]}
              />
            </div>
          ))}
        </div>

        {/* CTA note */}
        <p className="text-center text-slate-600 text-xs mt-8">
          Real screenshots will be added shortly. Want to see examples?{" "}
          <a href="#get-started" className={`${accent.text} hover:underline font-medium`}>
            Book a call and we&apos;ll show you our portfolio.
          </a>
        </p>
      </div>
    </section>
  );
}

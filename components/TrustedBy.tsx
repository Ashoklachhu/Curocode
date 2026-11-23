"use client";

export default function TrustedBy() {
  const clients = [
    "Elite Motors",
    "Luxe Beauty",
    "Vision Real Estate",
    "Urbun Café",
    "Azlan Perfumes",
    "Pinnacle Group",
  ];

  return (
    <section className="py-14 border-y border-white/[0.05] bg-[#131313]/60 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-stone-600 mb-10">
          Trusted by businesses in the UAE and beyond
        </p>

        {/* Scrolling logos row */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#131313] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#131313] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 items-center overflow-hidden">
            <div
              className="flex gap-12 items-center whitespace-nowrap min-w-max"
              style={{ animation: "marquee 20s linear infinite" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-stone-500 hover:text-stone-300 transition-colors duration-300 cursor-default select-none"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-stone-400">
                      {client[0]}
                    </span>
                  </div>
                  <span className="font-semibold tracking-wide uppercase text-[13px]">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

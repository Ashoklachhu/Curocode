export default function ServiceLoading() {
  return (
    <div className="min-h-screen bg-[#07091a] text-white overflow-x-hidden animate-pulse">
      {/* Navbar placeholder */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[#07091a]/80 border-b border-white/[0.05] z-50" />

      {/* Hero */}
      <section className="pt-36 pb-28 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="h-4 w-24 rounded-full bg-white/[0.06] mb-8" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="h-5 w-28 rounded-full bg-white/[0.06]" />
            <div className="space-y-3">
              <div className="h-12 w-4/5 rounded-xl bg-white/[0.06]" />
              <div className="h-12 w-3/5 rounded-xl bg-white/[0.06]" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-white/[0.04]" />
              <div className="h-4 w-5/6 rounded bg-white/[0.04]" />
              <div className="h-4 w-4/5 rounded bg-white/[0.04]" />
            </div>
            <div className="flex gap-3 pt-2">
              <div className="h-11 w-36 rounded-xl bg-white/[0.08]" />
              <div className="h-11 w-32 rounded-xl bg-white/[0.04]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] text-center space-y-2">
                <div className="h-10 w-20 rounded-lg bg-white/[0.06] mx-auto" />
                <div className="h-3 w-24 rounded bg-white/[0.04] mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features skeleton */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 space-y-3">
          <div className="h-5 w-32 rounded-full bg-white/[0.06] mx-auto" />
          <div className="h-10 w-64 rounded-xl bg-white/[0.06] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl p-7 bg-white/[0.03] border border-white/[0.06] space-y-3">
              <div className="h-8 w-8 rounded-lg bg-white/[0.06]" />
              <div className="h-5 w-32 rounded bg-white/[0.06]" />
              <div className="space-y-1.5">
                <div className="h-3 w-full rounded bg-white/[0.04]" />
                <div className="h-3 w-5/6 rounded bg-white/[0.04]" />
                <div className="h-3 w-4/5 rounded bg-white/[0.04]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function LeadDetailLoading() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-xl bg-white/[0.06]" />
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-6 w-40 bg-white/[0.06] rounded-lg" />
            <div className="h-5 w-20 bg-white/[0.06] rounded-full" />
          </div>
          <div className="h-3.5 w-32 bg-white/[0.04] rounded" />
        </div>
        <div className="ml-auto flex gap-2">
          <div className="h-9 w-24 bg-white/[0.06] rounded-xl" />
          <div className="h-9 w-32 bg-white/[0.06] rounded-xl" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.05] space-y-5">
            <div className="h-5 w-36 bg-white/[0.06] rounded" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={i === 0 ? "sm:col-span-2 space-y-2" : "space-y-2"}>
                  <div className="h-3 w-24 bg-white/[0.04] rounded" />
                  <div className="h-10 bg-white/[0.06] rounded-xl" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/[0.05] space-y-4">
            <div className="h-5 w-32 bg-white/[0.06] rounded" />
            <div className="h-36 bg-white/[0.06] rounded-xl" />
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl p-5 bg-white/[0.04] border border-white/[0.05] space-y-3">
            <div className="h-5 w-24 bg-white/[0.06] rounded mb-4" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-white/[0.04] rounded-xl" />
            ))}
          </div>
          <div className="rounded-2xl p-5 bg-white/[0.04] border border-white/[0.05] space-y-3">
            <div className="h-5 w-28 bg-white/[0.06] rounded mb-4" />
            <div className="h-10 bg-white/[0.04] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLoading() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <div className="h-7 w-32 bg-white/[0.06] rounded-lg" />
          <div className="h-4 w-52 bg-white/[0.04] rounded-lg" />
        </div>
        <div className="h-9 w-36 bg-white/[0.06] rounded-xl" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl p-5 bg-white/[0.04] border border-white/[0.05] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.06]" />
            <div className="h-8 w-16 bg-white/[0.06] rounded-lg" />
            <div className="h-3 w-24 bg-white/[0.04] rounded" />
          </div>
        ))}
      </div>

      {/* Bottom panels */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-white/[0.04] border border-white/[0.05] overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.05]">
            <div className="h-5 w-28 bg-white/[0.06] rounded" />
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.04]">
              <div className="w-9 h-9 rounded-full bg-white/[0.06] flex-shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3.5 w-36 bg-white/[0.06] rounded" />
                <div className="h-3 w-48 bg-white/[0.04] rounded" />
              </div>
              <div className="h-5 w-16 bg-white/[0.06] rounded-full" />
              <div className="h-3 w-12 bg-white/[0.04] rounded" />
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-white/[0.04] border border-white/[0.05] p-6 space-y-5">
          <div className="h-5 w-32 bg-white/[0.06] rounded mb-6" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <div className="h-3 w-28 bg-white/[0.06] rounded" />
                <div className="h-3 w-6 bg-white/[0.04] rounded" />
              </div>
              <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-white/[0.08] rounded-full" style={{ width: `${60 - i * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

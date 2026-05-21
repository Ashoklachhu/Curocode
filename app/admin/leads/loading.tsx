export default function LeadsLoading() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="h-7 w-20 bg-white/[0.06] rounded-lg" />
          <div className="h-4 w-28 bg-white/[0.04] rounded-lg" />
        </div>
        <div className="h-9 w-40 bg-white/[0.06] rounded-xl" />
      </div>

      {/* Filter bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 h-10 bg-white/[0.04] rounded-xl border border-white/[0.06]" />
        <div className="w-36 h-10 bg-white/[0.04] rounded-xl border border-white/[0.06]" />
        <div className="w-36 h-10 bg-white/[0.04] rounded-xl border border-white/[0.06]" />
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white/[0.04] border border-white/[0.05] overflow-hidden">
        <div className="flex px-5 py-3.5 border-b border-white/[0.05] gap-4">
          {[120, 180, 140, 100, 90, 60].map((w, i) => (
            <div key={i} className="h-3 bg-white/[0.06] rounded" style={{ width: w }} />
          ))}
        </div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center px-5 py-4 gap-4 border-b border-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] flex-shrink-0" />
              <div className="h-3.5 w-28 bg-white/[0.06] rounded" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="h-3 w-40 bg-white/[0.05] rounded" />
              <div className="h-2.5 w-24 bg-white/[0.04] rounded" />
            </div>
            <div className="h-3 w-28 bg-white/[0.05] rounded" />
            <div className="h-5 w-20 bg-white/[0.06] rounded-full" />
            <div className="h-3 w-20 bg-white/[0.04] rounded" />
            <div className="w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

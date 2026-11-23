"use client";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

export default function RefreshButton() {
  const router = useRouter();
  const [spinning, setSpinning] = useState(false);

  const handleRefresh = () => {
    setSpinning(true);
    router.refresh();
    setTimeout(() => setSpinning(false), 800);
  };

  return (
    <button
      onClick={handleRefresh}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] text-stone-400 hover:text-white hover:border-white/20 text-sm transition-all"
    >
      <RefreshCw size={14} className={spinning ? "animate-spin" : ""} />
      Refresh
    </button>
  );
}

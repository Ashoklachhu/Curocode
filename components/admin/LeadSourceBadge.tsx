import { getSource } from "@/lib/lead-sources";

export default function LeadSourceBadge({ source }: { source: string }) {
  const s = getSource(source);
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${s.color}`}>
      <span>{s.emoji}</span>
      {s.label}
    </span>
  );
}

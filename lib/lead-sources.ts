export interface LeadSource {
  id: string;
  label: string;
  emoji: string;
  color: string; // tailwind bg color for badge
}

export const LEAD_SOURCES: LeadSource[] = [
  // Digital / Social
  { id: "website_form",   label: "Website Form",   emoji: "🌐", color: "bg-sand-500/15 text-sand-300 border-sand-500/25" },
  { id: "instagram",      label: "Instagram",      emoji: "📸", color: "bg-pink-500/15 text-pink-300 border-pink-500/25" },
  { id: "facebook",       label: "Facebook",       emoji: "👥", color: "bg-blue-500/15 text-blue-300 border-blue-500/25" },
  { id: "linkedin",       label: "LinkedIn",       emoji: "💼", color: "bg-sky-500/15 text-sky-300 border-sky-500/25" },
  { id: "tiktok",         label: "TikTok",         emoji: "🎵", color: "bg-stone-500/15 text-stone-300 border-stone-500/25" },
  { id: "twitter_x",     label: "Twitter / X",    emoji: "🐦", color: "bg-stone-500/15 text-stone-300 border-stone-500/25" },
  { id: "youtube",        label: "YouTube",        emoji: "▶️",  color: "bg-red-500/15 text-red-300 border-red-500/25" },
  { id: "snapchat",       label: "Snapchat",       emoji: "👻", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25" },
  // Messaging
  { id: "whatsapp",       label: "WhatsApp",       emoji: "💬", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
  { id: "direct_message", label: "Direct Message", emoji: "✉️",  color: "bg-rose-500/15 text-rose-300 border-rose-500/25" },
  // Paid
  { id: "google_ads",     label: "Google Ads",     emoji: "🎯", color: "bg-orange-500/15 text-orange-300 border-orange-500/25" },
  { id: "meta_ads",       label: "Meta Ads",       emoji: "📢", color: "bg-blue-500/15 text-blue-300 border-blue-500/25" },
  { id: "tiktok_ads",     label: "TikTok Ads",     emoji: "🎬", color: "bg-stone-500/15 text-stone-300 border-stone-500/25" },
  // Organic
  { id: "seo_organic",    label: "SEO / Organic",  emoji: "🔍", color: "bg-green-500/15 text-green-300 border-green-500/25" },
  // Outreach
  { id: "cold_email",     label: "Cold Email",     emoji: "📧", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25" },
  { id: "cold_call",      label: "Cold Call",      emoji: "📞", color: "bg-teal-500/15 text-teal-300 border-teal-500/25" },
  // Relationships
  { id: "referral",       label: "Referral",       emoji: "🤝", color: "bg-amber-500/15 text-amber-300 border-amber-500/25" },
  { id: "word_of_mouth",  label: "Word of Mouth",  emoji: "💬", color: "bg-lime-500/15 text-lime-300 border-lime-500/25" },
  // Events
  { id: "event",          label: "Event / Expo",   emoji: "🎪", color: "bg-sand-500/15 text-sand-300 border-sand-500/25" },
  { id: "networking",     label: "Networking",     emoji: "🌟", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25" },
  // Website forms
  { id: "contact_page",   label: "Contact Page",   emoji: "📨", color: "bg-sand-500/15 text-sand-300 border-sand-500/25" },
  { id: "home_contact",   label: "Homepage Form",  emoji: "🏠", color: "bg-sand-500/15 text-sand-300 border-sand-500/25" },
  // Legacy / system
  { id: "hero_form",      label: "Hero Form",      emoji: "📝", color: "bg-sand-500/15 text-sand-300 border-sand-500/25" },
  { id: "csv_import",     label: "CSV Import",     emoji: "📤", color: "bg-stone-500/15 text-stone-300 border-stone-500/25" },
  { id: "manual",         label: "Manual Entry",   emoji: "✏️",  color: "bg-stone-500/15 text-stone-300 border-stone-500/25" },
  { id: "other",          label: "Other",          emoji: "📌", color: "bg-stone-500/15 text-stone-300 border-stone-500/25" },
];

export function getSource(id: string): LeadSource {
  return LEAD_SOURCES.find((s) => s.id === id) ?? {
    id, label: id, emoji: "📌",
    color: "bg-stone-500/15 text-stone-300 border-stone-500/25",
  };
}

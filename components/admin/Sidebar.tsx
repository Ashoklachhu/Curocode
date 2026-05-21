"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import {
  LayoutDashboard, Users, LogOut, ChevronRight, Kanban, Upload, Plus,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "All Leads",  href: "/admin/leads",             icon: Users },
  { label: "Pipeline",   href: "/admin/leads?view=kanban", icon: Kanban },
  { label: "Add / Import", href: "/admin/leads/upload",    icon: Upload },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#07091a] border-r border-white/[0.05] fixed left-0 top-0 bottom-0 z-40">
      {/* Logo */}
      <div className="px-6 h-16 flex items-center border-b border-white/[0.05]">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_14px_rgba(99,102,241,0.5)]">
            <span className="text-white font-black text-base">C</span>
          </div>
          <div>
            <span className="text-white font-bold text-sm tracking-tight block leading-none">CuroCode</span>
            <span className="text-slate-600 text-[10px]">Admin CRM</span>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="text-slate-600 text-[10px] font-semibold tracking-widest uppercase px-3 mb-3">Menu</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href.includes("?")
            ? pathname === "/admin/leads"
            : pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-indigo-500/15 text-white border border-indigo-500/25"
                  : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Icon size={17} className={isActive ? "text-indigo-400" : "text-slate-600 group-hover:text-slate-400"} />
              {item.label}
              {isActive && <ChevronRight size={14} className="ml-auto text-indigo-400" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4 border-t border-white/[0.05] pt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-red-400 hover:bg-red-500/[0.06] transition-all duration-200 group"
        >
          <LogOut size={17} className="group-hover:text-red-400" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

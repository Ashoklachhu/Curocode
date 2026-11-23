import {
  AppWindow, BarChart3, Bot, Brain, Briefcase, Bug, Cloud, Code2, Cpu, Database,
  FileText, Gauge, GitBranch, LayoutGrid, LifeBuoy, LineChart, Lock, PenTool, Plug,
  RefreshCw, Search, Server, ShieldAlert, ShieldCheck, Smartphone, TrendingUp,
  UserPlus, Users, Workflow, Zap, Clock,
  type LucideIcon,
} from "lucide-react";

/** Maps icon names used in lib/services-data.ts to Lucide components. */
export const ICONS: Record<string, LucideIcon> = {
  AppWindow, BarChart3, Bot, Brain, Briefcase, Bug, Cloud, Code2, Cpu, Database,
  FileText, Gauge, GitBranch, LayoutGrid, LifeBuoy, LineChart, Lock, PenTool, Plug,
  RefreshCw, Search, Server, ShieldAlert, ShieldCheck, Smartphone, TrendingUp,
  UserPlus, Users, Workflow, Zap, Clock,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Zap;
}

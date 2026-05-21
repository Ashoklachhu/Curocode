import Sidebar from "@/components/admin/Sidebar";

export const metadata = { title: "Admin CRM — CuroCode" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#05070f] text-white">
      <Sidebar />
      <main className="lg:pl-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}

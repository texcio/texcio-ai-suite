"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black min-h-screen text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-950 border-r border-white/10 hidden md:block">
        <Sidebar />
      </div>

      {/* Main container */}
      <div className="flex flex-col flex-1">
        <Navbar />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

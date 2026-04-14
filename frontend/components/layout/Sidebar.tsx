"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiSettings, FiImage, FiCpu, FiBookOpen } from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: FiHome },
  { name: "Summarizer", href: "/dashboard/summarizer", icon: FiBookOpen },
  { name: "Image Generator", href: "/dashboard/image", icon: FiImage },
  { name: "AI Agents", href: "/dashboard/agents", icon: FiCpu },
  { name: "Profile", href: "/dashboard/profile", icon: FiUser },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen flex flex-col gap-2 p-5 bg-neutral-950 text-white">
      
        <div className="flex items-center justify-center py-6">
  <img
    src="/logo.png"
    alt="Texcio AI Suite"
    className="w-[150px] h-auto object-contain"
  />
</div>
      

      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                transition-all duration-200
                ${isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto pt-5 border-t border-white/10">
        <p className="text-xs text-white/40 text-center">© 2025 Texcio</p>
      </div>
    </div>
  );
}

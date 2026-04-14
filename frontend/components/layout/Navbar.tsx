"use client";

import { Bell, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="h-16 border-b bg-white/70 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-50">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* (Optional) Page Title */}
        <span className="hidden md:block font-semibold text-gray-700">
          Dashboard
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative hover:text-blue-600 transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=texcio"
              width={32}
              height={32}
              alt="User"
              className="rounded-full cursor-pointer border border-gray-300 hover:scale-105 transition"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48 mr-3 shadow-xl">
            <Link href="/dashboard/profile">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            </Link>

            <Link href="/dashboard/settings">
              <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            </Link>

            <Link href="/dashboard/billing">
              <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-500 cursor-pointer"
              onClick={() => console.log("Logout clicked")}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}

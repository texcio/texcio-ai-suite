"use client";


import { Bell, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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

      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Mobile sidebar toggle */}
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <Image
          src="/logo.png"
          alt="Texcio AI Suite"
          width={150}
          height={40}
          priority
        /> ̰
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative hover:text-blue-600">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=texcio"
              width={32}
              height={32}
              alt="User"
              className="rounded-full cursor-pointer"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48 mr-4">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}

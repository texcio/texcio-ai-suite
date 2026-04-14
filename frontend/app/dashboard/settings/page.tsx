"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function SettingsPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      reveals.forEach((el: any) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) el.classList.add("active");
      });
    };
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">

      {/* Galaxy Background */}
      <canvas id="galaxy-settings" className="absolute inset-0 z-0"></canvas>

      {/* Aurora */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
        Settings
      </h1>

      {/* Profile Card */}
      <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-2xl reveal opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold">
            S
          </div>
          <button className="px-4 py-2 text-sm border border-white/30 rounded-lg hover:bg-white/10 transition">
            Change Photo
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-white/70">Full Name</label>
            <input
              type="text"
              defaultValue="Sudhakar Ajithraj"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-white/70">Email Address</label>
            <input
              type="email"
              defaultValue="youremail@example.com"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
          </div>

          <button className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold">
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
}

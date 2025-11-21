"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    /* Scroll Reveal */
    const items = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      items.forEach((el: any) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Galaxy Background */}
      <canvas id="galaxy-profile" className="absolute inset-0 z-0"></canvas>

      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
        Profile
      </h1>

      {/* Profile Card */}
      <div className="max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 reveal opacity-0 translate-y-10 transition-all duration-700">
        
        {/* Avatar + Info */}
        <div className="flex items-center gap-6 mb-10">
          <div className="relative group">
            <Image
              src="/dashboard-preview.png"
              width={80}
              height={80}
              alt="avatar"
              className="rounded-full border border-white/20 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm">
              Change
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Sudhakar Ajithraj</h2>
            <p className="text-white/70">Founder & Director, Texcio</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm mb-2 text-white/60">Full Name</label>
            <input
              type="text"
              defaultValue="Sudhakar Ajithraj"
              className="w-full p-3 bg-white/10 rounded-lg border border-white/10 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white/60">Email</label>
            <input
              type="email"
              defaultValue="youremail@example.com"
              className="w-full p-3 bg-white/10 rounded-lg border border-white/10 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white/60">Phone Number</label>
            <input
              type="text"
              defaultValue="+91 XXXXX XXXXX"
              className="w-full p-3 bg-white/10 rounded-lg border border-white/10 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white/60">Company</label>
            <input
              type="text"
              defaultValue="Texcio Technologies Pvt Ltd"
              className="w-full p-3 bg-white/10 rounded-lg border border-white/10 focus:outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition">
            Save Changes
          </button>
          <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
            Reset
          </button>
        </div>

      </div>

      {/* Extra Card: Account Info */}
      <div className="mt-10 max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
        <h2 className="text-2xl font-semibold mb-6">Account Information</h2>

        <div className="space-y-4 text-white/70">
          <p>Account Type: <span className="text-white font-semibold">Professional</span></p>
          <p>Member Since: <span className="text-white font-semibold">March 2021</span></p>
          <p>Subscription Plan: <span className="text-blue-400 font-semibold">Pro</span></p>
        </div>

        <button className="mt-6 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
          Manage Subscription
        </button>
      </div>

    </div>
  );
}

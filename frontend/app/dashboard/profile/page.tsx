"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("Sudhakar Ajithraj");
  const [email, setEmail] = useState("sudhakar@example.com");

  return (
    <div className="p-8 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>

      {/* Card */}
      <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm mb-1 text-white/60">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-white/5 border border-white/20 focus:border-blue-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-white/60">Email Address</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white/80"
          />
        </div>

        {/* Save Button */}
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}

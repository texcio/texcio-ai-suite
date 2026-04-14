"use client";
import Link from "next/link";

export default function UpgradeBanner() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 p-6 shadow-md text-black flex items-center justify-between">
      <div className="font-semibold text-lg">
        🚀 Upgrade to Pro — Unlimited AI, faster speed & exclusive tools.
      </div>
      <Link href="/dashboard/billing"
        className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition">
        Upgrade Now
      </Link>
    </div>
  );
}

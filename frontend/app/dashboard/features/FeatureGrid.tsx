"use client";
import Link from "next/link";
import { Lock } from "lucide-react";

const features = [
  { title: "Summarizer", description: "Summarize content & PDFs", href: "/dashboard/summarizer", pro: false },
  { title: "Image Generator", description: "Generate AI images instantly", href: "/dashboard/image", pro: true },
  { title: "AI Agents", description: "Create autonomous AI workflows", href: "/dashboard/agents", pro: true },
  { title: "Profile", description: "Your profile & account settings", href: "/dashboard/profile", pro: false },
  { title: "Settings", description: "Preferences, security & options", href: "/dashboard/settings", pro: false },
  { title: "Billing", description: "Subscription & payment history", href: "/dashboard/billing", pro: true },
];

export default function FeatureGrid({ isPro }: { isPro: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {features.map((f) => (
        <Link
          key={f.title}
          href={isPro || !f.pro ? f.href : "/dashboard/billing"}
          className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition shadow group"
        >
          <h3 className="text-xl font-semibold flex gap-2 items-center">
            {f.title} {f.pro && !isPro && <Lock size={18} className="text-red-400" />}
          </h3>
          <p className="text-white/60 text-sm mt-2">{f.description}</p>
          <p className={`text-sm mt-4 font-medium group-hover:underline 
            ${f.pro && !isPro ? "text-red-400" : "text-blue-300"}`}>
            {f.pro && !isPro ? "Upgrade to unlock →" : "Open →"}
          </p>
        </Link>
      ))}
    </div>
  );
}

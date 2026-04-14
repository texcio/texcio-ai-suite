"use client";

import { useEffect } from "react";
import {
  Bot,
  ImageIcon,
  BookOpen,
  Sparkles,
  Zap,
  ArrowRight,
  FileText,
} from "lucide-react";

type DashboardClientProps = {
  isPro: boolean;
  userName: string;
};

export default function DashboardClient({ isPro, userName }: DashboardClientProps) {
  useDashboardEffects();

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Galaxy Background */}
      <canvas id="galaxy-dashboard" className="absolute inset-0 z-0"></canvas>

      {/* Aurora Gradient */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>

      {/* HERO */}
      <section className="p-10 mb-14 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
        <h1 className="text-4xl font-bold">
          Welcome back, <span className="text-blue-400">{userName}</span> 👋
        </h1>

        {/* PRO / FREE badge */}
        {isPro ? (
          <p className="mt-4 px-4 py-2 rounded-lg bg-green-600/20 text-green-400 w-fit font-semibold">
            🌟 PRO Member — Unlimited AI Tools
          </p>
        ) : (
          <a
            href="/billing"
            className="mt-4 px-4 py-2 rounded-lg bg-yellow-600/20 text-yellow-400 w-fit font-semibold hover:bg-yellow-600/30 transition"
          >
            🔓 Free Plan — Upgrade to Pro
          </a>
        )}
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-4 gap-6 mb-14">
        <StatCard title="Summaries" value="1,248" icon={<BookOpen />} />
        <StatCard title="Images Generated" value="542" icon={<ImageIcon />} />
        <StatCard title="Agents Running" value="7" icon={<Bot />} />
        <StatCard title="Total Requests" value="9,334" icon={<Zap />} />
      </section>

      {/* AI TOOLS */}
      <section className="grid md:grid-cols-3 gap-6 mb-14">
        <ToolCard
          title="Summarizer"
          text="Summarize long documents, PDFs, blogs & more."
          icon={<BookOpen className="w-8 h-8 text-blue-400" />}
          href="/summarizer"
        />
        <ToolCard
          title="Image Generator"
          text="Generate AI images instantly."
          icon={<ImageIcon className="w-8 h-8 text-purple-400" />}
          href={isPro ? "/image" : "/billing"}
          locked={!isPro}
        />
        <ToolCard
          title="AI Agents"
          text="Create autonomous AI workflows."
          icon={<Bot className="w-8 h-8 text-green-400" />}
          href={isPro ? "/agents" : "/billing"}
          locked={!isPro}
        />
      </section>
    </div>
  );
}

/* COMPONENTS */
type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition cursor-pointer">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-white/60">{title}</p>
    </div>
  );
}

type ToolCardProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
  href: string;
  locked?: boolean;
};

function ToolCard({ title, text, icon, href, locked = false }: ToolCardProps) {
  return (
    <a
      href={href}
      className={`p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition cursor-pointer hover:scale-[1.03] ${
        locked && "opacity-50 pointer-events-none"
      }`}
    >
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-white/60 mt-2">{text}</p>
      {locked && (
        <p className="mt-2 text-red-400 text-sm font-medium">Pro Only</p>
      )}
      <span className="flex items-center gap-2 text-blue-400 mt-4">
        Open <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}

/* EFFECTS */
function useDashboardEffects() {
  useEffect(() => {
    const canvas = document.getElementById("galaxy-dashboard") as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2,
      speed: Math.random() * 0.6 + 0.2,
    }));

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fillRect(s.x, s.y, s.size, s.size);
        s.y += s.speed;
        if (s.y > h) (s.y = 0), (s.x = Math.random() * w);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);
}

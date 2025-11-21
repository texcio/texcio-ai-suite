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

export default function Dashboard() {
  useDashboardEffects();

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Galaxy Background */}
      <canvas id="galaxy-dashboard" className="absolute inset-0 z-0"></canvas>

      {/* Aurora Gradient */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>

      {/* HERO SECTION */}
      <section className="reveal opacity-0 translate-y-10 transition-all duration-700 mb-14">
        <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
          <h1 className="text-4xl font-bold">
            Welcome back, <span className="text-blue-400">Sudhakar</span> 👋
          </h1>
          <p className="text-white/60 mt-2 text-lg">
            Here’s what’s happening across your Texcio AI Suite workspace.
          </p>
        </div>
      </section>

      {/* STATS CARDS */}
      <section className="grid md:grid-cols-4 gap-6 mb-14">
        <StatCard title="Summaries" value="1,248" icon={<BookOpen />} />
        <StatCard title="Images Generated" value="542" icon={<ImageIcon />} />
        <StatCard title="Agents Running" value="7" icon={<Bot />} />
        <StatCard title="Total Requests" value="9,334" icon={<Zap />} />
      </section>

      {/* AI TOOLS GRID */}
      <section className="mb-14 reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
        <h2 className="text-2xl font-semibold mb-4">AI Tools</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard
            title="Summarizer"
            text="Summarize long documents, PDFs, blogs & more."
            icon={<BookOpen className="w-8 h-8 text-blue-400" />}
            href="/summarizer"
          />

          <ToolCard
            title="Image Generator"
            text="Generate AI images from prompts instantly."
            icon={<ImageIcon className="w-8 h-8 text-purple-400" />}
            href="/image"
          />

          <ToolCard
            title="AI Agents"
            text="Create autonomous AI workflows & automation."
            icon={<Bot className="w-8 h-8 text-green-400" />}
            href="/agents"
          />
        </div>
      </section>

      {/* ACTIVITY & RECENT FILES */}
      <section className="grid lg:grid-cols-2 gap-10 mb-14">

        {/* ACTIVITY FEED */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>

          <div className="space-y-6">
            <ActivityItem
              title="Generated Summary"
              text="You summarized a 12-page PDF."
            />
            <ActivityItem
              title="Created AI Agent"
              text="New 'Email Digest Agent' is now running."
            />
            <ActivityItem
              title="Image Generated"
              text="AI created an HD image based on your prompt."
            />
          </div>
        </div>

        {/* RECENT FILES */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <h2 className="text-2xl font-semibold mb-6">Recent Files</h2>

          <div className="space-y-6">
            <FileItem title="Project Summary.pdf" size="2.1 MB" />
            <FileItem title="Marketing Notes.txt" size="890 KB" />
            <FileItem title="Meeting Transcript.docx" size="1.4 MB" />
          </div>
        </div>

      </section>

      {/* QUICK ACTIONS */}
      <section className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <QuickAction
            title="Create New Agent"
            icon={<Bot />}
          />
          <QuickAction
            title="Upload File"
            icon={<FileText />}
          />
          <QuickAction
            title="Generate Summary"
            icon={<Sparkles />}
          />
        </div>
      </section>

    </div>
  );
}

/* ============= COMPONENTS ============= */

function StatCard({ title, value, icon }) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl reveal opacity-0 translate-y-10 transition-all duration-700 hover:bg-white/10 hover:scale-[1.03] transition cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <div className="text-4xl">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-white/60">{title}</p>
    </div>
  );
}

function ToolCard({ title, text, icon, href }) {
  return (
    <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition cursor-pointer hover:scale-[1.03] reveal opacity-0 translate-y-10 duration-700">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-white/60 mt-2">{text}</p>
      <a className="flex items-center gap-2 text-blue-400 mt-4" href={href}>
        Open <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function ActivityItem({ title, text }) {
  return (
    <div className="p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-white/60 text-sm">{text}</p>
    </div>
  );
}

function FileItem({ title, size }) {
  return (
    <div className="p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl flex justify-between">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-white/60 text-sm">{size}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-white/60" />
    </div>
  );
}

function QuickAction({ title, icon }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl hover:bg-white/10 transition cursor-pointer hover:scale-[1.05] reveal opacity-0 translate-y-10 duration-700 flex items-center gap-3">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

/* ============= DASHBOARD EFFECTS HOOK ============= */

function useDashboardEffects() {
  useEffect(() => {
    /* Scroll Reveal */
    const items = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      items.forEach((el: any) => {
        const y = el.getBoundingClientRect().top;
        if (y < window.innerHeight * 0.85) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* Galaxy Canvas */
    const canvas = document.getElementById("galaxy-dashboard") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2,
      speed: Math.random() * 0.6 + 0.2,
    }));

    const animate = () => {
      ctx!.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        ctx!.fillStyle = "rgba(255,255,255,0.4)";
        ctx!.fillRect(s.x, s.y, s.size, s.size);
        s.y += s.speed;
        if (s.y > h) {
          s.y = 0;
          s.x = Math.random() * w;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);
}

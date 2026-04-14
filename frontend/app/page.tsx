"use client";

import Image from "next/image";
import Footer from "../components/layout/Footer";
import { BookOpen, ImageIcon, Bot, Shield, Sparkles, Zap } from "lucide-react";

/* ─────────────────── Main Landing Page ─────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">

      {/* Aurora / Galaxy Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,120,255,.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,0,200,.25),transparent_50%)] blur-3xl"></div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 bg-black/30 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image src="/logo.png" width={120} height={80} alt="Logo" />

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>

          <div className="flex gap-4">
           <a
  href="/login"
  className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
>
  Sign In
</a>

<a
  href="/register"
  className="flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
>
  Get Started
</a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-28 relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          AI Tools That{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Move Your Business
          </span>{" "}
          Forward
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Transform your workflow with enterprise-grade AI summaries, images, agents,
          automations, and more.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/register" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg shadow-xl hover:opacity-90">
            Start Free
          </a>
          <a href="#features" className="px-8 py-4 border border-gray-700 rounded-xl text-lg hover:bg-white/10">
            Explore Features
          </a>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-14 flex justify-center">
          <Image
            src="/dashboard-preview.png"
            width={900}
            height={600}
            alt="Dashboard Preview"
            className="rounded-3xl shadow-[0_0_60px_rgba(0,0,0,.6)] border border-white/10"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black/20 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Stat value="10k+" label="Active Users" />
          <Stat value="40M+" label="AI Requests" />
          <Stat value="99.9%" label="Uptime" />
          <Stat value="120+" label="Enterprise Teams" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-4">Powerful AI Modules</h2>
          <p className="text-center text-gray-400 mb-14">
            Everything you need to scale your AI workflow
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard icon={<BookOpen className="w-8 h-8 text-blue-400" />} title="AI Summarizer" description="Summarize PDFs, docs & articles instantly." />
            <FeatureCard icon={<ImageIcon className="w-8 h-8 text-purple-400" />} title="AI Image Generator" description="Create HD images with precision styling." />
            <FeatureCard icon={<Bot className="w-8 h-8 text-green-400" />} title="Intelligent Agents" description="Automate workflows using custom AI bots." />
            <FeatureCard icon={<Shield className="w-8 h-8 text-red-400" />} title="Enterprise Security" description="Bank-grade encryption & privacy." />
            <FeatureCard icon={<Sparkles className="w-8 h-8 text-yellow-400" />} title="Smart Automation" description="Trigger fully automated AI tasks." />
            <FeatureCard icon={<Zap className="w-8 h-8 text-pink-400" />} title="Lightning Fast" description="Low-latency AI optimized for scale." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-black/20 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-4">Flexible Pricing</h2>
          <p className="text-center text-gray-400 mb-16">Choose a plan that fits your growth</p>

          <div className="grid md:grid-cols-3 gap-12">
            <PricingCard plan="Free" price="$0" features={["20 requests/day", "Basic AI tools", "Email Support"]} cta="Start Free" />
            <PricingCard plan="Pro" price="$19/mo" primary features={["Unlimited Summaries", "Unlimited Images", "AI Agents (Pro)", "Priority Support"]} cta="Get Pro" />
            <PricingCard plan="Enterprise" price="Custom" features={["Custom Limits", "Custom Tools", "Dedicated Support"]} cta="Contact Sales" />
          </div>
        </div>
      </section>

      {/* Workflow */}
      {/* Workflow */}
<section id="workflow" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#030014] via-[#14002b] to-[#030014]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(90,0,255,0.45),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(255,0,140,0.45),transparent_60%)] opacity-40 blur-2xl"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <h2 className="text-center text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
      Your AI Workflow in 4 Steps
    </h2>

    <div className="space-y-16">
      <WorkflowStep
        number="1"
        title="Upload or Input Data"
        text="Upload documents, paste text, or type anything you want summarized or analyzed."
      />
      <WorkflowStep
        number="2"
        title="Choose AI Tool"
        text="Pick summarizer, image generator, or automated agent."
      />
      <WorkflowStep
        number="3"
        title="Customize Output"
        text="Adjust tone, length, quality, and styles easily."
      />
      <WorkflowStep
        number="4"
        title="Download & Use"
        text="Export results or trigger automated workflows instantly."
      />
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ─────────────────── Reusable Components ─────────────────── */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="p-8 border border-white/10 bg-white/5 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white/10 transition">
      <div>{icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  );
}

function PricingCard({ plan, price, features, primary, cta }: any) {
  return (
    <div
      className={`p-8 rounded-2xl border shadow-sm bg-white/5 backdrop-blur-xl ${
        primary ? "border-purple-400 shadow-purple-700/50" : "border-white/10"
      }`}
    >
      <h3 className={`text-xl font-semibold ${primary ? "text-purple-400" : ""}`}>{plan}</h3>
      <h4 className="mt-4 text-4xl font-bold">{price}</h4>

      <ul className="mt-6 space-y-2 text-gray-300">
        {features.map((f: string, i: number) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>

      <a
        href="/register"
        className={`mt-6 block px-5 py-2 text-center rounded-lg ${
          primary
            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
            : "border border-gray-600 hover:bg-white/10"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function WorkflowStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-6 group">
      {/* Number Circle */}
      <div className="min-w-[60px] min-h-[60px] flex items-center justify-center
        rounded-full bg-gradient-to-r from-blue-500 to-purple-500
        text-white text-2xl font-bold shadow-[0_0_25px_rgba(100,0,255,.6)]
        group-hover:scale-110 transition-all duration-300">
        {number}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 max-w-2xl leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

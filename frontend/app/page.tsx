"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Brain, ImageIcon, Bot, Shield, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Animated Background Blob */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>


      {/* Navbar */}
      <nav className="w-full fixed top-0 bg-white/80 backdrop-blur-lg border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" width={100} height={75} alt="Logo" />
          </div>

          <div className="hidden md:flex gap-8 text-gray-600">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#workflow">Workflow</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="/login" className="text-gray-700 hover:text-black">Sign In</a>
            <a href="/register" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-40 pb-28 relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold leading-tight">
          AI Tools That <span className="text-blue-600">Move Your Business</span> Forward
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Transform the way your team works with enterprise-grade AI tools —
          summarization, images, agents, automation, and more.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/register" className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg shadow-lg hover:bg-blue-700">
            Start Free
          </a>
          <a href="#features" className="px-8 py-4 border rounded-xl text-lg hover:bg-gray-100">
            View Features
          </a>
        </div>

        <div className="mt-14 flex justify-center">
          <Image
            src="/dashboard-preview.png"
            width={900}
            height={600}
            alt="Dashboard Preview"
            className="rounded-xl shadow-2xl border"
          />
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold">10k+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">40M+</h3>
            <p className="text-gray-600">AI Requests</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="text-gray-600">Enterprise Teams</p>
          </div>
        </div>
      </section>


      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-4">Powerful AI Modules</h2>
          <p className="text-center text-gray-600 mb-14">Everything you need to scale your AI workflow</p>

          <div className="grid md:grid-cols-3 gap-10">

            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="AI Summarizer"
              description="Instantly summarize PDFs, articles, documents, and long text content."
            />

            <FeatureCard 
              icon={<ImageIcon className="w-8 h-8 text-blue-600" />}
              title="AI Image Generator"
              description="Create HD images with advanced prompt control and styling."
            />

            <FeatureCard 
              icon={<Bot className="w-8 h-8 text-blue-600" />}
              title="Intelligent Agents"
              description="Build custom workflow agents to automate tasks across your business."
            />

            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Enterprise Security"
              description="Fully encrypted data, multi-layer protection, and secure infrastructure."
            />

            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-blue-600" />}
              title="Smart Automation"
              description="Automate emails, workflows, and daily tasks with AI-powered triggers."
            />

            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Lightning Fast"
              description="Optimized infra for high-speed generation & low-latency AI outputs."
            />

          </div>
        </div>
      </section>


      {/* Workflow Timeline */}
      <section id="workflow" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-14">Your AI Workflow in 4 Steps</h2>

          <div className="relative border-l-4 border-blue-600 ml-6">
            <TimelineItem step="1" title="Upload or Input Data" text="Upload documents, paste text, or type anything you want summarized or analyzed." />
            <TimelineItem step="2" title="Choose AI Tool" text="Pick summarizer, image generator, or automated agent." />
            <TimelineItem step="3" title="Customize Output" text="Adjust tone, length, quality, and styles easily." />
            <TimelineItem step="4" title="Download & Use" text="Export results or trigger automated workflows instantly." />
          </div>
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-4">Flexible Pricing</h2>
          <p className="text-center text-gray-600 mb-14">
            Simple plans for teams of all sizes
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <PricingCard plan="Free" price="$0" features={["20 requests/day","Basic AI tools","Email Support"]} cta="Start Free" />
            
            <PricingCard plan="Pro" price="$19/mo" primary features={[
              "Unlimited Summaries",
              "Unlimited Image Generation",
              "AI Agents (Pro)",
              "Priority Support"
            ]} cta="Get Pro" />

            <PricingCard plan="Enterprise" price="Custom" features={[
              "Custom Limits",
              "Custom Tools",
              "Dedicated Support"
            ]} cta="Contact Sales" />
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Supercharge Your Workflow?</h2>
        <p className="mt-4 text-lg opacity-90">
          Join thousands of teams using Texcio AI Suite today.
        </p>
        <a href="/register" className="mt-8 inline-block px-10 py-4 bg-white text-blue-700 font-semibold text-lg rounded-xl hover:bg-gray-100 shadow-lg">
          Start Free
        </a>
      </section>


      {/* Footer */}
      <footer className="py-10 border-t bg-gray-50 text-center text-gray-600">
        © {new Date().getFullYear()} Texcio AI Suite. All rights reserved.
      </footer>

    </div>
  );
}


/* --- Components --- */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div>{icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

function TimelineItem({ step, title, text }) {
  return (
    <div className="ml-10 mb-14 relative">
      <div className="absolute -left-14 top-0 w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold">
        {step}
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function PricingCard({ plan, price, features, primary, cta }) {
  return (
    <div className={`p-8 rounded-xl border shadow-sm ${primary ? "border-blue-600 shadow-xl" : ""}`}>
      <h3 className={`text-xl font-semibold ${primary ? "text-blue-600" : ""}`}>{plan}</h3>
      <h4 className="mt-4 text-4xl font-bold">{price}</h4>
      <ul className="mt-6 space-y-2 text-gray-600">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <a
        href="/register"
        className={`mt-6 block px-5 py-2 text-center rounded-lg ${primary 
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border hover:bg-gray-100"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

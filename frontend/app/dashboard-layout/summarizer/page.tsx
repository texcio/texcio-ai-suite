"use client";

import { useEffect, useState } from "react";
import { FileText, Upload, Sparkles } from "lucide-react";

export default function SummarizerPage() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    // Scroll reveal animation
    const items = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      items.forEach((el: any) => {
        const y = el.getBoundingClientRect().top;
        if (y < window.innerHeight * 0.85) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Galaxy Background */}
      <canvas id="galaxy-summarizer" className="absolute inset-0 z-0"></canvas>

      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>


      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
        AI Summarizer
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* INPUT SECTION */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700">

          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Enter Text or Upload File
          </h2>

          {/* PDF Upload */}
          <label className="w-full flex items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition mb-6">
            <Upload className="w-6 h-6 mr-3" />
            <span>Upload PDF</span>
            <input type="file" accept="application/pdf" className="hidden" />
          </label>

          {/* Text Input */}
          <textarea
            placeholder="Paste your text here..."
            className="w-full min-h-[250px] p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={() => setSummary("This is an example summary. (Hook up backend)")}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Generate Summary
          </button>
        </div>


        {/* OUTPUT SECTION */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">

          <h2 className="text-2xl font-semibold mb-6">Summary Output</h2>

          <div className="min-h-[250px] p-4 rounded-xl bg-white/10 border border-white/10">
            {summary ? (
              <p className="whitespace-pre-wrap">{summary}</p>
            ) : (
              <p className="text-white/60">Your summarized content will appear here…</p>
            )}
          </div>

          {summary && (
            <button className="mt-6 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Download Summary
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

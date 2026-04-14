"use client";

import { useEffect, useState } from "react";
import { ImageIcon, Sparkles } from "lucide-react";

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll reveal effect
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

  const generate = async () => {
    setLoading(true);

    // Replace this with your actual API call later
    setTimeout(() => {
      setImages([
        "/dashboard-preview.png",
        "/dashboard-preview.png",
        "/dashboard-preview.png",
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Galaxy Background */}
      <canvas id="galaxy-image" className="absolute inset-0 z-0"></canvas>

      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>


      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
        AI Image Generator
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* INPUT SECTION */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700">

          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <ImageIcon className="w-6 h-6" />
            Enter Prompt
          </h2>

          <textarea
            placeholder="Describe the image you want to generate…"
            className="w-full min-h-[200px] p-4 rounded-xl bg-white/10 border border-white/10 focus:outline-none resize-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            onClick={generate}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Generate Image
          </button>
        </div>

        {/* RESULTS GRID */}
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">

          <h2 className="text-2xl font-semibold mb-6">Generated Images</h2>

          {/* Loading shimmer */}
          {loading && (
            <div className="grid grid-cols-2 gap-4 animate-pulse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-40 bg-white/10 rounded-xl"></div>
              ))}
            </div>
          )}

          {/* Image Grid */}
          {!loading && images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img}
                    className="w-full h-40 object-cover rounded-xl border border-white/10 shadow-lg"
                  />
                  <button
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}

          {!loading && images.length === 0 && (
            <p className="text-white/60">Generated images will appear here…</p>
          )}
        </div>

      </div>
    </div>
  );
}

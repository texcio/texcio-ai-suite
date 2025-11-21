"use client";

import { useEffect, useState } from "react";
import { Bot, Plus, Settings, Trash, Zap } from "lucide-react";

export default function AgentsPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Scroll reveal
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

      {/* Galaxy */}
      <canvas id="galaxy-agents" className="absolute inset-0 z-0"></canvas>

      {/* Aurora */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>


      {/* Page Title */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold reveal opacity-0 translate-y-10 transition-all duration-700">
          AI Agents
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Agent
        </button>
      </div>

      {/* Agents Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[1, 2, 3, 4].map((a) => (
          <div
            key={a}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition reveal opacity-0 translate-y-10 duration-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Agent #{a}</h3>
                <p className="text-white/60 text-sm">Automated workflow agent</p>
              </div>
            </div>

            <p className="text-white/70 text-sm mb-6">
              This agent summarizes emails, extracts insights, and stores them automatically.
            </p>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition flex items-center gap-2 text-sm">
                <Settings className="w-4 h-4" />
                Manage
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 transition flex items-center gap-2 text-sm">
                <Trash className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* CREATE NEW AGENT MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl w-full max-w-lg reveal active">

            <h2 className="text-2xl font-semibold mb-6">Create New Agent</h2>

            <div className="space-y-6">

              <div>
                <label className="block mb-2 text-white/70 text-sm">Agent Name</label>
                <input
                  type="text"
                  placeholder="Enter agent name"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-white/70 text-sm">Agent Purpose</label>
                <textarea
                  placeholder="Describe what this agent should do..."
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none resize-none h-28"
                />
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 border border-white/20 rounded-xl hover:bg-white/10 transition"
                >
                  Cancel
                </button>

                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Create Agent
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

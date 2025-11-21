"use client";

import { useEffect } from "react";

export default function BillingPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      reveals.forEach((el: any) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) el.classList.add("active");
      });
    };
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">

      {/* Galaxy Background */}
      <canvas id="galaxy-billing" className="absolute inset-0 z-0"></canvas>

      {/* Aurora */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00eaff)] opacity-20 blur-[180px]"></div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
        Billing
      </h1>

      {/* Current Plan */}
      <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-3xl reveal opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>

        <p className="text-lg text-white/80">
          <span className="font-bold text-blue-400">Pro Plan</span> — $19/month
        </p>

        <p className="text-white/60 mt-2">Renews on: April 28, 2025</p>

        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition">
          Upgrade / Manage
        </button>
      </div>

      {/* Usage */}
      <div className="mt-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-3xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>

        <ul className="space-y-3 text-white/80">
          <li>⭐ Summaries: 402 / Unlimited</li>
          <li>🖼 Images: 118 / Unlimited</li>
          <li>🤖 Agents: 43 / Unlimited</li>
        </ul>
      </div>

      {/* Invoice Table */}
      <div className="mt-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-4xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-400">
        <h2 className="text-2xl font-semibold mb-4">Invoices</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-white/80 border-collapse">
            <thead>
              <tr className="text-white/60 border-b border-white/10">
                <th className="pb-3">Date</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="py-4">Feb {10 + i}, 2025</td>
                  <td>$19.00</td>
                  <td className="text-green-400">Paid</td>
                  <td>
                    <button className="px-4 py-1 border border-white/20 rounded-lg hover:bg-white/10 transition">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

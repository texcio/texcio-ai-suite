"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.target);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // FIX IMPORTANT
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("success");
      e.target.reset(); // CLEAR FORM
    } else {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4000); // AUTO-HIDE message
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A12] via-[#06051A] to-black text-white relative overflow-hidden">
      {/* Aurora BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,120,255,.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,0,180,.35),transparent_40%)] blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Contact Us
        </motion.h1>

        <p className="text-center text-gray-300 mb-16">
          We usually reply within 24 hours 🚀
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              required
              name="name"
              placeholder="Your name"
              className="bg-white/5 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="bg-white/5 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <textarea
            required
            name="message"
            rows={5}
            placeholder="Write your message…"
            className="w-full bg-white/5 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium transition-all
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}
          >
            {loading ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center"
            >
              Message sent! We’ll get back soon ✔
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center"
            >
              Something went wrong. Try again ❌
            </motion.p>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 text-center text-gray-300">
          <div className="bg-white/5 p-6 rounded-xl">
            📍 Location
            <p className="mt-2 font-medium text-white">Tamil Nadu, India</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            📧 Email
            <p className="mt-2 font-medium text-white">support@texcio.com</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            🕒 Working Hours
            <p className="mt-2 font-medium text-white">
              Mon–Sat · 9:00 — 18:00 IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

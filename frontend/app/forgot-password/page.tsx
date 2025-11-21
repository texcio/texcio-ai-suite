"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";

export default function ForgotPasswordPage() {
  const { isLoaded, signIn } = useSignIn();

  const [email, setEmail] = useState("");
  const [stage, setStage] = useState("request"); // request | sent
  const [error, setError] = useState("");

  const handleReset = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });

      setStage("sent");
    } catch (err: any) {
      setError(err.errors?.[0]?.longMessage || "Something went wrong.");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* Aurora Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.45),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,150,0.45),transparent_60%)]" />

      {/* Galaxy Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 animate-pulse bg-[url('/stars.png')] bg-cover bg-center"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-2">
            Reset Password
          </h2>

          {stage === "request" && (
            <>
              <p className="text-center text-gray-300 mb-8">
                Enter your email and we’ll send you a reset code.
              </p>

              <form onSubmit={handleReset} className="space-y-5">
                <div>
                  <label className="block mb-1 text-gray-200">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold"
                >
                  Send Reset Code
                </button>
              </form>

              <p className="text-center text-gray-300 mt-6">
                Remember your password?{" "}
                <a
                  href="/auth/login"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Sign In
                </a>
              </p>
            </>
          )}

          {stage === "sent" && (
            <>
              <p className="text-center text-gray-300 mb-8">
                A password reset code has been sent to:
                <br />
                <span className="text-blue-400 font-semibold">{email}</span>
              </p>

              <div className="space-y-5">
                <p className="text-center">
                  Please check your inbox and follow the reset link.
                </p>

                <a
                  href="/auth/login"
                  className="block text-center py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold"
                >
                  Return to Login
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

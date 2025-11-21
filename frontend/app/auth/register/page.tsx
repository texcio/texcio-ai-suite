"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  // Handle Google Sign Up
  const handleGoogleSignup = async () => {
    if (!isLoaded) return;

    await signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/dashboard",
      redirectUrlComplete: "/dashboard",
    });
  };

  // Handle email/password sign up
  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setCodeSent(true);
    } catch (err: any) {
      setError(err.errors?.[0]?.longMessage || "Signup failed.");
    }
  };

  // Handle verification code
  const handleVerification = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.longMessage || "Invalid code.");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* Aurora Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.45),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,150,0.45),transparent_60%)]" />

      {/* Galaxy Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 animate-pulse bg-[url('/stars.png')] bg-cover bg-center"></div>
      </div>

      {/* Center Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20">

          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-3">Create an Account</h2>
          <p className="text-center text-gray-300 mb-8">
            Get started with Texcio AI Suite
          </p>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition mb-6"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/20"></div>
            <span className="text-gray-300 text-sm">or</span>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>

          {/* If code is not sent: show email/password */}
          {!codeSent && (
            <form onSubmit={handleSignup} className="space-y-5">
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

              <div>
                <label className="block mb-1 text-gray-200">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* If code is sent: show verification form */}
          {codeSent && (
            <form onSubmit={handleVerification} className="space-y-5">
              <p className="text-center text-gray-300">
                Enter the verification code sent to your email.
              </p>

              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white text-center tracking-widest text-lg focus:outline-none focus:border-blue-500 transition"
                placeholder="123456"
                maxLength={6}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold"
              >
                Verify & Continue
              </button>
            </form>
          )}

          {/* Footer */}
          <p className="text-center text-gray-300 mt-6">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

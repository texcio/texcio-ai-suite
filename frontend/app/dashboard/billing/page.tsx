"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

export default function BillingPage() {
  const { user } = useUser();
  const [loadingPortal, setLoadingPortal] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [plan, setPlan] = useState("Free");

  useEffect(() => {
    // TODO: fetch plan from backend later
    setPlan("Free");
  }, []);

  const handleUpgrade = async () => {
    try {
      setLoadingCheckout(true);
      const { data } = await axios.post("/api/stripe/checkout", {
        userId: user?.id,
      });
      window.location.href = data.url;
    } finally {
      setLoadingCheckout(false);
    }
  };

  const handleBillingPortal = async () => {
    try {
      setLoadingPortal(true);
      const { data } = await axios.post("/api/stripe/portal", {
        userId: user?.id,
      });
      window.location.href = data.url;
    } finally {
      setLoadingPortal(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Billing & Subscription</h1>

      {/* Current Plan */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Current Plan</h2>
        <p className="text-gray-600 mt-2">
          You are currently using <span className="font-semibold">{plan}</span> plan.
        </p>

        {plan === "Free" && (
          <button
            onClick={handleUpgrade}
            disabled={loadingCheckout}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50"
          >
            {loadingCheckout ? "Redirecting..." : "Upgrade to Pro ($19/month)"}
          </button>
        )}

        {plan === "Pro" && (
          <button
            onClick={handleBillingPortal}
            disabled={loadingPortal}
            className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:opacity-50"
          >
            {loadingPortal ? "Loading..." : "Manage Subscription"}
          </button>
        )}
      </div>

      {/* Pro Features */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Why go Pro?</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>Unlimited Summaries</li>
          <li>Unlimited Image Generation</li>
          <li>AI Agents + Automations</li>
          <li>Priority Support</li>
        </ul>
      </div>
    </div>
  );
}

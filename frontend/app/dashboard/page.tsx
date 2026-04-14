import UpgradeBanner from "./upgrade/UpgradeBanner";
import StatsCards from "./stats/StatsCards";
import FeatureGrid from "./features/FeatureGrid";
import RecentActivity from "./recent/RecentActivity";
import { getCurrentUser } from "@/lib/session";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const isPro = user?.isPro ?? false;
  const userId = user?.id ?? "";

  return (
    <div className="flex flex-col gap-10 p-8 animate-fadeIn">
      {/* HERO */}
      <div className="rounded-3xl p-10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 shadow-lg backdrop-blur-md">
        <h1 className="text-4xl font-semibold text-white">
          Welcome back, <span className="text-blue-300">{user?.name}</span> 👋
        </h1>
        <p className="text-sm text-white/70 mt-3">
          Your AI workspace is ready. Let's build something great today.
        </p>
      </div>

      {/* SHOW UPGRADE ONLY IF USER IS NOT PRO */}
      {!isPro && <UpgradeBanner />}

      {/* STATS ALWAYS SHARP */}
      <StatsCards />

      {/* FEATURES — ONLY INDIVIDUAL PRO FEATURES LOCKED */}
      <FeatureGrid isPro={isPro} />

      {/* RECENT ACTIVITY */}
      <RecentActivity userId={userId} />
    </div>
  );
}

"use client";
import CountUp from "react-countup";

export default function StatsCards() {
  const stats = [
    { label: "Summaries", value: 1248 },
    { label: "Images Generated", value: 542 },
    { label: "Agents Running", value: 7 },
    { label: "Total Requests", value: 9334 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl p-8 bg-white/5 border border-white/10 shadow-md text-center">
          <CountUp end={s.value} duration={1.2} separator="," className="text-4xl font-bold" />
          <div className="text-white/60 text-sm mt-2">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";

export default function ExecutiveBoard() {
  const fraudPrevented = 1000000;
  const threatsBlocked = 48;
  const protectedUsers = 12456;
  const aiAccuracy = 98.4;
  const roi = 18.2;

  return (
    <main className="min-h-screen p-10">
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-bold">Executive Security Board</h1>

            <p className="text-slate-400 mt-3">
              Board-Level Identity Protection Metrics
            </p>
          </div>

          <Link
            href="/dashboard"
            className="
            px-5
            py-3
            rounded-xl
            bg-cyan-600
            hover:bg-cyan-500
            transition
            font-semibold
            "
          >
            Security Operations Center
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mb-10">
        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">Fraud Prevented</p>

          <h2 className="text-4xl font-bold text-orange-400 mt-3">
            ₹{fraudPrevented.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">Threats Blocked</p>

          <h2 className="text-4xl font-bold text-red-400 mt-3">
            {threatsBlocked}
          </h2>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">Protected Users</p>

          <h2 className="text-4xl font-bold text-green-400 mt-3">
            {protectedUsers.toLocaleString()}
          </h2>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">AI Accuracy</p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-3">
            {aiAccuracy}%
          </h2>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">ROI Generated</p>

          <h2 className="text-4xl font-bold text-yellow-400 mt-3">{roi}x</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Monthly Fraud Prevention
          </h2>

          <div className="space-y-5">
            {[
              { month: "January", amount: "₹1.2L", width: "20%" },
              { month: "February", amount: "₹2.8L", width: "40%" },
              { month: "March", amount: "₹4.1L", width: "60%" },
              { month: "April", amount: "₹6.5L", width: "80%" },
              { month: "May", amount: "₹10L", width: "100%" },
            ].map((item) => (
              <div key={item.month}>
                <div className="flex justify-between mb-2">
                  <span>{item.month}</span>

                  <span className="text-cyan-400">{item.amount}</span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-400 h-full rounded-full"
                    style={{
                      width: item.width,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Regional Risk Exposure
          </h2>

          <div className="space-y-4">
            {[
              { region: "India", risk: "HIGH" },
              { region: "China", risk: "HIGH" },
              { region: "United Kingdom", risk: "MEDIUM" },
              { region: "Singapore", risk: "MEDIUM" },
              { region: "Australia", risk: "LOW" },
            ].map((item) => (
              <div key={item.region} className="flex justify-between">
                <span>{item.region}</span>

                <span
                  className={
                    item.risk === "HIGH"
                      ? "text-red-400"
                      : item.risk === "MEDIUM"
                        ? "text-yellow-400"
                        : "text-green-400"
                  }
                >
                  {item.risk}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Executive Summary</h2>

        <p className="text-slate-300 leading-relaxed">
          TrustGuard AI prevented approximately
          <span className="text-orange-400 font-semibold"> ₹10,00,000</span> in
          fraudulent activity this month while maintaining
          <span className="text-cyan-400 font-semibold">
            {" "}
            98.4% AI detection accuracy
          </span>
          . The platform successfully blocked
          <span className="text-red-400 font-semibold">
            {" "}
            48 high-risk authentication attacks
          </span>{" "}
          and protected over
          <span className="text-green-400 font-semibold">
            {" "}
            12,456 identities
          </span>
          .
        </p>
      </div>
    </main>
  );
}

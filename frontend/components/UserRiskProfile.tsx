"use client";

interface Props {
  open: boolean;
  user: string | null;
  onClose: () => void;
}

export default function UserRiskProfile({ open, user, onClose }: Props) {
  if (!open || !user) return null;

  const userProfiles: Record<
    string,
    {
      trustScore: number;
      riskLevel: string;
      devices: string[];
      locations: string[];
      incidents: number;
      recommendation: string;
      fraudPrevented: string;
      takeoverProbability: number;
    }
  > = {
    "john.doe@company.com": {
      trustScore: 18,
      riskLevel: "CRITICAL",
      devices: ["Windows Laptop", "Android Phone"],
      locations: ["Ahmedabad", "London"],
      incidents: 6,
      recommendation: "IMMEDIATE ACCOUNT LOCKDOWN",
      fraudPrevented: "₹10,00,000",
      takeoverProbability: 94,
    },

    "alice@company.com": {
      trustScore: 68,
      riskLevel: "MEDIUM",
      devices: ["MacBook Pro", "iPhone 15"],
      locations: ["Mumbai", "Delhi"],
      incidents: 2,
      recommendation: "REQUIRE OTP VERIFICATION",
      fraudPrevented: "₹25,000",
      takeoverProbability: 42,
    },

    "mark@company.com": {
      trustScore: 24,
      riskLevel: "HIGH",
      devices: ["Windows Laptop"],
      locations: ["Beijing", "Singapore"],
      incidents: 5,
      recommendation: "BLOCK RECOVERY REQUEST",
      fraudPrevented: "₹8,50,000",
      takeoverProbability: 89,
    },

    "live-monitor@trustguard.ai": {
      trustScore: 42,
      riskLevel: "HIGH",
      devices: ["SOC Console"],
      locations: ["Ahmedabad", "London"],
      incidents: 8,
      recommendation: "SOC REVIEW REQUIRED",
      fraudPrevented: "₹6,50,000",
      takeoverProbability: 76,
    },

    "simulation@trustguard.ai": {
      trustScore: 55,
      riskLevel: "MEDIUM",
      devices: ["Simulation Node"],
      locations: ["Mumbai", "Bangalore"],
      incidents: 3,
      recommendation: "MONITOR ACTIVITY",
      fraudPrevented: "₹50,000",
      takeoverProbability: 51,
    },
  };

  const profile = userProfiles[user] || {
    trustScore: 50,
    riskLevel: "MEDIUM",
    devices: ["Unknown Device"],
    locations: ["Unknown"],
    incidents: 0,
    recommendation: "MANUAL REVIEW",
    fraudPrevented: "₹0",
    takeoverProbability: 50,
  };

  const trustColor =
    profile.trustScore <= 30
      ? "text-red-400"
      : profile.trustScore <= 70
        ? "text-yellow-400"
        : "text-green-400";

  const riskColor =
    profile.riskLevel === "CRITICAL"
      ? "text-red-500"
      : profile.riskLevel === "HIGH"
        ? "text-red-400"
        : profile.riskLevel === "MEDIUM"
          ? "text-yellow-400"
          : "text-green-400";

  return (
    <div
      className="
      fixed
      top-0
      left-0
      h-screen
      w-[450px]
      bg-slate-950
      border-r
      border-cyan-500/20
      z-50
      overflow-y-auto
      "
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-cyan-400">
            User Risk Profile
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-slate-400 text-sm">User</p>

            <h3 className="font-semibold mt-2">{user}</h3>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Trust Score</p>

            <h2 className={`text-5xl font-bold mt-2 ${trustColor}`}>
              {profile.trustScore}
            </h2>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Risk Level</p>

            <h3 className={`text-xl font-bold mt-2 ${riskColor}`}>
              {profile.riskLevel}
            </h3>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Account Takeover Probability
            </p>

            <h3 className="text-3xl font-bold text-cyan-400 mt-2">
              {profile.takeoverProbability}%
            </h3>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Fraud Prevented</p>

            <h3 className="text-3xl font-bold text-orange-400 mt-2">
              {profile.fraudPrevented}
            </h3>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h3 className="font-semibold mb-4">Known Devices</h3>

            <div className="space-y-2 text-sm">
              {profile.devices.map((device) => (
                <div key={device}>• {device}</div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h3 className="font-semibold mb-4">Recent Locations</h3>

            <div className="space-y-2 text-sm">
              {profile.locations.map((location) => (
                <div key={location}>{location}</div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h3 className="font-semibold mb-4">Previous Incidents</h3>

            <h2 className="text-4xl font-bold text-yellow-400">
              {profile.incidents}
            </h2>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h3 className="font-semibold mb-4 text-cyan-400">
              AI Recommendation
            </h3>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              {profile.recommendation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

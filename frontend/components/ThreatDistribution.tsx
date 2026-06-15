"use client";

interface Threat {
  id: string;
  severity: string;
  title: string;
  user: string;
  time: string;
}

interface Props {
  threats: Threat[];
}

export default function ThreatDistribution({ threats }: Props) {
  const locations = [
    {
      country: "India",
      attacks: 52,
      risk: "HIGH",
    },
    {
      country: "China",
      attacks: 34,
      risk: "HIGH",
    },
    {
      country: "Russia",
      attacks: 21,
      risk: "MEDIUM",
    },
    {
      country: "United Kingdom",
      attacks: 15,
      risk: "MEDIUM",
    },
    {
      country: "Singapore",
      attacks: 8,
      risk: "LOW",
    },
  ];

  const maxAttacks = Math.max(...locations.map((l) => l.attacks));

  return (
    <div
      className="
      bg-slate-900/80
      border
      border-cyan-500/20
      rounded-2xl
      p-6
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Global Threat Heatmap</h2>

        <div className="text-xs text-slate-400">Live Attack Sources</div>
      </div>

      <div className="space-y-5">
        {locations.map((location) => {
          const width = (location.attacks / maxAttacks) * 100;

          const barColor =
            location.risk === "HIGH"
              ? "bg-red-500"
              : location.risk === "MEDIUM"
                ? "bg-yellow-500"
                : "bg-green-500";

          const textColor =
            location.risk === "HIGH"
              ? "text-red-400"
              : location.risk === "MEDIUM"
                ? "text-yellow-400"
                : "text-green-400";

          return (
            <div key={location.country}>
              <div className="flex justify-between mb-2">
                <div>
                  <span className="font-medium">{location.country}</span>

                  <span className={`ml-3 text-xs ${textColor}`}>
                    {location.risk}
                  </span>
                </div>

                <span className="font-semibold">{location.attacks}</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`${barColor} h-3 rounded-full transition-all duration-1000`}
                  style={{
                    width: `${width}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
          <p className="text-sm text-slate-400">High Risk</p>

          <h3 className="text-2xl font-bold text-red-400">86</h3>
        </div>

        <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
          <p className="text-sm text-slate-400">Medium Risk</p>

          <h3 className="text-2xl font-bold text-yellow-400">36</h3>
        </div>

        <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
          <p className="text-sm text-slate-400">Low Risk</p>

          <h3 className="text-2xl font-bold text-green-400">8</h3>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500">
        Based on live threat telemetry from TrustGuard AI
      </div>
    </div>
  );
}

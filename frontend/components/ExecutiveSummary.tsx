"use client";

interface Props {
  threats: number;
  decision: string;
  trustScore: number;
  fraudPrevented: number;
}

export default function ExecutiveSummary({
  threats,
  decision,
  trustScore,
  fraudPrevented,
}: Props) {
  const systemStatus =
    trustScore >= 80 ? "SECURE" : trustScore >= 60 ? "MONITORING" : "AT RISK";

  const statusColor =
    trustScore >= 80
      ? "text-green-400"
      : trustScore >= 60
        ? "text-yellow-400"
        : "text-red-400";

  const formattedFraudPrevented = `₹${fraudPrevented.toLocaleString("en-IN")}`;

  return (
    <div
      className="
      bg-slate-900/80
      border
      border-cyan-500/20
      rounded-2xl
      p-6
      mb-8
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">AI Security Summary</h2>

        <div
          className={`
          font-semibold
          ${statusColor}
          `}
        >
          {systemStatus}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        <div>
          <p className="text-slate-400 text-sm">Active Threats</p>

          <h3 className="text-4xl font-bold text-red-400 mt-2">{threats}</h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">AI Decision</p>

          <h3 className="text-3xl font-bold text-cyan-400 mt-2">{decision}</h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Trust Score</p>

          <h3 className="text-4xl font-bold text-cyan-400 mt-2">
            {trustScore}
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Protected Users</p>

          <h3 className="text-4xl font-bold text-green-400 mt-2">112</h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Fraud Prevented</p>

          <h3 className="text-2xl font-bold text-orange-400 mt-2">
            {formattedFraudPrevented}
          </h3>
        </div>
      </div>
    </div>
  );
}

"use client";

import AICopilotChat from "@/components/AICopilotChat";

interface Props {
  decision: string;

  confidence: number;

  riskLevel: string;

  contributors: {
    name: string;
    score: number;
  }[];

  mitre: {
    id: string;
    technique: string;
  }[];

  threat?: string;
}

export default function AIExplainability({
  decision,
  confidence,
  riskLevel,
  contributors,
  mitre,
  threat,
}: Props) {
  const decisionColor =
    decision === "ALLOW"
      ? "text-green-400"
      : decision === "OTP REQUIRED"
        ? "text-yellow-400"
        : decision === "MANUAL REVIEW"
          ? "text-orange-400"
          : "text-red-400";

  const confidenceBarColor =
    decision === "BLOCK"
      ? "bg-red-500"
      : decision === "OTP REQUIRED"
        ? "bg-yellow-500"
        : decision === "MANUAL REVIEW"
          ? "bg-orange-500"
          : "bg-green-500";

  const aiAnalysis =
    threat === "Normal Login"
      ? {
          title: "Trusted Authentication",
          summary:
            "Trusted device recognized. Historical behavior matches known profile. Location consistency verified.",
          recommendation: "Allow user access without friction.",
        }
      : threat === "New Device Login"
        ? {
            title: "Device Anomaly Detected",
            summary:
              "New device fingerprint observed. User behavior remains mostly consistent but verification is recommended.",
            recommendation: "Challenge user with OTP verification.",
          }
        : threat === "Impossible Travel Detected"
          ? {
              title: "Account Takeover Risk",
              summary:
                "Travel velocity exceeds physical limits. Ahmedabad to London login detected within an impossible timeframe.",
              recommendation: "Block access and trigger investigation.",
            }
          : threat === "Recovery Fraud Attempt"
            ? {
                title: "Recovery Abuse Suspected",
                summary:
                  "Password recovery request combined with identity mismatch signals a potential account takeover attempt.",
                recommendation:
                  "Block recovery flow and escalate manual review.",
              }
            : {
                title: "AI Monitoring Active",
                summary:
                  "TrustGuard AI is continuously monitoring authentication events and behavioral patterns.",
                recommendation: "Continue monitoring user activity.",
              };

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
      <h2 className="text-2xl font-semibold mb-6">AI Decision Engine</h2>

      <div className="space-y-6">
        <div>
          <p className="text-slate-400 text-sm">Decision</p>

          <h3
            className={`
            text-4xl
            font-bold
            mt-2
            ${decisionColor}
            `}
          >
            {decision}
          </h3>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <p className="text-slate-400 text-sm">AI Confidence</p>

            <p className="text-cyan-400 font-semibold">{confidence}%</p>
          </div>

          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`
              h-full
              transition-all
              duration-700
              ${confidenceBarColor}
              `}
              style={{
                width: `${confidence}%`,
              }}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <h4 className="font-semibold mb-4">Risk Contributors</h4>

          <div className="space-y-3 text-sm">
            {contributors.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex justify-between"
              >
                <span>{item.name}</span>

                <span
                  className={
                    item.score >= 25 ? "text-red-400" : "text-yellow-400"
                  }
                >
                  {item.score > 0 ? "+" : ""}
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <h4 className="font-semibold mb-4">MITRE ATT&CK Mapping</h4>

          <div className="space-y-3 text-sm">
            {mitre.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.id}</span>

                <span className="text-cyan-400">{item.technique}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <h4 className="font-semibold mb-4 text-cyan-400">
            AI Security Copilot
          </h4>

          <div className="bg-slate-950/50 border border-cyan-500/10 rounded-xl p-4">
            <div className="mb-3">
              <p className="text-slate-400 text-sm">Analysis Type</p>

              <h5 className="font-semibold mt-1">{aiAnalysis.title}</h5>
            </div>

            <div className="mb-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {aiAnalysis.summary}
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-sm mb-1">Recommendation</p>

              <p className="text-cyan-400 font-medium">
                {aiAnalysis.recommendation}
              </p>
            </div>
          </div>
        </div>

        <AICopilotChat threat={threat} />

        <div className="pt-4 border-t border-slate-800">
          <h4 className="font-semibold mb-3">Current Risk Level</h4>

          <div
            className={`
  inline-flex
  px-4
  py-2
  rounded-lg
  font-semibold
  ${
    decision === "BLOCK"
      ? "bg-red-500/20 text-red-400"
      : decision === "OTP REQUIRED"
        ? "bg-yellow-500/20 text-yellow-400"
        : decision === "MANUAL REVIEW"
          ? "bg-orange-500/20 text-orange-400"
          : "bg-green-500/20 text-green-400"
  }
  `}
          >
            {decision}
          </div>
        </div>
      </div>
    </div>
  );
}

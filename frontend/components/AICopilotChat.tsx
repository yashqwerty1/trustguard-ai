"use client";

interface Props {
  threat?: string;
}

export default function AICopilotChat({ threat }: Props) {
  const getResponse = (question: string) => {
    if (question === "Why blocked?") {
      return "The login was blocked due to anomalous authentication behavior and elevated account takeover risk.";
    }

    if (question === "Explain risk score") {
      return "The risk score combines device trust, behavioral analytics, geolocation intelligence, and recovery signals.";
    }

    if (question === "MITRE mapping") {
      return "Mapped to MITRE ATT&CK T1078 (Valid Accounts) and related identity abuse techniques.";
    }

    if (question === "SOC recommendation") {
      return "Force password reset, revoke active sessions, and require MFA re-enrollment.";
    }

    return "TrustGuard AI continuously evaluates identity risk using adaptive trust scoring.";
  };

  const questions = [
    "Why blocked?",
    "Explain risk score",
    "MITRE mapping",
    "SOC recommendation",
  ];

  return (
    <div className="pt-4 border-t border-slate-800">
      <h4 className="font-semibold mb-4 text-cyan-400">
        TrustGuard AI Copilot
      </h4>

      <div className="grid grid-cols-2 gap-3">
        {questions.map((q) => (
          <div
            key={q}
            className="
            bg-slate-950/50
            border
            border-cyan-500/10
            rounded-xl
            p-3
            "
          >
            <p className="text-cyan-400 text-sm mb-2">{q}</p>

            <p className="text-xs text-slate-300">{getResponse(q)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

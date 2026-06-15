import Link from "next/link";
import Shield3D from "@/components/Shield3D";

const features = [
  {
    title: "Identity Trust Engine",
    description: "Continuous AI-powered trust scoring",
  },
  {
    title: "Impossible Travel Detection",
    description: "Detect geographically impossible logins",
  },
  {
    title: "Fraud Recovery Protection",
    description: "Prevent account takeover attacks",
  },
  {
    title: "MITRE ATT&CK Mapping",
    description: "Threat intelligence explainability",
  },
];

const scenarios = [
  {
    name: "Normal Login",
    decision: "ALLOW",
    color: "text-green-400",
  },
  {
    name: "New Device",
    decision: "OTP REQUIRED",
    color: "text-yellow-400",
  },
  {
    name: "Impossible Travel",
    decision: "BLOCK",
    color: "text-red-400",
  },
  {
    name: "Recovery Fraud",
    decision: "BLOCK",
    color: "text-red-400",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="hero-glow" />

      <section className="grid lg:grid-cols-2 min-h-screen items-center px-12 lg:px-20 relative z-10">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
            Built for Zero Trust Banking
          </div>

          <h1 className="text-7xl lg:text-8xl font-bold leading-tight">
            TrustGuard AI
          </h1>

          <p className="text-slate-300 text-2xl mt-8 max-w-2xl">
            Continuous Identity Trust Intelligence for Banking & Financial
            Services
          </p>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl">
            AI-powered behavioral analytics, impossible travel detection,
            continuous authentication, fraud prevention, and real-time identity
            trust scoring.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <Link
              href="/auth"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold"
            >
              Launch Security Center
            </Link>

            <a
              href="#scenarios"
              className="border border-cyan-500/30 px-8 py-4 rounded-xl"
            >
              View Demo Scenarios
            </a>
          </div>
        </div>

        <div className="floating">
          <Shield3D riskLevel="LOW" />
        </div>
      </section>

      <section className="px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            ["92", "Trust Score"],
            ["12", "Threats"],
            ["98%", "AI Accuracy"],
            ["4", "MITRE Mapped"],
            ["24/7", "AI Monitoring"],
            ["112", "Protected Users"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-slate-900/70 border border-cyan-500/20 rounded-xl p-5 text-center"
            >
              <h3 className="text-3xl font-bold text-cyan-400">{value}</h3>
              <p className="text-slate-400 text-sm mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 lg:px-20 pb-24">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Core Capabilities
        </h2>

        <div className="grid lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900/70 border border-cyan-500/20 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 lg:px-20 pb-24">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Trust Decision Flow
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center">
          <div>Login Attempt</div>
          <div>↓</div>
          <div>Risk Analysis</div>
          <div>↓</div>
          <div>AI Decision Engine</div>
          <div>↓</div>
          <div className="text-cyan-400 font-bold">ALLOW / OTP / BLOCK</div>
        </div>
      </section>

      <section id="scenarios" className="px-12 lg:px-20 pb-24">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Attack Simulation Scenarios
        </h2>

        <div className="grid lg:grid-cols-4 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.name}
              className="bg-slate-900/70 border border-cyan-500/20 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{scenario.name}</h3>

              <p className={`font-bold text-2xl ${scenario.color}`}>
                {scenario.decision}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-cyan-500/20 py-10 text-center text-slate-400">
        TrustGuard AI • Continuous Identity Trust Framework • Hackathon 2026
      </footer>
    </main>
  );
}

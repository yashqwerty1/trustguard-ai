"use client";

import { useEffect, useState } from "react";

import API from "@/lib/api";

import TrustScoreHistory from "@/components/TrustScoreHistory";
import ThreatDistribution from "@/components/ThreatDistribution";
import Shield3D from "@/components/Shield3D";
import ThreatPanel from "@/components/ThreatPanel";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import GlobalRiskMap from "@/components/GlobalRiskMap";
import StatCard from "@/components/StatCard";
import AttackSimulator from "@/components/AttackSimulator";
import AIExplainability from "@/components/AIExplainability";
import IncidentDrawer from "@/components/IncidentDrawer";
import UserRiskProfile from "@/components/UserRiskProfile";

interface DashboardData {
  trust_score: number;
  decision: string;
  risk_level: string;
  active_threats: number;
  trusted_devices: number;
}

interface Threat {
  id: string;
  severity: string;
  title: string;
  user: string;
  time: string;
}

interface ScenarioData {
  trustScore: number;
  decision: string;
  riskLevel: string;
  threat: string;

  confidence: number;

  contributors: {
    name: string;
    score: number;
  }[];

  mitre: {
    id: string;
    technique: string;
  }[];

  history: number[];

  globeData: GlobeData;
}
interface GlobeData {
  origin: string;
  destination: string;

  travelTime: string;
  expectedTime: string;

  riskScore: number;
  decision: string;

  startLat: number;
  startLng: number;

  endLat: number;
  endLng: number;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  const [trustScore, setTrustScore] = useState(92);
  const [displayScore, setDisplayScore] = useState(92);

  const [decision, setDecision] = useState("ALLOW");
  const [riskLevel, setRiskLevel] = useState("LOW");
  const [confidence, setConfidence] = useState(98);
  const [fraudPrevented, setFraudPrevented] = useState(850000);

  const [contributors, setContributors] = useState<
    {
      name: string;
      score: number;
    }[]
  >([
    {
      name: "Trusted Device",
      score: 10,
    },
  ]);

  const [mitreTechniques, setMitreTechniques] = useState<
    {
      id: string;
      technique: string;
    }[]
  >([
    {
      id: "T1078",
      technique: "Valid Accounts",
    },
  ]);

  const [trustScoreHistory, setTrustScoreHistory] = useState([
    96, 94, 90, 76, 32,
  ]);
  const [globeData, setGlobeData] = useState<GlobeData>({
    origin: "Ahmedabad",
    destination: "London",

    travelTime: "2h",
    expectedTime: "9h",

    riskScore: 98,
    decision: "BLOCK",

    startLat: 23.0225,
    startLng: 72.5714,

    endLat: 51.5074,
    endLng: -0.1278,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedThreat, setSelectedThreat] = useState<Threat | null>(null);

  const [profileOpen, setProfileOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const [alert, setAlert] = useState<Threat | null>(null);

  const [threats, setThreats] = useState<Threat[]>([
    {
      id: crypto.randomUUID(),
      severity: "HIGH",
      title: "Impossible Travel Detected",
      user: "john.doe@company.com",
      time: "2 min ago",
    },

    {
      id: crypto.randomUUID(),
      severity: "MEDIUM",
      title: "New Device Login",
      user: "alice@company.com",
      time: "5 min ago",
    },

    {
      id: crypto.randomUUID(),
      severity: "HIGH",
      title: "Recovery Fraud Attempt",
      user: "mark@company.com",
      time: "11 min ago",
    },
  ]);

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => {
        setData(res.data);

        setTrustScore(res.data.trust_score);
        setDisplayScore(res.data.trust_score);

        setDecision(res.data.decision);
        setRiskLevel(res.data.risk_level);
        setConfidence(98);

        setContributors([
          {
            name: "Trusted Device",
            score: 10,
          },
        ]);

        setMitreTechniques([
          {
            id: "T1078",
            technique: "Valid Accounts",
          },
        ]);

        setTrustScoreHistory([96, 94, 90, 76, 32]);
      })
      .catch(() => {
        console.log("Backend unavailable");
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayScore((current) => {
        if (current === trustScore) return current;

        if (current < trustScore) {
          return current + 1;
        }

        return current - 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [trustScore]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomThreats = [
        {
          severity: "HIGH",
          title: "Impossible Travel Detected",
        },
        {
          severity: "MEDIUM",
          title: "New Device Login",
        },
        {
          severity: "HIGH",
          title: "Password Spray Attempt",
        },
        {
          severity: "LOW",
          title: "VPN Change",
        },
        {
          severity: "HIGH",
          title: "Recovery Fraud Attempt",
        },
      ];

      const random =
        randomThreats[Math.floor(Math.random() * randomThreats.length)];

      const newThreat = {
        id: crypto.randomUUID(),
        severity: random.severity,
        title: random.title,
        user: "live-monitor@trustguard.ai",
        time: "Just now",
      };

      setThreats((prev) => [newThreat, ...prev.slice(0, 9)]);

      setAlert(newThreat);

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const handleScenarioChange = (scenario: ScenarioData) => {
    setTrustScore(scenario.trustScore);

    setDecision(scenario.decision);

    setRiskLevel(scenario.riskLevel);

    setConfidence(scenario.confidence);

    setContributors(scenario.contributors);

    setMitreTechniques(scenario.mitre);

    setTrustScoreHistory(scenario.history);

    setGlobeData(scenario.globeData);

    if (scenario.threat === "Normal Login") {
      setFraudPrevented(0);
    }

    if (scenario.threat === "New Device Login") {
      setFraudPrevented(25000);
    }

    if (scenario.threat === "Impossible Travel Detected") {
      setFraudPrevented(850000);
    }

    if (scenario.threat === "Recovery Fraud Attempt") {
      setFraudPrevented(1000000);
    }

    const newThreat = {
      id: crypto.randomUUID(),

      severity:
        scenario.riskLevel === "HIGH"
          ? "HIGH"
          : scenario.riskLevel === "MEDIUM"
            ? "MEDIUM"
            : "LOW",

      title: scenario.threat,

      user: "simulation@trustguard.ai",

      time: "Just now",
    };

    setThreats((prev) => [newThreat, ...prev.slice(0, 9)]);

    setAlert(newThreat);

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const handleThreatClick = (threat: Threat) => {
    setSelectedThreat(threat);

    setDrawerOpen(true);
  };

  const handleUserClick = (user: string) => {
    setSelectedUser(user);

    setProfileOpen(true);
  };

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Security Center...
      </div>
    );

  return (
    <>
      {alert && (
        <div
          className="
        fixed
        top-6
        right-6
        z-[9999]
        animate-pulse
        "
        >
          <div
            className={`
          min-w-[350px]
          rounded-xl
          border
          shadow-2xl
          p-5
          backdrop-blur-lg
          ${
            alert.severity === "HIGH"
              ? "bg-red-500/10 border-red-500/40"
              : alert.severity === "MEDIUM"
                ? "bg-yellow-500/10 border-yellow-500/40"
                : "bg-green-500/10 border-green-500/40"
          }
          `}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">
                {alert.severity === "HIGH"
                  ? "🚨"
                  : alert.severity === "MEDIUM"
                    ? "⚠️"
                    : "✅"}
              </div>

              <div>
                <h3 className="font-bold text-lg">{alert.title}</h3>

                <p className="text-sm text-slate-300">{alert.user}</p>

                <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="min-h-screen p-10">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-6">
            Security Operations Center
          </h1>
          <ExecutiveSummary
            threats={threats.length}
            decision={decision}
            trustScore={displayScore}
            fraudPrevented={fraudPrevented}
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <StatCard title="AI Decision" value={decision} />

          <StatCard title="Risk Level" value={riskLevel} />

          <StatCard title="Threats" value={threats.length} />

          <StatCard title="Devices" value={data.trusted_devices} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <div
            className="
            bg-slate-900/60
            border
            border-cyan-500/20
            rounded-2xl
            p-4
            "
          >
            <h2 className="mb-1 text-xl font-semibold">Identity Trust Core</h2>

            <p className="text-slate-400 text-sm mb-2">
              Continuous AI-driven identity validation
            </p>

            <Shield3D riskLevel={riskLevel} />

            <div className="mt-4 text-center">
              <p className="text-slate-400 text-sm">Identity Trust Score</p>

              <h2 className="text-6xl font-bold text-cyan-400 mt-2">
                {displayScore}
              </h2>
            </div>
          </div>

          <GlobalRiskMap globeData={globeData} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <AttackSimulator onScenarioChange={handleScenarioChange} />

          <AIExplainability
            decision={decision}
            confidence={confidence}
            riskLevel={riskLevel}
            contributors={contributors}
            mitre={mitreTechniques}
            threat={threats[0]?.title}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <TrustScoreHistory history={trustScoreHistory} />

          <ThreatDistribution threats={threats} />
        </div>

        <div className="mt-8">
          <ThreatPanel
            threats={threats}
            onSelectThreat={handleThreatClick}
            onSelectUser={handleUserClick}
          />
        </div>
      </main>

      <UserRiskProfile
        open={profileOpen}
        user={selectedUser}
        onClose={() => setProfileOpen(false)}
      />

      <IncidentDrawer
        open={drawerOpen}
        threat={selectedThreat}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}

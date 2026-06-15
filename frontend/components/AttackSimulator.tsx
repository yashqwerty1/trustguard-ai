"use client";

import { useState, useEffect } from "react";

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

  globeData: {
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
  };
}

interface Props {
  onScenarioChange: (data: ScenarioData) => void;
}

export default function AttackSimulator({ onScenarioChange }: Props) {
  const scenarios = {
    normal: {
      trustScore: 92,
      decision: "ALLOW",
      riskLevel: "LOW",
      threat: "Normal Login",
      confidence: 98,

      riskScore: 20,
      fraudPrevented: "₹0",
      responseTime: "0.2s",

      timeline: [
        "08:01 Login from Mumbai",
        "08:02 Device Verified",
        "08:03 Location Verified",
        "08:03 Access Allowed",
      ],

      notes: [
        "Trusted device recognized",
        "Known geolocation",
        "Behavior profile matched",
        "No suspicious indicators",
      ],

      actions: ["Allow Access", "Continue Monitoring"],

      contributors: [
        { name: "Trusted Device", score: -10 },
        { name: "Known Location", score: -8 },
      ],

      mitre: [
        {
          id: "T1078",
          technique: "Valid Accounts",
        },
      ],

      history: [96, 94, 93, 92, 92],

      globeData: {
        origin: "Mumbai",
        destination: "Delhi",

        travelTime: "2h",
        expectedTime: "2h",

        riskScore: 20,
        decision: "ALLOW",

        startLat: 19.076,
        startLng: 72.8777,

        endLat: 28.6139,
        endLng: 77.209,
      },
    },

    device: {
      trustScore: 68,
      decision: "OTP REQUIRED",
      riskLevel: "MEDIUM",
      threat: "New Device Login",

      confidence: 84,

      riskScore: 58,
      fraudPrevented: "₹25,000",
      responseTime: "0.5s",

      timeline: [
        "09:01 Login Attempt",
        "09:02 New Device Detected",
        "09:03 Fingerprint Mismatch",
        "09:03 OTP Requested",
      ],

      notes: [
        "New device detected",
        "Fingerprint mismatch",
        "Location verified",
        "OTP challenge recommended",
      ],

      actions: ["Require OTP", "Notify User"],

      contributors: [
        {
          name: "New Device",
          score: 20,
        },
        {
          name: "Device Fingerprint Mismatch",
          score: 18,
        },
      ],

      mitre: [
        {
          id: "T1078",
          technique: "Valid Accounts",
        },
        {
          id: "T1110",
          technique: "Credential Access",
        },
      ],

      history: [96, 92, 88, 80, 68],

      globeData: {
        origin: "Mumbai",
        destination: "Bangalore",

        travelTime: "1.5h",
        expectedTime: "1.5h",

        riskScore: 58,
        decision: "OTP REQUIRED",

        startLat: 19.076,
        startLng: 72.8777,

        endLat: 12.9716,
        endLng: 77.5946,
      },
    },

    travel: {
      trustScore: 32,
      decision: "BLOCK",
      riskLevel: "HIGH",
      threat: "Impossible Travel Detected",

      confidence: 99,

      riskScore: 98,
      fraudPrevented: "₹8,50,000",
      responseTime: "0.4s",

      timeline: [
        "08:01 Login from Ahmedabad",
        "09:12 Device Change Detected",
        "10:07 Login from London",
        "10:07 AI Risk Triggered",
        "10:07 Access Blocked",
      ],

      notes: [
        "Impossible travel detected",
        "Behavior anomaly detected",
        "New device observed",
        "Account takeover suspected",
      ],

      actions: [
        "Block Login",
        "Reset Password",
        "Require MFA",
        "Open Investigation",
      ],

      contributors: [
        {
          name: "Impossible Travel",
          score: 35,
        },
        {
          name: "Behavioral Anomaly",
          score: 22,
        },
      ],

      mitre: [
        {
          id: "T1078",
          technique: "Valid Accounts",
        },
        {
          id: "T1098",
          technique: "Account Manipulation",
        },
      ],

      history: [98, 94, 90, 76, 32],

      globeData: {
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
      },
    },

    recovery: {
      trustScore: 40,
      decision: "MANUAL REVIEW",
      riskLevel: "HIGH",
      threat: "Recovery Fraud Attempt",

      confidence: 91,

      riskScore: 91,
      fraudPrevented: "₹10,00,000",
      responseTime: "0.3s",

      timeline: [
        "07:40 Recovery Requested",
        "07:41 Identity Mismatch",
        "07:42 Recovery Fraud Detected",
        "07:43 Manual Review Triggered",
      ],

      notes: [
        "Recovery fraud detected",
        "Identity mismatch",
        "Suspicious recovery flow",
        "Privilege escalation risk",
      ],

      actions: [
        "Manual Review",
        "Suspend Recovery",
        "Force Password Reset",
        "Notify SOC",
      ],

      contributors: [
        {
          name: "Recovery Fraud",
          score: 28,
        },
        {
          name: "Identity Mismatch",
          score: 20,
        },
      ],

      mitre: [
        {
          id: "T1110",
          technique: "Credential Access",
        },
        {
          id: "T1098",
          technique: "Account Manipulation",
        },
      ],

      history: [95, 90, 84, 62, 40],

      globeData: {
        origin: "Beijing",
        destination: "Singapore",

        travelTime: "1h",
        expectedTime: "6h",

        riskScore: 91,
        decision: "MANUAL REVIEW",

        startLat: 39.9042,
        startLng: 116.4074,

        endLat: 1.3521,
        endLng: 103.8198,
      },
    },
  };

  const [activeScenario, setActiveScenario] = useState<
    "normal" | "device" | "travel" | "recovery"
  >("normal");

  const current = scenarios[activeScenario as keyof typeof scenarios];

  useEffect(() => {
    onScenarioChange(scenarios.normal);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-slate-900/60 border border-cyan-500/20 rounded-2xl p-6">
      <h2 className="text-2xl mb-6">Attack Simulator</h2>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => {
            setActiveScenario("normal");
            onScenarioChange(scenarios.normal);
          }}
          className={`p-3 rounded ${
            activeScenario === "normal"
              ? "bg-cyan-500"
              : "bg-cyan-600 hover:bg-cyan-500"
          }`}
        >
          Normal Login
        </button>

        <button
          onClick={() => {
            setActiveScenario("device");
            onScenarioChange(scenarios.device);
          }}
          className={`p-3 rounded ${
            activeScenario === "device"
              ? "bg-yellow-500"
              : "bg-cyan-600 hover:bg-cyan-500"
          }`}
        >
          New Device
        </button>

        <button
          onClick={() => {
            setActiveScenario("travel");
            onScenarioChange(scenarios.travel);
          }}
          className={`p-3 rounded ${
            activeScenario === "travel"
              ? "bg-red-500"
              : "bg-red-600 hover:bg-red-500"
          }`}
        >
          Impossible Travel
        </button>

        <button
          onClick={() => {
            setActiveScenario("recovery");
            onScenarioChange(scenarios.recovery);
          }}
          className={`p-3 rounded ${
            activeScenario === "recovery"
              ? "bg-orange-500"
              : "bg-orange-600 hover:bg-orange-500"
          }`}
        >
          Recovery Fraud
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Attack Replay Timeline</h3>

        <div className="space-y-3 text-sm">
          {current.timeline.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 pt-5 mt-6">
        <h3 className="font-semibold mb-4">Scenario Impact Analysis</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-slate-400 text-xs">Risk Score</p>
            <p className="text-red-400 text-xl font-bold">
              {current.riskScore}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Fraud Prevented</p>
            <p className="text-orange-400 text-xl font-bold">
              {current.fraudPrevented}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">AI Confidence</p>
            <p className="text-cyan-400 text-xl font-bold">
              {current.confidence}%
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Response Time</p>
            <p className="text-green-400 text-xl font-bold">
              {current.responseTime}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-5 mt-5">
        <h3 className="font-semibold mb-4">AI Investigation Notes</h3>

        <div className="space-y-2 text-sm">
          {current.notes.map((note) => (
            <div key={note} className="text-cyan-400">
              ✓ {note}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 pt-5 mt-5">
        <h3 className="font-semibold mb-4">Recommended Actions</h3>

        <div className="grid grid-cols-2 gap-3">
          {current.actions.map((action) => (
            <button
              key={action}
              className="
              bg-cyan-500/10
              border
              border-cyan-500/20
              rounded-lg
              py-2
              text-sm
              hover:bg-cyan-500/20
              transition
              "
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

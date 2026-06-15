"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { GlobeMethods } from "react-globe.gl";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

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

interface Props {
  globeData: GlobeData;
}

export default function GlobalRiskMap({ globeData }: Props) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  const [size, setSize] = useState({
    width: 580,
    height: 400,
  });

  const arcsData = [
    {
      startLat: globeData.startLat,
      startLng: globeData.startLng,

      endLat: globeData.endLat,
      endLng: globeData.endLng,

      color: ["#22d3ee", "#ef4444"],
    },
  ];

  const pointsData = [
    {
      lat: globeData.startLat,
      lng: globeData.startLng,

      label: globeData.origin,

      color: "#22d3ee",
    },

    {
      lat: globeData.endLat,
      lng: globeData.endLng,

      label: globeData.destination,

      color: "#ef4444",
    },
  ];

  const riskColor =
    globeData.riskScore >= 80
      ? "text-red-400"
      : globeData.riskScore >= 50
        ? "text-yellow-400"
        : "text-green-400";

  const decisionColor =
    globeData.decision === "BLOCK"
      ? "text-red-400"
      : globeData.decision === "OTP REQUIRED"
        ? "text-yellow-400"
        : globeData.decision === "MANUAL REVIEW"
          ? "text-orange-400"
          : "text-green-400";

  const decisionBackground =
    globeData.decision === "BLOCK"
      ? "bg-red-500/10 border-red-500/40"
      : globeData.decision === "OTP REQUIRED"
        ? "bg-yellow-500/10 border-yellow-500/40"
        : globeData.decision === "MANUAL REVIEW"
          ? "bg-orange-500/10 border-orange-500/40"
          : "bg-green-500/10 border-green-500/40";

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: Math.min(window.innerWidth * 0.28, 580),
        height: 400,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const globe = globeRef.current;

      if (!globe) return;

      globe.pointOfView(
        {
          lat: 38,
          lng: 30,
          altitude: 1.7,
        },
        1500,
      );

      const controls = globe.controls();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.15;

      controls.enableZoom = false;
      controls.enablePan = false;
    }, 500);

    return () => clearTimeout(timer);
  }, [globeData]);

  return (
    <div
      className="
      bg-slate-900/60
      border
      border-cyan-500/20
      rounded-2xl
      p-6
      min-h-[650px]
      flex
      flex-col
      "
    >
      <h2 className="text-4xl font-bold">Global Risk Intelligence</h2>

      <div className="mb-4">
        <p className="text-slate-400">AI-Powered Travel Risk Analysis</p>

        <p className="text-xs text-cyan-400 mt-1">
          {globeData.origin} → {globeData.destination}
        </p>
      </div>

      <div
        className="
        h-[430px]
        rounded-xl
        overflow-hidden
        border
        border-cyan-500/10
        bg-slate-950/30
        flex
        items-center
        justify-center
        "
      >
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#22d3ee"
          atmosphereAltitude={0.22}
          showAtmosphere
          arcsData={arcsData}
          arcColor={"color"}
          arcStroke={1.8}
          arcAltitude={0.28}
          arcDashLength={0.4}
          arcDashGap={0.1}
          arcDashAnimateTime={1800}
          pointsData={pointsData}
          pointColor={"color"}
          pointAltitude={0.06}
          pointRadius={0.4}
          labelsData={pointsData}
          labelLat={"lat"}
          labelLng={"lng"}
          labelText={"label"}
          labelColor={() => "#ffffff"}
          labelSize={1.2}
          labelDotRadius={0.25}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-slate-950/60 border border-cyan-500/20 rounded-xl p-5">
          <p className="text-slate-400 text-sm mb-2">Travel Time</p>

          <h3 className="text-red-400 text-4xl font-bold">
            {globeData.travelTime}
          </h3>
        </div>

        <div className="bg-slate-950/60 border border-cyan-500/20 rounded-xl p-5">
          <p className="text-slate-400 text-sm mb-2">Expected Time</p>

          <h3 className="text-cyan-400 text-4xl font-bold">
            {globeData.expectedTime}
          </h3>
        </div>

        <div className="bg-slate-950/60 border border-cyan-500/20 rounded-xl p-5">
          <p className="text-slate-400 text-sm mb-2">Risk Score</p>

          <h3 className={`text-4xl font-bold ${riskColor}`}>
            {globeData.riskScore}
          </h3>
        </div>

        <div className={`border rounded-xl p-5 ${decisionBackground}`}>
          <p className="text-slate-300 text-sm mb-2">AI Decision</p>

          <h3
            className={`
    text-xl
    lg:text-2xl
    font-bold
    whitespace-normal
    ${decisionColor}
  `}
          >
            {globeData.decision}
          </h3>
        </div>
      </div>
    </div>
  );
}

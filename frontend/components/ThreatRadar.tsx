"use client";

import { motion } from "framer-motion";

const threats = [
  {
    x: "70%",
    y: "35%",
    color: "bg-red-500",
    label: "ATO",
  },
  {
    x: "30%",
    y: "65%",
    color: "bg-yellow-400",
    label: "Device",
  },
  {
    x: "55%",
    y: "75%",
    color: "bg-orange-500",
    label: "Recovery",
  },
  {
    x: "80%",
    y: "60%",
    color: "bg-red-400",
    label: "Anomaly",
  },
];

export default function ThreatRadar() {
  return (
    <div
      className="
      relative
      w-[450px]
      h-[450px]
      mx-auto
      rounded-full
      overflow-hidden
      "
    >
      {/* OUTER RINGS */}

      <div className="absolute inset-0 rounded-full border border-cyan-500/40" />
      <div className="absolute inset-10 rounded-full border border-cyan-500/30" />
      <div className="absolute inset-20 rounded-full border border-cyan-500/20" />
      <div className="absolute inset-32 rounded-full border border-cyan-500/10" />

      {/* CROSS GRID */}

      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/20" />

      <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-500/20" />

      {/* RADAR SWEEP */}

      <motion.div
        className="
  absolute
  left-1/2
  top-1/2
  w-[2px]
  h-[220px]
  -translate-x-1/2
  -translate-y-full
  origin-bottom
  "
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      >
        <div
          className="
          w-full
  h-full
  bg-gradient-to-t
  from-cyan-400
  via-cyan-300
  to-transparent
  shadow-[0_0_40px_#22d3ee]
          "
        />
      </motion.div>

      {/* THREAT POINTS */}

      {threats.map((threat, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: threat.x,
            top: threat.y,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.6, 1],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className={`
              w-4
              h-4
              rounded-full
              ${threat.color}
              shadow-lg
            `}
          />

          <span
            className="
            absolute
            left-5
            -top-1
            text-xs
            text-cyan-300
            whitespace-nowrap
            "
          >
            {threat.label}
          </span>
        </div>
      ))}

      {/* CENTER CORE */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-6
        h-6
        rounded-full
        bg-cyan-400
        shadow-[0_0_25px_#22d3ee]
        "
      />

      {/* SCANNING GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        inset-0
        rounded-full
        bg-cyan-500/5
        blur-3xl
        "
      />
    </div>
  );
}

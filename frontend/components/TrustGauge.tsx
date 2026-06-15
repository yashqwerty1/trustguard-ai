"use client";

export default function TrustGauge({ score }: { score: number }) {
  return (
    <div
      className="
      relative
      w-72
      h-72
      rounded-full
      border-8
      border-cyan-500
      flex
      items-center
      justify-center
      shadow-[0_0_60px_rgba(34,211,238,0.4)]
      "
    >
      <div className="text-center">
        <h1
          className="
          text-6xl
          font-bold
          text-cyan-400
          "
        >
          {score}
        </h1>

        <p className="text-slate-400">Trust Score</p>
      </div>
    </div>
  );
}

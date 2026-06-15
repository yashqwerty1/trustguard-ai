"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Props {
  history: number[];
}

export default function TrustScoreHistory({ history }: Props) {
  const chartData = history.map((score, index) => ({
    time: `${8 + index}:00`,
    score,
  }));

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
      <h2 className="text-xl font-semibold mb-6">Trust Score History</h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

"use client";

interface Threat {
  id: string;
  severity: string;
  title: string;
  user: string;
  time: string;
}

interface Props {
  threats?: Threat[];
  onSelectThreat?: (threat: Threat) => void;
  onSelectUser?: (user: string) => void;
}

export default function ThreatPanel({
  threats = [],
  onSelectThreat = () => {},
  onSelectUser = () => {},
}: Props) {
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
      <h2 className="text-xl font-semibold mb-5">Live Threat Feed</h2>

      <div className="space-y-4">
        {threats.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelectThreat(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSelectThreat(item);
              }
            }}
            className="
            w-full
            text-left
            border
            border-slate-800
            rounded-xl
            p-4
            bg-slate-950/40
            hover:border-cyan-500/30
            hover:bg-slate-950/60
            transition
            cursor-pointer
            "
          >
            <div className="flex justify-between">
              <span
                className={`
                px-2
                py-1
                rounded
                text-xs
                ${
                  item.severity === "HIGH"
                    ? "bg-red-500/20 text-red-400"
                    : item.severity === "MEDIUM"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                }
                `}
              >
                {item.severity}
              </span>

              <span className="text-slate-500 text-xs">{item.time}</span>
            </div>

            <h3 className="mt-3 font-semibold">{item.title}</h3>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectUser(item.user);
              }}
              className="
              text-cyan-400
              text-sm
              mt-1
              hover:underline
              "
            >
              {item.user}
            </button>
          </div>
        ))}
      </div>

      {threats.length === 0 && (
        <div
          className="
          text-center
          text-slate-500
          py-8
          "
        >
          No active threats detected.
        </div>
      )}
    </div>
  );
}

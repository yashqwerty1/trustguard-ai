interface Props {
  title: string;
  value: string | number;
}

export default function StatCard({ title, value }: Props) {
  const isDecision = title === "AI Decision";

  return (
    <div
      className="
      bg-slate-900/80
      backdrop-blur
      border
      border-cyan-500/20
      rounded-2xl
      p-6
      shadow-lg
      hover:border-cyan-400/50
      transition-all
      duration-300
      "
    >
      <p className="text-slate-400 mb-3">{title}</p>

      {isDecision ? (
        <div>
          <span
            className={`
              px-4
              py-2
              rounded-xl
              font-bold
              text-xl
              ${
                value === "ALLOW"
                  ? "bg-green-500/20 text-green-400"
                  : value === "VERIFY"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
              }
            `}
          >
            {value}
          </span>
        </div>
      ) : (
        <h2
          className="
          text-4xl
          font-bold
          text-cyan-400
          mt-2
          "
        >
          {value}
        </h2>
      )}
    </div>
  );
}

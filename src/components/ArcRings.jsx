// ArcRings.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/** same hook for counting */
function useCount(end = 0, duration = 1200) {
  const [value, setValue] = React.useState(0);
  const rafRef = React.useRef(null);

  React.useEffect(() => {
    let start = null;
    const startVal = 0;
    const change = end - startVal;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + change * eased);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  return value;
}

export default function ArcRings({
  stats = [
    { end: 120, label: "Banks & NBFCs", suffix: "+" },
    { end: 5000, label: "Loans Processed", suffix: "+" },
    { end: 85, label: "Avg NPS", suffix: "%" },
    // removed the last one (outer circle)
  ],
}) {
  const max = useMemo(() => Math.max(...stats.map((s) => s.end)), [stats]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % stats.length), 3000);
    return () => clearInterval(t);
  }, [stats.length]);

  const activeValue = useCount(stats[active].end, 1300);

  const centerSize = 300;
  const cx = centerSize / 2;
  const cy = cx;

  return (
    <div className="flex justify-center items-center py-10 sm:-mt-30">
      <div className="relative">
        <svg
          width={centerSize}
          height={centerSize}
          viewBox={`0 0 ${centerSize} ${centerSize}`}
        >
          {stats.map((s, i) => {
            // only 3 rings: radii 70, 98, 126
            const r = 70 + i * 28;
            const circumference = 2 * Math.PI * r;
            const fraction = Math.min(s.end / max, 1);
            const finalOffset = circumference * (1 - fraction);

            return (
              <motion.g
                key={`${active}-${i}`}
                transform={`rotate(-90 ${cx} ${cy})`}
                initial={{ rotate: -90 }}
                animate={{ rotate: 270 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* gray background circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  stroke="#eef3f7"
                  strokeWidth="12"
                  fill="none"
                />
                {/* animated progress arc */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                  stroke={`url(#grad${i})`}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: finalOffset }}
                  transition={{ duration: 1.6 + i * 0.2, ease: "easeOut" }}
                  style={{ strokeDasharray: circumference }}
                />
                <defs>
                  <linearGradient
                    id={`grad${i}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#0E8299" />
                    <stop offset="100%" stopColor="#FFD35B" />
                  </linearGradient>
                </defs>
              </motion.g>
            );
          })}
        </svg>

        {/* center collapsing text */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500"
          >
            Live Metric
          </motion.div>
          <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
            {activeValue}
            <span className="ml-1 text-base text-gray-600">
              {stats[active].suffix || ""}
            </span>
          </div>
          <div className="text-xs md:text-sm text-gray-500 mt-1">
            {stats[active].label}
          </div>
        </motion.div>

        {/* clickable labels */}
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex gap-3 flex-wrap justify-center">
          {stats.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                i === active ? "bg-[#0E8299] text-white" : "bg-white border"
              } shadow-sm`}
            >
              {s.label.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// WheelSpinner.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/** small hook to animate counting (no external lib) */
function useCount(end = 0, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const startVal = 0;
    const change = end - startVal;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
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

function StatBadge({ end, suffix = "", label }) {
  const val = useCount(end, 1400);
  return (
    <div className="min-w-[110px] text-center">
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {val}
        <span className="ml-1 text-lg font-medium text-gray-700">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function WheelSpinner({
  stats = [
    { end: 120, suffix: "+", label: "Banks & NBFCs" },
    { end: 5000, suffix: "+", label: "Loans Processed" },
    { end: 85, suffix: "%", label: "Avg NPS" },
    { end: 24, suffix: "h", label: "Avg Disbursal Time" },
  ],
}) {
  const [speed, setSpeed] = useState(12); // seconds per revolution
  const size = 320;
  const radius = 120;
  const n = stats.length;

  return (
    <div className="flex justify-center items-center py-8">
      <style>
        {`@keyframes spinner-rot { to { transform: rotate(360deg); } }`}
      </style>

      <div
        className="relative"
        style={{ width: size, height: size }}
        onMouseEnter={() => setSpeed(30)}
        onMouseLeave={() => setSpeed(12)}
        aria-label="Statistics wheel"
      >
        {/* rotating wheel */}
        <motion.div
          className="absolute inset-0 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-white to-slate-50"
          style={{
            animation: `spinner-rot ${speed}s linear infinite`,
            transformOrigin: "50% 50%",
          }}
        >
          {/* Center badge */}
          <div className="absolute w-28 h-28 rounded-full bg-white/90 border border-gray-100 flex flex-col items-center justify-center shadow">
            <div className="text-sm text-gray-500">Trusted by</div>
            <div className="text-xs text-gray-700 font-semibold mt-1">Banks & NBFCs</div>
          </div>

          {/* spokes / badges */}
          {stats.map((s, i) => {
            const angle = (360 / n) * i;
            const transform = `rotate(${angle}deg) translate(0, -${radius}px) rotate(-${angle}deg)`;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform }}
              >
                <div className="bg-white px-4 py-3 rounded-xl shadow-md min-w-[120px] text-center">
                  <StatBadge {...s} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* decorative outer ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -6px 20px rgba(14,130,153,0.05)",
            border: "1px solid rgba(14,130,153,0.06)",
          }}
        />
      </div>
    </div>
  );
}

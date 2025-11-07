// ArcRings.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/** counting hook */
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
    { end: 720, label: "Phone Calls", suffix: "M" },
    { end: 54,  label: "Social Media Interactions", suffix: "M" },
    { end: 200, label: "Visits Annually", suffix: "M" },
  ],
}) {
  const max = useMemo(() => Math.max(...stats.map(s => s.end)), [stats]);
  const [active, setActive] = useState(0);

  // auto-rotate every 3 s
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % stats.length), 3000);
    return () => clearInterval(t);
  }, [stats.length]);

  const activeValue = useCount(stats[active].end, 1300);

  // -------------------------------------------------
  //  Larger canvas & ring radii
  // -------------------------------------------------
  const centerSize = 460;               // was 300
  const cx = centerSize / 2;
  const cy = cx;

  // start radius + gap between rings
  const baseRadius = 100;               // was 70
  const ringGap    = 36;                // was 28

  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="relative -mt-20">

        {/* SVG with bigger viewBox */}
        <svg
          width={centerSize}
          height={centerSize}
          viewBox={`0 0 ${centerSize} ${centerSize}`}
          className="drop-shadow-md"
        >
          {stats.map((s, i) => {
            const r = baseRadius + i * ringGap;
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
                {/* background circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  stroke="#f3f4f6"
                  strokeWidth="14"
                  fill="none"
                />
                {/* progress arc */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                  stroke={`url(#grad${i})`}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: finalOffset }}
                  transition={{ duration: 1.6 + i * 0.2, ease: "easeOut" }}
                  style={{ strokeDasharray: circumference }}
                />
                <defs>
                  <linearGradient id={`grad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>
                </defs>
              </motion.g>
            );
          })}
        </svg>

        {/* -------------------------------------------------
            Centre text – scaled down for the larger rings
        ------------------------------------------------- */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium text-gray-500 leading-tight"
          >
            Live Metric Across Major
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-bold text-gray-800"
          >
            NBFCs, Telcos & Banks
          </motion.div>

          <div className="text-4xl md:text-5xl font-extrabold text-black mt-3">
            {activeValue}
            <span className="ml-1 text-lg font-medium text-red-600">
              {stats[active].suffix || ""}
            </span>
          </div>

          <div className="text-xs md:text-sm text-gray-600 font-medium mt-1 max-w-[220px] leading-tight">
            {stats[active].label}
          </div>
        </motion.div>

        {/* -------------------------------------------------
            Clickable labels – moved further down
        ------------------------------------------------- */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center">
          {stats.map((s, i) => {
  const firstWord = s.label.split(" ")[0];
  const isVisits = s.label.includes("Annually");

  return (
    <button
      key={i}
      onClick={() => setActive(i)}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
        i === active
          ? "bg-red-600 text-white shadow-md"
          : "bg-white text-gray-700 border border-gray-300 hover:border-red-600 hover:text-red-600"
      }`}
    >
      {isVisits ? "Visits" : firstWord}
    </button>
  );
})}
        </div>

      </div>
    </div>
  );
}
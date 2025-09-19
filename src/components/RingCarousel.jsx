// RingCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

export default function RingCarousel({
  stats = [
    { end: 120, suffix: "+", label: "Banks & NBFCs" },
    { end: 5000, suffix: "+", label: "Loans Processed" },
    { end: 85, suffix: "%", label: "Avg NPS" },
    { end: 24, suffix: "h", label: "Avg Disbursal Time" },
  ],
}) {
  const [speed, setSpeed] = useState(12);
  const radius = 160;
  const n = stats.length;

  // front index (closest to camera) for emphasis
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRotation((r) => (r + 360 / n) % 360), 3000);
    return () => clearInterval(t);
  }, [n]);

  return (
    <div className="flex justify-center py-10">
      <style>{`@keyframes ring-rot { to { transform: rotateY(360deg); } }`}</style>
      <div
        className="relative w-[420px] h-[260px] perspective-[1000px]"
        onMouseEnter={() => setSpeed(30)}
        onMouseLeave={() => setSpeed(12)}
      >
        <div
          className="absolute inset-0 transform-style-preserve-3d"
          style={{
            animation: `ring-rot ${speed}s linear infinite`,
            transformStyle: "preserve-3d",
          }}
        >
          {stats.map((s, i) => {
            const angle = (360 / n) * i;
            const transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
            const frontness = Math.abs(((angle + rotation + 540) % 360) - 180); // heuristic for emphasis
            return (
              <motion.div
                key={i}
                style={{
                  transform,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transformOrigin: "center center",
                }}
                className="-translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.06 }}
              >
                <div
                  className={`bg-white rounded-2xl p-5 shadow-xl min-w-[170px] text-center ${
                    frontness < 40 ? "ring-4 ring-[#0E8299]/10 scale-105" : ""
                  }`}
                >
                  <div className="text-xs text-gray-500">{s.label}</div>
                  <div className="text-2xl font-extrabold mt-2 text-gray-900">
                    {useCount(s.end, 1400)}
                    <span className="ml-1 text-base font-medium text-gray-600">{s.suffix}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

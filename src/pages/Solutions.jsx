import React from "react";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    { title: "Digital KYC", desc: "Faster onboarding with full compliance." },
    { title: "AI Risk Models", desc: "Reduce defaults with smarter insights." },
    { title: "Customer Engagement", desc: "Boost retention with proactive outreach." },
  ];

  return (
    <section id="solutions" className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our <span className="text-green-600">Solutions</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We empower lenders with **modular, tech-first solutions**.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

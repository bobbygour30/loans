import React from "react";
import { motion } from "framer-motion";

export default function Platform() {
  const modules = [
    { title: "Loan Origination", desc: "Digital onboarding with fraud checks." },
    { title: "Disbursal Engine", desc: "Fast & compliant disbursals at scale." },
    { title: "Collections Suite", desc: "AI-driven tools to improve recovery." },
  ];

  return (
    <section id="platform" className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our <span className="text-green-600">Platform</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A modular platform for lenders to manage the **entire credit lifecycle**.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-gray-50 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-gray-600">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

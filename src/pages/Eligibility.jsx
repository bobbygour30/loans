import React from "react";
import { motion } from "framer-motion";

export default function Eligibility() {
  const criteria = [
    "Age: 21-60 years",
    "Minimum income requirement",
    "Valid KYC documents",
    "Stable credit history",
  ];

  return (
    <section id="eligibility" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Loan <span className="text-green-600">Eligibility</span>
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Simple, transparent, and fair eligibility requirements.
        </p>

        <ul className="mt-8 space-y-4 text-left max-w-md mx-auto">
          {criteria.map((c, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              ✅ {c}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

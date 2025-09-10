import React from "react";
import { motion } from "framer-motion";

export default function Loans() {
  const types = [
    { title: "Personal Loans", desc: "Quick access to funds for individuals." },
    { title: "Business Loans", desc: "Helping SMEs and startups grow." },
    { title: "Education Loans", desc: "Supporting students to pursue dreams." },
  ];

  return (
    <section id="loans" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Loan <span className="text-green-600">Solutions</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Flexible lending options tailored for individuals and businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {types.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-gray-600">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

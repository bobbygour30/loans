import React from "react";
import { motion } from "framer-motion";

export default function Careers() {
  const openings = [
    { role: "Frontend Developer", location: "Remote / Delhi" },
    { role: "Backend Engineer", location: "Bangalore" },
    { role: "Customer Success Manager", location: "Mumbai" },
  ];

  return (
    <section id="careers" className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Join <span className="text-green-600">Our Team</span>
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Be part of a mission-driven company transforming finance.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {openings.map((o, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-gray-50 rounded-xl shadow-md"
            >
              <h3 className="font-semibold">{o.role}</h3>
              <p className="text-gray-600">{o.location}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

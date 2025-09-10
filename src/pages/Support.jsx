import React from "react";
import { motion } from "framer-motion";

export default function Support() {
  const channels = [
    { title: "Email Support", desc: "Get help at support@fyntegra.com" },
    { title: "Live Chat", desc: "Instant answers via our support chat." },
    { title: "Help Center", desc: "Browse FAQs and guides anytime." },
  ];

  return (
    <section id="support" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Customer <span className="text-green-600">Support</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are here to help you 24/7.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {channels.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

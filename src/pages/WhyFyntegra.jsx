import React from "react";
import { motion } from "framer-motion";

export default function WhyFyntegra() {
  const features = [
    { title: "AI + Human Expertise", desc: "Balancing automation with empathy." },
    { title: "Compliance First", desc: "RBI-aligned governance in every workflow." },
    { title: "Scalable Solutions", desc: "Future-ready tools that grow with you." },
  ];

  return (
    <section id="why" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Why Choose <span className="text-green-600">Fyntegra?</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are large enough to deliver at scale and agile enough to care about
          every customer interaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

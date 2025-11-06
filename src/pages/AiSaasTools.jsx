import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  BrainCircuit,
  Share2,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay } },
});

export default function AiSaasTools() {
  return (
    <div className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-28 mt-20 bg-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp()}
        className="relative max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          AI + SaaS Tools
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          AI-driven SaaS tools that can be bundled with or without BPO delivery — 
          designed to automate, scale, and delight.
        </p>
      </motion.div>

      {/* Key Features */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {[
          {
            icon: <MessageCircle className="w-7 h-7 text-white" />,
            title: "WhatsApp & Voice Bots",
            text: "FAQ handling, reminders, nudges",
          },
          {
            icon: <BrainCircuit className="w-7 h-7 text-white" />,
            title: "GenAI Ticket Automation",
            text: "Auto-triage, smart responses",
          },
          {
            icon: <Share2 className="w-7 h-7 text-white" />,
            title: "ORM Desk",
            text: "Social media complaint handling, brand monitoring",
          },
          {
            icon: <BarChart3 className="w-7 h-7 text-white" />,
            title: "Analytics Dashboards",
            text: "Bot containment %, FCR, SLA metrics",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(idx * 0.2)}
            whileHover={{ scale: 1.05, translateY: -6 }}
            className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:border-red-200"
          >
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-red-600 shadow-md">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Outcomes */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp()}
        className="mt-24 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-black mb-6">
          Outcomes Delivered
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Up to 60% query automation",
            "24x7 coverage without seat costs",
            "Reduced escalation volume",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(idx * 0.2)}
              className="px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full text-red-700 font-medium shadow-sm hover:shadow-md transition"
            >
              {point}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ideal For */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp()}
        className="mt-20 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-black mb-6">Ideal For</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Fintechs scaling fast without adding agents",
            "NBFCs digitizing CX",
            "Banks managing large complaint volumes",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(idx * 0.2)}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-gray-700 font-medium hover:shadow-xl hover:border-red-200 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp(0.2)}
        className="mt-16 text-center"
      >
        <Link
          to="/solutions/ai-saas"
          className="inline-block px-10 py-4 text-lg font-semibold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:shadow-2xl hover:scale-105 transition transform"
        >
          See it in Action
        </Link>
      </motion.div>
    </div>
  );
}
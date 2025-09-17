import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  Headphones,
  BrainCircuit,
  BarChart3,
  Workflow,
  Share2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AiSaasTools() {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16 lg:px-28 mt-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI + SaaS Tools
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Fyntegra offers AI-driven SaaS tools that can be bundled with or
          without BPO delivery.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
      >
        {[
          {
            icon: <MessageCircle className="w-8 h-8 text-[#d60000]" />,
            text: "WhatsApp & Voice Bots → FAQ handling, reminders, nudges",
          },
          {
            icon: <BrainCircuit className="w-8 h-8 text-[#d60000]" />,
            text: "GenAI Ticket Automation → Auto-triage, smart responses",
          },
          {
            icon: <Share2 className="w-8 h-8 text-[#d60000]" />,
            text: "ORM Desk → Social media complaint handling, brand monitoring",
          },
          {
            icon: <BarChart3 className="w-8 h-8 text-[#d60000]" />,
            text: "Analytics Dashboards → Bot containment %, FCR, SLA metrics",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex items-start space-x-4"
          >
            {item.icon}
            <p className="text-gray-700 font-medium">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Outcomes Delivered */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mt-20 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Outcomes Delivered
        </h3>
        <ul className="grid md:grid-cols-3 gap-6">
          {[
            "Up to 60% query automation",
            "24x7 coverage without seat costs",
            "Reduced escalation volume",
          ].map((point, idx) => (
            <li
              key={idx}
              className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200 text-gray-700 font-medium"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Ideal For */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mt-16 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ideal For</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            "Fintechs scaling fast without adding agents",
            "NBFCs digitizing CX",
            "Banks managing large complaint volumes",
          ].map((item, idx) => (
            <li
              key={idx}
              className="px-6 py-3 bg-white rounded-full border shadow-sm text-gray-700 font-medium hover:shadow-md transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mt-12 text-center"
      >
        <a
          href="/solutions/ai-saas"
          className="inline-block px-8 py-4 bg-[#d60000] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-[#b80000] transition-all"
        >
          See it in Action
        </a>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  IdCard,
  Video,
  Scale,
  FileCheck,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ComplianceVerification() {
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
          Compliance & Verification
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay audit-ready with our KYC automation and governance-first workflows. 
          Fyntegra helps lenders comply with RBI Digital Lending & LSP norms.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
      >
        {[
          { icon: <IdCard className="w-8 h-8 text-[#0E8299]" />, text: "PAN, Aadhaar, Video KYC, AML/Sanction checks" },
          { icon: <ShieldCheck className="w-8 h-8 text-[#0E8299]" />, text: "Maker-checker workflow for approvals" },
          { icon: <Scale className="w-8 h-8 text-[#0E8299]" />, text: "Grievance Redressal Officer (GRO) integration" },
          { icon: <FileCheck className="w-8 h-8 text-[#0E8299]" />, text: "Real-time audit dashboards" },
          { icon: <Clock className="w-8 h-8 text-[#0E8299]" />, text: "Escalation workflows for compliance exceptions" },
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

      {/* Outcomes */}
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
            "KYC TAT reduced by 40%",
            "Audit-ready MIS for RBI inspections",
            "Zero lapses in reporting timelines",
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
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Ideal For
        </h3>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            "Digital lending NBFCs",
            "Banks onboarding new-to-credit customers",
            "Fintechs seeking LSP compliance alignment",
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
        <Link
          to="/solutions"
          className="inline-block px-8 py-4 bg-[#0E8299] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-[#b80000] transition-all"
        >
          Explore Platform
        </Link>
      </motion.div>
    </div>
  );
}

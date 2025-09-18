import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Bot,
  Handshake,
  Link,
  Activity,
  TrendingDown,
  Gauge,
  DollarSign,
  Building,
  CreditCard,
  Landmark,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CollectionsRecovery() {
  const features = [
    {
      text: "1–30 DPD buckets, soft & reminder calling",
      icon: <PhoneCall className="w-7 h-7 text-[#0E8299]" />,
    },
    {
      text: "Hybrid recovery: AI bots for nudges, humans for negotiation",
      icon: <Bot className="w-7 h-7 text-[#0E8299]" />,
    },
    {
      text: "Promise-to-pay (PTP) tracking",
      icon: <Handshake className="w-7 h-7 text-[#0E8299]" />,
    },
    {
      text: "Digital payment link journeys",
      icon: <Link className="w-7 h-7 text-[#0E8299]" />,
    },
    {
      text: "Predictive risk scoring for delinquency",
      icon: <Activity className="w-7 h-7 text-[#0E8299]" />,
    },
  ];

  const outcomes = [
    {
      text: "Roll-rate reduction: 20–35%",
      icon: <TrendingDown className="w-6 h-6 text-[#0E8299]" />,
    },
    {
      text: "Recovery efficiency +25%",
      icon: <Gauge className="w-6 h-6 text-[#0E8299]" />,
    },
    {
      text: "Lower cost-to-collect vs traditional agencies",
      icon: <DollarSign className="w-6 h-6 text-[#0E8299]" />,
    },
  ];

  const idealFor = [
    {
      text: "NBFCs with consumer loans",
      icon: <Building className="w-7 h-7 text-[#0E8299]" />,
    },
    {
      text: "BNPL fintechs",
      icon: <CreditCard className="w-7 h-7 text-[#0E8299]" />,
    },
    {
      text: "Banks running card collections",
      icon: <Landmark className="w-7 h-7 text-[#0E8299]" />,
    },
  ];

  return (
    <section id="collections" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Collections & <span className="text-[#0E8299]">Recovery</span>
        </motion.h2>

        {/* Overview */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Recover better, faster, and at lower costs. Our AI + human hybrid
          model handles early-bucket and soft collections with predictive
          models.
        </motion.p>

        {/* Features */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-lg flex items-start hover:shadow-xl transition"
              >
                <div className="mr-3 flex-shrink-0">{f.icon}</div>
                <p className="text-gray-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Outcomes Delivered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-tr from-white to-gray-100 rounded-xl shadow-lg flex items-center hover:shadow-xl transition"
              >
                <div className="mr-3">{o.icon}</div>
                <p className="text-gray-600 text-sm">{o.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ideal For */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Ideal For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {idealFor.map((iF, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <div className="mb-3">{iF.icon}</div>
                <p className="text-gray-600 text-sm">{iF.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <RouterLink to="/contact">
            <button className="px-8 py-3 bg-[#0E8299] cursor-pointer text-white rounded-full font-semibold shadow  transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book a Demo
            </button>
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
}

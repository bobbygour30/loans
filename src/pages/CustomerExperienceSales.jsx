import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  LineChart,
  UserPlus,
  Headphones,
  CreditCard,
  BarChart3,
  Smile,
  Timer,
  Users,
  ShoppingCart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CustomerExperienceSales() {
  const features = [
    {
      text: "Omnichannel outreach (IVR, WhatsApp, chatbots, live agents)",
      icon: <MessageSquare className="w-7 h-7 text-[#d60000]" />,
    },
    {
      text: "Lead scoring & funnel tracking",
      icon: <LineChart className="w-7 h-7 text-[#d60000]" />,
    },
    {
      text: "Assisted onboarding journeys",
      icon: <UserPlus className="w-7 h-7 text-[#d60000]" />,
    },
    {
      text: "Upsell, cross-sell, retention campaigns",
      icon: <Headphones className="w-7 h-7 text-[#d60000]" />,
    },
    {
      text: "Premium desk setups (cards, BNPL, high-value CX)",
      icon: <CreditCard className="w-7 h-7 text-[#d60000]" />,
    },
  ];

  const outcomes = [
    {
      text: "Contactability uplift: +30%",
      icon: <Users className="w-6 h-6 text-[#d60000]" />,
    },
    {
      text: "Conversion ratio improvement: 15–25%",
      icon: <BarChart3 className="w-6 h-6 text-[#d60000]" />,
    },
    {
      text: "Higher CSAT & NPS scores",
      icon: <Smile className="w-6 h-6 text-[#d60000]" />,
    },
    {
      text: "Faster TAT in onboarding",
      icon: <Timer className="w-6 h-6 text-[#d60000]" />,
    },
  ];

  const idealFor = [
    {
      text: "Loan origination desks",
      icon: <CreditCard className="w-7 h-7 text-[#d60000]" />,
    },
    {
      text: "Credit card sourcing",
      icon: <ShoppingCart className="w-7 h-7 text-[#d60000]" />,
    },
    {
      text: "BNPL & consumer lending funnels",
      icon: <LineChart className="w-7 h-7 text-[#d60000]" />,
    },
  ];

  return (
    <section id="cx-sales" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Customer Experience & <span className="text-[#d60000]">Sales</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Engage customers across voice, chat, WhatsApp, email, and social. We
          manage lead conversions, upsell journeys, and customer retention for
          lenders across India.
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
                className="p-6 bg-white rounded-xl shadow-lg flex items-center hover:shadow-xl transition"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
          <a
            href="/contact"
            className="px-8 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Talk to an Expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}

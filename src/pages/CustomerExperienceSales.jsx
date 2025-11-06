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
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CustomerExperienceSales() {
  const features = [
    {
      text: "Omnichannel outreach (IVR, WhatsApp, chatbots, live agents)",
      icon: <MessageSquare className="w-7 h-7 text-red-600" />,
    },
    {
      text: "Lead scoring & funnel tracking",
      icon: <LineChart className="w-7 h-7 text-red-600" />,
    },
    {
      text: "Assisted onboarding journeys",
      icon: <UserPlus className="w-7 h-7 text-red-600" />,
    },
    {
      text: "Upsell, cross-sell, retention campaigns",
      icon: <Headphones className="w-7 h-7 text-red-600" />,
    },
    {
      text: "Premium desk setups (cards, BNPL, high-value CX)",
      icon: <CreditCard className="w-7 h-7 text-red-600" />,
    },
  ];

  const outcomes = [
    {
      text: "Contactability uplift: +30%",
      icon: <Users className="w-6 h-6 text-red-600" />,
    },
    {
      text: "Conversion ratio improvement: 15–25%",
      icon: <BarChart3 className="w-6 h-6 text-red-600" />,
    },
    {
      text: "Higher CSAT & NPS scores",
      icon: <Smile className="w-6 h-6 text-red-600" />,
    },
    {
      text: "Faster TAT in onboarding",
      icon: <Timer className="w-6 h-6 text-red-600" />,
    },
  ];

  const idealFor = [
    {
      text: "Loan origination desks",
      icon: <CreditCard className="w-7 h-7 text-red-600" />,
    },
    {
      text: "Credit card sourcing",
      icon: <ShoppingCart className="w-7 h-7 text-red-600" />,
    },
    {
      text: "BNPL & consumer lending funnels",
      icon: <LineChart className="w-7 h-7 text-red-600" />,
    },
  ];

  return (
    <section id="cx-sales" className="py-20 px-6 bg-white mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black"
        >
          Customer Experience &{" "}
          <span className="text-red-600">Sales</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100 flex items-center hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <div className="mr-3 flex-shrink-0">{f.icon}</div>
                <p className="text-gray-700 text-sm font-medium">{f.text}</p>
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">
            Outcomes Delivered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-tr from-white to-red-50 rounded-xl shadow-md border border-gray-100 flex items-center hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <div className="mr-3">{o.icon}</div>
                <p className="text-gray-700 text-sm font-medium">{o.text}</p>
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">Ideal For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {idealFor.map((iF, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <div className="mb-3">{iF.icon}</div>
                <p className="text-gray-700 text-sm font-medium">{iF.text}</p>
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
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Talk to an Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
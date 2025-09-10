import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solutions() {
  const solutions = [
    {
      title: "Digital KYC",
      desc: "Streamlined onboarding with real-time identity verification, fraud detection, and RBI-compliant processes to reduce drop-offs.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4z" />
        </svg>
      ),
    },
    {
      title: "AI Risk Models",
      desc: "Advanced predictive analytics to assess credit risk, minimize defaults, and optimize loan approvals with precision.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 12h18M3 6h10M3 18h6" />
        </svg>
      ),
    },
    {
      title: "Customer Engagement",
      desc: "Omnichannel outreach with AI-driven nudges and consent-logged communications to boost retention and satisfaction.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-6 8c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      ),
    },
    {
      title: "Collections Optimization",
      desc: "Data-driven prioritization and automated workflows to improve recovery rates while maintaining customer trust.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Analytics & Reporting",
      desc: "Customizable dashboards with real-time insights and regulatory reporting for informed decision-making.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 21h18M3 10h18M6 6h.01M6 14h.01M6 18h.01M18 6h.01M18 14h.01M18 18h.01" />
        </svg>
      ),
    },
    {
      title: "Seamless Integrations",
      desc: "API-first modules for quick setup with existing systems, reducing time-to-market for lending programs.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22-2v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Enhanced Efficiency",
      desc: "Automate repetitive tasks to reduce processing time and operational costs.",
    },
    {
      title: "Regulatory Compliance",
      desc: "Built-in governance ensures adherence to RBI guidelines and audit readiness.",
    },
    {
      title: "Improved CX",
      desc: "Personalized engagement strategies to boost NPS and customer loyalty.",
    },
    {
      title: "Scalable Growth",
      desc: "Flexible solutions that support small to enterprise-level lending operations.",
    },
  ];

  const caseStudies = [
    {
      title: "National Bank Streamlines Onboarding",
      desc: "Reduced KYC processing time by 50% using Fyntegra’s Digital KYC module.",
      impact: "40% increase in customer conversions",
    },
    {
      title: "Fintech Boosts Recovery Rates",
      desc: "Implemented AI-driven collections suite to prioritize high-risk accounts.",
      impact: "25% improvement in recovery rates",
    },
  ];

  const testimonials = [
    {
      quote: "Fyntegra’s Digital KYC solution cut our onboarding time in half while ensuring full compliance.",
      author: "Head of Operations, National Bank",
    },
    {
      quote: "The AI risk models helped us reduce defaults and make smarter lending decisions.",
      author: "Risk Manager, Fintech Co.",
    },
    {
      quote: "Their customer engagement tools transformed our retention strategy.",
      author: "VP Customer Success, NBFC",
    },
  ];

  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section id="solutions" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Our <span className="text-[#d60000]">Solutions</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Empowering lenders with modular, AI-driven solutions to streamline the entire credit lifecycle, from onboarding to collections, with unmatched compliance and efficiency.
        </motion.p>

        {/* Solutions Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-2">{s.title}</h3>
              <p className="text-gray-600 text-center">{s.desc}</p>
              <a href="#learn-more" className="mt-4 inline-block text-sm text-[#d60000] hover:underline text-center">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Why Our Solutions Excel</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-gradient-to-tr from-white to-gray-100 rounded-xl shadow-lg">
                <h4 className="font-semibold text-[#d60000] mb-2">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-lg">
                <h4 className="font-semibold text-[#d60000] mb-2">{cs.title}</h4>
                <p className="text-gray-600 mb-2">{cs.desc}</p>
                <p className="text-sm text-gray-500">Impact: {cs.impact}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Partners Say</h3>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <p className="italic text-gray-700">“{testimonials[testIndex].quote}”</p>
                <div className="mt-4 font-semibold text-[#d60000]">{testimonials[testIndex].author}</div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setTestIndex((t) => (t - 1 + testimonials.length) % testimonials.length)}
                className="px-3 py-2 bg-white rounded-lg shadow hover:bg-gray-100"
              >
                Prev
              </button>
              <div className="text-sm text-gray-500">{testIndex + 1}/{testimonials.length}</div>
              <button
                onClick={() => setTestIndex((t) => (t + 1) % testimonials.length)}
                className="px-3 py-2 bg-white rounded-lg shadow hover:bg-gray-100"
              >
                Next
              </button>
            </div>
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
          <h3 className="text-2xl font-semibold mb-4">Transform Your Lending Operations</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#demo"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Request a Demo
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#d60000] text-[#d60000] rounded-full font-semibold hover:bg-[#d60000]/10 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
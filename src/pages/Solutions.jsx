import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IdCard, BrainCircuit, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solutions() {
  const solutions = [
    {
      title: "Customer Experience & Sales",
      desc: "AI-driven tools to enhance engagement, boost sales, and improve satisfaction.",
      icon: <Users className="w-8 h-8 text-[#0E8299]" />,
      url: "/solutions/cx-sales",
    },
    {
      title: "Collections & Recovery",
      desc: "Data-driven workflows to optimize recovery and maintain customer trust.",
      icon: <TrendingUp className="w-8 h-8 text-[#0E8299]" />,
      url: "/solutions/collections",
    },
    {
      title: "Compliance & Verification",
      desc: "Streamlined KYC and fraud detection for RBI compliance and audits.",
      icon: <IdCard className="w-8 h-8 text-[#0E8299]" />,
      url: "/solutions/compliance",
    },
    {
      title: "AI + SaaS Tools",
      desc: "AI models and SaaS for risk assessment, analytics, and operations.",
      icon: <BrainCircuit className="w-8 h-8 text-[#0E8299]" />,
      url: "/solutions/ai-saas",
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
      desc: "Reduced KYC processing time by 50% using Fyntegra’s Compliance & Verification module.",
      impact: "40% increase in customer conversions",
    },
    {
      title: "Fintech Boosts Recovery Rates",
      desc: "Implemented AI-driven Collections & Recovery suite to prioritize high-risk accounts.",
      impact: "25% improvement in recovery rates",
    },
  ];

  const testimonials = [
    {
      quote: "Fyntegra’s Compliance & Verification solution cut our onboarding time in half while ensuring full compliance.",
      author: "Head of Operations, National Bank",
    },
    {
      quote: "The AI + SaaS tools helped us reduce defaults and make smarter lending decisions.",
      author: "Risk Manager, Fintech Co.",
    },
    {
      quote: "Their Customer Experience & Sales tools transformed our retention strategy.",
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
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          LSP Solutions for <span className="text-[#0E8299]">Banks, NBFCs & Fintechs</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Fyntegra combines AI-driven automation with human delivery expertise to help lenders improve disbursals, reduce NPAs, and stay compliant with RBI’s LSP framework.
        </motion.p>

        {/* Solutions Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-2">{s.title}</h3>
              <p className="text-gray-600 text-center text-sm min-h-[60px]">{s.desc}</p>
              <Link
                to={s.url}
                className="mt-4 inline-block px-4 py-2 bg-[#0E8299] text-white rounded-full text-sm font-semibold  transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
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
                <h4 className="font-semibold text-[#0E8299] mb-2">{b.title}</h4>
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
                <h4 className="font-semibold text-[#0E8299] mb-2">{cs.title}</h4>
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
                <div className="mt-4 font-semibold text-[#0E8299]">{testimonials[testIndex].author}</div>
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
            <Link
              to="/partner-with-us"
              className="px-6 py-3 bg-[#0E8299] text-white rounded-full font-semibold shadow  transition"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-[#0E8299] text-[#0E8299] rounded-full font-semibold hover:bg-[#0E8299]/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
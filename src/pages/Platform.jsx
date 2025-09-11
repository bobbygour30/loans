import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck,
  Banknote,
  Wallet,
  ShieldCheck,
  BarChart3,
  Zap,
  MessageSquare,
  FileText,
  Headphones,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Platform() {
  const modules = [
    {
      title: "Loan Origination",
      desc: "Streamlined digital onboarding with real-time KYC, fraud detection, and automated eligibility checks to reduce drop-offs.",
      icon: <FileCheck className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Disbursal Engine",
      desc: "Fast, RBI-compliant disbursals with parallel verifications and secure fund transfer integrations for efficiency at scale.",
      icon: <Banknote className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Collections Suite",
      desc: "AI-driven prioritization, omnichannel reminders, and consent-logged outreach to optimize recovery rates.",
      icon: <Wallet className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Compliance Module",
      desc: "End-to-end audit trails, role-based access, and regulatory reporting tools to ensure RBI compliance.",
      icon: <ShieldCheck className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Analytics Dashboard",
      desc: "Real-time insights, lead scoring, and predictive analytics to drive smarter decision-making.",
      icon: <BarChart3 className="w-8 h-8 text-[#d60000]" />,
    },
  ];

  const benefits = [
    {
      title: "Seamless Integration",
      desc: "API-first design for quick plug-and-play setup with existing systems.",
    },
    {
      title: "High Security",
      desc: "Encrypted data flows and compliance with RBI security standards.",
    },
    {
      title: "Scalable Architecture",
      desc: "Supports operations from small-scale to enterprise-level lending programs.",
    },
    {
      title: "Customizable Workflows",
      desc: "Tailor processes to meet specific lender and borrower needs.",
    },
  ];

  const testimonials = [
    {
      quote: "Fyntegra’s platform streamlined our loan origination, cutting onboarding time by 40%.",
      author: "Head of Operations, Fintech Co.",
    },
    {
      quote: "The collections suite improved our recovery rates while maintaining customer trust.",
      author: "VP Collections, NBFC",
    },
    {
      quote: "Their compliance module made audits seamless and stress-free.",
      author: "Compliance Officer, National Bank",
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
    <section id="platform" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          The <span className="text-[#d60000]">Fyntegra Platform</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          A secure, modular, API-first platform designed to manage the entire credit lifecycle, empowering lenders with efficiency, compliance, and scalability.
        </motion.p>

        {/* Modules Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {modules.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">{m.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-2">{m.title}</h3>
              <p className="text-gray-600 text-center">{m.desc}</p>
              <a href="#learn-more" className="mt-4 inline-block text-sm text-[#d60000] hover:underline text-center">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Benefits */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Why Our Platform Stands Out</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-gradient-to-tr from-white to-gray-100 rounded-xl shadow-lg">
                <h4 className="font-semibold text-[#d60000] mb-2">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.desc}</p>
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

        {/* Platform Features Highlight */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Key Platform Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-[#d60000]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Real-Time Processing
                </div>
                <div className="text-sm text-gray-600">
                  Instant KYC, verification, and disbursal decisions for faster
                  turnaround.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-[#d60000]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Omnichannel Support
                </div>
                <div className="text-sm text-gray-600">
                  Engage customers via SMS, email, IVR, and apps with full
                  consent tracking.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-[#d60000]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Custom Reporting
                </div>
                <div className="text-sm text-gray-600">
                  Generate tailored reports for operational and regulatory
                  needs.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                <Headphones className="w-6 h-6 text-[#d60000]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Dedicated Support
                </div>
                <div className="text-sm text-gray-600">
                  24/7 support teams to ensure smooth operations and quick
                  resolutions.
                </div>
              </div>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Lending?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/partner-with-us"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Request a Demo
            </a>
            <a
              href="/contact"
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
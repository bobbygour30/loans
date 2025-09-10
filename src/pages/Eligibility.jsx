import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Eligibility() {
  const criteria = [
    {
      title: "Age Requirement",
      desc: "Applicants must be between 21 and 60 years old to qualify for most loan products.",
      icon: (
        <svg className="w-6 h-6 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-6 8c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      ),
    },
    {
      title: "Minimum Income",
      desc: "A stable monthly income (varies by loan type) to ensure repayment capacity.",
      icon: (
        <svg className="w-6 h-6 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 21h18M3 10h18M6 6h.01M6 14h.01M6 18h.01M18 6h.01M18 14h.01M18 18h.01" />
        </svg>
      ),
    },
    {
      title: "Valid KYC Documents",
      desc: "Aadhaar, PAN, and other identity proofs for secure and compliant verification.",
      icon: (
        <svg className="w-6 h-6 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4z" />
        </svg>
      ),
    },
    {
      title: "Stable Credit History",
      desc: "A good credit score or consistent repayment history to qualify for favorable terms.",
      icon: (
        <svg className="w-6 h-6 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
  ];

  const applicationSteps = [
    {
      step: "Check Eligibility",
      desc: "Use our soft credit check tool to see if you qualify without impacting your score.",
    },
    {
      step: "Submit Application",
      desc: "Fill out a quick online form with your details and required documents.",
    },
    {
      step: "Verification",
      desc: "Our AI-driven system verifies your documents in real-time for faster approvals.",
    },
    {
      step: "Disbursal",
      desc: "Receive funds in your account within 24-72 hours upon approval.",
    },
  ];

  const faqs = [
    {
      q: "Will checking eligibility affect my credit score?",
      a: "No, our soft credit check does not impact your credit score. It’s a preliminary assessment to gauge eligibility.",
    },
    {
      q: "What documents are required for loan approval?",
      a: "Typically, you’ll need Aadhaar, PAN, income proof (salary slips or ITR), and bank statements. Additional documents may be required based on the loan type.",
    },
    {
      q: "How long does the approval process take?",
      a: "Most loans are approved within 24-72 hours, depending on the verification process and loan type.",
    },
  ];

  const testimonials = [
    {
      quote: "Checking my eligibility with Fyntegra was quick and didn’t affect my credit score!",
      author: "Anita Sharma, Customer",
    },
    {
      quote: "The transparent criteria made it easy to apply and get approved for my loan.",
      author: "Ravi Kumar, SME Owner",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section id="eligibility" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Loan <span className="text-[#d60000]">Eligibility</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Our transparent and straightforward eligibility criteria ensure a hassle-free loan application process for individuals and businesses.
        </motion.p>

        {/* Eligibility Criteria */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{c.icon}</div>
              <h3 className="font-semibold text-[#d60000] mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Steps */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">How to Apply</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {applicationSteps.map((step, i) => (
              <div key={i} className="p-6 bg-gradient-to-tr from-white to-gray-100 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold text-[#d60000] mb-2">Step {i + 1}</div>
                <h4 className="font-semibold mb-2">{step.step}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="font-medium text-gray-900">{f.q}</div>
                  <div className="text-gray-500">{openFaq === i ? "−" : "+"}</div>
                </button>
                {openFaq === i && <div className="mt-3 text-sm text-gray-600">{f.a}</div>}
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
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h3>
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

        {/* Eligibility Checker */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Check Your Eligibility</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Find out if you qualify for our loan products with a soft credit check that won’t affect your score.
          </p>
          <div className="inline-flex items-center gap-3 w-full md:w-auto">
            <input
              placeholder="Mobile Number"
              className="p-3 border rounded-l-lg w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-[#d60000]"
            />
            <button className="px-5 py-3 bg-[#d60000] text-white rounded-r-lg hover:bg-[#b50000]">
              Check Now
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">All data is securely encrypted for your privacy.</div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to Apply?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#apply"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Start Your Application
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
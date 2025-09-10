import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "Personal Loan",
    amount: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [testIndex, setTestIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const loanTypes = ["Personal Loan", "Business Loan", "Education Loan", "Home Loan", "Gold Loan", "Vehicle Loan"];

  const eligibilityHighlights = [
    { title: "Age", desc: "21-60 years for most loan products." },
    { title: "Income", desc: "Stable monthly income (varies by loan type)." },
    { title: "Documents", desc: "Valid Aadhaar, PAN, and income proof." },
    { title: "Credit Score", desc: "Good credit history for better terms." },
  ];

  const applicationSteps = [
    { title: "Submit Application", desc: "Fill out the online form with your details." },
    { title: "Document Verification", desc: "Our AI system verifies your documents in real-time." },
    { title: "Approval", desc: "Get approval within 24-72 hours." },
    { title: "Disbursal", desc: "Funds credited to your account upon approval." },
  ];

  const faqs = [
    {
      q: "What documents are required to apply?",
      a: "You’ll need Aadhaar, PAN, income proof (salary slips or ITR), and bank statements. Additional documents may vary by loan type.",
    },
    {
      q: "How long does the application process take?",
      a: "Most applications are processed within 24-72 hours, depending on verification and loan type.",
    },
    {
      q: "Will applying affect my credit score?",
      a: "No, our initial eligibility check is a soft inquiry that won’t impact your credit score.",
    },
  ];

  const testimonials = [
    { quote: "The application process was so simple, and I got my loan approved in just a day!", author: "Sonia Mehra, Customer" },
    { quote: "Fyntegra’s team made applying for a business loan effortless and fast.", author: "Arjun Patel, SME Owner" },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      setFormStatus("Please fill out all required fields.");
      return;
    }
    setFormStatus("Application submitted successfully!");
    setFormData({ name: "", email: "", phone: "", loanType: "Personal Loan", amount: "", message: "" });
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="apply-now" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Apply <span className="text-[#d60000]">Now</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Start your loan application with Fyntegra’s seamless process. Get quick approvals and personalized loan options tailored to your needs.
        </motion.p>

        {/* Application Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Loan Application Form</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                required
              />
              <select
                value={formData.loanType}
                onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              >
                {loanTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Loan Amount *"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                required
              />
              <textarea
                placeholder="Additional Information (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                rows="4"
              />
              <button
                onClick={handleFormSubmit}
                className="w-full px-6 py-3 bg-[#d60000] text-white rounded-lg font-semibold hover:bg-[#b50000] transition"
              >
                Submit Application
              </button>
              {formStatus && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 text-center ${
                    formStatus.includes("successfully") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formStatus}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Eligibility Highlights */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Eligibility Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityHighlights.map((e, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-lg text-center">
                <h4 className="font-semibold text-[#d60000] mb-2">{e.title}</h4>
                <p className="text-sm text-gray-600">{e.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Application Steps */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {applicationSteps.map((step, i) => (
              <div key={i} className="p-6 bg-gradient-to-tr from-white to-gray-100 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold text-[#d60000] mb-2">Step {i + 1}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
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
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h3>
          <div className="relative">
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#apply"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#d60000] text-[#d60000] rounded-full font-semibold hover:bg-[#d60000]/10 transition"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EmiCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [loanType, setLoanType] = useState("Personal Loan");
  const [openFaq, setOpenFaq] = useState(null);

  const monthlyRate = rate / 100 / 12;
  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1) || 0;
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const faqs = [
    {
      q: "How is EMI calculated?",
      a: "EMI is calculated using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1], where P is the principal, R is the monthly interest rate, and N is the number of months.",
    },
    {
      q: "Does the calculator reflect actual loan terms?",
      a: "This calculator provides an estimate. Actual terms may vary based on loan type, credit score, and lender policies.",
    },
    {
      q: "Can I adjust the loan amount or tenure?",
      a: "Yes, use the sliders or input fields to customize the loan amount, interest rate, and tenure to see how it affects your EMI.",
    },
  ];

  const loanTypes = ["Personal Loan", "Business Loan", "Education Loan", "Home Loan", "Gold Loan", "Vehicle Loan"];

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value ? parseInt(value) : "");
  };

  const handleRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setRate(value ? parseFloat(value) : "");
  };

  const handleTenureChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setTenure(value ? parseInt(value) : "");
  };

  return (
    <section id="emi" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          EMI <span className="text-[#d60000]">Calculator</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Plan your loan repayments with our easy-to-use EMI calculator. Adjust the loan amount, interest rate, and tenure to see your monthly payments and total costs.
        </motion.p>

        {/* Calculator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              >
                {loanTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount: ₹{amount.toLocaleString()}
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                />
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {rate}%
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={rate}
                  onChange={handleRateChange}
                  placeholder="Enter rate"
                  className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                />
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tenure: {tenure} months
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={tenure}
                  onChange={handleTenureChange}
                  placeholder="Enter tenure"
                  className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                />
                <input
                  type="range"
                  min="6"
                  max="60"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8 p-6 bg-gradient-to-r from-[#2e2e2e] to-[#d60000] rounded-xl text-white"
          >
            <h3 className="text-xl font-semibold">Estimated Results</h3>
            <div className="mt-4 space-y-2">
              <p>
                <span className="font-medium">Monthly EMI:</span> ₹{emi.toFixed(0).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Total Interest:</span> ₹{totalInterest.toFixed(0).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Total Payment:</span> ₹{totalPayment.toFixed(0).toLocaleString()}
              </p>
            </div>
          </motion.div>
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

        {/* Tips for Borrowers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Tips for Smart Borrowing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-[#d60000] mb-2">Assess Your Needs</h4>
              <p className="text-sm text-gray-600">Borrow only what you need to avoid unnecessary interest costs.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-[#d60000] mb-2">Check Your Credit</h4>
              <p className="text-sm text-gray-600">A good credit score can secure lower interest rates.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-[#d60000] mb-2">Plan Repayments</h4>
              <p className="text-sm text-gray-600">Choose a tenure that aligns with your financial capacity.</p>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Apply?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Start Your Application
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
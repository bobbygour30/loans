import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <section id="emi" className="py-20 px-6 bg-white mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black"
        >
          EMI <span className="text-red-600">Calculator</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
        >
          Plan your loan repayments with our easy-to-use EMI calculator. Adjust the loan amount, interest rate, and tenure to see your monthly payments and total costs.
        </motion.p>

        {/* Calculator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <style jsx>{`
            input[type="range"] {
              -webkit-appearance: none;
              width: 100%;
              height: 8px;
              background: transparent;
              outline: none;
            }

            input[type="range"]::-webkit-slider-runnable-track {
              height: 8px;
              background: #e5e7eb;
              border-radius: 4px;
            }

            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 20px;
              height: 20px;
              background: #dc2626;
              border-radius: 50%;
              cursor: pointer;
              margin-top: -6px;
              box-shadow: 0 2px 6px rgba(220, 38, 38, 0.3);
            }

            input[type="range"]::-moz-range-track {
              height: 8px;
              background: #e5e7eb;
              border-radius: 4px;
            }

            input[type="range"]::-moz-range-thumb {
              width: 20px;
              height: 20px;
              background: #dc2626;
              border: none;
              border-radius: 50%;
              cursor: pointer;
              box-shadow: 0 2px 6px rgba(220, 38, 38, 0.3);
            }
          `}</style>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
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
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-1/2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {rate}%
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  value={rate}
                  onChange={handleRateChange}
                  placeholder="Enter rate"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-1/2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tenure: {tenure} months
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  value={tenure}
                  onChange={handleTenureChange}
                  placeholder="Enter tenure"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="range"
                  min="6"
                  max="60"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-1/2"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-10 p-8 bg-gradient-to-r from-black to-red-900 rounded-2xl text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Estimated Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm opacity-90">Monthly EMI</p>
                <p className="text-3xl font-bold mt-2">₹{emi.toFixed(0).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Total Interest</p>
                <p className="text-3xl font-bold mt-2">₹{totalInterest.toFixed(0).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Total Payment</p>
                <p className="text-3xl font-bold mt-2">₹{totalPayment.toFixed(0).toLocaleString()}</p>
              </div>
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-red-200 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="font-medium text-black">{f.q}</div>
                  <div className="text-gray-500 text-xl">
                    {openFaq === i ? "−" : "+"}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="mt-3 text-sm text-gray-600 pl-1">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">
            Tips for Smart Borrowing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Assess Your Needs", desc: "Borrow only what you need to avoid unnecessary interest costs." },
              { title: "Check Your Credit", desc: "A good credit score can secure lower interest rates." },
              { title: "Plan Repayments", desc: "Choose a tenure that aligns with your financial capacity." },
            ].map((tip, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition"
              >
                <h4 className="font-semibold text-red-600 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.desc}</p>
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
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Ready to Apply?
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Application
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
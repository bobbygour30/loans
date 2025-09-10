import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EmiCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(12);

  const monthlyRate = rate / 100 / 12;
  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  return (
    <section id="emi" className="py-20 px-6 bg-white mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          EMI <span className="text-green-600">Calculator</span>
        </motion.h2>

        <div className="mt-10 space-y-6 bg-gray-50 p-6 rounded-2xl shadow-lg">
          <div>
            <label>Loan Amount: ₹{amount}</label>
            <input
              type="range"
              min="10000"
              max="1000000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label>Interest Rate: {rate}%</label>
            <input
              type="range"
              min="5"
              max="30"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label>Tenure: {tenure} months</label>
            <input
              type="range"
              min="6"
              max="60"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full"
            />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
            <p className="text-xl font-semibold">
              Estimated EMI: ₹{emi.toFixed(0)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

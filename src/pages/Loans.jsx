import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, BriefcaseBusiness, GraduationCap, Home, Gem, Car } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Loans() {
  const loanTypes = [
    {
      title: "Personal Loans",
      desc: "Quick access to funds for personal needs like medical emergencies, travel, or home renovations with flexible repayment options.",
      icon: <Wallet className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Business Loans",
      desc: "Tailored financing for SMEs and startups to support working capital, expansion, or equipment purchases.",
      icon: <BriefcaseBusiness className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Education Loans",
      desc: "Affordable financing for students to pursue higher education in India or abroad with flexible repayment terms.",
      icon: <GraduationCap className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Home Loans",
      desc: "Competitive rates to help you purchase or renovate your dream home with streamlined processing.",
      icon: <Home className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Gold Loans",
      desc: "Instant liquidity against gold assets with minimal documentation and quick disbursal.",
      icon: <Gem className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Vehicle Loans",
      desc: "Finance your dream car or two-wheeler with easy EMIs and fast approval processes.",
      icon: <Car className="w-8 h-8 text-red-600" />,
    },
  ];

  const benefits = [
    {
      title: "Fast Approvals",
      desc: "AI-driven verifications and parallel processing for approvals within 24-72 hours.",
    },
    {
      title: "Flexible Terms",
      desc: "Customizable repayment schedules tailored to your financial needs.",
    },
    {
      title: "Transparent Process",
      desc: "Clear eligibility criteria and real-time application tracking.",
    },
    {
      title: "Dedicated Support",
      desc: "24/7 assistance to guide you through the loan process.",
    },
  ];

  const testimonials = [
    {
      quote: "Fyntegra’s personal loan process was seamless, and I got funds in just 24 hours!",
      author: "Anita Sharma, Customer",
    },
    {
      quote: "Their business loan helped us scale our operations without any hassle.",
      author: "Ravi Kumar, SME Owner",
    },
    {
      quote: "The education loan process was straightforward, making my study abroad dream a reality.",
      author: "Priya Singh, Student",
    },
  ];

  const [selectedLoan, setSelectedLoan] = useState(null);
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedLoan(null);
    }
  };

  return (
    <section id="loans" className="py-20 px-6 bg-white mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black"
        >
          Loan <span className="text-red-600">Solutions</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
        >
          Explore a wide range of lending options tailored for individuals, businesses, and students, designed to meet your financial goals with speed and transparency.
        </motion.p>

        {/* Loan Types */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {loanTypes.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{t.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-2 text-black">{t.title}</h3>
              <p className="text-gray-600 text-center text-sm">{t.desc}</p>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setSelectedLoan(t.title)}
                  className="inline-block px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loan Application Modal */}
        <AnimatePresence>
          {selectedLoan && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
              onClick={handleOverlayClick}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 border border-gray-100"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-semibold mb-2 text-black">Apply for {selectedLoan}</h3>
                <p className="text-sm text-gray-600 mb-6">Fill in your details below. Our team will get in touch with you soon.</p>
                <div className="space-y-4">
                  <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition" placeholder="Full Name" required />
                  <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition" placeholder="Email Address" type="email" required />
                  <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition" placeholder="Phone Number" type="tel" required />
                  <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition" placeholder="Loan Amount" type="number" required />
                  <textarea className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition" placeholder="Additional Information" rows="3" />
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        alert("Application submitted!");
                        setSelectedLoan(null);
                      }}
                      className="px-5 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => setSelectedLoan(null)}
                      className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Benefits Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">Why Choose Our Loans?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-tr from-white to-red-50 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition"
              >
                <h4 className="font-semibold text-red-600 mb-2">{b.title}</h4>
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">What Our Customers Say</h3>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <p className="italic text-gray-700 text-lg leading-relaxed">
                  “{testimonials[testIndex].quote}”
                </p>
                <div className="mt-4 font-semibold text-red-600">
                  {testimonials[testIndex].author}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() =>
                  setTestIndex(
                    (t) => (t - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="px-3 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition"
              >
                Prev
              </button>
              <div className="text-sm text-gray-500">
                {testIndex + 1}/{testimonials.length}
              </div>
              <button
                onClick={() =>
                  setTestIndex((t) => (t + 1) % testimonials.length)
                }
                className="px-3 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition"
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
          <h3 className="text-2xl font-semibold mb-4 text-black">Check Your Eligibility</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Find out if you qualify for our loan products with a soft credit check that won’t affect your score.
          </p>
          <div className="inline-flex items-center gap-0 w-full md:w-auto shadow-md rounded-lg overflow-hidden">
            <input
              placeholder="Mobile Number"
              className="p-3 border-0 w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            <button className="px-5 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300">
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
          <h3 className="text-2xl font-semibold mb-4 text-black">Ready to Get Started?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Apply for a Loan
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
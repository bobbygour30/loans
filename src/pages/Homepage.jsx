import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import {
  ShieldCheck,
  Settings,
  Brain,
  FileCheck,
  Zap,
  BarChart,
  Landmark,
  Building2,
  Gem,
  Home,
  LineChart,
  Car,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function StatCounter({ end, suffix = "", label, duration = 1400 }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const startVal = 0;
    const change = end - startVal;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + change * eased);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-xl sm:text-4xl font-extrabold text-gray-900">
        {value}
        <span className="text-xl font-medium ml-1">{suffix}</span>
      </div>
      <div className="text-[7px] sm:text-xs text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export default function Homepage() {
  const [emiAmount, setEmiAmount] = useState(500000);
  const [emiInterest, setEmiInterest] = useState(12);
  const [emiTenure, setEmiTenure] = useState(24);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");

  const testimonials = [
    {
      quote:
        "Fyntegra helped us ship LSP workflows in weeks—reducing handling time and improving NPS.",
      author: "Director of CX, National Bank",
      role: "Director of CX",
    },
    {
      quote:
        "Their compliance-first tooling shortened onboarding and made audits painless.",
      author: "Head - Risk & Compliance, Fintech Co.",
      role: "Head - Risk & Compliance",
    },
    {
      quote:
        "Partnering with Fyntegra scaled our collections efficiency while keeping customer experience high.",
      author: "VP Collections, NBFC",
      role: "VP Collections",
    },
  ];
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  function calculateEMI() {
    const P = Number(emiAmount) || 0;
    const annualRate = Number(emiInterest) || 0;
    const n = Number(emiTenure) || 0;
    if (P <= 0 || n <= 0) return { emi: 0, totalInterest: 0, totalPayment: 0 };
    const monthly = annualRate / 12 / 100;
    const numerator = P * monthly * Math.pow(1 + monthly, n);
    const denominator = Math.pow(1 + monthly, n) - 1;
    const emi = denominator > 0 ? numerator / denominator : P / n;
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  }

  const emiResult = calculateEMI();

  const faqs = [
    {
      q: "What loans can I apply for?",
      a: "Personal, Business, Gold, Home, LAP, Loan Against Mutual Funds (LAMF), Loan Against Securities, Education, Vehicle, Consumer Durable, and Medical/Emergency loans via our NBFC/Bank partners.",
    },
    {
      q: "How fast is approval?",
      a: "Eligibility is instant in most cases. Disbursal ranges from same-day to 48 hours depending on product and verification.",
    },
    {
      q: "What documents are required?",
      a: "Typically PAN, Aadhaar, bank statements, income proofs; property or asset papers for secured loans.",
    },
    {
      q: "Can I prepay?",
      a: "Most products allow part-payment/foreclosure as per lender policy. Charges may apply.",
    },
    {
      q: "How does Fyntegra ensure RBI compliance?",
      a: "We operate as an LSP under RBI guidelines with governance, KYC & audit trails, including a published grievance redressal process.",
    },
    {
      q: "Where can I raise a complaint?",
      a: "Visit /grievance for escalation levels and our Grievance Redressal Officer (GRO) details.",
    },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  const loanTypes = [
    {
      title: "Personal Loan",
      desc: "Access flexible financing for personal needs such as medical emergencies, travel, or debt consolidation. Enjoy quick approvals, competitive interest rates, and customizable repayment tenures tailored to your financial situation.",
      icon: <Landmark className="w-8 h-8 text-[#0E8299]" />,
    },
    {
      title: "Business Loan",
      desc: "Fuel your business growth with tailored working capital solutions. Whether it’s expanding operations, purchasing inventory, or investing in equipment, our loans offer flexible terms and fast disbursals to support your entrepreneurial journey.",
      icon: <Building2 className="w-8 h-8 text-[#0E8299]" />,
    },
    {
      title: "Gold Loan",
      desc: "Unlock quick liquidity by pledging your gold assets. Benefit from low interest rates, minimal documentation, and instant disbursal, all while retaining ownership of your gold with our secure and transparent process.",
      icon: <Gem className="w-8 h-8 text-[#0E8299]" />,
    },
    {
      title: "Home Loan",
      desc: "Make your dream home a reality with our competitive home loan rates. Enjoy long repayment tenures, easy documentation, and personalized support to finance your home purchase or construction effortlessly.",
      icon: <Home className="w-8 h-8 text-[#0E8299]" />,
    },
    {
      title: "LAMF",
      desc: "Access liquidity against mutual funds without redeeming your investments. Our Loan Against Mutual Funds (LAMF) offers low rates and flexible terms, allowing you to retain your portfolio’s growth potential.",
      icon: <LineChart className="w-8 h-8 text-[#0E8299]" />,
    },
    {
      title: "Vehicle Loans",
      desc: "Drive your dream car or bike with our vehicle loans, offering affordable EMIs, quick approvals, and financing for both new and used vehicles. Get on the road with minimal hassle and tailored repayment plans.",
      icon: <Car className="w-8 h-8 text-[#0E8299]" />,
    },
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedLoan(null);
    }
  };
  const handleGetLoanClick = () => {
    if (mobileNumber) {
      alert(`Loan application started with mobile number: ${mobileNumber}`);
    } else {
      alert("Please enter a mobile number.");
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen mt-20">
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#0E8299] to-[#001935] text-white py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="flex-1 text-center md:text-left">
                <img
                  src={assets.logo2}
                  alt="logo"
                  className="h-16 md:h-20 inline-block mb-4"
                />
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
                  AI-Driven Lending.{" "}
                  <span className="underline decoration-white/60">
                    Human-Led Strategy.
                  </span>
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl">
                  Empowering borrowers and lenders with seamless, compliant, and
                  efficient financial solutions tailored to your needs.
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-7 flex-wrap">
                  <Link to="/solutions">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      className="px-6 py-3 bg-[#FFD35B] text-black rounded-full font-semibold shadow"
                    >
                      Explore Solutions
                    </motion.a>
                  </Link>
                  <Link to="/partner-with-us">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      className="px-6 py-3 bg-[#0E8299] text-white rounded-full font-semibold"
                    >
                      Partner with Us
                    </motion.a>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-2/5 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
                aria-hidden
              >
                <style jsx>{`
                  input[type="range"] {
                    -webkit-appearance: none; /* Remove default WebKit styles */
                    width: 100%;
                    height: 8px;
                    background: transparent;
                    outline: none;
                  }

                  /* WebKit (Chrome, Safari) */
                  input[type="range"]::-webkit-slider-runnable-track {
                    height: 8px;
                    background: #e5e7eb; /* Light gray track */
                    border-radius: 4px;
                  }

                  input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 16px;
                    height: 16px;
                    background: #0e8299; /* Your desired color */
                    border-radius: 50%;
                    cursor: pointer;
                    margin-top: -4px; /* Center thumb on track */
                  }

                  input[type="range"]:focus::-webkit-slider-runnable-track {
                    background: #d1d5db; /* Slightly darker track on focus */
                  }

                  /* Mozilla (Firefox) */
                  input[type="range"]::-moz-range-track {
                    height: 8px;
                    background: #e5e7eb;
                    border-radius: 4px;
                  }

                  input[type="range"]::-moz-range-thumb {
                    width: 16px;
                    height: 16px;
                    background: #0e8299; /* Your desired color */
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                  }

                  input[type="range"]:focus::-moz-range-track {
                    background: #d1d5db;
                  }
                `}</style>
                <div className="text-left">
                  <div className="text-xl text-white">Quick EMI Preview</div>
                  <div className="mt-3">
                    <div className="flex items-center gap-3">
                      <div className="text-white font-semibold">Amount</div>
                      <div className="ml-auto text-white/90">
                        ₹{Number(emiAmount).toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-2 relative">
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="1000"
                        value={emiAmount}
                        onChange={(e) => setEmiAmount(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-3 flex gap-3">
                      <div className="flex-1">
                        <div className="text-sm text-white/90">Interest %</div>
                        <input
                          type="range"
                          min="6"
                          max="22"
                          step="0.1"
                          value={emiInterest}
                          onChange={(e) =>
                            setEmiInterest(Number(e.target.value))
                          }
                          className="w-full"
                        />
                        <div className="text-white font-semibold">
                          {emiInterest}% p.a.
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-white/90">Tenure</div>
                        <input
                          type="range"
                          min="6"
                          max="240"
                          step="1"
                          value={emiTenure}
                          onChange={(e) => setEmiTenure(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="text-white font-semibold">
                          {emiTenure} months
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-white/10 p-3 rounded-md">
                      <div className="text-white font-bold text-lg">
                        EMI: ₹{emiResult.emi.toLocaleString()}
                      </div>
                      <div className="text-white text-sm mt-1">
                        Total payment: ₹
                        {emiResult.totalPayment.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 -mt-10"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 md:p-10 bg-gradient-to-br from-white to-white/90">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Large enough to Deliver Agile enough to Care
            </h3>
            <p className="mt-4 text-gray-600">
              Enterprise-grade operations, RBI-compliant tooling, and local
              delivery expertise across India.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-[#b9edf8] p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-[#0E8299]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Compliance-first
                  </div>
                  <div className="text-sm text-gray-600">
                    Audit trails, KYC workflows & governance baked in.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-[#b9edf8] p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-[#0E8299]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Ops at scale
                  </div>
                  <div className="text-sm text-gray-600">
                    Run 10 to 1000+ seats with consistent SLAs.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-[#b9edf8] p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-[#0E8299]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Human + AI</div>
                  <div className="text-sm text-gray-600">
                    AI-native tooling with human oversight for accuracy.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-10 bg-gray-50 w-full flex flex-col justify-center">
            <div className="flex flex-row justify-between items-center  sm:grid sm:grid-cols-2 gap-0 sm:gap-4">
              <div className="bg-white p-2 rounded-md shadow flex-1 text-center">
                <StatCounter end={120} suffix="+" label="Banks & NBFCs" />
              </div>
              <div className="bg-white p-2 rounded-md shadow flex-1 text-center">
                <StatCounter end={5000} suffix="+" label="Loans Processed" />
              </div>
              <div className="bg-white p-2 rounded-md shadow flex-1 text-center">
                <StatCounter end={85} suffix="%" label="Avg NPS" />
              </div>
              <div className="bg-white p-2 rounded-md shadow flex-1 text-center">
                <StatCounter end={24} suffix="h" label="Avg Disbursal Time" />
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-white/95">
            <h4 className="font-extrabold text-gray-900 text-2xl">
              What we deliver
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 items-start">
                <FileCheck className="w-6 h-6 text-[#0E8299] mt-1" />
                <div>
                  <div className="font-semibold">RBI-ready compliance</div>
                  <div className="text-sm text-gray-600">
                    End-to-end audit logs & secured data flows.
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Zap className="w-6 h-6 text-[#0E8299] mt-1" />
                <div>
                  <div className="font-semibold">Fast integrations</div>
                  <div className="text-sm text-gray-600">
                    APIs and plug-and-play modules to reduce time-to-market.
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <BarChart className="w-6 h-6 text-[#0E8299] mt-1" />
                <div>
                  <div className="font-semibold">Operational excellence</div>
                  <div className="text-sm text-gray-600">
                    KPI-driven processes for quality & speed.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 px-6 bg-[#e6f8fc]"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Lightning-fast upgrades with{" "}
            <span className="text-[#0E8299]">Instant Cash</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Fyntegra — empowering your financial freedom like never before!
          </p>
          <div className="text-sm text-gray-500 mb-8 flex justify-center gap-4 flex-wrap">
            <span>Funds in your account within hours</span>
            <span>Swift loan approvals</span>
            <span>Flexible repayment options</span>
            <span>Single application for multiple loans</span>
          </div>
          <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0E8299] text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleGetLoanClick}
              className="px-6 py-1 bg-[#0E8299] text-white rounded-lg hover:bg-[#001935] transition duration-300 shadow-lg"
            >
              Get your loan now
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-lg text-gray-600 uppercase tracking-wider">
            Trusted by
          </h3>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
            Banks, NBFCs & Fintechs
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We partner with a wide ecosystem of financial institutions and
            fintechs
          </p>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-4 bg-white/60 rounded-lg flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-400 text-sm">Partner</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-[#e6f8fc]"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Loans to match your goals
          </h2>
          <p className="text-center text-gray-600 mb-8">
            A variety of products supported by partner lenders — consumer,
            secured & business financing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition flex flex-col items-center"
              >
                {loan.icon}
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{loan.title}</h3>
                </div>
                <p className="text-gray-600 mt-3 text-center">{loan.desc}</p>
                <div className="mt-4">
                  <button
                    onClick={() => setSelectedLoan(loan.title)}
                    className="inline-block px-4 py-2 rounded-full bg-[#0E8299] text-white"
                  >
                    Apply
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedLoan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-8 rounded-xl shadow-2xl w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-2">
                Apply for {selectedLoan}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Fill in your details below. Our team will get in touch with you
                soon.
              </p>
              <div className="space-y-4">
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
                  placeholder="Phone Number"
                  type="tel"
                  required
                />
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
                  placeholder="Loan Amount"
                  type="number"
                  required
                />
                <textarea
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
                  placeholder="Additional Information"
                  rows="3"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      alert("Application submitted!");
                      setSelectedLoan(null);
                    }}
                    className="px-5 py-2 bg-[#0E8299] text-white rounded hover:bg-[#001935]"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setSelectedLoan(null)}
                    className="px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4">EMI Calculator</h3>
          <p className="text-sm text-gray-600 mb-6">
            Plan your monthly outflow — tweak amount, rate and tenure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={emiAmount}
                onChange={(e) => setEmiAmount(Number(e.target.value))}
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Interest % p.a.
              </label>
              <input
                type="number"
                value={emiInterest}
                onChange={(e) => setEmiInterest(Number(e.target.value))}
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tenure (months)
              </label>
              <input
                type="number"
                value={emiTenure}
                onChange={(e) => setEmiTenure(Number(e.target.value))}
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E8299]"
              />
            </div>
            <div className="bg-[#e6f8fc] p-4 rounded-lg flex flex-col justify-center">
              <div className="text-sm text-gray-600">Monthly EMI</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                ₹{emiResult.emi.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Total interest: ₹{emiResult.totalInterest.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Total payment: ₹{emiResult.totalPayment.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-white"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold">Eligibility Check</h3>
          <p className="text-gray-600 mt-2 mb-6">
            Soft-check your eligibility without affecting credit score.
          </p>
          <div className="inline-flex items-center gap-3 w-full md:w-auto">
            <input
              placeholder="Mobile number"
              className="p-3 border rounded-l-lg w-48 md:w-64"
            />
            <button className="px-5 py-3 bg-[#0E8299] text-white rounded-r-lg">
              Check Now
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            We use encrypted channels for all data shared.
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-[#e6f8fc]"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-center">
            Document Checklist
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Keep these handy for a smooth application.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">KYC Documents</div>
              <div className="text-sm text-gray-600 mt-2">
                Aadhaar, PAN, Passport (if applicable)
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">Income Proof</div>
              <div className="text-sm text-gray-600 mt-2">
                Salary slips, ITR, Bank statements
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">
                Property / Collateral Documents
              </div>
              <div className="text-sm text-gray-600 mt-2">
                If taking secured loans
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="font-semibold">Other</div>
              <div className="text-sm text-gray-600 mt-2">
                Signed application, recent photographs
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-white"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-6">
            Why Fyntegra
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Large enough to deliver, agile enough to care — what that means in
            practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-green-50 shadow-lg">
              <div className="text-lg font-semibold mb-2">
                RBI-compliant LSP
              </div>
              <p className="text-gray-600">
                Governance, KYC, audit trails and secure data handling across
                flows.
              </p>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5">
                <li>Audit logs & role-based access</li>
                <li>Regulatory reporting support</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-yellow-50 shadow-lg">
              <div className="text-lg font-semibold mb-2">
                Faster Disbursals
              </div>
              <p className="text-gray-600">
                AI-assisted verifications and fast human review lanes.
              </p>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5">
                <li>Pre-filled KYC & auto validations</li>
                <li>Parallel verifications for speed</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-blue-50 shadow-lg">
              <div className="text-lg font-semibold mb-2">
                Smarter Collections
              </div>
              <p className="text-gray-600">
                Data-driven prioritization & omnichannel engagement to improve
                recovery.
              </p>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5">
                <li>Predictive reminders & nudges</li>
                <li>Omnichannel outreach with consent logs</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-[#e6f8fc]"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            LSP Solutions for Banks & Fintechs
          </h2>
          <p className="text-center text-gray-600 mb-8">
            End-to-end funnel management powered by AI + human delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Customer Experience & Sales",
                desc: "Conversational IVR, sales assist and better conversions.",
              },
              {
                title: "Collections & Recovery",
                desc: "Smart prioritization and agent workflows.",
              },
              {
                title: "Compliance & Verification",
                desc: "End-to-end KYC and audit-ready flows.",
              },
              {
                title: "AI + SaaS Tools",
                desc: "Decisioning, lead scoring and reporting tools.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-5 rounded-xl bg-white shadow"
              >
                <div className="font-semibold mb-2">{s.title}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
                <Link
                  className="mt-4 inline-block text-sm text-[#0E8299]"
                  to="/platform"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-white"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">The Fyntegra LSP Platform</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            A secure, modular, API-first stack built for lenders to manage
            end-to-end operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              "Dashboard",
              "Reports",
              "Compliance Module",
              "SaaS Tools",
              "Support",
            ].map((f, i) => (
              <div
                key={i}
                className="p-4 bg-[#e6f8fc] rounded-lg shadow font-medium text-sm"
              >
                {f}
              </div>
            ))}
          </div>
          <Link to="/platform">
            <button className="inline-block px-6 py-3 bg-[#0E8299] text-white rounded-full cursor-pointer">
              Explore Platform
            </button>
          </Link>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-[#e6f8fc]"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">
            What clients say
          </h3>
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
                <p className="italic text-gray-700">
                  “{testimonials[testIndex].quote}”
                </p>
                <div className="mt-4 font-semibold text-gray-900">
                  {testimonials[testIndex].author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[testIndex].role}
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
                className="px-3 py-2 bg-white rounded-lg shadow"
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
                className="px-3 py-2 bg-white rounded-lg shadow"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-white"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Frequently asked questions
            </h3>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div className="font-medium">{f.q}</div>
                    <div className="text-gray-500">
                      {openFaq === i ? "−" : "+"}
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="mt-3 text-sm text-gray-600">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <p className="text-gray-600 mb-4">
              Interested in partnering or want a demo? Leave your details and
              we’ll reach out.
            </p>
            <div className="space-y-3">
              <input
                className="w-full p-3 border rounded"
                placeholder="Full name"
              />
              <input
                className="w-full p-3 border rounded"
                placeholder="Company / Institution"
              />
              <input
                className="w-full p-3 border rounded"
                placeholder="Work email"
              />
              <textarea
                className="w-full p-3 border rounded"
                placeholder="Short message"
                rows="3"
              />
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#0E8299] text-white rounded">
                  Request Demo
                </button>
                <button className="px-4 py-2 bg-white border rounded">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

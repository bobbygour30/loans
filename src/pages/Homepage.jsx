import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import WheelSpinner from "../components/WheelSpinner";
import ArcRings from "../components/ArcRings";
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
      <div className="text-xl sm:text-4xl font-extrabold text-black">
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
      icon: <Landmark className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Business Loan",
      desc: "Fuel your business growth with tailored working capital solutions. Whether it’s expanding operations, purchasing inventory, or investing in equipment, our loans offer flexible terms and fast disbursals to support your entrepreneurial journey.",
      icon: <Building2 className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Gold Loan",
      desc: "Unlock quick liquidity by pledging your gold assets. Benefit from low interest rates, minimal documentation, and instant disbursal, all while retaining ownership of your gold with our secure and transparent process.",
      icon: <Gem className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Home Loan",
      desc: "Make your dream home a reality with our competitive home loan rates. Enjoy long repayment tenures, easy documentation, and personalized support to finance your home purchase or construction effortlessly.",
      icon: <Home className="w-8 h-8 text-red-600" />,
    },
    {
      title: "LAMF",
      desc: "Access liquidity against mutual funds without redeeming your investments. Our Loan Against Mutual Funds (LAMF) offers low rates and flexible terms, allowing you to retain your portfolio’s growth potential.",
      icon: <LineChart className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Vehicle Loans",
      desc: "Drive your dream car or bike with our vehicle loans, offering affordable EMIs, quick approvals, and financing for both new and used vehicles. Get on the road with minimal hassle and tailored repayment plans.",
      icon: <Car className="w-8 h-8 text-red-600" />,
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
        <div className="bg-gradient-to-r from-red-700 to-black text-white py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* LEFT SECTION */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-flex items-center text-sm bg-white/10 px-3 py-1 rounded-full mb-4 font-medium">
                  Launching Now
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
                  AI-Led International BPO for{" "}
                  <span className="text-red-300">CX, Collections & Sales</span>
                </h1>
                <p className="mt-4 text-lg text-gray-100 max-w-2xl">
                  Recover more. Sell more. Combine human expertise with voicebots,
                  speech analytics, and playbook-driven operations to increase
                  resolution rates and conversion without exploding cost.
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-6 flex-wrap">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    className="px-6 py-3 bg-black text-white rounded-full font-semibold shadow"
                    href="#"
                  >
                    Book a 20-min discovery call
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow"
                    href="#"
                  >
                    Explore services
                  </motion.a>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-left text-sm text-gray-200">
                  <p>DRA-certified agents (collections)</p>
                  <p>Realtime call transfer to experts</p>
                  <p>4-week bot go-live playbook</p>
                  <p>Secure, compliant, auditable</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-6 items-center justify-center md:justify-start text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">DPDP-aware</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">4-week bot pilot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">Pan-India & remote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">Dedicated pods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">LLM + ASR stack</span>
                  </div>
                </div>
              </div>
              {/* RIGHT SECTION */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-2/5 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg text-left">
                    <div className="flex items-center gap-2 text-white/80 mb-1">
                      <span>Connectivity</span>
                    </div>
                    <div className="text-2xl font-bold text-white">60–80%</div>
                    <div className="text-xs text-gray-300">
                      with smart retry windows
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left">
                    <div className="flex items-center gap-2 text-white/80 mb-1">
                      <span>RPC Uplift</span>
                    </div>
                    <div className="text-2xl font-bold text-white">15–30%</div>
                    <div className="text-xs text-gray-300">pilot vs baseline*</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left">
                    <div className="flex items-center gap-2 text-white/80 mb-1">
                      <span>Cost/Contact</span>
                    </div>
                    <div className="text-2xl font-bold text-white">↓ 20–35%</div>
                    <div className="text-xs text-gray-300">bot + assist</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left">
                    <div className="flex items-center gap-2 text-white/80 mb-1">
                      <span>Compliance</span>
                    </div>
                    <div className="text-xl font-bold text-white">Audit-ready</div>
                    <div className="text-xs text-gray-300">DPDP & RBI aligned</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  *Uplift ranges are indicative; actual results depend on portfolio
                  and use-case.
                </p>
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
          <div className="p-8 md:p-10 bg-gradient-to-br from-white to-gray-50">
            <h3 className="text-2xl font-extrabold text-black">
              Large enough to Deliver Agile enough to Care
            </h3>
            <p className="mt-4 text-gray-600">
              Enterprise-grade operations, RBI-compliant tooling, and local
              delivery expertise across India.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-black">
                    Compliance-first
                  </div>
                  <div className="text-sm text-gray-600">
                    Audit trails, KYC workflows & governance baked in.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-black">
                    Ops at scale
                  </div>
                  <div className="text-sm text-gray-600">
                    Run 10 to 1000+ seats with consistent SLAs.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-black">Human + AI</div>
                  <div className="text-sm text-gray-600">
                    AI-native tooling with human oversight for accuracy.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArcRings />
          <div className="p-8 md:p-10 bg-white/95 mt-16 sm:mt-0">
            <h4 className="font-extrabold text-black text-2xl">
              What we deliver
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 items-start">
                <FileCheck className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <div className="font-semibold">RBI-ready compliance</div>
                  <div className="text-sm text-gray-600">
                    End-to-end audit logs & secured data flows.
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Zap className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <div className="font-semibold">Fast integrations</div>
                  <div className="text-sm text-gray-600">
                    APIs and plug-and-play modules to reduce time-to-market.
                  </div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <BarChart className="w-6 h-6 text-red-600 mt-1" />
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
        className="py-20 px-6 bg-gray-50"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Lightning-fast upgrades with{" "}
            <span className="text-red-600">Instant Cash</span>
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
              className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleGetLoanClick}
              className="px-6 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 shadow-lg"
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
        className="py-12 px-6 bg-gray-50"
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
                    className="inline-block px-4 py-2 rounded-full bg-red-600 text-white"
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
              className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4"
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
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Phone Number"
                  type="tel"
                  required
                />
                <input
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Loan Amount"
                  type="number"
                  required
                />
                <textarea
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Additional Information"
                  rows="3"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      alert("Application submitted!");
                      setSelectedLoan(null);
                    }}
                    className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center">
              <div className="text-sm text-gray-600">Monthly EMI</div>
              <div className="text-2xl font-bold text-black mt-1">
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
            <button className="px-5 py-3 bg-red-600 text-white rounded-r-lg">
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
        className="py-12 px-6 bg-gray-50"
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
            Services that move the needle
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Engineered for outcomes, not headcount.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-red-50 shadow-lg">
              <div className="text-lg font-semibold mb-2">
                BPO Pods (Collections & Sales)
              </div>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Early + late bucket recoveries (DRA)</li>
                <li>Pre-sales, inside sales, renewals</li>
                <li>Playbooks, RC codes, QA at scale</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-gray-50 shadow-lg">
              <div className="text-lg font-semibold mb-2">
                Voicebots & Agent Assist
              </div>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Tele-verification, reminders, callbacks</li>
                <li>Live transfer to human with context</li>
                <li>Minutes-based pricing, fast integration</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-gray-50 shadow-lg">
              <div className="text-lg font-semibold mb-2">
                Speech Analytics & QA Automation
              </div>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Auto-scorecards, sentiment, keyword flags</li>
                <li>Root-cause on churn & non-contact</li>
                <li>Coaching insights, 100% coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-gray-50"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Our AI operations stack
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Plug-and-play modules that fit your tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "ASR/TTS",
                desc: "High-accuracy speech in Indian languages with barge-in and latency-tuned flows.",
              },
              {
                title: "Dialog Orchestration",
                desc: "LLM-guardrailed flows, business rules, and dynamic slot-filling for KYC/TVR.",
              },
              {
                title: "Analytics",
                desc: "Call reason codes, talk-time, sentiment, auto-QA and coaching insights.",
              },
              {
                title: "Security",
                desc: "PII redaction, consent capture, encrypted storage, auditable trails.",
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
                  className="mt-4 inline-block text-sm text-red-600"
                  to="/platform"
                >
                  Learn more
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
        viewport={{ once: true }}
        className="py-12 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Industries we serve
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Playbooks tailored for each vertical.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Banks & NBFCs",
                desc: "Retail lending, cards, gold, PL, LAS, MSME.",
              },
              {
                title: "Fintech & BNPL",
                desc: "Scale with predictable CX cost and better RPC.",
              },
              {
                title: "Telco & ISP",
                desc: "Churn saves, ARPU upgrades, collections.",
              },
              {
                title: "Airlines & Travel",
                desc: "Disruption calls, refunds, cross-sell.",
              },
              {
                title: "Health & EdTech",
                desc: "Admissions and renewals at higher SLAs.",
              },
              {
                title: "eCom & Logistics",
                desc: "NDR reduction, delivery confirmations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-5 rounded-xl bg-gradient-to-tr from-white to-gray-50 shadow"
              >
                <div className="font-semibold mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <span className="text-sm font-medium text-red-600 tracking-wider uppercase">
              WHY US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Outcomes over headcount
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Pay for results, not chaos.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column – Benefits */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <ul className="space-y-6">
                {[
                  "Higher contact rates with precision retry windows",
                  "Better RPC via scripted + AI assist",
                  "QA automation with 100% coverage",
                  "Fewer escalations with clear playbooks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Right column – Go-live Playbook */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-8">
                Go-live Playbook (First 4 Weeks)
              </h3>
              <ol className="space-y-6 text-gray-700">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </span>
                  <span>
                    Use-case & data mapping, consent flows
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </span>
                  <span>
                    Bot script & RC codes; QA rubric
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                  <span>
                    Pilot run (A/B) + live transfer setup
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </span>
                  <span>
                    Scale seats/bot minutes with weekly reviews
                  </span>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <span className="text-sm font-medium text-red-600 tracking-wider uppercase">
              Transparent
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Simple, scalable pricing
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Start with a pilot, scale with confidence.
            </p>
          </div>
          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Voicebot */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">Voicebot</h3>
                <p className="text-gray-500 mb-3">Indicative</p>
                <p className="text-3xl font-bold mb-6">₹3.5–4.5 / minute</p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'IVR/TVR, reminders, callbacks',
                    'Realtime transfer to agent',
                    'Outcome CSV/JSON export',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 font-medium hover:bg-gray-200 transition">
                Request proposal
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
            {/* BPO Seat */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">BPO Seat (Dedicated)</h3>
                <p className="text-gray-500 mb-3">Indicative</p>
                <p className="text-3xl font-bold mb-6">₹40K–45K / seat / month</p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'DRA-certified agents for collections',
                    'Sales/renewals pods',
                    'QA, MIS, supervisor included',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 font-medium hover:bg-gray-200 transition">
                Request proposal
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
            {/* Speech Analytics */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">Speech Analytics</h3>
                <p className="text-gray-500 mb-3">Indicative</p>
                <p className="text-3xl font-bold mb-6">Custom (volume-based)</p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Auto-scorecards & sentiment',
                    '100% call coverage',
                    'Coaching insights',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 font-medium hover:bg-gray-200 transition">
                Request proposal
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <span className="text-sm font-medium text-red-600 tracking-wider uppercase">
              Credibility
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Proof of execution
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Built by operators who’ve scaled CX for high-growth brands.
            </p>
          </div>
          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">Playbooks & SOPs</h3>
              <p className="text-gray-600 leading-relaxed">
                Documented SOPs, scripts, RC codes, and QA rubrics for fast onboarding.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                DPDP-aware data handling, encryption at rest & transit, consent capture.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">Scale Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Start with a pilot. Add seats/minutes as outcomes prove out.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">People</p>
            <h2 className="text-4xl font-bold mt-2">Leadership</h2>
            <p className="text-lg text-gray-600 mt-2">
              Operators with lending, CX, and BPO scale-up DNA.
            </p>
          </div>
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leader Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center font-semibold text-gray-700">
                  FP
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Farooq Patel</h3>
                  <p className="text-gray-500">Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Ex-Fibe (CX, Sales, BNPL, Cards)
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
                  </svg>
                  Scaled AUM ~₹100Cr → ₹5,000Cr
                </span>
              </div>
              <div className="flex gap-3 mb-6">
                <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
                  LinkedIn
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
                  Email
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Farooq is a growth-oriented CX & collections operator with deep lending
                experience. He has built large teams, bots, and processes that improve
                RPC, reduce cost, and elevate customer outcomes.
              </p>
            </motion.div>
            {/* Advisory Board */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Advisory Board</h3>
              <div className="grid grid-cols-2 gap-y-2 text-gray-700">
                <span>Lending & Risk</span>
                <span>Compliance & Audit</span>
                <span>AI & Telephony</span>
                <span>Enterprise Delivery</span>
              </div>
              <p className="text-gray-500 text-sm mt-4">(Names to be announced)</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Next Step</p>
            <h2 className="text-4xl font-bold mt-2">Tell us your use-case</h2>
            <p className="text-lg text-gray-600 mt-2">We’ll reply within 1 business day.</p>
          </div>
          {/* Form Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Form */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Work email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input
                      type="text"
                      placeholder="Company Pvt Ltd"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="text"
                      placeholder="+91-"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    What do you want to launch?
                  </label>
                  <textarea
                    placeholder="Eg. 25 collections seats + TVR bot for 10k calls/week"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full md:w-auto px-8 py-3 bg-black text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                >
                  Get a proposal
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-sm text-gray-500">
                  By submitting, you agree to our Terms and acknowledge our Privacy Policy.
                </p>
              </form>
            </motion.div>
            {/* Right Contact Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="flex flex-wrap items-center gap-3 text-gray-700 mb-6">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4 4m4-4l-4-4" />
                  </svg>
                  hello@fyntegra.com
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 6c0 7-9 13-9 13S3 15 3 8a6 6 0 0 1 12 0Z" />
                  </svg>
                  +91-XXXXXXXXXX
                </span>
                <span>Pune • Delhi NCR • Bengaluru</span>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-semibold mb-2">Fast POC Offer</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pilot a TVR/Reminder bot in 4 weeks. Includes scripting, QA rubric,
                  outcome export, and live-transfer setup.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

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
                className="p-4 bg-gray-50 rounded-lg shadow font-medium text-sm"
              >
                {f}
              </div>
            ))}
          </div>
          <Link to="/platform">
            <button className="inline-block px-6 py-3 bg-red-600 text-white rounded-full cursor-pointer">
              Explore Platform
            </button>
          </Link>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-gray-50"
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
                <div className="mt-4 font-semibold text-black">
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
                <button className="px-4 py-2 bg-red-600 text-white rounded">
                  Request Demo
                </button>
                <button className="px-4 py-2 bg-white border border-red-600 text-red-600 rounded">
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
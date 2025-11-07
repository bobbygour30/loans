import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import WheelSpinner from "../components/WheelSpinner";
import ArcRings from "../components/ArcRings";
import assets from "../assets/assets";
import {
  LockClosedIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CpuChipIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Lock,
  Rocket,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FileText,
  Building,
  Headphones,
  BarChart3,
  Shield,
  Smartphone,
  PhoneCall,
  Plane,
  Heart,
  Package,
} from "lucide-react";
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
                {/* Launching Now + Logo + Powered by */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                  {/* Launching Now Badge */}
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    className="inline-flex items-center text-sm bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold shadow-lg uppercase tracking-wider"
                  >
                    <BoltIcon className="w-5 h-5 mr-1.5" />
                    Launching Now
                  </motion.span>

                  {/* Fyntegra Logo – Fade In/Out */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center"
                  >
                    <img
                      src={assets.logo2}
                      alt="Fyntegra Logo"
                      className="w-25 object-contain"
                    />
                  </motion.div>

                  {/* Powered by Konexions – Subtle Pulse */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="text-xs text-gray-300 font-medium tracking-wide"
                  >
                    Powered by Konexions
                  </motion.span>
                </div>

                {/* Main Heading with Underline */}
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-sm relative inline-block">
                  AI-Driven International BPO for{" "}
                  <span className="text-red-300">CX, Collections & Sales</span>
                  {/* Full-Width Gradient Underline */}
                  <span
                    className="absolute left-0 -bottom-1 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full opacity-90"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #facc15, #fb923c, #dc2626)",
                      filter: "blur(0.4px)",
                    }}
                  ></span>
                </h1>

                <p className="mt-4 text-lg text-gray-100 max-w-2xl">
                  Recover more. Sell more. Combine human expertise with
                  voicebots, speech analytics, and playbook-driven operations to
                  increase resolution rates and conversion without exploding
                  cost.
                </p>

                <div className="mt-6 flex justify-center md:justify-start gap-6 flex-wrap">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg border border-white/30 hover:bg-white hover:text-black transition-all"
                    href="#"
                  >
                    Book a 20-min discovery call
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-all"
                    href="#"
                  >
                    Explore services
                  </motion.a>
                </div>

                {/* Feature Checkmarks */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-sm text-gray-200">
  <p className="flex items-center justify-center md:justify-start gap-2">
    <span className="text-green-400">Check</span> DRA-certified agents (collections)
  </p>
  <p className="flex items-center justify-center md:justify-start gap-2">
    <span className="text-green-400">Check</span> Realtime call transfer to experts
  </p>
  <p className="flex items-center justify-center md:justify-start gap-2">
    <span className="text-green-400">Check</span> 4-week bot go-live playbook
  </p>
  <p className="flex items-center justify-center md:justify-start gap-2">
    <span className="text-green-400">Check</span> Secure, compliant, auditable
  </p>
</div>
              </div>

              {/* RIGHT SECTION - Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-2/5 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg text-left backdrop-blur">
                    <div className="text-white/80 mb-1 font-medium">
                      Connectivity
                    </div>
                    <div className="text-2xl font-bold text-white">60–80%</div>
                    <div className="text-xs text-gray-300">
                      with smart retry windows
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left backdrop-blur">
                    <div className="text-white/80 mb-1 font-medium">
                      RPC Uplift
                    </div>
                    <div className="text-2xl font-bold text-white">15–30%</div>
                    <div className="text-xs text-gray-300">
                      pilot vs baseline*
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left backdrop-blur">
                    <div className="text-white/80 mb-1 font-medium">
                      Cost/Contact
                    </div>
                    <div className="text-2xl font-bold text-white">
                      ↓ 20–35%
                    </div>
                    <div className="text-xs text-gray-300">bot + assist</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-left backdrop-blur">
                    <div className="text-white/80 mb-1 font-medium">
                      Compliance
                    </div>
                    <div className="text-xl font-bold text-white">
                      Audit-ready
                    </div>
                    <div className="text-xs text-gray-300">
                      DPDP & RBI aligned
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">
                  *Uplift ranges are indicative; actual results depend on
                  portfolio and use-case.
                </p>
              </motion.div>
            </motion.div>

            {/* PREMIUM FEATURE TAGS */}
            <div className="mt-12 flex flex-wrap gap-5 justify-center md:justify-start">
              {[
                {
                  text: "DPDP-aware",
                  Icon: LockClosedIcon,
                  color: "text-green-400",
                },
                {
                  text: "4-week bot pilot",
                  Icon: RocketLaunchIcon,
                  color: "text-blue-400",
                },
                {
                  text: "Pan-India & remote",
                  Icon: GlobeAltIcon,
                  color: "text-purple-400",
                },
                {
                  text: "Dedicated pods",
                  Icon: UserGroupIcon,
                  color: "text-yellow-400",
                },
                {
                  text: "LLM + ASR stack",
                  Icon: CpuChipIcon,
                  color: "text-cyan-400",
                },
              ].map(({ text, Icon, color }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full font-medium text-white shadow-lg border border-white/30 hover:bg-white/20 transition-all"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-base tracking-wide">{text}</span>
                </motion.div>
              ))}
            </div>
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
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[60vh]">
          <div className="p-8 md:p-10 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center">
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
                  <div className="font-semibold text-black">Ops at scale</div>
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
          <div className="p-8 md:p-10 bg-white/95 mt-16 sm:mt-0 flex flex-col items-center justify-center">
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <span className="text-sm font-medium text-red-600 tracking-wider uppercase flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Transparent
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">
              Simple, scalable pricing
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Start with a pilot, scale with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Voicebot */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:border-red-200 flex flex-col justify-between transition"
            >
              <div>
                <h3 className="text-xl font-bold mb-1 text-black flex items-center gap-2">
                  <Headphones className="w-6 h-6 text-red-600" />
                  Voicebot
                </h3>
                <p className="text-gray-500 mb-3">Indicative</p>
                <p className="text-3xl font-bold mb-6 text-black">
                  ₹3.5–4.5 / minute
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "IVR/TVR, reminders, callbacks",
                    "Realtime transfer to agent",
                    "Outcome CSV/JSON export",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Request proposal
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* BPO Seat */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:border-red-200 flex flex-col justify-between transition"
            >
              <div>
                <h3 className="text-xl font-bold mb-1 text-black flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  BPO Seat (Dedicated)
                </h3>
                <p className="text-gray-500 mb-3">Indicative</p>
                <p className="text-3xl font-bold mb-6 text-black">
                  ₹40K–45K / seat / month
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "DRA-certified agents for collections",
                    "Sales/renewals pods",
                    "QA, MIS, supervisor included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Request proposal
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Speech Analytics */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:border-red-200 flex flex-col justify-between transition"
            >
              <div>
                <h3 className="text-xl font-bold mb-1 text-black flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                  Speech Analytics
                </h3>
                <p className="text-gray-500 mb-3">Indicative</p>
                <p className="text-3xl font-bold mb-6 text-black">
                  Custom (volume-based)
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Auto-scorecards & sentiment",
                    "100% call coverage",
                    "Coaching insights",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                Request proposal
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-20 px-6 bg-gray-50"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 inline-flex items-center flex-wrap justify-center gap-2">
            Lightning-fast upgrades with{" "}
            <span className="text-red-600 inline-flex items-center">
              Instant Cash
              <span className="ml-2 inline-block px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full animate-pulse">
                Launching soon
              </span>
            </span>
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

      {/* Document Checklist */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-gray-50"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <FileText className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-center text-black">
              Document Checklist
            </h3>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Keep these handy for a smooth application.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-red-200 transition">
              <div className="flex items-center">
                <FileCheck className="w-5 h-5 text-red-600 mr-2" />
                <div className="font-semibold text-black">KYC Documents</div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Aadhaar, PAN, Passport (if applicable)
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-red-200 transition">
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 text-red-600 mr-2" />
                <div className="font-semibold text-black">Income Proof</div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Salary slips, ITR, Bank statements
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-red-200 transition">
              <div className="flex items-center">
                <Building className="w-5 h-5 text-red-600 mr-2" />
                <div className="font-semibold text-black">
                  Property / Collateral Documents
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                If taking secured loans
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-red-200 transition">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-red-600 mr-2" />
                <div className="font-semibold text-black">Other</div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Signed application, recent photographs
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-white"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-6 text-black">
            Services that move the needle
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Engineered for outcomes, not headcount.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-red-50 shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
              <div className="flex items-center mb-3">
                <Headphones className="w-6 h-6 text-red-600 mr-2" />
                <div className="text-lg font-semibold text-black">
                  BPO Pods (Collections & Sales)
                </div>
              </div>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Early + late bucket recoveries (DRA)</li>
                <li>Pre-sales, inside sales, renewals</li>
                <li>Playbooks, RC codes, QA at scale</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-gray-50 shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
              <div className="flex items-center mb-3">
                <PhoneCall className="w-6 h-6 text-red-600 mr-2" />
                <div className="text-lg font-semibold text-black">
                  Voicebots & Agent Assist
                </div>
              </div>
              <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
                <li>Tele-verification, reminders, callbacks</li>
                <li>Live transfer to human with context</li>
                <li>Minutes-based pricing, fast integration</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-tr from-white to-gray-50 shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition">
              <div className="flex items-center mb-3">
                <BarChart3 className="w-6 h-6 text-red-600 mr-2" />
                <div className="text-lg font-semibold text-black">
                  Speech Analytics & QA Automation
                </div>
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

      {/* AI Operations Stack */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-gray-50"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
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
                icon: <PhoneCall className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Dialog Orchestration",
                desc: "LLM-guardrailed flows, business rules, and dynamic slot-filling for KYC/TVR.",
                icon: <Brain className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Analytics",
                desc: "Call reason codes, talk-time, sentiment, auto-QA and coaching insights.",
                icon: <BarChart3 className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Security",
                desc: "PII redaction, consent capture, encrypted storage, auditable trails.",
                icon: <Shield className="w-6 h-6 text-red-600" />,
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-5 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition"
              >
                <div className="flex items-center mb-3">
                  {s.icon}
                  <div className="font-semibold text-black ml-2">{s.title}</div>
                </div>
                <div className="text-sm text-gray-600">{s.desc}</div>
                <Link
                  className="mt-4 inline-block text-sm text-red-600 font-medium hover:underline"
                  to="/platform"
                >
                  Learn more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industries */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-12 px-6 bg-white"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
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
                icon: <Landmark className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Fintech & BNPL",
                desc: "Scale with predictable CX cost and better RPC.",
                icon: <Smartphone className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Telco & ISP",
                desc: "Churn saves, ARPU upgrades, collections.",
                icon: <PhoneCall className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Airlines & Travel",
                desc: "Disruption calls, refunds, cross-sell.",
                icon: <Plane className="w-6 h-6 text-red-600" />,
              },
              {
                title: "Health & EdTech",
                desc: "Admissions and renewals at higher SLAs.",
                icon: <Heart className="w-6 h-6 text-red-600" />,
              },
              {
                title: "eCom & Logistics",
                desc: "NDR reduction, delivery confirmations.",
                icon: <Package className="w-6 h-6 text-red-600" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-5 rounded-xl bg-gradient-to-tr from-white to-red-50 shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition"
              >
                <div className="flex items-center mb-3">
                  {item.icon}
                  <div className="font-semibold text-black ml-2">
                    {item.title}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY US Section */}
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
            <span className="text-sm font-medium text-red-600 tracking-wider uppercase flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              WHY US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">
              Outcomes over headcount
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Pay for results, not chaos.
            </p>
          </div>

          {/* Grid with equal height cards */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left column – Benefits */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-50 to-white p-10 rounded-3xl shadow-md border border-gray-100 hover:border-red-200 transition flex flex-col justify-between min-h-0"
            >
              <ul className="space-y-6 flex-1">
                {[
                  "Higher contact rates with precision retry windows",
                  "Better RPC via scripted + AI assist",
                  "QA automation with 100% coverage",
                  "Fewer escalations with clear playbooks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-black font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right column – Go-live Playbook */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:border-red-200 transition flex flex-col justify-between min-h-0"
            >
              <div>
                <h3 className="text-2xl font-bold mb-8 text-black flex items-center gap-3">
                  <Rocket className="w-7 h-7 text-red-600" />
                  Go-live Playbook (First 4 Weeks)
                </h3>
                <ol className="space-y-6 text-gray-700">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </span>
                    <span>Use-case & data mapping, consent flows</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </span>
                    <span>Bot script & RC codes; QA rubric</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </span>
                    <span>Pilot run (A/B) + live transfer setup</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                      4
                    </span>
                    <span>Scale seats/bot minutes with weekly reviews</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Proof of Execution */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <span className="text-sm font-medium text-red-600 tracking-wider uppercase flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Credibility
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">
              Proof of execution
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Built by operators who’ve scaled CX for high-growth brands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-red-200 transition"
            >
              <FileText className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-black">
                Playbooks & SOPs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Documented SOPs, scripts, RC codes, and QA rubrics for fast
                onboarding.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-red-200 transition"
            >
              <Lock className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-black">
                Security & Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                DPDP-aware data handling, encryption at rest & transit, consent
                capture.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-red-200 transition"
            >
              <Rocket className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-black">
                Scale Ready
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Start with a pilot. Add seats/minutes as outcomes prove out.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Leadership Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <Users className="w-4 h-4 text-red-600" />
              People
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black">
              Leadership
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl">
              Operators with lending, CX, and BPO scale-up DNA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Nitin Chopra */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-red-200 transition"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  className="w-20 h-20 bg-gray-200 border-2 border-dashed rounded-xl"
                  src={assets.nitin}
                  alt="Nitin Chopra"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Nitin Chopra
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Chairman, Konexions • Strategic Advisor, Fyntegra
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nitin Chopra is the Founder & Chairman of{" "}
                <strong>Konexions</strong>, one of India’s most established BPM
                networks — now clocking{" "}
                <strong>₹500 Cr+ in annual revenue</strong> with a clear roadmap
                to <strong>₹2,500 Cr</strong> through its strategic merger with
                Fyntegra.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With over two decades of leadership experience across customer
                lifecycle management, collections, and digital transformation,
                he has scaled Konexions into a trusted partner for India’s top
                banks, NBFCs, and fintechs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At <strong>Fyntegra</strong>, he serves as Strategic Advisor &
                Chairman, guiding enterprise governance, multi-site delivery,
                and compliance frameworks that blend traditional operational
                depth with AI-driven automation.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/nitin-chopra-7b60a380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
            {/* Farooq Patel */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-red-200 transition"
            >
              <div className="flex items-center gap-5 mb-6">
                <img
                  className="w-20 h-20 bg-gray-200 border-2 border-dashed rounded-xl"
                  src={assets.farooq}
                  alt="Farooq Patel"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    Farooq Patel
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Founder & CEO, Fyntegra (Backed by Konexions)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Farooq Patel is the Founder & CEO of <strong>Fyntegra</strong>,
                an AI-driven BPO platform backed by Konexions. Fyntegra is
                redefining how banks, NBFCs, and fintechs scale collections,
                sales, and customer experience through a seamless blend of human
                expertise and intelligent automation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before founding Fyntegra, Farooq held leadership roles at{" "}
                <strong>Fibe (EarlySalary)</strong>, where he led CX, Sales,
                BNPL, and Cards — helping the business achieve{" "}
                <strong>2x to 10x growth</strong>
                through operational efficiency, automation, and people
                excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Earlier at <strong>JP Morgan</strong>, he played multiple roles
                across customer experience, recruiting, and operations, gaining
                deep exposure to global banking processes and large-scale
                execution.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/farooq-patel-b2182524a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-4 h-4 text-red-600" />
              Next Step
            </p>
            <h2 className="text-4xl font-bold mt-2 text-black">
              Tell us your use-case
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              We’ll reply within 1 business day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Form */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:border-red-200 transition"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">
                      Work email
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Pvt Ltd"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-black">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+91-"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">
                    What do you want to launch?
                  </label>
                  <textarea
                    placeholder="Eg. 25 collections seats + TVR bot for 10k calls/week"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition placeholder-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get a proposal
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-gray-500">
                  By submitting, you agree to our Terms and acknowledge our
                  Privacy Policy.
                </p>
              </form>
            </motion.div>
            {/* Right Contact Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-gray-100 shadow-md hover:border-red-200 transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-black flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                Contact
              </h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>hello@fyntegra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Pune • Delhi NCR • Bengaluru</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100">
                <h4 className="font-semibold mb-2 text-black flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  Fast POC Offer
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pilot a TVR/Reminder bot in 4 weeks. Includes scripting, QA
                  rubric, outcome export, and live-transfer setup.
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ShieldCheck, Smile, BarChart3, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "Financial Institution",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [testIndex, setTestIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const partnershipTypes = ["Financial Institution", "Fintech", "NBFC", "Technology Provider", "Other"];

  const partnerBenefits = [
    {
      title: "Scalable Technology",
      desc: "Leverage our API-first platform to streamline lending operations.",
      icon: <Users className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Compliance Ready",
      desc: "RBI-compliant solutions with audit trails and reporting tools.",
      icon: <ShieldCheck className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Enhanced CX",
      desc: "Improve customer satisfaction with AI-driven engagement tools.",
      icon: <Smile className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Data Insights",
      desc: "Access real-time analytics to optimize lending decisions.",
      icon: <BarChart3 className="w-8 h-8 text-[#d60000]" />,
    },
  ];

  const successStories = [
    {
      title: "National Bank Partnership",
      desc: "Integrated Fyntegra’s platform to streamline KYC and disbursals, reducing onboarding time by 50%.",
      impact: "40% increase in loan conversions",
    },
    {
      title: "Fintech Collaboration",
      desc: "Leveraged AI risk models to reduce defaults and improve portfolio performance.",
      impact: "20% reduction in NPA rates",
    },
  ];

  const faqs = [
    {
      q: "What types of organizations can partner with Fyntegra?",
      a: "We partner with banks, NBFCs, fintechs, and technology providers looking to enhance their lending capabilities.",
    },
    {
      q: "How long does it take to integrate your platform?",
      a: "Our API-first platform allows integration within weeks, depending on your existing systems and requirements.",
    },
    {
      q: "What support do partners receive?",
      a: "Partners get dedicated account managers, 24/7 technical support, and access to training resources.",
    },
  ];

  const testimonials = [
    {
      quote: "Partnering with Fyntegra transformed our lending process, making it faster and more efficient.",
      author: "Head of Operations, National Bank",
    },
    {
      quote: "Their platform’s scalability helped us grow our loan portfolio seamlessly.",
      author: "CEO, Fintech Startup",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
      setFormStatus("Please fill out all required fields.");
      return;
    }
    setFormStatus("Partnership inquiry submitted successfully!");
    setFormData({ companyName: "", contactName: "", email: "", phone: "", partnershipType: "Financial Institution", message: "" });
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="partner-with-us" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Partner <span className="text-[#d60000]">With Us</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Join forces with Fyntegra to revolutionize lending with our cutting-edge, compliant, and scalable platform designed for financial institutions and fintechs.
        </motion.p>

        {/* Partnership Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Partnership Inquiry</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Company Name *"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                required
              />
              <input
                type="text"
                placeholder="Contact Name *"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
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
                value={formData.partnershipType}
                onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              >
                {partnershipTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your partnership goals (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                rows="4"
              />
              <button
                onClick={handleFormSubmit}
                className="w-full px-6 py-3 bg-[#d60000] text-white rounded-lg font-semibold hover:bg-[#b50000] transition"
              >
                Submit Inquiry
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

        {/* Partner Benefits */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Why Partner with Fyntegra?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 bg-white rounded-xl shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{b.icon}</div>
                <h4 className="font-semibold text-[#d60000] mb-2">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Our Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-lg">
                <h4 className="font-semibold text-[#d60000] mb-2">{s.title}</h4>
                <p className="text-gray-600 mb-2">{s.desc}</p>
                <p className="text-sm text-gray-500">Impact: {s.impact}</p>
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
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Partners Say</h3>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/partner-with-us"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-[#d60000] text-[#d60000] rounded-full font-semibold hover:bg-[#d60000]/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
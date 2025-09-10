import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Support() {
  const channels = [
    {
      title: "Email Support",
      desc: "Reach out to our team at support@fyntegra.com for detailed assistance on any issue.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M4 4h16v12H4zM20 4l-8 5-8-5" />
        </svg>
      ),
      action: (
        <a href="mailto:support@fyntegra.com" className="mt-4 inline-block text-sm text-[#d60000] hover:underline">
          Send Email
        </a>
      ),
    },
    {
      title: "Live Chat",
      desc: "Get instant answers from our support team via our 24/7 live chat service.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 7.5H4l4-4h4.5a3.5 3.5 0 0 0 0-7H4v-2h17z" />
        </svg>
      ),
      action: (
        <button className="mt-4 inline-block px-4 py-2 rounded-full bg-[#d60000] text-white hover:bg-[#b50000]">
          Start Chat
        </button>
      ),
    },
    {
      title: "Help Center",
      desc: "Browse our comprehensive FAQs, guides, and tutorials available anytime.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 2v20m-6-6h12" />
        </svg>
      ),
      action: (
        <a href="#help-center" className="mt-4 inline-block text-sm text-[#d60000] hover:underline">
          Visit Help Center
        </a>
      ),
    },
    {
      title: "Phone Support",
      desc: "Speak directly with our experts at +91-123-456-7890 for immediate help.",
      icon: (
        <svg className="w-8 h-8 text-[#d60000]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: (
        <a href="tel:+911234567890" className="mt-4 inline-block text-sm text-[#d60000] hover:underline">
          Call Now
        </a>
      ),
    },
  ];

  const faqs = [
    {
      q: "How quickly can I expect a response from support?",
      a: "Our team responds to emails within 24 hours, while live chat and phone support offer immediate assistance during business hours.",
    },
    {
      q: "Is support available for all loan types?",
      a: "Yes, our support team is equipped to assist with all loan products, including personal, business, education, home, gold, and vehicle loans.",
    },
    {
      q: "Can I get help with technical issues on the platform?",
      a: "Absolutely, our technical support team is available 24/7 to resolve any platform-related issues you may encounter.",
    },
  ];

  const testimonials = [
    {
      quote: "Fyntegra’s live chat resolved my query in minutes, making the loan process seamless!",
      author: "Priya Gupta, Customer",
    },
    {
      quote: "Their support team guided me through the application process with patience and clarity.",
      author: "Amit Sharma, SME Owner",
    },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="support" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Customer <span className="text-[#d60000]">Support</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          We’re here to assist you 24/7 with dedicated support through multiple channels, ensuring a seamless experience for all your lending needs.
        </motion.p>

        {/* Support Channels */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {channels.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{c.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
              {c.action}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Get in Touch</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
                rows="4"
              />
              <button
                onClick={handleFormSubmit}
                className="w-full px-6 py-3 bg-[#d60000] text-white rounded-lg font-semibold hover:bg-[#b50000] transition"
              >
                Submit Request
              </button>
            </div>
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
          <h3 className="text-2xl font-semibold mb-4">Need Help? We’re Here for You!</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Contact Support
            </a>
            <a
              href="#help-center"
              className="px-6 py-3 border border-[#d60000] text-[#d60000] rounded-full font-semibold hover:bg-[#d60000]/10 transition"
            >
              Visit Help Center
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
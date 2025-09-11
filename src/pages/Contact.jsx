import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [testIndex, setTestIndex] = useState(0);

  const contactDetails = [
    {
      title: "Email Us",
      desc: "support@fyntegra.com",
      icon: <Mail className="w-8 h-8 text-[#d60000]" />,
      action: (
        <a href="mailto:support@fyntegra.com" className="mt-4 inline-block text-sm text-[#d60000] hover:underline">
          Send Email
        </a>
      ),
    },
    {
      title: "Call Us",
      desc: "+91-123-456-7890",
      icon: <Phone className="w-8 h-8 text-[#d60000]" />,
      action: (
        <a href="tel:+911234567890" className="mt-4 inline-block text-sm text-[#d60000] hover:underline">
          Call Now
        </a>
      ),
    },
    {
      title: "Visit Us",
      desc: "123 Fintech Hub, Mumbai, MH 400001",
      icon: <MapPin className="w-8 h-8 text-[#d60000]" />,
      action: (
        <a href="#map" className="mt-4 inline-block text-sm text-[#d60000] hover:underline">
          View on Map
        </a>
      ),
    },
  ];

  const faqs = [
    {
      q: "How quickly can I expect a response?",
      a: "We aim to respond to all inquiries within 24 hours. For urgent issues, use our live chat or phone support.",
    },
    {
      q: "Can I contact you for loan-related queries?",
      a: "Yes, our team is ready to assist with questions about loans, eligibility, or the application process.",
    },
    {
      q: "Is my information secure when contacting you?",
      a: "Absolutely, all communications are encrypted, and we adhere to strict data privacy standards.",
    },
  ];

  const testimonials = [
    {
      quote: "Fyntegra’s support team responded to my query within hours and guided me through the loan process!",
      author: "Anita Sharma, Customer",
    },
    {
      quote: "Their team was incredibly helpful in resolving my issue quickly and professionally.",
      author: "Ravi Kumar, SME Owner",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }
    setFormStatus("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Get in <span className="text-[#d60000]">Touch</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          Have questions or need assistance? Our team is here to help you with all your lending needs, 24/7.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              />
              <input
                type="email"
                placeholder="Your Email"
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
                Send Message
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

        {/* Contact Details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {contactDetails.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{c.icon}</div>
              <h3 className="font-semibold text-[#d60000] mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{c.desc}</p>
              {c.action}
            </motion.div>
          ))}
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

        {/* Map Placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Our Location</h3>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Placeholder (123 Fintech Hub, Mumbai, MH 400001)</p>
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
          <h3 className="text-2xl font-semibold mb-4">Let’s Connect!</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="px-6 py-3 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
            >
              Send a Message
            </a>
            <a
              href="/support"
              className="px-6 py-3 border border-[#d60000] text-[#d60000] rounded-full font-semibold hover:bg-[#d60000]/10 transition"
            >
              Visit Support Center
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
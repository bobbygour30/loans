import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Get in <span className="text-green-600">Touch</span>
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Have questions? We’d love to hear from you.
        </p>

        <form className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded-md"
          ></textarea>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

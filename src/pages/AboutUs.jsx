// AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 min-h-screen mt-20">
      {/* HERO */}
      <header className="relative bg-gradient-to-br from-[#0f9d58] to-[#bfe59a] text-white py-28 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            About <span className="underline decoration-white/60">Fyntegra</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-100 max-w-2xl mx-auto"
          >
            We are reimagining financial experiences by blending AI, compliance,
            and human expertise to build trust and scale lending operations.
          </motion.p>
        </div>
      </header>

      {/* OUR STORY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={assets.team}
            alt="Our Team"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fyntegra started with a mission to bridge the gap between lenders
              and borrowers. By combining **AI-driven tools**, **compliance-first
              processes**, and **human oversight**, we empower financial
              institutions to scale faster while ensuring customer trust.
            </p>
            <p className="mt-3 text-gray-600">
              Today, we are proud to work with leading banks, NBFCs, and fintechs
              to simplify disbursals, improve collections, and enhance customer
              experiences across India.
            </p>
          </div>
        </div>
      </motion.section>

      {/* MISSION + VISION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To democratize access to credit by empowering lenders with
              compliant, tech-driven solutions that prioritize customer
              experience without compromising on governance.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be India’s most trusted **AI + Human powered lending solutions
              partner**, delivering speed, compliance, and empathy at scale.
            </p>
          </div>
        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Our Core Values</h2>
          <p className="text-gray-600 mt-2 mb-8">
            These principles guide how we work, innovate, and partner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                desc: "Compliance-first approach with full transparency.",
              },
              {
                title: "Innovation",
                desc: "AI-native solutions combined with human expertise.",
              },
              {
                title: "Customer Centricity",
                desc: "Always putting lenders & borrowers at the center.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl bg-gradient-to-tr from-white to-green-50 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TEAM */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mb-10">
            A passionate group of technologists, compliance experts, and CX
            leaders driving change in financial services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <img
                  src={assets[`person${i}`]}
                  alt="Team member"
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                />
                <h4 className="font-semibold">Team Member {i}</h4>
                <p className="text-sm text-gray-600">Role {i}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0f9d58] to-[#5cd18d] text-white p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Want to partner with us?
          </h2>
          <p className="mt-3 text-white/90">
            Join hands with Fyntegra to deliver lending solutions at scale with
            compliance, empathy, and speed.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#0f9d58] rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Contact Us
            </a>
            <a
              href="#demo"
              className="px-6 py-3 border border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition"
            >
              Request Demo
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

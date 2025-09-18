import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 min-h-screen mt-20">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-[#001935] to-[#0E8299] text-white py-28 px-6 md:px-12 overflow-hidden">
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
            Transforming financial services by integrating cutting-edge AI, robust compliance, and empathetic human expertise to empower lenders and borrowers alike.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center gap-3 flex-wrap"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-[#0E8299] rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Get in Touch
            </Link>
            <Link
              to="/partner-with-us"
              className="px-6 py-3 border border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition"
            >
              Request a Demo
            </Link>
          </motion.div>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">Our Story</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Fyntegra was born to revolutionize lending by bridging technology and trust. Our journey combines innovation, compliance, and customer focus to redefine financial experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src={assets.team}
              alt="Our Team"
              className="rounded-2xl shadow-xl w-full object-cover max-h-96"
            />
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2018, Fyntegra started with a vision to simplify lending processes for banks, NBFCs, and fintechs across India. By leveraging AI-driven automation and human expertise, we tackled inefficiencies in loan disbursals, compliance, and customer experience.
              </p>
              <p className="text-gray-600">
                Today, we partner with over 120 financial institutions, processing thousands of loans with an average disbursal time of 24 hours and an NPS of 85%. Our commitment to compliance and innovation drives us to deliver seamless, scalable solutions.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="mt-12 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-center mb-6">Our Journey</h3>
            <div className="space-y-6">
              {[
                { year: 2018, milestone: "Fyntegra founded with a mission to transform lending." },
                { year: 2020, milestone: "Launched AI-driven KYC and verification modules." },
                { year: 2022, milestone: "Partnered with 50+ banks and NBFCs across India." },
                { year: 2024, milestone: "Achieved 85% NPS and processed 5000+ loans monthly." },
                { year: 2025, milestone: "Expanded to offer omnichannel collections and analytics." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0E8299] text-white rounded-full flex items-center justify-center font-semibold">
                    {item.year}
                  </div>
                  <div className="text-gray-600">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
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
            <h3 className="text-xl font-semibold mb-3 text-[#0E8299]">Our Mission</h3>
            <p className="text-gray-600">
              To empower financial institutions with compliant, technology-driven solutions that streamline lending, enhance customer experiences, and ensure trust and transparency.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#0E8299]">Our Vision</h3>
            <p className="text-gray-600">
              To become India’s leading lending solutions partner, delivering AI-powered, human-centric platforms that redefine speed, compliance, and empathy in financial services.
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Our principles define how we innovate, collaborate, and deliver
            value to our partners and customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "Upholding the highest standards of compliance and transparency in all operations.",
                icon: <ShieldCheck className="w-8 h-8 text-[#0E8299]" />,
              },
              {
                title: "Innovation",
                desc: "Pioneering AI-driven solutions while maintaining human oversight for precision.",
                icon: <Lightbulb className="w-8 h-8 text-[#0E8299]" />,
              },
              {
                title: "Customer Centricity",
                desc: "Prioritizing the needs of lenders and borrowers to create seamless experiences.",
                icon: <Users className="w-8 h-8 text-[#0E8299]" />,
              },
              {
                title: "Collaboration",
                desc: "Fostering partnerships to drive mutual success and innovation in lending.",
                icon: <HeartHandshake className="w-8 h-8 text-[#0E8299]" />,
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl bg-gradient-to-tr from-white to-gray-100 shadow-lg"
              >
                <div className="flex justify-center mb-3">{v.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* LEADERSHIP */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">Our Leadership</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Meet the visionaries driving Fyntegra’s mission to transform lending with technology and trust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Amit Sharma",
                role: "CEO & Founder",
                desc: "With over 15 years in fintech, Amit leads Fyntegra’s vision to blend AI and human expertise.",
                image: assets.person1,
              },
              {
                name: "Priya Gupta",
                role: "CTO",
                desc: "Priya drives our AI and tech innovation, ensuring scalable and secure platforms.",
                image: assets.person2,
              },
              {
                name: "Rahul Mehra",
                role: "Head of Compliance",
                desc: "Rahul ensures our solutions meet RBI standards with robust governance.",
                image: assets.person3,
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                />
                <h4 className="font-semibold text-[#0E8299]">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* OUR IMPACT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Our Impact</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            We’re proud to make a difference in the financial ecosystem through innovation and partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[#0E8299]">120+</div>
              <p className="text-gray-600 mt-2">Banks & NBFCs partnered</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[#0E8299]">5000+</div>
              <p className="text-gray-600 mt-2">Loans processed monthly</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[#0E8299]">85%</div>
              <p className="text-gray-600 mt-2">Average NPS score</p>
            </div>
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#001935] to-[#0E8299] text-white p-10 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Partner with Fyntegra</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Join us to deliver lending solutions that combine compliance, speed, and customer-centric innovation. Let’s shape the future of finance together.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
            <button
              className="px-6 py-3 bg-white text-[#0E8299] rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Contact Us
            </button></Link>
            <Link to="/partner-with-us">
            <button
              
              className="px-6 py-3 border border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition"
            >
              Request Demo
            </button></Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
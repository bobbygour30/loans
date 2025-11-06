import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Users,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Careers() {
  const openings = [
    {
      role: "Frontend Developer",
      location: "Remote / Delhi",
      desc: "Build intuitive and responsive user interfaces using React and Tailwind CSS to enhance our lending platform.",
      icon: <Code className="w-8 h-8 text-red-600" />,
    },
    {
      role: "Backend Engineer",
      location: "Bangalore",
      desc: "Develop scalable APIs and microservices to power our AI-driven lending solutions with high performance and security.",
      icon: <Server className="w-8 h-8 text-red-600" />,
    },
    {
      role: "Customer Success Manager",
      location: "Mumbai",
      desc: "Drive client satisfaction by managing relationships and ensuring seamless adoption of our platform.",
      icon: <Users className="w-8 h-8 text-red-600" />,
    },
    {
      role: "Data Scientist",
      location: "Remote / Hyderabad",
      desc: "Leverage AI and machine learning to enhance risk models and predictive analytics for lending decisions.",
      icon: <Brain className="w-8 h-8 text-red-600" />,
    },
  ];

  const culture = [
    {
      title: "Innovation",
      desc: "We foster a culture of creativity, encouraging bold ideas to transform the financial industry.",
    },
    {
      title: "Collaboration",
      desc: "Work in cross-functional teams to solve complex challenges and deliver value to our clients.",
    },
    {
      title: "Growth",
      desc: "Continuous learning opportunities to help you grow personally and professionally.",
    },
    {
      title: "Impact",
      desc: "Be part of a mission to make lending accessible, compliant, and customer-centric.",
    },
  ];

  const perks = [
    {
      title: "Flexible Work",
      desc: "Remote and hybrid work options to balance your personal and professional life.",
    },
    {
      title: "Health Benefits",
      desc: "Comprehensive medical insurance for you and your family.",
    },
    {
      title: "Learning Support",
      desc: "Access to training programs, certifications, and conferences.",
    },
    {
      title: "Team Events",
      desc: "Regular team-building activities and company-wide celebrations.",
    },
  ];

  const testimonials = [
    {
      quote: "Working at Fyntegra has been a game-changer. The team’s passion for innovation inspires me every day.",
      author: "Neha Patel, Frontend Developer",
    },
    {
      quote: "The supportive culture and focus on growth make Fyntegra an amazing place to build a career.",
      author: "Vikram Singh, Backend Engineer",
    },
  ];

  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section id="careers" className="py-20 px-6 bg-white mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black"
        >
          Join <span className="text-red-600">Our Team</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
        >
          Be part of a mission-driven company transforming the financial industry with innovative, compliant, and customer-centric lending solutions.
        </motion.p>

        {/* Job Openings */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {openings.map((o, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:border-red-200 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{o.icon}</div>
              <h3 className="font-semibold text-black mb-2">{o.role}</h3>
              <p className="text-sm text-gray-600 mb-2">{o.location}</p>
              <p className="text-sm text-gray-600 mb-4">{o.desc}</p>
              <Link
                to="/apply"
                className="inline-block px-5 py-2.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Culture */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">Our Culture</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {culture.map((c, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-tr from-white to-red-50 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition"
              >
                <h4 className="font-semibold text-red-600 mb-2">{c.title}</h4>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Perks and Benefits */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">Perks & Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-red-200 transition"
              >
                <h4 className="font-semibold text-red-600 mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-black">What Our Team Says</h3>
          <div className="relative">
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

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-black">Ready to Make an Impact?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Openings
            </Link>
            <Link
              to="#contact"
              className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Contact HR
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
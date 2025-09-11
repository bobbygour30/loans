import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  ServerCog,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyFyntegra() {
  const features = [
    {
      title: "AI + Human Expertise",
      desc: "Our platform combines advanced AI algorithms for efficient processing with human oversight to ensure empathy and accuracy in every interaction.",
      icon: <BrainCircuit className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Compliance First",
      desc: "Built with RBI-aligned governance, including end-to-end audit trails, secure data flows, and regulatory reporting to minimize risks.",
      icon: <ShieldCheck className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Scalable Solutions",
      desc: "Modular, API-first architecture that grows with your business, supporting from 10 to 1000+ operations with consistent SLAs.",
      icon: <ServerCog className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Customer-Centric Design",
      desc: "Focused on improving NPS through seamless onboarding, faster disbursals, and personalized collections strategies.",
      icon: <Users className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Fast Integrations",
      desc: "Plug-and-play modules and APIs that reduce time-to-market, enabling quick go-live for new lending programs.",
      icon: <Zap className="w-8 h-8 text-[#d60000]" />,
    },
    {
      title: "Data-Driven Insights",
      desc: "Advanced analytics and reporting tools for predictive nudges, lead scoring, and performance optimization.",
      icon: <BarChart3 className="w-8 h-8 text-[#d60000]" />,
    },
  ];

  const stats = [
    { value: "120+", label: "Banks & NBFCs" },
    { value: "5000+", label: "Loans Processed" },
    { value: "85%", label: "Avg NPS" },
    { value: "24h", label: "Avg Disbursal Time" },
  ];

  const testimonials = [
    {
      quote: "Fyntegra transformed our lending operations with seamless AI integration and top-notch compliance.",
      author: "Director of CX, National Bank",
    },
    {
      quote: "Their scalable solutions helped us grow without compromising on customer experience.",
      author: "VP Collections, NBFC",
    },
  ];

  return (
    <section id="why" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Why Choose <span className="text-[#d60000]">Fyntegra?</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-center"
        >
          We blend enterprise-grade operations with agile, customer-focused innovation. Large enough to deliver at scale, agile enough to care about every detail—from compliance to customer satisfaction.
        </motion.p>

        {/* Expanded Features */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{f.title}</h3>
              <p className="text-gray-600 text-center">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Proven Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
                <div className="text-3xl font-extrabold text-[#d60000]">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            These metrics showcase our commitment to efficiency, satisfaction, and scale in lending operations.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                <div className="font-semibold text-[#d60000]">{t.author}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Benefits</h3>
          <ul className="max-w-3xl mx-auto space-y-4 text-left text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-[#d60000]">•</span>
              <span>Seamless API integrations for reduced onboarding time and lower drop-offs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d60000]">•</span>
              <span>Omnichannel customer engagement for higher recovery rates and satisfaction.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d60000]">•</span>
              <span>Customizable dashboards for real-time insights and decision-making.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d60000]">•</span>
              <span>Dedicated support teams ensuring operational excellence and quick resolutions.</span>
            </li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#d60000] text-white rounded-full font-semibold shadow hover:bg-[#b50000] transition"
          >
            Get Started with Fyntegra Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  BrainCircuit,
  ServerCog,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyFyntegra() {
  const features = [
    {
      title: "RBI-Compliant LSP Framework",
      desc: "End-to-end governance aligned with RBI regulations, ensuring audit-ready operations at all times.",
      icon: <ShieldCheck className="w-10 h-10 text-[#0E8299]" />,
    },
    {
      title: "Proven Fintech Leadership",
      desc: "20+ years of experience building and scaling fintech solutions trusted by leading BFSI players.",
      icon: <Award className="w-10 h-10 text-[#0E8299]" />,
    },
    {
      title: "AI + Human Hybrid Delivery",
      desc: "Blending AI-powered automation with human oversight to balance efficiency with empathy.",
      icon: <BrainCircuit className="w-10 h-10 text-[#0E8299]" />,
    },
    {
      title: "Scalable Infra",
      desc: "Presence in 59 cities with 20,000+ seats through Konexions, built for growth and reliability.",
      icon: <ServerCog className="w-10 h-10 text-[#0E8299]" />,
    },
    {
      title: "Transparent Governance",
      desc: "SLA-driven outcomes with full visibility and accountability across all operations.",
      icon: <Scale className="w-10 h-10 text-[#0E8299]" />,
    },
  ];

  return (
    <section id="why-fyntegra" className="py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Why Partners Choose <span className="text-[#0E8299]">Fyntegra</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#0E8299] text-white rounded-full font-semibold shadow  transition"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

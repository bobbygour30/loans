import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Grievance() {
  const escalationFlow = [
    {
      level: "Level 1",
      contact: "Support Desk",
      email: "support@fyntegra.in",
    },
    {
      level: "Level 2",
      contact: "Escalations Team",
      email: "escalations@fyntegra.in",
    },
    {
      level: "Level 3",
      contact: "Grievance Officer",
      email: "grievance@fyntegra.in",
    },
  ];

  const policies = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Cookie Policy", link: "/cookies" },
    { name: "Customer Charter", link: "/customer-charter" },
  ];

  return (
    <section className="py-20 px-6 bg-white mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black"
        >
          Grievance Redressal & Regulatory{" "}
          <span className="text-red-600">Disclosures</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Fyntegra is committed to transparent governance and regulatory
          compliance. Below are our Grievance Officer details, escalation
          process, and mandatory disclosures as an RBI-registered LSP.
        </motion.p>

        {/* GRO Details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Grievance Redressal Officer (GRO)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-600" />
              <span>Email: grievance@fyntegra.in</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-600" />
              <span>Phone: +91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Address: [To be added]</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-red-600" />
              <span>Name: [To be added]</span>
            </div>
          </div>
        </motion.div>

        {/* Escalation Flow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Escalation Flow
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {escalationFlow.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-100 w-72 text-center hover:shadow-xl hover:border-red-200 transition"
              >
                <div className="text-red-600 font-bold">{step.level}</div>
                <div className="text-black mt-2 font-medium">{step.contact}</div>
                <a
                  href={`mailto:${step.email}`}
                  className="text-sm text-red-600 mt-2 hover:underline"
                >
                  {step.email}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TAT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">Resolution Timelines</h2>
          <p className="text-gray-600">
            Acknowledgement within{" "}
            <span className="font-semibold text-red-600">48 hours</span> & full
            resolution within{" "}
            <span className="font-semibold text-red-600">30 days</span>.
          </p>
        </motion.div>

        {/* Disclosure */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
        >
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <ShieldCheck className="inline w-6 h-6 text-red-600 mr-2" />
            Fyntegra operates as a Lending Service Provider (LSP) under RBI
            guidelines, partnering with NBFCs & Banks to deliver compliant and
            customer-centric services.
          </p>
        </motion.div>

        {/* Policies */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black">Policies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {policies.map((p, i) => (
              <a
                key={i}
                href={p.link}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition"
              >
                <FileText className="w-5 h-5 text-red-600" />
                {p.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
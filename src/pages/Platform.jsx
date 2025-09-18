// Platform.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  UserCheck,
  Key,
  BarChart3,
  Activity,
  MapPin,
  PieChart,
  Bell,
  FileText,
  FileSearch,
  DollarSign,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Bot,
  MessageSquare,
  Headphones,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const accent = "text-[#0E8299]";
const circleAccent = "bg-[#0E8299]";

const panelVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.18 } },
};

export default function Platform() {
  const [openIndex, setOpenIndex] = useState(1); // default open Dashboard section

  const sections = [
    {
      id: "login-access",
      title: "Login & Access",
      intro: "Authentication, roles and audit controls to secure platform access.",
      points: [
        { title: "Role-based access controls", desc: "Granular permissions for admins, ops, agents and auditors." },
        { title: "2FA & SSO options", desc: "Multi-factor, SAML/OIDC SSO connectors, and mobile 2FA." },
        { title: "Full audit logging", desc: "Immutable logs for every login & action; exportable for audits." },
      ],
      icon: <Lock className="w-5 h-5 text-white" />,
    },
    {
      id: "dashboard-landing",
      title: "Dashboard",
      intro: "A single landing view that summarizes CX, Collections, Compliance and SaaS usage.",
      points: [
        { title: "CX Performance Widget", desc: "Conversion funnel, CSAT, onboarding TAT — quick drilldowns." },
        { title: "Collections Tracker", desc: "DPD buckets, promises-to-pay (PTP), recovery heatmap and trends." },
        { title: "Compliance Health", desc: "KYC completion %, audit scores, active GRO cases." },
        { title: "SaaS Usage", desc: "Active bot licenses, containment %, utilization & seat counts." },
        { title: "Alerts / Notifications", desc: "Fraud alerts, SLA breaches and escalations with ACK workflows." },
      ],
      icon: <BarChart3 className="w-5 h-5 text-white" />,
    },
    {
      id: "reports",
      title: "Reports",
      intro: "Operational & regulatory reporting baked into the platform.",
      points: [
        { title: "Operational Reports", desc: "Lead drop-offs, agent productivity, seat utilization charts." },
        { title: "Financial Reports", desc: "Cost per loan, ROI, revenue per seat and AUM overview." },
        { title: "Compliance Reports", desc: "KYC logs, AML alerts, RBI audit trails and GRO complaint logs." },
        { title: "AI SaaS Reports", desc: "Bot resolution %, FCR impact, deflection & containment metrics." },
      ],
      icon: <FileText className="w-5 h-5 text-white" />,
    },
    {
      id: "compliance-module",
      title: "Compliance Module",
      intro: "Governance-first workflows and audit readiness.",
      points: [
        { title: "Audit Dashboard", desc: "RBI compliance checklist with status and remediation tasks." },
        { title: "KYC Reports", desc: "Aadhaar, PAN, Video-KYC logs and time-to-complete metrics." },
        { title: "Fraud Alerts", desc: "AML triggers, sanction-list hits and velocity checks with workflows." },
      ],
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
    {
      id: "saas-tools",
      title: "SaaS Tools Panel",
      intro: "Turnkey automation & orchestration for CX and recovery.",
      points: [
        { title: "WhatsApp Bot", desc: "Customer nudges, reminders, OTPs & payment links." },
        { title: "Ticket Automation", desc: "GenAI auto-triage & suggested replies to speed resolution." },
        { title: "ORM Desk", desc: "Social escalation management and brand-monitoring streams." },
      ],
      icon: <Bot className="w-5 h-5 text-white" />,
    },
    {
      id: "support",
      title: "Support (Built-In)",
      intro: "Help & escalation flows embedded in the platform.",
      points: [
        { title: "Raise Ticket", desc: "Internal + partner ticketing with SLA and escalation routing." },
        { title: "Live Chat", desc: "AI first-line chat with one-click escalation to human agents." },
        { title: "Knowledge Base", desc: "FAQs, SOPs and compliance guides for agents & auditors." },
      ],
      icon: <Headphones className="w-5 h-5 text-white" />,
    },
  ];

  const handleToggle = (idx) => setOpenIndex((v) => (v === idx ? null : idx));

  return (
    <section className="bg-gray-50 py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT: Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                The <span className="text-[#0E8299]">Fyntegra LSP Platform</span>
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Secure, modular, API-first dashboard that integrates loan sourcing,
                CX, collections, and compliance in one place.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/partner-with-us"
                className="inline-flex items-center px-4 py-2 bg-[#0E8299] text-white rounded-md text-sm font-semibold shadow-sm hover:brightness-95 transition"
              >
                Request Demo
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-5">
            {sections.map((sec, idx) => (
              <div key={sec.id} className="bg-white rounded-lg shadow-sm border">
                <div
                  className="flex items-center justify-between p-5 cursor-pointer"
                  role="button"
                  aria-expanded={openIndex === idx}
                  onClick={() => handleToggle(idx)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-md ${circleAccent} shadow-sm flex items-center justify-center`}>
                      {sec.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{sec.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{sec.intro}</p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    <span className="sr-only">Toggle details</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      key="content"
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      variants={{
                        hidden: { height: 0, opacity: 0 },
                        show: { height: "auto", opacity: 1, transition: { duration: 0.28 } },
                        exit: { height: 0, opacity: 0, transition: { duration: 0.18 } },
                      }}
                      className="px-6 pb-6"
                    >
                      <div className="grid gap-4 md:grid-cols-2 mt-3">
                        {sec.points.map((p, i) => (
                          <div key={i} className="p-4 rounded-lg border border-gray-100 bg-white">
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0 mt-1">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gray-100 text-[#0E8299]">
                                  <CheckCircle className="w-4 h-4" />
                                </span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-800">{p.title}</div>
                                <div className="text-sm text-gray-600 mt-1">{p.desc}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/partner-with-us"
              className="inline-flex items-center px-5 py-3 bg-[#0E8299] text-white rounded-md font-semibold shadow hover:brightness-95 transition"
            >
              Book a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition"
            >
              Contact Sales
            </Link>
            <span className="ml-auto text-sm text-gray-500">Need a quick walk-through? We do 20–30min demos.</span>
          </div>
        </div>

        {/* RIGHT: Sticky Dashboard Preview */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-5">
            {/* CX Widget */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-[#0E8299]"><BarChart3 className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">CX Performance</div>
                    <div className="text-xs text-gray-500">Conversion | CSAT | TAT</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Live</div>
              </div>

              <div className="mt-3 space-y-2">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-[#0E8299]" style={{ width: "72%" }} />
                </div>
                <div className="text-xs text-gray-600">Onboarding TAT: 18 hrs · CSAT: 4.2/5</div>
              </div>
            </div>

            {/* Collections Tracker */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-[#0E8299]"><Activity className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Collections Tracker</div>
                    <div className="text-xs text-gray-500">DPD buckets & PTP</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Updated</div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
                <div>
                  <div className="text-sm font-bold">0–7</div>
                  <div className="text-gray-500">32%</div>
                </div>
                <div>
                  <div className="text-sm font-bold">8–30</div>
                  <div className="text-gray-500">14%</div>
                </div>
                <div>
                  <div className="text-sm font-bold">30+</div>
                  <div className="text-gray-500">6%</div>
                </div>
              </div>
            </div>

            {/* Compliance Health */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-[#0E8299]"><ShieldCheck className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Compliance Health</div>
                    <div className="text-xs text-gray-500">KYC %, Audit score, GRO</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Real-time</div>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-[#0E8299]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">KYC completion</div>
                  <div className="text-xs text-gray-600">92% complete · Audit score: A</div>
                </div>
              </div>
            </div>

            {/* SaaS Usage */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-[#0E8299]"><Bot className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">SaaS Usage</div>
                    <div className="text-xs text-gray-500">Bots · Containment % · Seats</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Metric</div>
              </div>

              <div className="mt-2 space-y-2 text-xs text-gray-600">
                <div>Active bot licenses: <span className="font-semibold text-gray-800">24</span></div>
                <div>Containment: <span className="font-semibold text-gray-800">58%</span></div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-[#0E8299]"><AlertCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Alerts</div>
                    <div className="text-xs text-gray-500">Fraud · SLA · Escalations</div>
                  </div>
                </div>
                <div className="text-xs text-red-600 font-semibold">3 pending</div>
              </div>

              <ul className="mt-2 text-xs text-gray-600 space-y-2">
                <li>Suspicious AML match · Review required</li>
                <li>SLA breach: onboarding TAT · 1 hour</li>
                <li>GRO complaint pending · escalate</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

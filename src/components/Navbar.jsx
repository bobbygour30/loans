import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/why-fyntegra", label: "Why Fyntegra" },
    { href: "/platform", label: "Platform" },
    { href: "/loans", label: "Loans" },
    { href: "/solutions", label: "Solutions" },
    { href: "/eligibility", label: "Eligibility" },
    { href: "/emi-calculator", label: "EMI Calculator" },
    { href: "/support", label: "Support" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
      <div className="px-6 flex items-center justify-between  h-20 sm:justify-evenly">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="relative group transition-colors duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <button className="px-5 py-2 bg-[#deeea5] cursor-pointer text-gray-900 rounded-full hover:bg-[#28af5b] hover:scale-105 transition duration-300">
              Apply Now
            </button>
          </li>
          <li>
            <button className="px-5 py-2 bg-green-600 cursor-pointer text-white rounded-full hover:bg-green-700 hover:scale-105 transition duration-300">
              Partner With Us
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg flex flex-col space-y-4 p-6 text-gray-800 font-medium"
          >
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full px-4 py-2 bg-[#deeea5] text-gray-900 rounded-full hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">
                Apply Now
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-transform duration-300 hover:scale-105">
                Partner With Us
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

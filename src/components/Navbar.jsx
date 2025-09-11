import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

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

  // Detect scroll for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) { // Mobile breakpoint
        if (window.scrollY > 100) { // Show after scrolling 100px
          setIsMobileMenuVisible(true);
        } else {
          setIsMobileMenuVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApplyClick = () => {
    if (mobileNumber) {
      alert(`Loan application started with mobile number: ${mobileNumber}`);
      setMobileNumber(""); // Clear input after submission
    } else {
      alert("Please enter a mobile number.");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
        <div className="px-6 flex items-center justify-between h-20 sm:justify-evenly">
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
                <Link
                  to={link.href}
                  className="relative group transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d60000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/apply">
                <button className="px-5 py-2 bg-[#d60000] cursor-pointer text-white rounded-full hover:bg-red-700 hover:scale-105 transition duration-300">
                  Apply Now
                </button>
              </Link>
            </li>
            <li>
              <Link to="/partner-with-us">
                <button className="px-5 py-2 bg-[#444242] cursor-pointer text-white rounded-full hover:bg-gray-900 hover:scale-105 transition duration-300">
                  Partner With Us
                </button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button className="px-5 py-2 bg-[#d60000] cursor-pointer text-white rounded-full hover:bg-gray-800 hover:scale-105 transition duration-300">
                  Sign Up
                </button>
              </Link>
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
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/apply">
                  <button className="w-full px-4 py-2 bg-[#d60000] text-white rounded-full hover:bg-yellow-500 transition-transform duration-300 hover:scale-105">
                    Apply Now
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/partner-with-us">
                  <button className="w-full px-4 py-2 bg-[#2e2e2e] text-white rounded-full hover:bg-gray-800 transition-transform duration-300 hover:scale-105">
                    Partner With Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/sign-up">
                  <button className="w-full px-4 py-2 bg-[#d60000] text-white rounded-full hover:bg-gray-800 transition-transform duration-300 hover:scale-105">
                    Sign Up
                  </button>
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom Menu (Scroll-triggered) */}
      <AnimatePresence>
        {isMobileMenuVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 backdrop-blur-md shadow-lg p-4 z-40"
          >
            <p className="text-white text-center mb-2">Need Cash? Get up to 5 Lakhs instantly</p>
            <div className="flex items-center gap-2 w-full">
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile"
                className="p-2 border rounded-lg w-full text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000]"
              />
              <button
                onClick={handleApplyClick}
                className="px-3 py-2 w-1/2 bg-[#d60000] text-white rounded text-sm hover:bg-red-700"
              >
                Apply Now
              </button>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;